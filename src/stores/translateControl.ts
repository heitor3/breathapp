import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = {
  translate: string;
  setTranslate: (value: State['translate']) => void;
}

const useTranslateControl = create<State>((set) => ({
  translate: "en",
  setTranslate: async (value: State['translate']) => {
    await AsyncStorage.setItem('translate', value);
    set({ translate: value });
  }
}));

export default useTranslateControl;