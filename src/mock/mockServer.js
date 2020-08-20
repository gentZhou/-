import mock from 'mockjs'
import banner from './banner.json'
import floor from '@/mock/floor'

mock.mock('/mock/banner',{code:200,data:banner})
mock.mock('/mock/floor',{code:200,data:floor})
//这个方法就是让我们模拟接口使用
//第一个参数时模拟的接口路径
//第二个参数是返回的数据