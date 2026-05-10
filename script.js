async function getPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true";

    const response = await fetch(url);
    const data = await response.json();

    const btcChange = data.bitcoin.usd_24h_change.toFixed(2);
    const ethChange = data.ethereum.usd_24h_change.toFixed(2);

    document.getElementById("btc").innerHTML =
        "$" + data.bitcoin.usd + " (" + btcChange + "%)";

    document.getElementById("eth").innerHTML =
        "$" + data.ethereum.usd + " (" + ethChange + "%)";
}

// запускаем функцию сразу
getPrices();
setInterval(getPrices, 10000);
