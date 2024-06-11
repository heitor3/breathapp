import React, {useCallback, useState} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {styles} from './styles';
import {ButtonIcon} from '../../components/ButtonIcon';
import {ModalInfo} from '../../components/ModalInfo/ModalInfo';
import {ScreenComponent} from '../../components/ScreenComponent';
import {useThemeControl} from '../../stores/themeSetColor';
import '../../utils/i18n';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

export function Home() {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const {theme} = useThemeControl();
  const [homeFocus, setHomeFocus] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setHomeFocus(true);
      return () => {
        setHomeFocus(false);
      };
    }, []),
  );

  return (
    <ScreenComponent>
      <View
        style={{
          width: '100%',
          marginBottom: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigate('settings')}
          style={{borderRadius: 50, padding: 4}}
          accessibilityLabel="options settings button">
          <Icon
            name="settings-sharp"
            color={theme.colors.textColor}
            size={22}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[styles.header, {backgroundColor: theme.colors.primaryColor}]}>
        <Text
          style={[
            styles.welcome,
            {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textBold,
            },
          ]}>
          {t('wellcome')}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textRegular,
            },
          ]}>
          {t('select')}
        </Text>
      </View>

      <View style={styles.boxCollection}>
        <View style={styles.boxConente}>
          <ButtonIcon
            icon="breath_1"
            title={t('title_breath_1')}
            onPress={() => navigate('breathConscious')}
          />
          <ButtonIcon
            icon="breath_2"
            title={t('title_breath_2')}
            onPress={() => navigate('breath478')}
          />
          <ButtonIcon
            icon="breath_3"
            title={t('title_breath_3')}
            onPress={() => navigate('breathAbdominal')}
          />
        </View>
        <View style={styles.boxConente}>
          <ButtonIcon
            icon="breath_4"
            title={t('title_breath_4')}
            onPress={() => navigate('breathSquare')}
          />
          <ButtonIcon
            icon="breath_5"
            title={t('title_breath_5')}
            onPress={() => navigate('breathDeep')}
          />
          <ButtonIcon
            icon="breath_6"
            title={t('title_breath_6')}
            onPress={() => navigate('breathAlternate')}
          />
        </View>
      </View>

      {homeFocus && (
        <ModalInfo>
          <View style={{marginTop: 20, paddingHorizontal: 10}}>
            <Text
              style={{
                fontFamily: theme.fonts.textRegular,
                color: theme.colors.textColor,
                lineHeight: 26,
                textAlign: 'justify',
              }}>
              {t('info_home')} {'\n'}
              <Text
                style={{
                  fontFamily: theme.fonts.textBold,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  fontSize: 16,
                }}>
                {t('info_home_2')}
              </Text>
            </Text>
          </View>
        </ModalInfo>
      )}
    </ScreenComponent>
  );
}
