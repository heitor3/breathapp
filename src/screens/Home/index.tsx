import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeControl } from '../../stores/themeSetColor';
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'

export function Home() {
  const { navigate } = useNavigation();
  const { theme, toggleTheme } = useThemeControl();

  const handleToggleTheme = async () => {
    try {
      const currentTheme = await AsyncStorage.getItem('theme');
      toggleTheme(currentTheme === 'dark' ? 'light' : 'dark');
      await AsyncStorage.setItem('theme', currentTheme === 'dark' ? 'light' : 'dark');
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  return (
    <ScreenComponent>
      <View style={{ width: '100%', marginTop: -60, marginBottom: 50, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 30 }}>
        <TouchableOpacity onPress={handleToggleTheme} style={{ borderRadius: 50, padding: 2 }}>
          {theme.bar === "dark" ? (<Image source={Sun} style={{ width: 26, height: 26 }} />) : (<Image source={Moon} style={{ width: 26, height: 26 }} />)}
        </TouchableOpacity>
      </View>
      <View style={[styles.header, { backgroundColor: theme.colors.primaryColor }]}>
        <Text style={[styles.welcome, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textBold,
        }]}>
          Bem Vindo(a)!
        </Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>
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
        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text style={{ fontFamily: theme.fonts.textRegular, color: theme.colors.textColor, lineHeight: 26, textAlign: 'justify' }}>
            Lembre-se de que a prática regular dessas técnicas pode ajudar a melhorar sua capacidade de gerenciar a ansiedade.
            Experimente diferentes técnicas para encontrar a que funciona melhor para você. {''}
            <Text style={{ fontFamily: theme.fonts.textBold, fontWeight: "bold", fontStyle: 'italic', fontSize: 16 }}>
              Além disso, se você tiver ansiedade persistente ou grave, é aconselhável procurar a orientação de um
              profissional de saúde mental para obter suporte adequado. ♥️
            </Text>
          </Text>
        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}