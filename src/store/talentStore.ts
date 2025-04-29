import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { TalentStoreInterface } from '@/component/Interface/talents'

  
  export const useTalentsStore = create<TalentStoreInterface>()(
    persist(
      (set) => ({
        selectedTalent: null,
        talents: null,
        editSelectedTalent: (talent) =>
          set((state) => ({
            ...state,
            selectedTalent: talent,
          })),
        editTalents: (talents) =>
          set((state) => ({
            ...state,
            talents: talents,
          })),
      }),
      {
        name: 'talent-storage', // Key for localStorage
      }
    )
  )
  