# Ubuntu 22.04 Server Preparation

## Base Package Installation

```shell
sudo apt install zsh curl exa
```

### fd-find

```shell
sudo apt install fd-find
sudo ln -s $(which fdfind) /usr/local/bin/fd
```

### bat

```shell
sudo apt install bat
mkdir bin
cd bin
ln -s /usr/bin/batcat bat
```

### fzf

- [Installation](https://github.com/junegunn/fzf?tab=readme-ov-file#using-git)

```shell
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
```

### zsh

- `which zsh` -> /usr/bin/zsh -> `chsh zsh` -> /usr/bin/zsh -> respawn shell

### Oh my zsh

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```
