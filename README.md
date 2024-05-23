# The code repository for [gpcs.live](https://gpcs.live)

## How to open your terminal:
Hold down the `control` key and press the `~` key (right below the `esc` key).

## How to see your changes in a new tab:
`php -S localhost:3006 -t ./`

## The right way to use git:
- `git checkout main`
- `git pull`
- `git checkout <the name of your branch>`
- `git merge main`
- (fix any "merge conflicts" if they exist)
- *DO WORK*
- `git add .`
- `git commit -m "<tell people what you just did with your code>"`
- `git push` (may need to do `git push origin <the name of your branch>` if that failed)
- Go to github.com and create a *pull request* (from your branch into the main branch)
- Rinse and repeat

## Another way to use git:
- `git checkout <the name of your branch>`
- *DO WORK*
- `git add .`
- `git commit -m "<tell people what you just did with your code>"`
- `git fetch`
- `git merge origin/main`
- (fix any "merge conflicts" if they exist)
- `git push` (may need to do `git push origin <the name of your branch>` if that failed)
- Go to github.com and create a *pull request* (from your branch into the main branch)
- Rinse and repeat
