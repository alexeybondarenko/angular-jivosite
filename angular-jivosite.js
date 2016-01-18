'use strict';

angular.module('jivosite', []).provider('$jivosite', function () {

  function init (widgetId) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//code.jivosite.com/script/widget/'+widgetId;

    var ss = document.getElementsByTagName('script')[0];
    ss.parentNode.insertBefore(s, ss);
  }
  return {
    id: null,
    $get: ['$log', function ($log) {
      if (!this.id) {
        $log.warn('Undefined id of jivosite widget');
        return;
      }
      init (this.id);
    }]
  }
}).run(function ($jivosite) {});
