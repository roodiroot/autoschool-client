import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SubmitOrderState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const usePopap = create<SubmitOrderState>((set) => ({
  isOpen: false,
  onOpen: () =>
    set((state) => ({
      isOpen: true,
    })),
  onClose: () => set((state) => ({ isOpen: false })),
}));

export default usePopap;
