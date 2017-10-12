#!/usr/bin/env bash
yarn test
yarn build
cd dist && tar cvfz ../dist.tar.gz . && cd ..
scp dist.tar.gz $ATYANTIK_USER@$ATYANTIK_SERVER:$DEPLOY_PATH
ssh $ATYANTIK_USER@$ATYANTIK_SERVER "cd $DEPLOY_PATH && tar xvzf dist.tar.gz --overwrite"
ssh $ATYANTIK_USER@$ATYANTIK_SERVER "cd $DEPLOY_PATH && rm -rf dist.tar.gz"
ssh $ATYANTIK_USER@$ATYANTIK_SERVER "(which pm2 && ((pm2 restart reactpwa --update-env) || (cd $DEPLOY_PATH && pm2 start server.js --name=\"reactpwa\" -i 3 --watch))) &> /dev/null || echo \"OK\""