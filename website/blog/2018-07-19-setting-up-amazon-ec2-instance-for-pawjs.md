---
title: Setting up Amazon EC2 instance for PawJS
author: Yash Thakur
authorURL: https://www.yashthakur.in
authorFBID: 1472013489
---

## Prepare Amazon EC2 Instance
 - ### Log into your AWS account
    Log into the [AWS Management Console](https://console.aws.amazon.com/).

 - ### Launch Amazon EC2 Instance
   In the Amazon EC2 Dashboard, choose "Launch Instance" to create and configure your virtual machine.

 - ### Configure the Instance
   In this wizard, you have the option to configure your instance features. Below are some guidelines on setting up 
   your first instance.
   <!--truncate-->
   - Choose an Amazon Machine Image (AMI): In step 1 of the wizard, I recommend **Latest Ubuntu Server LTS**.
   - Choose an instance type: In step 2 of the wizard, I recommend **t2.micro** for testing.
   - Launch instance: In step 7, review your instance configuration and choose "Launch".
   - Create a key pair: Select "Create a new key pair" and assign a name. The key pair file (.pem) will download 
   automatically - save this in a safe place as we will later use this file to log in to the instance. Finally, choose 
   "Launch Instances" to complete the set up.

 - ### Connect to the Instance
   - In a command-line shell, change directories to the location of the private key file that you created when you launched the instance.
   - Use the following command to set the permissions of your private key file so that only you can read it. 
     ```
     $ chmod 400 /path/my-key-pair.pem
     ```
   - Use the ssh command to connect to the instance. You specify the private key (.pem) file and ubuntu@public_dns_name. 
      ```bash
      $ ssh -i /path/my-key-pair.pem ubuntu@ec2-198-51-100-1.compute-1.amazonaws.com
      ```
A more detailed guide of **Getting Started with Amazon EC2** can be found [here](https://aws.amazon.com/ec2/getting-started/).

<div class="custom-slant"></div>

## Install NodeJS

To install NodeJS, you can follow the guide [here](https://nodejs.org/en/download/package-manager/). I recommend you to use Latest **NodeJS** version.

For **Ubuntu**, the steps are as follows:
 - Node.js is available from the NodeSource Debian and Ubuntu binary distributions repository
   ```bash
   $ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
   $ sudo apt-get install -y nodejs
   ```
 - **Optional**: install build tools   
   ```bash
   $ sudo apt-get install -y build-essential
   ```
 
## Install and Setup Nginx
You can install Nginx by following the guide [here](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source). 

For **Ubuntu**, Nginx is available in Ubuntu's default repositories, so the installation is rather straight forward.
 - Update the Debian repository information:
   ```bash
   $ sudo apt-get update
   ```
 - Install the NGINX Open Source package:
   ```bash
   $ sudo apt-get install nginx
   ```
 - Verify the installation:
   ```bash
   $ sudo nginx -v
   ```
 - To redirect all request to Node app, open and edit Nginx configuration file.
   ```bash
   $ sudo nano /etc/nginx/sites-available/my-site.conf
   ```
   
   Add the following config to the file
   
   ```
   server {
       server_name mysite.com www.mysite.com;
   #    location ~* \.(eot|otf|ttf|woff|woff2)$ {
            add_header Access-Control-Allow-Origin *;
   #    }
       location / {
           proxy_set_header HOST $host;
           proxy_set_header X-Host $host;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_pass http://127.0.0.1:port_of_your_app;
           proxy_connect_timeout 600;
           proxy_send_timeout 600;
           proxy_read_timeout 600;
           send_timeout 600;
       }
   }
   ```

    Save it by press CTRL+O then exit the Nano editor by press CTRL+X. 
    
    Create a Symbolic Link of the file to `sites-enabled`:
    ```bash
    $ ln -s /etc/nginx/sites-available/my-site.conf /etc/nginx/sites-enabled/
    ```
    
    To test Nginx configuration, type this command.
    ```bash
    $ sudo nginx -t
    ```
    If the status is `OK` continue further.
 - To restart Nginx type this command.
    ```bash
    $ sudo service nginx restart
    ```
<div class="custom-slant"></div>  

## Install Process Manager

The most popular process managers for Express and other Node.js applications are as follows:
 - [Forever](https://github.com/foreverjs/forever)
 - [PM2](https://pm2.io/doc/)
 - [StrongLoop Process Manager](http://strong-pm.io/)
 - [SystemD](https://www.axllent.org/docs/view/nodejs-service-with-systemd/)
 
For more information, see [Process managers for Express apps](https://expressjs.com/en/advanced/pm.html)
 - PM2 is a tool for managing Node.js process. To install it, type this command.
   ```bash
   $ sudo npm install -g pm2
   ```
 - Run the Node app using PM2 as follows:
   ```bash
   $ cd /path/your-project && pm2 start server.js --name="my-site" -i 3 --watch
   ```
