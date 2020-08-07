import * as fromData from './data.actions';

describe('loadDatas', () => {
  it('should return an action', () => {
    expect(fromData.loadAnimalData().type).toBe('[Data] Load Datas');
  });
});
