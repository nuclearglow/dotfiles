FROM ubuntu:20.04

LABEL name ubuntu-base-nuky

# ubuntu config
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND noninteractive

# Pick Ubuntu apt mirror site for better speed @link https://launchpad.net/ubuntu/+archivemirrors
ENV UBUNTU_APT_SITE ftp.uni-mainz.de

# Replace origin apt package site with the mirror site
RUN sed --regexp-extended -i "s/([a-z]+.)?archive.ubuntu.com/$UBUNTU_APT_SITE/g" /etc/apt/sources.list
RUN sed -i "s/security.ubuntu.com/$UBUNTU_APT_SITE/g" /etc/apt/sources.list

# Docker Compose
ENV DOCKER_COMPOSE_VERSION 1.24.1

# Package Installation
RUN set -ex \
    && apt-get update -qq \
    && apt-get install -qqy --no-install-recommends \
         apt-transport-https \
         ca-certificates \
         curl \
         dirmngr \
         gnupg-agent \
         software-properties-common \
         wget \
         rsync \
         build-essential \
         libssl-dev \
         zsh \
    && curl --fail --silent --show-error --location https://download.docker.com/linux/ubuntu/gpg | apt-key add - \
    # no focal for now
    # && add-apt-repository \
    #      "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    # TODO: reinstate above when focal available
    && add-apt-repository \
         "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable" \
    && apt-get update -qq \
    && apt-get install -qqy --no-install-recommends \
         containerd.io \
         docker-ce \
         docker-ce-cli \
         git \
         jq \
         unzip \
    && apt clean \
    && rm -rf /var/lib/apt/lists/* \
    && curl --location "https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" --output /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

# set up non root user
RUN groupadd nuky --gid 40001
RUN useradd nuky --uid 20011 --gid nuky --create-home --shell /bin/zsh
# Allow Jenkins user to run docker commands
RUN usermod -aG docker nuky

USER nuky

# NVM NodeJS Virtual Machine @link https://github.com/nvm-sh/nvm
# NVM releases @link https://github.com/nvm-sh/nvm/releases
ENV NVM_VERSION "v0.35.3"
# NodeJS releases @link https://github.com/nodejs/Release
ENV NODE_LTS_VERSION "erbium"
# set up NodeJS to use more heap memory (needed for ag-grid)
ENV NODE_OPTIONS="--max_old_space_size=6144"

# install oh-my-zsh
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended

# install powerlevel10k
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k

ENV TERM xterm-256color

# copy dotfiles
COPY --chown=nuky:nuky [".nvmrc", ".zshrc", ".aliases", ".functions", ".p10k.zsh", ".exports", ".extras", "/home/nuky/"]
COPY --chown=nuky:nuky  bin/exa /home/nuky/bin/
RUN chmod +x /home/nuky/bin/exa

# install nvm
RUN wget --quiet --output-document=- https://raw.githubusercontent.com/creationix/nvm/${NVM_VERSION}/install.sh | bash
ENV NVM_DIR "/home/nuky/.nvm"

# Install NodeJS LTS using nvm, also install global packages and gauge plugins that need npm
RUN . "$NVM_DIR/nvm.sh" \
    && nvm install --lts=${NODE_LTS_VERSION} \
    && nvm use --lts=${NODE_LTS_VERSION} \
    && nvm alias default lts/${NODE_LTS_VERSION}
