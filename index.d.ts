export = CoinMarketCap;
declare class CoinMarketCap {
    /**
     *
     * @param {String} apiKey API key for accessing the CoinMarketCap API
     * @param {Object=} Options Options for the CoinMarketCap instance
     * @param {String=} options.version  Version of API. Defaults to 'v2'
     * @param {Function=} options.fetcher fetch function to use. Defaults to node-fetch
     * @param {Object=} options.config = Configuration for fetch request
     *
     */
    constructor(apiKey: string, { version, fetcher, config }?: any | undefined);
    apiKey: string;
    config: any;
    fetcher: any;
    url: string;
    /**
     * Get a paginated list of all cryptocurrencies by CoinMarketCap ID.
     *
     * @param {Object=} options Options for the request:
     * @param {String=} [options.listingStatus="active"] active or inactive coins
     * @param {Number|String=} [options.start=1] Return results from rank start and above
     * @param {Number|String=} options.limit Only returns limit number of results
     * @param {String[]|String=} options.symbol Comma separated list of symbols, will ignore the other options
     * @param {String=} [options.sort="id"] Sort results by the options at https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyMap
     *
     * @example
     * const client = new CoinMarketCap('api key')
     * client.getIdMap().then(console.log).catch(console.error)
     * client.getIdMap({listingStatus: 'inactive', limit: 10}).then(console.log).catch(console.error)
     * client.getIdMap({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
     * client.getIdMap({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
     * client.getIdMap({sort: 'cmc_rank'}).then(console.log).catch(console.error)
     */
    getIdMap(args?: {}): any;
    /**
     * Get static metadata for one or more cryptocurrencies.
     * Either id or symbol is required, but passing in both is not allowed.
     *
     * @param {Object=} options Options for the request:
     * @param {Array|String|Number=} options.id One or more comma separated cryptocurrency IDs
     * @param {String[]|String} options.symbol One or more comma separated cryptocurrency symbols
     *
     * @example
     * const client = new CoinMarketCap('api key')
     * client.getMetadata({id: '1'}).then(console.log).catch(console.error)
     * client.getMetadata({id: [1, 2]}).then(console.log).catch(console.error)
     * client.getMetadata({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
     * client.getMetadata({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
     */
    getMetadata(args?: {}): any;
    /**
     * Get information on all tickers.
     * Start and limit options can only be used when currency or ID is not given.
     * Currency and ID cannot be passed in at the same time.
     *
     * @param {Object=} options Options for the request
     * @param {Number|String=} [options.start=1] Return results from rank start and above
     * @param {Number|String=} [options.limit=100] Only returns limit number of results [1..5000]
     * @param {String[]|String=} [options.convert="USD"] Return info in terms of another currency
     * @param {String=} [options.sort="market_cap"] Sort results by the options at https://pro.coinmarketcap.com/api/v1#operation/getV1CryptocurrencyListingsLatest
     * @param {String=} options.sortDir Direction in which to order cryptocurrencies ("asc" | "desc")
     * @param {String=} [options.cryptocurrencyType="all"] Type of cryptocurrency to include ("all" | "coins" | "tokens")
     *
     * @example
     * const client = new CoinMarketCap('api key')
     * client.getTickers({limit: 3}).then(console.log).catch(console.error)
     * client.getTickers({convert: 'EUR'}).then(console.log).catch(console.error)
     * client.getTickers({start: 0, limit: 5}).then(console.log).catch(console.error)
     * client.getTickers({sort: 'name'}).then(console.log).catch(console.error)
     */
    getTickers(args?: {}): any;
    /**
     * Get latest market quote for 1 or more cryptocurrencies.
     *
     * @param {Object=} options Options for the request:
     * @param {Array|String|Number=} options.id One or more comma separated cryptocurrency IDs
     * @param {String[]|String=} options.symbol One or more comma separated cryptocurrency symbols
     * @param {String[]|String=} [options.convert="USD"] Return quotes in terms of another currency
     *
     * @example
     * const client = new CoinMarketCap('api key')
     * client.getQuotes({id: '1'}).then(console.log).catch(console.error)
     * client.getQuotes({id: [1, 2], convert: 'USD,EUR'}).then(console.log).catch(console.error)
     * client.getQuotes({symbol: 'BTC,ETH'}).then(console.log).catch(console.error)
     * client.getQuotes({symbol: ['BTC', 'ETH']}).then(console.log).catch(console.error)
     */
    getQuotes(args?: {}): any;
    /**
     * Get global information
     *
     * @param {Object|String[]|String=} options Options for the request:
     * @param {String[]|String=} [options.convert="USD"] Return quotes in terms of another currency
     *
     * @example
     * const client = new CoinMarketCap()
     * client.getGlobal('GBP').then(console.log).catch(console.error)
     * client.getGlobal({convert: 'GBP'}).then(console.log).catch(console.error)
     */
    getGlobal(convert: any): any;
}
