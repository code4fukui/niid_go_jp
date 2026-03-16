# niid_go_jp

NIID (国立感染症研究所) の感染症データをオープンデータとして提供するプロジェクトです。毎日NIID のWebサイトからCSVデータをダウンロードし、BOM付きUTF-8 形式で公開しています。

## オープンデータ

以下のデータセットが利用可能です:

- [疾病一覧](https://github.com/code4fukui/niid_go_jp/blob/main/data/infections.csv)
- [定点当たり報告数、週・疾病別](https://github.com/code4fukui/niid_go_jp/blob/main/data/trend.csv) 
- [報告数・累積報告数、疾病・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-zensu.csv)
- [報告数・累積報告数、疾病（動物）・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-animal.csv)
- その他のデータ

## アプリ

- [感染症ダッシュボード](https://code4fukui.github.io/kansen-dashboard/)

- [報告数・定点当り報告数、疾病・週・都道府県・性別（１週から当該週までの報告数・定点当たり報告数とそれらの累積）(総数)](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-tougai.csv)
- [累積報告数・定点当り累積報告数、疾病・都道府県・性別(総数)](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-ruiseki.csv)
- [報告数・定点当り報告数、疾病・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/2023-16-teiten.csv)
- [Reported Cases and Weekly Reported Cases per Sentinel Site by Disease, Prefecture, and Gender](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-tougai.csv)
- [Cumulative Reported Cases and Cumulative Weekly Reported Cases per Sentinel Site by Disease, Prefecture, and Gender](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-ruiseki.csv)
- [Reported Cases and Weekly Reported Cases per Sentinel Site by Disease and Prefecture](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/2023-16-teiten.csv)

## ライセンス
このプロジェクトは [MIT License](LICENSE) のもとで公開されています。
