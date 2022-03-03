
/* Example in Node.js */
const axios = require('axios');
const url = "https://api.nomics.com/v1/currencies/ticker?key=cdbceb6d0be51b703cf8b344ed28f264df06a377&ids=BTC,ETH"
let btc_price = 0,
  eth_price = 0

const getPrice = async () => {
  const res = await axios.get(url)
  btc_price = res.data[0].price.slice(0, res.data[0].price.indexOf('.') + 3)
  eth_price = res.data[1].price.slice(0, res.data[1].price.indexOf('.') + 3)
  return res
}

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

const start = async () => {

  try {
    await getPrice()
    console.clear()
    console.log("========LISTENING========")
    console.log(`btc current price is:${btc_price}`)
    console.log(`eth current price is:${eth_price}`)
    await timeout(1000)
    start()
  } catch (error) {
    console.log('Timeout!')
    await timeout(1000)
    start()
  }
}
start()
