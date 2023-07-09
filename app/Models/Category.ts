import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Category extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public category: string

  @hasMany(() => Product, {
    foreignKey: 'categoryId', // id column on "User" model
  })
  public product: HasMany<typeof Product>
}
