export interface IComponentProps {
    visibility: boolean;
    setVisibility: Function;
    type: TDrawerType;
    selectedKitchenData: any
}

export type TDrawerType = "create" | "update"