import {create} from 'zustand'
import { persist } from 'zustand/middleware'
import { whitePaperStoreInterface } from '@/component/Interface/talents'

  
  export const useWhitePaperStore = create<whitePaperStoreInterface>()(
    persist(
      (set) => ({
        selectedWhitePaper: null,
        whitePaper: null,
        editSelectedWhitePaper: (whitePaper) =>
          set((state) => ({
            ...state,
            selectedWhitePaper: whitePaper,
          })),
        editWhitePapers: (whitePapers) =>
          set((state) => ({
            ...state,
            whitePapers: whitePapers,
          })),
      }),
      {
        name: 'WhitePaper-storage', // Key for localStorage
      }
    )
  )
  