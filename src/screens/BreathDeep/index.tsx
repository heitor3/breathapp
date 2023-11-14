import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';
import { ScreenComponent } from '../../components/ScreenComponent';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';

export function BreathDeep() {
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_5' title='breath_5' />
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.textInfo}>Encontre um lugar tranquilo onde você possa se sentar ou deitar confortavelmente.</Text>
          <Text style={styles.textInfo}>Feche os olhos, se preferir, para se concentrar melhor.</Text>
          <Text style={styles.textInfo}>Inspire profundamente pelo nariz, enchendo os pulmões completamente.
            Certifique-se de que seu abdômen e peito se expandam enquanto você inspira.</Text>
          <Text style={styles.textInfo}>Expire lentamente pela boca, liberando todo o ar dos pulmões.</Text>
          <Text style={styles.textInfo}>Foque na sensação de plenitude ao inspirar e no alívio ao expirar.</Text>
          <Text style={styles.textInfo}>Não há uma regra estrita sobre quantas vezes você deve praticar a Respiração Profunda Completa, pois isso pode variar de pessoa para pessoa e depende da sua necessidade.
            No entanto, uma prática de 5 a 10 minutos de respiração profunda completa pode ser suficiente para reduzir a ansiedade e promover a sensação de relaxamento.</Text>
          <Text style={styles.textInfo}>Você pode praticar essa técnica sempre que sentir ansiedade, estresse, ou simplesmente quando quiser se acalmar e focar. É uma técnica que
            pode ser facilmente incorporada à sua rotina diária e usada como uma ferramenta de alívio do estresse a qualquer momento. O importante é praticar regularmente para obter os benefícios a longo prazo.
            Lembre-se de que a qualidade da respiração é mais importante do que a quantidade, então concentre-se em respirar profundamente e conscientemente.</Text>
        </ScrollView>
      </View>

      <ModalInfo height={380}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.bold}>
            Propósito: {''}
            <Text style={styles.text}>
              Essa técnica promove a oxigenação completa do corpo e ajuda a liberar a tensão.
            </Text>
          </Text>

          <Text style={styles.bold}>
            Como isso ajuda: {''}
            <Text style={styles.text}>
              A respiração profunda completa fornece uma sensação de relaxamento e alívio. Ela ajuda a reduzir a hiperventilação associada à ansiedade.
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}