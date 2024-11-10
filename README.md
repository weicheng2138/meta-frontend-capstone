# Meta Frontend Capstone

You can browse the **Login** and press `Reserve a Table` to get the form action and context from my assignment. Please try it.

## Setup bash

```bash
pnpm install
```

```bash
pnpm dev
```

Test for BookingForm.jsx

```bash
pnpm test
```

## Deploy using `gh-pages`

- Add script of deploy in package.json with `vite build && gh-pages -d dist`

```bash
pnpm add -D gh-pages
```

```js
export default defineConfig({
  plugins: [react()],
  base: "/meta-frontend-capstone/",
});
```

## Deploy using `github action`

1. Generate access token from user settings and copy the `token`
2. Go to the target project `Settings` > `Secrets and variables` > `Actions`
3. Press `New repository secret` and give it a name of 'GH_ACCESS_TOKEN' and paste the token from step 1.
4. Get to the target project `Actions` tab, press `New workflow` and press `set up a workflow yourself`
5. Config as follow

```yml
# workflow的名字
name: deploy

# 當以下事件發生時，觸發
on:
  # 這邊設定的是：push/pullrequest到main時即觸發
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

  # 有加這行可以手動觸發actions
  workflow_dispatch:

# 觸發內容
jobs:
  # 這個workflow有個job叫做build
  build:
    # 這個job要run在ubuntu上
    runs-on: ubuntu-latest

    # job的步驟要做些什麼咧
    steps:
      # 1. 專門for node.js的actions，記得依node.js版本更新其後version
      - uses: actions/checkout@v4
      # 內容build起來
      - name: Install & Build # 執行
        run: |
          npm install
          npm run build

      # 2. deploy
      - name: Deploy
        # 別人的actions拿來借用
        uses: JamesIves/github-pages-deploy-action@releases/v4
        with:
          token: ${{ secrets.GH_ACCESS_TOKEN }} # Settings > Secret 建立的 ACCESS_TOKEN，推同個 repo 的話可以不需要
          BRANCH: gh-action # deploy 到 gh-pages 這個分支
          FOLDER: dist # build 後的資料夾
```
