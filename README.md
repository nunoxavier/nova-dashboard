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
- Run `sudo raspi-config`
- Go to **Localisation Options** -> **WLAN Country** -> Select PT Portugal
- Go to **System Options** -> **Wireless LAN** -> SSID: `HOMELAN2` PASSWORD: `qwerty123456`
- Go to **Interface Options** -> Enable SSH
- Go to **System Options** -> **Hostname** -> Write `novadash`
- Finish / Save and reboot `sudo reboot`

### We're now able to connect through SSH (`ifconfig wlan0`)

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

#### Auto Start Server

1. Edit file `sudo nano /home/pi/.bash_profile`
```
cd ~/nova-dashboard && bash init.sh
```

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
- Run `chmod +x init.sh`
- Run `yarn install --production=true`
