import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';
import { themeStyles } from '../../global/styles/theme';
import { useThemeControl } from '../../stores/themeSetColor';
import { Carousel } from '../../components/Carousel';
import { Steps } from './steps';
import { useTranslation } from 'react-i18next';

export function BreathAlternate() {
  const [count, setCount] = useState(0)
  const { theme } = useThemeControl();
  const { t } = useTranslation();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_6' title='breath_6' />
      <>
        <View style={styles.container}>
          <Carousel steps={Steps} />
        </View>
      </>

      <View style={styles.countCycles}>
        <Text style={[styles.textInfo, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
          {t('screen_alternate_11')}
        </Text>
        <Text style={[styles.textInfo, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>{t('screen_alternate_12')}<Text style={styles.bold}> {count}</Text> </Text>
        <View style={styles.buttonsCount}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)} accessibilityLabel='Start Button'>
            <Text style={[styles.titleButton, {
              fontFamily: theme.fonts.textBold,
              color: themeStyles.light.colors.textColor
            }]}>{t('screen_alternate_Start')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#B22222" }]} onPress={() => setCount(0)} accessibilityLabel='Stop Button'>
            <Text style={[styles.titleButton, {
              fontFamily: theme.fonts.textBold,
              color: themeStyles.light.colors.textColor
            }]}>{t('screen_alternate_Stop')}</Text>
          </TouchableOpacity>
        </View>
      </View>


      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, {
            color: theme.colors.textColor,
            fontFamily: theme.fonts.textBold
          }]}>
            {t('info_alternate_1')} {''}
            <Text style={[styles.text, {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textRegular
            }]}>
              {t('info_alternate_2')}
            </Text>
          </Text>

          <Text style={[styles.bold, {
            color: theme.colors.textColor,
            fontFamily: theme.fonts.textBold
          }]}>
            {t('info_alternate_3')} {''}
            <Text style={[styles.text, {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textRegular
            }]}>
              {t('info_alternate_4')}
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}