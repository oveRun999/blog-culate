# Team Blog Hub

![Demo](https://user-images.githubusercontent.com/34590683/96832331-8c289400-1479-11eb-9466-f24d30860a24.png)

企業/チームのためのブログ・スターターです。Fork してご自由にお使いください。

ブログの RSS の URL を登録することで、チームメンバーの投稿を一覧にまとめて表示します。Zenn、Qiita、Medium、note、はてなブログなど、RSS フィードを取得できるサイトであれば、メンバーは好きな場所に投稿できます。

詳しくは下記の記事をご覧ください。

[チーム個々人のテックブログを RSS で集約するサイトを作った →](https://zenn.dev/catnose99/articles/cb72a73368a547756862)

## Demo

https://team-blog-hub.vercel.app

## Development

```bash
$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールや RSS の登録は`blogUrl.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

その他、ご自由にコードを書き換えてください。

## Deployment

Vercel や Netlify にデプロイすることを推奨します。`yarn build`を実行することで、RSS からの投稿データの取得とサイトのビルドが行われます。1 日に 1 回などの頻度で自動デプロイするのが良いかもしれません。

## Licence

MIT
