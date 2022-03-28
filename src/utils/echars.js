import echarts from 'echarts'
var dataArr = 4
const per = element => {
  var myChart = echarts.init(element)
  var seriesData = [
    { name: '失业保险', value: '机关养老' },
    { name: '城居养老', value: '城居养老' }
  ]
  const option = {
    // backgroundColor: '#2c343c',
    title: {
      // text: '南丁格尔玫瑰图',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },
    legend: {
      width: '70%',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 16,
        rich: {
          name: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 10,
            lineHeight: 15
          },
          value: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 10,
            lineHeight: 15
          },
          rate: {
            color: 'rgba(255,255,255,0.9)',
            fontSize: 10,
            lineHeight: 10
          }

        }
      },
      icon: 'circle',
      right: '0',
      bottom: '0',
      padding: [40, 60],
      itemGap: 40,
      data: ['失业保险', '城居养老'],
      formatter: (name) => {
        if (seriesData.length) {
          const item = seriesData.filter((item) => item.name === name)[0]
          const i = `{name|${name}}\n{rate| ${item.value}}`
          return i
        }
      }

    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 500,
      max: 600,
      inRange: {
        // colorLightness: [0, 1]
      }
    },
    series: [
      {

        name: '访问来源',
        type: 'pie',
        radius: ['20%', '60%'], // 空心配置
        emphasis: {
          show: false
        },
        center: ['53%', '40%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], // '#FBFE27','rgb(11,228,96)','#FE5050'
        data: [
          {
            value: 285,
            name: '城居养老'
          },
          {
            name: '城职养老',
            value: 300

          },
          {
            value: 274,
            name: '工商保险'
          },
          {
            value: 380,
            name: '失业保险'
          },
          {
            value: 300,
            name: '机关养老'
          }
        ].sort(function (a, b) {
          return b.value - a.value
        }),
        roseType: 'radius',

        label: {
          normal: {
            formatter: ['{b|{b}}', '{c|{c}万元}'].join('\n'),
            rich: {
              c: {
                color: 'rgb(241,246,104)',
                fontSize: 16,
                fontWeight: 'bold',
                lineHeight: 5
              },
              b: {
                color: 'rgb(98,137,169)',
                fontSize: 15,
                height: 40
              }
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgb(98,137,169)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 50
          }
        }
      },
      // 最外部进度条
      {
        name: '最外部进度条',
        type: 'gauge',
        radius: '80%',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            color: [
              [
                dataArr / 10,
                new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: 'rgba(145,207,255,0)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(145,207,255,0.2)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(145,207,255,1)'
                  }
                ])
              ],
              [1, 'rgba(28,128,245,.0)']
            ],
            width: 3
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        itemStyle: {
          show: false
        },
        detail: {
          show: false
        },
        title: {
        // 标题
          show: false
        },
        data: [
          {
            name: 'title',
            value: dataArr
          }
        ],
        pointer: {
          show: false
        },
        animationDuration: 4000
      }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
}
const rader = element => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(element)
  const option = {
    color: ['#00c2ff', '#f9cf67', '#e92b77'],
    data: ['补缴最多险和', '退缴最多险和'],
    legend: {
      show: true,
      // icon: 'circle',//图例形状
      bottom: 45,
      center: 0,
      itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
      itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
      itemGap: 15, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
      textStyle: {
        fontSize: 14,
        color: '#ade3ff'
      },
      data: ['补缴最多险和', '退缴最多险和']
    },
    radar: [
      {
        indicator: [
          {
            text: '机关养老',
            max: 100
          },
          {
            text: '工伤保险',
            max: 100
          },
          {
            text: '城居养老',
            max: 100
          },
          {
            text: '城职养老',
            max: 100
          },
          {
            text: '失业保险',
            max: 100
          }
        ],

        textStyle: {
          color: 'red'
        },
        center: ['50%', '50%'],
        radius: 142,
        startAngle: 90,
        splitNumber: 3,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        // shape: 'circle',
        // backgroundColor: {
        //     image:imgPath[0]
        // },
        name: {
          formatter: '{value}',
          textStyle: {
            fontSize: 14, // 外圈标签字体大小
            color: '#5b81cb' // 外圈标签字体颜色
          }
        },
        splitArea: {
          // 坐标轴在 grid 区域中的分隔区域，默认不显示。
          show: true,
          areaStyle: {
            // 分隔区域的样式设置。
            color: ['#141c42', '#141c42'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
          }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: {
          // 指向外圈文本的分隔线样式
          lineStyle: {
            color: '#153269'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#113865', // 分隔线颜色
            width: 1 // 分隔线线宽
          }
        }
      }
    ],
    series: [
      {
        name: '雷达图',
        type: 'radar',
        itemStyle: {
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        },
        data: [
          {
            name: '补缴最多险和',
            value: [85, 65, 55, 90, 82],
            areaStyle: {
              normal: {
                // 单项区域填充样式
                color: {
                  type: 'linear',
                  x: 0, // 右
                  y: 0, // 下
                  x2: 1, // 左
                  y2: 1, // 上
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00c2ff'
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    },
                    {
                      offset: 1,
                      color: '#00c2ff'
                    }
                  ],
                  globalCoord: false
                },
                opacity: 1 // 区域透明度
              }
            },
            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            label: {
              // 单个拐点文本的样式设置
              normal: {
                show: true, // 单个拐点文本的样式设置。[ default: false ]
                position: 'top', // 标签的位置。[ default: top ]
                distance: 2, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                color: '#6692e2', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                fontSize: 14, // 文字的字体大小
                formatter: function (params) {
                  return params.value
                }
              }
            },
            itemStyle: {
              normal: {
                // 图形悬浮效果
                borderColor: '#00c2ff',
                borderWidth: 2.5
              }
            }
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
          },
          {
            name: '退缴最多险和',
            value: [50, 20, 45, 30, 75],
            symbolSize: 2.5,
            itemStyle: {
              normal: {
                borderColor: '#f9cf67',
                borderWidth: 2.5
              }
            },
            areaStyle: {
              normal: {
                // 单项区域填充样式
                color: {
                  type: 'linear',
                  x: 0, // 右
                  y: 0, // 下
                  x2: 1, // 左
                  y2: 1, // 上
                  colorStops: [
                    {
                      offset: 0,
                      color: '#f9cf67'
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(0,0,0,0)'
                    },
                    {
                      offset: 1,
                      color: '#f9cf67'
                    }
                  ],
                  globalCoord: false
                },
                opacity: 1 // 区域透明度
              }
            }
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
          }

        ]
      }
    ]
  }
  myChart.setOption(option)
}
const bar = element => {
  var myChart = echarts.init(element)
  var data1 = [
    400, 199, 70, 229, 329, 229, 199, 299, 499, 70, 199, 568
  ]
  var data2 = [
    500, 299, 170, 329, 429, 529, 299, 399, 599, 170, 299, 668
  ]
  var xData = [
    '01月',
    '02月',
    '03月',
    '04月',
    '05月',
    '06月',
    '07月',
    '08月',
    '09月',
    '10月',
    '11月',
    '12月'
  ]
  const option = {
    title: {
      textStyle: {

        color: '#fff'

      },
      top: '3%',
      left: '10%'
    },
    grid: {
      top: '25%',
      bottom: '10%' // 也可设置left和right设置距离来控制图表的大小
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        label: {
          show: true
        }
      }
    },
    legend: {
      data: ['征缴总额', '同比'],
      top: '15%',
      textStyle: {
        color: '#ffffff'
      }
    },
    xAxis: {
      data: [
        '2101',
        '2102',
        '2103',
        '2104',
        '2105',
        '2106',
        '2107',
        '2108',
        '2109',
        '2110',
        '2111',
        '2112'
      ],
      axisLine: {
        show: true, // 隐藏X轴轴线
        lineStyle: {
          color: '#01FCE3'
        }
      },
      axisTick: {
        // show: true // 隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#ebf8ac' // X轴文字颜色
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '金额 (万元)',
        nameTextStyle: {
          color: '#ffff'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ebf8ac'
          }
        }
      },
      {
        type: 'value',
        name: '同比',
        nameTextStyle: {
          color: '#ebf8ac'
        },
        position: 'right',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          formatter: '{value} %', // 右侧Y轴文字显示
          textStyle: {
            color: '#2d9ef9'
          }
        }
      },
      {
        type: 'value',
        gridIndex: 0,
        min: 50,
        max: 100,
        splitNumber: 8,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
          }
        }
      }
    ],
    series: [
      {
        name: '同比',
        type: 'line',
        yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        // smooth: true, // 平滑曲线显示
        showAllSymbol: true, // 显示所有图形。
        symbol: 'circle', // 标记的图形为实心圆
        symbolSize: 10, // 标记的大小
        itemStyle: {
          // 折线拐点标志的样式
          color: '#058cff'
        },
        lineStyle: {
          color: '#2d9ef9'
        },
        areaStyle: {
          color: 'rgba(5,140,255, 0.2)'
        },
        data: [70, 60, 80, 70, 50, 50, 60, 70, 20, 80, 90, 40]
      },
      {
        name: '征缴总额',
        type: 'bar',
        barWidth: 15,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#00FFE3'
              },
              {
                offset: 1,
                color: '#4693EC'
              }
            ])
          }
        },
        data: [100, 200, 300, 300, 400, 500, 400, 300, 200, 400, 400, 700]
      }
    ]
  }

  myChart.setOption(option)
}
const axis = element => {
  var myChart = echarts.init(element)
  const colorList = ['#9E87FF', '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
  const option = {
    title: {
      textStyle: {
        fontSize: 12,
        fontWeight: 400
      },
      left: 'center',
      top: '5%'
    },
    legend: {
      top: '5%',
      left: '18%',
      itemWidth: 6,
      itemGap: 20,
      textStyle: {
        color: '#556677'
      }
    },
    tooltip: {
      trigger: 'axis',
      type: 'shadow',
      axisPointer: {
        label: {
          show: true,
          backgroundColor: '#fff',
          color: '#556677',
          borderColor: 'rgba(0,0,0,0)',
          shadowColor: 'rgba(0,0,0,0)',
          shadowOffsetY: 0
        },
        lineStyle: {
          width: 0
        }
      },
      backgroundColor: '#fff',
      textStyle: {
        color: '#5c6c7c'
      },
      padding: [10, 10],
      extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
      top: '15%'
    },
    xAxis: [
      {
        type: 'category',
        data: ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '2110', '2111', '2112'],
        axisLine: {
          lineStyle: {
            color: '#DCE2E8'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: '#556677'
          },
          // 默认x轴字体大小
          fontSize: 12,
          // margin:文字到x轴的距离
          margin: 15
        },
        axisPointer: {
          label: {
          // padding: [11, 5, 7],
            padding: [0, 0, 10, 0],
            /*
    除了padding[0]建议必须是0之外，其他三项可随意设置

    和CSSpadding相同，[上，右，下，左]

    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

    padding[2]的10:

    10 = 文字距下边线的距离 + 下边线的宽度

    如：UI图中文字距下边线距离为7 下边线宽度为2

    则padding: [0, 0, 9, 0]

                */
            // 这里的margin和axisLabel的margin要一致!
            margin: 15,
            // 移入时的字体大小
            fontSize: 12,
            backgroundColor: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#fff' // 0% 处的颜色
                },
                {
                // offset: 0.9,
                  offset: 0.86,
                  /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                        */
                  color: '#fff' // 0% 处的颜色
                },
                {
                  offset: 0.86,
                  color: '#33c0cd' // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#33c0cd' // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          }
        },
        boundaryGap: false
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '金额 (万元)',
        nameTextStyle: {
          color: '#ffff'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#ebf8ac'
          }
        }
      },
      {
        type: 'value',
        name: '同比',
        nameTextStyle: {
          color: '#ebf8ac'
        },
        position: 'right',
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          formatter: '{value} %', // 右侧Y轴文字显示
          textStyle: {
            color: '#2d9ef9'
          }
        }
      }
    ],
    series: [
      {
        name: '城职养老',
        type: 'line',
        data: [
          40, 19, 70, 29, 29, 49, 19, 29, 49, 70, 19, 56
        ],
        symbolSize: 1,
        symbol: 'circle',

        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            {
              offset: 0,
              color: '#9effff'
            },
            {
              offset: 1,
              color: '#9E87FF'
            }
          ]),
          shadowColor: 'rgba(158,135,255, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20
        },
        itemStyle: {
          normal: {
            color: colorList[0],
            borderColor: colorList[0]
          }
        }
      },
      {
        name: '失业保险',
        type: 'line',
        data: [5, 12, 11, 14, 25, 16, 10, 40, 30, 50, 40, 20],
        symbolSize: 1,
        symbol: 'circle',
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
            {
              offset: 0,
              color: '#73DD39'
            },
            {
              offset: 1,
              color: '#73DDFF'
            }
          ]),
          shadowColor: 'rgba(115,221,255, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20
        },
        itemStyle: {
          normal: {
            color: colorList[1],
            borderColor: colorList[1]
          }
        }
      },
      {
        name: '机关养老',
        type: 'line',
        data: [15, 12, 270, 40, 50, 16, 45, 30, 40, 50, 60, 20],
        symbolSize: 1,
        yAxisIndex: 1,
        symbol: 'circle',
        showSymbol: false,
        lineStyle: {
          width: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: '#fe9a'
            },
            {
              offset: 1,
              color: '#fe9a8b'
            }
          ]),
          shadowColor: 'rgba(254,154,139, 0.3)',
          shadowBlur: 10,
          shadowOffsetY: 20
        },
        itemStyle: {
          normal: {
            color: colorList[2],
            borderColor: colorList[2]
          }
        }
      }
    ]
  }

  myChart.setOption(option)
}
const mix = element => {
  var myChart = echarts.init(element)
  // mock数据
  const dataArr = {
    xdata: ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '2110', '2111', '2112'],
    unvaccinated: [700, 800, 900, 500, 300, 400, 500, 200, 300, 500, 400, 200],
    unvaccinatedTwo: [400, 200, 300, 300, 500, 200, 100, 100, 300, 400, 500, 600],
    rateDataOne: [98, 96, 97, 92, 94, 95, 88, 86, 87, 82, 84, 85],
    rateDataTwo: [88, 86, 87, 82, 84, 85, 95, 96, 97, 92, 94, 95]
  }

  // tooltip
  const tooltip = {
    trigger: 'axis',
    textStyle: { fontSize: '100%' },
    formatter: (params) => {
      const rander = params
        .map((item) =>
          item.seriesType !== 'pictorialBar'
            ? `<div>${item.seriesName}: ${
              item.seriesType !== 'line' ? item.value : item.value + '%'
            }</div>`
            : ''
        )
        .join('')
      return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
    }
  }
  const legend = {
    data: [
      '补缴金额',
      '补缴同比',
      '退缴金额',
      '退缴同比'

    ],
    textStyle: { fontSize: 12, color: '#fff' },
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    top: 0,
    selectedMode: false
  }
  const grid = { top: '18%', left: '10%', right: '6%', bottom: '25%' }
  // xAxis
  const xAxis = {
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff' } },
    data: dataArr.xdata
  }

  // yAxis
  const yAxis = [
    {
      axisTick: { show: false },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
      axisLabel: { textStyle: { fontSize: 12, color: '#fff' } }
    },
    {
      show: true,
      max: 100,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        textStyle: { fontSize: 16, color: '#fff' },
        formatter: (params) => {
          return `${params}%`
        }
      }
    }
  ]

  // series
  const series = [
    {
      z: 1,
      name: '补缴金额',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: dataArr.vaccination,
      symbol: 'diamond',
      symbolOffset: ['-50%', '-50%'],
      symbolSize: [29, 19],
      itemStyle: {
        borderColor: '#2fffa4',
        color: '#2fffa4'
      }
    },
    {
      z: 1,
      type: 'bar',
      name: '补缴同比',
      barWidth: 30,
      barGap: '-50%',
      data: dataArr.vaccination,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(29, 245, 160, .7)' },
            { offset: 0.5, color: 'rgba(29, 245, 160, .7)' },
            { offset: 0.5, color: 'rgba(29, 245, 160, .3)' },
            { offset: 1, color: 'rgba(29, 245, 160, .3)' }
          ]
        }
      }
    },
    {
      z: 2,
      name: '退缴金额',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: dataArr.unvaccinated,
      symbol: 'diamond',
      symbolOffset: [0, '-50%'],
      symbolSize: [29, 19],
      itemStyle: {
        borderColor: '#32ffee',
        color: '#32ffee'
      }
    },
    {
      z: 2,
      type: 'bar',
      name: '已完成第一次接种',
      barWidth: 30,
      data: dataArr.unvaccinated,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(50, 255, 238, .7)' },
            { offset: 0.5, color: 'rgba(50, 255, 238, .7)' },
            { offset: 0.5, color: 'rgba(50, 255, 238, .3)' },
            { offset: 1, color: 'rgba(50, 255, 238, .3)' }
          ]
        }
      }
    },
    {
      z: 3,
      name: '上部1',
      type: 'pictorialBar',
      symbolPosition: 'end',
      data: dataArr.unvaccinatedTwo,
      symbol: 'diamond',
      symbolOffset: ['50%', '-50%'],
      symbolSize: [29, 19],
      itemStyle: {
        borderColor: '#ffd11a',
        color: '#ffd11a'
      }
    },
    {
      z: 3,
      type: 'bar',
      name: '已完成第二次接种',
      barWidth: 30,
      data: dataArr.unvaccinatedTwo,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          x2: 1,
          y: 0,
          y2: 0,
          colorStops: [
            { offset: 0, color: 'rgba(255, 209, 26, .7)' },
            { offset: 0.5, color: 'rgba(255, 209, 26, .7)' },
            { offset: 0.5, color: 'rgba(255, 209, 26, .3)' },
            { offset: 1, color: 'rgba(255, 209, 26, .3)' }
          ]
        }
      }
    },
    {
      z: 9,
      yAxisIndex: 1,
      name: '完成第一次接种率',
      type: 'line',
      symbol: 'path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z',
      symbolSize: [10, 10],
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [
          { offset: 0, color: '#32ffee' },
          { offset: 1, color: '#8afff5' }
        ],
        global: false // 缺省为 false
      },
      lineStyle: {
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          // 0% 处的颜色                           // 100% 处的颜色
          colorStops: [
            { offset: 0, color: '#32ffee' },
            { offset: 1, color: '#8afff5' }
          ],
          global: false // 缺省为 false
        }
      },
      // 修改的是线下区域的颜色
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
        // 右/下/左/上
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: 'rgba(50, 255, 238, .1)' },
            { offset: 1, color: 'transparent' }
          ]
        )
      },
      label: {
        show: true,
        position: 'insideBottomLeft',
        formatter: (params) => {
          return `${params.value}%`
        },
        textStyle: { fontSize: 16, color: '#32ffee' }
      },
      data: dataArr.rateDataOne
    },
    {
      z: 9,
      yAxisIndex: 1,
      name: '完成第二次接种率',
      type: 'line',
      symbol: 'path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z',
      symbolSize: [10, 10],
      color: {
        type: 'linear',
        x: 1,
        y: 0,
        x2: 0,
        y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [
          { offset: 0, color: '#ffd11a' },
          { offset: 1, color: '#fff5cc' }
        ],
        global: false // 缺省为 false
      },
      lineStyle: {
        color: {
          type: 'linear',
          x: 1,
          y: 0,
          x2: 0,
          y2: 0,
          // 0% 处的颜色                           // 100% 处的颜色
          colorStops: [
            { offset: 0, color: '#ffd11a' },
            { offset: 1, color: '#fff5cc' }
          ],
          global: false // 缺省为 false
        }
      },
      // 修改的是线下区域的颜色
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
        // 右/下/左/上
          0,
          0,
          0,
          1,
          [
            { offset: 0, color: 'rgba(255, 209, 26, .2)' },
            { offset: 1, color: 'transparent' }
          ]
        )
      },
      label: {
        show: true,
        position: 'insideBottomRight',
        formatter: (params) => {
          return `${params.value}%`
        },
        textStyle: { fontSize: 16, color: '#ffd11a' }
      },
      data: dataArr.rateDataTwo
    }
  ]
  const option = {
    tooltip,
    xAxis,
    yAxis,
    series,
    grid,
    legend,
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }
  myChart.setOption(option)
}
export {
  per,
  rader,
  bar,
  axis,
  mix
}
