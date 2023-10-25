import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Share } from 'react-native';
import colors from '../../colors';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import CustomDropdown from '../../components/CustomDropdown';
import DescriptionScreen from '../../components/DescriptionScreen';
import PreviewResults from '../../components/PreviewResults';
import Separator from '../../components/Separator';
import ListResults from '../../components/ListResults';
import { useThemeContext } from '../../contexts/theme';
import { getAllChurrascosFromDB } from '../../services/index';

export default function Churrascos() {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.dark;
  const themeColorText = theme === 'light' ? colors.primary : colors.light;
  const [churrascos, setChurrascos] = useState([]);

  useEffect(() => {
    const formatData = (data) => {
      return data.map((churrasco) => {
        const carnesFormatadas = churrasco.carnes.reduce((acc, carne) => {
          const obj = { ...acc };
          if (!obj[carne.tipo]) {
            obj[carne.tipo] = {};
          }
          obj[carne.tipo][carne.item] = carne.quantidade;
          return obj;
        }, {});

        const bebidasFormatadas = churrasco.bebidas.reduce((acc, bebida) => {
          const obj = { ...acc };
          obj[bebida.item] = bebida.quantidade;
          return obj;
        }, {});

        const acompanhamentosFormatados = churrasco.acompanhamentos.reduce(
          (acc, acompanhamento) => {
            const obj = { ...acc };
            obj[acompanhamento.item] = acompanhamento.quantidade;
            return obj;
          },
          {}
        );

        return {
          id: churrasco.churrascoId.toString(),
          churrascoId: churrasco.churrascoId,
          carnes: carnesFormatadas,
          bebidas: bebidasFormatadas,
          acompanhamentos: acompanhamentosFormatados,
          convidados: churrasco.convidados
            ? {
                criancas: churrasco.convidados.criancas,
                homens: churrasco.convidados.homens,
                mulheres: churrasco.convidados.mulheres,
                total: churrasco.convidados.total
              }
            : { criancas: 0, homens: 0, mulheres: 0, total: 0 }, // Adicionado uma verificação aqui
          totais: churrasco.totais
        };
      });
    };

    getAllChurrascosFromDB()
    .then((data) => {
        const formatado = formatData(data);
        console.log(JSON.stringify(formatado, null, 2));  // Modifique esta linha
        setChurrascos(formatado);
    })
    .catch((error) => {
        console.error('Erro ao recuperar churrascos:', error);
    });

  }, []);

  const compartilharLista = async (index) => {
    const bovina = Object.keys(churrascos[index].carne.bovina)
    const bovinaValue = Object.values(churrascos[index].carne.bovina)
    const suina = Object.keys(churrascos[index].carne.suina)
    const suinaValue = Object.values(churrascos[index].carne.suina)
    const frango = Object.keys(churrascos[index].carne.frango)
    const frangoValue = Object.values(churrascos[index].carne.frango)

    const bebidas = Object.keys(churrascos[index].bebidas)
    const bebidasValue = Object.values(churrascos[index].bebidas)
    const acompanhamentos = Object.keys(churrascos[index].acompanhamentos)
    const acompanhamentosValue = Object.values(churrascos[index].acompanhamentos)

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
      - R$: ${churrascos[index].totais.total.toFixed(2)}

      *Rateio:*
      - R$: ${churrascos[index].totais.rateio.toFixed(2)}

      *Local:*
      - R$: ${churrascos[index].totais.endereco}
      
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

  return (
    <View style={[styles.container, { backgroundColor: themeColor }]}>
      <ScrollView style={{ width: '100%', height: '100%' }}>
        <View style={styles.content}>
          <View style={{ width: '85%', flexDirection: 'column' }}>
            <DescriptionScreen
              colorText="red"
              title="Seu histórico"
              subTitle="Veja aqui seu histórico de churrascos"
            />
            <View style={styles.optionsSection}>
              {/* Dropdown da lista de resultados de compras */}

              {churrascos.map((item, index) => {
                return (
                  <CustomDropdown
                    key={item.id}
                    haveIcon={false}
                    topSection={
                      <PreviewResults
                        colorText="red"
                        data={item}
                        dia={item.totais.data}
                      />
                    }
                  >
                    <Separator />
                    {/* Render da lista de compras */}
                    <ListResults
                      colorText="red"
                      title="Carne"
                      results={item.carnes}
                    />
                    <ListResults
                      colorText="red"
                      title="Bebidas"
                      results={item.bebidas}
                    />
                    <ListResults
                      colorText="red"
                      title="Acompanhamentos"
                      results={item.acompanhamentos}
                    />

                    {/* Section de resultados */}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 25,
                        marginTop: 10
                      }}
                    >
                      <View style={{ flexDirection: 'column', gap: 5 }}>
                        <Text
                          style={[
                            styles.titleListResult,
                            { color: themeColorText }
                          ]}
                        >
                          Total:
                        </Text>
                        <Text
                          style={[
                            styles.dataListResult,
                            { color: themeColorText }
                          ]}
                        >
                          R$ {item.totais.total.toFixed(2)}
                        </Text>
                      </View>
                      <View style={{ flexDirection: 'column', gap: 5 }}>
                        <Text
                          style={[
                            styles.titleListResult,
                            { color: themeColorText }
                          ]}
                        >
                          Rateio:
                        </Text>
                        <Text
                          style={[
                            styles.dataListResult,
                            { color: themeColorText }
                          ]}
                        >
                          R$ {item.totais.rateio.toFixed(2)}
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
                        <Text
                          style={[
                            styles.titleListResult,
                            { color: themeColorText }
                          ]}
                        >
                          Local:
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            gap: 10,
                            alignItems: 'center',
                            width: 150
                          }}
                        >
                          <Text
                            style={[
                              styles.dataListResult,
                              { color: themeColorText }
                            ]}
                          >
                            {item.totais.endereco}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'flex-end',
                          gap: 15
                        }}
                      >
                        <ButtonIcon icon="share-variant-outline" onPress={compartilharLista(index)} />
                      </View>
                    </View>
                  </CustomDropdown>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 5
  },
  dataListResult: {
    fontFamily: 'InriaSans_400Regular',
    fontSize: 16,
    flexWrap: 'wrap'
  }
});
