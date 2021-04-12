var option = {
    // 标题
    title: {
        text: "学生语文成绩",
        // 主表题点击的超链接
        link: "http://www.baidu.com",
        typeStyle: {
            color: "#f40"
        }
    },
    xAxis: {    // x轴
        // type: "category",  类目轴
        data: ["小明", "小红", "小王"]   
    },

    yAxis: { // y轴
        type: "value"  // 数值轴
    },

    series: {
        name: "语文", 
        type: "bar",   // 图表类型， bar：柱状图， line: 折线图， pie： 柄图
        data: [70, 90, 89]
    }
}