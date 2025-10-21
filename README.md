# 私のポートフォリオサイト

モダンでレスポンシブなポートフォリオサイトです。HTML、CSS、JavaScriptを使用して作成されています。

## 概要

このポートフォリオサイトは、開発者のスキルやプロジェクトを紹介するための静的ウェブサイトです。以下の機能を含んでいます：

- **レスポンシブデザイン**: モバイル、タブレット、デスクトップに対応
- **ナビゲーションバー**: スムーズなスクロール機能付きのナビゲーション
- **ヒーローセクション**: 魅力的なファーストビュー
- **自己紹介セクション**: プロフィールと経歴の紹介
- **スキルセクション**: 技術スタックの表示
- **プロジェクトセクション**: ポートフォリオ作品の紹介
- **お問い合わせフォーム**: 訪問者からのメッセージを受け取るフォーム

## 技術スタック

- HTML5
- CSS3（アニメーション、フレックスボックス、グリッドレイアウト）
- JavaScript（バニラJS）

## インストール方法

### 必要な環境

- モダンなウェブブラウザ（Chrome、Firefox、Safari、Edgeなど）
- テキストエディタ（VS Code、Sublime Text、Atomなど）

### セットアップ手順

1. リポジトリをクローンする：
```bash
git clone https://github.com/katzkawai/claude-web-samples.git
cd claude-web-samples
```

2. ブラウザでindex.htmlを開く：
   - ファイルマネージャーからindex.htmlをダブルクリック、または
   - ブラウザでファイルをドラッグ&ドロップ

### ローカルサーバーでの実行（推奨）

より良い開発体験のために、ローカルサーバーを使用することをお勧めします：

#### Python を使用する場合：
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

#### Node.js の http-server を使用する場合：
```bash
# http-server をインストール
npm install -g http-server

# サーバーを起動
http-server
```

#### VS Code の Live Server 拡張機能を使用する場合：
1. VS Code で Live Server 拡張機能をインストール
2. index.html を右クリック
3. "Open with Live Server" を選択

その後、ブラウザで `http://localhost:8000` (または指定したポート) にアクセスします。

## カスタマイズ

サイトをカスタマイズするには、以下のファイルを編集してください：

- `index.html`: コンテンツの変更
- `styles.css`: デザインやスタイルの変更
- `script.js`: インタラクティブな機能の追加や変更

## ライセンス

このプロジェクトはオープンソースです。

