// index.js
// 获取应用实例
const app = getApp()
// 1、引入依赖脚本
import * as echarts from '../../ec-canvas/echarts';
// 2、进行初始化数据
function initChart1(canvas, width, height, dpr) {
  const chart1 = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart1);

  var option1 = {
    title: {
      left: 'center'
    },
    color: ["#FE0105", "#8752F9", "#3054F0"],
    legend: {
      icon: "circle", 
      data: ['语文', '数学', '英语'],
      top: 10,
      left: 'right',
      z: -1
    },
    grid: {
      containLabel: true
    },
    // 悬浮图标
    tooltip: {
      show: true,
      trigger: 'axis',
      //这一步的效果是当你的光标在左边的时候，悬浮标题在右边，在右边的时候，悬浮标题在左边
      position: function (pos, params, dom, rect, size) {
        var obj = { top: 60 };
        obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 5;
        return obj;
      }
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,//show属性为false不展示缩放手柄，为展示缩放手柄
        start: 0,
        end: 45,
        // handleSize: 88  该属性是缩放手柄的宽度
      },
      {
        type: 'inside',
        start: 0,
        end: 45
      }
    ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['5月6日', '7月6日', '8月6日', '9月6日', '10月6日', '11月6日', '12月6日']
      // show: false
    },
    yAxis: {
      min: 0, //y轴的最小值
      max: 100, //y轴最大值 
      interval: 25, //值之间的间隔
      x: 'center',
      type: 'value',
    },
    series: [{
      name: '语文',
      type: 'line',

      data: [50, 75, 65, 30, 78, 40, 100]
    }, {
      name: '数学',
      type: 'line',
      data: [12, 50, 51, 35, 70, 30, 95]
    }, {
      name: '英语',
      type: 'line',
      data: [100, 30, 31, 50, 40, 20, 10]
    }]
  };
  chart1.setOption(option1);
  return chart1;
}

function initChart2(canvas, width, height, dpr) {
  const chart2 = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart2);
  var option2 = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      icon: "circle", 
      data: ['语文', '数学', '英语'],
      top: 10,
      left: 'right',
      z: -1
    },
    color: ["#FE0105", "#8752F9", "#3054F0"],
    toolbox: {
      show: false,
      feature: {
        dataView: {
          show: true,
          readOnly: false
        },
        magicType: {
          show: true,
          type: ['line', 'bar']
        },
        restore: {
          show: true
        },
        saveAsImage: {
          show: true
        }
      }
    },
    calculable: true,
    xAxis: [{
      type: 'category',
      data: ['5月6日', '7月6日', '8月6日', '9月6日', '10月6日', '11月6日', '12月6日']
    }],
    yAxis: [{
      min: 0, //y轴的最小值
      max: 100, //y轴最大值 
      interval: 25, //值之间的间隔
      x: 'center',
      type: 'value',
    }],
    series: [{
        name: '语文',
        type: 'bar',
        data: [50, 75, 65, 30, 78, 40, 100],
        markPoint: {
          data: [
            // { type: 'max', name: '最大值' },
            // { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      },
      {
        name: '数学',
        type: 'bar',
        data: [12, 50, 51, 35, 70, 30, 95],
        markPoint: {
          data: [
            // { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
            // { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      },
      {
        name: '英语',
        type: 'bar',
        data: [100, 30, 31, 50, 40, 20, 10],
        markPoint: {
          data: [
            // { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
            // { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{
            type: 'average',
            name: '平均值'
          }]
        }
      }
    ]
  };

  chart2.setOption(option2);
  return chart2;
}

function initChart3(canvas, width, height, dpr) {
  const chart3 = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart3);
  var option3 = {
    legend: {
      icon: "circle", 
      data: ['语文', '数学', '英语'],
      bottom: 10,
      left: 'center',
      z: -1
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    color: ["#FE0105", "#8752F9", "#3054F0"],
    series: [{
      name: '成绩',
      type: 'pie',
      radius: [100, 120],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [{
          value: 100,
          name: '语文'
        },
        {
          value: 95,
          name: '数学'
        },
        {
          value: 85,
          name: '英语'
        }
      ]
    }]
  };
  chart3.setOption(option3);
  return chart3;
}

function initChart4(canvas, width, height, dpr) {
  const chart4 = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart4);
  var option4 = {
    series: [{
      radius: 160,
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 5,
      axisLine: {
        lineStyle: {
          width: 0,
          color: [
            [0.25, '#58D9F9'],
            [0.5, '#58D9F9'],
            [0.75, '#7CFFB2'],
            [1, '#58D9F9']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 5
        }
      },
      axisLabel: {
        color: '#464646',
        fontSize: 20,
        distance: -60,
        formatter: function(value) {
          if (value === 0.875) {
            return '优';
          } else if (value === 0.625) {
            return '中';
          } else if (value === 0.375) {
            return '良';
          } else if (value === 0.125) {
            return '差';
          }
        }
      },
      title: {
        color: '#BABABD',
        offsetCenter: [0, '0%'],
        fontSize: 36
      },
      detail: {
        fontSize: 34,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function(value) {
          return Math.round(value * 100) + '%';
        },
        color: '#000000'
      },
      data: [{
      
        value: 0.70,
        name: '过线率'
      }]
    }]
  };
  chart4.setOption(option4);
  return chart4;
}

Page({
  data: {
    ec1: {
      onInit: initChart1 // 1、将数据放入到里面
    },
    ec2: {
      onInit: initChart2 // 2、将数据放入到里面
    },
    ec3: {
      onInit: initChart3 // 3、将数据放入到里面
    },
    ec4: {
      onInit: initChart4 // 3、将数据放入到里面
    },
    activeIndex: 1,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})