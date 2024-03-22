# Setup fzf
# ---------
if [[ ! "$PATH" == */home/nuky/.fzf/bin* ]]; then
  PATH="${PATH:+${PATH}:}/home/nuky/.fzf/bin"
fi

# Auto-completion
# ---------------
source "/home/nuky/.fzf/shell/completion.bash"

# Key bindings
# ------------
source "/home/nuky/.fzf/shell/key-bindings.bash"
