# Docker

Build image

```shell
docker build -t ubuntu-base-nuky .
```

Open zsh on container

```shell
docker run --hostname=ubuntu-base-nuky -it ubuntu-base-nuky zsh
```

## Docker Image Development

Enter the folder which image you want to work on.

Build the image:

```shell
docker build -t webdev-builder .
```

To start the container and open a shell:

```shell
docker run -it webdev-builder bash
```

To copy a file from the container to the local fs:

```shell
docker cp webdev-builder:/path/to/file local/path/to/file
```

# Docker Cheat Sheet

Start a container

```shell
docker run container-id
```

Open a shell in a container

```
docker -it container-id bash
```

Run a container, detach, expose ports destination:source on host and give it a name

```shell
docker run -d -p 8888:80 --name container-name container-id
```

See the ports exposed by a running container

```shell
docker port container-name
```

Delete and remove / prune all containers

```
docker container prune
```

@see: https://docker-curriculum.com/

# Installation

## Mac OS X

```shell
brew cask install docker
```

# Linux

TODO

# Docker Images

- `angular-builder`: Angular Builder Image with support for SCSS, Jest, ... TODO
