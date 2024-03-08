import React, { useCallback, useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useThemeControl } from '../../stores/themeSetColor';
import Moon from '../../assets/moon.png'
import Sun from '../../assets/sun.png'
import '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { flags } from '../../assets/flags';
import Dropdown from '../../components/DropDown';

export function Home() {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { theme, toggleTheme } = useThemeControl();
  const [homeFocus, setHomeFocus] = useState(false)
  const [teste, setTeste] = useState(false)

  useFocusEffect(
    useCallback(() => {
      setHomeFocus(true);
      return () => {
        setHomeFocus(false);
      }
    }, [])
  )

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
      <View style={{ width: '100%', marginTop: -60, marginBottom: 50, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
        <Dropdown options={flags} />
        <TouchableOpacity onPress={handleToggleTheme} style={{ borderRadius: 50, padding: 2 }}>
          {theme.bar === "dark" ? (<Image source={Sun} style={{ width: 26, height: 26 }} />) : (<Image source={Moon} style={{ width: 26, height: 26 }} />)}
        </TouchableOpacity>
      </View>
      <View style={[styles.header, { backgroundColor: theme.colors.primaryColor }]}>
        <Text style={[styles.welcome, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textBold,
        }]}>
          {t("wellcome")}
        </Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>
          {t('select')}
        </Text>
      </View>

      <View style={styles.boxCollection}>
        <View style={styles.boxConente}>
          <ButtonIcon icon='breath_1' title={t("title_breath_1")} onPress={() => navigate('breathConscious')} />
          <ButtonIcon icon='breath_2' title={t("title_breath_1")} onPress={() => navigate('breath478')} />
          <ButtonIcon icon='breath_3' title={t("title_breath_1")} onPress={() => navigate('breathAbdominal')} />
        </View>
        <View style={styles.boxConente}>
          <ButtonIcon icon='breath_4' title={t("title_breath_1")} onPress={() => navigate('breathSquare')} />
          <ButtonIcon icon='breath_5' title={t("title_breath_1")} onPress={() => navigate('breathDeep')} />
          <ButtonIcon icon='breath_6' title={t("title_breath_1")} onPress={() => navigate('breathAlternate')} />
        </View>
      </View>

      {homeFocus && <ModalInfo >
        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text style={{ fontFamily: theme.fonts.textRegular, color: theme.colors.textColor, lineHeight: 26, textAlign: 'justify' }}>
            {t('info_home')} {'\n'}
            <Text style={{ fontFamily: theme.fonts.textBold, fontWeight: "bold", fontStyle: 'italic', fontSize: 16 }}>
              {t('info_home_2')}
            </Text>
          </Text>
        </View>
      </ModalInfo>}
    </ScreenComponent>
  );
}