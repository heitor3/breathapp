import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ScreenComponent } from '../../components/ScreenComponent';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { useTranslation } from 'react-i18next';

export function BreathAbdominal() {
  const { theme } = useThemeControl();
  const { t } = useTranslation();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_3' title='breath_3' />
      <View style={styles.container}>
        <Text style={[styles.textInfo, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_abdominal_1')}</Text>
        <Text style={[styles.textInfo, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_abdominal_2')}</Text>
        <Text style={[styles.textInfo, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_abdominal_3')}</Text>
        <Text style={[styles.textInfo, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_abdominal_14')}</Text>
        <Text style={[styles.textInfo, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_abdominal_5')}</Text>
      </View>

      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            {t('info_abdominal_1')} {''}
            <Text style={[styles.textModal, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              {t('info_abdominal_2')}
            </Text>
          </Text>

          <Text style={[styles.bold, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>
            {t('info_abdominal_3')} {''}
            <Text style={[styles.textModal, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
              {t('info_abdominal_4')}
            </Text>
          </Text>

        </View>
      </ModalInfo>

    </ScreenComponent>
  );
}