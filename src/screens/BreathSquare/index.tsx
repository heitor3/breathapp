import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScreenComponent } from '../../components/ScreenComponent';
import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';

export function BreathSquare() {
  const [timerStart, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [stage, setStage] = useState(1);
  const [breathe, setBreathe] = useState("");
  const [color, setColor] = useState("")

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
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerStart, stage]);

  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_4' title='breath_4' />

      <View style={styles.contentInfo}>
        <Text style={styles.text}>Inspire por 4 segundos, prenda a respiração por 4 segundos.</Text>
        <Text style={styles.text}>Expire por 4 segundos, fique sem respirar por 4 segundos.</Text>
        <Text style={styles.text}>Repita o ciclo.</Text>
        <Text style={styles.text}>Use o cronômetro para auxiliar.</Text>
      </View>

      <View style={[styles.boxStopWatch, { borderColor: color }]}>
        <Text style={styles.label}>{timerStart ? breathe : "Começe o exercício"}</Text>
        <Text style={styles.watch}>{timerStart ? seconds : "0"}</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.play} onPress={() => setTimerStart(true)}>
          <Text style={styles.titleButton}>INICIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.play, styles.stop]} onPress={() => setTimerStart(false)}>
          <Text style={styles.titleButton}>PARAR</Text>
        </TouchableOpacity>
      </View>


      <ModalInfo height={380}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.bold}>
            Propósito: {''}
            <Text style={styles.text}>
              Essa técnica é ótima para criar um ritmo respiratório calmante e promover o relaxamento.
            </Text>
          </Text>

          <Text style={styles.bold}>
            Como isso ajuda: {''}
            <Text style={styles.text}>
              A respiração quadrada cria uma cadência rítmica que ajuda a regular a frequência cardíaca e a diminuir a ansiedade.
              A igualdade de duração nas etapas proporciona estabilidade emocional.
            </Text>
          </Text>

        </View>
      </ModalInfo>


    </ScreenComponent>
  );
}