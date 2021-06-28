import React, { Component } from 'react'
import { saveAs } from 'file-saver'
import getDoc from './doc'
import { Packer } from 'docx'
class App extends Component {
  generate() {
    const doc = getDoc()
    Packer.toBlob(doc).then(blob => {
      saveAs(blob, 'example.docx')
    })
  }

  render() {
    return (
      <div>
        <p>前端导出插入图片支出base64和url两种方式</p>
        <p>
          <button onClick={this.generate} style={{ marginRight: 20 }}>
            点击通过base64下载的word
          </button>
          <p></p>
        </p>
      </div>
    )
  }
}

export default App
