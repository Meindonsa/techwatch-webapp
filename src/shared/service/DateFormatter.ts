export type DateFormatType =
  | 'short'
  | 'medium'
  | 'full'
  | 'shortDate'
  | 'mediumDate'
  | 'fullDate'
  | 'shortTime'
  | 'mediumTime'
  | 'fullTime'

const FORMAT_MAP: Record<DateFormatType, Intl.DateTimeFormatOptions> = {
  short: {
    dateStyle: 'short',
    timeStyle: 'short',
  },
  medium: {
    dateStyle: 'medium',
    timeStyle: 'medium',
  },
  full: {
    dateStyle: 'full',
    timeStyle: 'long',
  },

  shortDate: {
    dateStyle: 'short',
  },
  mediumDate: {
    dateStyle: 'medium',
  },
  fullDate: {
    dateStyle: 'full',
  },

  shortTime: {
    timeStyle: 'short',
  },
  mediumTime: {
    timeStyle: 'medium',
  },
  fullTime: {
    timeStyle: 'long',
  },
}

export function datePipe() {
  const formatDate = (
    date: Date | string | number,
    format: DateFormatType = 'medium',
    locale = 'fr-FR',
  ): string => {
    if (!date) return ''

    const options = FORMAT_MAP[format]

    return new Intl.DateTimeFormat(locale, options).format(new Date(date))
  }

  return { formatDate }
}
