# TMUX Setup

## Arch

```shell
sudo pacman -S tmux
cd
git clone https://github.com/gpakosz/.tmux.git
mkdir ~/.config/tmux
cd ~/.config/tmux
ln -vfns ~/workspace/dotfiles/linux/tmux/arch/tmux.conf.local tmux.conf.local
ln -vfns /home/nuky/.tmux/.tmux.conf tmux.conf
```

## PopOS

```shell
sudo apt install tmux
```

Install

```shell
ln -vfns /home/nuky/workspace/dotfiles/linux/tmux/.config/tmux.conf ~/.config/tmux.conf
ln -vfns /home/nuky/workspace/dotfiles/linux/tmux/.config/tmux.conf.local ~/.config/tmux.conf.local
cd ~/.tmux/resurrect && ln -s resurrect_file.txt last
```
