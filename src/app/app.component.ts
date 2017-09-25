
import {
  Component, TemplateRef, ViewChild,
  Input, AfterViewInit, ViewContainerRef
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    show = false;

    toggle() {
        this.show = !this.show;
    }
}
