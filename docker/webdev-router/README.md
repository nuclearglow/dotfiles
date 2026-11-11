# Setup HTTPS dev for localhost

Traefik routes `https://localhost` to local containers, with a basic-auth protected dashboard at
`https://localhost/dashboard/`.

* Install requirements:
  * Arch: `sudo pacman -S nss apache mkcert` (`htpasswd` is part of `apache`)
  * Ubuntu: `sudo apt-get install libnss3-tools apache2-utils`, then install
    [mkcert](https://github.com/FiloSottile/mkcert)

* Install the local CA: `mkcert -install`

* Create a cert for localhost in `./config/certs` (git-ignored, see `config/traefik.toml`):

```shell
mkcert -cert-file config/certs/localhost.pem -key-file config/certs/localhost-key.pem localhost
```

* Create the dashboard user in `.env` (git-ignored). Single quotes keep the `$` of the hash literal:

```shell
echo "TRAEFIK_DASHBOARD_USERS='$(htpasswd -nb admin <password>)'" > .env
```

* Create the external network once and start routing:

```shell
docker network create web
docker compose up
```
