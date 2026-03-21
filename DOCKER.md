# Docker Documentation for British Military Medal Registry

This document provides essential commands and troubleshooting tips for running the project using Docker.

## Quick Start

To start all services (API, Web, and Database) in the background:

```powershell
docker-compose up -d
```

To view logs for all services:

```powershell
docker-compose logs -f
```

To stop all services:

```powershell
docker-compose down
```

## Common Commands

### Rebuilding Services
If you make changes to `package.json` or `Dockerfile` files, you need to rebuild the images:

```powershell
docker-compose up -d --build
```

### Clearing Cache and Data
To completely reset the environment (removes containers, networks, and database volumes):

```powershell
docker-compose down -v
```

### Disk Space Management
If you're running low on disk space on your drive (e.g., drive D:), use these commands to clean up unused Docker objects:

```powershell
# Remove all stopped containers, unused networks, and dangling images
docker system prune -f

# Deeper cleanup (removes all unused images and build cache)
docker system prune -a -f --volumes
```

## Development and Troubleshooting

### Hot Module Replacement (HMR)
The project is configured to use **polling** to ensure file changes on the host (Windows/macOS) are detected inside the Docker container.

- **Web (Next.js):** Uses Webpack polling (1000ms) configured in `apps/web/next.config.ts`.
- **API (NestJS):** Uses `poll: 1000` configured in `apps/api/nest-cli.json`.

If changes are not reflecting in your browser:
1. Ensure `WATCHPACK_POLLING=true` is set in `docker-compose.yml`.
2. Try a clean restart: `docker-compose down; docker-compose up -d --build`.
3. Clear your browser cache or use an Incognito window.

### Database Access
The Postgres database is exposed on port `5432`.

- **User:** `user`
- **Password:** `password`
- **Database:** `medal_db`

To enter the database container and run SQL commands:

```powershell
docker-compose exec db psql -U user -d medal_db
```

## Logs and Debugging

### Specific Service Logs
- **Web:** `docker-compose logs -f web`
- **API:** `docker-compose logs -f api`
- **DB:** `docker-compose logs -f db`

### Executing Commands Inside Containers
To open a shell inside the web container:

```powershell
docker-compose exec web sh
```
