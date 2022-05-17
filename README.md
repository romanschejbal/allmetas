This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the schema fetch command:

```bash
yarn get-schema
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

## Project Structure

```bash
src
├── components # here we keep dummy or reusable components
│   ├── Button
│   │   ├── index.tsx
│   └── Form # form components are not exactly "dummy" but they are reusable, we can put them in their respective folder
│       ├── CheckboxField.tsx
│       ├── RadioField.tsx
│       ├── SelectField.tsx
│       └── TextField.tsx
├── containers # here we have components that contain a certain behaviour or a concrete composition of "components"
│   └── signup-form # example
│       └── index.tsx
├── pages # pages / routes
│   ├── _app.tsx
│   ├── index.tsx
│   └── signup.tsx
└── styles
    └── globals.css # necessary global styling
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
