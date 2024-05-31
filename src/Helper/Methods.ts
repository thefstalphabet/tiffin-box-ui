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

export function formatTime(date: Date): string {
    date = new Date(date)

    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    let seconds: number = date.getSeconds();

    let minutesStr: string = minutes < 10 ? '0' + minutes : minutes.toString();
    let secondsStr: string = seconds < 10 ? '0' + seconds : seconds.toString();

    return `${hours}:${minutesStr}:${secondsStr}`;
}
