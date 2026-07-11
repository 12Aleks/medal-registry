type FormatDateOptions = {
    isoDate: string | Date;
    day?: Intl.DateTimeFormatOptions['day'];
    month?: Intl.DateTimeFormatOptions['month'];
    year?: Intl.DateTimeFormatOptions['year'];
    hour?: Intl.DateTimeFormatOptions['hour'];
    minute?: Intl.DateTimeFormatOptions['minute'];
};

export const formatDate = ({isoDate, day, month, year, hour, minute}: FormatDateOptions): string => {
    const date = new Date(isoDate);

    return new Intl.DateTimeFormat('en-En', {
        day,
        month,
        year,
        hour,
        minute,
    }).format(date);
};


