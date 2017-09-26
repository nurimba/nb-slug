var nbSlugPath = 'lib/nb-slug';
var dictPath = 'lib/diacritics';
jest.dontMock(nbSlugPath);
jest.dontMock(dictPath);

describe('nbSlug', function () {
  var nbSlug;

  beforeEach(function () {
    nbSlug = require(nbSlugPath);
  });

  it('should is defined', function () {
    expect(nbSlug).toBeDefined();
  });

  it('should replace blank spaces', function () {
    var slug = nbSlug('first                  string');
    var expected = 'first-string';
    expect(slug).toBe(expected);
  });

  it('should replace scores', function () {
    var expected = 'second-string';
    var scoreStr = [
      'second-string',
      'second--string',
      'second---string',
      'second----string',
      'second-----string',
      'second------string'
    ];

    for (var i = 0; i < scoreStr.length; ++i) {
      var slug = nbSlug(scoreStr[i]);

      expect(slug).toBe(expected);
    }
  });

  it('should replace accents', function () {
    var slug = nbSlug('other áéíóúńñãõçâîôû string');
    var expected = 'other-aeiounnaocaiou-string';
    expect(slug).toBe(expected);
  });

  it('should replace underscore', function () {
    var slug = nbSlug('other_string');
    var expected = 'other-string';
    expect(slug).toBe(expected);
  });

  it('should ignore last trance', function () {
    var slug = nbSlug('other  string -');
    var expected = 'other-string';
    expect(slug).toEqual(expected);
  });

  it('should ignore first trance', function () {
    var slug = nbSlug('- other  string');
    var expected = 'other-string';
    expect(slug).toBe(expected);
  });

  it('should replace to lowercase', function () {
    expect(nbSlug('OTHER ÁÉÍÓÚŃÑÃÕÇÂÎÔÛ STRING')).toBe('other-aeiounnaocaiou-string');
  });

  it('should ignore accents', function () {
    var slug = nbSlug('MY STRING ÁÉÍÓ_ al}^ ?}^{    ((    ))}    dirty and  now ÚŃÑÃÕÇÂÎÔÛ STRING clear');
    var expected = 'my-string-aeio-al-dirty-and-now-unnaocaiou-string-clear';
    expect(slug).toBe(expected);
  });
});
