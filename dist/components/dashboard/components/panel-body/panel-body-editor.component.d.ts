import { PanelBodyEditorProvider } from './providers/panel-body-editor.provider';
import { Note } from './entitys/note.entity';
export declare class PanelBodyEditor {
    panelBodyObj: any;
    panelBodyEditorProvider: PanelBodyEditorProvider;
    notes: Array<Note>;
    editBoolean: boolean;
    editorTextarea: string;
    private _milliseconds;
    constructor(panelBodyEditorProvider: PanelBodyEditorProvider);
    ngOnInit(): boolean;
    panelBodyEditorServiceGet(url: any): void;
    ondblclick(note: Note): boolean;
    cancel(note: Note): boolean;
    edit(note: Note): boolean;
    save(note: Note): boolean;
    remove(note: Note): boolean;
    add(): boolean;
}
