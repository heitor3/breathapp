import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScreenComponent } from '../../components/ScreenComponent';
import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { themeStyles } from '../../global/styles/theme';
import { TimerCircleAnimated } from '../../components/TimerCircleAnimated';

export function BreathSquare() {
  const { theme } = useThemeControl();
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(1);
  const [breathe, setBreathe] = useState("");
  const [color, setColor] = useState(theme.colors.primaryColor)

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (stage === 1) {
      setBreathe("Inspire por 4 segundos");
      setColor("#00FF7F")
    } else if (stage === 2) {
      setBreathe("Prenda por 4 segundos");
      setColor("#B22222")
    } else if (stage === 3) {
      setBreathe("Expire por 4 segundos");
      setColor("#00FF7F")
    } else {
      setBreathe("Prenda por 4 segundos");
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
        }]}>Inspire por 4 segundos, prenda a respiração por 4 segundos.</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>Expire por 4 segundos, fique sem respirar por 4 segundos.</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>Repita o ciclo.</Text>
        <Text style={[styles.text, {
          fontFamily: theme.fonts.textRegular,
          color: theme.colors.textColor
        }]}>Use o cronômetro para auxiliar.</Text>
      </View>

      <Text style={[styles.label, { fontFamily: theme.fonts.textRegular, color: theme.colors.textColor }]}>{timerStart ? breathe : "Começe o exercício"}</Text>
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
          }]}>INICIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.play, styles.stop]} onPress={() => setTimerStart(false)}>
          <Text style={[styles.titleButton, {
            fontFamily: theme.fonts.textBold,
            color: themeStyles.light.colors.textColor
          }]}>PARAR</Text>
        </TouchableOpacity>
      </View>


      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, {
            fontFamily: theme.fonts.textBold,
            color: theme.colors.textColor
          }]}>
            Propósito: {''}
            <Text style={[styles.text, {
              fontFamily: theme.fonts.textRegular,
              color: theme.colors.textColor
            }]}>
              Essa técnica é ótima para criar um ritmo respiratório calmante e promover o relaxamento.
            </Text>
          </Text>

          <Text style={[styles.bold, {
            fontFamily: theme.fonts.textBold,
            color: theme.colors.textColor
          }]}>
            Como isso ajuda: {''}
            <Text style={[styles.text, {
              fontFamily: theme.fonts.textRegular,
              color: theme.colors.textColor
            }]}>
              A respiração quadrada cria uma cadência rítmica que ajuda a regular a frequência cardíaca e a diminuir a ansiedade.
              A igualdade de duração nas etapas proporciona estabilidade emocional.
            </Text>
          </Text>

        </View>
      </ModalInfo>


    </ScreenComponent>
  );
}