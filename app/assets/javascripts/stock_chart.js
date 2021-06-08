var startDate;
var endDate;

// SAMPLE DATABASE QUERY
// {
//     "users": [
//         {
//             "name": "name",
//             "transaction_log": [
//                 {
//                     "ticker":"AAPL",
//                     "type": "buy",
//                     "date": 20140212,
//                     "shares": 25,
//                 },
//                 {
//                     "ticker":"MSFT",
//                     "type": "buy",
//                     "date": 20150212,
//                     "shares": 12,
//                 }
//             ]
//         }
//     ]
// }

//this function creates a chart replacing the div id #performance 
$(function() {
    var Aladdin = new blk.API();
    Aladdin.portfolioAnalysis({
      positions: 'MSFT~50|AAPL~50|',
      filter: 'countryCode:US',
    }, function(data) {
      var portfolio = data.resultMap.PORTFOLIOS[0].portfolios[0];
      $('#performance').highcharts('StockChart', {
        rangeSelector: {
          selected: 5
        },
        series: [{
          name: 'Portfolio',
          data: portfolio.returns.performanceChart.map(function(point) {
            return [point[0], point[1] * 10000]
          }),
          tooltip: {
            valueDecimals: 2
          }
        }]
      });
    });
  });

