describe('searchFormDirective', function() {
  var $compile;
  var $rootScope;
  var element;

  beforeEach(module('templates'));
  beforeEach(module('stockApp'));

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    element = $compile('<search-form></search-form>')($rootScope);
    $rootScope.$digest();
  }));

  it('replaces the element with the appropriate content', function() {

    expect(element.find('form').attr('name')).toBe('form');
    expect(element.find('form').attr('ng-submit')).toBe('vm.submitForm()');
    expect(element.text()).toContain('日期：');
    expect(element.find('input').eq(0).attr('ng-model')).toBe('vm.date');
    expect(element.text()).toContain('股票代號：');
    expect(element.find('input').eq(1).attr('ng-model')).toBe('vm.code');
    expect(element.find('input').eq(2).attr('type')).toBe('submit');
    expect(element.find('input').eq(2).attr('value')).toBe('搜尋');
  });
});
