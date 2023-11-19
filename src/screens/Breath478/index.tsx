import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScreenComponent } from '../../components/ScreenComponent';
import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { useThemeControl } from '../../stores/themeSetColor';
import { themeStyles } from '../../global/styles/theme';

export function Breath478() {
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(1);
  const [breathe, setBreathe] = useState("");
  const [color, setColor] = useState("")
  const { theme } = useThemeControl();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (stage === 1) {
      setBreathe("Inspire por 4 segundos");
      setColor("#00FF7F")
    } else if (stage === 2) {
      setBreathe("Prenda por 7 segundos");
      setColor("#B22222")
    } else {
      setBreathe("Expire por 8 segundos");
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
        }]}>Inspire silenciosamente pelo nariz contando até 4.</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>Prenda a respiração e conte até 7.</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>Expire lentamente pela boca contando até 8.</Text>
        <Text style={[styles.text, {
          color: theme.colors.textColor,
          fontFamily: theme.fonts.textRegular
        }]}>Use o cronômetro para auxiliar.</Text>
      </View>

      <View style={[styles.boxStopWatch, { borderColor: color }]}>
        <Text style={[styles.label, { color: theme.colors.textColor, }]}>{timerStart ? breathe : "Começe o exercício"}</Text>
        <Text style={[styles.watch, { color: theme.colors.textColor }]}>{timerStart ? seconds : "0"}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.play} onPress={() => setTimerStart(true)}>
          <Text style={[styles.titleButton, { fontFamily: theme.fonts.textBold, color: themeStyles.light.colors.textColor }]}>INICIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.play, styles.stop]} onPress={() => setTimerStart(false)}>
          <Text style={[styles.titleButton, { fontFamily: theme.fonts.textBold, color: themeStyles.light.colors.textColor }]}>PARAR</Text>
        </TouchableOpacity>
      </View>


      <ModalInfo height={600}>
        <Text style={[styles.textModal, { color: theme.colors.textColor, }]}>
          A técnica 478 é uma técnica de respiração utilizada para reduzir o estresse e a ansiedade.
          É chamada assim porque envolve respirar por quatro segundos, prender a respiração por sete segundos e expirar por oito segundos, totalizando uma respiração completa de 15 segundos. {'\n'}
          {'\n'}
          A ideia por trás da técnica 478 é reduzir a frequência respiratória e aumentar a atividade do sistema nervoso parassimpático, que ajuda a reduzir a resposta do corpo ao estresse e promover relaxamento.
          Essa técnica pode ser realizada em qualquer lugar e a qualquer momento, e é especialmente útil em situações em que você está se sentindo estressado ou ansioso. {'\n'}
          {'\n'}
          No entanto, é importante notar que a técnica 478 pode não ser adequada para todos e que pode haver variações nas instruções de como realizar a técnica corretamente.
          É sempre uma boa ideia consultar um profissional de saúde qualificado antes de tentar qualquer técnica de respiração ou exercício novo.
        </Text>
      </ModalInfo>


    </ScreenComponent>
  );
}