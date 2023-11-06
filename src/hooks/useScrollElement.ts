import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SubmitOrderState {
  element: any;
  addElement: (element: { ref: any; name: string }) => void;
}

const useScrollElement = create<SubmitOrderState>((set) => ({
  element: {},
  addElement: (el: { ref: any; name: string }) => {
    set((state) => ({
      element: {
        ...state.element,
        [el.name]: el.ref,
      },
    }));
  },
}));

export default useScrollElement;
