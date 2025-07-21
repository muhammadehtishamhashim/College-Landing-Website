#!/bin/bash
set -e

echo "Publishing project to GitHub..."

if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

git add .

git commit -m "1.0 Structure" || echo "...existing code... (no new changes to commit)"

# Automatically set remote URL for the College-Landing-Website repo
remote_url="https://github.com/muhammadehtishamhashim/College-Landing-Website.git"
echo "Using remote URL: $remote_url"

if git remote | grep -q origin; then
    echo "Updating remote URL..."
    git remote set-url origin "$remote_url"
else
    echo "Adding remote origin..."
    git remote add origin "$remote_url"
fi

git branch -M main

git push -u origin main

echo "Project successfully published to GitHub!"