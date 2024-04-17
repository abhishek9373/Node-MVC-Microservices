#!/bin/bash

# Author : Abhishek Gund
# Copyright (c) App Backend
# Script follows here:


HOSTS="ip"
SCRIPT="whoami; sudo su - uat -c 'whoami; cd ../uat/backend-separate-microservices/service-feeds && git pull && pm2 restart 15'"
USERNAME="stage"
echo "Enter your commit message 123!!"
read message
# git checkout config/config.json
git add .
git commit -m"${message}"
git status
branch_name="uat"
git push origin "${branch_name}"

for HOSTNAME in ${HOSTS} ; do
    echo "Entering ${HOSTNAME}"
    ssh ${USERNAME}@${HOSTNAME} "${SCRIPT}"
    echo "Enter"
done