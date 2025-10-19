# Docker Setup for Wedding Website

This Laravel 7.x wedding website application has been fully dockerized with a production-ready multi-stage build setup.

## Architecture

The Docker setup consists of the following services:

- **app**: PHP 8.0-FPM application container
- **nginx**: Nginx 1.25 web server
- **mysql**: MySQL 8.0 database server
- **phpmyadmin**: (Optional) Web-based database management tool

## Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 2GB of available RAM
- Ports 80, 3306, and 8080 available (or configure custom ports)

## Quick Start

### 1. Environment Configuration

Copy the Docker environment template:

```bash
cp .env.docker .env
```

**IMPORTANT:** Generate a new application key:

```bash
# You can do this after containers are running, or edit .env manually
# The entrypoint script will auto-generate if APP_KEY is empty
```

### 2. Build and Start Containers

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 3. Initialize Application

The entrypoint script automatically handles:
- Waiting for MySQL to be ready
- Creating `.env` from `.env.example` if needed
- Generating application key
- Creating storage symlink
- Clearing caches

If you want to manually run migrations:

```bash
docker-compose exec app php artisan migrate
```

### 4. Access the Application

- **Website**: http://localhost
- **PhpMyAdmin**: http://localhost:8080 (username: `root`, password: `root_secret`)

## Configuration

### Environment Variables

Edit `.env` file to customize:

```env
# Application
APP_NAME=Wedding
APP_URL=http://localhost

# Database
DB_DATABASE=wedding
DB_USERNAME=wedding_user
DB_PASSWORD=secret
DB_ROOT_PASSWORD=root_secret

# Ports (optional)
APP_PORT=80
APP_SSL_PORT=443
PMA_PORT=8080
```

### Custom Ports

To use different ports, modify your `.env`:

```env
APP_PORT=8000        # Website will be at http://localhost:8000
PMA_PORT=8081        # PhpMyAdmin at http://localhost:8081
DB_PORT=3307         # MySQL exposed on port 3307
```

Then restart:

```bash
docker-compose down
docker-compose up -d
```

## Database

### Automatic Import

The database schema from `/SQL/dump.sql` is automatically imported on first startup, including:

- `guests` table
- `events` table (with Ceremony and Reception events)
- `menu` table (with test items)
- `attendance` table

### Manual Database Access

```bash
# Using Docker exec
docker-compose exec mysql mysql -u wedding_user -psecret wedding

# Or use PhpMyAdmin at http://localhost:8080
```

### Database Backup

```bash
# Export database
docker-compose exec mysql mysqldump -u root -proot_secret wedding > backup.sql

# Import database
docker-compose exec -T mysql mysql -u root -proot_secret wedding < backup.sql
```

## Common Commands

### Application Management

```bash
# View logs
docker-compose logs -f app
docker-compose logs -f nginx
docker-compose logs -f mysql

# Execute artisan commands
docker-compose exec app php artisan list
docker-compose exec app php artisan migrate
docker-compose exec app php artisan db:seed
docker-compose exec app php artisan cache:clear
docker-compose exec app php artisan config:clear
docker-compose exec app php artisan route:list

# Access bash in app container
docker-compose exec app bash

# Install new composer packages
docker-compose exec app composer require package/name

# Rebuild frontend assets (if you make changes)
docker-compose exec app npm run dev
```

### Container Management

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# Rebuild containers (after Dockerfile changes)
docker-compose build --no-cache
docker-compose up -d

# View container status
docker-compose ps

# Remove all containers and volumes (WARNING: deletes database)
docker-compose down -v
```

## Production Deployment

### Building for Production

The Dockerfile uses multi-stage builds optimized for production:

1. **Stage 1**: Installs Composer dependencies with `--no-dev` and `--optimize-autoloader`
2. **Stage 2**: Builds frontend assets with `npm run production`
3. **Stage 3**: Creates minimal production image with PHP-FPM, OPcache enabled

### Production Checklist

Before deploying to production:

1. **Environment Settings**:
   ```env
   APP_ENV=production
   APP_DEBUG=false
   ```

2. **Generate Strong Secrets**:
   ```bash
   docker-compose exec app php artisan key:generate
   ```

3. **Configure Database**:
   - Use strong passwords
   - Don't expose MySQL port externally
   - Regular backups

4. **Security Headers**: Already configured in nginx

5. **SSL/TLS**: Add SSL certificates to `docker/nginx/ssl/` and update nginx config

6. **Disable PhpMyAdmin**:
   ```bash
   # Remove the --profile flag or don't run with profile
   docker-compose up -d app nginx mysql
   ```

### Performance Optimization

The setup includes:

- **PHP OPcache**: Enabled with optimized settings
- **Nginx Gzip**: Compression for text assets
- **Static Asset Caching**: 30-day cache headers
- **MySQL Tuning**: InnoDB buffer pool and query optimization
- **Multi-stage Build**: Minimal final image size

## Troubleshooting

### Port Already in Use

```bash
# Check what's using port 80
sudo lsof -i :80

# Change ports in .env
APP_PORT=8000
```

### Permission Issues

```bash
# Fix storage permissions
docker-compose exec app chmod -R 775 storage bootstrap/cache
docker-compose exec app chown -R www-data:www-data storage bootstrap/cache
```

### Database Connection Failed

```bash
# Check MySQL is running
docker-compose ps mysql

# Check MySQL logs
docker-compose logs mysql

# Verify credentials in .env match docker-compose.yml
```

### Container Won't Start

```bash
# View logs
docker-compose logs

# Rebuild without cache
docker-compose build --no-cache
docker-compose down
docker-compose up -d
```

### Clear Everything and Start Fresh

```bash
# WARNING: This deletes all data
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

## Development Workflow

### Making Code Changes

Code changes are automatically reflected due to volume mounts:

```bash
# Edit files locally
# Refresh browser - changes appear immediately
```

### Frontend Development

```bash
# Install new npm packages
docker-compose exec app npm install package-name

# Watch for changes
docker-compose exec app npm run watch

# Production build
docker-compose exec app npm run production
```

### Running Tests

```bash
# Run PHPUnit tests
docker-compose exec app php artisan test

# Or using vendor binary
docker-compose exec app ./vendor/bin/phpunit
```

## File Structure

```
wedding/
├── docker/
│   ├── nginx/
│   │   ├── nginx.conf              # Main nginx config
│   │   ├── conf.d/
│   │   │   └── laravel.conf        # Laravel site config
│   │   └── ssl/                    # SSL certificates (add your own)
│   ├── mysql/
│   │   ├── my.cnf                  # MySQL configuration
│   │   └── init/
│   │       └── 01-wedding-schema.sql  # Auto-imported schema
│   ├── php/
│   │   └── local.ini               # PHP configuration
│   └── entrypoint.sh               # Startup script
├── Dockerfile                       # Multi-stage production build
├── docker-compose.yml               # Service orchestration
├── .dockerignore                    # Build exclusions
├── .env.docker                      # Docker environment template
└── DOCKER.md                        # This file
```

## Additional Services

### Adding Redis (Optional)

Add to `docker-compose.yml`:

```yaml
redis:
  image: redis:7-alpine
  container_name: wedding-redis
  restart: unless-stopped
  ports:
    - "6379:6379"
  networks:
    - wedding-network
```

Update `.env`:

```env
CACHE_DRIVER=redis
SESSION_DRIVER=redis
REDIS_HOST=redis
```

### Adding Queue Worker

Add to `docker-compose.yml`:

```yaml
queue:
  build:
    context: .
    dockerfile: Dockerfile
  container_name: wedding-queue
  restart: unless-stopped
  command: php artisan queue:work --sleep=3 --tries=3
  volumes:
    - ./:/var/www/html
  networks:
    - wedding-network
  depends_on:
    - mysql
```

## Support

For issues specific to:
- **Laravel**: Check `storage/logs/laravel.log`
- **Nginx**: `docker-compose logs nginx`
- **PHP-FPM**: `docker-compose logs app`
- **MySQL**: `docker-compose logs mysql`

## Resources

- [Laravel Documentation](https://laravel.com/docs/7.x)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
