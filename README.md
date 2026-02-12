# TCBlog UI - Next.js Frontend

Frontend repository for my personal blog app [TCBlog](https://blog.tarikceylan.com) built with **Next.js and React** that consumes [tcblog-core](https://github.com/tarikceylan/tcblog-core) API.

## Tech Stack

- Next.js / React
- Tailwind CSS
- TypeScript
- Axios
- Responsive UI
- Modular Components

## Architecture

```
src/app
├── app/ → next route, pages and layout
├── components/ → reusable UI
├── contexts/ → auth state
├── lib/
├─── actions/ → next server actions
├─── services/ → API calls
├─── utils/ → helpers
├─── validations/ → zod validations
└── styles/
```

## Features

- Blog listing & detail pages
- Authentication UI
- Admin post management
- Full Markdown Support
- Responsive design
- API integration

## Installation

```bash
git clone https://github.com/tarikceylan/tcblog-ui.git
cd tcblog-ui
npm install
```

## Environment Variables

Create a `.env` -or- `.env.development` file

```
NEXT_PUBLIC_API_URL=http://localhost:<port>
API_BASE_URL=<production_api_url>
```

## Run

### Development

`npm run dev`

### Production

```bash
npm run build
npm start
```

### Future Improvements

- Responsive design issues will be fixed
- Unit and E2E Tests
- Docker Support
