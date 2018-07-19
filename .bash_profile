#!/usr/bin/env bash

# arch
export ARCHFLAGS="-arch x86_64"

### BASH-IT ###

# standard editor
export EDITOR=vim

# Path to the bash it configuration
export BASH_IT="/Users/vowe/.bash_it"

# Lock and Load a custom theme file
# location /.bash_it/themes/
#export BASH_IT_THEME='bobby'

# Your place for hosting Git repos. I use this for private repos.
#export GIT_HOSTING='git@git.domain.com'

# Don't check mail when opening terminal.
unset MAILCHECK

# Set this to the command you use for todo.txt-cli
#export TODO="t"

# Set this to false to turn off version control status checking within the prompt for all themes
export SCM_CHECK=true

### SSH ###

# Launch SSH agent if not running
if ! ps aux |grep $(whoami) |grep ssh-agent |grep -v grep >/dev/null; then ssh-agent ; fi
if [[ -S "$SSH_AUTH_SOCK" && ! -h "$SSH_AUTH_SOCK" ]]; then
    ln -sf "$SSH_AUTH_SOCK" ~/.ssh/ssh_auth_sock;
fi
export SSH_AUTH_SOCK=~/.ssh/ssh_auth_sock;

# Load Bash It
source $BASH_IT/bash_it.sh

### SYSTEM PATHS ###

# J2EE, Java, Android
export ANT_HOME=/usr/local/opt/ant
export MAVEN_HOME=/usr/local/opt/maven
export GRADLE_HOME=/usr/local/opt/gradle
export ANDROID_HOME=/usr/local/share/android-sdk
export INTEL_HAXM_HOME=/usr/local/Caskroom/intel-haxm

# $PATH
export PATH=${PATH}:/Users/vowe/Applications
# Use homebrew packages first
export PATH=/usr/local/bin:${PATH}
# tools on path
export PATH=/usr/local/opt/python/libexec/bin:$PATH
export PATH=$ANT_HOME/bin:$PATH
export PATH=$MAVEN_HOME/bin:$PATH
export PATH=$GRADLE_HOME/bin:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/platform-tools:$PATH
# own scripts on path
export PATH=/Users/vowe/bin:$PATH

### GIT ###
GIT_SSH="/usr/bin/ssh"

# Git|k force EN alias
alias git='LANG=en_US.UTF-8 git'
alias gitk='LANG=en_US.UTF-8 gitk'

# Git aware prompt
export GITAWAREPROMPT=~/bin/git-aware-prompt
source $GITAWAREPROMPT/main.sh

### PS1 ###

# nuke PS1
export PS1="\[\e[0;31m\]\u\[\e[0m\]@\[\e[1;33m\]\h\[\e[0m\] \[\e[1;37m\]\w\[\e[0m\] \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\] \\[\033[0;31m\]>\[\e[0m\] "
export SUDO_PS1="\u@\h \w \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\] \[\e[1;37m\]☢\[\e[0m\] "

# nuke colors
export CLICOLOR=1
export LSCOLORS="gxBxhxDxfxhxhxhxhxcxcx"
export GREP_OPTIONS='--color=auto'

### DEV PROJECT PATHS ###
export WORKSPACE=/Users/vowe/workspace
export VV=$WORKSPACE/vv
export CLOUDLESS=$WORKSPACE/cloudless

### NVM to set NodeJS ###
export NVM_DIR="$HOME/.nvm"
. "/usr/local/opt/nvm/nvm.sh"
npm config delete prefix && nvm use

### Python Machine Learning Setup
export ML="/Users/vowe/workspace/ml"
# added by Miniconda3 installer
export PATH="/Users/vowe/.miniconda3/bin:$PATH"
# conda autocomplete
eval "$(register-python-argcomplete conda)"
