import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Size extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public size: string
  
  @hasMany(() => Product, {
    foreignKey: 'sizeId', // id column on "User" model
  })
  public product: HasMany<typeof Product>
}
