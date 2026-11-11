# dotfiles

nuky's dotfiles. Files live in this repo and are symlinked into `$HOME`.

## Contents

| Folder | What |
|---|---|
| `linux/` | Desktop dotfiles (Arch workstation, formerly Ubuntu / PopOS): zsh + oh-my-zsh + powerlevel10k, aliases/exports/functions/keys, vim, alacritty, [herdr](linux/herdr/README.md), GIMP, ulauncher, keyboard lighting, `bin/` scripts. Setup notes: [Arch](linux/README-Arch.md), [Ubuntu](linux/README-Ubuntu.md) |
| `ai/` | AI agent harness configs: opencode and omp ([README](ai/README.md)) |
| `linux-server/` | Ubuntu server setup notes |
| `windows-wsl/` | Windows WSL2 (Debian) dotfiles |
| `docker/` | Dockerfiles and compose setups for web development |
| `fonts/` | MesloLGS Nerd Fonts for the powerlevel10k prompt |
| `postgres/` | PostgreSQL config |
| `archive/` | Retired setups (tmux, replaced by herdr) |
| `mac-os-x/`, `web/` | Deprecated |

## Symlinks

`links-workstation.txt` lists every symlink of the Arch workstation (`<path in $HOME>  <path in repo>`).
Create one with:

```shell
ln -vfns ~/workspace/dotfiles/<path in repo> ~/<path in $HOME>
```

Two helper scripts in `linux/bin/` (linked to `~/bin/`) keep the scheme intact:

- `dotfiles-check` verifies all links and shows how to fix broken ones. It runs quietly in
  every new shell (`.zshrc`) and only prints when a tool replaced a link with a regular file.
- `rea-update` updates the rea MCP server in opencode, which refuses to edit symlinked configs.

## Notes

This repo is public: no credentials, keys or private data. Machine-local secrets go into
`~/.extras`, which `.zshrc` sources. It is a local copy of the empty template `linux/.extras`,
never a symlink.
