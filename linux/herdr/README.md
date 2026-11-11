# Herdr Setup

[herdr](https://herdr.dev) replaces tmux as terminal multiplexer. Alacritty launches it directly
(`[terminal.shell] args = ["-l", "-c", "herdr"]` in `../alacritty/arch/.alacritty.toml`).

## Arch

```shell
# install: https://herdr.dev (see `herdr update` for upgrades)
mkdir -p ~/.config/herdr
ln -vfns ~/workspace/dotfiles/linux/herdr/config.toml ~/.config/herdr/config.toml
ln -vfns ~/workspace/dotfiles/linux/alacritty/arch/.alacritty.toml ~/.alacritty.toml
herdr server reload-config
```

No systemd unit is needed: the herdr server persists workspaces, tabs, panes and cwds itself
(`~/.config/herdr/session.json`, snapshots in `session-snapshots/`). Detach with `ctrl+space q`
(prefix is `ctrl+space`).

## Migrating tmux sessions

The tmux sessions were migrated from a tmux-resurrect save file (session -> workspace,
window -> tab, split layout -> `layout.apply` tree) via the herdr socket API. The helper script
`bin/tmux2herdr.py` used for that is no longer in the repo; the save file is kept locally (and
git-ignored) in `archive/tmux/`. The old tmux setup lives in `archive/tmux/`.
