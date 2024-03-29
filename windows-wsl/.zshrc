# If you come from bash you might have to change your $PATH.
export PATH=$HOME/bin:$PATH

# UTF-8
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

# Editor
# needs `sudo apt install neovim`
export EDITOR='vim'

# Compilation flags
export ARCHFLAGS="-arch x86_64"

# Set up max file descriptors limit
ulimit -n unlimited

# Don't check mail when opening terminal.
unset MAILCHECK

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
export ZSH_THEME="powerlevel10k/powerlevel10k"

# https://github.com/romkatv/powerlevel10k#extra-space-without-background-on-the-right-side-of-right-prompt
export ZLE_RPROMPT_INDENT=0
# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
#export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS=true

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
#COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
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
setopt hist_ignore_all_dups

plugins=(
  git
  gitfast
  colorize
  docker
  docker-compose
  gulp
  mosh
  extract                 # https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/extract
  fd
  npm
  ubuntu
#  yarn
  kubectl
  command-not-found       # https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/command-not-found
  fzf                     # automatic ctrl+r and ctrl+t completion
  direnv                  # automatically load .envrc vars in folder
  rust                    # rust completions <- https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/rust
  zsh-autosuggestions     #  autocomplete command suggestions <- https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh
  zsh-syntax-highlighting # https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md
)

# oh my zsh :-)
source $ZSH/oh-my-zsh.sh

# disable zsh autocorrect
unsetopt correct_all

# complete aliases
setopt COMPLETE_ALIASES

# zsh autoloading enabled
autoload -U compinit && compinit -i

# Initialize fzf
[ -f ~/.fzf.zsh ] && source ~/.fzf.zsh

# Initialize Rust/Cargo
source "$HOME/.cargo/env"

# Initialize fnm <- https://github.com/Schniz/fnm#shell-setup
eval "$(fnm env --use-on-cd)"

# Initialize direnv <- https://direnv.net/
eval "$(direnv hook zsh)"

# Initialize zoxide <- https://github.com/ajeetdsouza/zoxide
eval "$(zoxide init zsh)"

 # Load Angular CLI autocompletion if ng command exists (depends on .nvmrc), an .nvmrc file is present and we are not in the home directory
if command -v ng &> /dev/null && [ -f ".nvmrc" ] && [ "$PWD" != "$HOME" ];
then
  source <(ng completion script)
  ng version
fi

### Custom Dotfiles ###
#
# * ~/.keys can be used to set and document keybindings
# * ~/.exports can be used to extend `$PATH`.
# * ~/.aliases can be used for aliases
# * ~/.functions can be used for custom scripts
# * ~/.extras can be used for other settings you don’t want to commit.
#
for file in ~/.{aliases,exports,functions,keys,extras}; do
  [ -r "$file" ] && [ -f "$file" ] && source "$file";
done;
unset file;

# powerlevel10k
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[ ! -f ~/.p10k.zsh ] || source ~/.p10k.zsh
