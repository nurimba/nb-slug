var nbSlugPath = '../../lib/nb-slug';
jest.dontMock(nbSlugPath);

describe('nbSlug', function() {
  var nbSlug;

  beforeEach(function() {
    nbSlug = require(nbSlugPath);
  });

  it ('nbSlug is defined', function() {
    expect(nbSlug).toBeDefined();
  });
});
