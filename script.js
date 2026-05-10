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
function loadActivity() {
    const feed = document.getElementById("activityFeed");

    const fakeTxs = [
        "Sent 0.2 ETH",
        "Received 150 USDC",
        "Swap ETH → USDT",
        "Paid gas fee 0.003 ETH",
        "Received NFT (Base)"
    ];

    feed.innerHTML = "";

    fakeTxs.forEach(tx => {
        const item = document.createElement("p");
        item.innerText = "• " + tx;
        feed.appendChild(item);
    });
}
