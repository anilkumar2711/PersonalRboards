import iconProvider from "./icon.provider";
import moment from 'moment';
import methodProvider from "./method.provider";
export default {
    icons: iconProvider,
    methods:methodProvider,
    date:(value)=>{
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
        }
        return new ExtededDate(value);
    },
    string:(value)=>{
        class ExtendedString extends String {
            toProfile(num=2) {
                let name = value;
                if (!name || typeof name !== "string") {
                    return "";
                }
                const words = name.trim().split(/\s+/);
                const initials = words.map(word => word[0].toUpperCase()).slice(0, num);
                return initials.join("");
            }
        }
        return new ExtendedString(value);
    }
}