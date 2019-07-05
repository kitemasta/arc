import { usersSchema } from './users'

interface SchemasInterface {
	[key: string]: any
}

export const schemas: SchemasInterface = {
	users: usersSchema,
}
