import { Maybe } from './maybe';

describe('Maybe', () => {
  it('should map null into nothing', () => {
    expect(Maybe.fromNullable(null)).toEqual(Maybe.nothing());
  });

  it('should map undefined into nothing', () => {
    expect(Maybe.fromNullable(undefined)).toEqual(Maybe.nothing());
  });

  it('should map undefined into nothing', () => {
    expect(Maybe.fromNullable(undefined)).toEqual(Maybe.nothing());
  });

  it('should wrap values from nullable', () => {
    expect(Maybe.fromNullable('test').getOrElse(null)).toEqual('test');
  });

  it('should transform wrapped values', () => {
    expect(Maybe.fromNullable('test').map((x) => 1)).toEqual(Maybe.of(1));
  });

  it('should not transform nothing', () => {
    expect(Maybe.nothing().map((x) => 1)).toEqual(Maybe.nothing());
  });

  it('should apply default when unwrapping nothing', () => {
    expect(Maybe.fromNullable(null).getOrElse({})).toEqual({});
  });

  it('should not apply default when unwrapping just', () => {
    expect(Maybe.of(1).getOrElse(0)).toEqual(1);
  });

  it('should not apply default when unwrapping just', () => {
    expect(Maybe.fromNullable(1).getOrElse(0)).toEqual(1);
  });

  it('should chain operations', () => {
    expect(Maybe.fromNullable(1).chain(() => Maybe.of(2))).toEqual(Maybe.of(2));
  });

  it('should fall through when chaining a nothing', () => {
    expect(Maybe.nothing().chain(() => Maybe.of(2))).toEqual(Maybe.nothing());
  });

  it('should contain the wrapped value', () => {
    expect(Maybe.of(1).value).toEqual(1);
  });

  it('should identify nothing', () => {
    expect(Maybe.nothing().isNothing).toBeTrue();
  });

  it('should identify just', () => {
    expect(Maybe.of(1).isJust).toBeTrue();
  });

  it('should throw an error when value of nothing is selected', () => {
    expect(() => Maybe.nothing().value).toThrow();
  });

  it('should leave values that match a filter untouched', () => {
    expect(Maybe.of(1).filter((x) => x > 0)).toEqual(Maybe.of(1));
  });

  it('should transform values that do not meet a filter into nothing', () => {
    expect(Maybe.of(1).filter((x) => x < 0)).toEqual(Maybe.nothing());
  });

  describe('Base Maybe class', () => {
    it('should reject its map implementation', () => {
      expect(() => new Maybe().map((x) => 1)).toThrow();
    });

    it('should reject its getOrElse implementation', () => {
      expect(() => new Maybe().getOrElse({})).toThrow();
    });

    it('should reject its chain implementation', () => {
      expect(() => new Maybe().chain(() => Maybe.of(1))).toThrow();
    });

    it('should reject its filter implementation', () => {
      expect(() => new Maybe().filter((x) => x > 0)).toThrow();
    });

    it('should not be a just', () => {
      expect(new Maybe().isJust).toBeFalse();
    });

    it('should not be a nothing', () => {
      expect(new Maybe().isNothing).toBeFalse();
    });

    it('should throw an error if its value is read', () => {
      expect(() => new Maybe().value).toThrow();
    });
  });
});
