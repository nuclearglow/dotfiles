# TMUX Setup

Retired: replaced by [herdr](../../linux/herdr/README.md). Kept for reference.

## Arch

```shell
sudo pacman -S tmux
cd
git clone https://github.com/gpakosz/.tmux.git
mkdir ~/.config/tmux
cd ~/.config/tmux
ln -vfns ~/workspace/dotfiles/archive/tmux/arch/tmux.conf.local tmux.conf.local
ln -vfns /home/nuky/.tmux/.tmux.conf tmux.conf
```

## PopOS

```shell
sudo apt install tmux
```

Install

```shell
ln -vfns /home/nuky/workspace/dotfiles/archive/tmux/popos/tmux.conf ~/.config/tmux.conf
ln -vfns /home/nuky/workspace/dotfiles/archive/tmux/popos/tmux.conf.local ~/.config/tmux.conf.local
cd ~/.tmux/resurrect && ln -s resurrect_file.txt last
```
