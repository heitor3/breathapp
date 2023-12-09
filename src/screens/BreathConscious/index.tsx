import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { ScreenComponent } from '../../components/ScreenComponent';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';

export function BreathConscious() {
  const { theme } = useThemeControl();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_1' title='breath_1' />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            Sente-se confortavelmente e feche os olhos.
          </Text>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            Concentre-se na sua respiração, observando-a sem tentar modificá-la.
          </Text>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            À medida que sua mente divagar, gentilmente traga o foco de volta para a respiração.
          </Text>
        </View>
      </View>

      <ModalInfo>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            Propósito: {''}
            <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              Essa técnica é uma forma de meditação de atenção plena que reduz a ansiedade ao ancorar sua mente no presente.
            </Text>
          </Text>

          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            Como isso ajuda: {''}
            <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              A respiração consciente ajuda a acalmar a mente, reduzir preocupações e aumentar a sensação de paz e tranquilidade.
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent >
  );
}