import { Component } from "@angular/core";
import { ColorService } from 'src/app/services/color.service';
import { Color } from '../../models/Color';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
}) 
export class DisplayComponent {

    color$: Observable<Color>;
    
    constructor(public service: ColorService) {
        this.color$ = this.service.getColor();
    }
}