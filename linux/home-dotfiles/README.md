* Install all necessary packages
* Copy the files from here to $HOME
* Copy rest of the files from .. to $HOME

After installing all tools:

```shell
ln -vfns /home/nuky/workspace/dotfiles/linux/.aliases .aliases
ln -vfns /home/nuky/workspace/dotfiles/linux/.exports .exports
ln -vfns /home/nuky/workspace/dotfiles/linux/.keys .functions
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