export interface IComponentProps {
    visibility: boolean;
    setVisibility: Function;
    type: TDrawerType;
    selectedRecordData: any
}

export type TDrawerType = "create" | "update"