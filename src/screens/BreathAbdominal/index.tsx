import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ScreenComponent } from '../../components/ScreenComponent';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';

export function BreathAbdominal() {
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_3' title='breath_3' />
      <View style={styles.container}>
        <Text style={styles.textInfo}>Sente-se ou deite-se confortavelmente.</Text>
        <Text style={styles.textInfo}>Coloque uma mão no peito e a outra no abdômen.</Text>
        <Text style={styles.textInfo}>Respire profundamente pelo nariz, enchendo o abdômen com ar.</Text>
        <Text style={styles.textInfo}>Expire lentamente pela boca, esvaziando o ar dos pulmões.</Text>
        <Text style={styles.textInfo}>Concentre-se na expansão e contração do abdômen.</Text>
      </View>

      <ModalInfo height={500}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.bold}>
            Propósito: {''}
            <Text style={styles.textModal}>
              Essa técnica incentiva a respiração profunda e lenta, o que ajuda a reduzir os sintomas de ansiedade, como batimentos cardíacos acelerados e tensão muscular.
            </Text>
          </Text>

          <Text style={styles.bold}>
            Como isso ajuda: {''}
            <Text style={styles.textModal}>
              A respiração abdominal ativa o sistema nervoso parassimpático, que é responsável pelo relaxamento e pela redução do estresse. Ela ajuda a oxigenar o corpo de maneira
              mais eficaz e a diminuir a resposta do sistema nervoso simpático, que está associado à resposta de luta ou fuga.
            </Text>
          </Text>

        </View>
      </ModalInfo>

    </ScreenComponent>
  );
}