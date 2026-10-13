git checkout -b develop
git add .
git commit -m "feat: test staging automated deployment"
git push origin develop

git checkout main
git merge develop
git push origin main
