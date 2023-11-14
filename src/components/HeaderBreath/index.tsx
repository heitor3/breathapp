import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import back from '../../assets/back.png'
import { styles } from './styles';
import * as breath from '../../assets/IconBreath'
import { useNavigation } from '@react-navigation/native';

const BreathType = {
  "breath_1": breath.AnxietyIcon,
  "breath_2": breath.BothLungIcon,
  "breath_3": breath.BreathDeepIcon,
  "breath_4": breath.BreathIcon,
  "breath_5": breath.LungBreathIcon,
  "breath_6": breath.LungSideIcon,
};

const BreathName = {
  "breath_1": "Respiração consciente",
  "breath_2": "Respiração 4-7-8",
  "breath_3": "Respiração abdominal",
  "breath_4": "Respiração quadrada",
  "breath_5": "Respiração profunda completa",
  "breath_6": "Respiração alternada de narinas",
};

type IconBreath = keyof typeof BreathType;
type NameBreath = keyof typeof BreathName;

type HeaderBreathProps = {
  icon: IconBreath;
  title: NameBreath;
}

export function HeaderBreath({ icon, title }: HeaderBreathProps) {
  const image = BreathType[icon]
  const text = BreathName[title]

  const { navigate } = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigate("home")}>
          <Image source={back} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>
      <Image style={styles.logo} source={image} />
      <Text style={styles.title}>{text}</Text>
    </View>
  );
}