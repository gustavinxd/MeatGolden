import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Share } from 'react-native';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { useProgressContext } from '../../contexts/progress';
import CustomDropdown from '../../components/CustomDropdown';
import Separator from '../../components/Separator/index';
import ListResults from '../../components/ListResults';
import PreviewResults from '../../components/PreviewResults';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import MapModal from '../../components/Mapa/index';
import { useValueContext } from '../../contexts/values';
import {
  saveItemsToDB,
  readItemsFromDB,
  getLastChurrascoId,
  getPricesFromDB
} from '../../services';

export default function Resultados({ navigation }) {
  const [churrascoId, setChurrascoId] = useState(1);
  const { updateProgress } = useProgressContext();
  const { resetValues } = useValueContext();
  const [isMapVisible, setMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('Selecione um local');
  const { value } = useValueContext();
  const [results, setResults] = useState({
    carne: {},
    bebidas: {},
    acompanhamentos: {}
  });
  const currentDate = new Date(); // Traz a data de hoje
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`; // seta a forma da data

  const [totals, setTotals] = useState({
    total: 0,
    rateio: 0,
    detalhes: {}
  });

  const saveData = async () => {
    console.log('Botão Salvar foi clicado');

    try {
      console.log('Verificando results e totals');
      console.log('Results:', results);
      console.log('Totals:', totals);
      const newTotals = {
        ...totals,
        endereco: selectedAddress
      };

      if (!results || !totals) {
        throw new Error('Results ou Totals não estão definidos.');
      }

      console.log('Chamando saveItemsToDB');
      await saveItemsToDB(churrascoId, results, newTotals, value.convidados);
      console.log('Dados salvos com sucesso.');

      console.log('Chamando readItemsFromDB');
      const items = await readItemsFromDB(churrascoId);
      console.log('Items:', items);

      if (!items || items.length === 0) {
        throw new Error(
          `Nenhum item encontrado para o churrascoId: ${churrascoId}`
        );
      }

      console.log('Itens do DB:', items);
    } catch (error) {
      console.error('Erro ao salvar ou recuperar dados:', error);
    }
  };

  const handleHomeClick = () => {
    resetValues(); // Resetar os valores quando o botão Home é clicado
    navigation.navigate('Menu');
    updateProgress(0);
  };

  const compartilharLista = async () => {
    const bovina = Object.keys(results.carne.bovina)
    const bovinaValue = Object.values(results.carne.bovina)
    const suina = Object.keys(results.carne.suina)
    const suinaValue = Object.values(results.carne.suina)
    const frango = Object.keys(results.carne.frango)
    const frangoValue = Object.values(results.carne.frango)

    const bebidas = Object.keys(results.bebidas)
    const bebidasValue = Object.values(results.bebidas)
    const acompanhamentos = Object.keys(results.acompanhamentos)
    const acompanhamentosValue = Object.values(results.acompanhamentos)

    try {
      // ${carnes.map((item, index) => {
      //   return `${item}   ${carnesValue[index] > 999 ? `${(carnesValue[index] / 1000).toFixed(2)} kg` : `${carnesValue[index].toFixed(2)} g`}`
      // } )} \n
      const preMensagem = `
      🔥 Lista de compras do churrasco! 🔥

      Eis aqui o resultado de sua lista de compras:

      *Carnes:*

      ${bovina.map((item, index) => {
        return `- ${item}   ${bovinaValue[index] > 999 ? `${(bovinaValue[index] / 1000).toFixed(2)} kg` : `${bovinaValue[index].toFixed(2)} g`}\n`
      } )}
      ${suina.map((item, index) => {
        return `- ${item}   ${suinaValue[index] > 999 ? `${(suinaValue[index] / 1000).toFixed(2)} kg` : `${suinaValue[index].toFixed(2)} g`}\n`
      } )}
      ${frango.map((item, index) => {
        return `- ${item}   ${frangoValue[index] > 999 ? `${(frangoValue[index] / 1000).toFixed(2)} kg` : `${frangoValue[index].toFixed(2)} g`}\n`
      } )}

      *Bebidas:*

      ${bebidas.map((item, index) => {
        return `- ${item}   ${item[index] === 'cerveja' ? `${bebidasValue[index]} Latas` : `${bebidasValue[index]} Garrafas`}\n`
      } )} 

      *Acompanhamentos:*

      ${acompanhamentos.map((item, index) => {
        return `- ${item}   ${acompanhamentosValue[index]} Pcts\n`
      } )}

      *Total:*
      - R$: ${totals.total.toFixed(2)}

      *Rateio:*
      - R$: ${totals.total.toFixed(2)}
      
      Estamos ansiosos para vê-lo lá! Baixe o **MeatGolden** agora e junte-se a nós para uma festa de sabores irresistíveis.
      
      Até logo!
      `;

      // Permite o compartilhamento do conteúdo
      await Share.share({
        message: preMensagem
      });
    } catch (error) {
      console.error('Erro ao compartilhar convite: ', error);
    }
  };
  
  const [pricesFromDB, setPricesFromDB] = useState({});

  useEffect(() => {
    updateProgress(1);
    

    const intervalId = setInterval(() => {
      getPricesFromDB().then((prices) => setPricesFromDB(prices));
    }, 1000); // A cada 10 segundos

    const fetchLastChurrascoId = async () => {
      try {
        const lastId = await getLastChurrascoId();
        setChurrascoId(lastId + 1); // Definir o próximo churrascoId
      } catch (error) {
        console.log('Erro ao obter o último churrascoId:', error);
      }
    };

    fetchLastChurrascoId();

    const calcularCarne = () => {
      const totalCarne =
        value.convidados.homens * 600 +
        value.convidados.mulheres * 400 +
        value.convidados.criancas * 250;

      // Obter todos os tipos de carne selecionados, independente da categoria
      const todosTiposDeCarne = [
        ...value.assados.bovina,
        ...value.assados.suina,
        ...value.assados.frango
      ];

      const totalTipos = todosTiposDeCarne.length;
      const carnePorTipo = totalCarne / totalTipos;

      const distribuirCarnePorTipo = (tipos) => {
        const resultado = {};
        tipos.forEach((tipo) => {
          resultado[tipo] = carnePorTipo;
        });
        return resultado;
      };

      return {
        bovina:
          value.assados.bovina.length > 0
            ? distribuirCarnePorTipo(value.assados.bovina)
            : {},
        suina:
          value.assados.suina.length > 0
            ? distribuirCarnePorTipo(value.assados.suina)
            : {},
        frango:
          value.assados.frango.length > 0
            ? distribuirCarnePorTipo(value.assados.frango)
            : {}
      };
    };

    const calcularBebidas = () => {
      const totalAdultos = value.convidados.homens + value.convidados.mulheres; // Removendo crianças da contagem total para cerveja

      const totalCerveja = totalAdultos * 3; // 4 latas por adulto
      const totalOutrasBebidas =
        (value.convidados.homens +
          value.convidados.mulheres +
          value.convidados.criancas) *
        2; // 4 unidades para todos, incluindo crianças

      return {
        cerveja: value.bebidas.cerveja ? totalCerveja : 0,
        refrigerante: value.bebidas.refrigerante ? totalOutrasBebidas : 0,
        suco: value.bebidas.suco ? totalOutrasBebidas : 0,
        agua: value.bebidas.agua ? totalOutrasBebidas : 0
      };
    };

    const calcularAcompanhamentos = () => {
      const totalPessoas = value.convidados.total;
      let vinagrete;

      if (totalPessoas <= 5) {
        vinagrete = value.adicionais.vinagrete ? 3 : 0; // Se menos ou igual a 5 pessoas, então 3 pacotes de vinagrete
      } else {
        vinagrete = value.adicionais.vinagrete
          ? Math.ceil(totalPessoas / 10) * 5
          : 0; // Se mais de 5 pessoas, então 5 pacotes a cada 10 pessoas
      }

      const carvao = value.adicionais.carvao ? Math.ceil(totalPessoas / 10) : 0; // 1 pacote de carvão para cada 10 pessoas
      const acompanhamentos = Math.ceil(totalPessoas / 5) * 2; // Outros acompanhamentos (ajuste conforme necessário)
      const gelo = Math.ceil(totalPessoas / 10) * 2;

      return {
        paodealho: value.adicionais.paodealho ? acompanhamentos : 0,
        vinagrete,
        gelo: value.adicionais.gelo ? gelo : 0,
        queijocoalho: value.adicionais.queijocoalho ? acompanhamentos : 0,
        carvao,
        guardanapo: value.adicionais.guardanapo ? acompanhamentos : 0
      };
    };

    setResults({
      carne: calcularCarne(),
      bebidas: calcularBebidas(),
      acompanhamentos: calcularAcompanhamentos()
    });

    const precos = {
      cerveja: 5,
      refrigerante: 2,
      suco: 3,
      agua: 1,
      paodealho: 10,
      vinagrete: 5,
      queijocoalho: 15,
      gelo: 5,
      carvao: 10,
      guardanapo: 2
    };

    const totalAdultos = value.convidados.homens + value.convidados.mulheres;

    // Calcular o preço total baseado nos resultados dos métodos calcularCarne, calcularBebidas e calcularAcompanhamentos
    const calcularTotais = () => {
      let total = 0;

      const calculatedResults = {
        carne: calcularCarne(),
        bebidas: calcularBebidas(),
        acompanhamentos: calcularAcompanhamentos()
      };

      // Calcular total para carne
      ['bovina', 'suina', 'frango'].forEach((tipo) => {
        Object.keys(calculatedResults.carne[tipo]).forEach((item) => {
          const precoItem = pricesFromDB[item] || precos[item] || 0; // Use os preços do banco de dados, se disponíveis
          total += precoItem * (calculatedResults.carne[tipo][item] / 1000); // Multiplicando a quantidade pelo preço
        });
      });

      // Calcular total para bebidas
      Object.keys(calculatedResults.bebidas).forEach((bebida) => {
        total += precos[bebida] * calculatedResults.bebidas[bebida]; // Multiplicando a quantidade pelo preço
      });

      // Calcular total para acompanhamentos
      Object.keys(calculatedResults.acompanhamentos).forEach((adicional) => {
        total +=
          precos[adicional] * calculatedResults.acompanhamentos[adicional]; // Multiplicando a quantidade pelo preço
      });

      const rateio = total / totalAdultos;

      setTotals({
        total,
        rateio
      });
    };

    calcularTotais();

    return () => {
      updateProgress(0.75);
      clearInterval(intervalId);
    };
  }, [pricesFromDB, selectedAddress]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.content}>
          <View style={{ width: '85%', flexDirection: 'column' }}>
            <DescriptionScreen
              title="É hora do churras!"
              subTitle="Eis aqui o resultado de sua lista de compras:"
            />
            <View style={styles.optionsSection}>
              {/* Dropdown da lista de resultados de compras */}
              <CustomDropdown
                startOpen
                haveIcon={false}
                colorSelection="light"
                topSection={<PreviewResults dia={formattedDate} data={value} />}
              >
                <Separator color="light" />
                {/* Render da lista de compras */}
                <ListResults title="Carne" results={results.carne} />
                <ListResults title="Bebidas" results={results.bebidas} />
                <ListResults
                  title="Acompanhamentos"
                  results={results.acompanhamentos}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 25,
                    marginTop: 10
                  }}
                >
                  <View style={{ flexDirection: 'column', gap: 5 }}>
                    <Text style={styles.titleListResult}>Total:</Text>
                    <Text style={styles.dataListResult}>
                      R$ {totals.total.toFixed(2)}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'column', gap: 5 }}>
                    <Text style={styles.titleListResult}>Rateio:</Text>
                    <Text style={styles.dataListResult}>
                      R$ {totals.rateio.toFixed(2)}
                    </Text>
                  </View>
                </View>

                {/* Section de salvar localização, salvar e compartilhar o churrasco */}
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    marginTop: 10,
                    justifyContent: 'space-between'
                  }}
                >
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.titleListResult}>Local:</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 10,
                        alignItems: 'center',
                        width: 150
                      }}
                    >
                      <Text style={styles.dataListResult}>
                        {selectedAddress}
                      </Text>
                      <View style={{ alignSelf: 'flex-end' }}>
                        <ButtonIcon
                          onPress={() => {
                            setMapVisible((prevState) => !prevState);
                          }}
                          icon="map-marker-plus-outline"
                          colorButton="light"
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      gap: 15
                    }}
                  >
                    <ButtonIcon
                      onPress={saveData}
                      icon="content-save-outline"
                      colorButton="light"
                    />
                    <ButtonIcon
                      onPress={compartilharLista}
                      icon="share-variant-outline"
                      colorButton="light"
                    />
                  </View>
                </View>
              </CustomDropdown>
            </View>
            <View style={styles.bottomSection}>
              <SubmitButton
                btnTitle="Home"
                onPress={handleHomeClick} // Atualizado para chamar handleHomeClick
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <MapModal
        visible={isMapVisible}
        onClose={() => setMapVisible(false)}
        onSaveLocation={(address) => {
          setSelectedAddress(address);
          setMapVisible((prevState) => !prevState);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50
  },
  optionsSection: {
    flexDirection: 'column',
    gap: 15,
    marginBottom: 20,
    marginTop: -10
  },
  bottomSection: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  },
  titleListResult: {
    fontFamily: 'InriaSans_700Bold',
    fontSize: 20,
    color: colors.light,
    marginBottom: 5
  },
  dataListResult: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    color: colors.light,
    flexWrap: 'wrap'
  }
});
