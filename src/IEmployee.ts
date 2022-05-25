export interface IEmployeeObj {
    readonly name: string;
    readonly jobTitle: string;
    readonly boss: string;
    readonly salary: string;
}

export interface IEmployeeData {
    readonly employees: IEmployeeObj[];
}