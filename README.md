# NOVA Dashboard

## Commands:

- `yarn start` - start development server in [http://localhost:3000](http://localhost:3000)
- `yarn build` - Builds the app for production to the `build` folder for the best performance.


# Setup NOVA Dashboard on Raspberry PI 3

## Parts List

- Raspberry Pi 3
- Heatsinks - (keep that CPU cooler)
- Screen - todo: defined which screen
- DC-DC converter (12v input to 5v usb) - Power Pi in the car
- [Powerblock for safe power on and power off](http://powerblock.petrockblock.com/)


## Pi setup

### Get the OS image installed
1. Download [RASPBERRY PI OS LITE](https://www.raspberrypi.org/downloads/) onto micro SD card.
2. Put SD card in Raspberry Pi, connect HDMI and keyboard

### Initial Configuration

- Boot Rasperry PI and login with `user: pi` and `password: raspberry`
- Run `sudo iwlist wlan0 scan` to find wireless networks
- Run `sudo nano /etc/wpa_supplicant/wpa_supplicant.conf` and add at the bottom of the file the following:
  ```
  country=PT
  network={
    ssid="HOMELAN2"
    psk="qwerty123456"
  }
  ```
- Save and reboot `sudo reboot`
- Run `ifconfig wlan0` and should see it connected to the wireless network
- Run `sudo raspi-config`
- Go to **Interface Options** -> Enable SSH
- Go to **System Options** -> **Hostname** -> Write `novadash`
- Save and reboot

### We're now able to connect through SSH  

- On main computer run `ssh pi@IP` and `password: raspberry`
- Run `sudo raspi-config`
- Go to **System Options** -> **Boot / Auto Login** -> **Console Autologin**
- Go to **System Options** -> **Network at Boot** -> **NO**
- Save and reboot
- Update everything `sudo apt-get -y update && sudo apt-get -y upgrade ; sudo apt-get autoremove` - this will take a while
- Reboot `sudo reboot`

### Setup Video driver

#### This will setup the video driver along with chromium browser

- Run `sudo apt-get install libgl1-mesa-dri`
- Run `sudo raspi-config`
- Go to **Advanced Options** -> **A7: GL Driver** -> **GL (Fake KMS)**
- Reboot `sudo reboot`

#### Chromium and x11 setup

The bare minimum we need are X server and window manager. Let’s install just that:

- Run `sudo apt-get install --no-install-recommends xserver-xorg x11-xserver-utils xinit openbox`
- Run `sudo apt-get install --no-install-recommends chromium-browser`

#### Configure xserver / Chromium

openbox is now installed; let's make it so our window's manager starts up chromium (auto start stuff comes later)

- Edit file `sudo nano /etc/xdg/openbox/autostart`
```
# Disable any form of screen saver / screen blanking / power management
xset s off
xset s noblank
xset -dpms

# Allow quitting the X server with CTRL-ATL-Backspace
setxkbmap -option terminate:ctrl_alt_bksp

# Start Chromium in kiosk mode
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' ~/.config/chromium/'Local State'
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/; s/"exit_type":"[^"]\+"/"exit_type":"Normal"/' ~/.config/chromium/Default/Preferences
chromium-browser --kiosk --disable-overscroll-edge-effect --disable-sync --disable-suggestions-ui --disable-signin-promo  --mmal-frame-copy --mmal-frame-buffers=4 --ignore-gpu-blacklist --enable-native-gpu-memory-buffers --start-maximized --disable-infobars 'http://localhost:8080'
```

- Example only: To start chromium now: type  `startx -- -nocursor`
- Example only: To quit chromium/x server - hit `Ctrl-Alt-Backspace`


### Forcing monitor resolutions

1. Run `sudo nano /boot/config.txt` -> find, uncomment and set:
```
framebuffer_width=800
framebuffer_width-480
```

### Install NodeJS

- Run `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
- Run `sudo apt-get install -y nodejs`
- Run `sudo npm install --global yarn`

### Setup project

- Run `sudo apt-get install git`
- Run `git clone https://github.com/nunoxavier/nova-dashboard.git`
- Run `cd nova-dashboard`
- Run `cp init.sh /etc/init.d/init-server.sh && chmod +x /etc/init.d/init-server.sh` to make start up directly into browser
- Run `yarn install --production=true`


## MAKE A BACKUP

Now that we have installed most of the required OS stuff....LET'S MAKE A BACKUP!

* [https://www.raspberrypi.org/magpi/back-up-raspberry-pi/](https://www.raspberrypi.org/magpi/back-up-raspberry-pi/)
* From your mac: `sudo dd bs=4m if=/dev/rdisk2 of=someCoolBackupName.img`
