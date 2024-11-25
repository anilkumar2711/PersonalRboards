import moment from 'moment';
export default function(value) {
    class ExtededDate extends Date {
        toDbTimestamp() {
            return this.toISOString();
        }
        toDbDate() {
            return this.toDbTimestamp().split("T")[0];
        }
        moment(format="DD/MM/YYYY") {
            return moment(this, format);
        }
        toHumanString(format="DD/MM/YYYY") {
            const parsedDate = this.moment(format);
            return parsedDate.format("MMM D YYYY");
        }
        duration(end,trunk=2) {
            let startDate = new ExtededDate(this.toDbDate()).moment();
            let endDate = new ExtededDate((new ExtededDate(end)).toDbDate()).moment();
            let diff = startDate.diff(endDate);
            let duration = moment.duration(Math.abs(diff));
            let arr = [
                {
                    name: "years",
                    short: "Y",
                    value: duration.years(),
                },
                {
                    name: "months",
                    short: "M",
                    value: duration.months(),
                },
                {
                    name: "days",
                    short: "d",
                    value: duration.days(),
                },
                {
                    name: "hours",
                    short: "h",
                    value: duration.hours(),
                },
                {
                    name: "minutes",
                    short: "mi",
                    value: duration.minutes(),
                },
                {
                    name: "seconds",
                    short: "s",
                    value: duration.seconds(),
                },
            ];
            return arr.filter(o=>o.value).map(o=>o.value+" "+o.name).splice(0,trunk||arr.length).join(' , ');
        }
    }
    return new ExtededDate(value);
}