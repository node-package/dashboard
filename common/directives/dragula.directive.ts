import {
    Directive,
    Input,
    ElementRef,
    OnInit,
    OnChanges,
    SimpleChange
} from 'angular2/core';
import {DragulaService} from '../providers/dragula.provider';

declare var dragula: any;

@Directive({
    selector: '[dragula]',
    providers: [DragulaService]
})
export class DragAndDropDirective {
    @Input('dragula') bag: string;
    @Input() dragulaModel:string;
    private container:any;
    private drake:any;
    private dragulaService:DragulaService;

    constructor(private el:ElementRef, dragulaService:DragulaService) {
        this.container = el.nativeElement;
        this.dragulaService = dragulaService;
    }

    ngOnInit() {
        console.log(this.bag);
        let bag = this.dragulaService.find(this.bag);
        let checkModel = () => {
            if (this.dragulaModel) {
                if (this.drake.models) {
                    this.drake.models.push(this.dragulaModel);
                } else {
                    this.drake.models = [this.dragulaModel];
                }
            }
        };

        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }


        return true;
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes['dragulaModel']) {
            if (this.drake) {
                if (this.drake.models) {
                    let modelIndex = this.drake.models.indexOf(changes['dragulaModel'].previousValue);
                    this.drake.models.splice(modelIndex, 1, changes['dragulaModel'].currentValue);
                } else {
                    this.drake.models = [changes['dragulaModel'].currentValue];
                }
            }
        }
    }

}