const express = require('express')
// const { getEchartsChart } = require('./service/getChartsBuffer')
const { getBufferByCanvas } = require('./service/getBufferByCanvas')
const { serverRank } = require('./option')
const docx = require('docx')
const fs = require('fs')
const { Document, Packer, Paragraph, TextRun, ImageRun } = docx

const app = express()
const port = 8000

app.get('/', async (req, res) => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: fs.readFileSync('./stone.png'),
                transformation: {
                  width: 200,
                  height: 200
                }
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun('node 插入图表'),
              new ImageRun({
                // 通过headless浏览器截取快照
                // data: getEchartsChart(serverRank),

                // 「推荐」使用canvas实例为容器创建echarts实例,更加快捷、高效
                data: getBufferByCanvas(serverRank),
                transformation: {
                  width: 500,
                  height: 500
                }
              })
            ]
          })
        ]
      }
    ]
  })

  const b64string = await Packer.toBase64String(doc)

  res.setHeader('Content-Disposition', 'attachment; filename=example.docx')
  res.send(Buffer.from(b64string, 'base64'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
