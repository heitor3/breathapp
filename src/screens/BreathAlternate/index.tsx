import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { HeaderBreath } from '../../components/HeaderBreath';
import { ModalInfo } from '../../components/ModalInfo/ModalInfo';
import { ScreenComponent } from '../../components/ScreenComponent';
import { themeStyles } from '../../global/styles/theme';
import { useThemeControl } from '../../stores/themeSetColor';
import { Carousel } from '../../components/Carousel';
import { Steps } from './steps';

export function BreathAlternate() {
  const [count, setCount] = useState(0)
  const { theme } = useThemeControl();
  return (
    <ScreenComponent>
      <HeaderBreath icon='breath_6' title='breath_6' />
      <>
        <View style={styles.container}>
          <Carousel steps={Steps} />
        </View>
      </>

      <View style={styles.countCycles}>
        <Text style={[styles.textInfo, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>
          Use o contador de ciclos para auxiliar!
        </Text>
        <Text style={[styles.textInfo, { color: theme.colors.textColor, fontFamily: theme.fonts.textRegular }]}>Ciclos: <Text style={styles.bold}> {count}</Text> </Text>
        <View style={styles.buttonsCount}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={[styles.titleButton, {
              fontFamily: theme.fonts.textBold,
              color: themeStyles.light.colors.textColor
            }]}>CONTAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: "#B22222" }]} onPress={() => setCount(0)}>
            <Text style={[styles.titleButton, {
              fontFamily: theme.fonts.textBold,
              color: themeStyles.light.colors.textColor
            }]}>ZERAR</Text>
          </TouchableOpacity>
        </View>
      </View>


      <ModalInfo >
        <View style={{ marginTop: 20 }}>
          <Text style={[styles.bold, {
            color: theme.colors.textColor,
            fontFamily: theme.fonts.textBold
          }]}>
            Propósito: {''}
            <Text style={[styles.text, {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textRegular
            }]}>
              Essa técnica é usada para equilibrar a energia e acalmar a mente.
            </Text>
          </Text>

          <Text style={[styles.bold, {
            color: theme.colors.textColor,
            fontFamily: theme.fonts.textBold
          }]}>
            Como isso ajuda: {''}
            <Text style={[styles.text, {
              color: theme.colors.textColor,
              fontFamily: theme.fonts.textRegular
            }]}>
              A respiração alternada de narinas pode ajudar a equilibrar os hemisférios cerebrais, promover o foco e aliviar a ansiedade.
              Ela também é usada em práticas de ioga para acalmar a mente.
            </Text>
          </Text>

        </View>
      </ModalInfo>
    </ScreenComponent>
  );
}