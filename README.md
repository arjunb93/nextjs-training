## NextJS Training

## Prerequisites
- Docker & Docker Compose (v2 / `docker compose` CLI)
- .env credentials (if any)

## Running the application (local)
Run the below command to run the application:
````bash
docker compose \
    -f docker-compose.yml \
    -f docker-compose.dev.yml up --build
````

Application should be available in below domains:
- [Frontend](http://frontend.nextjs.localhost/)