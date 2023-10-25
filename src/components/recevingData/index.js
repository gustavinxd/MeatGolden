// churrascoHistory.js

import db from '../../database/index';

const fetchChurrascoHistory = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT DISTINCT churrasco_id FROM totais ORDER BY churrasco_id ASC;',
        [],
        (innerTx, churrascoResults) => {
          const churrascoData = [];

          const fetchChurrascoData = (churrascoIndex) => {
            if (churrascoIndex < churrascoResults.rows.length) {
              const churrascoId = churrascoResults.rows.item(churrascoIndex).churrasco_id;

              innerTx.executeSql(
                `SELECT * FROM carnes WHERE churrasco_id = ?
                UNION ALL 
                SELECT * FROM bebidas WHERE churrasco_id = ? 
                UNION ALL 
                SELECT * FROM acompanhamentos WHERE churrasco_id = ?`,
                [churrascoId, churrascoId, churrascoId],
                (finalTx, finalResults) => {
                  const items = [];
                  for (let i = 0; i < finalResults.rows.length; i++) {
                    items.push(finalResults.rows.item(i));
                  }

                  churrascoData.push({ churrascoId, items });

                  // Chama recursivamente para o próximo churrasco
                  fetchChurrascoData(churrascoIndex + 1);
                },
                (finalError) => {
                  console.log('Erro ao ler os itens:', finalError);
                  reject(finalError);
                }
              );
            } else {
              // Todos os churrascos foram recuperados
              resolve(churrascoData);
            }
          };

          // Inicia o processo de busca de churrascos a partir do índice 0
          fetchChurrascoData(0);
        },
        (innerError) => {
          console.log('Erro ao recuperar os IDs de churrasco:', innerError);
          reject(innerError);
        }
      );
    });
  });
};

export default fetchChurrascoHistory;
