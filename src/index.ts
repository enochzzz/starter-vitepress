import fs from 'fs'
import path from 'path'
function getMdContent(path) {
  const md = fs.readFileSync(path)
  console.log(md, 111)
}
console.log(path.resolve('./'), 222)
getMdContent(path.join('src', 'index.md'))
