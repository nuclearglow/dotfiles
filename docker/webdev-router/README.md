# Setup HTTPS dev for localhost

* Install reqs:

`sudo apt-get install libnss3-tools apache2-utils`

* Download and install mkcert

https://github.com/FiloSottile/mkcert

* Install CA

`mkcert -install`

* Make cert for localhost and put cert+key to

`./config/certs`

* Create basic auth user and insert to `docker-compose.yml`:

`echo $(htpasswd -nb admin password) | sed -e s/\\$/\\$\\$/g`

* Edit `docker-compose.yml` and set your config

* Start routing

`docker-compose up`
