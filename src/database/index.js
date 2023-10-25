import * as SQLite from 'expo-sqlite';

// const tarefas = SQLite.openDatabase('tarefas.db');
const db = SQLite.openDatabase('MainDB');


export default db;