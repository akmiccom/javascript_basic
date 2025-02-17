async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        document.getElementById("quote").textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error("データの取得に失敗しました", error);
    }
}
