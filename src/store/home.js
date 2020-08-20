import { reqCategoryList,reqBannerList,reqFloorList} from '@/api'
const state = {
    categoryList: [],
    bannerList:[],
    floorList:[],
}

const getters = {}

const actions = {
    //异步请求获取数据 允许if for 异步操作
    async getCategoryList({ commit }) {
        // reqCategoryList().then(result => {
        //     commit('RECEIVECATEGORYLIST',result.data)
        //         }
        //     )
        const result = await reqCategoryList()
        if (result.code === 200) {
            commit('RECEIVECATEGORYLIST', result.data)
        }
    },
    async reqBannerList({ commit }) {
        const result = await reqBannerList()
        if (result.code === 200) {
            commit('RECEIVEBANNERLIST', result.data)
        }
    },
    async reqFloorList({ commit }) {
        const result = await reqFloorList()
        if (result.code === 200) {
            commit('RECEIVEFLOORLIST', result.data)
        }
    },

}

const mutations = {
    //直接修改数据  (不允许出现if for 异步操作)
    RECEIVECATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVEBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVEFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
}

export default ({
    state,
    mutations,
    actions,
    getters,
})