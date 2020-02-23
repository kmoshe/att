import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColorService} from '../../services/color.service';
import { Color } from '../../models/Color';
import { Observable  } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenValueValidator} from '../../shared/forbidden-value.directive';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  title = 'ATT';
  colorForm: FormGroup;
  userColor: Color;
  color$: Observable<Color>;

  constructor(public service: ColorService) { 
    this.color$ = this.service.getColor();
    this.color$.subscribe(uc => {
      this.userColor = uc;
      if (typeof this.colorForm !== 'undefined') {
        this.colorForm.get('color').setValue(this.userColor.hex);
      }
    });

    this.colorForm = new FormGroup({
      color: new FormControl(this.userColor.hex, [
        Validators.required,
        Validators.minLength(3),
        forbiddenValueValidator(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)
      ])
    });
  }

  updateColor() {
    if (!this.colorForm.invalid) {
      this.service.update(this.colorForm.value.color);
    }
  }
}
