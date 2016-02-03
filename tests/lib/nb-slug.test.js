var nbSlugPath = '../../lib/nb-slug';
jest.dontMock(nbSlugPath);

describe('nbSlug', function() {
  var nbSlug;

  beforeEach(function() {
    nbSlug = require(nbSlugPath);
  });

  it ('should is defined', function() {
    expect(nbSlug).toBeDefined();
  });

  it ('should replace blank spaces', function() {
    var slug = nbSlug('first                  string');
    var expected = 'first-string';
    expect(nbSlug).toBeDefined(nbSlug);
  });

  it ('should replace scores', function() {
    var slug = nbSlug('second --- string');
    var expected = 'second-string';
    expect(nbSlug).toBeDefined(expected);
  });

  it ('should replace accents', function() {
    var slug = nbSlug('other áéíóúńñãõçâîôû string');
    var expected = 'other-aeiounnaocaiou-string';
    expect(nbSlug).toBeDefined(expected);
  });

  it ('should replace underscore', function() {
    var slug = nbSlug('other_string');
    var expected = 'other-aeiounnaocaiou-string';
    expect(nbSlug).toBeDefined(expected);
  });

  it ('should ignore last trance', function() {
    var slug = nbSlug('other  string -');
    var expected = 'other-string';
    expect(nbSlug).toBeDefined(expected);
  });

  it ('should replace to lowercase', function() {
    var slug = nbSlug('OTHER ÁÉÍÓÚŃÑÃÕÇÂÎÔÛ STRING');
    var expected = 'other-aeiounnaocaiou-string';
    expect(nbSlug).toBeDefined(expected);
  });
});
