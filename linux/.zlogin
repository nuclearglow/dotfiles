# Set up keychain
# TODO: your own keys
eval `keychain --quick --eval --agents ssh id_rsa`
eval $(ssh-agent)
ssh-add
