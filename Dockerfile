# Use official Node.js LTS image
FROM node:20

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy pnpm files first for better caching
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose the port
EXPOSE 5000

# Start the app
CMD ["pnpm", "dev"]
