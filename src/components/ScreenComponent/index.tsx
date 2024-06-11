import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  View,
  ViewProps,
  Image,
  SafeAreaView,
} from 'react-native';
import InfoIcon from '../../assets/info.png';
import useModalHomeControl from '../../stores/modalHomeControl';
import {styles} from './styles';
import {useThemeControl} from '../../stores/themeSetColor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ScreenPorps = ViewProps & {
  children: ReactNode;
  showInfoButton?: boolean;
};

export function ScreenComponent({
  children,
  showInfoButton = true,
  ...rest
}: ScreenPorps) {
  const {theme} = useThemeControl();
  const {controlHomeModal, setControlHomeModal} = useModalHomeControl();
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.primaryColor}]}
      {...rest}>
      <View
        style={[styles.children, {backgroundColor: theme.colors.primaryColor}]}>
        {children}
      </View>
      {showInfoButton && (
        <View
          style={[
            styles.buttonModal,
            {backgroundColor: theme.colors.primaryColor},
          ]}>
          <TouchableOpacity
            style={{borderRadius: 50, padding: 4, marginTop: 10}}
            accessibilityLabel="Icon open modal information"
            activeOpacity={0.5}
            onPress={() => setControlHomeModal(!controlHomeModal)}>
            <Icon
              name="information-outline"
              color={theme.colors.textColor}
              size={28}
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
