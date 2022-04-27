# dotfiles

General Infos
https://wiki-ubuntuusers.de

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
```

TODO:
set up the sourcings: - maybe also softlinks?

```

```

TODO:
set up the softlinks for tmux

```

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
