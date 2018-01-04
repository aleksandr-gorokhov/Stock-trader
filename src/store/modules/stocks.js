import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
    state.stocks.forEach(stock => {
      if(stock.startPrice === 0) {
        stock.startPrice = stock.price
      }
    })
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + stock.multiplier + Math.random() - 0.5))
      stock.startPrice >= (stock.price * 3) ? stock.multiplier += 1 : stock.multiplier = 0
      stock.price <= 2 ? stock.price = stock.startPrice : stock.price = stock.price
      })
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order);
  },
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('RND_STOCKS');
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
