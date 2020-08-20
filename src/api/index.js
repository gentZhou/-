//这个文件是所有的结构请求函数的文件
//每一个请求接口数据功能都给它定义一个函数,以后哪里需要去请求数据,就调用对应的这个接口函数就好了
import Ajax from '@/ajax/Ajax'  //引入暴露出来的instance
import mockAjax from '@/ajax/mockAjax'

export const reqCategoryList=()=>{
    return Ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
};

// reqCategoryList()
export const reqBannerList=()=>{
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}

export const reqFloorList=()=>{
    return mockAjax({
        url:'/floor',
        method:'get'
    })
}


// searchParams代表搜索参数,这个参数必须要有,至少得是一个没有属性的空对象
// 参数如果是一个空的对象,代表搜索请求获取的是全部的数据
// 参数如果有搜索条件,代表获取的就是搜索条件匹配的数据
export const reqGoodsListInfo=(searchParams)=>{
    return Ajax({
        url:'/list',
        method:'post',
        data:searchParams
    })
}

// reqGoodsListInfo({})

export const reqGoodsDetailInfo = (skuId)=>{
    return Ajax({
        url:`/item/${skuId}`,
        method:'get'
    })
}

//请求添加购物车 (或者修改购物车数量)
export const reqAddOrUpdateCart=(skuId,skuNum)=>{
    return Ajax({
        url:`/cart/addToCart/${skuId}/${skuNum}`,
        method:'post'
    })
}

















33032.0

