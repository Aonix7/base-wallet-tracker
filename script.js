async function getPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true";

    const response = await fetch(url);
    const data = await response.json();

    const btcChange = data.bitcoin.usd_24h_change.toFixed(2);
    const ethChange = data.ethereum.usd_24h_change.toFixed(2);

    document.getElementById("btc").innerHTML =
        "$" + data.bitcoin.usd + " (" + formatChange(btcChange) + ")";

    document.getElementById("eth").innerHTML =
        "$" + data.ethereum.usd + " (" + formatChange(ethChange) + ")";
}
function formatChange(change) {
    return change > 0
        ? `<span style="color:green">+${change}%</span>`
        : `<span style="color:red">${change}%</span>`;
}

// запускаем функцию сразу
getPrices();
setInterval(getPrices, 10000);
loadActivity();
setInterval(addLiveTransaction, 5000);
setInterval(animateChart, 3000);
setInterval(addWhaleAlert, 7000);
function loadActivity() {
    const feed = document.getElementById("activityFeed");

    const fakeTxs = [
        { type: "send", text: "Sent 0.2 ETH" },
        { type: "receive", text: "Received 150 USDC" },
        { type: "swap", text: "Swap ETH → USDT" },
        { type: "gas", text: "Paid gas fee 0.003 ETH" },
        { type: "receive", text: "Received NFT (Base)" }
    ];

    feed.innerHTML = "";

    fakeTxs.forEach(tx => {
        const item = document.createElement("div");
        item.className = "tx";

        const icon = document.createElement("div");
        icon.className = "icon";

        const text = document.createElement("div");
        text.className = "tx-text";

        text.innerText = tx.text;

        // ИКОНКИ ПО ТИПУ
        if (tx.type === "send") icon.innerText = "📤";
        if (tx.type === "receive") icon.innerText = "📥";
        if (tx.type === "swap") icon.innerText = "🔄";
        if (tx.type === "gas") icon.innerText = "⛽";

        item.appendChild(icon);
        item.appendChild(text);
        feed.appendChild(item);
    });
}
function addLiveTransaction() {

    const feed = document.getElementById("activityFeed");

    const liveTxs = [
        "Whale bought 12 BTC",
        "New Base wallet connected",
        "Swap USDC → ETH",
        "Bridge to Base completed",
        "Large ETH transfer detected",
        "Minted NFT on Base",
        "Sent 4.2 ETH",
        "Received 1200 USDC"
    ];

    const randomTx =
        liveTxs[Math.floor(Math.random() * liveTxs.length)];

    const item = document.createElement("div");

    item.className = "tx";

    item.innerHTML =
        `<div class="icon">⚡</div>
         <div class="tx-text">${randomTx}</div>`;

    feed.prepend(item);

    // оставляем только последние 6 событий
    if (feed.children.length > 6) {
        feed.removeChild(feed.lastChild);
    }
}
function animateChart() {

    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {

        const randomHeight =
            Math.floor(Math.random() * 80) + 20;

        bar.style.height = randomHeight + "px";
    });
}
function addWhaleAlert() {

    const whaleFeed =
        document.getElementById("whaleFeed");

    const alerts = [
        "Whale moved 450 BTC",
        "Large ETH transaction detected",
        "2M USDC bridged to Base",
        "New whale wallet connected",
        "Massive swap ETH → USDC",
        "Large NFT purchase on Base",
        "Whale accumulated 1200 ETH"
    ];

    const randomAlert =
        alerts[Math.floor(Math.random() * alerts.length)];

    const item = document.createElement("div");

    item.className = "tx";

    item.innerHTML =
        `<div class="icon">🐋</div>
         <div class="tx-text">${randomAlert}</div>`;

    whaleFeed.prepend(item);

    if (whaleFeed.children.length > 5) {
        whaleFeed.removeChild(whaleFeed.lastChild);
    }
}
