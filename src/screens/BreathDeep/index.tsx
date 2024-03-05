import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';
import { ScreenComponent } from '../../components/ScreenComponent';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { Carousel } from '../../components/Carousel';
import { Steps } from './steps';
import { useTranslation } from 'react-i18next';


export function BreathDeep() {
  const { theme } = useThemeControl();
  const { t } = useTranslation();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_5' title='breath_5' />
      <View style={styles.container}>
        <Carousel steps={Steps} />
      </View>

      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, { fontFamily: theme.fonts.textBold, color: theme.colors.textColor }]}>
            Propósito: {''}
            <Text style={[styles.text, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>
              Essa técnica promove a oxigenação completa do corpo e ajuda a liberar a tensão.
            </Text>
          </Text>

          <Text style={[styles.bold, { fontFamily: theme.fonts.textBold, color: theme.colors.textColor }]}>
            Como isso ajuda: {''}
            <Text style={[styles.text, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>
              A respiração profunda completa fornece uma sensação de relaxamento e alívio. Ela ajuda a reduzir a hiperventilação associada à ansiedade.
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}