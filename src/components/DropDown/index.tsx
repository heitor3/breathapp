import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import Translate from '../../assets/translate.png';
import { styles } from './styles';
import useTranslateControl from '../../stores/translateControl';
import { useTranslation } from 'react-i18next';

type DropOptions = {
  flag: ImageSourcePropType;
  value: string;
}

type DropdownProps = {
  options: DropOptions[];
}


export default function Dropdown({ options }: DropdownProps) {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { setTranslate } = useTranslateControl();
  const { i18n } = useTranslation();

  const selectOption = async (option: string) => {
    if (option) {
      setTranslate(option)
    }

    i18n.changeLanguage(option).then(() => {

    })

    setDropdownOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={() => setDropdownOpen(!dropdownOpen)}>
        <View style={styles.selectedOptionContainer}>
          <Image source={Translate} style={styles.transleteIcon} />
        </View>
      </TouchableOpacity>

      {
        dropdownOpen && (
          <View style={styles.dropdownList}>
            {options.map((option) => (
              <TouchableOpacity key={option.value} style={styles.option} onPress={() => selectOption(option.value)}>
                <Image source={option.flag} style={styles.image} />
              </TouchableOpacity>
            ))}
          </View>
        )
      }
    </View >
  );
};