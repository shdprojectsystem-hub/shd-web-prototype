#!/bin/bash
# DEPLOY STUB — run on local SHD workstation
set -e
REPO_REMOTE="git@github.com:USERNAME/shd-web-prototype.git"  # update this
cd /path/to/SHD_Web_Prototype_Task2
git init
git add .
git commit -m "chore(task2): prototype — Profile & Gateway (Task 2) with GH Actions"
git branch -M main
git remote add origin $REPO_REMOTE
git push -u origin main
echo "PUSH COMPLETE — cek repo: $REPO_REMOTE"
