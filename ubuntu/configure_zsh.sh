#!/usr/bin/env zsh

cd $HOME

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

git clone git@github.com:nuclearglow/dotfiles.git

cp $HOME/dotfiles/ubuntu/.functions $HOME
cp $HOME/dotfiles/ubuntu/.extras $HOME
cp $HOME/dotfiles/ubuntu/.aliases $HOME
cp $HOME/dotfiles/ubuntu/.exports $HOME
cp $HOME/dotfiles/ubuntu/.p10k.zsh $HOME
cp $HOME/dotfiles/ubuntu/.zshrc $HOME
cp -R $HOME/dotfiles/ubuntu/bin $HOME
