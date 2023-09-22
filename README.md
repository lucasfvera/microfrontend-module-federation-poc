# Micro Frontend application with Module Federation approach

This is an example repository for building a Micro Frontend architecture with
Module Federation from Webpack 5.


It uses Create React App and Next.js to build the host and remotes.

## Existing Apps

- container_react\
  A host app built in react

- home_react\
  A remote app built in react that exposes a whole page

- posts_next\
  A remote app built in Next.js that exposes a whole page

- articles_next\
  A host app built in Next.js

## Order in Which the Hosts Apps Render the Remote Apps

`container_react` renders:\
|_ path __'/'__ -> `home_react` app exposed page\
|_ path __'/posts'__-> `posts_next` app exposed page (this doesn't work yet)


`articles_next` renders:\
|_ path: __'/'__ -> `home_react` app card component