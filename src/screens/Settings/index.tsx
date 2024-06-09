import React, {useState} from 'react';
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

export function Settings() {
  const {theme, toggleTheme} = useThemeControl();
  const [openThemeOption, setOpenThemeOption] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [optionTheme, setOptionTheme] = useState<'light' | 'dark'>('light');
  const {t} = useTranslation();

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
        <Text
          style={[
            styles.headerTitle,
            {color: theme.colors.textColor, fontFamily: theme.fonts.textBold},
          ]}>
          Settings
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.actionButton}
          onPress={() => setOpenThemeOption(!openThemeOption)}>
          <Text style={{color: theme.colors.textColor}}>Theme</Text>
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
              <Text style={{color: theme.colors.textColor}}>Light</Text>
              <Icon name="sun" size={14} color={theme.colors.textColor} solid />
            </View>
            <View style={styles.radioButtonContainer}>
              <RadioButton
                onPress={() => handleToggleTheme('dark')}
                status={optionTheme === 'dark' ? 'checked' : 'unchecked'}
                value="light"
                color={theme.colors.textColor}
              />
              <Text style={{color: theme.colors.textColor}}>Dark</Text>
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
          <Text style={{color: theme.colors.textColor}}>Language</Text>
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
        {openLanguage && <Dropdown options={flags} />}
        <Separator />
      </ScrollView>
    </ScreenComponent>
  );
}
