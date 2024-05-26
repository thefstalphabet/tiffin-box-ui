export function capitalizeFirstLetter(word: string) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}