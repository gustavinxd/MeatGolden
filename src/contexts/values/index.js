// contexts/values.js

import { createContext, useContext, useState } from 'react';

const ValueContext = createContext();

export function ValueProvider({ children }) {
  const [value, setValue] = useState({
    convidados: {
      homens: 0,
      mulheres: 0,
      criancas: 0,
      total: 0
    },
    assados: {
      bovina: [],
      suina: [],
      frango: []
    },
    bebidas: {
      cerveja: false, // Certifique-se de que o valor inicial seja false
      refrigerante: false,
      suco: false,
      agua: false
    }
  });

  // Funções de atualização para os valores dos convidados
  const updateHomens = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      convidados: {
        ...prevState.convidados,
        homens: newValue
      }
    }));
  };

  const updateMulheres = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      convidados: {
        ...prevState.convidados,
        mulheres: newValue
      }
    }));
  };

  const updateCriancas = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      convidados: {
        ...prevState.convidados,
        criancas: newValue
      }
    }));
  };

  // Funções de atualização para as opções de assados selecionadas
  const updateBovina = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      assados: {
        ...prevState.assados,
        bovina: newValue
      }
    }));
  };

  const updateSuina = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      assados: {
        ...prevState.assados,
        suina: newValue
      }
    }));
  };

  const updateFrango = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      assados: {
        ...prevState.assados,
        frango: newValue
      }
    }));
  };

  const updateCerveja = (newValue) => {
    setValue((prevState) => {
      const updatedState = {
        ...prevState,
        bebidas: {
          ...prevState.bebidas,
          cerveja: newValue
        }
      };
      console.log('Updated Cerveja:', updatedState.bebidas.cerveja);
      return updatedState;
    });
  };
  
  const updateRefrigerante = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      bebidas: {
        ...prevState.bebidas,
        refrigerante: newValue
      }
    }));
  };

  const updateSuco = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      bebidas: {
        ...prevState.bebidas,
        suco: newValue
      }
    }));
  };

  const updateAgua = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      bebidas: {
        ...prevState.bebidas,
        agua: newValue
      }
    }));
  };

  return (
    <ValueContext.Provider
      value={{
        value,
        updateHomens,
        updateMulheres,
        updateCriancas,
        updateBovina,
        updateSuina,
        updateFrango,
        updateCerveja,
        updateRefrigerante,
        updateSuco,
        updateAgua
      }}
    >
      {children}
    </ValueContext.Provider>
  );
}

export function useValueContext() {
  return useContext(ValueContext);
}
