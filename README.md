
## Instruccion antes de ejecutar el proyecto:

1. Modificar la extension del archivo `.env.local.example`  por `.env.local`

2. Ejecutar el comando npm install para instalar las dependencias.

3. Levantar la app con el comando `npm run dev`


## Importante

El desafio `#1 Desafío 1: Implementar una página de inicio de sesión utilizando Auth0 en Next.js.`
esta resuelto en el modulo: `src/pages/auth/signin/index.tsx`, pero como explica la documentacion [auth0js#login](https://auth0.com/docs/libraries/auth0js#login) , y luego de varias pruebas, en un dominio de ambiente local, no ha sido posible realizar la utenticacion de usuario.
Sin embargo la interfaz y los metodos estan sobre el modulo, funciona el flujo bastante bien hasta el punto de autenticarse, validar las credenciales, pero no se puede desarrollar la session del usuario.












This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
