import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScreenComponent } from '../../components/ScreenComponent';
import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { themeStyles } from '../../global/styles/theme';
import { TimerCircleAnimated } from '../../components/TimerCircleAnimated';
import { useTranslation } from 'react-i18next';

export function Breath478() {
  const { theme } = useThemeControl();
  const { t } = useTranslation();
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(1);
  const [breathe, setBreathe] = useState("");
  const [color, setColor] = useState(theme.colors.primaryColor)

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (stage === 1) {
      setBreathe("screen_487_6");
      setColor("#00FF7F")
    } else if (stage === 2) {
      setBreathe("screen_487_7");
      setColor("#B22222")
    } else {
      setBreathe("screen_487_8");
      setColor("#00FF7F")
    }

    if (timerStart) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (stage === 1 && prevSeconds === 4) {
            setStage(2);
            return 0;
          } else if (stage === 2 && prevSeconds === 7) {
            setStage(3);
            return 0;
          } else if (stage === 3 && prevSeconds === 8) {
            setStage(1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      setColor(theme.colors.primaryColor)
      setBreathe("")
      setStage(1)
      setSeconds(0)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerStart, stage]);

  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_2' title='breath_2' />

      <View style={styles.contentInfo}>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_487_1')}</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_487_2')}</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_487_3')}</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>{t('screen_487_4')}</Text>
      </View>

      <Text style={[styles.label, { color: theme.colors.textColor, }]}>{timerStart ? `${t(breathe)}` : `${t('screen_487_5')}`}</Text>
      <View style={styles.boxStopWatch}>
        <Text style={[styles.watch, { color: theme.colors.textColor }]}>{timerStart ? seconds : "0"}</Text>
        <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
          <TimerCircleAnimated color={color} colorTop={theme.colors.primaryColor} spinInit={timerStart} />
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.play} onPress={() => setTimerStart(true)}>
          <Text style={[styles.titleButton, { fontFamily: theme.fonts.textBold, color: themeStyles.light.colors.textColor }]}>{t('screen_487_Start')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.play, styles.stop]} onPress={() => setTimerStart(false)}>
          <Text style={[styles.titleButton, { fontFamily: theme.fonts.textBold, color: themeStyles.light.colors.textColor }]}>{t('screen_487_Stop')}</Text>
        </TouchableOpacity>
      </View>


      <ModalInfo>
        <Text style={[styles.textModal, { color: theme.colors.textColor, }]}>
          {t('info_478_text_1')}
          {'\n \n'}
          {t('info_478_text_2')}
          {'\n \n'}
          {t('info_478_text_3')}
        </Text>
      </ModalInfo>


    </ScreenComponent>
  );
}