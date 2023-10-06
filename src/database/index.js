import * as SQLite from 'expo-sqlite';

// const tarefas = SQLite.openDatabase('tarefas.db');
const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default'
  },
  () => {},
  (error) => {
    console.log(error);
  }
);

export default db;