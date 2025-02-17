# シンプルな計算機アプリの開発まとめ

## 学んだこと

このプロジェクトを通じて、以下の重要なスキルを学びました

- HTML の基礎

電卓の UI（ボタンやディスプレイ）を div や button を使って構築
id と class を適切に使い分けて、各要素を識別しやすくした

- CSS を使ったデザイン

grid を使ってボタンを整列し、均等なレイアウトを作成
hover や transition を適用し、ボタンのデザインを向上

- JavaScript を使った動作の実装
  - appendValue() でボタンの入力を display に反映
  - clearDisplay() で C ボタンを押すと入力をリセット
  - calculateResult() で eval() を使い、計算結果を出力
  - setTimeout() を使い、ディスプレイが光るアニメーションを適用

## 重要なポイント

以下の点が、この電卓アプリをスムーズに動作させるために重要でした

### id と class の適切な使い分け

- ディスプレイ id="display"
- 数字ボタン .number-btn
- 演算子ボタン（+ - × ÷） .operator-btn
- = ボタン .equal-btn
- C ボタン id="clear-btn" .clear-btn

id はユニークな要素 (#display, #clear-btn) に使い
class は共通デザインを適用 (.number-btn, .operator-btn) に使用

### grid を使ったボタン配置

```css
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
```

repeat(4, 1fr) で4列均等に配置し、整ったレイアウトを実現

### JavaScript の eval() を使った計算

```javascript
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
```

ユーザーの入力式を計算し、結果を表示
try-catch を使ってエラー処理を追加し、無効な計算時に "Error" を表示

## 卓ボタンを JavaScript で動的に生成する場合

固定された UI なら HTML に書くのが適正だが、JavaScript で動的にボタンを作成することも可能

```javascript
const buttons = [
    { label: "C", class: "clear-btn", onclick: "clearDisplay()" },
    { label: "7", class: "number-btn", onclick: "appendValue('7')" },
    { label: "8", class: "number-btn", onclick: "appendValue('8')" },
    { label: "9", class: "number-btn", onclick: "appendValue('9')" },
    ...........
];

// ボタンを作成し、HTML に追加
const buttonsContainer = document.querySelector(".buttons");
buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.className = button.class;
    btn.setAttribute("onclick", button.onclick);
    buttonsContainer.appendChild(btn);
});
```

- 静的な UI なら HTML に書くのが適切
- ボタンの数を変更する場合や外部データを使う場合は JavaScript で生成
- 外部データ（JSON など）を使う場合は JavaScript で作成すると柔軟に対応できる

## 今後の改善点

- レスポンシブ対応
  - @media を使ってスマホでも快適に操作できるようにする
- 高度な計算機能
  - Math オブジェクトを使い、√（ルート）や %（パーセント）を追加
- eval() のセキュリティ強化
  - Function コンストラクタを使って安全に計算処理を実装

## まとめ

- HTML + CSS + JavaScript を組み合わせてシンプルな電卓アプリを作成
- grid を使って、ボタンを美しく配置
- ディスプレイを光らせることで、より直感的な UI を実現
- 今後の改善点として、レスポンシブ対応や高度な計算機能を追加する余地がある
