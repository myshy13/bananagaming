const fs = require("fs")
const path = require("path")

const ROOT_DIR = __dirname
const OUTPUT_DIR = path.join(ROOT_DIR, "images")

// ensure ./images exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}

const entries = fs.readdirSync(ROOT_DIR, { withFileTypes: true })

entries.forEach((entry) => {
  if (!entry.isDirectory()) return

  const folderName = entry.name
  const folderPath = path.join(ROOT_DIR, folderName)

  const files = fs.readdirSync(folderPath)

  files.forEach((file) => {
    // match files starting with "icon."
    if (!file.startsWith("icon.")) return

    const oldPath = path.join(folderPath, file)

    // skip if it's not a file
    if (!fs.statSync(oldPath).isFile()) return

    const ext = path.extname(file) // e.g. ".png"
    const baseName = path.basename(file, ext) // "logo"

    const newFileName = `logo-${folderName}${ext}`
    const newPath = path.join(OUTPUT_DIR, newFileName)

    fs.renameSync(oldPath, newPath)

    console.log(`Moved: ${oldPath} -> ${newPath}`)
  })
})

console.log("Done.")
