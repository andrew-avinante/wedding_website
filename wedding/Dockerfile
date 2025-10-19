# Stage 1: Composer Dependencies
FROM php:8.0-cli-alpine AS composer

WORKDIR /app

# Install composer and required extensions
RUN apk add --no-cache \
    git \
    unzip \
    && docker-php-ext-install pdo_mysql \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy composer files first for better layer caching
COPY composer.json composer.lock ./

# Copy database directory for classmap
COPY database ./database

# Install production dependencies (without scripts and autoload first)
RUN composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --no-scripts \
    --no-autoloader \
    --prefer-dist

# Copy application code (includes public/js, public/css already in source)
COPY . .

# Generate optimized autoload files
RUN composer dump-autoload --optimize --no-dev


# Stage 2: Final Production Image
FROM php:8.0-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apk add --no-cache \
    bash \
    curl \
    libpng-dev \
    libjpeg-turbo-dev \
    libwebp-dev \
    freetype-dev \
    zip \
    unzip \
    git \
    oniguruma-dev \
    libxml2-dev \
    mysql-client \
    && docker-php-ext-configure gd \
        --with-freetype \
        --with-jpeg \
        --with-webp \
    && docker-php-ext-install \
        pdo_mysql \
        mbstring \
        exif \
        pcntl \
        bcmath \
        gd \
        opcache

# Configure PHP for production
RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

# Create Laravel-specific PHP configuration
RUN echo "upload_max_filesize = 20M" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "post_max_size = 20M" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "memory_limit = 256M" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "max_execution_time = 300" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.enable=1" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.memory_consumption=128" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.interned_strings_buffer=8" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.max_accelerated_files=10000" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.revalidate_freq=2" >> "$PHP_INI_DIR/conf.d/laravel.ini" \
    && echo "opcache.fast_shutdown=1" >> "$PHP_INI_DIR/conf.d/laravel.ini"

# Copy application from composer stage to a temporary location
COPY --from=composer --chown=www-data:www-data /app /var/www/html-template

# Set proper permissions for Laravel template
RUN chown -R www-data:www-data /var/www/html-template \
    && chmod -R 755 /var/www/html-template/storage \
    && chmod -R 755 /var/www/html-template/bootstrap/cache

# Create the actual working directory
RUN mkdir -p /var/www/html && chown www-data:www-data /var/www/html

# Create entrypoint script
COPY docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

# Don't switch user here - let entrypoint handle permissions
# Then switch to www-data before running php-fpm

# Expose port 9000 for PHP-FPM
EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD ["php-fpm"]
