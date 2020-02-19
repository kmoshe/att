import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Color} from '../models/Color';
import { Observable } from 'rxjs';

@Injectable()
export class ColorService {

  colorSubject: BehaviorSubject<Color> = new BehaviorSubject<Color>({ hex: '#fff' });
  color$: Observable<Color> = this.colorSubject.asObservable();

  update(value: string) {
    if (value.length < 4 || value.length > 7) {
      return 'Value is not in the required length';
    }
    if (value[0] !== '#') { value = '#' + value; }
    const regex = new RegExp(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
    if (regex.test(value)) {
      const color = {hex: value} as Color;
      this.colorSubject.next(color);
      return '';
    }
    return 'Value is not a hexadecimal number';
  }
}
