import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Size from 'App/Models/Size'

export default class SizesController {
    public async index({ response }: HttpContextContract) {
        const size = await Size.all()
        return response.ok(size)
      }
      
        public async store({ request, response }: HttpContextContract) {
        const sizeSchema = schema.create({
            size: schema.string(),
        })
        const payload = await request.validate({ schema: sizeSchema })
        try {
            const size = await Size.create(payload)
            return response.ok(size)
        } catch (error) {
            response.badRequest(error.messages)
        }
}
}
