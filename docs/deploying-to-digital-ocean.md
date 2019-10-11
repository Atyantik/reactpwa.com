---
id: deploying-to-digital-ocean
title: Deploying to Digital Ocean
sidebar_label: Digital Ocean
---
## Prerequisites

  - [Digital Ocean Droplet](https://www.digitalocean.com/docs/droplets/how-to/create/)
  - [NodeJs](/blog/2018/07/19/setting-up-amazon-ec2-instance-for-pawjs.html#install-nodejs)
  - [Nginx](/blog/2018/07/19/setting-up-amazon-ec2-instance-for-pawjs.html#install-and-setup-nginx)
  - [PM2 (optional)](/blog/2018/07/19/setting-up-amazon-ec2-instance-for-pawjs.html#install-process-manager)
   
## Step 1: Build and Transfer files to Digital Ocean Droplet

  - Build the Application for the production environment
    ```bash
    $ npm run build
    ```
  - Zip the dist folder
    ```bash
    $ tar cvfz dist.tar.gz dist
    ```
  - Copy the Zip file to the Digital Ocean Droplet
    ```bash
    $ sftp root@IP-of-droplet <<< $'put -r ./dist.tar.gz /path-on-server/'
    ```

## Step 2: Deploy the code
  - Connect to your Digital Ocean Droplet using [SSH](https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/).
  - Unzip the **tar** file and move it to desired dirtectory using the following command:
      ```bash
      $ tar xvzf dist.tar.gz && mv dist /path/
      ```
  - Start the server using:
    ```bash
    $ node server.js
    ```  
  - (**Optional**) Start the process using any of the process managers(**pm2 here**):
    ```bash
    $ cd /path && pm2 start server.js --name="my-site" -i 3 --watch
    ```
  
  <div class="custom-slant"></div>  
