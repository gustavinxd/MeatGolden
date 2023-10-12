# MeatGolden

<div> 
  <img align='center' style='width: 300px' src='assets/img/Logo.svg'/>
</div>

## Tabela de Conteúdo

- [O que é o Projeto?](#o-que-é-o-projeto?)
- [Objetivo](#objetivo)
- [Tecnologias](#tecnologias)
- [Requisitos Funcionais](#requisitos-funcionais)
- [Como clonar](#como-clonar)
- [Como inicializar o projeto](#como-inicializar-o-projeto)
- [Inicializar](#inicializar)
- [Equipe de desenvolvedores](#equipe-de-desenvolvedores)
- [Precificação](#precificação)

## O que é o Projeto?

MeatGolden é uma calculadora de churrasco que permite calcular o custo e a quantidade de alimentos e recursos necessários para fazer um churrasco sem gastar muito. Esta aplicação foi desenvolvida pela equipe PirateDevs como uma ferramenta útil para entusiastas de churrasco e churrasqueiros de todos os níveis.

## Objetivo

O objetivo principal do MeatGolden é ajudar os usuários a planejar e calcular os custos de um churrasco, incluindo a quantidade de carne, carvão, bebidas e outros itens necessários. Isso permite que os usuários evitem gastos excessivos e desperdícios, tornando o processo de churrasco mais eficiente e econômico.

## Tecnologias

<div>
  <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'/>  
  <img src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'/>  
  <img src='https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'/>  
  <img src='https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white'/>  
  <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'/>  
  <img src='https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white'/>  
  <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white'/>  
  <img src='https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E'/>   
</div>

## Requisitos Funcionais

1. Calcular e exibir o consumo individual e total de carnes e bebidas;
2. Calcular e exibir o valor do rateio por pessoa (R$) com o churrasco;
3. Calcular e exibir o valor total gasto (R$) com o churrasco estratificado por:
3.1. Carnes;
3.2. Bebidas;
3.3. Material de consumo e;
3.4. Locação do local para o evento.
4. Exibir em um mapa a localização do churrasco;
5. Oferecer no mínimo três opções de carnes. Ex: Bovina, suína e frango;
6. Oferecer no mínimo três tipos de carne.
Ex: Bovina: Contra filé, maminha e cupim;
Suína: Picanha, linguiça e paleta;
Frango: Coxa, coração e asa.
7. Oferecer no mínimo três opções de bebidas. Ex: Água, Refrigerante e Cerveja.
8. Exibir no mínimo uma receita de cada carne oferecida no churrasco. Tomar como referência
as carnes oferecidas no requisito funcional 6;
9. Indicar um local para a compra das carnes. Ex: Açougue ou supermercado;
10. Exibir informações de contato do responsável pelo evento;


## Como Clonar

Para clonar o repositório do MeatGolden, você pode seguir os passos abaixo:

1. No terminal, clone o projeto usando este comando:
```bash
git clone https://github.com/gustavinxd/MeatGolden.git
```
2. Depois de clonado, acesse o diretório do projeto usando o comando a seguir
```bash
cd MeatGolden
```

## Como inicializar o projeto

Antes de inicializar o projeto, deve se conferir se possui os seguintes pré requisitos para inicializa-lo:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode verificar se o Git está instalado executando o seguinte comando no terminal:

```bash
git --version
```

Se o Git não estiver instalado, você pode baixá-lo em https://git-scm.com/.

2. Node.js e npm (Node Package Manager): Você precisará do Node.js para executar o ambiente de desenvolvimento do React Native. Você pode baixar o Node.js em https://nodejs.org/. O npm geralmente é instalado automaticamente com o Node.js.

Verifique se o Node.js e o npm estão instalados corretamente usando os comandos:

```bash
node --version
npm --version
```

3. Expo CLI: Para criar e gerenciar projetos Expo, você deve instalar o Expo CLI globalmente. Você pode fazer isso executando o seguinte comando:
   
```bash
npm install -g expo-cli
```
Certifique-se de que o Expo CLI está instalado corretamente:
```bash
expo --version
```
4. Certifique-se que tenha instalado em seu dispositivo o app Expo Go, para executar o projeto diretamente em seu dispositivo. Também é possível executar o app diretamente de uma máquina potente contendo um emulador mobile. Você pode baixar o Android Studio e configurar um Emulador para testar em https://developer.android.com/studio.

### Inicializar

Após conferir os pré-requisitos e estar no diretório do projeto, você deve seguir os seguintes passos:

1. Baixe as dependências do projeto executando o seguinte comando:
   
```bash
npm install
```

2. Após instalar as dependências, execute o projeto com o comando:
   
```bash
npx expo start --tunnel
```
Ao executar o comando, o terminal retornará um QR Code para escanear em seu dispositivo móvel com o app Expo Go e com outras opções a serem escolhidas.

## Equipe de Desenvolvedores

- Gustavo Benjamin (github: gustavinxd)
- Edgard Domingues (github: vilaopvp1)
- Ana Alice (github: AnaByo)

## Precificação

Tempo de desenvolvimento: 30 horas
Equipe de 3 desenvolvedores
Loja da Play Store (publicação)
Frontend
Backend
Banco de dados com SQLite
Protótipo do aplicativo criado pela equipe
Primeiro, é necessário estimar o custo por hora dos desenvolvedores. Isso pode variar amplamente com base na localização e experiência da equipe. Para esta estimativa, usaremos um valor médio de R$ 100,00 por hora por desenvolvedor.

Cálculo do custo de desenvolvimento:
Custo por hora por desenvolvedor: R$ 100,00
Número de desenvolvedores: 3
Tempo de desenvolvimento: 30 horas

Custo de desenvolvimento = R$ 100,00/hora/desenvolvedor * 3 desenvolvedores * 30 horas = R$ 9.000,00

É importante considerar outros custos associados ao desenvolvimento de um aplicativo, como design gráfico, testes, publicação na Play Store, protótipo e possíveis revisões e melhorias futuras. Esses custos podem variar, mas para fins de estimativa, vamos adicionar mais R$ 3.000,00.

Portanto, o custo total estimado para o desenvolvimento do aplicativo de calculadora de churrasco, com as especificações fornecidas, seria aproximadamente R$ 12.000,00.
