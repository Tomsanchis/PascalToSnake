var assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('pascaltosnake', () => {
  it('should return TestController', () => {
    assert.equal(pascaltosnake("TestCcontroller"), "test_controller");
  });
  it('should return MovieAndBook', () => {
    assert.equal(pascaltosnake("MovieAndBook"), "movie_and_book");
  });
  it('should return App7Test', () => {
    assert.equal(pascaltosnake("App7Test"), "app7_test");
  });
  it('should return play-movie', () => {
    assert.equal(pascaltosnake("play-movie"), "play-movie");
  });
  it('should return Home', () => {
    assert.equal(pascaltosnake("Home"), "home");
  });
  it('should return \"1\"', () => {
    assert.equal(pascaltosnake("1"), "\"1\"");
  });
})