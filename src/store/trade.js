import { reqTradeInfo} from '@/api'

const state = {
  tradeInfo:{}
}

const getters = {}

const actions = {
  async getTradeInfo({commit}){
      const result = await reqTradeInfo()
      if(result.code === 200){
        commit('RECEIVETRADEINFO',result.data)
      }
  }

}

const mutations = {
   RECEIVETRADEINFO(state,tradeInfo){
       state.tradeInfo =tradeInfo
   }
}

export default ({
    state,
    mutations,
    actions,
    getters,
})