import {ColorService} from '../app/services/color.service';
describe('ColorService', () => {
  let service: ColorService;
  beforeEach(() => { service = new ColorService(); });

  it('#update should return min length not met', () => {
    expect(service.update('r').statusCode).toBe(500);
  });

  it('#update should return empty', () => {
    expect(service.update('#ddd').statusCode).toBe(200);
  });

  it('color$ should return value from observable',
    (done: DoneFn) => {
      service.getColor().subscribe(color => {
        expect(color).toEqual({ hex: '#fff'});
        done();
      });
    });
});
