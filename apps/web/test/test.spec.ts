import { QueryClient } from '@tanstack/react-query'

import { queryClient } from '../src/lib/react-query'

describe('QueryClient', () => {
  it('Deve ser instanciado corretamente', () => {
    // Verifica se queryClient é uma instância de QueryClient
    expect(queryClient).toBeInstanceOf(QueryClient)
  })

  it('Deve armazenar e recuperar dados em cache corretamente', async () => {
    // Define uma chave de cache e dados de teste
    const testKey = ['test-query']
    const testData = { data: 'test data' }

    // Usa o QueryClient para definir os dados em cache
    queryClient.setQueryData(testKey, testData)

    // Recupera os dados do cache
    const cachedData = queryClient.getQueryData(testKey)

    // Verifica se os dados recuperados são os mesmos que foram armazenados
    expect(cachedData).toEqual(testData)
  })

  it('Deve remover dados do cache corretamente', async () => {
    const testKey = ['test-query']

    // Remove os dados do cache
    queryClient.removeQueries({ queryKey: testKey })

    // Verifica se os dados foram removidos corretamente
    const cachedData = queryClient.getQueryData(testKey)
    expect(cachedData).toBeUndefined()
  })
})
