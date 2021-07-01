const canvas = require('canvas')
const echarts = require('echarts')
const fs = require('fs')

/** * 生成echarts图片 *
 * @param {*} option echarts 选项 *
 *  @returns 图片buffer
 * */

async function getBufferByCanvas(option = {}) {
  //创建一个canvas实例
  let ctx = canvas.createCanvas(500, 500)
  //将canvas实例设置为echarts容器
  echarts.setCanvasCreator(() => ctx)
  //使用canvas实例为容器创建echarts实例
  let chart = echarts.init(ctx)
  //设置图标实例配置项
  chart.setOption(option)
  return chart.getDom().toBuffer()
}

module.exports = { getBufferByCanvas }
