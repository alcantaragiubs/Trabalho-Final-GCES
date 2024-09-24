import { createSlug } from '../src/utils/create-slug'

describe('Testes', () => {
  test('Deve criar um slug válido a partir de uma string', () => {
    const text = 'As quartas feiras usamos rosa'
    const slug = createSlug(text)
    expect(slug).toBe('as-quartas-feiras-usamos-rosa')
  })
})