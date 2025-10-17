# JokeAPI

Lightweight RESTful API that serves jokes on demand. Designed for simple integration with web and mobile apps, bots, or CLI tools.

## Features
- RESTful endpoints for fetching single or multiple jokes
- Filter by category, language, and content safety
- Supports random and specific-ID retrieval
- Simple JSON responses for easy parsing
- Extensible: add providers, categories, or persistence

## Getting started

Requirements
- Node.js 14+ (or compatible runtime)
- npm/yarn (if running from source) or Docker

Install and run
1. Clone the repo and install dependencies:
    - git clone <repo>
    - cd <project>
    - npm install

2. Configure (create `.env` or set env vars)
    - PORT=3000
    - NODE_ENV=development
    - SAFE_MODE=true          # filter explicit content (optional)

3. Start the server:
    - npm start
    - or for development: npm run dev

Docker
- Build: docker build -t jokeapi .
- Run: docker run -p 3000:3000 -e PORT=3000 jokeapi

## API

Base URL: http://localhost:3000 (adjust for deployment)

Endpoints
- GET /jokes
  - Description: List jokes (supports pagination and filters)
  - Query params:
     - category (string) — e.g. "programming", "general"
     - type (string) — "single" or "twopart"
     - safe (boolean) — filter NSFW content when true
     - lang (string) — language code, e.g. "en"
     - limit (int) — number of jokes
     - page (int) — pagination page

- GET /jokes/random
  - Description: Return a single random joke
  - Query params: category, type, safe, lang (same as above)

- GET /jokes/:id
  - Description: Retrieve a specific joke by ID

- POST /jokes
  - Description: Add a new joke (requires JSON body)
  - Body example:
     {
        "category": "general",
        "type": "single",
        "joke": "Why did the chicken cross the road? To get to the other side."
     }
  - Response: 201 Created with created joke object

- DELETE /jokes/:id
  - Description: Remove a joke by ID (may require auth in production)

Response format (JSON)
- Success:
  {
     "success": true,
     "data": { ... } | [ ... ],
     "meta": { "total": 123, "page": 1 }
  }
- Error:
  {
     "success": false,
     "error": { "code": 400, "message": "Bad Request" }
  }

Status codes commonly used
- 200 OK — successful GET
- 201 Created — successful POST
- 400 Bad Request — validation error
- 404 Not Found — resource missing
- 500 Internal Server Error — server error

## Examples

cURL (random joke)
- curl "http://localhost:3000/jokes/random?category=programming&safe=true"

JavaScript (fetch)
- fetch('/jokes/random')
  .then(r => r.json())
  .then(data => console.log(data))

POST example (create joke)
- curl -X POST http://localhost:3000/jokes -H "Content-Type: application/json" -d '{"category":"general","type":"single","joke":"I told my computer I needed a break, and it said no problem — it froze."}'

## Testing
- npm test
(Configure unit and integration tests to cover endpoints and validation)

## Contributing
- Fork, create a feature branch, submit PR
- Follow code style and include tests for new functionality

## License
- Choose an appropriate open source license and add LICENSE file (e.g., MIT)

## Notes
- In production, enable rate limiting, authentication for write/delete endpoints, logging, and input validation.
- Extendable to multiple joke providers or persisted stores.

- GitHub Copilot