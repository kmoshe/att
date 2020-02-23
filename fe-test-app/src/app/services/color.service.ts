import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Color} from '../models/Color';
import { Error } from '../models/Error';
import { Result } from '../models/Result';
import { Observable } from 'rxjs';

@Injectable()
export class ColorService {

  colorSubject: BehaviorSubject<Color> = new BehaviorSubject<Color>({ hex: '#fff' });

  getColor() {
    return this.colorSubject.asObservable();
  }

  update(value: string) {
    let res = <Result>{};
    if (value.length < 3 || value.length >= 8) {
      let err = <Error>{
        code: 500, 
        text: 'Value is not in the required length' 
      };
      res.error = err;
      res.statusCode = 500; 
      return res;
    }
    if (value[0] !== '#') { value = '#' + value; }
    const regex = new RegExp(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/);
    if (regex.test(value)) {
      const color = {hex: value} as Color;
      this.colorSubject.next(color);
      res.color = color;
      res.statusCode = 200;
      return res;
    }
    let err = <Error>{
      code: 500,
      text: 'Value is not a hexadecimal number' 
    };
  }
}
