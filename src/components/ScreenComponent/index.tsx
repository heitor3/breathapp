import React, { ReactNode } from 'react';
import { TouchableOpacity, View, ViewProps, Image } from 'react-native';
import InfoIcon from '../../assets/info.png'
import useModalHomeControl from '../../stores/modalHomeControl';
import { styles } from './styles';
import { useThemeControl } from '../../stores/themeSetColor';

type ScreenPorps = ViewProps & {
  children: ReactNode;
}


export function ScreenComponent({ children, ...rest }: ScreenPorps) {
  const { theme } = useThemeControl();
  const { controlHomeModal, setControlHomeModal } = useModalHomeControl();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primaryColor }]}  >
      <View style={[styles.children, { backgroundColor: theme.colors.primaryColor }]}>
        {children}
      </View>
      <View style={[styles.buttonModal, { backgroundColor: theme.colors.primaryColor }]}>
        <TouchableOpacity
          style={{ borderRadius: 50, padding: 4 }}
          activeOpacity={0.5} onPress={() => setControlHomeModal(!controlHomeModal)}>
          <Image source={InfoIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}