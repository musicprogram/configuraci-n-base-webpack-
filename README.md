configurar webpack y el entorno de desarrollo

- carpeta src/app todos los archivos y logica

- terminal

- sudo npm init -y //iniciar npm

- sudo npm i webpack webpack-dev-server html-webpack-plugin webpack-cli -D // herramientas de desarrollo 

- crear archivo webpack.config.js 

- crear nuevo script en package.json //  "build": "webpack --mode production"

- npm run build // run build 

- "dev": "webpack-dev-server --mode development" // agregar script en package.json para el servidor de desarrollo

- npm run dev // run dev 

- gitignore // para no exportar a github los modulos