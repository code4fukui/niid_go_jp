import { DOMParser } from "https://js.sabae.cc/DOMParser.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

// Aタグのリンクを抽出する
const url = "https://www.niid.go.jp/niid/ja/data.html";
const html = await (await fetch(url)).text();
const dom = new DOMParser().parseFromString(html, "text/html");
const as = dom.querySelectorAll("a");
const links = as.map(a => a.getAttribute("href"));
console.log(links);

for (const path of links) {
  if (!path.endsWith(".csv")) continue;
  const data = await CSV.fetch("https://www.niid.go.jp" + path);
  const name = path.substring(path.lastIndexOf("/"));
  await Deno.writeTextFile("data/src/sokuho" + name, CSV.encode(data));
  if (name[8] == "-") {
    const fn = "data/src/sokuho/latest-" + name.substring(9);
    await Deno.writeTextFile(fn, CSV.encode(data));
  } else if (name.startsWith("/week")) {
    const fn = "data/src/sokuho/latest-" + name.substring(8);
    await Deno.writeTextFile(fn, CSV.encode(data));
  }
}
