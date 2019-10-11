---
id: initial-setup
title: Initial setup
sidebar_label: Initial setup
---

## Requirements

 - Mac OS X, Windows, or Linux
 - NPM package + Node.js v8 or newer
 - Text editor or IDE pre-configured with React/JSX/ESlint

## Quick Start
1. **Clone the latest repository:**
    ```bash
    $ git clone https://github.com/Atyantik/react-pwa.git
    $ cd react-pwa
    ```
2. **Run `npm install` to install dependencies**  
   This will install both run-time project dependencies and developer tools listed in package.json file.  
   
3. **Run the project using `npm start`.**  
   After this step you can access the local web app at `http://localhost:3003`  
   
4. **To build the project run `npm run build`.**  
   This command will build the app from the source files (`/src`) into the output `/dist` folder. 

## Directory Structure

```
project-root
      |-- /dist/                        # The folder for compiled output
      |-- /node_modules/                # 3rd-party libraries and utilities
      |-- /src/                         # The source code of the application
      |    |-- /routes.js               # Page/screen components along with the routing information
      |    |-- /client.js               # Client-side startup script
      |    |-- /server.js               # Server-side startup script
      |    |__ /webpack.js              # Extending the compilation properties of pawjs
      |-- package.json                  # The list of 3rd party libraries and utilities
      |__ pawconfig.json                # Config file for PawJS
```

<div class="custom-slant"></div>  
