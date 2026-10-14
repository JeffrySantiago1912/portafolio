import { useContext } from 'react'
import { PreferencesContext } from '../context/preferences-context.ts'

export function usePreferences() {
  const value = useContext(PreferencesContext)
  if (!value) {
    throw new Error('usePreferences must be used within PreferencesProvider')
  }
  return value
}
