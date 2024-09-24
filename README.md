# Trabalho individual de GCES 2024-1

Trabalho final da disciplina de GCES em 2024.1, focado em Docker em modo DEV e modo PROD.
Autora: [Giulia Alcantara](https://gitlab.com/alcantaragiubs)

## Etapas

Para a execução do trabalho, devem ser executados os seguintes comandos:

- Clone o projeto: `git clone https://gitlab.com/unb-esw/gces-2024-1/trabalho-final-gces-giulia-alcantara.git`
- Utilize a versão do node: 18.17.0, para usa-la dê o comando `nvm use 18.17.0`
    - Recomenda-se a utilização do sistema LINUX para utilizar a aplicação;
    - Recomenda-se checar as versões finais dos commits de cada etapa pelos entitulados *Etapa x - FINALIZADA* para as etapas 1, 2 e 3, *Etapa 5 - FINALIZADA (corrigida e sem hot reload)* para a etapa 5, e *Etapa x - FINALIZADA (corrigida)* para as etapas 4 e 6. Após o merge da branch *etapa-6*.

### Etapa 1

- Rode os comandos `npm install -g pnpm` e após `pnpm install --no-frozen-lockfile` (garante que o arquivo lock seja atualizado) na raíz do projeto para baixar todas as suas dependências
- Rode o comando `docker compose build` para poder buildar os containers em modo DEV

### Etapa 2

- Rode o comando `docker compose up` para subir os containers em modo DEV e ver o pg funcionando, o HTTP rodando e a pagina da aplicação.
    - Caso deseje checar o hot reload, recomenda-se editar o arquivo `/apps/web/src/app/auth/sign-in/sign-in-form.tsx` no campo 'Sign in with e-mail' para 'Entrar com e-mail' para ver a alteração sendo realizada na tela.
    - Para verificar a conexão com o banco de dados, abra a tela do [localhost](http://localhost:3000/) e crie uma conta

### Etapa 3

- Para verificar cada etapa do CI, existem duas opções:
    1. Verificar o pipeline aprovado pelo gitlab do repositório;
    2. Rodar cada comando na raíz do projeto:

        2.1 - Stage build: O comando de build já foi rodado na [Etapa 1](#etapa-1), se quiser testar novamente, rode: `docker compose -f docker-compose.yml build`;

        2.2 - Stage test: `pnpm run test`;

        2.3 - Stage lint: `pnpm run lint`; 
            - Caso dê erro no lint, rode os comandos:
            
                pnpm eslint "src/**/*.{js,ts,tsx}" --fix 

                pnpm prettier --write "src/**/*.ts" "src/**/*.tsx" 

                pnpm prettier --write . 

### Etapa 4 

- Adicione suas credenciais do banco de dados _postgres_ nas variáveis `POSTGRES_USER`, `POSTGRES_PASSWORD` nos arquivos [de CI](./.gitlab-ci.yml) e [docker-compose-prod](./docker-compose-prod.yml) nos campos SEUUSUARIO e SUASENHA e, nos mesmos campos, no arquivo [.env.prod](./.env.prod) na variável `DATABASE_URL`

- Rode o comando `docker compose -f docker-compose-prod.yml build` para subir os containers em modo PROD

### Etapa 5 

- Rode o comando `docker compose -f docker-compose-prod.yml up` para subir os containers em modo PROD e ver o pg funcionando, o HTTP rodando e a pagina da aplicação.
    - Caso deseje checar a ausência do hot reload, recomenda-se editar o arquivo `/apps/web/src/app/auth/sign-in/sign-in-form.tsx` no campo 'Sign in with e-mail' para 'Entrar com e-mail' para ver a alteração NÃO sendo realizada na tela.
    - Caso deseje checar o funcionamento do *nginx*: ao finalizar o _build_ do frontend, *não* abra o link sugerido pelo terminal, entre no seu navegador e, na aba de pesquisa, digite apenas `localhost`
        - Caso abra uma tela de conexão insegura, vá em avançado e clique no link, você será redirecionado para a página de início e autenticação do front-end.

### Etapa 6

- Para verificar a etapa do CD:
    1. Entre no [repositorio do projeto](https://gitlab.com/unb-esw/gces-2024-1/trabalho-final-gces-giulia-alcantara)
    2. Na aba direita, vá em Deploy
    3. Ao entrar em deploy, vá em [Container Registry](https://gitlab.com/unb-esw/gces-2024-1/trabalho-final-gces-giulia-alcantara/container_registry)
    4. Entre no [arquivo disponível](https://gitlab.com/unb-esw/gces-2024-1/trabalho-final-gces-giulia-alcantara/container_registry/6783775)