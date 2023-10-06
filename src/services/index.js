// import SQLite from 'react-native-sqlite-storage';
import db from '../database';


// Inicializar o banco de dados
const initDB = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Items (id INTEGER PRIMARY KEY AUTOINCREMENT, categoria TEXT, tipo TEXT, quantidade REAL, valor REAL, rateio REAL)',
      []
    );
  });
};

// Salvar dados no banco de dados
const saveItemsToDB = (itemsToSave) => {
  // Mudando 'results' para 'itemsToSave'
  db.transaction((tx) => {
    Object.entries(itemsToSave).forEach(([categoria, items]) => {
      // Mudando 'results' para 'itemsToSave'
      Object.entries(items).forEach(([tipo, quantidade]) => {
        tx.executeSql(
          'INSERT INTO Items (categoria, tipo, quantidade, valor, rateio) VALUES (?, ?, ?, ?, ?)',
          [categoria, tipo, quantidade], // Você precisa adicionar os valores reais de valor e rateio aqui
          (transaction, resultSet) => {
            // Mudando 'results' para 'resultSet'
            console.log('Results', resultSet);
          },
          (transaction, error) => {
            console.log('Error', error);
          }
        );
      });
    });
  });
};

export { initDB, saveItemsToDB };
