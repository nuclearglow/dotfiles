Setup Keys

sudo add-apt-repository ppa:libratbag-piper/piper-libratbag-git
sudo apt-get update
sudo apt install ratbagd
ratbagctl list # swap out the keyboard name

* add this to .zprofile

ratbagctl cheering-viscacha profile 0 button 0 action set special unknown
ratbagctl cheering-viscacha profile 0 button 1 action set special unknown
ratbagctl cheering-viscacha profile 0 button 2 action set special unknown
ratbagctl cheering-viscacha profile 0 button 3 action set special unknown
ratbagctl cheering-viscacha profile 0 button 4 action set special unknown

Setup Lighting

* install g810-led from source or `sudo apt install g810-led`

* https://delightlylinux.wordpress.com/2020/05/21/programming-the-logitech-g513-rgb-keyboard-lights-in-linux-with-g810-led/

* set sticky bit
`sudo chmod u+s /usr/bin/g810-led`

* find out the dv and dp
`g810-led --list-keyboards`

* set the keys to a profile

g810-led -dv 046d -dp c33f -a 000000
g810-led -dv 046d -dp c33f -g keys ff5500
g810-led -dv 046d -dp c33f -g fkeys 00A900
g810-led -dv 046d -dp c33f -g functions D45EE5
g810-led -dv 046d -dp c33f -k equal D45EE5
g810-led -dv 046d -dp c33f -k close_bracket D45EE5
g810-led -dv 046d -dp c33f -k slash D45EE5
g810-led -dv 046d -dp c33f -k intl_backslash D45EE5
g810-led -dv 046d -dp c33f -k period D45EE5
g810-led -dv 046d -dp c33f -k minus D45EE5
g810-led -dv 046d -dp c33f -k dollar D45EE5
g810-led -dv 046d -dp c33f -g numeric D45EE5
g810-led -dv 046d -dp c33f -k numenter FFFFFF
g810-led -dv 046d -dp c33f -k num0 CC0000
g810-led -dv 046d -dp c33f -k num1 CC0000
g810-led -dv 046d -dp c33f -k num2 CC0000
g810-led -dv 046d -dp c33f -k num3 CC0000
g810-led -dv 046d -dp c33f -k num4 CC0000
g810-led -dv 046d -dp c33f -k num5 CC0000
g810-led -dv 046d -dp c33f -k num6 CC0000
g810-led -dv 046d -dp c33f -k num7 CC0000
g810-led -dv 046d -dp c33f -k num8 CC0000
g810-led -dv 046d -dp c33f -k num9 CC0000
g810-led -dv 046d -dp c33f -g arrows FF5DA7
g810-led -dv 046d -dp c33f -g multimedia D110AB
g810-led -dv 046d -dp c33f -k logo 000000
g810-led -dv 046d -dp c33f -k capslock 000000
g810-led -dv 046d -dp c33f -k tilde D45EE5
g810-led -dv 046d -dp c33f -k tab D45EE5
g810-led -dv 046d -dp c33f -k backspace D45EE5
g810-led -dv 046d -dp c33f -k enter FFFFFF
g810-led -dv 046d -dp c33f -k space FFFFFF
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000
g810-led -dv 046d -dp c33f -k 1 CC0000

* load a profile - add this to `~/.zprofile`

```
g810-led -p ~/.g815/nukeys
```

* also add the contents of `./nukeys` to the udev rules:

```
sudo nvim /etc/g810-led/profile
```
