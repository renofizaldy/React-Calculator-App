# README

Live Demo on: https://calc-app.renofizaldy.com/

Welcome to Simple Calculator App made by [RedwoodJS](https://redwoodjs.com) (ReactJS as Frontend - GraphQL as API Backend)

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Start by installing dependencies:

```
yarn install
```

Try to migrate database first:

```
yarn rw prisma migrate dev
```

Rename .env.defaults to .env with DATABASE_URL variables that contain:

```
DATABASE_URL=postgresql://postgres:LyBqA6eOsd6xhyyelMzm@containers-us-west-73.railway.app:6865/railway
```

Then change into that directory and start the development server:

```
cd calc-app
yarn rw dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the Welcome Page, which links out to a ton of great resources.

> **The Redwood CLI**
>
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal:
> ```
> yarn redwood --help
> ```
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).