---
id: deploying-to-heroku
title: Deploying to Heroku
sidebar_label: Heroku
---


## Prerequisites

 - [Heroku Account](https://www.heroku.com/)
 - [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
 - [Git CLI](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
 

## Step 1: Create a Procfile
  Heroku apps include a Procfile that specifies the commands that are executed by the app’s dynos. 
  
  Add a new file named `Procfile` in the root of your project folder. The Procfile is always a simple 
  text file that is named `Procfile` exactly. For example, `Procfile.txt` is not valid.
  

### Procfile Content

A Procfile declares its process types on individual lines, each with the following format:
```
<process type>: <command>
```

The code for `Procfile` will be:
```
web: node dist/server.js
```

## Step 2: Remove `dist` from .gitignore 

Make sure that `dist` folder is not ignored in the `.gitignore` file. Else, comment it as shown below:


```
...
# dist
...
```

## Step 3: Build the App.

Build the app using the following command:

```
$ npm run build
```

This will create a `dist` folder in the root directory of the project.


## Step 4:  Add dist & Procfile folder to repository

```
$ git add . // Add everything
// --- OR --- 
$ git add dist // Just the dist folder
$ git add Procfile // Just add the Procfile

$ git commit -m "Adding dist folder & Procfile to the repository" 
```

## Step 5: Create Heroku Remote

The `heroku create` CLI command creates a new empty application on Heroku, 
along with an associated empty Git repository. If you run this command from 
your app’s root directory, the empty Heroku Git repository is automatically 
set as a remote for your local repository.

```
$ heroku create
Creating app... done, ⬢ thawing-inlet-61413
https://thawing-inlet-61413.herokuapp.com/ | https://git.heroku.com/thawing-inlet-61413.git
```

**Add the remote named `heroku` to existing repository**

```bash
$ git remote add heroku  https://git.heroku.com/thawing-inlet-61413.git
```

## Step 6: Deploy the code

To deploy your app to Heroku, you typically use the `git push` command to push 
the code from your local repository’s `master` branch to your `heroku` remote.

```
$ git push heroku master
Initializing repository, done.
updating 'refs/heads/master'
...
```

Use this same command whenever you want to deploy the latest committed version of your code to Heroku.

> **Note: Make sure to build the app before committing and pushing the code to git. Heroku only deploys code that you push to the master branch of the heroku remote. 
Pushing code to another branch of the remote has no effect.**


<div class="custom-slant"></div>  
