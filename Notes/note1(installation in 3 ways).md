#  React using bun
## installing bun globally 
- (vite) https://vitejs.dev/guide/
- bun is a package manager 
- bun is fast (https://bun.sh/)
- yarn (33x slower) < npm (29x slower) < pnpm (17x slower) < bun (fast)
> npm i -g bun (globally install bun)
> C:\Users\ASUS\OneDrive\Desktop\ReactJs>bun create vite
- choose project name and then choose Reacts,Javascript
> C:\Users\ASUS\OneDrive\Desktop\ReactJs>cd react-priti
> C:\Users\ASUS\OneDrive\Desktop\ReactJs\react-priti>bun install
> bun run dev or bun dev

- we will use react 19 
- so in package.json the version is 18 so we have to convert it to 19 
> C:\Users\ASUS\OneDrive\Desktop\ReactJs\react-priti>bun install react@rc
>C:\Users\ASUS\OneDrive\Desktop\ReactJs\react-priti>bun install react-dom@rc 


# React with other package manager
# React using pnpm
> pnpm -v (not present in node we have to install it with the help of npm)
> npm i -g pnpm
> pnpm -v
> pnpm create vite
> cd projectname
> pnpm i
> pnpm dev


# React using npm
- in nodejs bydefault npm package maager is present so no need to install npm
> npm  -v
> npm create vite@latest
> cd projectname
> npm i
> npm run dev

