describe('searchFormDirective', function() {
  var $compile;
  var $rootScope;
  var element;
  var $filter;

  beforeEach(module('templates'));
  beforeEach(module('stockApp'));

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_, _$filter_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.stocks = [{
      rank: 1,
      stock_code: '9999',
      stock_name: 'Datong',
      opening_price: 25.00,
      highest_price: 26.45,
      lowest_price: 25.00,
      ytd_closing_price: 24.05,
      closing_price: 26.45,
      turnover: 73773,
      change: '-2.40',
      change_range: '9.98',
    }];

    element = $compile('<stock-table stocks=stocks sortType="rank" sortReverse="false"><stock-table>')($rootScope);
    $rootScope.$digest();

    $filter = _$filter_;
  }));

  it('has following title', function() {

    expect(element.find('table').attr('class')).toBe('table');
    expect(element.find('thead').text()).toContain('排名');
    expect(element.find('thead').text()).toContain('代號');
    expect(element.find('thead').text()).toContain('名稱');
    expect(element.find('thead').text()).toContain('開盤價');
    expect(element.find('thead').text()).toContain('最高價');
    expect(element.find('thead').text()).toContain('最低價');
    expect(element.find('thead').text()).toContain('昨收盤');
    expect(element.find('thead').text()).toContain('今收盤');
    expect(element.find('thead').text()).toContain('成交量');
    expect(element.find('thead').text()).toContain('漲跌');
    expect(element.find('thead').text()).toContain('漲跌幅');
  });

  it('shows correct data', function() {
    var number = $filter('number');
    var iconFormat = $filter('iconFormat');

    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].rank);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].stock_code);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].stock_name);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].opening_price);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].highest_price);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].lowest_price);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].ytd_closing_price);
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].closing_price);
    expect(element.find('tr').eq(1).text()).toContain(number($rootScope.stocks[0].turnover));
    expect(element.find('tr').eq(1).text()).toContain(iconFormat($rootScope.stocks[0].change));
    expect(element.find('tr').eq(1).text()).toContain($rootScope.stocks[0].change_range + '%');
  });
});
