const eBay = require('ebay-node-api');

const EBAY_API_KEY = 'DmitryKh-8c0f-4272-80d0-a0df7dca76f8'

const normalizeResponse = input => {
  return Object.entries(input).reduce((acc, cur) => {
    acc[cur[0]] = cur[1][0];
    return acc;
  }, {});
}

class Api {
  constructor(clientID) {
    this.ebay = new eBay({ clientID });
  }

  async getByKeywords(keywords, entries = 10) {
    const response = await this.ebay.findItemsAdvanced({
      entriesPerPage: entries,
      keywords,
    })

    if (!response[0].searchResult[0].item) return []

    return response[0].searchResult[0].item.map(normalizeResponse).map(i => {
      i.price = parseFloat(i.sellingStatus.currentPrice[0].__value__).toFixed(2);
      return i
    })
  }
}

module.exports = new Api(EBAY_API_KEY)
