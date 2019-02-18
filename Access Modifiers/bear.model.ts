import { Animal } from './animal.model';

export class Bear extends Animal{
    public claws: number;
    readonly name: string;
    private tail: boolean;
    
    constructor(data?: any) {
        super(data);
        this.claws = data.claws;
        this.name = data.name;
        this.tail = data.tail;
    }
}
