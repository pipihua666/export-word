1. `export-frontend`前端采用 `React` 技术栈,使用`docx`npm 包实现添加图表导出 word。

   - 先安装依赖`yarn`
   - `yarn start`
   - 访问 http://localhost:3000

2. `export-node`后端通过无头浏览器和 canvas 两种方式实现添加图表导出 word,可惜导出的图表都是图片类型。

   - 先安装依赖 `yarn`
   - `node index.js`
   - 访问 http://localhost:8000

3. `export-golang`golang 通过模板渲染，依据 docx 本来就是 zip 压缩包的特性添加图表实现 导出 word，原版 word 导出，图表可交互。golang 的速度是真的快的！！！

   - 先安装依赖`go mod tidy`
   - `go run main.go`
   - 访问 http://localhost:8080
