# niid_go_jp

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A repository for the secondary distribution of infectious disease preliminary data from Japan's National Institute of Infectious Diseases (NIID). The data is automatically updated daily.

国立感染症研究所（NIID）の速報データを二次配布するリポジトリです。データは毎日自動更新されます。

**Original Data Source**: [NIID 国立感染症研究所 速報データ](https://www.niid.go.jp/niid/ja/data.html)

## Live Application

A dashboard visualizing this data is available here:
- [感染症ダッシュボード (Infectious Disease Dashboard)](https://code4fukui.github.io/kansen-dashboard/)

## Available Data

The data is provided as UTF-8 with BOM encoded CSV files. You can use the raw GitHub URL to access the latest data directly.

### Key Datasets

These files are processed for ease of use.

- **[data/infections.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/infections.csv)**
  - A list of infectious diseases with names and links to informational pages.

- **[data/trend.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/trend.csv)**
  - Weekly reports per sentinel, organized by disease. This is a time-series-friendly version of the raw trend data.

### Latest Raw Data

These files are the latest versions downloaded directly from NIID.

- **[data/src/sokuho/latest-zensu.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-zensu.csv)**
  - Report Counts and Cumulative Counts, by Disease and Prefecture.

- **[data/src/sokuho/latest-animal.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-animal.csv)**
  - Report Counts and Cumulative Counts, by Animal-borne Disease and Prefecture.

- **[data/src/sokuho/latest-teiten-tougai.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-tougai.csv)**
  - Weekly and cumulative report counts per sentinel (total), by disease, week, prefecture, and gender.

- **[data/src/sokuho/latest-teiten-ruiseki.csv](https://github.com/code4fukui/niid_go_jp/blob/main/data/src/sokuho/latest-teiten-ruiseki.csv)**
  - Cumulative report counts per sentinel (total), by disease, prefecture, and gender.

*Note: The full history of raw weekly data is available in the `data/src/sokuho/` directory.*

## Usage Example

You can fetch the CSV data directly in your JavaScript applications.

```js
import { CSV } from "https://js.sabae.cc/CSV.js";

// Get the list of diseases
const infections = await CSV.fetchJSON("https://code4fukui.github.io/niid_go_jp/data/infections.csv");
console.log(infections);

// Get the latest trend data
const trendData = await CSV.fetchJSON("https://code4fukui.github.io/niid_go_jp/data/trend.csv");
console.log(trendData);
```

## Automation Process

This repository is automatically updated using a GitHub Action.

- **Schedule**: The update process runs daily at approximately 17:28 JST (08:28 UTC).
- **Scripts**:
  - `download.js`: Scrapes the NIID data page and downloads all available CSV files into `data/src/sokuho/`.
  - `makeTrend.js`: Processes the raw `latest-trend.csv` file into the cleaned, time-series format found in `data/trend.csv`.

## License

[CC0-1.0](LICENSE)