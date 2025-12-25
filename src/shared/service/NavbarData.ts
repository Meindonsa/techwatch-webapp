interface SourceType {
  name: string,
  label: string
  icon?: string
}

export const SourceFilters: SourceType[] = [
  {
    name: 'ALL',
    label: 'Accueil',
  },
  {
    name: 'GAMING',
    label: 'Gaming',
  },
  {
    name: 'TECH',
    label: 'Tech',
  },
  {
    name: 'CYBERSECURITY',
    label: 'Cybersecurity',
  },
]