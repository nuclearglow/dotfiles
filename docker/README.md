# Docker

## Images

| Folder | What |
|---|---|
| `webdev-builder/` | Web development builder image (Ubuntu 18.04, Java, OWASP dependency check) |
| `angular-deploy/` | nginx image serving a built Angular app with runtime config via `ngssc`; meant to be copied into an Angular project (expects `dist/`, `ngssc`, `start.sh` there) |
| `webdev-router/` | Traefik HTTPS router for local development ([README](webdev-router/README.md)) |

## Image development

Enter the folder of the image you want to work on, then:

```shell
docker build -t webdev-builder .               # build
docker run -it --name webdev-builder webdev-builder bash   # start and open a shell
docker cp webdev-builder:/path/to/file local/path/to/file  # copy a file out
```

## Cheat sheet

```shell
docker run image                                    # start a container
docker exec -it container-name bash                 # shell in a running container
docker run -d -p 8888:80 --name container-name image  # detached, host:container port, named
docker port container-name                          # show exposed ports
docker container prune                              # remove all stopped containers
```

@see: https://docker-curriculum.com/

## Installation

- Arch: `sudo pacman -S docker docker-compose && sudo systemctl enable --now docker.socket`,
  then `sudo usermod -aG docker $USER` and log in again
- Mac OS X: `brew install --cask docker`
