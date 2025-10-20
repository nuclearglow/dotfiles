if [ -n "$SSH_CLIENT" ] || [ -n "$SSH_TTY" ]; then
    SESSION_TYPE=ssh
else
    case $(ps -o comm= -p $PPID) in
      sshd|*/sshd) SESSION_TYPE=ssh;;
    esac
fi

if [ -n "$SESSION_TYPE" ]; then
    # on ssh just display a welcome message
    cat ~/.ssh/crunchy
else
    # Set Keyboard XKB Layout
    setxkbmap -model pc105 -layout de -variant nodeadkeys -option terminate:ctrl_alt_bksp

    # Set up keyboard lighting
    g810-led -p ~/.g815/nukeys

    # Set up keychain
    #export SSH_ASKPASS="/usr/bin/qt4-ssh-askpass"
    #eval `keychain --quick --eval --agents ssh id_svenvowe`
    #eval $(ssh-agent)
    #ssh-add
fi
