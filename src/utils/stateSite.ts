import { SetState } from "zustand";
import { create } from "zustand";



const useStore = create((set: SetState<any>) => ({
    isHeader: false,
    setIsHeader: (value: boolean) => set({ isHeader: value }), // Define o tipo de value como boolean
  }));
  


  export default useStore;