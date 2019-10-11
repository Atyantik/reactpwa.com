---
id: deploying-to-amazon-ec2
title: Deploying to Amazon EC2
sidebar_label: Amazon EC2
---

## Prerequisites

  - Amazon EC2 Instance
  - NodeJs 
  - Nginx
  - PM2 (optional)
   
   The guide to the above prerequisites can be found [here](/blog/2018/07/19/setting-up-amazon-ec2-instance-for-pawjs.html)
   
## Step 1: Build and Transfer files to Amazon EC2 Instance
  - Build the Application for the production environment
    ```bash
    $ npm run build
    ```
  - Zip the dist folder
    ```bash
    $ tar cvfz dist.tar.gz dist
    ```
  - Copy the Zip file to the Amazon EC2 Instance
    ```bash
    $ scp -i /path/my-key-pair.pem /path/dist.tar.gz ubuntu@c2-198-51-100-1.compute-1.amazonaws.com:~/path
    ```

## Step 2: Deploy the code
  - Connect to your Amazon EC2 Instance using [SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html).
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
