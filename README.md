# niid_go_jp
 
- [NIID 国立感染症研究所 速報データ](https://www.niid.go.jp/niid/ja/data.html)の二次配布オープンデータ

毎日、17:28頃、上記サイトのCSVデータをダウンロードし、BOM付きUTF-8 CSVオープンデータとして二次配布します

## オープンデータ

- [疾病一覧](https://github.com/code4fukui/niid_go_jp/blob/main/data/infections.csv)
- [定点当り報告数、週・疾病別](https://github.com/code4fukui/niid_go_jp/blob/main/data/trend.csv)
- [報告数・累積報告数、疾病・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-zensu.csv)
- [報告数・累積報告数、疾病（動物）・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-animal.csv)
- [報告数・定点当り報告数、疾病・週・都道府県・性別（１週から当該週までの報告数・定点当たり報告数とそれらの累積）(総数)](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-tougai.csv)
- [累積報告数・定点当り累積報告数、疾病・都道府県・性別(総数)](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-ruiseki.csv)
- [報告数・定点当り報告数、疾病・都道府県別](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/2023-16-teiten.csv)

## 疾病一覧

- [インフルエンザ](https://www.niid.go.jp/niid/ja/kansennohanashi/219-about-flu.html)
- [COVID-19](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html)
- [咽頭結膜熱](https://www.niid.go.jp/niid/ja/kansennohanashi/323-pcf-intro.html)
- [A群溶血性レンサ球菌咽頭炎](https://www.niid.go.jp/niid/ja/kansennohanashi/340-group-a-streptococcus-intro.html)
- [感染性胃腸炎](https://www.niid.go.jp/niid/ja/kansennohanashi/383-intestinal-intro.html)
- [水痘](https://www.niid.go.jp/niid/ja/kansennohanashi/418-varicella-intro.html)
- [手足口病](https://www.niid.go.jp/niid/ja/kansennohanashi/441-hfmd.html)
- [伝染性紅斑](https://www.niid.go.jp/niid/ja/kansennohanashi/443-5th-disease.html)
- [突発性発疹](https://www.niid.go.jp/niid/ja/kansennohanashi/532-exanthem-subitum.html)
- [百日咳](https://www.niid.go.jp/niid/ja/kansennohanashi/477-pertussis.html)
- [ヘルパンギーナ](https://www.niid.go.jp/niid/ja/kansennohanashi/515-herpangina.html)
- [流行性耳下腺炎](https://www.niid.go.jp/niid/ja/kansennohanashi/529-mumps.html)
- [急性出血性結膜炎](https://www.niid.go.jp/niid/ja/kansennohanashi/388-ahc-intro.html)
- [流行性角結膜炎](https://www.niid.go.jp/niid/ja/kansennohanashi/528-ekc.html)
- [細菌性髄膜炎](https://www.niid.go.jp/niid/ja/kansennohanashi/404-bac-megingitis.html)
- [無菌性髄膜炎](https://www.niid.go.jp/niid/ja/kansennohanashi/520-viral-megingitis.html)
- [マイコプラズマ肺炎](https://www.niid.go.jp/niid/ja/kansennohanashi/503-mycoplasma-pneumoniae.html)
- [クラミジア肺炎](https://www.niid.go.jp/niid/ja/kansennohanashi/395-chlamydia-intro.html)
- [感染性胃腸炎](https://www.niid.go.jp/niid/ja/kansennohanashi/383-intestinal-intro.html)
- [RSウイルス](https://www.niid.go.jp/niid/ja/kansennohanashi/317-rs-intro.html)

```js
import { CSV } from "https://js.sabae.cc/CSV.js";
const data = await CSV.fetchJSON("https://code4fukui.github.io/niid_go_jp/data/infections.csv");
data.forEach(d => console.log(`- [${d.name}](${d.url_about})`));
//console.log(data.map(d => `<a href="${d.url_about}">${d.name}${d.name_alternative ? "（" + d.name_alternative + "）" : ""}</a>`).join("、"));
```

## アプリ

- [感染症ダッシュボード](https://code4fukui.github.io/kansen-dashboard/)
