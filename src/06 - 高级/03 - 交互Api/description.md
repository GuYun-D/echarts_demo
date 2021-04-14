# 全局echarts对象
引入echarts文件之后可以直接访问使用的
- init
初始化echarts实例对象，设置主题
- registerTheme
注册主题
- registerMap
- connect
将多个图表关联


# echartsInstance对象
通过echarts.init方法调用之后得到的
- setOptiom
修改或修改图表实例的配置项以及数据
多次调用方法，合并新的配置和旧的配置
- resize
  自适应
- on/off
绑定或者解绑事件处理函数
鼠标事件
```js
mCharts.on("click", function(arg){
    // arg,点击的相关事件
})

mCharts.off("click")  // 解绑事件
```
echarts事件  
- dispatchAction
- clear
- dispose