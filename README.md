# Monorepo Unit Test Project

このプロジェクトは、npm workspaceを利用したReactとTypeScriptのユニットテスト用プロジェクトです。<br>
複数のパッケージを含むmonorepo構成となっています。<br>
<br>
ルートディレクトリでユニットテストのパッケージをインストールしています。<br>
npm workspaceで作成したmonorepo構成では、ルートでインストールしたパッケージは、全てのワークスペース（packages/ディレクトリ配下のプロジェクト）で利用できるようになります。

## 目的

npm workspaceの利用とmonorepo構成の環境構築、ユニットテストの学習を目的にしています。

* npm workspaceを利用したmonorepo構成の環境構築
* ユニットテストの環境構築
* ユニットテストの継続的な学習

## 構成

```
monorepo-unittest
  packages/
    react-test/
      src/
        __tests__/
    typescript-test/
      src/
        __tests__/
```

## 依存関係

### ルート

* "@types/jest": "^29.5.14"
* "@types/node": "^22.13.1"
* "jest": "^29.7.0"
* "ts-jest": "^29.2.5"
* "typescript": "~5.7.2"

### reaxt-testプロジェクト

* "@testing-library/dom": "^10.4.0"
* "@testing-library/jest-dom": "^6.6.3"
* "@testing-library/react": "^16.2.0"
* "@testing-library/user-event": "^14.6.1"
* "jest-environment-jsdom": "^29.7.0"
* "typescript": "~5.7.2"

### typescript-testプロジェクト

* "typescript": "~5.7.2"

## 依存関係のインストール

ルートディレクトリでnpm installを実行することで、packages/ディレクトリ内の全てのワークスペースの依存関係も一緒にインストールされます。

``` bash
// ルートディレクトリで実行
npm install
```

## テストの実行手順

### react-testプロジェクト

Storybookのパッケージが含まれる構成になっています。

``` bash
// react-testディレクトリに移動
cd packages/react-test

// 開発サーバーの起動
npm start

// ユニットテストの実行
npm test

// Storybookの起動
npm run storybook
```

### typescript-testプロジェクト

``` bash
// typescript-testディレクトリに移動
cd packages/typescript-test

// ユニットテストの実行
npm test
```

## カバレッジレポートの実行手順

#### カバレッジレポートの出力とHTMLレポートの確認

ルートディレクトリでnpx jest --coverageを実行することで、カバレッジレポートが出力されます。

``` bash
// カバレッジレポートの出力
npx jest --coverage

// 出力されたHTMLレポートの確認
open coverage/lcov-report/index.html

// カスタムレポーターの確認
open jest_html_reportets.html
```

## ブランチ管理

feature/add-storybookブランチは、Storybookの追加と設定を行うためのブランチです。<br>
このブランチで行われた変更は、mainブランチへのプルリクエストを通じてマージされました。



