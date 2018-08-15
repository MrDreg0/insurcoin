(function() {
  var _id = "711f8856db7fa5ceaffa19a6315a5719";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write("<div id='timer" + _id + "' style='min-width:432px;height:67px;'></div>");
  var _t = document.createElement("script");
  _t.src = "http://megatimer.ru/timer/timer.min.js";
  var _f = function(_k) {
      var l = new MegaTimer(_id, {
          "view": [1, 1, 1, 1],
          "type": {
              "currentType": "1",
              "params": {
                  "usertime": true,
                  "tz": "3",
                  "utc": 1535760000000
              }
          },
          "design": {
              "type": "text",
              "params": {
                  "number-font-family": {
                      "family": "ProximaNova"
                  },
                  "number-font-size": "45",
                  "number-font-color": "#ffffff",
                  "separator-margin": "10",
                  "separator-on": false,
                  "separator-text": ":",
                  "text-on": true,
                  "text-font-family": {
                      "family": "ProximaNova"
                  },
                  "text-font-size": "22",
                  "text-font-color": "#307ed3"
              }
          },
          "designId": 1,
          "theme": "white",
          "width": 432,
          "height": 67
      });
      if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function() {
      if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);