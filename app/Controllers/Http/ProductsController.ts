import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { schema } from '@ioc:Adonis/Core/Validator'
import { rules } from '@adonisjs/validator/build/src/Rules'

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    const product = await Product.all()
    return response.ok(product)
  }

  public async store({ request, response }: HttpContextContract) {
    const productSchema = schema.create({
      name: schema.string(),
      description: schema.string(),
      price: schema.number(),
      image: schema.string(),
      size_id: schema.number.optional(),
      category_id: schema.number([rules.exists({ table: 'categories', column: 'id' })]),
    })
    const payload = await request.validate({ schema: productSchema })
    try {
        const product = await Product.create(payload)
        return response.ok(product)
    } catch (error) {
        response.badRequest(error.messages)
    }
  }

    public async show({ params, response }: HttpContextContract) {
    const product = await Product.findBy('slug', params.slug)
    if (!product) {
      return response.notFound('Product not found')
    }
    return response.ok(product)
  }

  public async update({ params, response, request }: HttpContextContract) {
    const updateProductSchema = schema.create({
        name: schema.string(),
        description: schema.string(),
        price: schema.number(),
        image: schema.string(),
        size_id: schema.number(),
        category_id: schema.number(),
        // slug: schema.string(),
      })
      const payload = await request.validate({ schema: updateProductSchema
    })
    const updateProduct = await Product.findOrFail(params.id)
    await updateProduct.merge(payload).save()
    return response.send(updateProduct)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const deleteProduct = await Product.findOrFail(params.id)
    await deleteProduct.delete()
    return response.send(`${deleteProduct.name} has been deleted`)
  }
}
