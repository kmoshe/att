import {Component, OnDestroy, OnInit} from '@angular/core';
import {ColorService} from './services/color.service';
import { Color } from './models/Color';
import { Observable  } from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenValueValidator} from './shared/forbidden-value.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ATT';
  colorForm: FormGroup;
  userColor: Color;
  color$: Observable<Color>;

  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.color$.subscribe(uc => {
      this.userColor = uc;
    });

    this.colorForm = new FormGroup({
      color: new FormControl(this.userColor.hex, [
        Validators.required,
        Validators.minLength(3),
        forbiddenValueValidator(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/)
      ])
    });
  }

  constructor(public service: ColorService) {
    this.color$ = this.service.getColor();
  }

  updateColor() {
    if (!this.colorForm.invalid) {
      this.service.update(this.colorForm.value.color);
    } 
  }
}
