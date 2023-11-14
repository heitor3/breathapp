import { ReactNode } from 'react';
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View, Image } from 'react-native';
import Modal from 'react-native-modal';
import CloseIcon from '../../assets/close.png'
import useModalHomeControl from '../../stores/modalHomeControl';

type ModalProps = {
  width?: number,
  height?: number,
  children?: ReactNode
};


export function ModalInfo({ height = 250, width = 300, children }: ModalProps) {
  const { controlHomeModal, setControlHomeModal } = useModalHomeControl();

  return (

    <Modal isVisible={controlHomeModal}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#181818', padding: 20, borderRadius: 10, height: height, width: width }}>
          <View style={{ width: '100%', top: 0, display: 'flex', alignItems: 'flex-end' }}>
            <TouchableOpacity style={{ width: 30 }} onPress={() => setControlHomeModal(!controlHomeModal)}>
              <Image source={CloseIcon} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>

  );
}