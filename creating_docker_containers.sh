#!/bin/bash

# Setup instructions for new containers of different types

# Packages:
  # nano
  # vim
  # tmux
  # docker
  # nano
  # git
  # curl
  # wget
  # iproute2
  # net-tools
  # build-essential
  # glibc

# Ubuntu

su -
apt-get update && apt-get install sudo -y

sudo apt-get update
sudo apt-get install git curl nano build-essential

# Alpine

docker run -it --name my-alpine alpine sh

cd ~
echo "include /usr/share/nano/*.nanorc" > .nanorc

mkdir app

apk update
apk add nano nano-syntax build-base

# apk add python3 py3-pip

cd app