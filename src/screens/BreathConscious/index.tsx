import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { ScreenComponent } from '../../components/ScreenComponent';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { useTranslation } from 'react-i18next';

export function BreathConscious() {
  const { theme } = useThemeControl();
  const { t } = useTranslation();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_1' title='breath_1' />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            {t('screen_conscious_text_1')}
          </Text>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            {t('screen_conscious_text_2')}
          </Text>
          <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
            {t('screen_conscious_text_3')}
          </Text>
        </View>
      </View>

      <ModalInfo>
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            {t('info_conscious_1')} {''}
            <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              {t('info_conscious_2')}
            </Text>
          </Text>

          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            {t('info_conscious_3')} {''}
            <Text style={[styles.text, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              {t('info_conscious_4')}
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent >
  );
}