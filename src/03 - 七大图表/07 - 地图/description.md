### echarts 基本代码结构
- 引入
- 容器
- echarts对象
- option
- 设置option

### 准备中国的矢量地图json文件
### 使用ajax获取china.json
### 在回调函数中往echarts全局对象注册地图的json数据
### 在geo下配置



# 显示某个区域
- 加载该区域的矢量地图数据
- 注册到全局中
- 配置goe
- zoom放大该区域
- center定中心

# 不同的区域显示不同颜色
- 显示基本的中国地图
- 将空气质量数据传递给series
- 将series下的数据和goe关联起来
- 结合visualMap使用

# 地图与散点图使用
- 给series下增加新的对象
- 准备好散点数据，设置给新对象的data
- 配置新对象的type
- 让散点图使用地图坐标系统
- 加强涟漪效果