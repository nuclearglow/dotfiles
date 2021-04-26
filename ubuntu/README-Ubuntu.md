# dotfiles

General Infos
https://wiki-ubuntuusers.de

## All sources.list files -> `sources/`

## Get all installed Ubuntu packages

`installed-ubuntu-packages.txt`

Created with:

```
dpkg --get-selections > ~/workspace/dotfiles/ubuntu/installed-ubuntu-packages.txt
```

Or better use apt-clone:

https://askubuntu.com/questions/17823/how-to-list-all-installed-packages

```
sudo apt-get install apt-clone
sudo apt-clone clone path-to/apt-clone-state-ubuntu-$(lsb_release -sr)-$(date +%F).tar.gz
```

restore:
`sudo apt-get install apt-clone`
`sudo apt-clone restore path-to/apt-clone-state-ubuntu.tar.gz`

to newer release
`sudo apt-get install apt-clone`
`sudo apt-clone restore-new-distro path-to/apt-clone-state-ubuntu.tar.gz $(lsb_release -sc)`

## Some important tools:

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

### install completions from .zshrc plugin list urls

# docker setup

Build image

```shell
docker build -t ubuntu-base-nuky .
```

Open zsh on container

```shell
docker run --hostname=ubuntu-base-nuky -it ubuntu-base-nuky zsh
```
