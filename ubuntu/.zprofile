# Set up keychain
eval `keychain --eval --agents ssh id_rsa`

# Set up keyboard lighting
g810-led -p ~/.g815/nukeys

# Set up the G Keys
ratbagctl singing-gundi profile 0 button 0 action set special unknown
ratbagctl singing-gundi profile 0 button 1 action set special unknown
ratbagctl singing-gundi profile 0 button 2 action set special unknown
ratbagctl singing-gundi profile 0 button 3 action set special unknown
ratbagctl singing-gundi profile 0 button 4 action set special unknown
