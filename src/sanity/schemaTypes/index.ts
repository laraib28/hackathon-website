import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import placeholder from './placeholder'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, placeholder],
}
