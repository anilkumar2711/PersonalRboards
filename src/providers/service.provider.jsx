import iconProvider from "./icon.provider";
import methodProvider from "./method.provider";
import dateProvider from "./date.provider";
export default {
    icons: iconProvider,
    methods:methodProvider,
    date:dateProvider,
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
            toTitleCase() {
                return value
                    .replace(/[_-]/g, ' ') // Replace underscores and hyphens with spaces
                    .split(' ')           // Split the string into words
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
                    .join(' ');           // Join the words back into a single string
            }
        }
        return new ExtendedString(value);
    }
}