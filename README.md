## Installation Steps

1. npm i lucia @lucia-auth/adapter-prisma prisma @prisma/client @tanstack/react-query @tanstack/react-query-devtools @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder @tiptap/pm uploadthing @uploadthing/react arctic date-fns ky next-themes react-cropper react-image-file-resizer react-intersection-observer react-linkify-it stream-chat stream-chat-react --legacy-peer-deps

2. npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss --legacy-peer-deps

3. npx --legacy-peer-deps shadcn-ui@latest init

4. npx --legacy-peer-deps shadcn-ui@latest add button dialog dropdown-menu form input label skeleton tabs textarea toast tooltip

## UPDATE VSC SETTINGS

1. file association
2. editor quick suggestions => turn on strings setting

## Configure prettier code formatter

1. create prettier.config.js file

2. set vsc setting => default fromatter = prettier

## Add prettier to eslint.json file

## prisma terminals

1. npx prisma init
2. npx prisma db push
3. npx prisma studio

## src => auth.ts = lucia boilerplate for usersessions

1. setup form validation.ts in the lib folder for the form
   responses powered by zod