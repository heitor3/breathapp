import React from 'react';
import { View, Text } from 'react-native';

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
            {t('info_deep_1')} {''}
            <Text style={[styles.text, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>
              {t('info_deep_2')}
            </Text>
          </Text>

          <Text style={[styles.bold, { fontFamily: theme.fonts.textBold, color: theme.colors.textColor }]}>
            {t('info_deep_3')} {''}
            <Text style={[styles.text, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>
              {t('info_deep_4')}
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}