var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
function convert() {
    var usdAmount = parseFloat(document.getElementById('usd').value);
    var result = usdAmount * 74.50; // Assuming 1 USD = 86.46  INR (You can change this value as per current exchange rate)
    document.getElementById('result').innerText = `${usdAmount} USD = ${result.toFixed(2)} INR`;
}

var liveprice = {
    "async": true,
    "scroosDomain": true,
    //API url
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});
