# niid_go_jp

国立感染症研究所（NIID）の感染症速報データを二次配布するリポジトリです。データは毎日自動更新されます。

**データ取得元**: [NIID 国立感染症研究所 速報データ](https://www.niid.go.jp/niid/ja/data.html)

## 公開アプリケーション

このデータを可視化したダッシュボードは以下から利用できます:
- [感染症ダッシュボード (Infectious Disease Dashboard)](https://code4fukui.github.io/kansen-dashboard/)

## 提供データ

データはBOM付きUTF-8エンコーディングのCSVファイルとして提供されています。GitHubのRaw URLを使用することで、最新のデータに直接アクセスできます。

### 主なデータセット

これらのファイルは使いやすく加工されたものです。

- **[data/infections.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/infections.csv)**
  - 感染症の名称と情報ページへのリンクをまとめたリスト。

- **[data/trend.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/trend.csv)**
  - 疾病別の定点当たり週間報告数。生の推移データを時系列で扱いやすい形式に加工したものです。

### 最新の生データ

これらのファイルはNIIDから直接ダウンロードされた最新版のデータです。

- **[data/src/sokuho/latest-zensu.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-zensu.csv)**
  - 報告数・累積報告数、疾病・都道府県別。

- **[data/src/sokuho/latest-animal.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-animal.csv)**
  - 報告数・累積報告数、疾病（動物）・都道府県別。

- **[data/src/sokuho/latest-teiten-tougai.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-tougai.csv)**
  - 報告数・定点当り報告数、疾病・週・都道府県・性別（１週から当該週までの報告数・定点当たり報告数とそれらの累積）(総数)。

- **[data/src/sokuho/latest-teiten-ruiseki.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-ruiseki.csv)**
  - 累積報告数・定点当り累積報告数、疾病・都道府県・性別(総数)。

*注: 過去のすべての週次生データは `data/src/sokuho/` ディレクトリに保存されています。*

## 使用例

JavaScriptアプリケーションから直接CSVデータを取得して利用できます。

```js
import { CSV } from "https://js.sabae.cc/CSV.js";

// 感染症リストの取得
const infections = await CSV.fetchJSON("https://code4fukui.github.io/niid_go_jp/data/infections.csv");
console.log(infections);

// 最新トレンドデータの取得
const trendData = await CSV.fetchJSON("https://code4fukui.github.io/niid_go_jp/data/trend.csv");
console.log(trendData);
```

## 自動更新プロセス

このリポジトリはGitHub Actionsを使用して自動的に更新されます。

- **スケジュール**: 更新処理は毎日17:28 JST（08:28 UTC）頃に実行されます。
- **スクリプト**:
  - `download.js`: NIIDのデータページをスクレイピングし、利用可能なすべてのCSVファイルを `data/src/sokuho/` にダウンロードします。
  - `makeTrend.js`: 生データである `latest-trend.csv` を処理し、`data/trend.csv` としてクリーンな時系列形式に変換します。

## ライセンス

[CC0-1.0](LICENSE)
