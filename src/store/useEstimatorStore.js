import { create } from 'zustand';

const useEstimatorStore = create((set) => ({
  provider: 'AWS',
  instance: 't2.medium',
  hours: 720,
  storage: 50,
  setFormValue: (field, value) => set((state) => ({ ...state, [field]: value })),
}));

export default useEstimatorStore;