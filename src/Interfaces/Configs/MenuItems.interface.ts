export interface IMenuItems {
    key: string,
    label: string,
    icon: JSX.Element,
    path: string,
    children?: Array<{ key: string; label: string }>;
}