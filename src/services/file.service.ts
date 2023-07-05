import fsExtra from 'fs-extra'
import fs from 'node:fs/promises'
export class FileService {
  constructor(public filePath: string) {
    this.createFileIfNotExists()
  }

  private async createFileIfNotExists(): Promise<void> {
    try {
      await fs.access(this.filePath)
    } catch {
      await fs.writeFile(this.filePath, '', 'utf8')
    }
  }

  async readJsonData<T>(): Promise<T | null> {
    try {
      return fsExtra.readJSONSync(this.filePath, {throws: false}) || null
    } catch (error) {
      throw error
    }
  }

  async updateJson(data: any): Promise<void> {
    try {
      await fsExtra.writeJson(this.filePath, data)
    } catch (error) {
      throw error
    }
  }

  async isExists(): Promise<boolean> {
    try {
      await fs.access(this.filePath)
      return true
    } catch {
      return false
    }
  }

  async writeJson(data: any): Promise<void> {
    try {
      await fsExtra.writeJson(this.filePath, data)
    } catch (error) {
      throw error
    }
  }

  async write(data: any): Promise<void> {
    try {
      await fs.writeFile(this.filePath, data, 'utf8')
    } catch (error) {
      throw error
    }
  }
}
