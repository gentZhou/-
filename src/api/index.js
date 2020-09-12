//这个文件是所有的结构请求函数的文件
//每一个请求接口数据功能都给它定义一个函数,以后哪里需要去请求数据,就调用对应的这个接口函数就好了
import Ajax from '@/ajax/Ajax'  //引入暴露出来的instance
import mockAjax from '@/ajax/mockAjax'

export const reqCategoryList = () => {
    return Ajax({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
};

// reqCategoryList()
export const reqBannerList = () => {
    return mockAjax({
        url: '/banner',
        method: 'get'
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url: '/floor',
        method: 'get'
    })
}


// searchParams代表搜索参数,这个参数必须要有,至少得是一个没有属性的空对象
// 参数如果是一个空的对象,代表搜索请求获取的是全部的数据
// 参数如果有搜索条件,代表获取的就是搜索条件匹配的数据
export const reqGoodsListInfo = (searchParams) => {
    return Ajax({
        url: '/list',
        method: 'post',
        data: searchParams
    })
}

// reqGoodsListInfo({})

export const reqGoodsDetailInfo = (skuId) => {
    return Ajax({
        url: `/item/${skuId}`,
        method: 'get'
    })
}

//请求添加购物车 (或者修改购物车数量)
export const reqAddOrUpdateCart = (skuId, skuNum) => {
    return Ajax({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post'
    })
}

// export const reqShopCartList = () =>{
//     return Ajax({
//         url:'/cart/cartList',
//         method:'get'
//     })
// }

//对象写法

export const reqShopCartList = () => Ajax.get('/cart/cartList')

//请求选中状态 get
export const reqUpdateIsCheck = (skuId, isChecked) => {
    return Ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}

//请求删除购物车商品
export const reqDeleteCart = (skuId) => {
    return Ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}

//请求注册 /api/user/passport/register  post  {mobile,password,code}
export const reqRegister = (userInfo) => {
    return Ajax({
        url: '/user/passport/register',
        method: 'post',
        data: userInfo

    })
}

//请求登陆 /api/user/passport/login post
export const reqLogin = (userInfo) => {
    return Ajax({
        url: '/user/passport/login',
        method: 'post',
        data: userInfo
    })
}

//请求退出登录 /api/user/passport/logout
export const reqLogout = () => {
    return Ajax({
        url: '/user/passport/logout',
        method: 'get'
    })
}

//获取订单交易页信息 /api/order/auth/trade
export const reqTradeInfo = () => {
    return Ajax({
        url: '/order/auth/trade',
        method: 'get'
    })
}

//提交订单  /api/order/auth/submitOrder?tradeNo={tradeNo}   post
export const reqSubmitOrder=(tradeNo,tradeInfo)=>{
    return Ajax({
        url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method:'post',
        data:tradeInfo
    })
}

//获取支付信息    /api/payment/weixin/createNative/{orderId}    get
export const reqPayInfo = (orderId)=> {
    return Ajax({
        url:`/payment/weixin/createNative/${orderId}`,
        method:'get'
    })
}

//获取订单支付状态的信息 /api/payment/weixin/queryPayStatus/{orderId}  get
export const reqOrderStatus = (orderId)=>{
    return Ajax({
        url:`/payment/weixin/queryPayStatus/${orderId}`,
        method:'get'
    })
}

//请求获取我的订单分页列表 /api/order/auth/{page}/{limit}    get
export const reqMyOrderInfo=(page,limit)=>{
    return Ajax({
        url:`/order/auth/${page}/${limit}`,
        method:'get'
    })
}
