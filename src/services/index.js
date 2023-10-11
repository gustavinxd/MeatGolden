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
                'INSERT INTO carnes (churrascoId, tipo, item, quantidade) VALUES (?, ?, ?, ?)',
                [churrascoId, tipo, item, results.carne[tipo][item]]
              );
              console.log('salvei carne aqui');
            }
          });
        });

        // Salvar bebidas
        Object.keys(results.bebidas).forEach((tipo) => {
          // Aqui assumimos que `tipo` é uma chave em `results.bebidas`
          if (results.bebidas[tipo] > 0) {
            tx.executeSql(
              'INSERT INTO bebidas (churrascoId, tipo, item, quantidade) VALUES (?, ?, ?, ?)', // Adicionado `tipo`
              [churrascoId, tipo, tipo, results.bebidas[tipo]] // Adicionado `tipo` aos valores
            );
            console.log('salvei bebida aqui');
          }
        });

        // Salvar acompanhamentos
        Object.keys(results.acompanhamentos).forEach((tipo) => {
          // Aqui assumimos que `tipo` é uma chave em `results.acompanhamentos`
          if (results.acompanhamentos[tipo] > 0) {
            tx.executeSql(
              'INSERT INTO acompanhamentos (churrascoId, tipo, item, quantidade) VALUES (?, ?, ?, ?)', // Adicionado `tipo`
              [churrascoId, tipo, tipo, results.acompanhamentos[tipo]] // Adicionado `tipo` aos valores
            );
            console.log('salvei acompanhamento aqui');
          }
        });

        // Salvar totais
        tx.executeSql(
          'INSERT INTO totais (churrascoId, total, rateio) VALUES (?, ?, ?)',
          [churrascoId, totals.total, totals.rateio],
          (tx, resultSet) => {
            resolve(resultSet.insertId);
            console.log('Inseri o total meu fih');
          },
          (tx, error) => {
            console.log('Erro ao inserir totais:', error);
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

export {};
