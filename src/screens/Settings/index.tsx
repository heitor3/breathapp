import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {styles} from './styles';
import {ScreenComponent} from '../../components/ScreenComponent';
import {useThemeControl} from '../../stores/themeSetColor';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RadioButton} from 'react-native-paper';
import Dropdown from '../../components/DropDown';
import {flags} from '../../assets/flags';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

export function Settings() {
  const {theme, toggleTheme} = useThemeControl();
  const [openThemeOption, setOpenThemeOption] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [optionTheme, setOptionTheme] = useState<'light' | 'dark'>('light');
  const {navigate} = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    theme.bar === 'dark' ? setOptionTheme('dark') : '';
  }, []);

  function Separator() {
    return (
      <View
        style={{
          width: '100%',
          height: 1.5,
          backgroundColor: theme.colors.textColor,
          marginVertical: 4,
          marginBottom: 40,
        }}
      />
    );
  }

  const handleToggleTheme = async (theme: string) => {
    try {
      const currentTheme = await AsyncStorage.getItem('theme');
      if (currentTheme === theme) {
        return;
      }
      toggleTheme(currentTheme === 'dark' ? 'light' : 'dark');
      await AsyncStorage.setItem(
        'theme',
        currentTheme === 'dark' ? 'light' : 'dark',
      );

      currentTheme === 'dark'
        ? setOptionTheme('light')
        : setOptionTheme('dark');
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  return (
    <ScreenComponent showInfoButton={false}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={() => navigate('home')}>
          <Icon name="chevron-left" color={theme.colors.textColor} size={22} />
        </TouchableOpacity>
        <Text
          style={[
            styles.headerTitle,
            {color: theme.colors.textColor, fontFamily: theme.fonts.textBold},
          ]}>
          {t('settings_1')}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.actionButton}
          onPress={() => setOpenThemeOption(!openThemeOption)}>
          <Text style={{color: theme.colors.textColor}}>{t('settings_2')}</Text>
          {!openThemeOption ? (
            <Icon
              name="chevron-right"
              color={theme.colors.textColor}
              size={12}
            />
          ) : (
            <Icon
              name="chevron-down"
              color={theme.colors.textColor}
              size={12}
            />
          )}
        </TouchableOpacity>
        {openThemeOption && (
          <View style={styles.contentButton}>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                onPress={() => handleToggleTheme('light')}
                status={optionTheme === 'light' ? 'checked' : 'unchecked'}
                value="light"
                color={theme.colors.textColor}
              />
              <Text style={{color: theme.colors.textColor}}>
                {t('settings_3')}
              </Text>
              <Icon name="sun" size={14} color={theme.colors.textColor} solid />
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                onPress={() => handleToggleTheme('dark')}
                status={optionTheme === 'dark' ? 'checked' : 'unchecked'}
                value="light"
                color={theme.colors.textColor}
              />
              <Text style={{color: theme.colors.textColor}}>
                {t('settings_4')}
              </Text>
              <Icon
                name="moon"
                size={14}
                color={theme.colors.textColor}
                solid
              />
            </View>
          </View>
        )}
        <Separator />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.actionButton}
          onPress={() => setOpenLanguage(!openLanguage)}>
          <Text style={{color: theme.colors.textColor}}>{t('settings_5')}</Text>
          {!openLanguage ? (
            <Icon
              name="chevron-right"
              color={theme.colors.textColor}
              size={12}
            />
          ) : (
            <Icon
              name="chevron-down"
              color={theme.colors.textColor}
              size={12}
            />
          )}
        </TouchableOpacity>
        {openLanguage && (
          <View style={styles.flags}>
            <Dropdown options={flags} />
          </View>
        )}
        <Separator />
      </ScrollView>
    </ScreenComponent>
  );
}
