# update installer scripts
~/bin/save-code-extensions.sh
# Homebrew
brew bundle dump --global -f
cp ~/Brewfile ~/workspace/dotfiles
# ~/bin folder
cp ~/bin/*.sh ~/workspace/dotfiles/bin
cp -R ~/bin/git-aware-prompt ~/workspace/dotfiles/bin/
zip -r ~/workspace/dotfiles/bin/OpeniTermTab.app.zip ~/bin/OpeniTermTab.app
cp -R ~/iterm-settings ~/workspace/dotfiles
# vscode
cp ~/Library/Application\ Support/Code/User/*.json ~/workspace/dotfiles/Library/Application\ Support/Code/User/
cp -R ~/Library/Application\ Support/Code/User/snippets ~/workspace/dotfiles/Library/Application\ Support/Code/User/
# dotfiles
cp ~/.macos ~/workspace/dotfiles
cp ~/.bash_profile ~/workspace/dotfiles
cp ~/.gitignore ~/workspace/dotfiles
cp ~/.gitk ~/workspace/dotfiles
cp ~/.nvmrc ~/workspace/dotfiles
cp ~/.vimrc ~/workspace/dotfiles
cp ~/.wgetrc ~/workspace/dotfiles
cp ~/.aliases ~/workspace/dotfiles
cp ~/.functions ~/workspace/dotfiles
