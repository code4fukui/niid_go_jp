import { CSV } from "https://js.sabae.cc/CSV.js";

const csv = await CSV.fetch("data/src/sokuho/latest-trend.csv");

const list = [];
for (let i = 0; i < csv.length; i++) {
  if (csv[i][1] == "1週") {
    const name = csv[i - 1][0];
    const data = {};
    for (let j = i + 1; j < csv.length; j++) {
      if (csv[j][0] == "") {
        break;
      }
      const year = 2000 + parseInt(csv[j][0]);
      for (let k = 1; k <= 53; k++) {
        const yw = year + "-W" + (k < 10 ? "0" + k : k);
        data[yw] = csv[j][k];
      }
    }
    list.push({ name, data });
  }
}

const removeAllNoneData = () => {
  const weeks = Object.keys(list[0].data);
  A: for (const w of weeks) {
    for (const d of list) {
      if (d.data[w] !== "") {
        continue A;
      }
      for (const d of list) {
        delete d.data[w];
      }
    }
  }
  //console.log(list);
};
removeAllNoneData();

// RSウイルス報告数は削除、定点あたり報告数を名前変更
const removeRS = () => {
  const rem = "RSウイルス（報告数）";
  const n = list.findIndex(l => l.name == rem);
  list.splice(n, 1);
  const chg = "RSウイルス（定点あたり報告数）";
  const r = list.find(l => l.name == chg);
  r.name = "RSウイルス";
};
removeRS();

const makeData = () => {
  const weeks = Object.keys(list[0].data);
  const data = [];
  A: for (const w of weeks) {
    const v = {};
    v.week = w;
    for (const d of list) {
      v[d.name] = d.data[w];
    }
    data.push(v);
  }
  return data;
};
await Deno.writeTextFile("data/trend.csv", CSV.stringify(makeData()));
