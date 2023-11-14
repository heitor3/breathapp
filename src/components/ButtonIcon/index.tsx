import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image, Text, View } from 'react-native';
import * as breath from '../../assets/IconBreath'

import { styles } from './styles';

const BreathType = {
  "breath_1": breath.AnxietyIcon,
  "breath_2": breath.BothLungIcon,
  "breath_3": breath.BreathDeepIcon,
  "breath_4": breath.BreathIcon,
  "breath_5": breath.LungBreathIcon,
  "breath_6": breath.LungSideIcon,
}

type IconBreath = keyof typeof BreathType

type ButtonIconProps = TouchableOpacityProps & {
  icon: IconBreath;
  title: string;
}

export function ButtonIcon({ icon, title, ...rest }: ButtonIconProps) {
  const breathIcon = BreathType[icon]
  return (
    <View style={styles.container}>
      <TouchableOpacity {...rest} activeOpacity={0.5}>
        <Image source={breathIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.titleBreath}>
        {title}
      </Text>
    </View>
  );
}