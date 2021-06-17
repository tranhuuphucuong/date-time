import { format as formatOriginal, startOfDay, endOfDay } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime, format as formattz } from 'date-fns-tz';
import { enGB, fi } from 'date-fns/locale'

const locale = {
  'en-GB': enGB,
  'fi-FI': fi
}

export const format = (date: Date | number, format: string, options?: any) => {
  return formatOriginal(date, format, {
    ...options,
    locale: enGB
  })
}

export const formatToTimeZone = (date: any, formatStr: any, options: any) => {
  return formattz(utcToZonedTime(date, options.timeZone), formatStr, {
    ...options,
    locale: enGB
  });
};

const timezoneHelper = (dateFnsFn: any, date: any, tz: any) => {
  const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return zonedTimeToUtc(
    formatOriginal(
      dateFnsFn(
        zonedTimeToUtc(
          formatToTimeZone(date, 'yyyy-MM-dd HH:mm:ss', { timeZone: tz }),
          localTimezone
        )
      ),
      'yyyy-MM-dd HH:mm:ss'
    ),
    tz
  );
};
export const startOfDaytz = (date: Date | number, tz: string) => {
  return timezoneHelper(startOfDay, date, tz);
};
export const endOfDaytz = (date: Date | number, tz: string) => {
  return timezoneHelper(endOfDay, date, tz);
};
export const isSameDaytz = (dateLeft: number | Date, dateRight: number | Date, tz: string) => {
  if (startOfDaytz(dateLeft, tz).getTime() === startOfDaytz(dateRight, tz).getTime()) {
    return true;
  } else {
    return false;
  }
};

// (window as any).tzh = {
//   formatToTimeZone,
//   timezoneHelper,
//   startOfDaytz,
//   endOfDaytz,
//   isSameDaytz
// }