import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Category extends BaseModel {

  static get table() {
    return 'category'
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public category: string
}
