"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarDate = void 0;
class CalendarDate {
    constructor(
    // eslint-disable-next-line no-unused-vars
    year, 
    // eslint-disable-next-line no-unused-vars
    month, 
    // eslint-disable-next-line no-unused-vars
    day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
    toUTCDate() {
        return new Date(this.year, this.month, this.day);
    }
}
exports.CalendarDate = CalendarDate;
//# sourceMappingURL=CalendarDate.js.map