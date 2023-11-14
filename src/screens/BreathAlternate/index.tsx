import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';

export function BreathAlternate() {
  const [count, setCount] = useState(0)

  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_6' title='breath_6' />
      <View style={styles.container}>
        <ScrollView style={{ height: '100%', paddingHorizontal: 10 }}>
          <Text style={styles.textInfo}>Sente-se em uma posição confortável com a coluna reta. Você pode estar em uma cadeira,
            no chão ou em uma postura de meditação, como a postura de lótus.</Text>
          <Text style={styles.textInfo}>Feche uma narina com o polegar e inspire lentamente pela outra narina.</Text>
          <Text style={styles.textInfo}>Feche a outra narina com o dedo indicador, segurando a respiração por alguns segundos.</Text>
          <Text style={styles.textInfo}>Solte a primeira narina e expire por ela.</Text>
          <Text style={styles.textInfo}>Repita alternando as narinas.</Text>
          <Text style={styles.textInfo}>Você pode praticar a Respiração Alternada de Narinas conforme necessário.
            Não há um número específico de vezes que você deve praticar, mas pode começar com 5 a 10 ciclos
            (um ciclo inclui uma inalação e uma exalação através de ambas as narinas) e, em seguida, ajustar conforme desejar.</Text>
        </ScrollView>
      </View>

      <View style={styles.countCycles}>
        <Text style={[styles.textInfo, { marginBottom: 20 }]}>
          Use o contador de ciclos para auxiliar!
        </Text>
        <Text style={styles.textInfo}>Ciclos: <Text style={styles.bold}> {count}</Text> </Text>
        <View style={styles.buttonsCount}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.titleButton}>CONTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#B22222" }]} onPress={() => setCount(0)}>
            <Text style={styles.titleButton}>ZERAR</Text>
          </TouchableOpacity>
        </View>
      </View>


      <ModalInfo height={380}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.bold}>
            Propósito: {''}
            <Text style={styles.text}>
              Essa técnica é usada para equilibrar a energia e acalmar a mente.
            </Text>
          </Text>

          <Text style={styles.bold}>
            Como isso ajuda: {''}
            <Text style={styles.text}>
              A respiração alternada de narinas pode ajudar a equilibrar os hemisférios cerebrais, promover o foco e aliviar a ansiedade.
              Ela também é usada em práticas de ioga para acalmar a mente.
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}