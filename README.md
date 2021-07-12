# docker-next

### ローカル環境
- docker 20.10.1
- docker-compose 1.27.4
- git 2.25.1

### 作成する環境
- Node.js: 14.15.4

### サービスの構築
```
$ docker-compose build
```
### Nextをインストールする場合のコマンド(TypeScript化するオプション付き)
```
docker-compose run --rm next yarn create next-app . --typescript
```

### Reactをインストールする場合のコマンド(TypeScript化するオプション付き)
```
docker-compose run --rm next npx create-react-app . --template typescript
```

#### Rreactにする場合の注意点
docker-compose.ymlの10行目を```yarn start```に修正が必要 

### コンテナの作成と立ち上げ
```
$ docker-compose up
```
