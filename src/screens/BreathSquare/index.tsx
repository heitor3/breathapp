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

export function BreathSquare() {
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
      setBreathe("screen_square_6");
      setColor("#00FF7F")
    } else if (stage === 2) {
      setBreathe("screen_square_7");
      setColor("#B22222")
    } else if (stage === 3) {
      setBreathe("screen_square_8");
      setColor("#00FF7F")
    } else {
      setBreathe("screen_square_9");
      setColor("#B22222")
    }

    if (timerStart) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (stage === 1 && prevSeconds === 4) {
            setStage(2);
            return 0;
          } else if (stage === 2 && prevSeconds === 4) {
            setStage(3);
            return 0;
          } else if (stage === 3 && prevSeconds === 4) {
            setStage(4);
            return 0;
          } else if (stage === 4 && prevSeconds === 4) {
            setStage(1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    } else {
      setColor(theme.colors.primaryColor)
      setSeconds(0)
      setStage(1)
      setBreathe("")
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerStart, stage]);
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_4' title='breath_4' />

      <View style={styles.contentInfo}>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>{t('screen_square_1')}</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>{t('screen_square_2')}</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>{t('screen_square_3')}</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>{t('screen_square_4')}</Text>
      </View>

      <Text style={[styles.label, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>{timerStart ? `${t(breathe)}` : `${t('screen_square_5')}`}</Text>
      <View style={[styles.boxStopWatch, { borderColor: color }]}>
        <Text style={[styles.watch, { color: theme.colors.textColor, fontFamily: theme.fonts.textBold }]}>{timerStart ? seconds : "0"}</Text>
        <View style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute' }}>
          <TimerCircleAnimated color={color} colorTop={theme.colors.primaryColor} spinInit={timerStart} />
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.play} onPress={() => setTimerStart(true)}>
          <Text style={[styles.titleButton, {
            fontFamily: theme.fonts.textBold,
            color: themeStyles.light.colors.textColor
          }]}>{t('screen_square_Start')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.play, styles.stop]} onPress={() => setTimerStart(false)}>
          <Text style={[styles.titleButton, {
            fontFamily: theme.fonts.textBold,
            color: themeStyles.light.colors.textColor
          }]}>{t('screen_square_Stop')}</Text>
        </TouchableOpacity>
      </View>


      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, {
            fontFamily: theme.fonts.textBold,
            color: theme.colors.textColor
          }]}>
            {t('info_square_1')} {''}
            <Text style={[styles.text, {
              fontFamily: theme.fonts.textRegular,
              color: theme.colors.textColor
            }]}>
              {t('info_square_2')}
            </Text>
          </Text>

          <Text style={[styles.bold, {
            fontFamily: theme.fonts.textBold,
            color: theme.colors.textColor
          }]}>
            {t('info_square_3')} {''}
            <Text style={[styles.text, {
              fontFamily: theme.fonts.textRegular,
              color: theme.colors.textColor
            }]}>
              {t('info_square_4')}
            </Text>
          </Text>

        </View>
      </ModalInfo>


    </ScreenComponent>
  );
}