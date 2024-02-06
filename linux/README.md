# Linux Desktop

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

## fzf

- [Installation](https://github.com/junegunn/fzf?tab=readme-ov-file#using-git)

```shell
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
```

## zsh

### install and make default

https://wiki.ubuntuusers.de/Zsh/
https://askubuntu.com/questions/131823/how-to-make-zsh-the-default-shell

### oh-my-zsh

https://github.com/ohmyzsh/ohmyzsh

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### powerlevel10k

https://github.com/romkatv/powerlevel10k

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

### setup dotfiles from `linux/`

```shell
git clone git@github.com:nuclearglow/dotfiles.git
```

- Copy the files from here to $HOME
- Copy rest of the files from .. to $HOME

After installing all tools:

```shell
ln -vfns /home/nuky/workspace/dotfiles/linux/.alacritty.yml .alacritty.yml
ln -vfns /home/nuky/workspace/dotfiles/linux/.aliases .aliases
ln -vfns /home/nuky/workspace/dotfiles/linux/.exports .exports
ln -vfns /home/nuky/workspace/dotfiles/linux/.functions .functions
ln -vfns /home/nuky/workspace/dotfiles/linux/.fzf.zsh .fzf.zsh
ln -vfns /home/nuky/workspace/dotfiles/linux/.keys .keys
ln -vfns /home/nuky/workspace/dotfiles/linux/.p10k.zsh .p10k.zsh
ln -vfns /home/nuky/workspace/dotfiles/linux/.tmux.conf .tmux.conf
ln -vfns /home/nuky/workspace/dotfiles/linux/.tmux.conf.local .tmux.conf.local
```

Choose correct zshrc:

```shell
ln -vfns /home/nuky/workspace/dotfiles/linux/.zshrc-* .zshrc
```

### install completions from .zshrc plugin list urls
