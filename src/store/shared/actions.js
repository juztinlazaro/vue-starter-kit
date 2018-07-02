import Vue from 'vue';

const actions = {
  loadData({commit}) {
    Vue.http.get('data.json')
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        if (data) {
          const stocks = data.stocks;
          const funds = data.funds;
          const stockPortfolio = data.stockPortfolio;
  
          const portfolio = {
            stockPortfolio,
            funds,
          }
  
          commit('stocks/setStocks', stocks, { root: true });
          commit('portfolio/setPorfolio', portfolio, { root: true });
        }
      })
  },
};

export default actions