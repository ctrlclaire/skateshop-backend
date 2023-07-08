import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Size extends BaseModel {

  static get table() {
    return 'size'
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public size: string
}
