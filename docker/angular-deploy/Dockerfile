FROM nginx:alpine

# copy nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# copy angular-server-side-configuration ngssc binary
# source: https://github.com/kyubisation/angular-server-side-configuration/releases
# binary: https://github.com/kyubisation/angular-server-side-configuration/releases/download/v8.1.1/ngssc_64bit
# build details: https://github.com/kyubisation/angular-server-side-configuration/blob/master/cli/build.sh
COPY ngssc /usr/local/bin/ngssc
RUN chmod +x /usr/local/bin/ngssc

# part of the Angular project

# TODO: retrieve built application
# TODO: copy Angular application
COPY ./dist/ /app/

# we start nginx and the ngssc insertion at runtime
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh
CMD ["/usr/local/bin/start.sh"]
