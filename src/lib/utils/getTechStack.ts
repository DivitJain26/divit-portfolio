import { Skill } from '../types/portfolio';

export function getTechStack(
  skills: Skill[],
  keys: string[]
): Skill[] {
  return skills.filter(skill => keys.includes(skill.key));
}
