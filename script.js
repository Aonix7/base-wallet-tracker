async function getPrices() {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd";

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("btc").innerText = "$" + data.bitcoin.usd;
    document.getElementById("eth").innerText = "$" + data.ethereum.usd;
}

// запускаем функцию сразу
getPrices();
setInterval(getPrices, 10000);
