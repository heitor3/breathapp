import { create } from "zustand";

type State = {
  controlHomeModal: boolean;
  setControlHomeModal: (value: boolean) => void;
}

const useModalHomeControl = create<State>((set) => ({
  controlHomeModal: false,
  setControlHomeModal: (value: boolean) => {
    set({ controlHomeModal: value });
  }
}));

export default useModalHomeControl;