"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWithDates = parseWithDates;
const CalendarDate_1 = require("./CalendarDate");
const DATE_REG_EXP = /^(\d{4})-(\d{2})-(\d{2})$/;
const DATE_TIME_REG_EXP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseWithDates(text) {
    return JSON.parse(text, (_key, value) => {
        if (typeof value !== 'string') {
            return value;
        }
        const dateMatch = value.match(DATE_REG_EXP);
        if (dateMatch) {
            const [, year, month, day] = dateMatch;
            return new CalendarDate_1.CalendarDate(Number(year), Number(month), Number(day));
        }
        if (DATE_TIME_REG_EXP.test(value)) {
            return new Date(value);
        }
        return value;
    });
}
//# sourceMappingURL=json.js.map