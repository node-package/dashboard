import {Component, View, ElementRef, Input} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS, Http, RequestOptions, Request, Response, RequestMethod} from 'angular2/http';

import {ToClassPipe} from '../../../../common/pipe/atexo.pipe';

import {PanelBodyEditorProvider} from './providers/panel-body-editor.provider';

import {Note} from './entitys/note.entity';

@Component({
    selector: 'panel-body-editor',
    providers: [PanelBodyEditorProvider]

    //inputs: ['panelObj']
})

@View({
    template: `
            <div class="panel-body-editor-wrap {{ panelBodyObj.type.category | toClass }}">

                <ul class="list-unstyled notes note-list">
                    <li *ngFor="#note of notes; #i=index">

                        <article class="note note-item">

                            <ul class="overlay-options options top">

                                <li *ngIf="note.editing">
                                    <a href="#"
                                       title="Enregistrer"
                                       class="btn option option-item"
                                       (click)="save(note)">
                                        <i class="fa fa-check"></i>
                                    </a>
                                </li>
                                <li *ngIf="note.editing">
                                    <a href="#"
                                       title="Annuler"
                                       class="btn option option-item"
                                       (click)="cancel(note)">
                                        <i class="fa fa-close"></i>
                                    </a>
                                </li>

                                <li *ngIf="!note.editing">
                                    <a href="#"
                                       title="Modifier"
                                       class="btn option option-item"
                                       (click)="edit(note)">
                                        <i class="fa fa-pencil"></i>
                                    </a>
                                </li>
                            </ul>

                            <div class="editor-view" *ngIf="!note.editing" (click)="ondblclick(note)">
                                {{ note.data.content }}
                            </div>

                            <div class="editor-textarea" *ngIf="note.editing">
                                <textarea class="textarea"
                                          [(ngModel)]="note.draft"
                                          (keyup.escape)="cancel(note)"
                                          (keyup.enter)="save(note)"></textarea>
                            </div>

                        </article>

                    </li>
                </ul>

                <a href="" class="atexoui-link center add" (click)="add()" *ngIf="false">Ajouter une note</a>

            </div>
            `,
    pipes: [ToClassPipe]

})
export class PanelBodyEditor {

    @Input() panelBodyObj;
    panelBodyEditorProvider:PanelBodyEditorProvider;
    notes:Array<Note>;
    editBoolean:boolean = false;
    editorTextarea:string;
    private _milliseconds:number = 100;

    constructor(panelBodyEditorProvider:PanelBodyEditorProvider) {
        this.panelBodyEditorProvider = panelBodyEditorProvider;
        this.notes = [];
    }

    ngOnInit() {
        this.panelBodyEditorServiceGet(this.panelBodyObj.urlData);
        return true;
    }

    panelBodyEditorServiceGet(url) {

        this.panelBodyEditorProvider.get(url).subscribe((res:Response) => {

            if (res.status === 200) {
                //this.notes = res.json();

                res.json().forEach((obj) => {
                    this.notes.push(new Note(obj, obj.content));
                });
            }

        });
    }

    ondblclick(note:Note) {
        this.edit(note);
        return false;
    }

    cancel(note:Note) {
        note.editing = false;
        /*let _timeOut:any, _milliseconds:number = this._milliseconds;
         clearTimeout(_timeOut);
         _timeOut = setTimeout(() => {
         note.editing = false;
         }, _milliseconds);*/

        return false;
    }

    edit(note:Note) {
        note.editing = true;
        return false;
    }

    save(note:Note) {
        note.data['content'] = note.draft;
        note.editing = false;
        return false;
    }

    remove(note:Note) {
        return false;
    }

    add() {
        return false;
    }

}