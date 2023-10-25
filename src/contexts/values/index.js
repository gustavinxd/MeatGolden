// contexts/values.js

import { createContext, useContext, useState } from 'react';

const ValueContext = createContext();

export function ValueProvider({ children }) {
  const initialValue = {
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
      cerveja: false,
      refrigerante: false,
      suco: false,
      agua: false
    },
    adicionais: {
      paofrances: false,
      farofa: false,
      arroz: false,
      gelo: false,
      carvao: false,
      guardanapo: false
    }
  };

  const [value, setValue] = useState(initialValue);

  const resetValues = () => setValue(initialValue);

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

  const updateTotal = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      convidados: {
        ...prevState.convidados,
        total: newValue
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

  // FUNCAO PARA SALVAR BEBIDAS SELECIONADAS
  const updateCerveja = (newValue) => {
    setValue((prevState) => ({
      ...prevState,
      bebidas: {
        ...prevState.bebidas,
        cerveja: newValue
      }
    }));
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

  // FUNCAO PARA SALVAR EXTRAS SELECIONADOS

  const updateAdicionais = (key, newValue) => {
    setValue((prevState) => ({
      ...prevState,
      adicionais: {
        ...prevState.adicionais,
        [key]: newValue
      }
    }));
  };

  return (
    <ValueContext.Provider
      value={{
        value,
        resetValues, 
        updateHomens,
        updateMulheres,
        updateCriancas,
        updateBovina,
        updateSuina,
        updateFrango,
        updateCerveja,
        updateRefrigerante,
        updateSuco,
        updateAgua,
        updateTotal,
        updateAdicionais
      }}
    >
      {children}
    </ValueContext.Provider>
  );
}

export function useValueContext() {
  return useContext(ValueContext);
}
