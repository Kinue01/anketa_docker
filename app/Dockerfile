FROM node as view
COPY ./anketa_layout/vue-anketaDemo /app
WORKDIR /app
RUN npm install && npm run build

FROM php:8.3.8-apache
RUN a2enmod rewrite && apt-get -y update && apt-get -y install git unzip libssl-dev pkg-config
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && mv composer.phar /usr/local/bin/composer
RUN a2dissite 000-default
COPY --from=view /app/dist /var/www/html
COPY ./anketa_server_2.0 /var/www/api
COPY ./ports.conf /etc/apache2/ports.conf
COPY ./apache2.conf /etc/apache2/apache2.conf
COPY ./api.conf /etc/apache2/sites-available/api.conf
COPY ./view.conf /etc/apache2/sites-available/view.conf
COPY ./php.ini /usr/local/etc/php/
RUN a2ensite api.conf
RUN a2ensite view.conf
WORKDIR /var/www/api
RUN pecl install mongodb && composer update && composer install
EXPOSE 5000
EXPOSE 8080