const puppeteer = require('puppeteer')
const path = require('path')

/** * 生成echarts图片 *
 * @param {*} option echarts 选项 *
 *  @returns 图片buffer
 * */
async function getEchartsChart(option = {}) {
  // 启动浏览器
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  })
  // 创建空白页面
  const page = await browser.newPage()
  try {
    // 定义网页模板
    const content = `<!DOCTYPE html>    
    <html lang="en">    
      <head>        
        <meta charset="UTF-8">        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">       
        <meta http-equiv="X-UA-Compatible" content="ie=edge">       
        <title>chart</title>    
      </head>    
      <body>
          <div id="container" style="width: 500px;height:500px;" />
      </body>    
    </html>`
    // 设置网页源码
    await page.setContent(content)
    // 添加script标签和属性
    await page.addScriptTag({
      path: path.resolve(
        __dirname,
        './node_modules/echarts/dist/echarts.min.js'
      )
    })
    // 网页中执行js代码
    await page.evaluate(option => {
      const myChart = window.echarts.init(document.getElementById('container'))
      myChart.setOption(option)
    }, option)
    // 网页中获取id为container的元素
    let elem = await page.$('#container')
    // 截图元素快照
    let buffer = await elem.screenshot({
      type: 'png'
      // path: path.resolve(__dirname, './123.png') // 快照的生成路径
    })
    return buffer
  } catch (err) {
    console.log(`render echarts chart error: ${err}`)
    return null
  } finally {
    // 关闭网页
    await page.close()
    // 关闭浏览器
    await browser.close()
  }
}
module.exports = { getEchartsChart }
