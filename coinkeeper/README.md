# CoinKeeper - Personal Finance Management

## Docker Deployment Guide

### Prerequisites
- Docker installed on your server
- Docker Compose installed on your server
- Git to clone the repository
- Nginx (optional, for proxying requests)

### Setup Instructions

1. **Clone the repository:**
```bash
git clone <your-repository-url>
cd coinkeeper
```

2. **Set up environment variables:**
   
   Create a `.env` file in the root directory with the following variables:
```env
# Database (already configured for the cloud database)
DATABASE_URL="postgresql://postgres:(9IeuwbxaDwckDue@176.123.179.219:5432/coinkeeper"

# Next Auth - CHANGE THESE FOR SECURITY
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-a-secure-random-string"

# OAuth Providers (if needed)
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""

# Application Settings
NODE_ENV="production"
PORT=3000
NEXT_LINT_DISABLE=1
```

3. **Build and start the Docker container:**
```bash
docker-compose up -d --build
```

4. **Check container status:**
```bash
docker-compose ps
```

5. **Check application logs:**
```bash
docker-compose logs -f app
```

### Port Configuration

The application is configured to run inside Docker on port 3000, but is exposed externally on port 6000. This means you can access it at:

```
http://your-server-ip:6000
```

### Nginx Configuration (Optional)

If you want to set up Nginx as a reverse proxy for your application, create a new file in `/etc/nginx/sites-available/coinkeeper`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:6000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/coinkeeper /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### HTTPS Configuration (Recommended)

For production, it's strongly recommended to set up HTTPS with Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Updating the Application

To update your application to the latest version:

```bash
git pull
docker-compose up -d --build
```

### Stopping the Application

```bash
docker-compose down
```

### Backup and Restore

Since the database is hosted in the cloud, you don't need to worry about database backups within the Docker container.

## Security Considerations

1. **Environment Variables**: 
   - Never commit `.env` files to your repository.
   - Generate a strong random string for `NEXTAUTH_SECRET` using:
     ```bash
     openssl rand -base64 32
     ```
   - Always use HTTPS in production (set `NEXTAUTH_URL` to use https).

2. **Docker Security**:
   - The application runs as a non-root user inside the container.
   - Keep Docker and all dependencies updated.
   - Consider using Docker secrets for more sensitive environments.

## Troubleshooting

If you encounter issues with the application:

1. Check the container logs:
```bash
docker-compose logs -f app
```

2. Verify database connectivity:
```bash
docker-compose exec app node -e "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); async function main() { try { const result = await prisma.$queryRaw\`SELECT 1\`; console.log('Database connection successful:', result); } catch (e) { console.error('Database connection failed:', e); } finally { await prisma.$disconnect(); } } main()"
```

3. Check the health endpoint:
```bash
curl http://localhost:6000/api/health
```

## Development Environment

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

For local development:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
