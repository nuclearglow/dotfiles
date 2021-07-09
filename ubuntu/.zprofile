if [ -n "$SSH_CLIENT" ] || [ -n "$SSH_TTY" ]; then
    SESSION_TYPE=ssh
else
    case $(ps -o comm= -p $PPID) in
      sshd|*/sshd) SESSION_TYPE=ssh;;
    esac
fi

if [ -n "$SESSION_TYPE" ]; then
    # on ssh just display a welcome message
    cat ~/.ssh/hobel
else
    # Set up keychain
    # TODO: set keys
    eval `keychain --eval --agents ssh id_rsa`

    # Set up keyboard lighting
    g810-led -p ~/.g815/nukeys

    # Set up the G Keys
    # TODO: set codename
    ratbagctl singing-gundi profile 0 button 0 action set special unknown
    ratbagctl singing-gundi profile 0 button 1 action set special unknown
    ratbagctl singing-gundi profile 0 button 2 action set special unknown
    ratbagctl singing-gundi profile 0 button 3 action set special unknown
    ratbagctl singing-gundi profile 0 button 4 action set special unknown
fi
