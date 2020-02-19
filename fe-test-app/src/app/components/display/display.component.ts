import { Component } from "@angular/core";
import { ColorService } from 'src/app/services/color.service';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.scss']
}) 
export class DisplayComponent {
    constructor(public service: ColorService) {
    }
}