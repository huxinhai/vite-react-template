import * as fs from 'node:fs'
import * as path from 'node:path'

const packageJsonPath = path.join('./', 'package.json')
const packageContent = fs.readFileSync(packageJsonPath, 'utf-8')
const packageJson = JSON.parse(packageContent)
const { version } = packageJson

const envPath = '.env'
let envContent = ''
try {
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf-8')
  }
  const updatedEnvContent = envContent.replace(
    /^VITE_API_VERSION=.*$/m,
    `VITE_API_VERSION=${version}`
  )

  // console.log(updatedEnvContent);

  fs.writeFileSync(envPath, updatedEnvContent, 'utf-8')

  console.log(`成功更新 VITE_API_VERSION 为 ${version}`)
} catch (error) {
  console.error('更新.env文件失败:', error)
}
