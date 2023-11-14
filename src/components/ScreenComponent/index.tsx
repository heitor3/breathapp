import React, { ReactNode } from 'react';
import { TouchableOpacity, View, ViewProps, Image } from 'react-native';
import InfoIcon from '../../assets/info.png'
import useModalHomeControl from '../../stores/modalHomeControl';
import { styles } from './styles';

type ScreenPorps = ViewProps & {
  children: ReactNode;
}

export function ScreenComponent({ children, ...rest }: ScreenPorps) {
  const { controlHomeModal, setControlHomeModal } = useModalHomeControl();
  return (
    <View style={styles.container}  >
      <View style={styles.children}>
        {children}
      </View>
      <View style={styles.buttonModal}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => setControlHomeModal(!controlHomeModal)}>
          <Image source={InfoIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}