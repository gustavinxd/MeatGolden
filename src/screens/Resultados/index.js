import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../colors';
import DescriptionScreen from '../../components/DescriptionScreen';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { useProgressContext } from '../../contexts/progress';
import CustomDropdown from '../../components/CustomDropdown';
import Separator from '../../components/Separator/index';
import ListResults from '../../components/ListResults';
import PreviewResults from '../../components/PrevviewResults';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import MapModal from '../../components/Mapa/index';
import { useValueContext } from '../../contexts/values';
import { initDB, saveItemsToDB, readItemsFromDB } from '../../services';

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

  const [totals, setTotals] = useState({
    total: 0,
    rateio: 0,
    detalhes: {}
  });

  const saveData = async () => {
    console.log('Botão Salvar foi clicado');
    try {
      if (results && totals) {
        await saveItemsToDB(churrascoId, results, totals);
      } else {
        console.log('Results ou Totals não estão definidos.');
      }
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }

    const fetchItems = async () => {
      try {
        const items = await readItemsFromDB(churrascoId);
        console.log('Items:', items);
        if (items && items.length > 0) {
          // Verificar se items está definido e contém dados
          console.log('Itens do DB:', items);
        } else {
          console.log(
            'Nenhum item encontrado para o churrascoId:',
            churrascoId
          );
        }
      } catch (error) {
        console.log('Erro ao buscar iten:', error);
      }
    };
    fetchItems();
  };

  const handleHomeClick = () => {
    resetValues(); // Resetar os valores quando o botão Home é clicado
    navigation.navigate('Menu');
  };

  useEffect(() => {
    updateProgress(1);
    initDB();
    console.log(results);

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
      Picanha: 80,
      'Contra-filé': 50,
      Cupim: 60,
      Linguiça: 20,
      Paleta: 40,
      Costela: 50,
      Coxa: 15,
      Asa: 12,
      Coração: 20,
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
          total += precos[item] * (calculatedResults.carne[tipo][item] / 1000); // Multiplicando a quantidade pelo preço
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

      const rateio = total / value.convidados.total;

      setTotals({
        total,
        rateio,
        detalhes: calculatedResults // Aqui os resultados são usados para ver as quantidades, substitua conforme necessário
      });
    };

    calcularTotais();

    return () => {
      updateProgress(0.75);
    };
  }, []);

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
                selectTitle="Bovina"
                topSection={<PreviewResults />}
                icon={
                  <MaterialCommunityIcons
                    name="face-man-outline"
                    size={30}
                    color={colors.light}
                  />
                }
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
