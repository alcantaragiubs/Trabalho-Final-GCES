import type { Config } from 'jest';

const config: Config = {
  // Adiciona o preset do ts-jest para suportar TypeScript
  preset: 'ts-jest',
  
  // Test environment for Node.js
  testEnvironment: 'jest-environment-jsdom',

   // Adiciona o mapeamento para o alias "@"
   moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Diretórios e arquivos onde os testes devem ser realizados
  testMatch: ['**/test/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],

  // Configuração do ts-jest para transformar arquivos TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Diretório para armazenar os relatórios de cobertura
  coverageDirectory: "coverage",

  // Coleta informações de cobertura
  collectCoverage: true,
};

export default config;