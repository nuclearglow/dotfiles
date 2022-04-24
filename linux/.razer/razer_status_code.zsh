#!/usr/bin/env zsh

# * requires: https://github.com/openrazer
# * docs: https://github.com/openrazer/openrazer/wiki/Using-the-mouse-driver
# * inspired by: https://github.com/michaelmcallister/razer-status-code/blob/master/razer-mouse-status.plugin.zsh

# switch off the logo
for file in /sys/bus/hid/drivers/razermouse/*/logo_matrix_effect_none; do
  echo -n -e "off" > $file
done

# set the brightness (0-255)
_set_brightness() {
  for file in /sys/bus/hid/drivers/razermouse/*/scroll_led_brightness; do
    echo -n -e "$1" > $file
  done
}

# set a color to the razer mouse (use the local vars)
_set_color() {
  for file in /sys/bus/hid/drivers/razermouse/*/scroll_matrix_effect_static; do
    echo -n -e "$1" > $file
  done
}

# custom colors (write 3 bytes)
local GREEN='\x00\xA9\x00'
local ORANGE='\xFF\x55\x00'
local RED='\xCC\x00\x00'

# get the exit status, set the color and brightness
razer_mouse_status_code() {
  local exit_status="${1:-$(print -P %?)}";

  case $exit_status in
    0)
      _set_brightness 50
      _set_color $GREEN
      ;;
    1)
      _set_brightness 255
      _set_color $ORANGE
      ;;
    127)
      _set_brightness 255
      _set_color $RED
      ;;
    -1)
      _set_brightness 255
      _set_color $RED
      ;;
    *)
      _set_brightness 100
      _set_color $ORANGE
      ;;
  esac
}

# set as zsh precmd
precmd_functions+=(razer_mouse_status_code)
