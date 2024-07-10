export class CalendarDate {
  static parse(string: string): CalendarDate | undefined {
    const match = string.match(/^(\d{4})-(\d{2})-(\d{2})$/);

    if (match) {
      const [, year, month, day] = match;

      return new CalendarDate(Number(year), Number(month), Number(day));
    } else {
      return undefined;
    }
  }

  constructor(
    public year: number,
    public month: number,
    public day: number
  ) {}

  toUTCDate(): Date {
    return new Date(this.year, this.month, this.day);
  }
}
