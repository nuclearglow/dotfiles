FROM ubuntu:18.04

ARG JAVA_VERSION=11

LABEL maintainer="nuky"
LABEL name="docker-webdev-image"
LABEL version="1.0"
LABEL description="Web Development Builder Image"

# System Configuration
ENV LANG C.UTF-8
ENV DEBIAN_FRONTEND noninteractive

# Deendency Check Configuration
ENV DEPENDENCY_CHECK_VERSION 5.3.2
ENV DEPENDENCY_CHECK_DATA "/home/ci/dependency-check-data"
ENV PATH $PATH:/usr/local/bin/dependency-check/bin/

# NVM NodeJS Virtual Machine @link https://github.com/nvm-sh/nvm
# NVM releases @link https://github.com/nvm-sh/nvm/releases
ENV NVM_VERSION "v0.35.3"
# NodeJS releases @link https://github.com/nodejs/Release
ENV NODE_LTS_VERSION "erbium"

# provisioning
COPY share/* /usr/local/share/

# Pick Ubuntu apt mirror site for better speed @link https://launchpad.net/ubuntu/+archivemirrors
ENV UBUNTU_APT_SITE ftp.uni-mainz.de

# Replace origin apt package site with the mirror site
RUN sed --regexp-extended -i "s/([a-z]+.)?archive.ubuntu.com/$UBUNTU_APT_SITE/g" /etc/apt/sources.list
RUN sed -i "s/security.ubuntu.com/$UBUNTU_APT_SITE/g" /etc/apt/sources.list

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
         chromium-browser \
    && curl --fail --silent --show-error --location https://download.docker.com/linux/ubuntu/gpg | apt-key add - \
    && add-apt-repository \
         "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    # As keys can not be retrieved from a keyserver, the key must be added manually.
    # If Gauge ever changes this key, docker build will fail. In this case update
    # gauge_pgp_key in share/gauge folder to the most recent version
    && add-apt-repository ppa:openjdk-r/ppa \
    && apt-get update -qq \
    && apt-get install -qqy --no-install-recommends \
         containerd.io \
         docker-ce \
         docker-ce-cli \
         git \
         graphviz \
         jq \
         openjdk-${JAVA_VERSION}-jdk \
         unzip \
    && apt clean \
    && rm -rf /var/lib/apt/lists/*

# install dependency check
RUN set -ex \
    && gpg --import /usr/local/share/jeremy-long-public.key.asc \
    && curl --location "https://dl.bintray.com/jeremy-long/owasp/dependency-check-${DEPENDENCY_CHECK_VERSION}-release.zip" --output /usr/local/bin/dependency-check.zip \
    && curl --location "https://dl.bintray.com/jeremy-long/owasp/dependency-check-${DEPENDENCY_CHECK_VERSION}-release.zip.asc" --output /usr/local/bin/dependency-check.zip.asc \
    && gpg --verify /usr/local/bin/dependency-check.zip.asc \
    && unzip /usr/local/bin/dependency-check.zip -d /usr/local/bin/

# non root user ci
RUN groupadd ci --gid 6969
RUN useradd ci --uid 4711 --gid ci --create-home --shell /bin/bash

# Allow ci user to run docker commands
RUN usermod -aG docker ci

# set up the app and tmp for user ci
RUN mkdir /app/ && \
    chgrp -R ci /app/ && \
    chgrp -R ci /tmp/

# switch to user ci
USER ci

# java Settings
ENV JAVA_HOME /usr/lib/jvm/java-${JAVA_VERSION}-openjdk-amd64/
ENV PATH $PATH:/usr/lib/jvm/java-${JAVA_VERSION}-openjdk-amd64/jre/bin:/usr/lib/jvm/java-${JAVA_VERSION}-openjdk-amd64/bin

# Update dependency check database
RUN dependency-check.sh --updateonly --data=${DEPENDENCY_CHECK_DATA}

# set up NodeJS to use more heap memory (needed for ag-grid)
ENV NODE_OPTIONS="--max_old_space_size=6144"

# Install nvm
RUN wget --quiet --output-document=- https://raw.githubusercontent.com/creationix/nvm/${NVM_VERSION}/install.sh | bash
ENV NVM_DIR "/home/ci/.nvm"

# Angular CLI configuration
ENV NG_CLI_ANALYTICS false

# Install NodeJS LTS using nvm, also install global packages and gauge plugins that need npm
RUN . "$NVM_DIR/nvm.sh" \
    && nvm install --lts=${NODE_LTS_VERSION} \
    && nvm use --lts=${NODE_LTS_VERSION} \
    && nvm alias default lts/${NODE_LTS_VERSION} \
    && npm install -g @angular/cli \
    && ng version

# setup custom ~/.bashrc without non-interactive dropout and our .nvmrc
COPY --chown=ci:ci ci/.bashrc /home/ci/.bashrc
COPY --chown=ci:ci ci/.nvmrc /home/ci/.nvmrc
# make sure GitLab CI Runner sources ~/.bashrc even in non-interactive mode
ENV BASH_ENV /home/ci/.bashrc

