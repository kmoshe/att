import {ColorService} from '../app/services/color.service';
describe('ColorService', () => {
  let service: ColorService;
  beforeEach(() => { service = new ColorService(); });

  it('#update should return min length not met', () => {
    expect(service.update('r')).toBe('Value is not in the required length');
  });

  it('#update should return empty', () => {
    expect(service.update('#ddd')).toBe('');
  });

  it('color$ should return value from observable',
    (done: DoneFn) => {
      service.color$.subscribe(color => {
        expect(color).toEqual({ hex: '#fff'});
        done();
      });
    });
});
