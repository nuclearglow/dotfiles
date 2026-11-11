# TMUX resurrect systemd

Retired together with tmux, kept for reference.

- Install tmux-resurrect and tmux-continuum SystemD user service

```shell
mkdir ~/.config/systemd
mkdir ~/.config/systemd/user
cp ~/workspace/dotfiles/archive/tmux/.config/systemd/user/tmux.service ~/.config/systemd/user
systemctl --user enable tmux.service
systemctl --user start tmux.service
```

- reboot the machine
