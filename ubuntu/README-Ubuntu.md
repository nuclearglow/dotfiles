# dotfiles

General Infos
https://wiki-ubuntuusers.de

Setup with Tools
https://dev.to/brpaz/my-linux-development-environment-of-2018-ch7
https://github.com/brpaz/my-linux-setup

Ulauncher
sudo add-apt-repository "ppa:agornostal/ulauncher"
sudo apt-get update
sudo apt-get install ulauncher

Peek
https://github.com/phw/peek#ubuntu

Caffeine
sudo add-apt-repository ppa:caffeine-developers/ppa
sudo apt-get update
sudo apt-get install caffeine

Code
https://code.visualstudio.com/

Command Line
https://darrenburns.net/posts/tools

# zsh

## install and make default

https://wiki.ubuntuusers.de/Zsh/
https://askubuntu.com/questions/131823/how-to-make-zsh-the-default-shell

## oh-my-zsh

https://github.com/ohmyzsh/ohmyzsh

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## powerlevel10k
https://github.com/romkatv/powerlevel10k

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

## setup dotfiles

```shell
git clone git@github.com:nuclearglow/dotfiles.git
./dotfiles/ubuntu/configure_zsh.sh
```

## conda completion plugin

```shell
git clone https://github.com/esc/conda-zsh-completion ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/conda-zsh-completion
```

# docker setup

Build image

```shell
docker build -t ubuntu-base-nuky .
```

Open zsh on container

```shell
docker run --hostname=ubuntu-base-nuky -it ubuntu-base-nuky zsh
```

## Apple Keyboard Support

Tweaks:
Misc compat options:
	Apple Aluminium: Emulate PC keys
Keys to choose 3rd level:
	Right Alt
Swap < and ^:
	echo 0 | sudo tee /sys/module/hid_apple/parameters/iso_layout
	und permanently:
	echo options hid_apple iso_layout=0 | sudo tee -a /etc/modprobe.d/hid_apple.conf

sudo apt-get install console-data
sudo apt-get install console-setup
sudo apt-get install console-locales
sudo apt-get install keyboard-configuration
sudo dpkg-reconfigure keyboard-configuration
