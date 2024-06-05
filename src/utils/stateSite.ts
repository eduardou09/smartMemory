import { supabase } from '@/config/supabaseClient';
import { createClient } from '@supabase/supabase-js';
import { SetState } from 'zustand';
import { create } from 'zustand';




const useStore = create((set: SetState<any>) => ({
  isHeader: false,
  form: [],
  setIsHeader: (value: boolean) => set({ isHeader: value }), // Define o tipo de value como boolean
  setForm: (form: any[]) => set({ form }), // Corrige a atualização do estado 'form'
}));

export default useStore;

export const loadUsers = async () => {
  const { data, error } = await supabase
    .from('Form')
    .select();
    console.log(data)
  if (error) {
    console.error(error);
    return;
  }

  const { setForm } = useStore.getState(); // Obtém a função setForm do Zustand store
  setForm(data);
};


