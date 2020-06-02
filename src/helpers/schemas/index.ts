import { schema } from 'normalizr'

interface SchemasInterface {
	[key: string]: any
}

const brandSchema = new schema.Entity('brands')

const carSchema = new schema.Entity('cars', {
	brands: [brandSchema],
})

const userSchema = new schema.Entity('users', {
	cars: [carSchema],
})

export const schemas: SchemasInterface = {
	users: userSchema,
	cars: carSchema,
	brands: brandSchema,
}
