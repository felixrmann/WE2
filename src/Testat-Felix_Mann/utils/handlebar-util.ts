export const helpers = {
    // eslint-disable-next-line
    if_eq: function (a: any, b: any, opts: any): any {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    },

    dateFormat: function (date: string): string {
        if (!date) return 'Invalid Date';
        const someDate = new Date(date);
        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return someDate.toLocaleDateString(undefined, options);
    },

    isDone: function (value: string): boolean {
        if (!value) return false;
        return value === 'Done';
    },

    isNotDone: function (value: string): boolean {
        if (!value) return false;
        return value !== 'Done';
    },

    isNew: function (value: string): boolean {
        if (!value) return false;
        return value === 'true';
    },

    isNotNew: function (value: string): boolean {
        if (!value) return false;
        return value === 'false';
    },

    setSelected: function (value: string, noteValue: string): boolean {
        if (!value || !noteValue) return false;
        return noteValue === value;

    }
}
