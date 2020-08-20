import { reqGoodsDetailInfo } from '@/api'
const state = {
    goodsDeatilInfo: {}
}

const getters = {
    categoryView(state){
        return state.goodsDeatilInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodsDeatilInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodsDeatilInfo.spuSaleAttrList || []
    },
 
}

const actions = {
    async getGoodsDetailInfo({ commit }, skuId) {
        const result = await reqGoodsDetailInfo(skuId)
        if (result.code === 200) {
            commit('RECEIVEGOODSDETAILINFO', result.data)
        }
    }
}

const mutations = {
    RECEIVEGOODSDETAILINFO(state, goodsDeatilInfo) {
        state.goodsDeatilInfo = goodsDeatilInfo;
    }
}

export default ({
    state,
    mutations,
    actions,
    getters,
})