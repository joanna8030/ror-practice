describe('iconFormat filter', function() {
  var $filter;

  beforeEach(module('stockApp'));
  beforeEach(angular.mock.inject(function(_$filter_) {
    $filter = _$filter_;
  }));

  it('returns correct result when given number is > 0', function() {
    var iconFormat = $filter('iconFormat');
    expect(iconFormat(0.2)).toEqual('▲0.2');
  });

  it('returns correct result when given number is < 0', function() {
    var iconFormat = $filter('iconFormat');
    expect(iconFormat(-0.2)).toEqual('▼0.2');
  });

  it('returns correct result when given number equals 0', function() {
    var iconFormat = $filter('iconFormat');
    expect(iconFormat(0)).toEqual(0);
  });
});
