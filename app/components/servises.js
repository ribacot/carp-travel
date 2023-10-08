export const firstLetterUp = (text) => text.charAt(0).toUpperCase() + text.slice(1)

export const allFirstLetterUp = (text) => text.split(" ").map(el=>firstLetterUp(el)).join(" ")