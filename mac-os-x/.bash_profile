#!/usr/bin/env bash

# Mac OS X shell startup

# UTF-8
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# arch
export ARCHFLAGS="-arch x86_64"

# standard editor
export EDITOR=vim

# Don't check mail when opening terminal.
unset MAILCHECK

# Set this to false to turn off version control status checking within the prompt for all themes
export SCM_CHECK=true

### Bash It
export BASH_IT=~/.bash_it
source $BASH_IT/bash_it.sh

### shopts ###

# Globstar support (bash 4.x)
#shopt -s globstar;

# Case-insensitive globbing (used in pathname expansion)
shopt -s nocaseglob;

# Append to the Bash history file, rather than overwriting it
shopt -s histappend;

# Autocorrect typos in path names when using `cd`
shopt -s cdspell;

### Custom Dotfiles ###

# Load the shell dotfiles, and then some:
# * ~/.exports can be used to extend `$PATH`.
# * ~/.aliases can be used for aliases
# * ~/.functions can be used for custom bash scripts
# * ~/.extras can be used for other settings you don’t want to commit.
for file in ~/.{exports,aliases,functions,extras}; do
    [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

### SSH ###
# Launch SSH agent if not running
if ! ps aux |grep $(whoami) |grep ssh-agent |grep -v grep >/dev/null; then ssh-agent ; fi
if [[ -S "$SSH_AUTH_SOCK" && ! -h "$SSH_AUTH_SOCK" ]]; then
    ln -sf "$SSH_AUTH_SOCK" ~/.ssh/ssh_auth_sock;
fi
export SSH_AUTH_SOCK=${HOME}/.ssh/ssh_auth_sock;


# Add tab completion for SSH hostnames based on ~/.ssh/config, ignoring wildcards
[ -e "$HOME/.ssh/config" ] && complete -o "default" -o "nospace" -W "$(grep "^Host" ~/.ssh/config | grep -v "[?*]" | cut -d " " -f2- | tr ' ' '\n')" scp sftp ssh;

### GIT ###
GIT_SSH="/usr/bin/ssh"

# Git aware prompt - replaced by powerline-go
#export GITAWAREPROMPT=${HOME}/bin/git-aware-prompt
#source $GITAWAREPROMPT/main.sh

### custom PS1 ### - replaced by powerline-go
# export PS1="\[\e[0;31m\]\u\[\e[0m\]@\[\e[1;33m\]\h\[\e[0m\] \[\e[1;37m\]\w\[\e[0m\] \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\] \\[\033[0;31m\]>\[\e[0m\] "
# export SUDO_PS1="\u@\h \w \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\] \[\e[1;37m\]☢\[\e[0m\] "
export CLICOLOR=1

### PS1: Powerline-go ###
function _update_ps1() {
    PS1="$($HOME/bin/powerline-go -theme $HOME/.nuky.powerline.theme.json -modules venv,user,host,ssh,cwd,perms,git,jobs,exit,root,docker -numeric-exit-codes -error $?)"
}

if [ "$TERM" != "linux" ] && [ -f "$HOME/bin/powerline-go" ]; then
    PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"
fi

### NVM uses ~/.nvmrc ###
export NVM_DIR=$HOME/.nvm
. "/usr/local/opt/nvm/nvm.sh"
npm config delete prefix && nvm use

### Auto Completions ###

### Miniconda ###
eval "$(register-python-argcomplete conda)"

# Add tab completion for `defaults read|write NSGlobalDomain`
# You could just use `-g` instead, but I like being explicit
complete -W "NSGlobalDomain" defaults;

# Add `killall` tab completion for common apps
complete -o "nospace" -W "Contacts Calendar Dock Finder Mail Safari iTunes SystemUIServer Terminal" killall;
