# Movie Simple Service

## Installation & Local Run
Ensure you have node 12 or higher.

1. `npm install`
2. `cp .env.example .env`
2. `npm run dev`

## Tes & Coverage
Run Unit Test: `npm run test`
Run Unit Test with Coverage: `npm run test:coverage`

## API Call
Local:
```
curl -X GET http://localhost:3001/search
curl -X GET http://localhost:3001/detail
```
