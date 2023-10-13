  // import SQLite from 'react-native-sqlite-storage';

  import db from '../database';

  // Inicializar o banco de dados
  export const initDB = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS churrascos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL);'
          );
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS carnes (id INTEGER PRIMARY KEY AUTOINCREMENT, churrascoId INTEGER NOT NULL, tipo TEXT NOT NULL, item TEXT NOT NULL, quantidade REAL NOT NULL);'
          );
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS bebidas (id INTEGER PRIMARY KEY AUTOINCREMENT, churrascoId INTEGER NOT NULL, tipo TEXT NOT NULL, item TEXT NOT NULL, quantidade REAL NOT NULL);'
          );
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS acompanhamentos (id INTEGER PRIMARY KEY AUTOINCREMENT, churrascoId INTEGER NOT NULL, tipo TEXT NOT NULL, item TEXT NOT NULL, quantidade REAL NOT NULL);'
          );
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS totais (id INTEGER PRIMARY KEY AUTOINCREMENT, churrascoId INTEGER NOT NULL, total REAL NOT NULL, rateio REAL NOT NULL);'
          );
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS precos (id INTEGER PRIMARY KEY AUTOINCREMENT, item TEXT NOT NULL, preco REAL NOT NULL);'
          );
          const precoData = [
            { item: 'Picanha', preco: 80 },
            { item: 'Contra-filé', preco: 50 },
            { item: 'Cupim', preco: 60 },
            { item: 'Linguiça', preco: 20 },
            { item: 'Paleta', preco: 40 },
            { item: 'Costela', preco: 50 },
            { item: 'Coxa', preco: 15 },
            { item: 'Asa', preco: 12 },
            { item: 'Coração', preco: 20 }
          ];
          precoData.forEach((data) => {
            tx.executeSql(
              'INSERT OR REPLACE INTO precos (id, item, preco) VALUES ((SELECT id FROM precos WHERE item = ?), ?, ?)',
              [data.item, data.item, data.preco]
            );
          });
        },
        (error) => {
          console.log('Erro ao criar tabelas:', error);
          reject(error);
        },
        () => {
          console.log('Tabelas criadas/atualizadas com sucesso');
          resolve();
        }
      );
    });
  };

  // Salvar dados no banco de dados
  export const saveItemsToDB = (churrascoId, results, totals) => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          // Salvar carnes
          Object.keys(results.carne).forEach((tipo) => {
            Object.keys(results.carne[tipo]).forEach((item) => {
              if (results.carne[tipo][item] > 0) {
                tx.executeSql(
                  'INSERT OR REPLACE INTO carnes (id, churrascoId, tipo, item, quantidade) VALUES ((SELECT id FROM carnes WHERE churrascoId = ? AND tipo = ? AND item = ?), ?, ?, ?, ?)',
                  [
                    churrascoId,
                    tipo,
                    item,
                    churrascoId,
                    tipo,
                    item,
                    results.carne[tipo][item]
                  ]
                );
                console.log('salvei/atualizei carne aqui');
              }
            });
          });

          // Salvar bebidas
          Object.keys(results.bebidas).forEach((tipo) => {
            if (results.bebidas[tipo] > 0) {
              tx.executeSql(
                'INSERT OR REPLACE INTO bebidas (id, churrascoId, tipo, item, quantidade) VALUES ((SELECT id FROM bebidas WHERE churrascoId = ? AND tipo = ?), ?, ?, ?, ?)',
                [
                  churrascoId,
                  tipo,
                  churrascoId,
                  tipo,
                  tipo,
                  results.bebidas[tipo]
                ]
              );
              console.log('salvei/atualizei bebida aqui');
            }
          });

          // Salvar acompanhamentos
          Object.keys(results.acompanhamentos).forEach((tipo) => {
            if (results.acompanhamentos[tipo] > 0) {
              tx.executeSql(
                'INSERT OR REPLACE INTO acompanhamentos (id, churrascoId, tipo, item, quantidade) VALUES ((SELECT id FROM acompanhamentos WHERE churrascoId = ? AND tipo = ?), ?, ?, ?, ?)',
                [
                  churrascoId,
                  tipo,
                  churrascoId,
                  tipo,
                  tipo,
                  results.acompanhamentos[tipo]
                ]
              );
              console.log('salvei/atualizei acompanhamento aqui');
            }
          });

          // Salvar totais
          tx.executeSql(
            'INSERT OR REPLACE INTO totais (id, churrascoId, total, rateio) VALUES ((SELECT id FROM totais WHERE churrascoId = ?), ?, ?, ?)',
            [churrascoId, churrascoId, totals.total, totals.rateio],
            (tx, resultSet) => {
              resolve(resultSet.insertId);
              console.log('Inseri/atualizei o total aqui');
            },
            (tx, error) => {
              console.log('Erro ao inserir/atualizar totais:', error);
              reject(error);
            }
          );
        },
        (error) => {
          console.log('Erro na transação:', error);
          reject(error);
        }
      );
    });
  };

  // Ler dados do banco de dados
  export const readItemsFromDB = (churrascoId) => {
    return new Promise((resolve, reject) => {
      const items = {
        carnes: [],
        bebidas: [],
        acompanhamentos: [],
        totais: []
      };

      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM carnes WHERE churrascoId = ?;',
          [churrascoId],
          (tx, results) => {
            for (let i = 0; i < results.rows.length; i++) {
              items.carnes.push(results.rows.item(i));
            }

            tx.executeSql(
              'SELECT * FROM bebidas WHERE churrascoId = ?;',
              [churrascoId],
              (tx, results) => {
                for (let i = 0; i < results.rows.length; i++) {
                  items.bebidas.push(results.rows.item(i));
                }

                tx.executeSql(
                  'SELECT * FROM acompanhamentos WHERE churrascoId = ?;',
                  [churrascoId],
                  (tx, results) => {
                    for (let i = 0; i < results.rows.length; i++) {
                      items.acompanhamentos.push(results.rows.item(i));
                    }

                    tx.executeSql(
                      'SELECT * FROM totais WHERE churrascoId = ?;',
                      [churrascoId],
                      (tx, results) => {
                        for (let i = 0; i < results.rows.length; i++) {
                          items.totais.push(results.rows.item(i));
                        }
                        resolve(items);
                      },
                      (error) => {
                        console.log('Erro ao ler totais:', error);
                        reject(error);
                      }
                    );
                  },
                  (error) => {
                    console.log('Erro ao ler acompanhamentos:', error);
                    reject(error);
                  }
                );
              },
              (error) => {
                console.log('Erro ao ler bebidas:', error);
                reject(error);
              }
            );
          },
          (error) => {
            console.log('Erro ao ler carnes:', error);
            reject(error);
          }
        );
      });
    });
  };

  export const getLastChurrascoId = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT MAX(churrascoId) as lastId FROM totais;',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              resolve(results.rows.item(0).lastId);
            } else {
              resolve(0);
            }
          },
          (error) => {
            console.log('Erro ao obter o último churrascoId:', error);
            reject(error);
          }
        );
      });
    });
  };


  export const getPricesFromDB = () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM precos;',
            [],
            (tx, results) => {
              const prices = {
                bovina: [],
                suina: [],
                frango: [],
              };
              for (let i = 0; i < results.rows.length; i++) {
                const row = results.rows.item(i);
                const grupo = getGrupoFromItem(row.item);
                prices[grupo].push({ nome: row.item, preco: row.preco });
              }
              resolve(prices);
            },
            (error) => {
              console.log('Erro ao ler preços da tabela de preços:', error);
              reject(error);
            }
          );
        }
      );
    });
  };    

  const getGrupoFromItem = (item) => {
    const bovinoItems = ['Picanha', 'Contra-filé', 'Cupim'];
    const suinaItems = ['Linguiça', 'Paleta', 'Costela'];
    const frangoItems = ['Coxa', 'Asa', 'Coração'];

    if (bovinoItems.includes(item)) {
      return 'bovina';
    }
    if (suinaItems.includes(item)) {
      return 'suina';
    }
    if (frangoItems.includes(item)) {
      return 'frango';
    }

    return 'outro';
  };




  export {};
