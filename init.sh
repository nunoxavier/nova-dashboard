#!/bin/bash

node ./server.js &
echo "Waiting for server"
while ! nc -z localhost 8080; do
  sleep 0.1
done
echo "Server is up!"
[[ -z $DISPLAY && $XDG_VTNR -eq 1 ]] && startx -- -nocursor
