#CoinKeeper Documentation
CoinKeeper is a comprehensive personal finance management application that helps users track expenses, manage budgets, set financial goals, and gain insights through detailed reports and analytics.


##Features
- User Authentication: Secure registration and login system
- Account Management: Create and manage multiple financial accounts
- Transaction Tracking: Record income and expenses with categorization
- Budgeting: Set and monitor spending limits by category
- Financial Goals: Create and track savings goals
- Reports & Analytics: Visualize spending patterns and financial health
- Multi-language Support: English, Russian, and Kazakh languages

##Technology Stack
- Frontend: Next.js, TypeScript, React
- Backend: Next.js API Routes
- Database: PostgreSQL with Prisma ORM
- Authentication: NextAuth.js
- Containerization: Docker
- Styling: Material Design

## Project Structure
```
coinkeeper/
├── src/
│   ├── app/
│   │   ├── api/            # API routes
│   │   │   ├── auth/       # Authentication endpoints
│   │   │   ├── accounts/   # Account management
│   │   │   ├── budgets/    # Budget management
│   │   │   ├── categories/ # Category management
│   │   │   ├── dashboard/  # Dashboard statistics
│   │   │   ├── goals/      # Financial goals
│   │   │   ├── reports/    # Financial reports
│   │   │   ├── transactions/ # Transaction management
│   │   │   └── user/       # User settings
│   ├── lib/                # Shared utilities
│   │   ├── auth.ts         # Authentication configuration
│   │   └── prisma.ts       # Database client
│   └── providers/          # React context providers
│       └── language-provider.tsx # Translation system
├── docs/                   # Documentation
├── middleware.ts           # Next.js middleware
├── docker-compose.yml      # Docker configuration
└── README.md               # Project overview

```
##Database 
###Database Schema
The database schema is designed around core financial entities with the following relationships:

- Users: Central entity that owns all financial data.
- Accounts: Belong to a user (many-to-one). Each user can have multiple accounts.
- Transactions: Many-to-one relationships with both users and accounts. Each transaction also has an optional many-to-one relationship with a category.
- Categories: Belong to a user (many-to-one). Used to categorize transactions.
- Budgets: Belong to a user (many-to-one) and have a many-to-one relationship with categories.
- Goals: Belong to a user (many-to-one).
- UserSettings: One-to-one relationship with users.
- The schema uses foreign keys to maintain referential integrity and includes indexes on frequently queried columns to optimize performance. We implemented soft deletion across entities to maintain historical data while allowing users to "delete" records.

###Database optimizations:

- Indexing: Created indexes on frequently queried columns like user_id, account_id, and category_id as shown in the migration files.
- Query Optimization: Used Prisma's select and include features to fetch only necessary data.
- Pagination: Implemented for transaction listings to limit result sets.
- Soft Deletion: Instead of removing records, we mark them as deleted, which simplifies queries (always filter by deletedAt: null).
- Transaction Batching: Used Prisma transactions for operations that affect multiple records to ensure data consistency.
- Efficient Filtering: Implemented dynamic where clauses based on user filters.
- Proper Data Types: Used appropriate data types for each column to minimize storage requirements.
- These optimizations ensure the application remains responsive even as the dataset grows.

##Local Development Setup
###Prerequisites
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL database (local or remote)
- Git
- Environment Variables

Create a .env file in the root directory with the following variables:
```
#Database
DATABASE_URL="postgresql://username:password@localhost:5432/coinkeeper"

#NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Optional OAuth Providers
# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""

# Application Settings
NODE_ENV="development"
```

###Installation Without Docker
1. Clone the repository
```
git clone https://github.com/yourusername/coinkeeper.git
cd coinkeeper
```

2. Install dependencies
```
npm install
 #or
yarn install
```

3. Set up the database
```
npx prisma generate
npx prisma migrate dev
```

4. Start the development server
```
npm run dev
# or
yarn dev
```

5. Access the application
Open your browser and navigate to http://localhost:3000


### Installation With Docker

1. Clone the repository
```
git clone https://github.com/yourusername/coinkeeper.git
cd coinkeeper
```

2. Set up environment variables
Create a .env file as described in the Environment Variables section.

3. Build and start the Docker containers
docker-compose up -d --build

4. Access the application
Open your browser and navigate to http://localhost:6000

To stop the Docker container: `docker-compose down`


## API Documentation
- Authentication
	- POST /api/auth/register - Register a new user
	- POST /api/auth/signin - Sign in (handled by NextAuth)

- User Settings
	- GET /api/user/settings - Get user profile and preferences
	- PUT /api/user/settings - Update user profile and preferences
	- POST /api/user/settings/password - Change user password

- Accounts
	- GET /api/accounts - List all accounts
	- POST /api/accounts - Create a new account
	- PUT /api/accounts - Update an account
	- DELETE /api/accounts/[id] - Delete an account

- Transactions
	- GET /api/transactions - List transactions with filtering
	- POST /api/transactions - Create a new transaction
	- DELETE /api/transactions/[id] - Delete a transaction

- Categories
	- GET /api/categories - List all categories
	- POST /api/categories - Create a new category
	- DELETE /api/categories/[id] - Delete a category

- Budgets
	- GET /api/budgets - List all budgets
	- POST /api/budgets - Create a new budget
	- DELETE /api/budgets/[id] - Delete a budget

- Goals
	- GET /api/goals - List all financial goals
	- POST /api/goals - Create a new financial goal
	- GET /api/goals/[id] - Get a specific goal
	- DELETE /api/goals/[id] - Delete a goal

- Analytics
	- GET /api/dashboard/stats - Get dashboard statistics
	- GET /api/reports - Get detailed financial reports

Translation System
CoinKeeper uses a custom translation system to support multiple languages:
```
// Import the language hook
import { useLanguage } from '@/providers/language-provider';

// Use in your component
const { t, language, setLanguage } = useLanguage();

// Translate text
<Typography>{t('dashboard')}</Typography>

// Change language
<Button onClick={() => setLanguage('ru')}>Русский</Button>
```



#Deployment

Production Deployment with Docker

1. Set up environment variables for production

```
#Database
DATABASE_URL="postgresql://postgres:(9IeuwbxaDwckDue@176.123.179.219:5432/coinkeeper"

# NextAuth
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="generate-a-secure-random-string"

# Application Settings
NODE_ENV="production"
PORT=3000
NEXT_LINT_DISABLE=1

```


2. Build and start the Docker container
`docker-compose up -d --build`



3. Access the application
The application will be available at http://your-server-ip:6000

### Optional Nginx Configuration
Create a new file in /etc/nginx/sites-available/coinkeeper:
```
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
```
sudo ln -s /etc/nginx/sites-available/coinkeeper /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

HTTPS Configuration
```
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

##Security Considerations

1. Environment Variables:
Never commit .env files to your repository
2. Generate a strong random string for NEXTAUTH_SECRET:
`openssl rand -base64 32`
3. Always use HTTPS in production
4. Docker Security:
	The application runs as a non-root user inside the container
	Keep Docker and all dependencies updated
	Consider using Docker secrets for sensitive environments


##Troubleshooting
###Common Issues

####Database Connection Errors:
- Verify your DATABASE_URL is correct
- Ensure the database server is running
- Check network connectivity to the database server

####Authentication Issues:
- Verify NEXTAUTH_SECRET and NEXTAUTH_URL are set correctly
- Check that cookies are being properly set and not blocked

####Docker Issues:
- Check container logs: docker-compose logs -f app
- Verify port mappings: docker-compose ps
- Ensure Docker has sufficient resources


For additional support, please check the project repository issues or contact the development team.