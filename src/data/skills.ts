import type { SkillGroupId } from '../types/dictionary.ts'

export const skillTiers = {
  core: ['frontend', 'backend', 'databases', 'cloud'],
  focus: ['ai'],
  additional: ['platforms', 'additional'],
} as const satisfies Record<string, readonly SkillGroupId[]>
