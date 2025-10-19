#!/bin/bash
set -e

echo "Starting Laravel application..."

# Check if this is the first run (vendor directory doesn't exist in the volume)
if [ ! -d "/var/www/html/vendor" ]; then
    echo "First run detected - copying application files to volume..."
    cp -rp /var/www/html-template/. /var/www/html/
    echo "Application files copied successfully!"

    # Create required Laravel directories if they don't exist
    mkdir -p /var/www/html/storage/framework/{sessions,views,cache}
    mkdir -p /var/www/html/storage/logs
    mkdir -p /var/www/html/bootstrap/cache

    # Ensure proper ownership and permissions
    chown -R www-data:www-data /var/www/html
    chmod -R 775 /var/www/html/storage
    chmod -R 775 /var/www/html/bootstrap/cache
    echo "Permissions set successfully!"
fi

# Wait for MySQL to be ready
echo "Waiting for MySQL to be ready..."
while ! nc -z mysql 3306; do
    sleep 1
done
echo "MySQL is ready!"

# Check if .env file exists, if not copy from .env.example
if [ ! -f .env ]; then
    echo "Creating .env file from .env.example..."
    cp .env.example .env
fi

# Generate application key if not set
if grep -q "APP_KEY=$" .env || ! grep -q "APP_KEY" .env; then
    echo "Generating application key..."
    php artisan key:generate --force
fi

# Create storage symlink if not exists
if [ ! -L public/storage ]; then
    echo "Creating storage symlink..."
    php artisan storage:link || true
fi

# Clear and cache configuration
echo "Optimizing Laravel..."
php artisan config:clear || true
php artisan cache:clear || true
php artisan view:clear || true
php artisan route:clear || true

# Run migrations (optional - uncomment if you want auto-migration)
# echo "Running migrations..."
# php artisan migrate --force

echo "Laravel application is ready!"

# Execute the main container command
exec "$@"
