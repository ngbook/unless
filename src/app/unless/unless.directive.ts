import {
    Directive, TemplateRef, ElementRef, OnInit,
    ViewContainerRef, Input, ViewChild
} from '@angular/core';

@Directive({
    selector: '[unless]'
})
export class UnlessDirective implements OnInit {

    private hasView: boolean;

    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) {}

    @Input()
    set unless(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(
                this.templateRef);
            this.hasView = true;
        } else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }

    ngOnInit() {
        console.log(this.templateRef.elementRef);
    }
}
