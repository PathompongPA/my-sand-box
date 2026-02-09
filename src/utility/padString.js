export default function padString(value, maxLength) {
    return String(value).padStart(maxLength, "0")
};
