FROM php:8.2-fpm

# Installer systemavhengigheter
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    git \
    curl \
    default-mysql-client \
    && docker-php-ext-install mysqli pdo_mysql

WORKDIR /var/www/html
