import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <ScreenComponent>
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Bem Vindo(a)!
        </Text>
        <Text style={styles.text}>
          Selecione um exercício para reduzir a ansiedade e manter a calma.
        </Text>
      </View>

      <View style={styles.boxCollection}>
        <View style={styles.boxConente}>
          <ButtonIcon icon='breath_1' title="Respiração consciente" onPress={() => navigate('breathConscious')} />
          <ButtonIcon icon='breath_2' title="Respiração 4-7-8" onPress={() => navigate('breath478')} />
          <ButtonIcon icon='breath_3' title="Respiração abdominal" onPress={() => navigate('breathAbdominal')} />
        </View>
        <View style={styles.boxConente}>
          <ButtonIcon icon='breath_4' title="Respiração quadrada" onPress={() => navigate('breathSquare')} />
          <ButtonIcon icon='breath_5' title="Respiração profunda completa" onPress={() => navigate('breathDeep')} />
          <ButtonIcon icon='breath_6' title="Respiração alternada de narinas" onPress={() => navigate('breathAlternate')} />
        </View>
      </View>

      <ModalInfo height={400}>
        <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
          <Text style={{ color: '#FFF', lineHeight: 26, textAlign: 'justify' }}>
            Lembre-se de que a prática regular dessas técnicas pode ajudar a melhorar sua capacidade de gerenciar a ansiedade.
            Experimente diferentes técnicas para encontrar a que funciona melhor para você. {''}
            <Text style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 16 }}>
              Além disso, se você tiver ansiedade persistente ou grave, é aconselhável procurar a orientação de um
              profissional de saúde mental para obter suporte adequado. ♥️
            </Text>
          </Text>
        </View>
      </ModalInfo>

    </ScreenComponent>
  );
}