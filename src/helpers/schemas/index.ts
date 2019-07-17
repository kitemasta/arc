import { schema } from 'normalizr'

interface SchemasInterface {
	[key: string]: any
}

const carSchema = new schema.Entity('cars')

const userSchema = new schema.Entity('users', {
	cars: [carSchema],
})

export const schemas: SchemasInterface = {
	users: userSchema,
	cars: carSchema,
}
