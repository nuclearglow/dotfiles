#!/usr/bin/env zsh

cd $HOME

cp $HOME/dotfiles/ubuntu/.gitconfig $HOME
cp $HOME/dotfiles/ubuntu/.keys $HOME
cp $HOME/dotfiles/ubuntu/.functions $HOME
cp $HOME/dotfiles/ubuntu/.extras $HOME
cp $HOME/dotfiles/ubuntu/.aliases $HOME
cp $HOME/dotfiles/ubuntu/.exports $HOME
cp $HOME/dotfiles/ubuntu/.fzf.zsh $HOME
cp $HOME/dotfiles/ubuntu/.p10k.zsh $HOME
cp $HOME/dotfiles/ubuntu/.zshrc $HOME

mkdir $HOME/bin
cp $HOME/dotfiles/ubuntu/bin/* $HOME/bin
