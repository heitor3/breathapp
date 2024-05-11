import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Image, Text, View } from 'react-native';
import * as breath from '../../assets/IconBreath'

import { styles } from './styles';
import { useThemeControl } from '../../stores/themeSetColor';

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
  const { theme } = useThemeControl();
  return (
    <View style={styles.container} accessibilityLabel='Select Breath Button'>
      <TouchableOpacity {...rest} activeOpacity={0.5}>
        <Image source={breathIcon} style={[styles.icon, { borderColor: theme.colors.textColor }]} />
      </TouchableOpacity>
      <Text style={[styles.titleBreath, {
        color: theme.colors.textColor,
        fontFamily: theme.fonts.textMedium
      }]}>
        {title}
      </Text>
    </View>
  );
}