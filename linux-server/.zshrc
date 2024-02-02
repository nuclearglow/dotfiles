# Set up local bin path
export PATH=$HOME/bin:/usr/local/bin:$PATH

# UTF-8
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# Editor
export EDITOR='vim'

# Don't check mail when opening terminal.
unset MAILCHECK

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

ZSH_THEME="powerlevel10k/powerlevel10k"

# Uncomment the following line if you want to change the command execution time
# wing line to disable bi-weekly auto-update checks.
DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
HIST_STAMPS="yyyy-mm-dd"

# History Setup
HISTFILE=~/.zsh_history
HISTSIZE=999999999
SAVEHIST=$HISTSIZE

plugins=(
  git
  colorize
  npm
  ubuntu
  yarn
  z
  command-not-found
  fzf
  zsh-autosuggestions
  zsh-syntax-highlighting
)

# oh my zsh :-)
source $ZSH/oh-my-zsh.sh

# disable zsh autocorrect
unsetopt correct_all

# complete aliases
setopt COMPLETE_ALIASES

# Use modern completion system
autoload -Uz compinit
compinit -i

# Initialize fzf
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

### Custom Dotfiles ###
#
# * ~/.keys can be used to set and document keybindings
# * ~/.exports can be used to extend `$PATH`.
# * ~/.aliases can be used for aliases
# * ~/.functions can be used for custom scripts
# * ~/.extras can be used for other settings you don’t want to commit.
#
for file in ~/.{aliases,exports,functions,extras,keys}; do
  [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

# powerlevel10k
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

