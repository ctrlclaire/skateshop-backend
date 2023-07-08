import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoriesController {
    public async index({ response }: HttpContextContract) {
        const category = await Category.all()
        return response.ok(category)
      }

      public async store({ request, response }: HttpContextContract) {
        const categorySchema = schema.create({
            category: schema.string(),
        })
        const payload = await request.validate({ schema: categorySchema })
        try {
            const category = await Category.create(payload)
            return response.ok(category)
        } catch (error) {
            response.badRequest(error.messages)
        }
}
}
