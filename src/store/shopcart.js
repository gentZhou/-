import { reqAddOrUpdateCart } from '@/api'
const state = {}

const getters = {}

const actions = {
    async addOrUpdateCart({commit},{skuId,skuNum}){
        const result=await reqAddOrUpdateCart(skuId,skuNum)
        if(result.code === 200){
            return 'ok'
        }else{
            // return 'failed'
            return Promise.reject(new Error('failed'))
        }
    }
}

const mutations = {}

export default ({
    state,
    mutations,
    actions,
    getters,
})