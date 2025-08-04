export class Todo {
    id: number = -1;
    label: string = "";
    donne: TodoStatus = 0;
}

export enum TodoStatus {
	DRAFT = -1,
	PROCESS = 0,
    DONE = 1
}