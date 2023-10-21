import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import colors from '../../colors';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import CustomDropdown from '../../components/CustomDropdown';
import DescriptionScreen from '../../components/DescriptionScreen';
import PreviewResults from '../../components/PreviewResults';
import Separator from '../../components/Separator';
import ListResults from '../../components/ListResults';
import { useThemeContext } from '../../contexts/theme';
import { getAllChurrascos, readItemsFromDB } from '../../services/index';
import DATA from '../../services/teste';

export default function Churrascos() {
  const { theme } = useThemeContext();
  const themeColor = theme === 'light' ? colors.light : colors.dark;
  const themeColorText = theme === 'light' ? colors.primary : colors.light;
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getAllChurrascos()
  //     .then((churrascos) => {
  //       console.log('Churrascos obtidos:', churrascos); // Adicione este log
  //       setData(churrascos);
  //     })
  //     .catch((error) => {
  //       console.error('Erro ao obter churrascos:', error);
  //     });
  // }, []);

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

              {DATA.map((item) => {
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
                        <ButtonIcon icon="share-variant-outline" />
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
