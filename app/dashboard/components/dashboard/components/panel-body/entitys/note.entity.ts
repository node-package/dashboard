import {isPresent} from 'angular2/src/facade/lang';
export class Note {
    completed:Boolean;
    editing:Boolean;
    deleted:Boolean;
    draft:string;

    noteObject:NoteObject;

    private _data:Object;

    get data() {
        return this._data;
    }

    set data(value:Object) {
        this._data = value;
    }

    constructor(obj:Object, draft?:string) {
        this.completed = false;
        this.editing = false;
        this.deleted = false;
        this.draft = draft;
        this.data = obj;
    }

}

interface NoteObject {
    id: number;
    title: string;
    date: string;
    content: string;
}