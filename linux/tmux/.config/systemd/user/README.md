Install tmux-resurrect and tmux-continuum SystemD user service

```
mkdir ~/.config/systemd
mkdir ~/.config/systemd/user
cp ~/workspace/dotfiles/linux/.config/systemd/user/tmux.service ~/.config/systemd/user
systemctl --user enable tmux.service
systemctl --user start tmux.service
```

reboot the machine
