import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Size from "App/Models/Size";
import Category from "App/Models/Category";
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public image: string

  @column()
  @slugify({
    strategy: 'dbIncrement',
    fields: ['name']
  })
  public slug: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Size)
  public size: BelongsTo<typeof Size>

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @column()
  public sizeId: string

  @column()
  public categoryId: string
}
