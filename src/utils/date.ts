import { format, formatRelative } from 'date-fns';
import { cs } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
registerLocale('cs', cs);

export function formatDate(date: Date) {
  return format(date, 'd.M.yyyy', { locale: cs });
}

export function fromNow(date: Date, baseDate: Date) {
  return formatRelative(date, baseDate, { locale: cs });
}

export function monthsFormat(value: number) {
  let result;
  if (value == 1) {
    result = 'měsíc';
  } else if (value == 2 || value == 3 || value == 4) {
    result = 'měsíce';
  } else {
    result = 'měsíců';
  }
  return result;
}
