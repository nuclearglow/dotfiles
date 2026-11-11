# Arch Desktop (workstation)

GNOME on Wayland, Alacritty + [herdr](herdr/README.md), zsh with oh-my-zsh and powerlevel10k.
Shared files are in `linux/`, machine-specific variants have a suffix (`-workstation`, `-laptop`)
or a subfolder (`alacritty/arch`, `alacritty/popos`).

## Packages

```shell
sudo pacman -S zsh vim neovim git git-delta ripgrep direnv zoxide fnm go nodejs docker \
    gnome-keyring gcr-4 opencode
# AUR: herdr-bin, oh-my-pi
# cargo: alacritty, macchina, uv
```

- fzf: `git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install --bin`
  (`--bin` only: `~/.fzf.zsh` comes from this repo)
- G815 keyboard lighting (`g810-led`): see `.g815/INSTALL.md`

## zsh

```shell
chsh -s /usr/bin/zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
Z=${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git $Z/themes/powerlevel10k
git clone https://github.com/zsh-users/zsh-autosuggestions $Z/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting $Z/plugins/zsh-syntax-highlighting
git clone https://github.com/memark/zsh-dotnet-completion $Z/plugins/zsh-dotnet-completion
```

## Dotfiles

All symlinks are listed in `../links-workstation.txt`. Create them all:

```shell
cd ~/workspace/dotfiles
while read -r l r _; do
  [ -z "$l" ] || [ "${l#\#}" != "$l" ] && continue
  mkdir -p "$(dirname ~/$l)" && ln -vfns ~/workspace/dotfiles/$r ~/$l
done < links-workstation.txt
cp linux/.extras ~/.extras   # local secrets, never linked
dotfiles-check
```

`dotfiles-check` runs quietly in every new shell and warns when a link got replaced by a file.

## Node

fnm manages Node; the default is 26 (needed by rea, see `ai/README.md`). `~/.nvmrc` (linked,
`26`) only applies to shells starting in `~`, so the fnm default has to match:

```shell
fnm install 26 && fnm default 26
```

## SSH agent

GNOME's `gcr-ssh-agent` (started with the session, sets `SSH_AUTH_SOCK=/run/user/1000/gcr/ssh`)
is the only agent. Keys are unlocked on first use via a GNOME dialog; ticking "automatically
unlock" stores the passphrase in the login keyring. Requirements:

- no `IdentityAgent` in `~/.ssh/config` (it would override `SSH_AUTH_SOCK`)
- no keychain / `ssh-agent` in the zsh files
- `systemctl --user disable ssh-agent.socket` (OpenSSH's agent would compete)
