import { Document, ImageRun, Paragraph, TextRun } from 'docx'
import getChartDataUrl from './getChartUrl'
import { serverRank } from './options'
import wordImage from './stone.png'

const getDoc = () => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new ImageRun({
                data: wordImage,
                transformation: {
                  width: 200,
                  height: 200
                }
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun('插入图表'),
              new ImageRun({
                data: getChartDataUrl(serverRank),
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
  return doc
}

export default getDoc
