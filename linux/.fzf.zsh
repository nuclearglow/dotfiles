# Setup fzf
# ---------
if [[ ! "$PATH" == */home/nuky/.fzf/bin* ]]; then
  export PATH="${PATH:+${PATH}:}/home/nuky/.fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/home/nuky/.fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
# ------------
source "/home/nuky/.fzf/shell/key-bindings.zsh"

# Configuration
# ------------

# fd as fzf input (also for selection mode)
# https://github.com/junegunn/fzf#tips
# https://betterprogramming.pub/boost-your-command-line-productivity-with-fuzzy-finder-985aa162ba5d#451c
export FZF_DEFAULT_OPTS="
--layout=reverse
--info=inline
--height=80%
--multi
--preview-window=:hidden
--preview '([[ -f {} ]] && (bat --style=numbers --color=always {} || cat {})) || ([[ -d {} ]] && (tree -C {} | less)) || echo {} 2> /dev/null | head -200'
--color='hl:200,hl+:207,pointer:014,marker:010,bg+:237,gutter:237'
--prompt='∼ '
--pointer='▶'
--marker='✓'
--bind '?:toggle-preview'
--bind 'f1:toggle-preview'
--bind 'ctrl-a:select-all'
--bind 'ctrl-c:execute-silent(echo {+} | xclip -sel clip)'
--bind 'ctrl-o:execute(code {+})'
--bind 'ctrl-x:abort'
"
export FZF_DEFAULT_COMMAND='/home/nuky/.cargo/bin/fd --no-ignore --type file --hidden --follow --exclude .git'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
