import { reqAddOrUpdateCart, reqShopCartList, reqUpdateIsCheck, reqDeleteCart } from '@/api'
const state = {
    shopCartList: []
}

const getters = {}

const actions = {
    async addOrUpdateCart({ commit }, { skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            // return 'failed'
            return Promise.reject(new Error('failed'))
        }
    },

    async getShopCartList({ commit }) {
        const result = await reqShopCartList()
        if (result.code === 200) {
            commit('RECEIVESHOPCARTLIST', result.data)
        }
    },
    //更新单个商品选中状态
    async updateIsCheck({ commit }, { skuId, isChecked }) {
        const result = await reqUpdateIsCheck(skuId, isChecked)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    //更新全部商品选中状态
    async updateAllIsCheck({ commit, state, dispatch }, isChecked) {
        let promises = [];
        state.shopCartList.forEach(item => {
            //遍历每一个商品,如果选中状态本身就和传递过来的要修改的状态一样 就不用发请求
            if (item.isChecked === isChecked) return
            //如果说不一样,都需要发送请求,而且所有的每一个的请求都成功,才算成功

            let promise = dispatch('updateIsCheck', { skuId: item.skuId, isChecked })
            promises.push(promise)
        })
        //处理多个promise的数组，如果都成功那么返回的promise才成功，结果是每个成功的结果数组
        //			       如果失败，返回的第一个失败的promise的reason
        return Promise.all(promises)
    },

    //删除单个商品发送的请求
    async deleteCart({ commit }, skuId) {
        const result = await reqDeleteCart(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },

    //删除已选中商品
    async deleteAllCheckCart({ commit, state, dispatch }) {
        let promises = []
        state.shopCartList.forEach(item => {
            if (item.isChecked === 0) return
            let promise = dispatch('deleteCart', item.skuId)
            promises.push(promise)
        })
        return Promise.all(promises)
    }
};

const mutations = {
    RECEIVESHOPCARTLIST(state, shopCartList) {
        state.shopCartList = shopCartList
    }
}

export default ({
    state,
    mutations,
    actions,
    getters,
})