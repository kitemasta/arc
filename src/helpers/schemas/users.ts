import { schema } from 'normalizr'

export const usersSchema = new schema.Array(new schema.Entity('users'))
