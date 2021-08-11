// pages/analysisList/components/echartList/echartList.js
import * as echarts from '../../../../ec-canvas/echarts';
const app = getApp();

var chart1 = null
var chart2 = null
var chart3 = null
var chart4 = null
var chart5 = null
var chart6 = null

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 数据
    dataList: {
      type: Object,
      value: {},
      observer: function (dataList) {
        if (Object.keys(dataList).length !== 0) {
          setTimeout(() => {
            let browseData = dataList.BROWSE.list
            let transmitData = dataList.TRANSMIT.list
            let likeData = dataList.LIKE.list
            let commentData = dataList.COMMENT.list
            let collectData = dataList.COLLECT.list

            if (this.data.isPost) {
              var bannerData = dataList.BANNER.list
            }
            // 左上角数据
            this.setData({
              browseDataCount: {
                increase: dataList.BROWSE.increase,
                symbol: dataList.BROWSE.symbol
              },
              transmitDataCount: {
                increase: dataList.TRANSMIT.increase,
                symbol: dataList.TRANSMIT.symbol
              },
              likeDataCount: {
                increase: dataList.LIKE.increase,
                symbol: dataList.LIKE.symbol
              },
              commentDataCount: {
                increase: dataList.COMMENT.increase,
                symbol: dataList.COMMENT.symbol
              },
              collectDataCount: {
                increase: dataList.COLLECT.increase,
                symbol: dataList.COLLECT.symbol
              },
            })
            if (this.data.isPost) {
              this.setData({
                bannerDataCount: {
                  increase: dataList.BANNER.increase,
                  symbol: dataList.BANNER.symbol
                },
              })
            }
            // 处理图表数据
            this.data.browseDataArr = []
            this.data.browseTimeArr = []
            browseData.forEach(item => {
              item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                this.setData({
                  browseDataArr: [...this.data.browseDataArr, item.num],
                  browseTimeArr: [...this.data.browseTimeArr, item.createTime],
                })
            })
            this.data.transmitDataArr = []
            this.data.transmitTimeArr = []
            transmitData.forEach(item => {
              item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                this.setData({
                  transmitDataArr: [...this.data.transmitDataArr, item.num],
                  transmitTimeArr: [...this.data.transmitTimeArr, item.createTime]
                })
            })
            this.data.likeDataArr = []
            this.data.likeTimeArr = []
            likeData.forEach(item => {
              item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                this.setData({
                  likeDataArr: [...this.data.likeDataArr, item.num],
                  likeTimeArr: [...this.data.likeTimeArr, item.createTime]
                })
            })
            this.data.commentDataArr = []
            this.data.commentTimeArr = []
            commentData.forEach(item => {
              item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                this.setData({
                  commentDataArr: [...this.data.commentDataArr, item.num],
                  commentTimeArr: [...this.data.commentTimeArr, item.createTime]
                })
            })
            this.data.collectDataArr = []
            this.data.collectTimeArr = []
            collectData.forEach(item => {
              item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                this.setData({
                  collectDataArr: [...this.data.collectDataArr, item.num],
                  collectTimeArr: [...this.data.collectTimeArr, item.createTime]
                })
            })
            if (this.data.isPost) {
              this.data.bannerDataArr = []
              this.data.bannerTimeArr = []
              bannerData.forEach(item => {
                item.createTime = [(item.createTime.split('-'))[1], (item.createTime.split('-'))[2]].join('/'),
                  this.setData({
                    bannerDataArr: [...this.data.bannerDataArr, item.num],
                    bannerTimeArr: [...this.data.bannerTimeArr, item.createTime]
                  })
              })
            }
            setTimeout(() => {
              this.runBrowseCanva()
              this.runTransmitCanva()
              this.runLikeCanva()
              this.runCommentCanva()
              this.runCollectCanva()
              if (this.data.isPost) {
                this.runBannerCanva()
              }
            }, 300)
          }, 200)
        }
      }
    },
    isPost: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec1: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart1 = echarts.init(canvas, null, {
          width: width,
          height: height,
        });
        canvas.setChart(chart1);
        return chart1;
      }
    },
    ec2: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart2 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart2);
        return chart2;
      }
    },
    ec3: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart3 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart3);
        return chart3;
      }
    },
    ec4: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart4 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart4);
        return chart4;
      }
    },
    ec5: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart5 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart5);
        return chart5;
      }
    },
    ec6: {
      // 初始化图表
      onInit: function (canvas, width, height) {
        //初始化echarts元素，绑定到全局变量，方便更改数据
        chart6 = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart6);
        return chart6;
      }
    },
    browseDataArr: [],
    transmitDataArr: [],
    likeDataArr: [],
    commentDataArr: [],
    collectDataArr: [],
    bannerDataArr: [],
    browseTimeArr: [],
    transmitTimeArr: [],
    likeTimeArr: [],
    commentTimeArr: [],
    collectTimeArr: [],
    bannerTimeArr: [],
    browseDataCount: {
      increase: '',
      symbol: ""
    },
    transmitDataCount: {
      increase: '',
      symbol: ""
    },
    likeDataCount: {
      increase: '',
      symbol: ""
    },
    commentDataCount: {
      increase: '',
      symbol: ""
    },
    collectDataCount: {
      increase: '',
      symbol: ""
    },
    bannerDataCount: {
      increase: '',
      symbol: ""
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 绘制浏览量
    runBrowseCanva() {
      var option1 = {
        color: ["#7EFF00"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.browseTimeArr,
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '浏览量',
          type: 'line',
          data: this.data.browseDataArr,
        }]
      };
      if (chart1) {
        chart1.setOption(option1);
      }
    },
    // 绘制转发量
    runTransmitCanva() {

      var option2 = {
        color: ["#00FFCC"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.transmitTimeArr,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '转发量',
          type: 'line',
          data: this.data.transmitDataArr,
        }]
      };
      if (chart2) {
        chart2.setOption(option2);
      }
    },
    // 绘制点赞量
    runLikeCanva() {
      var option3 = {
        color: ["#DE4040"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.likeTimeArr,
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '点赞量',
          type: 'line',
          data: this.data.likeDataArr,
        }]
      };
      if (chart3) {
        chart3.setOption(option3);
      }
    },
    // 绘制评论量
    runCommentCanva() {
      var option4 = {
        color: ["#FFB400"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.commentTimeArr,
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '评论量',
          type: 'line',
          data: this.data.commentDataArr,
        }]
      };
      if (chart4) {
        chart4.setOption(option4);
      }
    },
    // 绘制收藏量
    runCollectCanva() {
      var option5 = {
        color: ["#FF00FF"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.collectTimeArr,
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '收藏量',
          type: 'line',
          data: this.data.collectDataArr,
        }]
      };
      if (chart5) {
        chart5.setOption(option5);
      }
    },
    // 绘制广告点击量
    runBannerCanva() {
      var option6 = {
        color: ["#ffffff"],
        // 以防y轴被压缩
        grid: {
          y: 10
        },
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#a1a1a1'
            }
          },
          data: this.data.bannerTimeArr,
          // show: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#a1a1a1'
            }
          },
          // show: false
        },
        series: [{
          name: '广告点击量',
          type: 'line',
          data: this.data.bannerDataArr,
        }]
      };
      if (chart6) {
        chart6.setOption(option6);
      }
    },
  },

})
