import { IReMenuItems } from "../reusable-antd-components/Interfaces/ReComponents.interface";

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

export function formatTime(date: Date, use24HourFormat?: boolean): string {
    date = new Date(date);
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();

    if (use24HourFormat) {
        let hoursStr: string = hours < 10 ? '0' + hours : hours.toString();
        let minutesStr: string = minutes < 10 ? '0' + minutes : minutes.toString();
        return `${hoursStr}:${minutesStr}`;
    } else {
        let ampm: string = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let minutesStr: string = minutes < 10 ? '0' + minutes : minutes.toString();
        return `${hours}:${minutesStr} ${ampm}`;
    }
}

export function formatDate(date: Date) {
    date = new Date(date)
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
}

export const filterProtectedMenuItems = (items: Array<IReMenuItems>, auth: any): Array<IReMenuItems> => {
    if (auth) {
        return items
    }
    return items.filter(item => {
        if (item.protected) {
            return false;
        }
        if (item.children) {
            item.children = filterProtectedMenuItems(item.children, auth);
            if (item.children.length === 0) {
                return false;
            }
        }
        return true;
    });
};

export function isCurrentTimeInRange(startTime: string, endTime: string): boolean {
    const now: Date = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [endHours, endMinutes] = endTime.split(':').map(Number);

    const currentTimeInMinutes = currentHours * 60 + currentMinutes;
    const startTimeInMinutes = startHours * 60 + startMinutes;
    const endTimeInMinutes = endHours * 60 + endMinutes;

    return currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes;
}


