# AI Agent Harness Configs

Configs of the agent harnesses used on the Arch workstation, symlinked into `$HOME` like the
rest of the dotfiles. All links are listed in `../links-workstation.txt`.

| Harness | Live path | Repo |
|---|---|---|
| [opencode](https://opencode.ai) | `~/.config/opencode/opencode.json` | `.config/opencode/opencode.json` |
| | `~/.config/opencode/tui.json` | `.config/opencode/tui.json` |
| | `~/.config/opencode/oh-my-opencode-slim.json` | `.config/opencode/oh-my-opencode-slim.json` |
| omp (oh-my-pi) | `~/.omp/agent/config.yml` | `.omp/agent/config.yml` |

Only these config files are versioned. Everything else in `~/.config/opencode` and `~/.omp`
(sessions, history, databases, `secret-placeholder.key`, `install-id`, logs, `node_modules`)
stays local. This repo is public: never add credentials here.

## Setup

```shell
D=~/workspace/dotfiles
mkdir -p ~/.config/opencode ~/.omp/agent ~/bin
for f in opencode.json tui.json oh-my-opencode-slim.json; do
  ln -vfns $D/ai/.config/opencode/$f ~/.config/opencode/$f
done
ln -vfns $D/ai/.omp/agent/config.yml ~/.omp/agent/config.yml
ln -vfns $D/linux/bin/dotfiles-check ~/bin/dotfiles-check
ln -vfns $D/linux/bin/rea-update ~/bin/rea-update

# herdr agent integrations (managed by herdr, not versioned)
herdr integration install opencode
herdr integration install omp
```

## Keeping the symlinks intact

- `opencode` (`mcp add`, `plugin add`, ...) and `omp config set` write *through* the symlinks
  into this repo, so tool-made changes show up in `git status`.
- `omp` rewrites `config.yml` completely and drops comments: document settings here, not there.
- `dotfiles-check` verifies all links (run quietly from `.zshrc`, prints only on problems).
  `dotfiles-check -d` shows the diff if a link was replaced by a regular file.

## rea (MCP server in opencode.json)

`rea setup` refuses to edit symlinked client configs. Use the wrapper instead:

```shell
rea-update            # latest rea-agents, configures opencode
rea-update 6.9.0      # specific version
```

It temporarily replaces the `ai/` links with real copies, runs
`npx -y rea-agents@<version> setup --client opencode`, copies the result back into the repo and
restores the links (also on failure or Ctrl-C). Review the change with `git diff -- ai/`.
