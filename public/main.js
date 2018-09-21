/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var u;

var globals = {
  width: 0,
  height: 0,
  svg_dim: u,
  inner_padding: u,
  chart_dim: u,
  padding: 0,
  main_svg: u,
  carousel_svg: u,
  defs: u,
  userID: u,
  chart_g: u,
  carousel_g: u,
  appInsights: u,
  chart_instance: u,
  carousel_instance: u,
  year_indicator: u,
  all_data: u,  
  hideAddressBar: u,
  shuffle: u,
  consent_complete: u,
  introduction_complete: u,
  experiment_complete: u,
  test_override: u,  
  touch_value: u,
  suppress_touch_feedback: u,
  suppress_touch_val_feedback: u,
  last_pause: u,
  resumptions: u,
  non_interactive: u,
  last_tilt: u,
  scale_tilt_time: u,
  scale_tilt_selection: u,
  touching: u,
  carousel_touching: u,
  selection_tilt_array: u,
  time_tilt_array: u,
  time_tilt_enabled: u,
  tps: u, //tilt events per seconds
  tilt_counter: u,
  trial_index: u,
  max_trials: u,
  trials: u,
  trial_response: u,
  condition: u,
  lines: u,
  facets: u,
  animation: u,
  num_selected: u,
  outer_progress_circle: u,
  inner_progress_circle: u,
  param_x: 'Life Expectancy',
  param_y: 'GDP Per Capita',
  param_r: 'Population',
  param_yearMin: 1975,
  param_yearMax: 2000,
  highlighted_point: u,
  orientation_changed: u
};

test_override = false;
consent_complete = false;
introduction_complete = false;
experiment_complete = false;
resumptions = [];
suppress_touch_feedback = false;
suppress_touch_val_feedback = false;
time_tilt_enabled = false;
touch_value = null;
trial_index = -1;
max_trials = 0;
last_tilt = new Date();
tilt_counter = 0;
tps = 0;
touching = false;
carousel_touching = false;
trial_response = [];
num_selected = 0;
highlighted_point = "";
selection_tilt_array = [];
time_tilt_array = [];
orientation_changed = true;

/* jshint ignore:start */
appInsights = window.appInsights || function (config) {    
  function i(config) {
    t[config] = function() {
      var i = arguments;
      t.queue.push( function () {
        t[config].apply(t,i);
      });
    };
  }
  var t = {config:config},
      u = document,
      e = window,
      o = "script",
      s = "AuthenticatedUserContext",
      h = "start",
      c = "stop",
      l = "Track",
      a = l + "Event",
      v = l + "Page",
      y = u.createElement(o),
      r,
      f;
      y.src = config.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js";
      u.getElementsByTagName(o)[0].parentNode.appendChild(y);
      
      try{
        t.cookie=u.cookie;
      }
      catch(p){

      }
      for(t.queue = [],t.version="1.0",r=["Event","Exception","Metric","PageView","Trace","Dependency"]; r.length;)
        i("track"+r.pop());
      return i("set"+s),i("clear"+s),i(h+a),i(c+a),i(h+v),i(c+v),i("flush"),
      config.disableExceptionTracking || (r="onerror",i("_"+r),f=e[r],e[r] = function (config,i,u,e,o){
        var s=f&&f(config,i,u,e,o);
        return s!==!0&&t["_"+r](config,i,u,e,o),s;
      }),t;
}
({        
  instrumentationKey:"35044b0b-4cf4-4cce-9969-ebd62c94ac96"
});     

shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

hideAddressBar = function () {
  
  setTimeout(function(){
    // Hide the address bar!
		window.scrollTo(0, 1);
  }, 10);

  var lastTouchY = 0;
  
  var touchstartHandler = function(e) {
    if (e.touches.length != 1) return;
    lastTouchY = e.touches[0].clientY;
  };
  
  var touchmoveHandler = function(e) {
    var touchY = e.touches[0].clientY;
    var touchYDelta = touchY - lastTouchY;
    lastTouchY = touchY;

    e.preventDefault();
    return;
  };

  document.addEventListener('touchstart', touchstartHandler, {passive: false });
  document.addEventListener('touchmove', touchmoveHandler, {passive: false });

};

module.exports = globals;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org Version 4.9.1. Copyright 2017 Mike Bostock.
(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.d3 = global.d3 || {})));
}(this, (function (exports) { 'use strict';

var version = "4.9.1";

var ascending = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

var bisector = function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
};

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;

var pairs = function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
};

function pair(a, b) {
  return [a, b];
}

var cross = function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
};

var descending = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

var number = function(x) {
  return x === null ? NaN : +x;
};

var variance = function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
};

var deviation = function(array, f) {
  var v = variance(array, f);
  return v ? Math.sqrt(v) : v;
};

var extent = function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
};

var array = Array.prototype;

var slice = array.slice;
var map = array.map;

var constant = function(x) {
  return function() {
    return x;
  };
};

var identity = function(x) {
  return x;
};

var sequence = function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
};

var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);

var ticks = function(start, stop, count) {
  var reverse = stop < start,
      i = -1,
      n,
      ticks,
      step;

  if (reverse) n = start, start = stop, stop = n;

  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
};

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

var sturges = function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
};

var histogram = function() {
  var value = identity,
      domain = extent,
      threshold = sturges;

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = sequence(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisectRight(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
  };

  return histogram;
};

var threshold = function(values, p, valueof) {
  if (valueof == null) valueof = number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
};

var freedmanDiaconis = function(values, min, max) {
  values = map.call(values, number).sort(ascending);
  return Math.ceil((max - min) / (2 * (threshold(values, 0.75) - threshold(values, 0.25)) * Math.pow(values.length, -1 / 3)));
};

var scott = function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
};

var max = function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
};

var mean = function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
};

var median = function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return threshold(numbers.sort(ascending), 0.5);
};

var merge = function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
};

var min = function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
};

var permute = function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
};

var scan = function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = ascending;

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
};

var shuffle = function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
};

var sum = function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
};

var transpose = function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = min(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
};

function length(d) {
  return d.length;
}

var zip = function() {
  return transpose(arguments);
};

var slice$1 = Array.prototype.slice;

var identity$1 = function(x) {
  return x;
};

var top = 1;
var right = 2;
var bottom = 3;
var left = 4;
var epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : identity$1) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = range[0] + 0.5,
        range1 = range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : identity$1)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "#000"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "#000")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "#000")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter
            : "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter);

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = slice$1.call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : slice$1.call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : slice$1.call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

var namespace = function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name;
};

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

var creator = function(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
};

var nextId = 0;

function local$1() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local$1.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

var matcher$1 = matcher;

var filterEvents = {};

exports.event = null;

if (typeof document !== "undefined") {
  var element$1 = document.documentElement;
  if (!("onmouseenter" in element$1)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = exports.event; // Events can be reentrant (e.g., focus).
    exports.event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      exports.event = event0;
    }
  };
}

function parseTypenames$1(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

var selection_on = function(typename, value, capture) {
  var typenames = parseTypenames$1(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
};

function customEvent(event1, listener, that, args) {
  var event0 = exports.event;
  event1.sourceEvent = exports.event;
  exports.event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    exports.event = event0;
  }
}

var sourceEvent = function() {
  var current = exports.event, source;
  while (source = current.sourceEvent) current = source;
  return current;
};

var point = function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
};

var mouse = function(node) {
  var event = sourceEvent();
  if (event.changedTouches) event = event.changedTouches[0];
  return point(node, event);
};

function none() {}

var selector = function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
};

var selection_select = function(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

function empty$1() {
  return [];
}

var selectorAll = function(selector) {
  return selector == null ? empty$1 : function() {
    return this.querySelectorAll(selector);
  };
};

var selection_selectAll = function(select) {
  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
};

var selection_filter = function(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
};

var sparse = function(update) {
  return new Array(update.length);
};

var selection_enter = function() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
};

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

var constant$1 = function(x) {
  return function() {
    return x;
  };
};

var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

var selection_data = function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant$1(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
};

var selection_exit = function() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
};

var selection_merge = function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
};

var selection_order = function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
};

var selection_sort = function(compare) {
  if (!compare) compare = ascending$1;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
};

function ascending$1(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

var selection_call = function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
};

var selection_nodes = function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
};

var selection_node = function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
};

var selection_size = function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
};

var selection_empty = function() {
  return !this.node();
};

var selection_each = function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
};

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

var selection_attr = function(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
};

var defaultView = function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
};

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

var selection_style = function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
};

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

var selection_property = function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
};

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

var selection_classed = function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
};

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

var selection_text = function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
};

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

var selection_html = function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
};

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

var selection_raise = function() {
  return this.each(raise);
};

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

var selection_lower = function() {
  return this.each(lower);
};

var selection_append = function(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
};

function constantNull() {
  return null;
}

var selection_insert = function(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
};

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

var selection_remove = function() {
  return this.each(remove);
};

var selection_datum = function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
};

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

var selection_dispatch = function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
};

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  merge: selection_merge,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch
};

var select = function(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
};

var selectAll = function(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : selector], root);
};

var touch = function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = sourceEvent().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return point(node, touch);
    }
  }

  return null;
};

var touches = function(node, touches) {
  if (touches == null) touches = sourceEvent().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = point(node, touches[i]);
  }

  return points;
};

function nopropagation() {
  exports.event.stopImmediatePropagation();
}

var noevent = function() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
};

var dragDisable = function(view) {
  var root = view.document.documentElement,
      selection$$1 = select(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection$$1.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
};

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection$$1 = select(view).on("dragstart.drag", null);
  if (noclick) {
    selection$$1.on("click.drag", noevent, true);
    setTimeout(function() { selection$$1.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection$$1.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

var constant$2 = function(x) {
  return function() {
    return x;
  };
};

function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// Ignore right-click, since that should open the context menu.
function defaultFilter$1() {
  return !exports.event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: exports.event.x, y: exports.event.y} : d;
}

var drag = function() {
  var filter = defaultFilter$1,
      container = defaultContainer,
      subject = defaultSubject,
      gestures = {},
      listeners = dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection$$1) {
    selection$$1
        .on("mousedown.drag", mousedowned)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), mouse, this, arguments);
    if (!gesture) return;
    select(exports.event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    dragDisable(exports.event.view);
    nopropagation();
    mousemoving = false;
    mousedownx = exports.event.clientX;
    mousedowny = exports.event.clientY;
    gesture("start");
  }

  function mousemoved() {
    noevent();
    if (!mousemoving) {
      var dx = exports.event.clientX - mousedownx, dy = exports.event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    select(exports.event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(exports.event.view, mousemoving);
    noevent();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches$$1 = exports.event.changedTouches,
        c = container.apply(this, arguments),
        n = touches$$1.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches$$1[i].identifier, c, touch, this, arguments)) {
        nopropagation();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches$$1 = exports.event.changedTouches,
        n = touches$$1.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches$$1[i].identifier]) {
        noevent();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches$$1 = exports.event.changedTouches,
        n = touches$$1.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches$$1[i].identifier]) {
        nopropagation();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!customEvent(new DragEvent(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((exports.event.subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      customEvent(new DragEvent(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$2(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag) : subject;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
};

var define = function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
};

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex3 = /^#([0-9a-f]{3})$/;
var reHex6 = /^#([0-9a-f]{6})$/;
var reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$");
var reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$");
var reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$");
var reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$");
var reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$");
var reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;

var Kn = 18;
var Xn = 0.950470;
var Yn = 1;
var Zn = 1.088830;
var t0 = 4 / 29;
var t1 = 6 / 29;
var t2 = 3 * t1 * t1;
var t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * deg2rad;
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new Rgb(
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * rad2deg;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));

var A = -0.14861;
var B = +1.78277;
var C = -0.29227;
var D = -0.90649;
var E = +1.97294;
var ED = E * D;
var EB = E * B;
var BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * rad2deg - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * deg2rad,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

var basis$1 = function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

var basisClosed = function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
};

var constant$3 = function(x) {
  return function() {
    return x;
  };
};

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant$3(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$3(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$3(isNaN(a) ? b : a);
}

var interpolateRgb = ((function rgbGamma(y) {
  var color$$1 = gamma(y);

  function rgb$$1(start, end) {
    var r = color$$1((start = rgb(start)).r, (end = rgb(end)).r),
        g = color$$1(start.g, end.g),
        b = color$$1(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$$1.gamma = rgbGamma;

  return rgb$$1;
}))(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color$$1;
    for (i = 0; i < n; ++i) {
      color$$1 = rgb(colors[i]);
      r[i] = color$$1.r || 0;
      g[i] = color$$1.g || 0;
      b[i] = color$$1.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color$$1.opacity = 1;
    return function(t) {
      color$$1.r = r(t);
      color$$1.g = g(t);
      color$$1.b = b(t);
      return color$$1 + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);

var array$1 = function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
};

var date = function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
};

var reinterpolate = function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
};

var object = function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
};

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

var interpolateString = function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: reinterpolate(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
};

var interpolateValue = function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$3(b)
      : (t === "number" ? reinterpolate
      : t === "string" ? ((c = color(b)) ? (b = c, interpolateRgb) : interpolateString)
      : b instanceof color ? interpolateRgb
      : b instanceof Date ? date
      : Array.isArray(b) ? array$1
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : reinterpolate)(a, b);
};

var interpolateRound = function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
};

var degrees = 180 / Math.PI;

var identity$2 = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

var decompose = function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
};

var cssNode;
var cssRoot;
var cssView;
var svgNode;

function parseCss(value) {
  if (value === "none") return identity$2;
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return identity$2;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: reinterpolate(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: reinterpolate(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: reinterpolate(xa, xb)}, {i: i - 2, x: reinterpolate(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var rho = Math.SQRT2;
var rho2 = 2;
var rho4 = 4;
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
var interpolateZoom = function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    };
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    };
  }

  i.duration = S * 1000;

  return i;
};

function hsl$1(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = hsl(start)).h, (end = hsl(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hsl$2 = hsl$1(hue);
var hslLong = hsl$1(nogamma);

function lab$1(start, end) {
  var l = nogamma((start = lab(start)).l, (end = lab(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

function hcl$1(hue$$1) {
  return function(start, end) {
    var h = hue$$1((start = hcl(start)).h, (end = hcl(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hcl$2 = hcl$1(hue);
var hclLong = hcl$1(nogamma);

function cubehelix$1(hue$$1) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix$$1(start, end) {
      var h = hue$$1((start = cubehelix(start)).h, (end = cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix$$1.gamma = cubehelixGamma;

    return cubehelix$$1;
  })(1);
}

var cubehelix$2 = cubehelix$1(hue);
var cubehelixLong = cubehelix$1(nogamma);

var quantize = function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
};

var frame = 0;
var timeout = 0;
var interval = 0;
var pokeDelay = 1000;
var taskHead;
var taskTail;
var clockLast = 0;
var clockNow = 0;
var clockSkew = 0;
var clock = typeof performance === "object" && performance.now ? performance : Date;
var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow;
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, delay);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clockNow, interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

var timeout$1 = function(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
};

var interval$1 = function(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? now() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
};

var emptyOn = dispatch("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

var schedule = function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
};

function init(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
  return schedule;
}

function set$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
  return schedule;
}

function get$1(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return timeout$1(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    timeout$1(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

var interrupt = function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
};

var selection_interrupt = function(name) {
  return this.each(function() {
    interrupt(this, name);
  });
};

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set$1(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

var transition_tween = function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get$1(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
};

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set$1(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get$1(node, id).value[name];
  };
}

var interpolate$$1 = function(a, b) {
  var c;
  return (typeof b === "number" ? reinterpolate
      : b instanceof color ? interpolateRgb
      : (c = color(b)) ? (b = c, interpolateRgb)
      : interpolateString)(a, b);
};

function attrRemove$1(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS$1(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant$1(name, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrConstantNS$1(fullname, interpolate$$1, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value1);
  };
}

function attrFunction$1(name, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS$1(fullname, interpolate$$1, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$1(value00 = value0, value10 = value1);
  };
}

var transition_attr = function(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate$$1;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname)
      : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value + ""));
};

function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

var transition_attrTween = function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
};

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

var transition_delay = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get$1(this.node(), id).delay;
};

function durationFunction(id, value) {
  return function() {
    set$1(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set$1(this, id).duration = value;
  };
}

var transition_duration = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get$1(this.node(), id).duration;
};

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set$1(this, id).ease = value;
  };
}

var transition_ease = function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get$1(this.node(), id).ease;
};

var transition_filter = function(match) {
  if (typeof match !== "function") match = matcher$1(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
};

var transition_merge = function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
};

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set$1;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

var transition_on = function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get$1(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
};

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

var transition_remove = function() {
  return this.on("end.remove", removeFunction(this._id));
};

var transition_select = function(select$$1) {
  var name = this._name,
      id = this._id;

  if (typeof select$$1 !== "function") select$$1 = selector(select$$1);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select$$1.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get$1(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
};

var transition_selectAll = function(select$$1) {
  var name = this._name,
      id = this._id;

  if (typeof select$$1 !== "function") select$$1 = selectorAll(select$$1);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select$$1.call(node, node.__data__, i, group), child, inherit = get$1(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
};

var Selection$1 = selection.prototype.constructor;

var transition_selection = function() {
  return new Selection$1(this._groups, this._parents);
};

function styleRemove$1(name, interpolate$$2) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name),
        value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant$1(name, interpolate$$2, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value1);
  };
}

function styleFunction$1(name, interpolate$$2, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = styleValue(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), styleValue(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate$$2(value00 = value0, value10 = value1);
  };
}

var transition_style = function(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : interpolate$$1;
  return value == null ? this
          .styleTween(name, styleRemove$1(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction$1(name, i, tweenValue(this, "style." + name, value))
          : styleConstant$1(name, i, value + ""), priority);
};

function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

var transition_styleTween = function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
};

function textConstant$1(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction$1(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

var transition_text = function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction$1(tweenValue(this, "text", value))
      : textConstant$1(value == null ? "" : value + ""));
};

var transition_transition = function() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get$1(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
};

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease
};

function linear$1(t) {
  return +t;
}

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI;
var halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = now(), defaultTiming;
    }
  }
  return timing;
}

var selection_transition = function(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
};

selection.prototype.interrupt = selection_interrupt;
selection.prototype.transition = selection_transition;

var root$1 = [null];

var active = function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root$1, name, +i);
      }
    }
  }

  return null;
};

var constant$4 = function(x) {
  return function() {
    return x;
  };
};

var BrushEvent = function(target, type, selection) {
  this.target = target;
  this.type = type;
  this.selection = selection;
};

function nopropagation$1() {
  exports.event.stopImmediatePropagation();
}

var noevent$1 = function() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
};

var MODE_DRAG = {name: "drag"};
var MODE_SPACE = {name: "space"};
var MODE_HANDLE = {name: "handle"};
var MODE_CENTER = {name: "center"};

var X = {
  name: "x",
  handles: ["e", "w"].map(type),
  input: function(x, e) { return x && [[x[0], e[0][1]], [x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y && [[e[0][0], y[0]], [e[1][0], y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(type),
  input: function(xy) { return xy; },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !exports.event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local$$1(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush$1(X);
}

function brushY() {
  return brush$1(Y);
}

var brush = function() {
  return brush$1(XY);
};

function brush$1(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      listeners = dispatch(brush, "start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local$$1(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        .on("mousedown.brush touchstart.brush", started);
  }

  brush.move = function(group, selection$$1) {
    if (group.selection) {
      group
          .on("start.brush", function() { emitter(this, arguments).beforestart().start(); })
          .on("interrupt.brush end.brush", function() { emitter(this, arguments).end(); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(this, arguments) : selection$$1, state.extent),
                i = interpolateValue(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && empty(selection1) ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 && selection1 ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection$$1 === "function" ? selection$$1.apply(that, args) : selection$$1, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 == null || empty(selection1) ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
          });
    }
  };

  function redraw() {
    var group = select(this),
        selection$$1 = local$$1(this).selection;

    if (selection$$1) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection$$1[0][0])
          .attr("y", selection$$1[0][1])
          .attr("width", selection$$1[1][0] - selection$$1[0][0])
          .attr("height", selection$$1[1][1] - selection$$1[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection$$1[1][0] - handleSize / 2 : selection$$1[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection$$1[1][1] - handleSize / 2 : selection$$1[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection$$1[1][0] - selection$$1[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection$$1[1][1] - selection$$1[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args) {
    return that.__brush.emitter || new Emitter(that, args);
  }

  function Emitter(that, args) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function() {
      if (this.starting) this.starting = false, this.emit("start");
      return this;
    },
    brush: function() {
      this.emit("brush");
      return this;
    },
    end: function() {
      if (--this.active === 0) delete this.state.emitter, this.emit("end");
      return this;
    },
    emit: function(type) {
      customEvent(new BrushEvent(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function started() {
    if (exports.event.touches) { if (exports.event.changedTouches.length < exports.event.touches.length) return noevent$1(); }
    else if (touchending) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = exports.event.target.__data__.type,
        mode = (exports.event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (exports.event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local$$1(that),
        extent = state.extent,
        selection$$1 = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx,
        dy,
        moving,
        shifting = signX && signY && exports.event.shiftKey,
        lockX,
        lockY,
        point0 = mouse(that),
        point = point0,
        emit = emitter(that, arguments).beforestart();

    if (type === "overlay") {
      state.selection = selection$$1 = [
        [w0 = dim === Y ? W : point0[0], n0 = dim === X ? N : point0[1]],
        [e0 = dim === Y ? E : w0, s0 = dim === X ? S : n0]
      ];
    } else {
      w0 = selection$$1[0][0];
      n0 = selection$$1[0][1];
      e0 = selection$$1[1][0];
      s0 = selection$$1[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (exports.event.touches) {
      group
          .on("touchmove.brush", moved, true)
          .on("touchend.brush touchcancel.brush", ended, true);
    } else {
      var view = select(exports.event.view)
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);

      dragDisable(exports.event.view);
    }

    nopropagation$1();
    interrupt(that);
    redraw.call(that);
    emit.start();

    function moved() {
      var point1 = mouse(that);
      if (shifting && !lockX && !lockY) {
        if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
        else lockX = true;
      }
      point = point1;
      moving = true;
      noevent$1();
      move();
    }

    function move() {
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
          else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
          if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
          else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
          if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection$$1 = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection$$1[0][0], e1 = selection$$1[1][0];
      if (lockY) n1 = selection$$1[0][1], s1 = selection$$1[1][1];

      if (selection$$1[0][0] !== w1
          || selection$$1[0][1] !== n1
          || selection$$1[1][0] !== e1
          || selection$$1[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush();
      }
    }

    function ended() {
      nopropagation$1();
      if (exports.event.touches) {
        if (exports.event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
        group.on("touchmove.brush touchend.brush touchcancel.brush", null);
      } else {
        yesdrag(exports.event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection$$1 = state.selection; // May be set by brush.move (on start)!
      if (empty(selection$$1)) state.selection = null, redraw.call(that);
      emit.end();
    }

    function keydowned() {
      switch (exports.event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move();
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }

    function keyupped() {
      switch (exports.event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move();
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move();
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (exports.event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move();
          }
          break;
        }
        default: return;
      }
      noevent$1();
    }
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = extent.apply(this, arguments);
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$4(!!_), brush) : filter;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

var cos = Math.cos;
var sin = Math.sin;
var pi$1 = Math.PI;
var halfPi$1 = pi$1 / 2;
var tau$1 = pi$1 * 2;
var max$1 = Math.max;

function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

var chord = function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = sequence(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(sequence(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = max$1(0, tau$1 - padAngle * n) / k;
    dx = k ? padAngle : tau$1 / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = max$1(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
};

var slice$2 = Array.prototype.slice;

var constant$5 = function(x) {
  return function() {
    return x;
  };
};

var pi$2 = Math.PI;
var tau$2 = 2 * pi$2;
var epsilon$1 = 1e-6;
var tauEpsilon = tau$2 - epsilon$1;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon$1)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi$2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon$1) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau$2 + tau$2;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon$1) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi$2)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

var ribbon = function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = slice$2.call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - halfPi$1,
        sa1 = endAngle.apply(this, argv) - halfPi$1,
        sx0 = sr * cos(sa0),
        sy0 = sr * sin(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - halfPi$1,
        ta1 = endAngle.apply(this, argv) - halfPi$1;

    if (!context) context = buffer = path();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * cos(ta0), tr * sin(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$5(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$5(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
};

var prefix = "$";

function Map() {}

Map.prototype = map$1.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$1(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

var nest = function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) return rollup != null
        ? rollup(array) : (sortValues != null
        ? array.sort(sortValues)
        : array);

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = map$1(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
};

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return map$1();
}

function setMap(map, key, value) {
  map.set(key, value);
}

function Set() {}

var proto = map$1.prototype;

Set.prototype = set$2.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set$2(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

var keys = function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
};

var values = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};

var entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "]";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

var dsv = function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      delimiterCode = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns;
    return rows;
  }

  function parseRows(text, f) {
    var EOL = {}, // sentinel value for end-of-line
        EOF = {}, // sentinel value for end-of-file
        rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // the current line number
        t, // the current token
        eol; // is the current token followed by EOL?

    function token() {
      if (I >= N) return EOF; // special case: end of file
      if (eol) return eol = false, EOL; // special case: end of line

      // special case: quotes
      var j = I, c;
      if (text.charCodeAt(j) === 34) {
        var i = j;
        while (i++ < N) {
          if (text.charCodeAt(i) === 34) {
            if (text.charCodeAt(i + 1) !== 34) break;
            ++i;
          }
        }
        I = i + 2;
        c = text.charCodeAt(i + 1);
        if (c === 13) {
          eol = true;
          if (text.charCodeAt(i + 2) === 10) ++I;
        } else if (c === 10) {
          eol = true;
        }
        return text.slice(j + 1, i).replace(/""/g, "\"");
      }

      // common case: find next delimiter or newline
      while (I < N) {
        var k = 1;
        c = text.charCodeAt(I++);
        if (c === 10) eol = true; // \n
        else if (c === 13) { eol = true; if (text.charCodeAt(I) === 10) ++I, ++k; } // \r|\r\n
        else if (c !== delimiterCode) continue;
        return text.slice(j, I - k);
      }

      // special case: last token before EOF
      return text.slice(j);
    }

    while ((t = token()) !== EOF) {
      var a = [];
      while (t !== EOL && t !== EOF) {
        a.push(t);
        t = token();
      }
      if (f && (a = f(a, n++)) == null) continue;
      rows.push(a);
    }

    return rows;
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    })).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(text) {
    return text == null ? ""
        : reFormat.test(text += "") ? "\"" + text.replace(/\"/g, "\"\"") + "\""
        : text;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatRows: formatRows
  };
};

var csv = dsv(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatRows = csv.formatRows;

var tsv = dsv("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatRows = tsv.formatRows;

var center$1 = function(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
};

var constant$6 = function(x) {
  return function() {
    return x;
  };
};

var jiggle = function() {
  return (Math.random() - 0.5) * 1e-6;
};

var tree_add = function(d) {
  var x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
};

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, inherit the existing extent.
  if (x1 < x0) x0 = this._x0, x1 = this._x1;
  if (y1 < y0) y0 = this._y0, y1 = this._y1;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}

var tree_cover = function(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else if (x0 > x || x > x1 || y0 > y || y > y1) {
    var z = x1 - x0,
        node = this._root,
        parent,
        i;

    switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
      case 0: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
        break;
      }
      case 1: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
        break;
      }
      case 2: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
        break;
      }
      case 3: {
        do parent = new Array(4), parent[i] = node, node = parent;
        while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
        break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  // If the quadtree covers the point already, just return.
  else return this;

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
};

var tree_data = function() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
};

var tree_extent = function(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
};

var Quad = function(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
};

var tree_find = function(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new Quad(node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new Quad(node[3], xm, ym, x2, y2),
        new Quad(node[2], x1, ym, xm, y2),
        new Quad(node[1], xm, y1, x2, ym),
        new Quad(node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
};

var tree_remove = function(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
};

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}

var tree_root = function() {
  return this._root;
};

var tree_size = function() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
};

var tree_visit = function(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
    }
  }
  return this;
};

var tree_visitAfter = function(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
};

function defaultX(d) {
  return d[0];
}

var tree_x = function(_) {
  return arguments.length ? (this._x = _, this) : this._x;
};

function defaultY(d) {
  return d[1];
}

var tree_y = function(_) {
  return arguments.length ? (this._y = _, this) : this._y;
};

function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = tree_add;
treeProto.addAll = addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;
treeProto.y = tree_y;

function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

var collide = function(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = constant$6(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = quadtree(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = jiggle(), l += x * x;
            if (y === 0) y = jiggle(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : radius;
  };

  return force;
};

function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

var link = function(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = constant$6(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || jiggle();
        y = target.y + target.vy - source.y - source.vy || jiggle();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = map$1(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : constant$6(+_), initializeDistance(), force) : distance;
  };

  return force;
};

function x$1(d) {
  return d.x;
}

function y$1(d) {
  return d.y;
}

var initialRadius = 10;
var initialAngle = Math.PI * (3 - Math.sqrt(5));

var simulation = function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = map$1(),
      stepper = timer(step),
      event = dispatch("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
};

var manyBody = function() {
  var nodes,
      node,
      alpha,
      strength = constant$6(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = quadtree(nodes, x$1, y$1).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, x$$1, y$$1, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x$$1 = y$$1 = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = q.value)) {
          strength += c, x$$1 += c * q.x, y$$1 += c * q.y;
        }
      }
      quad.x = x$$1 / strength;
      quad.y = y$$1 / strength;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x$$1 = quad.x - node.x,
        y$$1 = quad.y - node.y,
        w = x2 - x1,
        l = x$$1 * x$$1 + y$$1 * y$$1;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
        if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x$$1 * quad.value * alpha / l;
        node.vy += y$$1 * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x$$1 === 0) x$$1 = jiggle(), l += x$$1 * x$$1;
      if (y$$1 === 0) y$$1 = jiggle(), l += y$$1 * y$$1;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x$$1 * w;
      node.vy += y$$1 * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
};

var x$2 = function(x) {
  var strength = constant$6(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = constant$6(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : x;
  };

  return force;
};

var y$2 = function(y) {
  var strength = constant$6(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = constant$6(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : constant$6(+_), initialize(), force) : y;
  };

  return force;
};

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
var formatDecimal = function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
};

var exponent$1 = function(x) {
  return x = formatDecimal(Math.abs(x)), x ? x[1] : NaN;
};

var formatGroup = function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
};

var formatNumerals = function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
};

var formatDefault = function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
};

var prefixExponent;

var formatPrefixAuto = function(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimal(x, Math.max(0, p + i - 1))[0]; // less than 1y!
};

var formatRounded = function(x, p) {
  var d = formatDecimal(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
};

var formatTypes = {
  "": formatDefault,
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!formatTypes[type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};

var identity$3 = function(x) {
  return x;
};

var prefixes = ["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];

var formatLocale = function(locale) {
  var group = locale.grouping && locale.thousands ? formatGroup(locale.grouping, locale.thousands) : identity$3,
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? formatNumerals(locale.numerals) : identity$3,
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = valueSuffix + (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
};

var locale$1;



defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale$1 = formatLocale(definition);
  exports.format = locale$1.format;
  exports.formatPrefix = locale$1.formatPrefix;
  return locale$1;
}

var precisionFixed = function(step) {
  return Math.max(0, -exponent$1(Math.abs(step)));
};

var precisionPrefix = function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3 - exponent$1(Math.abs(step)));
};

var precisionRound = function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent$1(max) - exponent$1(step)) + 1;
};

// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

var adder = function() {
  return new Adder;
};

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add$1(temp, y, this.t);
    add$1(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add$1(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}

var epsilon$2 = 1e-6;
var epsilon2$1 = 1e-12;
var pi$3 = Math.PI;
var halfPi$2 = pi$3 / 2;
var quarterPi = pi$3 / 4;
var tau$3 = pi$3 * 2;

var degrees$1 = 180 / pi$3;
var radians = pi$3 / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos$1 = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;

var log = Math.log;
var pow = Math.pow;
var sin$1 = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi$3 : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi$2 : x < -1 ? -halfPi$2 : Math.asin(x);
}

function haversin(x) {
  return (x = sin$1(x / 2)) * x;
}

function noop$1() {}

function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

var geoStream = function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
};

var areaRingSum = adder();

var areaSum = adder();
var lambda00;
var phi00;
var lambda0;
var cosPhi0;
var sinPhi0;

var areaStream = {
  point: noop$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? tau$3 + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = noop$1;
  },
  sphere: function() {
    areaSum.add(tau$3);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= radians, phi *= radians;
  lambda0 = lambda, cosPhi0 = cos$1(phi = phi / 2 + quarterPi), sinPhi0 = sin$1(phi);
}

function areaPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  phi = phi / 2 + quarterPi; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = cos$1(phi),
      sinPhi = sin$1(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * cos$1(adLambda),
      v = k * sdLambda * sin$1(adLambda);
  areaRingSum.add(atan2(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

var area = function(object) {
  areaSum.reset();
  geoStream(object, areaStream);
  return areaSum * 2;
};

function spherical(cartesian) {
  return [atan2(cartesian[1], cartesian[0]), asin(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = cos$1(phi);
  return [cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}

var lambda0$1;
var phi0;
var lambda1;
var phi1;
var lambda2;
var lambda00$1;
var phi00$1;
var p0;
var deltaSum = adder();
var ranges;
var range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    areaStream.polygonStart();
  },
  polygonEnd: function() {
    areaStream.polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (areaRingSum < 0) lambda0$1 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > epsilon$2) phi1 = 90;
    else if (deltaSum < -epsilon$2) phi0 = -90;
    range[0] = lambda0$1, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = cartesian([lambda * radians, phi * radians]);
  if (p0) {
    var normal = cartesianCross(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = cartesianCross(equatorial, normal);
    cartesianNormalizeInPlace(inflection);
    inflection = spherical(inflection);
    var delta = lambda - lambda2,
        sign$$1 = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * degrees$1 * sign$$1,
        phii,
        antimeridian = abs(delta) > 180;
    if (antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
      phii = inflection[1] * degrees$1;
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign$$1 * lambda2 < lambdai && lambdai < sign$$1 * lambda)) {
      phii = -inflection[1] * degrees$1;
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
      }
    } else {
      if (lambda1 >= lambda0$1) {
        if (lambda < lambda0$1) lambda0$1 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0$1, lambda) > angle(lambda0$1, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0$1, lambda1)) lambda0$1 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0$1 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0$1, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(abs(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00$1 = lambda, phi00$1 = phi;
  }
  areaStream.point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  areaStream.lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00$1, phi00$1);
  areaStream.lineEnd();
  if (abs(deltaSum) > epsilon$2) lambda0$1 = -(lambda1 = 180);
  range[0] = lambda0$1, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

var bounds = function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0$1 = phi0 = Infinity);
  ranges = [];
  geoStream(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0$1 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0$1 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0$1, phi0], [lambda1, phi1]];
};

var W0;
var W1;
var X0;
var Y0;
var Z0;
var X1;
var Y1;
var Z1;
var X2;
var Y2;
var Z2;
var lambda00$2;
var phi00$2;
var x0;
var y0;
var z0; // previous point

var centroidStream = {
  sphere: noop$1,
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi);
  centroidPointCartesian(cosPhi * cos$1(lambda), cosPhi * sin$1(lambda), sin$1(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi);
  x0 = cosPhi * cos$1(lambda);
  y0 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi),
      x = cosPhi * cos$1(lambda),
      y = cosPhi * sin$1(lambda),
      z = sin$1(phi),
      w = atan2(sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00$2, phi00$2);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00$2 = lambda, phi00$2 = phi;
  lambda *= radians, phi *= radians;
  centroidStream.point = centroidRingPoint;
  var cosPhi = cos$1(phi);
  x0 = cosPhi * cos$1(lambda);
  y0 = cosPhi * sin$1(lambda);
  z0 = sin$1(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var cosPhi = cos$1(phi),
      x = cosPhi * cos$1(lambda),
      y = cosPhi * sin$1(lambda),
      z = sin$1(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = sqrt(cx * cx + cy * cy + cz * cz),
      w = asin(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

var centroid = function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  geoStream(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < epsilon2$1) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < epsilon$2) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < epsilon2$1) return [NaN, NaN];
  }

  return [atan2(y, x) * degrees$1, asin(z / sqrt(m)) * degrees$1];
};

var constant$7 = function(x) {
  return function() {
    return x;
  };
};

var compose = function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
};

function rotationIdentity(lambda, phi) {
  return [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= tau$3) ? (deltaPhi || deltaGamma ? compose(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > pi$3 ? lambda - tau$3 : lambda < -pi$3 ? lambda + tau$3 : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = cos$1(deltaPhi),
      sinDeltaPhi = sin$1(deltaPhi),
      cosDeltaGamma = cos$1(deltaGamma),
      sinDeltaGamma = sin$1(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = cos$1(phi),
        x = cos$1(lambda) * cosPhi,
        y = sin$1(lambda) * cosPhi,
        z = sin$1(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      atan2(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      asin(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = cos$1(phi),
        x = cos$1(lambda) * cosPhi,
        y = sin$1(lambda) * cosPhi,
        z = sin$1(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      atan2(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      asin(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

var rotation = function(rotate) {
  rotate = rotateRadians(rotate[0] * radians, rotate[1] * radians, rotate.length > 2 ? rotate[2] * radians : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * radians, coordinates[1] * radians);
    return coordinates[0] *= degrees$1, coordinates[1] *= degrees$1, coordinates;
  };

  return forward;
};

// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = cos$1(radius),
      sinRadius = sin$1(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * tau$3;
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau$3;
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = spherical([cosRadius, -sinRadius * cos$1(t), -sinRadius * sin$1(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = cartesian(point), point[0] -= cosRadius;
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau$3 - epsilon$2) % tau$3;
}

var circle = function() {
  var center = constant$7([0, 0]),
      radius = constant$7(90),
      precision = constant$7(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= degrees$1, x[1] *= degrees$1;
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * radians,
        p = precision.apply(this, arguments) * radians;
    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : constant$7([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : constant$7(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : constant$7(+_), circle) : precision;
  };

  return circle;
};

var clipBuffer = function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: noop$1,
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
};

var clipLine = function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
};

var pointEqual = function(a, b) {
  return abs(a[0] - b[0]) < epsilon$2 && abs(a[1] - b[1]) < epsilon$2;
};

function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
var clipPolygon = function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (pointEqual(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link$1(subject);
  link$1(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
};

function link$1(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}

var clipMax = 1e9;
var clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipExtent(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return abs(p[0] - x0) < epsilon$2 ? direction > 0 ? 0 : 3
        : abs(p[0] - x1) < epsilon$2 ? direction > 0 ? 2 : 1
        : abs(p[1] - y0) < epsilon$2 ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = clipBuffer(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = merge(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          clipPolygon(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (clipLine(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}

var extent$1 = function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = clipExtent(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
};

var sum$1 = adder();

var polygonContains = function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [sin$1(lambda), -cos$1(lambda), 0],
      angle = 0,
      winding = 0;

  sum$1.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + quarterPi,
        sinPhi0 = sin$1(phi0),
        cosPhi0 = cos$1(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + quarterPi,
          sinPhi1 = sin$1(phi1),
          cosPhi1 = cos$1(phi1),
          delta = lambda1 - lambda0,
          sign$$1 = delta >= 0 ? 1 : -1,
          absDelta = sign$$1 * delta,
          antimeridian = absDelta > pi$3,
          k = sinPhi0 * sinPhi1;

      sum$1.add(atan2(k * sign$$1 * sin$1(absDelta), cosPhi0 * cosPhi1 + k * cos$1(absDelta)));
      angle += antimeridian ? delta + sign$$1 * tau$3 : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = cartesianCross(cartesian(point0), cartesian(point1));
        cartesianNormalizeInPlace(arc);
        var intersection = cartesianCross(normal, arc);
        cartesianNormalizeInPlace(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -epsilon$2 || angle < epsilon$2 && sum$1 < -epsilon$2) ^ (winding & 1);
};

var lengthSum = adder();
var lambda0$2;
var sinPhi0$1;
var cosPhi0$1;

var lengthStream = {
  sphere: noop$1,
  point: noop$1,
  lineStart: lengthLineStart,
  lineEnd: noop$1,
  polygonStart: noop$1,
  polygonEnd: noop$1
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = noop$1;
}

function lengthPointFirst(lambda, phi) {
  lambda *= radians, phi *= radians;
  lambda0$2 = lambda, sinPhi0$1 = sin$1(phi), cosPhi0$1 = cos$1(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= radians, phi *= radians;
  var sinPhi = sin$1(phi),
      cosPhi = cos$1(phi),
      delta = abs(lambda - lambda0$2),
      cosDelta = cos$1(delta),
      sinDelta = sin$1(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0$1 * sinPhi - sinPhi0$1 * cosPhi * cosDelta,
      z = sinPhi0$1 * sinPhi + cosPhi0$1 * cosPhi * cosDelta;
  lengthSum.add(atan2(sqrt(x * x + y * y), z));
  lambda0$2 = lambda, sinPhi0$1 = sinPhi, cosPhi0$1 = cosPhi;
}

var length$1 = function(object) {
  lengthSum.reset();
  geoStream(object, lengthStream);
  return +lengthSum;
};

var coordinates = [null, null];
var object$1 = {type: "LineString", coordinates: coordinates};

var distance = function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return length$1(object$1);
};

var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return distance(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = distance(coordinates[0], coordinates[1]),
      ao = distance(coordinates[0], point),
      ob = distance(point, coordinates[1]);
  return ao + ob <= ab + epsilon$2;
}

function containsPolygon(coordinates, point) {
  return !!polygonContains(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * radians, point[1] * radians];
}

var contains = function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
};

function graticuleX(y0, y1, dy) {
  var y = sequence(y0, y1 - epsilon$2, dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = sequence(x0, x1 - epsilon$2, dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return sequence(ceil(X0 / DX) * DX, X1, DX).map(X)
        .concat(sequence(ceil(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(sequence(ceil(x0 / dx) * dx, x1, dx).filter(function(x) { return abs(x % DX) > epsilon$2; }).map(x))
        .concat(sequence(ceil(y0 / dy) * dy, y1, dy).filter(function(y) { return abs(y % DY) > epsilon$2; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + epsilon$2], [180, 90 - epsilon$2]])
      .extentMinor([[-180, -80 - epsilon$2], [180, 80 + epsilon$2]]);
}

function graticule10() {
  return graticule()();
}

var interpolate$1 = function(a, b) {
  var x0 = a[0] * radians,
      y0 = a[1] * radians,
      x1 = b[0] * radians,
      y1 = b[1] * radians,
      cy0 = cos$1(y0),
      sy0 = sin$1(y0),
      cy1 = cos$1(y1),
      sy1 = sin$1(y1),
      kx0 = cy0 * cos$1(x0),
      ky0 = cy0 * sin$1(x0),
      kx1 = cy1 * cos$1(x1),
      ky1 = cy1 * sin$1(x1),
      d = 2 * asin(sqrt(haversin(y1 - y0) + cy0 * cy1 * haversin(x1 - x0))),
      k = sin$1(d);

  var interpolate = d ? function(t) {
    var B = sin$1(t *= d) / k,
        A = sin$1(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      atan2(y, x) * degrees$1,
      atan2(z, sqrt(x * x + y * y)) * degrees$1
    ];
  } : function() {
    return [x0 * degrees$1, y0 * degrees$1];
  };

  interpolate.distance = d;

  return interpolate;
};

var identity$4 = function(x) {
  return x;
};

var areaSum$1 = adder();
var areaRingSum$1 = adder();
var x00;
var y00;
var x0$1;
var y0$1;

var areaStream$1 = {
  point: noop$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: function() {
    areaStream$1.lineStart = areaRingStart$1;
    areaStream$1.lineEnd = areaRingEnd$1;
  },
  polygonEnd: function() {
    areaStream$1.lineStart = areaStream$1.lineEnd = areaStream$1.point = noop$1;
    areaSum$1.add(abs(areaRingSum$1));
    areaRingSum$1.reset();
  },
  result: function() {
    var area = areaSum$1 / 2;
    areaSum$1.reset();
    return area;
  }
};

function areaRingStart$1() {
  areaStream$1.point = areaPointFirst$1;
}

function areaPointFirst$1(x, y) {
  areaStream$1.point = areaPoint$1;
  x00 = x0$1 = x, y00 = y0$1 = y;
}

function areaPoint$1(x, y) {
  areaRingSum$1.add(y0$1 * x - x0$1 * y);
  x0$1 = x, y0$1 = y;
}

function areaRingEnd$1() {
  areaPoint$1(x00, y00);
}

var x0$2 = Infinity;
var y0$2 = x0$2;
var x1 = -x0$2;
var y1 = x1;

var boundsStream$1 = {
  point: boundsPoint$1,
  lineStart: noop$1,
  lineEnd: noop$1,
  polygonStart: noop$1,
  polygonEnd: noop$1,
  result: function() {
    var bounds = [[x0$2, y0$2], [x1, y1]];
    x1 = y1 = -(y0$2 = x0$2 = Infinity);
    return bounds;
  }
};

function boundsPoint$1(x, y) {
  if (x < x0$2) x0$2 = x;
  if (x > x1) x1 = x;
  if (y < y0$2) y0$2 = y;
  if (y > y1) y1 = y;
}

// TODO Enforce positive area for exterior, negative area for interior?

var X0$1 = 0;
var Y0$1 = 0;
var Z0$1 = 0;
var X1$1 = 0;
var Y1$1 = 0;
var Z1$1 = 0;
var X2$1 = 0;
var Y2$1 = 0;
var Z2$1 = 0;
var x00$1;
var y00$1;
var x0$3;
var y0$3;

var centroidStream$1 = {
  point: centroidPoint$1,
  lineStart: centroidLineStart$1,
  lineEnd: centroidLineEnd$1,
  polygonStart: function() {
    centroidStream$1.lineStart = centroidRingStart$1;
    centroidStream$1.lineEnd = centroidRingEnd$1;
  },
  polygonEnd: function() {
    centroidStream$1.point = centroidPoint$1;
    centroidStream$1.lineStart = centroidLineStart$1;
    centroidStream$1.lineEnd = centroidLineEnd$1;
  },
  result: function() {
    var centroid = Z2$1 ? [X2$1 / Z2$1, Y2$1 / Z2$1]
        : Z1$1 ? [X1$1 / Z1$1, Y1$1 / Z1$1]
        : Z0$1 ? [X0$1 / Z0$1, Y0$1 / Z0$1]
        : [NaN, NaN];
    X0$1 = Y0$1 = Z0$1 =
    X1$1 = Y1$1 = Z1$1 =
    X2$1 = Y2$1 = Z2$1 = 0;
    return centroid;
  }
};

function centroidPoint$1(x, y) {
  X0$1 += x;
  Y0$1 += y;
  ++Z0$1;
}

function centroidLineStart$1() {
  centroidStream$1.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream$1.point = centroidPointLine;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0$3, dy = y - y0$3, z = sqrt(dx * dx + dy * dy);
  X1$1 += z * (x0$3 + x) / 2;
  Y1$1 += z * (y0$3 + y) / 2;
  Z1$1 += z;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function centroidLineEnd$1() {
  centroidStream$1.point = centroidPoint$1;
}

function centroidRingStart$1() {
  centroidStream$1.point = centroidPointFirstRing;
}

function centroidRingEnd$1() {
  centroidPointRing(x00$1, y00$1);
}

function centroidPointFirstRing(x, y) {
  centroidStream$1.point = centroidPointRing;
  centroidPoint$1(x00$1 = x0$3 = x, y00$1 = y0$3 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0$3,
      dy = y - y0$3,
      z = sqrt(dx * dx + dy * dy);

  X1$1 += z * (x0$3 + x) / 2;
  Y1$1 += z * (y0$3 + y) / 2;
  Z1$1 += z;

  z = y0$3 * x - x0$3 * y;
  X2$1 += z * (x0$3 + x);
  Y2$1 += z * (y0$3 + y);
  Z2$1 += z * 3;
  centroidPoint$1(x0$3 = x, y0$3 = y);
}

function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, tau$3);
        break;
      }
    }
  },
  result: noop$1
};

var lengthSum$1 = adder();
var lengthRing;
var x00$2;
var y00$2;
var x0$4;
var y0$4;

var lengthStream$1 = {
  point: noop$1,
  lineStart: function() {
    lengthStream$1.point = lengthPointFirst$1;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint$1(x00$2, y00$2);
    lengthStream$1.point = noop$1;
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum$1;
    lengthSum$1.reset();
    return length;
  }
};

function lengthPointFirst$1(x, y) {
  lengthStream$1.point = lengthPoint$1;
  x00$2 = x0$4 = x, y00$2 = y0$4 = y;
}

function lengthPoint$1(x, y) {
  x0$4 -= x, y0$4 -= y;
  lengthSum$1.add(sqrt(x0$4 * x0$4 + y0$4 * y0$4));
  x0$4 = x, y0$4 = y;
}

function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle$1(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle$1(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle$1(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}

var index$1 = function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      geoStream(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    geoStream(object, projectionStream(areaStream$1));
    return areaStream$1.result();
  };

  path.measure = function(object) {
    geoStream(object, projectionStream(lengthStream$1));
    return lengthStream$1.result();
  };

  path.bounds = function(object) {
    geoStream(object, projectionStream(boundsStream$1));
    return boundsStream$1.result();
  };

  path.centroid = function(object) {
    geoStream(object, projectionStream(centroidStream$1));
    return centroidStream$1.result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, identity$4) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new PathString) : new PathContext(context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
};

var clip = function(pointVisible, clipLine, interpolate, start) {
  return function(rotate, sink) {
    var line = clipLine(sink),
        rotatedStart = rotate.invert(start[0], start[1]),
        ringBuffer = clipBuffer(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = merge(segments);
        var startInside = polygonContains(polygon, rotatedStart);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          clipPolygon(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      var point = rotate(lambda, phi);
      if (pointVisible(lambda = point[0], phi = point[1])) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      var point = rotate(lambda, phi);
      line.point(point[0], point[1]);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      var point = rotate(lambda, phi);
      ringSink.point(point[0], point[1]);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
};

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - halfPi$2 - epsilon$2 : halfPi$2 - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - halfPi$2 - epsilon$2 : halfPi$2 - b[1]);
}

var clipAntimeridian = clip(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-pi$3, -halfPi$2]
);

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? pi$3 : -pi$3,
          delta = abs(lambda1 - lambda0);
      if (abs(delta - pi$3) < epsilon$2) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? halfPi$2 : -halfPi$2);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= pi$3) { // line crosses antimeridian
        if (abs(lambda0 - sign0) < epsilon$2) lambda0 -= sign0 * epsilon$2; // handle degeneracies
        if (abs(lambda1 - sign1) < epsilon$2) lambda1 -= sign1 * epsilon$2;
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = sin$1(lambda0 - lambda1);
  return abs(sinLambda0Lambda1) > epsilon$2
      ? atan((sin$1(phi0) * (cosPhi1 = cos$1(phi1)) * sin$1(lambda1)
          - sin$1(phi1) * (cosPhi0 = cos$1(phi0)) * sin$1(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * halfPi$2;
    stream.point(-pi$3, phi);
    stream.point(0, phi);
    stream.point(pi$3, phi);
    stream.point(pi$3, 0);
    stream.point(pi$3, -phi);
    stream.point(0, -phi);
    stream.point(-pi$3, -phi);
    stream.point(-pi$3, 0);
    stream.point(-pi$3, phi);
  } else if (abs(from[0] - to[0]) > epsilon$2) {
    var lambda = from[0] < to[0] ? pi$3 : -pi$3;
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}

var clipCircle = function(radius, delta) {
  var cr = cos$1(radius),
      smallRadius = cr > 0,
      notHemisphere = abs(cr) > epsilon$2; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    circleStream(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return cos$1(lambda) * cos$1(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? pi$3 : -pi$3), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || pointEqual(point0, point2) || pointEqual(point1, point2)) {
            point1[0] += epsilon$2;
            point1[1] += epsilon$2;
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !pointEqual(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = cartesian(a),
        pb = cartesian(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = cartesianCross(pa, pb),
        n2n2 = cartesianDot(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = cartesianCross(n1, n2),
        A = cartesianScale(n1, c1),
        B = cartesianScale(n2, c2);
    cartesianAddInPlace(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = cartesianDot(A, u),
        uu = cartesianDot(u, u),
        t2 = w * w - uu * (cartesianDot(A, A) - 1);

    if (t2 < 0) return;

    var t = sqrt(t2),
        q = cartesianScale(u, (-w - t) / uu);
    cartesianAddInPlace(q, A);
    q = spherical(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = abs(delta - pi$3) < epsilon$2,
        meridian = polar || delta < epsilon$2;

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (abs(q[0] - lambda0) < epsilon$2 ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > pi$3 ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = cartesianScale(u, (-w + t) / uu);
      cartesianAddInPlace(q1, A);
      return [q, spherical(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : pi$3 - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-pi$3, radius - pi$3]);
};

var transform = function(methods) {
  return {
    stream: transformer(methods)
  };
};

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};

function fitExtent(projection, extent, object) {
  var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      clip = projection.clipExtent && projection.clipExtent();

  projection
      .scale(150)
      .translate([0, 0]);

  if (clip != null) projection.clipExtent(null);

  geoStream(object, projection.stream(boundsStream$1));

  var b = boundsStream$1.result(),
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

  if (clip != null) projection.clipExtent(clip);

  return projection
      .scale(k * 150)
      .translate([x, y]);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

var maxDepth = 16;
var cosMinDistance = cos$1(30 * radians); // cos(minimum angular distance)

var resample = function(project, delta2) {
  return +delta2 ? resample$1(project, delta2) : resampleNone(project);
};

function resampleNone(project) {
  return transformer({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample$1(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = sqrt(a * a + b * b + c * c),
          phi2 = asin(c /= m),
          lambda2 = abs(abs(c) - 1) < epsilon$2 || abs(lambda0 - lambda1) < epsilon$2 ? (lambda0 + lambda1) / 2 : atan2(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || abs((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = cartesian([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}

var transformRadians = transformer({
  point: function(x, y) {
    this.stream.point(x * radians, y * radians);
  }
});

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = clipAntimeridian, // clip angle
      x0 = null, y0, x1, y1, postclip = identity$4, // clip extent
      delta2 = 0.5, projectResample = resample(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * radians, point[1] * radians);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * degrees$1, point[1] * degrees$1];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(preclip(rotate, projectResample(postclip(cacheStream = stream))));
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? clipCircle(theta = _ * radians, 6 * radians) : (theta = null, clipAntimeridian), reset()) : theta * degrees$1;
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * radians, phi = _[1] % 360 * radians, recenter()) : [lambda * degrees$1, phi * degrees$1];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * radians, deltaPhi = _[1] % 360 * radians, deltaGamma = _.length > 2 ? _[2] % 360 * radians : 0, recenter()) : [deltaLambda * degrees$1, deltaPhi * degrees$1, deltaGamma * degrees$1];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = resample(projectTransform, delta2 = _ * _), reset()) : sqrt(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return fitExtent(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return fitSize(projection, size, object);
  };

  function recenter() {
    projectRotate = compose(rotate = rotateRadians(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}

function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = pi$3 / 3,
      m = projectionMutator(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * radians, phi1 = _[1] * radians) : [phi0 * degrees$1, phi1 * degrees$1];
  };

  return p;
}

function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = cos$1(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, sin$1(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, asin(y * cosPhi0)];
  };

  return forward;
}

function conicEqualAreaRaw(y0, y1) {
  var sy0 = sin$1(y0), n = (sy0 + sin$1(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (abs(n) < epsilon$2) return cylindricalEqualAreaRaw(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = sqrt(c) / n;

  function project(x, y) {
    var r = sqrt(c - 2 * n * sin$1(y)) / n;
    return [r * sin$1(x *= n), r0 - r * cos$1(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [atan2(x, abs(r0y)) / n * sign(r0y), asin((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

var conicEqualArea = function() {
  return conicProjection(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
};

var albers = function() {
  return conicEqualArea()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
};

// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
var albersUsa = function() {
  var cache,
      cacheStream,
      lower48 = albers(), lower48Point,
      alaska = conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + epsilon$2, y + 0.120 * k + epsilon$2], [x - 0.214 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + epsilon$2, y + 0.166 * k + epsilon$2], [x - 0.115 * k - epsilon$2, y + 0.234 * k - epsilon$2]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return fitExtent(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return fitSize(albersUsa, size, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
};

function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = cos$1(x),
        cy = cos$1(y),
        k = scale(cx * cy);
    return [
      k * cy * sin$1(x),
      k * sin$1(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = sqrt(x * x + y * y),
        c = angle(z),
        sc = sin$1(c),
        cc = cos$1(c);
    return [
      atan2(x * sc, z * cc),
      asin(z && y * sc / z)
    ];
  }
}

var azimuthalEqualAreaRaw = azimuthalRaw(function(cxcy) {
  return sqrt(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = azimuthalInvert(function(z) {
  return 2 * asin(z / 2);
});

var azimuthalEqualArea = function() {
  return projection(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
};

var azimuthalEquidistantRaw = azimuthalRaw(function(c) {
  return (c = acos(c)) && c / sin$1(c);
});

azimuthalEquidistantRaw.invert = azimuthalInvert(function(z) {
  return z;
});

var azimuthalEquidistant = function() {
  return projection(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
};

function mercatorRaw(lambda, phi) {
  return [lambda, log(tan((halfPi$2 + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * atan(exp(y)) - halfPi$2];
};

var mercator = function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / tau$3);
};

function mercatorProjection(project) {
  var m = projection(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = pi$3 * scale(),
        t = m(rotation(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}

function tany(y) {
  return tan((halfPi$2 + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = cos$1(y0),
      n = y0 === y1 ? sin$1(y0) : log(cy0 / cos$1(y1)) / log(tany(y1) / tany(y0)),
      f = cy0 * pow(tany(y0), n) / n;

  if (!n) return mercatorRaw;

  function project(x, y) {
    if (f > 0) { if (y < -halfPi$2 + epsilon$2) y = -halfPi$2 + epsilon$2; }
    else { if (y > halfPi$2 - epsilon$2) y = halfPi$2 - epsilon$2; }
    var r = f / pow(tany(y), n);
    return [r * sin$1(n * x), f - r * cos$1(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = sign(n) * sqrt(x * x + fy * fy);
    return [atan2(x, abs(fy)) / n * sign(fy), 2 * atan(pow(f / r, 1 / n)) - halfPi$2];
  };

  return project;
}

var conicConformal = function() {
  return conicProjection(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
};

function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

var equirectangular = function() {
  return projection(equirectangularRaw)
      .scale(152.63);
};

function conicEquidistantRaw(y0, y1) {
  var cy0 = cos$1(y0),
      n = y0 === y1 ? sin$1(y0) : (cy0 - cos$1(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (abs(n) < epsilon$2) return equirectangularRaw;

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * sin$1(nx), g - gy * cos$1(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [atan2(x, abs(gy)) / n * sign(gy), g - sign(n) * sqrt(x * x + gy * gy)];
  };

  return project;
}

var conicEquidistant = function() {
  return conicProjection(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
};

function gnomonicRaw(x, y) {
  var cy = cos$1(y), k = cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}

gnomonicRaw.invert = azimuthalInvert(atan);

var gnomonic = function() {
  return projection(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
};

function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? identity$4 : transformer({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

var identity$5 = function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = identity$4, // scale, translate and reflect
      x0 = null, y0, x1, y1, clip = identity$4, // clip extent
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(clip(cacheStream = stream));
    },
    clipExtent: function(_) {
      return arguments.length ? (clip = _ == null ? (x0 = y0 = x1 = y1 = null, identity$4) : clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return fitExtent(projection, extent, object);
    },
    fitSize: function(size, object) {
      return fitSize(projection, size, object);
    }
  };
};

function orthographicRaw(x, y) {
  return [cos$1(y) * sin$1(x), sin$1(y)];
}

orthographicRaw.invert = azimuthalInvert(asin);

var orthographic = function() {
  return projection(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + epsilon$2);
};

function stereographicRaw(x, y) {
  var cy = cos$1(y), k = 1 + cos$1(x) * cy;
  return [cy * sin$1(x) / k, sin$1(y) / k];
}

stereographicRaw.invert = azimuthalInvert(function(z) {
  return 2 * atan(z);
});

var stereographic = function() {
  return projection(stereographicRaw)
      .scale(250)
      .clipAngle(142);
};

function transverseMercatorRaw(lambda, phi) {
  return [log(tan((halfPi$2 + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * atan(exp(x)) - halfPi$2];
};

var transverseMercator = function() {
  var m = mercatorProjection(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
};

function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

var cluster = function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
};

function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

var node_count = function() {
  return this.eachAfter(count);
};

var node_each = function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
};

var node_eachBefore = function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
};

var node_eachAfter = function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
};

var node_sum = function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
};

var node_sort = function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
};

var node_path = function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
};

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}

var node_ancestors = function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
};

var node_descendants = function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
};

var node_leaves = function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
};

var node_links = function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
};

function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: node_count,
  each: node_each,
  eachAfter: node_eachAfter,
  eachBefore: node_eachBefore,
  sum: node_sum,
  sort: node_sort,
  path: node_path,
  ancestors: node_ancestors,
  descendants: node_descendants,
  leaves: node_leaves,
  links: node_links,
  copy: node_copy
};

function Node$2(value) {
  this._ = value;
  this.next = null;
}

var shuffle$1 = function(array) {
  var i,
      n = (array = array.slice()).length,
      head = null,
      node = head;

  while (n) {
    var next = new Node$2(array[n - 1]);
    if (node) node = node.next = next;
    else node = head = next;
    array[i] = array[--n];
  }

  return {
    head: head,
    tail: node
  };
};

var enclose = function(circles) {
  return encloseN(shuffle$1(circles), []);
};

function encloses(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r - b.r;
  return dr * dr + 1e-6 > dx * dx + dy * dy;
}

// Returns the smallest circle that contains circles L and intersects circles B.
function encloseN(L, B) {
  var circle,
      l0 = null,
      l1 = L.head,
      l2,
      p1;

  switch (B.length) {
    case 1: circle = enclose1(B[0]); break;
    case 2: circle = enclose2(B[0], B[1]); break;
    case 3: circle = enclose3(B[0], B[1], B[2]); break;
  }

  while (l1) {
    p1 = l1._, l2 = l1.next;
    if (!circle || !encloses(circle, p1)) {

      // Temporarily truncate L before l1.
      if (l0) L.tail = l0, l0.next = null;
      else L.head = L.tail = null;

      B.push(p1);
      circle = encloseN(L, B); // Note: reorders L!
      B.pop();

      // Move l1 to the front of L and reconnect the truncated list L.
      if (L.head) l1.next = L.head, L.head = l1;
      else l1.next = null, L.head = L.tail = l1;
      l0 = L.tail, l0.next = l2;

    } else {
      l0 = l1;
    }
    l1 = l2;
  }

  L.tail = l0;
  return circle;
}

function enclose1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function enclose2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function enclose3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = 2 * (x1 - x2),
      b2 = 2 * (y1 - y2),
      c2 = 2 * (r2 - r1),
      d2 = x1 * x1 + y1 * y1 - r1 * r1 - x2 * x2 - y2 * y2 + r2 * r2,
      a3 = 2 * (x1 - x3),
      b3 = 2 * (y1 - y3),
      c3 = 2 * (r3 - r1),
      d3 = x1 * x1 + y1 * y1 - r1 * r1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / ab - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / ab - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (xa * xb + ya * yb + r1),
      C = xa * xa + ya * ya - r1 * r1,
      r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
  return {
    x: xa + xb * r + x1,
    y: ya + yb * r + y1,
    r: r
  };
}

function place(a, b, c) {
  var ax = a.x,
      ay = a.y,
      da = b.r + c.r,
      db = a.r + c.r,
      dx = b.x - ax,
      dy = b.y - ay,
      dc = dx * dx + dy * dy;
  if (dc) {
    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
    c.x = ax + x * dx + y * dy;
    c.y = ay + x * dy - y * dx;
  } else {
    c.x = ax + db;
    c.y = ay;
  }
}

function intersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return dr * dr - 1e-6 > dx * dx + dy * dy;
}

function distance2(node, x, y) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab - x,
      dy = (a.y * b.r + b.y * a.r) / ab - y;
  return dx * dx + dy * dy;
}

function Node$1(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the weighted centroid.
  var aa = a.r * a.r,
      ba = b.r * b.r,
      ca = c.r * c.r,
      oa = aa + ba + ca,
      ox = aa * a.x + ba * b.x + ca * c.x,
      oy = aa * a.y + ba * b.y + ca * c.y,
      cx, cy, i, j, k, sj, sk;

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node$1(a), b = new Node$1(b), c = new Node$1(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node$1(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Update the weighted centroid.
    oa += ca = c._.r * c._.r;
    ox += ca * c._.x;
    oy += ca * c._.y;

    // Compute the new closest circle pair to the centroid.
    aa = distance2(a, cx = ox / oa, cy = oy / oa);
    while ((c = c.next) !== b) {
      if ((ca = distance2(c, cx, cy)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = enclose(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

var siblings = function(circles) {
  packEnclose(circles);
  return circles;
};

function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}

function constantZero() {
  return 0;
}

var constant$8 = function(x) {
  return function() {
    return x;
  };
};

function defaultRadius$1(d) {
  return Math.sqrt(d.value);
}

var index$2 = function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = constantZero;

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius$1))
          .eachAfter(packChildren(constantZero, 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = optional(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : constant$8(+x), pack) : padding;
  };

  return pack;
};

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = packEnclose(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}

var roundNode = function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
};

var treemapDice = function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
};

var partition = function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        treemapDice(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
};

var keyPrefix$1 = "$";
var preroot = {depth: -1};
var ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

var stratify = function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new Node(d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix$1 + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix$1 + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = required(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = required(x), stratify) : parentId;
  };

  return stratify;
};

function defaultSeparation$1(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(Node.prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
var tree = function() {
  var separation = defaultSeparation$1,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
};

var treemapSlice = function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
};

var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) treemapDice(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else treemapSlice(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

var squarify = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
}))(phi);

var index$3 = function() {
  var tile = squarify,
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = constantZero,
      paddingTop = constantZero,
      paddingRight = constantZero,
      paddingBottom = constantZero,
      paddingLeft = constantZero;

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(roundNode);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = required(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : constant$8(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : constant$8(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : constant$8(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : constant$8(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : constant$8(+x), treemap) : paddingLeft;
  };

  return treemap;
};

var binary = function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
};

var sliceDice = function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
};

var resquarify = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) treemapDice(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else treemapSlice(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
}))(phi);

var area$1 = function(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
};

var centroid$1 = function(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
};

// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
var cross$1 = function(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
};

function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && cross$1(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

var hull = function(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
};

var contains$1 = function(polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0], y = point[1],
      x0 = p[0], y0 = p[1],
      x1, y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
};

var length$2 = function(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
};

var slice$3 = [].slice;

var noabort = {};

function Queue(size) {
  this._size = size;
  this._call =
  this._error = null;
  this._tasks = [];
  this._data = [];
  this._waiting =
  this._active =
  this._ended =
  this._start = 0; // inside a synchronous task callback?
}

Queue.prototype = queue.prototype = {
  constructor: Queue,
  defer: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("defer after await");
    if (this._error != null) return this;
    var t = slice$3.call(arguments, 1);
    t.push(callback);
    ++this._waiting, this._tasks.push(t);
    poke$1(this);
    return this;
  },
  abort: function() {
    if (this._error == null) abort(this, new Error("abort"));
    return this;
  },
  await: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = function(error, results) { callback.apply(null, [error].concat(results)); };
    maybeNotify(this);
    return this;
  },
  awaitAll: function(callback) {
    if (typeof callback !== "function") throw new Error("invalid callback");
    if (this._call) throw new Error("multiple await");
    this._call = callback;
    maybeNotify(this);
    return this;
  }
};

function poke$1(q) {
  if (!q._start) {
    try { start$1(q); } // let the current task complete
    catch (e) {
      if (q._tasks[q._ended + q._active - 1]) abort(q, e); // task errored synchronously
      else if (!q._data) throw e; // await callback errored synchronously
    }
  }
}

function start$1(q) {
  while (q._start = q._waiting && q._active < q._size) {
    var i = q._ended + q._active,
        t = q._tasks[i],
        j = t.length - 1,
        c = t[j];
    t[j] = end(q, i);
    --q._waiting, ++q._active;
    t = c.apply(null, t);
    if (!q._tasks[i]) continue; // task finished synchronously
    q._tasks[i] = t || noabort;
  }
}

function end(q, i) {
  return function(e, r) {
    if (!q._tasks[i]) return; // ignore multiple callbacks
    --q._active, ++q._ended;
    q._tasks[i] = null;
    if (q._error != null) return; // ignore secondary errors
    if (e != null) {
      abort(q, e);
    } else {
      q._data[i] = r;
      if (q._waiting) poke$1(q);
      else maybeNotify(q);
    }
  };
}

function abort(q, e) {
  var i = q._tasks.length, t;
  q._error = e; // ignore active callbacks
  q._data = undefined; // allow gc
  q._waiting = NaN; // prevent starting

  while (--i >= 0) {
    if (t = q._tasks[i]) {
      q._tasks[i] = null;
      if (t.abort) {
        try { t.abort(); }
        catch (e) { /* ignore */ }
      }
    }
  }

  q._active = NaN; // allow notification
  maybeNotify(q);
}

function maybeNotify(q) {
  if (!q._active && q._call) {
    var d = q._data;
    q._data = undefined; // allow gc
    q._call(q._error, d);
  }
}

function queue(concurrency) {
  if (concurrency == null) concurrency = Infinity;
  else if (!((concurrency = +concurrency) >= 1)) throw new Error("invalid concurrency");
  return new Queue(concurrency);
}

var defaultSource$1 = function() {
  return Math.random();
};

var uniform = ((function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;
    else max -= min;
    return function() {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
}))(defaultSource$1);

var normal = ((function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function() {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
        x = source() * 2 - 1;
        y = source() * 2 - 1;
        r = x * x + y * y;
      } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
}))(defaultSource$1);

var logNormal = ((function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = normal.source(source).apply(this, arguments);
    return function() {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
}))(defaultSource$1);

var irwinHall = ((function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function() {
      for (var sum = 0, i = 0; i < n; ++i) sum += source();
      return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
}))(defaultSource$1);

var bates = ((function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = irwinHall.source(source)(n);
    return function() {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
}))(defaultSource$1);

var exponential$1 = ((function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function() {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
}))(defaultSource$1);

var request = function(url, callback) {
  var request,
      event = dispatch("beforesend", "progress", "load", "error"),
      mimeType,
      headers = map$1(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
};

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}

var type$1 = function(defaultMimeType, response) {
  return function(url, callback) {
    var r = request(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
};

var html = type$1("text/html", function(xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
});

var json = type$1("application/json", function(xhr) {
  return JSON.parse(xhr.responseText);
});

var text = type$1("text/plain", function(xhr) {
  return xhr.responseText;
});

var xml = type$1("application/xml", function(xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
});

var dsv$1 = function(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = request(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
};

function responseOf(parse, row) {
  return function(request$$1) {
    return parse(request$$1.responseText, row);
  };
}

var csv$1 = dsv$1("text/csv", csvParse);

var tsv$1 = dsv$1("text/tab-separated-values", tsvParse);

var array$2 = Array.prototype;

var map$3 = array$2.map;
var slice$4 = array$2.slice;

var implicit = {name: "implicit"};

function ordinal(range) {
  var index = map$1(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : slice$4.call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map$1();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$4.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range$$1 = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range$$1[1] < range$$1[0],
        start = range$$1[reverse - 0],
        stop = range$$1[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = [+_[0], +_[1]], rescale()) : range$$1.slice();
  };

  scale.rangeRound = function(_) {
    return range$$1 = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range$$1)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point$1() {
  return pointish(band().paddingInner(1));
}

var constant$9 = function(x) {
  return function() {
    return x;
  };
};

var number$1 = function(x) {
  return +x;
};

var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$9(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range$$1, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range$$1[0], r1 = range$$1[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range$$1, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range$$1.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range$$1 = range$$1.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range$$1[i], range$$1[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range$$1 = unit,
      interpolate$$1 = interpolateValue,
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range$$1.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range$$1, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate$$1)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range$$1, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$1), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = slice$4.call(_), rescale()) : range$$1.slice();
  };

  scale.rangeRound = function(_) {
    return range$$1 = slice$4.call(_), interpolate$$1 = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$$1 = _, rescale()) : interpolate$$1;
  };

  return rescale();
}

var tickFormat = function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = tickStep(start, stop, count == null ? 10 : count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return exports.formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return exports.format(specifier);
};

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return tickFormat(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$2() {
  var scale = continuous(deinterpolateLinear, reinterpolate);

  scale.copy = function() {
    return copy(scale, linear$2());
  };

  return linearish(scale);
}

function identity$6() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$1), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity$6().domain(domain);
  };

  return linearish(scale);
}

var nice = function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
};

function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : constant$9(b);
}

function reinterpolate$1(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log$1() {
  var scale = continuous(deinterpolate, reinterpolate$1).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = exports.format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return copy(scale, log$1().base(base));
  };

  return scale;
}

function raise$1(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow$1() {
  var exponent = 1,
      scale = continuous(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise$1(b, exponent) - (a = raise$1(a, exponent)))
        ? function(x) { return (raise$1(x, exponent) - a) / b; }
        : constant$9(b);
  }

  function reinterpolate(a, b) {
    b = raise$1(b, exponent) - (a = raise$1(a, exponent));
    return function(t) { return raise$1(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return copy(scale, pow$1().exponent(exponent));
  };

  return linearish(scale);
}

function sqrt$1() {
  return pow$1().exponent(0.5);
}

function quantile$$1() {
  var domain = [],
      range$$1 = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range$$1.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range$$1[bisectRight(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range$$1.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = slice$4.call(_), rescale()) : range$$1.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile$$1()
        .domain(domain)
        .range(range$$1);
  };

  return scale;
}

function quantize$1() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range$$1 = [0, 1];

  function scale(x) {
    if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range$$1 = slice$4.call(_)).length - 1, rescale()) : range$$1.slice();
  };

  scale.invertExtent = function(y) {
    var i = range$$1.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize$1()
        .domain([x0, x1])
        .range(range$$1);
  };

  return linearish(scale);
}

function threshold$1() {
  var domain = [0.5],
      range$$1 = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range$$1[bisectRight(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice$4.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range$$1 = slice$4.call(_), n = Math.min(domain.length, range$$1.length - 1), scale) : range$$1.slice();
  };

  scale.invertExtent = function(y) {
    var i = range$$1.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold$1()
        .domain(domain)
        .range(range$$1);
  };

  return scale;
}

var t0$1 = new Date;
var t1$1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(new Date(+start)); while (offseti(start, step), floori(start), start < stop)
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) while (--step >= 0) while (offseti(date, 1), !test(date)) {} // eslint-disable-line no-empty
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0$1.setTime(+start), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var milliseconds = millisecond.range;

var durationSecond$1 = 1e3;
var durationMinute$1 = 6e4;
var durationHour$1 = 36e5;
var durationDay$1 = 864e5;
var durationWeek$1 = 6048e5;

var second = newInterval(function(date) {
  date.setTime(Math.floor(date / durationSecond$1) * durationSecond$1);
}, function(date, step) {
  date.setTime(+date + step * durationSecond$1);
}, function(start, end) {
  return (end - start) / durationSecond$1;
}, function(date) {
  return date.getUTCSeconds();
});

var seconds = second.range;

var minute = newInterval(function(date) {
  date.setTime(Math.floor(date / durationMinute$1) * durationMinute$1);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getMinutes();
});

var minutes = minute.range;

var hour = newInterval(function(date) {
  var offset = date.getTimezoneOffset() * durationMinute$1 % durationHour$1;
  if (offset < 0) offset += durationHour$1;
  date.setTime(Math.floor((+date - offset) / durationHour$1) * durationHour$1 + offset);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getHours();
});

var hours = hour.range;

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationDay$1;
}, function(date) {
  return date.getDate() - 1;
});

var days = day.range;

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute$1) / durationWeek$1;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var months = month.range;

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var years = year.range;

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute$1);
}, function(start, end) {
  return (end - start) / durationMinute$1;
}, function(date) {
  return date.getUTCMinutes();
});

var utcMinutes = utcMinute.range;

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour$1);
}, function(start, end) {
  return (end - start) / durationHour$1;
}, function(date) {
  return date.getUTCHours();
});

var utcHours = utcHour.range;

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay$1;
}, function(date) {
  return date.getUTCDate() - 1;
});

var utcDays = utcDay.range;

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek$1;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcMonths = utcMonth.range;

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

var utcYears = utcYear.range;

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "S": formatSeconds,
    "U": formatWeekNumberSunday,
    "w": formatWeekdayNumber,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "S": formatUTCSeconds,
    "U": formatUTCWeekNumberSunday,
    "w": formatUTCWeekdayNumber,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "S": parseSeconds,
    "U": parseWeekNumberSunday,
    "w": parseWeekdayNumber,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0);
      if (i != string.length) return null;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "W" in d ? 1 : 0;
        var day$$1 = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$$1 + 5) % 7 : d.w + d.U * 7 - (day$$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"};
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d), d), p, 2);
}

function formatWeekdayNumber(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d), d), p, 2);
}

function formatUTCWeekdayNumber(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

var locale$2;





defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale$1(definition) {
  locale$2 = formatLocale$1(definition);
  exports.timeFormat = locale$2.format;
  exports.timeParse = locale$2.parse;
  exports.utcFormat = locale$2.utcFormat;
  exports.utcParse = locale$2.utcParse;
  return locale$2;
}

var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : exports.utcFormat(isoSpecifier);

function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : exports.utcParse(isoSpecifier);

var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

function date$1(t) {
  return new Date(t);
}

function number$2(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format) {
  var scale = continuous(deinterpolateLinear, reinterpolate),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second$$1,  1,      durationSecond],
    [second$$1,  5,  5 * durationSecond],
    [second$$1, 15, 15 * durationSecond],
    [second$$1, 30, 30 * durationSecond],
    [minute$$1,  1,      durationMinute],
    [minute$$1,  5,  5 * durationMinute],
    [minute$$1, 15, 15 * durationMinute],
    [minute$$1, 30, 30 * durationMinute],
    [  hour$$1,  1,      durationHour  ],
    [  hour$$1,  3,  3 * durationHour  ],
    [  hour$$1,  6,  6 * durationHour  ],
    [  hour$$1, 12, 12 * durationHour  ],
    [   day$$1,  1,      durationDay   ],
    [   day$$1,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month$$1,  1,      durationMonth ],
    [ month$$1,  3,  3 * durationMonth ],
    [  year$$1,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second$$1(date) < date ? formatMillisecond
        : minute$$1(date) < date ? formatSecond
        : hour$$1(date) < date ? formatMinute
        : day$$1(date) < date ? formatHour
        : month$$1(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year$$1(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year$$1;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = tickStep(start, stop, interval);
        interval = millisecond$$1;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map$3.call(_, number$2)) : domain().map(date$1);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(year$$1, month$$1, week, day$$1, hour$$1, minute$$1, second$$1, millisecond$$1, format));
  };

  return scale;
}

var time = function() {
  return calendar(year, month, sunday, day, hour, minute, second, millisecond, exports.timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
};

var utcTime = function() {
  return calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, exports.utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
};

var colors = function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
};

var category10 = colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

var category20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

var category20c = colors("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9");

var category20 = colors("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5");

var cubehelix$3 = cubehelixLong(cubehelix(300, 0.5, 0.0), cubehelix(-240, 0.5, 1.0));

var warm = cubehelixLong(cubehelix(-100, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var cool = cubehelixLong(cubehelix(260, 0.75, 0.35), cubehelix(80, 1.50, 0.8));

var rainbow = cubehelix();

var rainbow$1 = function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
};

function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

var viridis = ramp(colors("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));

var magma = ramp(colors("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(colors("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(colors("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return linearish(scale);
}

var constant$10 = function(x) {
  return function constant() {
    return x;
  };
};

var abs$1 = Math.abs;
var atan2$1 = Math.atan2;
var cos$2 = Math.cos;
var max$2 = Math.max;
var min$1 = Math.min;
var sin$2 = Math.sin;
var sqrt$2 = Math.sqrt;

var epsilon$3 = 1e-12;
var pi$4 = Math.PI;
var halfPi$3 = pi$4 / 2;
var tau$4 = 2 * pi$4;

function acos$1(x) {
  return x > 1 ? 0 : x < -1 ? pi$4 : Math.acos(x);
}

function asin$1(x) {
  return x >= 1 ? halfPi$3 : x <= -1 ? -halfPi$3 : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt$2(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt$2(max$2(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

var arc = function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant$10(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi$3,
        a1 = endAngle.apply(this, arguments) - halfPi$3,
        da = abs$1(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon$3)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau$4 - epsilon$3) {
      context.moveTo(r1 * cos$2(a0), r1 * sin$2(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon$3) {
        context.moveTo(r0 * cos$2(a1), r0 * sin$2(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon$3) && (padRadius ? +padRadius.apply(this, arguments) : sqrt$2(r0 * r0 + r1 * r1)),
          rc = min$1(abs$1(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon$3) {
        var p0 = asin$1(rp / r0 * sin$2(ap)),
            p1 = asin$1(rp / r1 * sin$2(ap));
        if ((da0 -= p0 * 2) > epsilon$3) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon$3) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos$2(a01),
          y01 = r1 * sin$2(a01),
          x10 = r0 * cos$2(a10),
          y10 = r0 * sin$2(a10);

      // Apply rounded corners?
      if (rc > epsilon$3) {
        var x11 = r1 * cos$2(a11),
            y11 = r1 * sin$2(a11),
            x00 = r0 * cos$2(a00),
            y00 = r0 * sin$2(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < pi$4) {
          var oc = da0 > epsilon$3 ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin$2(acos$1((ax * bx + ay * by) / (sqrt$2(ax * ax + ay * ay) * sqrt$2(bx * bx + by * by))) / 2),
              lc = sqrt$2(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min$1(rc, (r0 - lc) / (kc - 1));
          rc1 = min$1(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon$3)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon$3) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon$3) || !(da0 > epsilon$3)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon$3) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2$1(t0.y01, t0.x01), atan2$1(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2$1(t0.cy + t0.y11, t0.cx + t0.x11), atan2$1(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2$1(t1.y11, t1.x11), atan2$1(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi$4 / 2;
    return [cos$2(a) * r, sin$2(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant$10(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
};

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

var curveLinear = function(context) {
  return new Linear(context);
};

function x$3(p) {
  return p[0];
}

function y$3(p) {
  return p[1];
}

var line = function() {
  var x$$1 = x$3,
      y$$1 = y$3,
      defined = constant$10(true),
      context = null,
      curve = curveLinear,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$$1(d, i, data), +y$$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : x$$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), line) : y$$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
};

var area$2 = function() {
  var x0 = x$3,
      x1 = null,
      y0 = constant$10(0),
      y1 = y$3,
      defined = constant$10(true),
      context = null,
      curve = curveLinear,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant$10(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant$10(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant$10(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant$10(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
};

var descending$1 = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

var identity$7 = function(d) {
  return d;
};

var pie = function() {
  var value = identity$7,
      sortValues = descending$1,
      sort = null,
      startAngle = constant$10(0),
      endAngle = constant$10(tau$4),
      padAngle = constant$10(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau$4, Math.max(-tau$4, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant$10(+_), pie) : padAngle;
  };

  return pie;
};

var curveRadialLinear = curveRadial(curveLinear);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

function radialLine(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return l;
}

var radialLine$1 = function() {
  return radialLine(line().curve(curveRadialLinear));
};

var radialArea = function() {
  var a = area$2().curve(curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return radialLine(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return radialLine(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return radialLine(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return radialLine(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(curveRadial(_)) : c()._curve;
  };

  return a;
};

var slice$5 = Array.prototype.slice;

var radialPoint = function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
};

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link$2(curve) {
  var source = linkSource,
      target = linkTarget,
      x$$1 = x$3,
      y$$1 = y$3,
      context = null;

  function link() {
    var buffer, argv = slice$5.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = path();
    curve(context, +x$$1.apply(this, (argv[0] = s, argv)), +y$$1.apply(this, argv), +x$$1.apply(this, (argv[0] = t, argv)), +y$$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : x$$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$10(+_), link) : y$$1;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial$1(context, x0, y0, x1, y1) {
  var p0 = radialPoint(x0, y0),
      p1 = radialPoint(x0, y0 = (y0 + y1) / 2),
      p2 = radialPoint(x1, y0),
      p3 = radialPoint(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link$2(curveHorizontal);
}

function linkVertical() {
  return link$2(curveVertical);
}

function linkRadial() {
  var l = link$2(curveRadial$1);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

var circle$2 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi$4);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau$4);
  }
};

var cross$2 = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3);
var tan30_2 = tan30 * 2;

var diamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810;
var kr = Math.sin(pi$4 / 10) / Math.sin(7 * pi$4 / 10);
var kx = Math.sin(tau$4 / 10) * kr;
var ky = -Math.cos(tau$4 / 10) * kr;

var star = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau$4 * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

var square = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

var triangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c = -0.5;
var s = Math.sqrt(3) / 2;
var k = 1 / Math.sqrt(12);
var a = (k / 2 + 1) * 3;

var wye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

var symbols = [
  circle$2,
  cross$2,
  diamond,
  square,
  star,
  triangle,
  wye
];

var symbol = function() {
  var type = constant$10(circle$2),
      size = constant$10(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant$10(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant$10(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
};

var noop$2 = function() {};

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$2(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

var basis$2 = function(context) {
  return new Basis(context);
};

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

var basisClosed$1 = function(context) {
  return new BasisClosed(context);
};

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

var basisOpen = function(context) {
  return new BasisOpen(context);
};

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var bundle = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
}))(0.85);

function point$3(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$3(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinal = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalClosed = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalOpen = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
}))(0);

function point$4(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon$3) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$3) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRom = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomClosed = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$4(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomOpen = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
}))(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop$2,
  areaEnd: noop$2,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

var linearClosed = function(context) {
  return new LinearClosed(context);
};

function sign$1(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign$1(s0) + sign$1(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$5(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$5(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$5(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$5(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

var natural = function(context) {
  return new Natural(context);
};

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

var step = function(context) {
  return new Step(context, 0.5);
};

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

var none$1 = function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
};

var none$2 = function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
};

function stackValue(d, key) {
  return d[key];
}

var stack = function() {
  var keys = constant$10([]),
      order = none$2,
      offset = none$1,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant$10(slice$5.call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant$10(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none$2 : typeof _ === "function" ? _ : constant$10(slice$5.call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
  };

  return stack;
};

var expand = function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none$1(series, order);
};

var diverging = function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
};

var silhouette = function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  none$1(series, order);
};

var wiggle = function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  none$1(series, order);
};

var ascending$2 = function(series) {
  var sums = series.map(sum$2);
  return none$2(series).sort(function(a, b) { return sums[a] - sums[b]; });
};

function sum$2(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

var descending$2 = function(series) {
  return ascending$2(series).reverse();
};

var insideOut = function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(sum$2),
      order = none$2(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
};

var reverse = function(series) {
  return none$2(series).reverse();
};

var constant$11 = function(x) {
  return function() {
    return x;
  };
};

function x$4(d) {
  return d[0];
}

function y$4(d) {
  return d[1];
}

function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = edges.push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  cells[left.index].halfedges.push(index);
  cells[right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = edges.length,
      edge;

  while (i--) {
    if (!connectEdge(edge = edges[i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > epsilon$4
            || Math.abs(edge[0][1] - edge[1][1]) > epsilon$4)) {
      delete edges[i];
    }
  }
}

function createCell(site) {
  return cells[site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = cells.length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = cells[i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, edges[halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = cells.length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!edges[halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, edges[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, edges[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > epsilon$4 || Math.abs(endY - startY) > epsilon$4) {
          halfedges.splice(iHalfedge, 0, edges.push(createBorderEdge(site, end,
              Math.abs(endX - x0) < epsilon$4 && y1 - endY > epsilon$4 ? [x0, Math.abs(startX - x0) < epsilon$4 ? startY : y1]
              : Math.abs(endY - y1) < epsilon$4 && x1 - endX > epsilon$4 ? [Math.abs(startY - y1) < epsilon$4 ? startX : x1, y1]
              : Math.abs(endX - x1) < epsilon$4 && endY - y0 > epsilon$4 ? [x1, Math.abs(startX - x1) < epsilon$4 ? startY : y0]
              : Math.abs(endY - y0) < epsilon$4 && endX - x0 > epsilon$4 ? [Math.abs(startY - y0) < epsilon$4 ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = cells[iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        edges.push(createBorderEdge(site = cover.site, v00, v01)) - 1,
        edges.push(createBorderEdge(site, v01, v11)) - 1,
        edges.push(createBorderEdge(site, v11, v10)) - 1,
        edges.push(createBorderEdge(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = cells[iCell]) {
      if (!cell.halfedges.length) {
        delete cells[iCell];
      }
    }
  }
}

var circlePool = [];

var firstCircle;

function Circle() {
  RedBlackNode(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -epsilon2$2) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = circles._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  circles.insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    circles.remove(circle);
    circlePool.push(circle);
    RedBlackNode(circle);
    arc.circle = null;
  }
}

var beachPool = [];

function Beach() {
  RedBlackNode(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  detachCircle(beach);
  beaches.remove(beach);
  beachPool.push(beach);
  RedBlackNode(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < epsilon$4
      && Math.abs(y - lArc.circle.cy) < epsilon$4) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  detachCircle(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < epsilon$4
      && Math.abs(y - rArc.circle.cy) < epsilon$4) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  detachCircle(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    setEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = createEdge(lArc.site, rArc.site, null, vertex);

  attachCircle(lArc);
  attachCircle(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = beaches._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > epsilon$4) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > epsilon$4) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -epsilon$4) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -epsilon$4) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  createCell(site);
  var newArc = createBeach(site);
  beaches.insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    detachCircle(lArc);
    rArc = createBeach(lArc.site);
    beaches.insert(newArc, rArc);
    newArc.edge = rArc.edge = createEdge(lArc.site, newArc.site);
    attachCircle(lArc);
    attachCircle(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = createEdge(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  detachCircle(lArc);
  detachCircle(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  setEdgeEnd(rArc.edge, lSite, rSite, vertex);
  newArc.edge = createEdge(lSite, site, null, vertex);
  rArc.edge = createEdge(site, rSite, null, vertex);
  attachCircle(lArc);
  attachCircle(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}

var epsilon$4 = 1e-6;
var epsilon2$2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new RedBlackTree;
  circles = new RedBlackTree;

  while (true) {
    circle = firstCircle;
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        addBeach(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      removeBeach(circle.arc);
    } else {
      break;
    }
  }

  sortCellHalfedges();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    clipEdges(x0, y0, x1, y1);
    clipCells(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return cellHalfedgeStart(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
};

var voronoi = function() {
  var x$$1 = x$4,
      y$$1 = y$4,
      extent = null;

  function voronoi(data) {
    return new Diagram(data.map(function(d, i) {
      var s = [Math.round(x$$1(d, i, data) / epsilon$4) * epsilon$4, Math.round(y$$1(d, i, data) / epsilon$4) * epsilon$4];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : x$$1;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y$$1 = typeof _ === "function" ? _ : constant$11(+_), voronoi) : y$$1;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
};

var constant$12 = function(x) {
  return function() {
    return x;
  };
};

function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity$8 = new Transform(1, 0, 0);

transform$1.prototype = Transform.prototype;

function transform$1(node) {
  return node.__zoom || identity$8;
}

function nopropagation$2() {
  exports.event.stopImmediatePropagation();
}

var noevent$2 = function() {
  exports.event.preventDefault();
  exports.event.stopImmediatePropagation();
};

// Ignore right-click, since that should open the context menu.
function defaultFilter$2() {
  return !exports.event.button;
}

function defaultExtent$1() {
  var e = this, w, h;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    w = e.width.baseVal.value;
    h = e.height.baseVal.value;
  } else {
    w = e.clientWidth;
    h = e.clientHeight;
  }
  return [[0, 0], [w, h]];
}

function defaultTransform() {
  return this.__zoom || identity$8;
}

var zoom = function() {
  var filter = defaultFilter$2,
      extent = defaultExtent$1,
      k0 = 0,
      k1 = Infinity,
      x0 = -k1,
      x1 = k1,
      y0 = x0,
      y1 = x1,
      duration = 250,
      interpolate$$1 = interpolateZoom,
      gestures = [],
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection$$1) {
    selection$$1
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        .property("__zoom", defaultTransform);
  }

  zoom.transform = function(collection, transform) {
    var selection$$1 = collection.selection ? collection.selection() : collection;
    selection$$1.property("__zoom", defaultTransform);
    if (collection !== selection$$1) {
      schedule(collection, transform);
    } else {
      selection$$1.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection$$1, k) {
    zoom.scaleTo(selection$$1, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    });
  };

  zoom.scaleTo = function(selection$$1, k) {
    zoom.transform(selection$$1, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = centroid(e),
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e);
    });
  };

  zoom.translateBy = function(selection$$1, x, y) {
    zoom.transform(selection$$1, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments));
    });
  };

  function scale(transform, k) {
    k = Math.max(k0, Math.min(k1, k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function constrain(transform, extent) {
    var dx0 = transform.invertX(extent[0][0]) - x0,
        dx1 = transform.invertX(extent[1][0]) - x1,
        dy0 = transform.invertY(extent[0][1]) - y0,
        dy1 = transform.invertY(extent[1][1]) - y1;
    return transform.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition$$1, transform, center) {
    transition$$1
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = center || centroid(e),
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate$$1(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args) {
    for (var i = 0, n = gestures.length, g; i < n; ++i) {
      if ((g = gestures[i]).that === that) {
        return g;
      }
    }
    return new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.index = -1;
    this.active = 0;
    this.extent = extent.apply(that, args);
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.index = gestures.push(this) - 1;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        gestures.splice(this.index, 1);
        this.index = -1;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      customEvent(new ZoomEvent(zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(k0, Math.min(k1, t.k * Math.pow(2, -exports.event.deltaY * (exports.event.deltaMode ? 120 : 1) / 500))),
        p = mouse(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent$2();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        v = select(exports.event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = mouse(this),
        x0 = exports.event.clientX,
        y0 = exports.event.clientY;

    dragDisable(exports.event.view);
    nopropagation$2();
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved() {
      noevent$2();
      if (!g.moved) {
        var dx = exports.event.clientX - x0, dy = exports.event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = mouse(g.that), g.mouse[1]), g.extent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      yesdrag(exports.event.view, g.moved);
      noevent$2();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = mouse(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (exports.event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments));

    noevent$2();
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0);
    else select(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        touches$$1 = exports.event.changedTouches,
        started,
        n = touches$$1.length, i, t, p;

    nopropagation$2();
    for (i = 0; i < n; ++i) {
      t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true;
      else if (!g.touch1) g.touch1 = p;
    }

    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
    if (touchstarting) {
      touchstarting = clearTimeout(touchstarting);
      if (!g.touch1) {
        g.end();
        p = select(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
        return;
      }
    }

    if (started) {
      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved() {
    var g = gesture(this, arguments),
        touches$$1 = exports.event.changedTouches,
        n = touches$$1.length, i, t, p, l;

    noevent$2();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    for (i = 0; i < n; ++i) {
      t = touches$$1[i], p = touch(this, touches$$1, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent));
  }

  function touchended() {
    var g = gesture(this, arguments),
        touches$$1 = exports.event.changedTouches,
        n = touches$$1.length, i, t;

    nopropagation$2();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches$$1[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else g.end();
  }

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant$12(!!_), zoom) : filter;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant$12([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (k0 = +_[0], k1 = +_[1], zoom) : [k0, k1];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (x0 = +_[0][0], x1 = +_[1][0], y0 = +_[0][1], y1 = +_[1][1], zoom) : [[x0, y0], [x1, y1]];
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate$$1 = _, zoom) : interpolate$$1;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };
    
  return zoom;
};

exports.version = version;
exports.bisect = bisectRight;
exports.bisectRight = bisectRight;
exports.bisectLeft = bisectLeft;
exports.ascending = ascending;
exports.bisector = bisector;
exports.cross = cross;
exports.descending = descending;
exports.deviation = deviation;
exports.extent = extent;
exports.histogram = histogram;
exports.thresholdFreedmanDiaconis = freedmanDiaconis;
exports.thresholdScott = scott;
exports.thresholdSturges = sturges;
exports.max = max;
exports.mean = mean;
exports.median = median;
exports.merge = merge;
exports.min = min;
exports.pairs = pairs;
exports.permute = permute;
exports.quantile = threshold;
exports.range = sequence;
exports.scan = scan;
exports.shuffle = shuffle;
exports.sum = sum;
exports.ticks = ticks;
exports.tickIncrement = tickIncrement;
exports.tickStep = tickStep;
exports.transpose = transpose;
exports.variance = variance;
exports.zip = zip;
exports.axisTop = axisTop;
exports.axisRight = axisRight;
exports.axisBottom = axisBottom;
exports.axisLeft = axisLeft;
exports.brush = brush;
exports.brushX = brushX;
exports.brushY = brushY;
exports.brushSelection = brushSelection;
exports.chord = chord;
exports.ribbon = ribbon;
exports.nest = nest;
exports.set = set$2;
exports.map = map$1;
exports.keys = keys;
exports.values = values;
exports.entries = entries;
exports.color = color;
exports.rgb = rgb;
exports.hsl = hsl;
exports.lab = lab;
exports.hcl = hcl;
exports.cubehelix = cubehelix;
exports.dispatch = dispatch;
exports.drag = drag;
exports.dragDisable = dragDisable;
exports.dragEnable = yesdrag;
exports.dsvFormat = dsv;
exports.csvParse = csvParse;
exports.csvParseRows = csvParseRows;
exports.csvFormat = csvFormat;
exports.csvFormatRows = csvFormatRows;
exports.tsvParse = tsvParse;
exports.tsvParseRows = tsvParseRows;
exports.tsvFormat = tsvFormat;
exports.tsvFormatRows = tsvFormatRows;
exports.easeLinear = linear$1;
exports.easeQuad = quadInOut;
exports.easeQuadIn = quadIn;
exports.easeQuadOut = quadOut;
exports.easeQuadInOut = quadInOut;
exports.easeCubic = cubicInOut;
exports.easeCubicIn = cubicIn;
exports.easeCubicOut = cubicOut;
exports.easeCubicInOut = cubicInOut;
exports.easePoly = polyInOut;
exports.easePolyIn = polyIn;
exports.easePolyOut = polyOut;
exports.easePolyInOut = polyInOut;
exports.easeSin = sinInOut;
exports.easeSinIn = sinIn;
exports.easeSinOut = sinOut;
exports.easeSinInOut = sinInOut;
exports.easeExp = expInOut;
exports.easeExpIn = expIn;
exports.easeExpOut = expOut;
exports.easeExpInOut = expInOut;
exports.easeCircle = circleInOut;
exports.easeCircleIn = circleIn;
exports.easeCircleOut = circleOut;
exports.easeCircleInOut = circleInOut;
exports.easeBounce = bounceOut;
exports.easeBounceIn = bounceIn;
exports.easeBounceOut = bounceOut;
exports.easeBounceInOut = bounceInOut;
exports.easeBack = backInOut;
exports.easeBackIn = backIn;
exports.easeBackOut = backOut;
exports.easeBackInOut = backInOut;
exports.easeElastic = elasticOut;
exports.easeElasticIn = elasticIn;
exports.easeElasticOut = elasticOut;
exports.easeElasticInOut = elasticInOut;
exports.forceCenter = center$1;
exports.forceCollide = collide;
exports.forceLink = link;
exports.forceManyBody = manyBody;
exports.forceSimulation = simulation;
exports.forceX = x$2;
exports.forceY = y$2;
exports.formatDefaultLocale = defaultLocale;
exports.formatLocale = formatLocale;
exports.formatSpecifier = formatSpecifier;
exports.precisionFixed = precisionFixed;
exports.precisionPrefix = precisionPrefix;
exports.precisionRound = precisionRound;
exports.geoArea = area;
exports.geoBounds = bounds;
exports.geoCentroid = centroid;
exports.geoCircle = circle;
exports.geoClipExtent = extent$1;
exports.geoContains = contains;
exports.geoDistance = distance;
exports.geoGraticule = graticule;
exports.geoGraticule10 = graticule10;
exports.geoInterpolate = interpolate$1;
exports.geoLength = length$1;
exports.geoPath = index$1;
exports.geoAlbers = albers;
exports.geoAlbersUsa = albersUsa;
exports.geoAzimuthalEqualArea = azimuthalEqualArea;
exports.geoAzimuthalEqualAreaRaw = azimuthalEqualAreaRaw;
exports.geoAzimuthalEquidistant = azimuthalEquidistant;
exports.geoAzimuthalEquidistantRaw = azimuthalEquidistantRaw;
exports.geoConicConformal = conicConformal;
exports.geoConicConformalRaw = conicConformalRaw;
exports.geoConicEqualArea = conicEqualArea;
exports.geoConicEqualAreaRaw = conicEqualAreaRaw;
exports.geoConicEquidistant = conicEquidistant;
exports.geoConicEquidistantRaw = conicEquidistantRaw;
exports.geoEquirectangular = equirectangular;
exports.geoEquirectangularRaw = equirectangularRaw;
exports.geoGnomonic = gnomonic;
exports.geoGnomonicRaw = gnomonicRaw;
exports.geoIdentity = identity$5;
exports.geoProjection = projection;
exports.geoProjectionMutator = projectionMutator;
exports.geoMercator = mercator;
exports.geoMercatorRaw = mercatorRaw;
exports.geoOrthographic = orthographic;
exports.geoOrthographicRaw = orthographicRaw;
exports.geoStereographic = stereographic;
exports.geoStereographicRaw = stereographicRaw;
exports.geoTransverseMercator = transverseMercator;
exports.geoTransverseMercatorRaw = transverseMercatorRaw;
exports.geoRotation = rotation;
exports.geoStream = geoStream;
exports.geoTransform = transform;
exports.cluster = cluster;
exports.hierarchy = hierarchy;
exports.pack = index$2;
exports.packSiblings = siblings;
exports.packEnclose = enclose;
exports.partition = partition;
exports.stratify = stratify;
exports.tree = tree;
exports.treemap = index$3;
exports.treemapBinary = binary;
exports.treemapDice = treemapDice;
exports.treemapSlice = treemapSlice;
exports.treemapSliceDice = sliceDice;
exports.treemapSquarify = squarify;
exports.treemapResquarify = resquarify;
exports.interpolate = interpolateValue;
exports.interpolateArray = array$1;
exports.interpolateBasis = basis$1;
exports.interpolateBasisClosed = basisClosed;
exports.interpolateDate = date;
exports.interpolateNumber = reinterpolate;
exports.interpolateObject = object;
exports.interpolateRound = interpolateRound;
exports.interpolateString = interpolateString;
exports.interpolateTransformCss = interpolateTransformCss;
exports.interpolateTransformSvg = interpolateTransformSvg;
exports.interpolateZoom = interpolateZoom;
exports.interpolateRgb = interpolateRgb;
exports.interpolateRgbBasis = rgbBasis;
exports.interpolateRgbBasisClosed = rgbBasisClosed;
exports.interpolateHsl = hsl$2;
exports.interpolateHslLong = hslLong;
exports.interpolateLab = lab$1;
exports.interpolateHcl = hcl$2;
exports.interpolateHclLong = hclLong;
exports.interpolateCubehelix = cubehelix$2;
exports.interpolateCubehelixLong = cubehelixLong;
exports.quantize = quantize;
exports.path = path;
exports.polygonArea = area$1;
exports.polygonCentroid = centroid$1;
exports.polygonHull = hull;
exports.polygonContains = contains$1;
exports.polygonLength = length$2;
exports.quadtree = quadtree;
exports.queue = queue;
exports.randomUniform = uniform;
exports.randomNormal = normal;
exports.randomLogNormal = logNormal;
exports.randomBates = bates;
exports.randomIrwinHall = irwinHall;
exports.randomExponential = exponential$1;
exports.request = request;
exports.html = html;
exports.json = json;
exports.text = text;
exports.xml = xml;
exports.csv = csv$1;
exports.tsv = tsv$1;
exports.scaleBand = band;
exports.scalePoint = point$1;
exports.scaleIdentity = identity$6;
exports.scaleLinear = linear$2;
exports.scaleLog = log$1;
exports.scaleOrdinal = ordinal;
exports.scaleImplicit = implicit;
exports.scalePow = pow$1;
exports.scaleSqrt = sqrt$1;
exports.scaleQuantile = quantile$$1;
exports.scaleQuantize = quantize$1;
exports.scaleThreshold = threshold$1;
exports.scaleTime = time;
exports.scaleUtc = utcTime;
exports.schemeCategory10 = category10;
exports.schemeCategory20b = category20b;
exports.schemeCategory20c = category20c;
exports.schemeCategory20 = category20;
exports.interpolateCubehelixDefault = cubehelix$3;
exports.interpolateRainbow = rainbow$1;
exports.interpolateWarm = warm;
exports.interpolateCool = cool;
exports.interpolateViridis = viridis;
exports.interpolateMagma = magma;
exports.interpolateInferno = inferno;
exports.interpolatePlasma = plasma;
exports.scaleSequential = sequential;
exports.creator = creator;
exports.local = local$1;
exports.matcher = matcher$1;
exports.mouse = mouse;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.touch = touch;
exports.touches = touches;
exports.window = defaultView;
exports.customEvent = customEvent;
exports.arc = arc;
exports.area = area$2;
exports.line = line;
exports.pie = pie;
exports.radialArea = radialArea;
exports.radialLine = radialLine$1;
exports.linkHorizontal = linkHorizontal;
exports.linkVertical = linkVertical;
exports.linkRadial = linkRadial;
exports.symbol = symbol;
exports.symbols = symbols;
exports.symbolCircle = circle$2;
exports.symbolCross = cross$2;
exports.symbolDiamond = diamond;
exports.symbolSquare = square;
exports.symbolStar = star;
exports.symbolTriangle = triangle;
exports.symbolWye = wye;
exports.curveBasisClosed = basisClosed$1;
exports.curveBasisOpen = basisOpen;
exports.curveBasis = basis$2;
exports.curveBundle = bundle;
exports.curveCardinalClosed = cardinalClosed;
exports.curveCardinalOpen = cardinalOpen;
exports.curveCardinal = cardinal;
exports.curveCatmullRomClosed = catmullRomClosed;
exports.curveCatmullRomOpen = catmullRomOpen;
exports.curveCatmullRom = catmullRom;
exports.curveLinearClosed = linearClosed;
exports.curveLinear = curveLinear;
exports.curveMonotoneX = monotoneX;
exports.curveMonotoneY = monotoneY;
exports.curveNatural = natural;
exports.curveStep = step;
exports.curveStepAfter = stepAfter;
exports.curveStepBefore = stepBefore;
exports.stack = stack;
exports.stackOffsetExpand = expand;
exports.stackOffsetDiverging = diverging;
exports.stackOffsetNone = none$1;
exports.stackOffsetSilhouette = silhouette;
exports.stackOffsetWiggle = wiggle;
exports.stackOrderAscending = ascending$2;
exports.stackOrderDescending = descending$2;
exports.stackOrderInsideOut = insideOut;
exports.stackOrderNone = none$2;
exports.stackOrderReverse = reverse;
exports.timeInterval = newInterval;
exports.timeMillisecond = millisecond;
exports.timeMilliseconds = milliseconds;
exports.utcMillisecond = millisecond;
exports.utcMilliseconds = milliseconds;
exports.timeSecond = second;
exports.timeSeconds = seconds;
exports.utcSecond = second;
exports.utcSeconds = seconds;
exports.timeMinute = minute;
exports.timeMinutes = minutes;
exports.timeHour = hour;
exports.timeHours = hours;
exports.timeDay = day;
exports.timeDays = days;
exports.timeWeek = sunday;
exports.timeWeeks = sundays;
exports.timeSunday = sunday;
exports.timeSundays = sundays;
exports.timeMonday = monday;
exports.timeMondays = mondays;
exports.timeTuesday = tuesday;
exports.timeTuesdays = tuesdays;
exports.timeWednesday = wednesday;
exports.timeWednesdays = wednesdays;
exports.timeThursday = thursday;
exports.timeThursdays = thursdays;
exports.timeFriday = friday;
exports.timeFridays = fridays;
exports.timeSaturday = saturday;
exports.timeSaturdays = saturdays;
exports.timeMonth = month;
exports.timeMonths = months;
exports.timeYear = year;
exports.timeYears = years;
exports.utcMinute = utcMinute;
exports.utcMinutes = utcMinutes;
exports.utcHour = utcHour;
exports.utcHours = utcHours;
exports.utcDay = utcDay;
exports.utcDays = utcDays;
exports.utcWeek = utcSunday;
exports.utcWeeks = utcSundays;
exports.utcSunday = utcSunday;
exports.utcSundays = utcSundays;
exports.utcMonday = utcMonday;
exports.utcMondays = utcMondays;
exports.utcTuesday = utcTuesday;
exports.utcTuesdays = utcTuesdays;
exports.utcWednesday = utcWednesday;
exports.utcWednesdays = utcWednesdays;
exports.utcThursday = utcThursday;
exports.utcThursdays = utcThursdays;
exports.utcFriday = utcFriday;
exports.utcFridays = utcFridays;
exports.utcSaturday = utcSaturday;
exports.utcSaturdays = utcSaturdays;
exports.utcMonth = utcMonth;
exports.utcMonths = utcMonths;
exports.utcYear = utcYear;
exports.utcYears = utcYears;
exports.timeFormatDefaultLocale = defaultLocale$1;
exports.timeFormatLocale = formatLocale$1;
exports.isoFormat = formatIso;
exports.isoParse = parseIso;
exports.now = now;
exports.timer = timer;
exports.timerFlush = timerFlush;
exports.timeout = timeout$1;
exports.interval = interval$1;
exports.transition = transition;
exports.active = active;
exports.interrupt = interrupt;
exports.voronoi = voronoi;
exports.zoom = zoom;
exports.zoomTransform = transform$1;
exports.zoomIdentity = identity$8;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var robertsonData = [
  {
    "name": "Australia",
    "region": "OC",
    "code": "AUS",
    "Population": [[1975,12925179],[1976,13104717],[1977,13274487],[1978,13445160],[1979,13624504],[1980,13815623],[1981,14016589],[1982,14224073],[1983,14432572],[1984,14638327],[1985,14840224],[1986,15040448],[1987,15242390],[1988,15450858],[1989,15669117],[1990,15898038],[1991,16135897],[1992,16380120],[1993,16626941],[1994,16873335],[1995,17119108],[1996,17364316],[1997,17606545],[1998,17842944],[1999,18071758],[2000,18291108]],
    "Arable Area": [[1974,0],[1975,41283],[1976,40787],[1977,40387],[1978,42287],[1979,42387],[1980,42233],[1981,41241],[1982,42670],[1983,44087],[1984,44186],[1985,43171],[1986,46531],[1987,44975],[1988,47239],[1989,47310],[1990,46975],[1991,47106],[1992,47223],[1993,47877],[1994,48081],[1995,45874],[1996,47378],[1997,46486],[1998,52100],[1999,46348],[2000,52221]],
    "Energy Consumption": [[1975,57974],[1976,60888],[1977,64772],[1978,69743],[1979,73933],[1980,76596],[1981,82607],[1982,86295],[1983,91232],[1984,96135],[1985,101480],[1986,105329],[1987,106287],[1988,112947],[1989,120996],[1990,126211],[1991,131523],[1992,139017],[1993,147788],[1994,155077],[1995,156851],[1996,159761],[1997,163747],[1998,167513],[1999,173384],[2000,177672]],
    "GDP Per Capita": [[1975,3798],[1976,4325],[1977,4852],[1978,5379],[1979,5906],[1980,6433],[1981,6860],[1982,7577],[1983,8377],[1984,9259],[1985,10429],[1986,10490],[1987,11351],[1988,12327],[1989,13064],[1990,13388],[1991,14334],[1992,15252],[1993,16215],[1994,16703],[1995,17004],[1996,17714],[1997,18595],[1998,19624],[1999,20753],[2000,21602]],
    "Life Expectancy (Women)": [[1975,73.76],[1976,74.12],[1977,74.48],[1978,74.84],[1979,75.2],[1980,75.56],[1981,75.92],[1982,76.28],[1983,76.64],[1984,77],[1985,77.34],[1986,77.68],[1987,78.02],[1988,78.36],[1989,78.7],[1990,78.84],[1991,78.98],[1992,79.12],[1993,79.26],[1994,79.4],[1995,79.64],[1996,79.88],[1997,80.12],[1998,80.36],[1999,80.6],[2000,80.83]],
    "Life Expectancy (Men)": [[1975,67.04],[1976,67.38],[1977,67.72],[1978,68.06],[1979,68.4],[1980,68.74],[1981,69.08],[1982,69.42],[1983,69.75],[1984,70.1],[1985,70.46],[1986,70.82],[1987,71.18],[1988,71.54],[1989,71.9],[1990,72.12],[1991,72.34],[1992,72.56],[1993,72.78],[1994,73],[1995,73.34],[1996,73.68],[1997,74.02],[1998,74.36],[1999,74.7],[2000,75.04]],
    "Life Expectancy": [[1975,70.26],[1976,70.62],[1977,70.98],[1978,71.34],[1979,71.7],[1980,72.06],[1981,72.42],[1982,72.78],[1983,73.14],[1984,73.5],[1985,73.84],[1986,74.18],[1987,74.52],[1988,74.86],[1989,75.2],[1990,75.38],[1991,75.56],[1992,75.74],[1993,75.92],[1994,76.1],[1995,76.39],[1996,76.69],[1997,77],[1998,77.3],[1999,77.6],[2000,77.89]],
    "Infant Mortality": [[1975,19.33],[1976,18.65],[1977,17.95],[1978,17.29],[1979,16.6],[1980,15.9],[1981,15.24],[1982,14.55],[1983,13.85],[1984,13.19],[1985,12.5],[1986,12],[1987,11.5],[1988,11],[1989,10.5],[1990,10],[1991,9.72],[1992,9.44],[1993,9.16],[1994,8.87],[1995,8.6],[1996,8.2],[1997,7.8],[1998,7.39],[1999,7],[2000,6.6]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,2.03],[1989,4.19],[1990,6.16],[1991,8.2],[1992,10.3],[1993,13.1],[1994,15],[1995,16],[1996,18.4],[1997,20.8],[1998,24],[1999,27.6],[2000,28.9]],
    "P Index": [[1975,0.010545315378442414],[1976,0.010691795735303607],[1977,0.010830306636529669],[1978,0.010969554271830108],[1979,0.011115876349167017],[1980,0.011271805340928951],[1981,0.011435768242359102],[1982,0.011605049009455692],[1983,0.011775157888496353],[1984,0.011943028009729599],[1985,0.01210775048970155],[1986,0.012271108012745004],[1987,0.012435867207039599],[1988,0.012605950793991325],[1989,0.012784022601676423],[1990,0.0129707932562065],[1991,0.013164856191087397],[1992,0.01336411134706391],[1993,0.013565486143267701],[1994,0.0137665125613433],[1995,0.013967032321766418],[1996,0.014167091113471903],[1997,0.014364719417018395],[1998,0.014557591176097971],[1999,0.014744274532127542],[2000,0.014923236458168282]],
    "E Index": [[1975,0.015716243380290852],[1976,0.0165062032452332],[1977,0.017559121610173513],[1978,0.018906716149853814],[1979,0.020042588433350186],[1980,0.020764504397777595],[1981,0.022394033824053656],[1982,0.02339381830652015],[1983,0.02473219574413867],[1984,0.0260613560796954],[1985,0.027510338742055333],[1986,0.02855376891369675],[1987,0.02881347431884938],[1988,0.030618941958010678],[1989,0.03280095532551958],[1990,0.03421469612705504],[1991,0.0356547327785903],[1992,0.037686290509502424],[1993,0.04006403175020569],[1994,0.04204001577751],[1995,0.04252093163214546],[1996,0.043309807132139354],[1997,0.044390376803265026],[1998,0.0454113064022262],[1999,0.04700288305530668],[2000,0.04816532228003996]],
    "G Index": [[1975,0.13058726447531288],[1976,0.1487071929583276],[1977,0.16682712144134232],[1978,0.18494704992435704],[1979,0.20306697840737176],[1980,0.22118690689038648],[1981,0.23586851877320864],[1982,0.26052124879658917],[1983,0.28802778159812953],[1984,0.3183537340118278],[1985,0.3585820382340806],[1986,0.36067941136019804],[1987,0.39028331728785587],[1988,0.4238412873057351],[1989,0.44918168064915415],[1990,0.460321826433778],[1991,0.4928483014715995],[1992,0.5244120478613671],[1993,0.5575230367212213],[1994,0.5743020217301609],[1995,0.5846513546967405],[1996,0.6090634025581075],[1997,0.6393549718058039],[1998,0.6747352496217852],[1999,0.713553844037959],[2000,0.7427451519735937]]
  },
  {
    "name": "China",
    "region": "AS",
    "code": "CHN",
    "Population": [[1975,851410624],[1976,871825538],[1977,891587287],[1978,910328330],[1979,927807624],[1980,943877441],[1981,958635696],[1982,972412497],[1983,985695522],[1984,998877093],[1985,1011976337],[1986,1024987016],[1987,1038240611],[1988,1052132282],[1989,1066906060],[1990,1082759055],[1991,1099532095],[1992,1116665305],[1993,1133368548],[1994,1149068978],[1995,1163550191],[1996,1176963429],[1997,1189550675],[1998,1201711768],[1999,1213731655],[2000,1225679701]],
    "Arable Area": [[1975,102165],[1976,101781],[1977,101388],[1978,102029],[1979,100637],[1980,100590],[1981,100532],[1982,100316],[1983,100423],[1984,100219],[1985,100908],[1986,101199],[1987,114902],[1988,115900],[1989,125896],[1990,126996],[1991,128794],[1992,129703],[1993,131002],[1994,131397],[1995,131391],[1996,131783],[1997,132782],[1998,133479],[1999,134700],[2000,135079]],
    "Energy Consumption": [[1975,138400],[1976,152400],[1977,166800],[1978,168800],[1979,195800],[1980,203100],[1981,223400],[1982,256550],[1983,282202],[1984,300928],[1985,309507],[1986,328010],[1987,351870],[1988,377760],[1989,411770],[1990,450700],[1991,498520],[1992,546680],[1993,586530],[1994,623040],[1995,680400],[1996,759420],[1997,843842],[1998,926037],[1999,1002340],[2000,1077722]],
    "GDP Per Capita": [[1975,206],[1976,211],[1977,216],[1978,221],[1979,226],[1980,231],[1981,261],[1982,308],[1983,355],[1984,412],[1985,468],[1986,532],[1987,603],[1988,711],[1989,823],[1990,904],[1991,1021],[1992,1157],[1993,1229],[1994,1303],[1995,1454],[1996,1680],[1997,1944],[1998,2217],[1999,2518],[2000,2789]],
    "Life Expectancy (Women)": [[1975,61.98],[1976,62.46],[1977,62.94],[1978,63.42],[1979,63.9],[1980,64.38],[1981,64.86],[1982,65.34],[1983,65.82],[1984,66.3],[1985,66.42],[1986,66.54],[1987,66.66],[1988,66.78],[1989,66.9],[1990,67.28],[1991,67.66],[1992,68.04],[1993,68.42],[1994,68.8],[1995,69.1],[1996,69.39],[1997,69.7],[1998,70],[1999,70.3],[2000,70.6]],
    "Life Expectancy (Men)": [[1975,60.9],[1976,61.3],[1977,61.7],[1978,62.1],[1979,62.5],[1980,62.9],[1981,63.3],[1982,63.7],[1983,64.1],[1984,64.5],[1985,64.46],[1986,64.42],[1987,64.38],[1988,64.34],[1989,64.3],[1990,64.64],[1991,64.98],[1992,65.32],[1993,65.66],[1994,66],[1995,66.28],[1996,66.56],[1997,66.84],[1998,67.12],[1999,67.4],[2000,67.68]],
    "Life Expectancy": [[1975,61.52],[1976,61.94],[1977,62.36],[1978,62.78],[1979,63.2],[1980,63.62],[1981,64.04],[1982,64.46],[1983,64.88],[1984,65.3],[1985,65.34],[1986,65.38],[1987,65.42],[1988,65.46],[1989,65.5],[1990,65.86],[1991,66.22],[1992,66.58],[1993,66.94],[1994,67.3],[1995,67.58],[1996,67.86],[1997,68.14],[1998,68.42],[1999,68.7],[2000,68.98]],
    "Infant Mortality": [[1975,67.16],[1976,65.65],[1977,64.1],[1978,62.64],[1979,61.1],[1980,59.55],[1981,58.09],[1982,56.55],[1983,55],[1984,53.54],[1985,52],[1986,49.16],[1987,46.32],[1988,43.48],[1989,40.64],[1990,37.8],[1991,36.51],[1992,35.23],[1993,33.96],[1994,32.68],[1995,31.4],[1996,31.09],[1997,30.79],[1998,30.5],[1999,30.2],[2000,29.9]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0.1],[1996,0.1],[1997,0.1],[1998,0.2],[1999,0.2],[2000,0.4]],
    "P Index": [[1975,0.6946436522570753],[1976,0.7112996464644885],[1977,0.7274227404374709],[1978,0.7427130670902741],[1979,0.7569739657457214],[1980,0.7700849089936915],[1981,0.7821257831208873],[1982,0.7933659146077349],[1983,0.8042031871750808],[1984,0.8149576860782163],[1985,0.8256450165360126],[1986,0.8362600891274775],[1987,0.8470733505278146],[1988,0.8584072014422632],[1989,0.8704607403790233],[1990,0.8833947842300115],[1991,0.897079468724921],[1992,0.9110580064995301],[1993,0.9246857454482719],[1994,0.9374953155073913],[1995,0.9493101583151698],[1996,0.9602536682623906],[1997,0.9705232729476361],[1998,0.980445190549827],[1999,0.9902519018710583],[2000,1]],
    "E Index": [[1975,0.03751902721620475],[1976,0.041314304535763034],[1977,0.04521801835016584],[1978,0.045760200824388454],[1979,0.053079664226393715],[1980,0.05505863025730625],[1981,0.06056178237066576],[1982,0.06954845688090555],[1983,0.07650248929528478],[1984,0.08157894380143109],[1985,0.08390463552460899],[1986,0.08892063668487948],[1987,0.09538887360235523],[1988,0.10240742573116696],[1989,0.11162723870532247],[1990,0.1221808205660656],[1991,0.13514440352472826],[1992,0.14820015750400875],[1993,0.1590031433028943],[1994,0.16890068436982808],[1995,0.1844504777305326],[1996,0.205872107287068],[1997,0.22875817170647866],[1998,0.2510405159408425],[1999,0.2717255906061464],[2000,0.29216099024207093]],
    "G Index": [[1975,0.007082932196396644],[1976,0.007254848026406272],[1977,0.0074267638564158986],[1978,0.007598679686425526],[1979,0.007770595516435153],[1980,0.00794251134644478],[1981,0.008974006326502545],[1982,0.01059001512859304],[1983,0.012206023930683537],[1984,0.014165864392793288],[1985,0.016091321688901115],[1986,0.018291844313024344],[1987,0.02073304909916105],[1988,0.024446431027369],[1989,0.028297345619584652],[1990,0.031082382065740613],[1991,0.035105212487965894],[1992,0.039781323064227755],[1993,0.04225691101636639],[1994,0.04480126530050887],[1995,0.04999312336679961],[1996,0.05776371888323477],[1997,0.0668408747077431],[1998,0.07622747902626874],[1999,0.08657681199284831],[2000,0.0958946499793701]]
  },
  {
    "name": "Denmark",
    "region": "EU",
    "code": "DNK",
    "Population": [[1975,4959189],[1976,4987826],[1977,5014364],[1978,5038466],[1979,5059864],[1980,5078660],[1981,5094844],[1982,5107958],[1983,5117433],[1984,5123029],[1985,5124597],[1986,5122764],[1987,5119055],[1988,5115502],[1989,5113678],[1990,5114105],[1991,5116737],[1992,5121853],[1993,5129576],[1994,5139947],[1995,5153137],[1996,5169106],[1997,5187348],[1998,5207139],[1999,5227861],[2000,5249337]],
    "Arable Area": [[1975,2662],[1976,2666],[1977,2668],[1978,2655],[1979,2660],[1980,2667],[1981,2648],[1982,2653],[1983,2656],[1984,2653],[1985,2651],[1986,2644],[1987,2610],[1988,2627],[1989,2614],[1990,2604],[1991,2588],[1992,2570],[1993,2555],[1994,2571],[1995,2558],[1996,2548],[1997,2542],[1998,2374],[1999,2328],[2000,2331]],
    "Energy Consumption": [[1975,16664],[1976,18306],[1977,18896],[1978,18673],[1979,19587],[1980,21758],[1981,23065],[1982,24475],[1983,25596],[1984,25916],[1985,25328],[1986,25806],[1987,26474],[1988,27552],[1989,29599],[1990,30970],[1991,32050],[1992,32452],[1993,32614],[1994,33336],[1995,34386],[1996,34641],[1997,36035],[1998,36475],[1999,37260],[2000,39462]],
    "GDP Per Capita": [[1975,3535],[1976,4355],[1977,5175],[1978,5995],[1979,6815],[1980,7635],[1981,8156],[1982,8850],[1983,9953],[1984,10874],[1985,11753],[1986,12918],[1987,13645],[1988,14738],[1989,15743],[1990,16672],[1991,17052],[1992,17860],[1993,18615],[1994,19546],[1995,20416],[1996,20828],[1997,21069],[1998,22592],[1999,23487],[2000,24394]],
    "Life Expectancy (Women)": [[1975,75.68],[1976,75.86],[1977,76.04],[1978,76.22],[1979,76.4],[1980,76.58],[1981,76.76],[1982,76.94],[1983,77.12],[1984,77.3],[1985,77.36],[1986,77.42],[1987,77.47],[1988,77.53],[1989,77.6],[1990,77.66],[1991,77.72],[1992,77.78],[1993,77.84],[1994,77.9],[1995,77.88],[1996,77.86],[1997,77.84],[1998,77.82],[1999,77.8],[2000,77.78]],
    "Life Expectancy (Men)": [[1975,70.58],[1976,70.66],[1977,70.74],[1978,70.82],[1979,70.9],[1980,70.98],[1981,71.06],[1982,71.14],[1983,71.22],[1984,71.3],[1985,71.36],[1986,71.42],[1987,71.47],[1988,71.53],[1989,71.6],[1990,71.69],[1991,71.8],[1992,71.89],[1993,72],[1994,72.1],[1995,72.17],[1996,72.25],[1997,72.34],[1998,72.42],[1999,72.5],[2000,72.58]],
    "Life Expectancy": [[1975,73.11],[1976,73.24],[1977,73.35],[1978,73.47],[1979,73.6],[1980,73.72],[1981,73.84],[1982,73.96],[1983,74.08],[1984,74.2],[1985,74.28],[1986,74.36],[1987,74.44],[1988,74.52],[1989,74.6],[1990,74.66],[1991,74.72],[1992,74.78],[1993,74.84],[1994,74.9],[1995,74.96],[1996,75.02],[1997,75.08],[1998,75.14],[1999,75.2],[2000,75.26]],
    "Infant Mortality": [[1975,13.86],[1976,13.4],[1977,12.92],[1978,12.47],[1979,12],[1980,11.52],[1981,11.07],[1982,10.6],[1983,10.12],[1984,9.67],[1985,9.2],[1986,8.95],[1987,8.71],[1988,8.48],[1989,8.24],[1990,8],[1991,8],[1992,8],[1993,8],[1994,8],[1995,8],[1996,7.7],[1997,7.4],[1998,7.1],[1999,6.8],[2000,6.5]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0.95],[1991,3.38],[1992,5.8],[1993,7.8],[1994,11.5],[1995,13.4],[1996,15.5],[1997,17.9],[1998,19.2],[1999,26.8],[2000,30.5]],
    "P Index": [[1975,0.004046072555459577],[1976,0.004069436734516011],[1977,0.0040910883943895875],[1978,0.004110752585597402],[1979,0.004128210653951264],[1980,0.004143545818582501],[1981,0.004156749920752746],[1982,0.004167449290244874],[1983,0.004175179694845905],[1984,0.004179745324835073],[1985,0.004181024615010737],[1986,0.004179529118268395],[1987,0.004176503042208741],[1988,0.004173604242467584],[1989,0.004172116088589771],[1990,0.004172464466717965],[1991,0.0041746118466556865],[1992,0.004178785857203325],[1993,0.004185086850842771],[1994,0.004193548278401325],[1995,0.0042043096543050275],[1996,0.004217338343600422],[1997,0.004232221514126226],[1998,0.0042483684732248],[1999,0.004265275010865176],[2000,0.004282796717378287]],
    "E Index": [[1975,0.004517464375222803],[1976,0.004962596186559568],[1977,0.005122540016455238],[1978,0.005062086670579417],[1979,0.005309864061299151],[1980,0.0058984031370677955],[1981,0.006252719383972273],[1982,0.006634958028299214],[1983,0.006938851305100988],[1984,0.0070256005009766065],[1985,0.006866198853555158],[1986,0.006995780464894363],[1987,0.007176869411284715],[1988,0.007469105764890703],[1989,0.008024029527257547],[1990,0.008395695613337147],[1991,0.008688474149417357],[1992,0.008797452826736102],[1993,0.008841369607148134],[1994,0.009037097480342496],[1995,0.009321743279309368],[1996,0.009390871544772752],[1997,0.009768772729305911],[1998,0.009888052873634886],[1999,0.010100859494767262],[2000,0.010697802398886357]],
    "G Index": [[1975,0.12154449181680649],[1976,0.14973868793838538],[1977,0.17793288405996424],[1978,0.2061270801815431],[1979,0.234321276303122],[1980,0.26251547242470086],[1981,0.280429101911704],[1982,0.3042910191170403],[1983,0.3422156512171641],[1984,0.3738825471049374],[1985,0.4041053500206299],[1986,0.44416173841287304],[1987,0.46915830009627285],[1988,0.5067391005363774],[1989,0.5412941823683125],[1990,0.5732361435841012],[1991,0.5863017466648329],[1992,0.6140833447943886],[1993,0.6400426351258424],[1994,0.672053362673635],[1995,0.7019667170953101],[1996,0.7161325814881034],[1997,0.7244189244945675],[1998,0.7767844863154999],[1999,0.8075574198872232],[2000,0.8387429514509696]]
  },
  {
    "name": "Gambia",
    "region": "AF",
    "code": "GMB",
    "Population": [[1975,497455],[1976,514510],[1977,532494],[1978,551036],[1979,569883],[1980,589013],[1981,608563],[1982,628627],[1983,649352],[1984,670884],[1985,693208],[1986,716401],[1987,740807],[1988,766861],[1989,794870],[1990,824989],[1991,857122],[1992,891000],[1993,926218],[1994,962473],[1995,999635],[1996,1037763],[1997,1076967],[1998,1117431],[1999,1159255],[2000,1202420]],
    "Arable Area": [[1975,133],[1976,138],[1977,143],[1978,170],[1979,164],[1980,163],[1981,170],[1982,177],[1983,166],[1984,159],[1985,181],[1986,202],[1987,183],[1988,169],[1989,169],[1990,177],[1991,184],[1992,199],[1993,181],[1994,187],[1995,196],[1996,162],[1997,161],[1998,180],[1999,185],[2000,190]],
    "Energy Consumption": [[1975,13],[1976,16],[1977,18],[1978,26],[1979,27],[1980,28],[1981,31],[1982,39],[1983,41],[1984,45],[1985,45],[1986,44],[1987,45],[1988,47],[1989,48],[1990,53],[1991,58],[1992,65],[1993,61],[1994,70],[1995,70],[1996,71],[1997,73],[1998,73],[1999,74],[2000,76]],
    "GDP Per Capita": [[1975,400],[1976,452],[1977,504],[1978,556],[1979,608],[1980,660],[1981,701],[1982,785],[1983,820],[1984,924],[1985,1010],[1986,1043],[1987,1206],[1988,1164],[1989,1197],[1990,1398],[1991,1168],[1992,1222],[1993,1401],[1994,1484],[1995,1469],[1996,1456],[1997,1478],[1998,1463],[1999,1452],[2000,1467]],
    "Life Expectancy (Women)": [[1975,35.83],[1976,36.58],[1977,37.31],[1978,38.05],[1979,38.8],[1980,39.54],[1981,40.28],[1982,41.01],[1983,41.76],[1984,42.5],[1985,43.28],[1986,44.06],[1987,44.83],[1988,45.62],[1989,46.4],[1990,47.18],[1991,47.96],[1992,48.73],[1993,49.51],[1994,50.3],[1995,51],[1996,51.69],[1997,52.4],[1998,53.09],[1999,53.8],[2000,54.5]],
    "Life Expectancy (Men)": [[1975,35.07],[1976,35.75],[1977,36.44],[1978,37.12],[1979,37.8],[1980,38.48],[1981,39.16],[1982,39.84],[1983,40.52],[1984,41.2],[1985,41.92],[1986,42.64],[1987,43.36],[1988,44.08],[1989,44.8],[1990,45.5],[1991,46.19],[1992,46.9],[1993,47.59],[1994,48.3],[1995,48.96],[1996,49.62],[1997,50.28],[1998,50.94],[1999,51.6],[2000,52.26]],
    "Life Expectancy": [[1975,35.5],[1976,36.19],[1977,36.9],[1978,37.59],[1979,38.3],[1980,39],[1981,39.69],[1982,40.4],[1983,41.09],[1984,41.8],[1985,42.55],[1986,43.32],[1987,44.08],[1988,44.84],[1989,45.6],[1990,46.34],[1991,47.08],[1992,47.82],[1993,48.55],[1994,49.3],[1995,49.96],[1996,50.62],[1997,51.28],[1998,51.94],[1999,52.6],[2000,53.26]],
    "Infant Mortality": [[1975,184.14],[1976,179.1],[1977,173.96],[1978,169.13],[1979,164],[1980,158.86],[1981,154.03],[1982,148.9],[1983,143.76],[1984,138.93],[1985,133.8],[1986,129.1],[1987,124.4],[1988,119.7],[1989,115],[1990,110.3],[1991,107.62],[1992,104.94],[1993,102.26],[1994,99.58],[1995,96.9],[1996,95.48],[1997,94.06],[1998,92.64],[1999,91.22],[2000,89.8]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0],[1996,0],[1997,0],[1998,0],[1999,0.1],[2000,0.2]],
    "P Index": [[1975,0.0004058605193462366],[1976,0.00041977524762809137],[1977,0.00043444792270407354],[1978,0.0004495758553808341],[1979,0.0004649526295777334],[1980,0.0004805602960703679],[1981,0.0004965106295743409],[1982,0.0005128803222302855],[1983,0.00052978930749217],[1984,0.0005473567029401264],[1985,0.000565570270466607],[1986,0.0005844928323570237],[1987,0.0006044050492111397],[1988,0.0006256618261478412],[1989,0.00064851363643494],[1990,0.0006730869405170969],[1991,0.0006993034145060056],[1992,0.0007269435883396424],[1993,0.0007556770331142165],[1994,0.0007852565390572623],[1995,0.000815576042570032],[1996,0.0008466836802088803],[1997,0.0008786691980958246],[1998,0.0009116827170167845],[1999,0.000945805824355412],[2000,0.0009810230185088135]],
    "E Index": [[1975,0.0000035241860824469778],[1976,0.000004337459793780896],[1977,0.000004879642268003508],[1978,0.0000070483721648939556],[1979,0.000007319463402005262],[1980,0.000007590554639116568],[1981,0.000008403828350450486],[1982,0.000010572558247340933],[1983,0.000011114740721563546],[1984,0.00001219910567000877],[1985,0.00001219910567000877],[1986,0.000011928014432897463],[1987,0.00001219910567000877],[1988,0.000012741288144231381],[1989,0.000013012379381342688],[1990,0.000014367835566899218],[1991,0.000015723291752455747],[1992,0.00001762093041223489],[1993,0.000016536565463789666],[1994,0.00001897638659779142],[1995,0.00001897638659779142],[1996,0.000019247477834902726],[1997,0.000019789660309125337],[1998,0.000019789660309125337],[1999,0.000020060751546236642],[2000,0.000020602934020459256]],
    "G Index": [[1975,0.013753266400770183],[1976,0.015541191032870307],[1977,0.017329115664970432],[1978,0.019117040297070554],[1979,0.02090496492917068],[1980,0.0226928895612708],[1981,0.024102599367349747],[1982,0.026990785311511483],[1983,0.028194196121578877],[1984,0.03177004538577912],[1985,0.03472699766194471],[1986,0.035861642140008254],[1987,0.0414660981983221],[1988,0.04002200522624123],[1989,0.04115664970430477],[1990,0.04806766607069179],[1991,0.04015953789024893],[1992,0.04201622885435291],[1993,0.04817081556869757],[1994,0.05102461834685738],[1995,0.050508870856828494],[1996,0.050061889698803465],[1997,0.050818319350845825],[1998,0.05030257186081694],[1999,0.049924357034795766],[2000,0.05044010452482465]]
  },
  {
    "name": "Hungary",
    "region": "EU",
    "code": "HUN",
    "Population": [[1975,10375077],[1976,10412747],[1977,10450803],[1978,10490380],[1979,10531820],[1980,10575974],[1981,10621216],[1982,10662416],[1983,10692745],[1984,10707472],[1985,10705147],[1986,10687680],[1987,10657974],[1988,10620517],[1989,10579093],[1990,10533787],[1991,10484994],[1992,10437192],[1993,10395900],[1994,10364840],[1995,10346394],[1996,10339149],[1997,10338252],[1998,10336581],[1999,10328967],[2000,10313830]],
    "Arable Area": [[1975,5578],[1976,5565],[1977,5555],[1978,5503],[1979,5495],[1980,5471],[1981,5422],[1982,5388],[1983,5354],[1984,5333],[1985,5317],[1986,5299],[1987,5292],[1988,5289],[1989,5293],[1990,5289],[1991,5289],[1992,5287],[1993,5287],[1994,5288],[1995,5287],[1996,4972],[1997,4973],[1998,4974],[1999,5031],[2000,5036]],
    "Energy Consumption": [[1975,19340],[1976,20713],[1977,22305],[1978,23644],[1979,24596],[1980,26166],[1981,27845],[1982,30095],[1983,30645],[1984,31262],[1985,32203],[1986,33516],[1987,34866],[1988,36572],[1989,37604],[1990,38579],[1991,40362],[1992,40525],[1993,40672],[1994,39538],[1995,37342],[1996,35155],[1997,35388],[1998,35548],[1999,36422],[2000,37288]],
    "GDP Per Capita": [[1975,2102],[1976,2366],[1977,2630],[1978,2894],[1979,3158],[1980,3422],[1981,3911],[1982,4170],[1983,4868],[1984,5274],[1985,6056],[1986,6696],[1987,6945],[1988,7467],[1989,7708],[1990,8032],[1991,8606],[1992,8922],[1993,9463],[1994,9470],[1995,8605],[1996,8477],[1997,8604],[1998,9086],[1999,9462],[2000,9844]],
    "Life Expectancy (Women)": [[1975,71.89],[1976,72],[1977,72.1],[1978,72.2],[1979,72.3],[1980,72.39],[1981,72.5],[1982,72.6],[1983,72.7],[1984,72.8],[1985,72.84],[1986,72.88],[1987,72.92],[1988,72.96],[1989,73],[1990,73.12],[1991,73.24],[1992,73.36],[1993,73.47],[1994,73.6],[1995,73.66],[1996,73.72],[1997,73.78],[1998,73.84],[1999,73.9],[2000,73.96]],
    "Life Expectancy (Men)": [[1975,66.66],[1976,66.62],[1977,66.58],[1978,66.54],[1979,66.5],[1980,66.46],[1981,66.42],[1982,66.38],[1983,66.34],[1984,66.3],[1985,66.1],[1986,65.89],[1987,65.7],[1988,65.5],[1989,65.3],[1990,65.34],[1991,65.38],[1992,65.42],[1993,65.46],[1994,65.5],[1995,65.36],[1996,65.22],[1997,65.08],[1998,64.94],[1999,64.8],[2000,64.66]],
    "Life Expectancy": [[1975,69.21],[1976,69.24],[1977,69.25],[1978,69.28],[1979,69.3],[1980,69.32],[1981,69.34],[1982,69.36],[1983,69.38],[1984,69.4],[1985,69.34],[1986,69.28],[1987,69.22],[1988,69.16],[1989,69.1],[1990,69.17],[1991,69.25],[1992,69.34],[1993,69.42],[1994,69.5],[1995,69.5],[1996,69.5],[1997,69.5],[1998,69.5],[1999,69.5],[2000,69.5]],
    "Infant Mortality": [[1975,39.03],[1976,37.8],[1977,36.54],[1978,35.35],[1979,34.1],[1980,32.84],[1981,31.65],[1982,30.4],[1983,29.14],[1984,27.95],[1985,26.7],[1986,25.43],[1987,24.18],[1988,22.91],[1989,21.65],[1990,20.4],[1991,19.74],[1992,19.08],[1993,18.42],[1994,17.76],[1995,17.1],[1996,16.34],[1997,15.58],[1998,14.82],[1999,14.06],[2000,13.3]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0.12],[1991,0.42],[1992,0.8],[1993,0.9],[1994,1],[1995,1.2],[1996,1.9],[1997,2.7],[1998,3.4],[1999,3.9],[2000,4.4]],
    "P Index": [[1975,0.008464753876184167],[1976,0.008495487843605888],[1977,0.008526536738328507],[1978,0.008558826577156474],[1979,0.008592636388941878],[1980,0.008628660482319597],[1981,0.008665572246431451],[1982,0.008699186248496091],[1983,0.008723930886083916],[1984,0.008735946260074352],[1985,0.008734049353404442],[1986,0.00871979848510194],[1987,0.008695562136914267],[1988,0.008665001950619724],[1989,0.008631205192815704],[1990,0.008594241212778313],[1991,0.008554432280672975],[1992,0.008515431879539629],[1993,0.00848174281708203],[1994,0.008456401775719708],[1995,0.008441352166931253],[1996,0.008435441160985662],[1997,0.008434709322154304],[1998,0.008433345996973478],[1999,0.008427133933582213],[2000,0.008414784051318803]],
    "E Index": [[1975,0.0052429045257326575],[1976,0.005615112794286481],[1977,0.00604669004376768],[1978,0.006409681210259719],[1979,0.0066677600679896825],[1980,0.007093373310254432],[1981,0.007548535497364316],[1982,0.008158490780864754],[1983,0.008307590961275972],[1984,0.008474854254573647],[1985,0.008729951108695387],[1986,0.009085893903022531],[1987,0.009451867073122795],[1988,0.009914348723634683],[1989,0.010194114880333551],[1990,0.010458428836517073],[1991,0.010941784512286532],[1992,0.010985972383935675],[1993,0.011025822795791037],[1994,0.010718405332906817],[1995,0.01012308897621039],[1996,0.009530212440647962],[1997,0.009593376698894896],[1998,0.009636751296832705],[1999,0.009873685038067986],[2000,0.010108450049406378]],
    "G Index": [[1975,0.07227341493604732],[1976,0.08135057076055563],[1977,0.09042772658506396],[1978,0.09950488240957227],[1979,0.1085820382340806],[1980,0.11765919405858892],[1981,0.13447256223353046],[1982,0.14337780222802915],[1983,0.1673772520973731],[1984,0.18133681749415487],[1985,0.20822445330766057],[1986,0.23022967954889287],[1987,0.2387910878833723],[1988,0.2567391005363774],[1989,0.2650254435428414],[1990,0.27616558932746527],[1991,0.29590152661257046],[1992,0.3067666070691789],[1993,0.3253678998762206],[1994,0.32560858203823406],[1995,0.29586714344656856],[1996,0.2914660981983221],[1997,0.29583276028056665],[1998,0.3124054462934947],[1999,0.32533351671021865],[2000,0.3384678861229542]]
  },
  {
    "name": "India",
    "region": "AS",
    "code": "IND",
    "Population": [[1975,561427382],[1976,573901785],[1977,586762819],[1978,600044316],[1979,613767233],[1980,627941825],[1981,642552661],[1982,657562064],[1983,672916902],[1984,688575418],[1985,704519770],[1986,720749252],[1987,737259342],[1988,754050696],[1989,771120552],[1990,788442870],[1991,805998670],[1992,823799168],[1993,841864119],[1994,860195242],[1995,878789217],[1996,897599210],[1997,916529257],[1998,935455492],[1999,954281733],[2000,972968477]],
    "Arable Area": [[1975,164440],[1976,165260],[1977,166530],[1978,167230],[1979,168010],[1980,168189],[1981,168260],[1982,168635],[1983,168423],[1984,168255],[1985,168391],[1986,168675],[1987,168520],[1988,169078],[1989,169015],[1990,169250],[1991,169770],[1992,169310],[1993,169485],[1994,169438],[1995,169340],[1996,169270],[1997,169737],[1998,169790],[1999,169750],[2000,169530]],
    "Energy Consumption": [[1975,66383],[1976,70508],[1977,72785],[1978,76665],[1979,85908],[1980,95591],[1981,98903],[1982,110086],[1983,112786],[1984,119223],[1985,131036],[1986,140227],[1987,150909],[1988,169100],[1989,183299],[1990,201382],[1991,219838],[1992,242508],[1993,269961],[1994,290815],[1995,317084],[1996,333919],[1997,357781],[1998,386980],[1999,419565],[2000,438372]],
    "GDP Per Capita": [[1975,344],[1976,366],[1977,388],[1978,410],[1979,432],[1980,454],[1981,506],[1982,560],[1983,560],[1984,636],[1985,726],[1986,784],[1987,855],[1988,905],[1989,965],[1990,1013],[1991,1064],[1992,1188],[1993,1287],[1994,1388],[1995,1424],[1996,1505],[1997,1583],[1998,1704],[1999,1836],[2000,1971]],
    "Life Expectancy (Women)": [[1975,46.88],[1976,47.66],[1977,48.44],[1978,49.22],[1979,50],[1980,50.78],[1981,51.56],[1982,52.33],[1983,53.12],[1984,53.9],[1985,54.44],[1986,54.98],[1987,55.52],[1988,56.06],[1989,56.6],[1990,57.04],[1991,57.48],[1992,57.92],[1993,58.36],[1994,58.8],[1995,59.19],[1996,59.59],[1997,60],[1998,60.4],[1999,60.8],[2000,61.19]],
    "Life Expectancy (Men)": [[1975,48.83],[1976,49.48],[1977,50.12],[1978,50.76],[1979,51.4],[1980,52.04],[1981,52.68],[1982,53.32],[1983,53.96],[1984,54.6],[1985,55.04],[1986,55.48],[1987,55.92],[1988,56.36],[1989,56.8],[1990,57.14],[1991,57.48],[1992,57.82],[1993,58.16],[1994,58.5],[1995,58.78],[1996,59.06],[1997,59.33],[1998,59.62],[1999,59.9],[2000,60.18]],
    "Life Expectancy": [[1975,47.72],[1976,48.44],[1977,49.16],[1978,49.88],[1979,50.6],[1980,51.32],[1981,52.04],[1982,52.76],[1983,53.48],[1984,54.2],[1985,54.68],[1986,55.16],[1987,55.64],[1988,56.12],[1989,56.6],[1990,56.98],[1991,57.36],[1992,57.74],[1993,58.12],[1994,58.5],[1995,58.84],[1996,59.18],[1997,59.52],[1998,59.86],[1999,60.2],[2000,60.54]],
    "Infant Mortality": [[1975,125.07],[1976,123],[1977,120.89],[1978,118.9],[1979,116.8],[1980,114.69],[1981,112.7],[1982,110.6],[1983,108.49],[1984,106.5],[1985,104.4],[1986,102.46],[1987,100.52],[1988,98.58],[1989,96.64],[1990,94.7],[1991,92.9],[1992,91.1],[1993,89.3],[1994,87.5],[1995,85.7],[1996,84],[1997,82.3],[1998,80.6],[1999,78.9],[2000,77.2]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0],[1996,0],[1997,0.1],[1998,0.1],[1999,0.1],[2000,0.2]],
    "P Index": [[1975,0.45805391207992274],[1976,0.46823145111383385],[1977,0.4787244322650327],[1978,0.4895604581771564],[1979,0.5007566271181968],[1980,0.5123213058743477],[1981,0.5242419046964375],[1982,0.5364876839059277],[1983,0.5490152944941363],[1984,0.5617906680172718],[1985,0.574799247654343],[1986,0.5880404573984211],[1987,0.6015106078680176],[1988,0.6152102342763691],[1989,0.6291370831799392],[1990,0.6432699092240249],[1991,0.6575932271232091],[1992,0.6721161877184421],[1993,0.6868549085973644],[1994,0.7018107922471011],[1995,0.7169811299665148],[1996,0.732327711120346],[1997,0.7477722411917467],[1998,0.7632136611520827],[1999,0.7785734986240096],[2000,0.7938195241433634]],
    "E Index": [[1975,0.017995849593159825],[1976,0.019114100946243964],[1977,0.019731375693146407],[1978,0.020783209693138273],[1979,0.023288905997758076],[1980,0.02591388244670685],[1981,0.0268117366240195],[1982,0.029843349928635233],[1983,0.030575296268835758],[1984,0.032320310562121236],[1985,0.03552271134611709],[1986,0.038014310906407105],[1987,0.04091010750123008],[1988,0.04584152819552184],[1989,0.04969075267126528],[1990,0.05459289551194903],[1991,0.05959615538407529],[1992,0.0657417937293886],[1993,0.07318406146180528],[1994,0.07883739812052445],[1995,0.08595869382820134],[1996,0.09052251480497019],[1997,0.09699129390492017],[1998,0.10490688693733319],[1999,0.1137403948986051],[2000,0.11883880779495744]],
    "G Index": [[1975,0.011827809104662357],[1976,0.012584238756704717],[1977,0.013340668408747078],[1978,0.014097098060789438],[1979,0.014853527712831797],[1980,0.015609957364874158],[1981,0.01739788199697428],[1982,0.019254572961078256],[1983,0.019254572961078256],[1984,0.02186769357722459],[1985,0.024962178517397883],[1986,0.02695640214550956],[1987,0.029397606931646267],[1988,0.03111676523174254],[1989,0.03317975519185807],[1990,0.03483014715995049],[1991,0.03658368862604869],[1992,0.04084720121028744],[1993,0.044251134644478066],[1994,0.04772383441067254],[1995,0.048961628386741854],[1996,0.05174666483289781],[1997,0.054428551781047996],[1998,0.05858891486728098],[1999,0.06312749277953514],[2000,0.06776922018979507]]
  },
  {
    "name": "Iceland",
    "region": "EU",
    "code": "ISL",
    "Population": [[1975,206821],[1976,209722],[1977,212673],[1978,215485],[1979,218031],[1980,220260],[1981,222238],[1982,224096],[1983,226025],[1984,228160],[1985,230543],[1986,233131],[1987,235861],[1988,238641],[1989,241398],[1990,244123],[1991,246836],[1992,249524],[1993,252178],[1994,254793],[1995,257360],[1996,259882],[1997,262386],[1998,264908],[1999,267478],[2000,270096]],
    "Arable Area": [[1975,7],[1976,7],[1977,8],[1978,8],[1979,8],[1980,8],[1981,8],[1982,8],[1983,8],[1984,8],[1985,8],[1986,8],[1987,8],[1988,7],[1989,7],[1990,7],[1991,7],[1992,7],[1993,7],[1994,7],[1995,7],[1996,6],[1997,6],[1998,6],[1999,6],[2000,6]],
    "Energy Consumption": [[1975,1621],[1976,1795],[1977,2390],[1978,2374],[1979,2330],[1980,2426],[1981,2607],[1982,2679],[1983,2959],[1984,3155],[1985,3329],[1986,3758],[1987,3960],[1988,4125],[1989,4044],[1990,4114],[1991,4210],[1992,4482],[1993,4541],[1994,4510],[1995,4494],[1996,4546],[1997,4727],[1998,4780],[1999,4981],[2000,5123]],
    "GDP Per Capita": [[1975,3324],[1976,3999],[1977,4674],[1978,5349],[1979,6024],[1980,6699],[1981,7651],[1982,8635],[1983,9728],[1984,11135],[1985,12619],[1986,13582],[1987,13750],[1988,14823],[1989,15565],[1990,16649],[1991,18157],[1992,18516],[1993,19270],[1994,20062],[1995,20377],[1996,19839],[1997,20283],[1998,21514],[1999,21745],[2000,23024]],
    "Life Expectancy (Women)": [[1975,75.88],[1976,76.26],[1977,76.64],[1978,77.02],[1979,77.4],[1980,77.78],[1981,78.16],[1982,78.54],[1983,78.92],[1984,79.3],[1985,79.39],[1986,79.5],[1987,79.6],[1988,79.7],[1989,79.8],[1990,79.89],[1991,80],[1992,80.1],[1993,80.2],[1994,80.3],[1995,80.39],[1996,80.5],[1997,80.6],[1998,80.7],[1999,80.8],[2000,80.89]],
    "Life Expectancy (Men)": [[1975,69.8],[1976,70.2],[1977,70.6],[1978,71],[1979,71.4],[1980,71.8],[1981,72.2],[1982,72.6],[1983,73],[1984,73.4],[1985,73.5],[1986,73.6],[1987,73.7],[1988,73.8],[1989,73.9],[1990,74.18],[1991,74.46],[1992,74.74],[1993,75.02],[1994,75.3],[1995,75.5],[1996,75.7],[1997,75.89],[1998,76.1],[1999,76.3],[2000,76.5]],
    "Life Expectancy": [[1975,72.7],[1976,73.1],[1977,73.5],[1978,73.89],[1979,74.3],[1980,74.7],[1981,75.1],[1982,75.5],[1983,75.89],[1984,76.3],[1985,76.39],[1986,76.5],[1987,76.6],[1988,76.7],[1989,76.8],[1990,77],[1991,77.2],[1992,77.39],[1993,77.6],[1994,77.8],[1995,77.96],[1996,78.11],[1997,78.28],[1998,78.44],[1999,78.6],[2000,78.75]],
    "Infant Mortality": [[1975,13.63],[1976,13.14],[1977,12.65],[1978,12.19],[1979,11.7],[1980,11.2],[1981,10.74],[1982,10.25],[1983,9.75],[1984,9.29],[1985,8.8],[1986,8.32],[1987,7.84],[1988,7.36],[1989,6.88],[1990,6.4],[1991,6.32],[1992,6.24],[1993,6.16],[1994,6.08],[1995,6],[1996,5.78],[1997,5.56],[1998,5.34],[1999,5.12],[2000,4.9]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0.57],[1994,3.9],[1995,7.7],[1996,11.4],[1997,13.2],[1998,16.9],[1999,20.5],[2000,26]],
    "P Index": [[1975,0.00016873984274297775],[1976,0.00017110669274272332],[1977,0.0001735143364342949],[1978,0.00017580857366259018],[1979,0.00017788578845037101],[1980,0.00017970437123197492],[1981,0.00018131816968061217],[1982,0.000182834063268867],[1983,0.0001844078838995148],[1984,0.00018614977454048577],[1985,0.00018809400189291378],[1986,0.00019020548338182847],[1987,0.00019243281895552907],[1988,0.00019470094822105567],[1989,0.00019695031238834232],[1990,0.0001991735685928603],[1991,0.00020138703431134004],[1992,0.00020358010318390678],[1993,0.00020574543234603182],[1994,0.00020787894242853256],[1995,0.00020997329056688033],[1996,0.00021203092438258468],[1997,0.00021407387246923166],[1998,0.000216131506284936],[1999,0.00021822830204479334],[2000,0.00022036425974880365]],
    "E Index": [[1975,0.00043943889535742704],[1976,0.0004866087706147943],[1977,0.0006479080566960213],[1978,0.0006435705969022404],[1979,0.000631642582469343],[1980,0.0006576673412320283],[1981,0.0007067348551491748],[1982,0.0007262534242211887],[1983,0.0008021589706123545],[1984,0.0008552928530861704],[1985,0.0009024627283435376],[1986,0.0010187608690642878],[1987,0.0010735212989607717],[1988,0.0011182513530841372],[1989,0.0010962929628781214],[1990,0.001115269349475913],[1991,0.0011412941082385982],[1992,0.0012150309247328734],[1993,0.0012310253077224406],[1994,0.0012226214793719901],[1995,0.001218284019578209],[1996,0.0012323807639079971],[1997,0.0012814482778251435],[1998,0.0012958161133920427],[1999,0.0013503054520514152],[2000,0.0013888004077212206]],
    "G Index": [[1975,0.11428964379040021],[1976,0.1374982808416999],[1977,0.1607069178929996],[1978,0.18391555494429926],[1979,0.20712419199559895],[1980,0.23033282904689864],[1981,0.2630656030807317],[1982,0.29689863842662634],[1983,0.33447943886673087],[1984,0.38285655343144],[1985,0.4338811717782973],[1986,0.4669921606381516],[1987,0.47276853252647505],[1988,0.509661669646541],[1989,0.5351739788199698],[1990,0.572445330766057],[1991,0.6242951450969605],[1992,0.6366387016916518],[1993,0.6625636088571035],[1994,0.6897950763306285],[1995,0.700625773621235],[1996,0.6821276303121991],[1997,0.697393756017054],[1998,0.7397194333654243],[1999,0.7476619447118691],[2000,0.7916380140283318]]
  },
  {
    "name": "Israel",
    "region": "AS",
    "code": "ISR",
    "Population": [[1975,2981178],[1976,3072749],[1977,3169216],[1978,3265615],[1979,3358251],[1980,3446529],[1981,3531387],[1982,3612531],[1983,3689964],[1984,3763901],[1985,3834951],[1986,3903752],[1987,3970806],[1988,4036715],[1989,4102601],[1990,4167117],[1991,4232020],[1992,4305161],[1993,4396831],[1994,4513700],[1995,4659310],[1996,4829690],[1997,5014633],[1998,5199614],[1999,5373900],[2000,5534067]],
    "Arable Area": [[1975,411],[1976,411],[1977,421],[1978,427],[1979,422],[1980,412],[1981,413],[1982,413],[1983,413],[1984,413],[1985,418],[1986,420],[1987,407],[1988,419],[1989,420],[1990,428],[1991,428],[1992,428],[1993,427],[1994,431],[1995,433],[1996,432],[1997,432],[1998,434],[1999,428],[2000,419]],
    "Energy Consumption": [[1975,7606],[1976,8438],[1977,8663],[1978,9086],[1979,9626],[1980,10255],[1981,10973],[1982,11711],[1983,12251],[1984,12363],[1985,12931],[1986,13625],[1987,14384],[1988,14710],[1989,15131],[1990,15630],[1991,17074],[1992,18991],[1993,20087],[1994,20507],[1995,21154],[1996,24070],[1997,25370],[1998,27581],[1999,29474],[2000,31531]],
    "GDP Per Capita": [[1975,4456],[1976,4716],[1977,4976],[1978,5236],[1979,5496],[1980,5756],[1981,5918],[1982,6534],[1983,7405],[1984,8380],[1985,9350],[1986,9971],[1987,10551],[1988,11045],[1989,11518],[1990,12099],[1991,13067],[1992,13471],[1993,13873],[1994,14891],[1995,15548],[1996,16253],[1997,17020],[1998,18091],[1999,19510],[2000,20122]],
    "Life Expectancy (Women)": [[1975,72.1],[1976,72.39],[1977,72.7],[1978,73],[1979,73.3],[1980,73.6],[1981,73.89],[1982,74.2],[1983,74.5],[1984,74.8],[1985,75.08],[1986,75.36],[1987,75.64],[1988,75.92],[1989,76.2],[1990,76.44],[1991,76.68],[1992,76.92],[1993,77.16],[1994,77.4],[1995,77.7],[1996,78],[1997,78.3],[1998,78.6],[1999,78.9],[2000,79.2]],
    "Life Expectancy (Men)": [[1975,69.05],[1976,69.32],[1977,69.57],[1978,69.83],[1979,70.1],[1980,70.36],[1981,70.62],[1982,70.88],[1983,71.14],[1984,71.4],[1985,71.68],[1986,71.96],[1987,72.24],[1988,72.52],[1989,72.8],[1990,73],[1991,73.2],[1992,73.39],[1993,73.6],[1994,73.8],[1995,74.08],[1996,74.36],[1997,74.64],[1998,74.92],[1999,75.2],[2000,75.48]],
    "Life Expectancy": [[1975,70.39],[1976,70.69],[1977,71],[1978,71.3],[1979,71.6],[1980,71.89],[1981,72.19],[1982,72.5],[1983,72.8],[1984,73.1],[1985,73.38],[1986,73.66],[1987,73.94],[1988,74.22],[1989,74.5],[1990,74.72],[1991,74.94],[1992,75.16],[1993,75.38],[1994,75.6],[1995,75.86],[1996,76.12],[1997,76.38],[1998,76.64],[1999,76.9],[2000,77.16]],
    "Infant Mortality": [[1975,24.56],[1976,23.9],[1977,23.22],[1978,22.58],[1979,21.9],[1980,21.22],[1981,20.58],[1982,19.9],[1983,19.22],[1984,18.58],[1985,17.9],[1986,17.16],[1987,16.41],[1988,15.68],[1989,14.94],[1990,14.2],[1991,13.47],[1992,12.76],[1993,12.04],[1994,11.32],[1995,10.6],[1996,10.24],[1997,9.88],[1998,9.52],[1999,9.16],[2000,8.8]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0.23],[1988,1.09],[1989,1.96],[1990,2.8],[1991,3.62],[1992,4.4],[1993,5.4],[1994,6.3],[1995,7],[1996,7.7],[1997,8.3],[1998,9.8],[1999,13.3],[2000,15.6]],
    "P Index": [[1975,0.0024322651322100995],[1976,0.0025069755152941054],[1977,0.002585680416681715],[1978,0.0026643298386484415],[1979,0.0027399091273683416],[1980,0.002811932837908686],[1981,0.002881166259928131],[1982,0.0029473695265187392],[1983,0.0030105450853020205],[1984,0.0030708683491528265],[1985,0.003128836185237598],[1986,0.0031849691210640357],[1987,0.003239676725298072],[1988,0.0032934501539892925],[1989,0.003347204817582273],[1990,0.0033998417340192206],[1991,0.0034527943936309017],[1992,0.0035124682219078375],[1993,0.003587259376501659],[1994,0.0036826097359019573],[1995,0.0038014091252376874],[1996,0.003940417709504027],[1997,0.004091307864451612],[1998,0.004242229022604985],[1999,0.0043844244100767725],[2000,0.004515100474850729]],
    "E Index": [[1975,0.0020619199494685933],[1976,0.0022874678587452],[1977,0.0023484633870952437],[1978,0.0024631349803933265],[1979,0.0026095242484334316],[1980,0.002780040636576443],[1981,0.0029746841448223607],[1982,0.0031747494778105044],[1983,0.00332113874585061],[1984,0.003351500964407076],[1985,0.0035054807870862977],[1986,0.003693618105641544],[1987,0.0038993763546090253],[1988,0.003987752097907311],[1989,0.004101881508731171],[1990,0.004237156036049712],[1991,0.004628611782438438],[1992,0.005148293683980812],[1993,0.0054454096798548035],[1994,0.005559267999441552],[1995,0.005734664029852567],[1996,0.006525166077269135],[1997,0.006877584685513833],[1998,0.007476967410766931],[1999,0.007990143122618632],[2000,0.00854777779735659]],
    "G Index": [[1975,0.15321138770457984],[1976,0.16215101086508046],[1977,0.17109063402558108],[1978,0.1800302571860817],[1979,0.18896988034658233],[1980,0.19790950350708295],[1981,0.20347957639939485],[1982,0.22465960665658094],[1983,0.254607344244258],[1984,0.28813093109613536],[1985,0.321482602118003],[1986,0.3428345482051987],[1987,0.3627767844863155],[1988,0.3797620684912667],[1989,0.39602530601017744],[1990,0.4160019254572961],[1991,0.44928483014716],[1992,0.46317562921193783],[1993,0.4769976619447119],[1994,0.5119997249346719],[1995,0.534589464997937],[1996,0.5588295970292945],[1997,0.5852014853527713],[1998,0.6220258561408335],[1999,0.6708155686975656],[2000,0.6918580662907441]]
  },
  {
    "name": "Liberia",
    "region": "AF",
    "code": "LBR",
    "Population": [[1975,1427168],[1976,1469158],[1977,1512670],[1978,1557914],[1979,1605036],[1980,1653089],[1981,1701806],[1982,1752706],[1983,1807890],[1984,1868259],[1985,1935410],[1986,2007231],[1987,2076455],[1988,2133303],[1989,2171122],[1990,2189305],[1991,2191352],[1992,2180175],[1993,2160323],[1994,2136718],[1995,2106120],[1996,2071562],[1997,2051573],[1998,2070347],[1999,2143442],[2000,2281842]],
    "Arable Area": [[1975,571],[1976,571],[1977,571],[1978,571],[1979,571],[1980,571],[1981,576],[1982,576],[1983,576],[1984,576],[1985,576],[1986,580],[1987,585],[1988,586],[1989,588],[1990,597],[1991,603],[1992,613],[1993,615],[1994,615],[1995,605],[1996,605],[1997,585],[1998,585],[1999,585],[2000,585]],
    "Energy Consumption": [[1975,650],[1976,846],[1977,834],[1978,860],[1979,853],[1980,883],[1981,893],[1982,841],[1983,900],[1984,890],[1985,837],[1986,841],[1987,829],[1988,862],[1989,862],[1990,849],[1991,825],[1992,834],[1993,818],[1994,565],[1995,450],[1996,460],[1997,480],[1998,480],[1999,486],[2000,488]],
    "GDP Per Capita": [[1975,383],[1976,385],[1977,419],[1978,446],[1979,498],[1980,495],[1981,549],[1982,549],[1983,527],[1984,506],[1985,491],[1986,480],[1987,507],[1988,546],[1989,571],[1990,284],[1991,262],[1992,171],[1993,124],[1994,102],[1995,101],[1996,113],[1997,177],[1998,200],[1999,225],[2000,224]],
    "Life Expectancy (Women)": [[1975,42.46],[1976,42.72],[1977,42.98],[1978,43.24],[1979,43.5],[1980,43.76],[1981,44.01],[1982,44.28],[1983,44.54],[1984,44.8],[1985,45.04],[1986,45.28],[1987,45.51],[1988,45.76],[1989,46],[1990,46.24],[1991,46.48],[1992,46.72],[1993,46.96],[1994,47.2],[1995,46.16],[1996,45.12],[1997,44.08],[1998,43.04],[1999,42],[2000,40.96]],
    "Life Expectancy (Men)": [[1975,41],[1976,41.19],[1977,41.4],[1978,41.59],[1979,41.8],[1980,42],[1981,42.19],[1982,42.4],[1983,42.59],[1984,42.8],[1985,42.98],[1986,43.16],[1987,43.34],[1988,43.52],[1989,43.7],[1990,43.94],[1991,44.18],[1992,44.42],[1993,44.66],[1994,44.9],[1995,43.83],[1996,42.78],[1997,41.72],[1998,40.66],[1999,39.6],[2000,38.54]],
    "Life Expectancy": [[1975,41.64],[1976,41.88],[1977,42.12],[1978,42.36],[1979,42.6],[1980,42.84],[1981,43.08],[1982,43.32],[1983,43.55],[1984,43.8],[1985,44.01],[1986,44.23],[1987,44.46],[1988,44.68],[1989,44.9],[1990,45.12],[1991,45.33],[1992,45.56],[1993,45.78],[1994,46],[1995,44.96],[1996,43.92],[1997,42.87],[1998,41.83],[1999,40.8],[2000,39.76]],
    "Infant Mortality": [[1975,170.03],[1976,168.8],[1977,167.54],[1978,166.35],[1979,165.1],[1980,163.84],[1981,162.65],[1982,161.39],[1983,160.14],[1984,158.95],[1985,157.7],[1986,156.17],[1987,154.66],[1988,153.14],[1989,151.62],[1990,150.1],[1991,147.78],[1992,145.46],[1993,143.14],[1994,140.82],[1995,138.5],[1996,146.62],[1997,154.74],[1998,162.85],[1999,170.98],[2000,179.1]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0],[1996,0],[1997,0],[1998,0],[1999,0],[2000,0]],
    "P Index": [[1975,0.0011643890315190919],[1976,0.0011986475739145818],[1977,0.0012341478762892557],[1978,0.001271061272148783],[1979,0.0013095068790732955],[1980,0.0013487120645396084],[1981,0.001388458990233371],[1982,0.0014299869685122574],[1983,0.001475010150306797],[1984,0.0015242636379436947],[1985,0.0015790503819398736],[1986,0.0016376472567526024],[1987,0.001694125307211888],[1988,0.0017405061030703974],[1989,0.001771361635693761],[1990,0.0017861966696632108],[1991,0.001787866763406568],[1992,0.0017787477415357798],[1993,0.0017625510141331777],[1994,0.0017432923122221145],[1995,0.0017183282045722646],[1996,0.001690133236529794],[1997,0.0016738247344115884],[1998,0.0016891419498184215],[1999,0.0017487782478988775],[2000,0.0018616951868732955]],
    "E Index": [[1975,0.0001762093041223489],[1976,0.00022934318659616486],[1977,0.0002260900917508292],[1978,0.00023313846391572317],[1979,0.00023124082525594403],[1980,0.0002393735623692832],[1981,0.00024208447474039624],[1982,0.00022798773041060835],[1983,0.0002439821134001754],[1984,0.00024127120102906234],[1985,0.00022690336546216312],[1986,0.00022798773041060835],[1987,0.00022473463556527267],[1988,0.00023368064638994577],[1989,0.00023368064638994577],[1990,0.0002301564603074988],[1991,0.00022365027061682744],[1992,0.0002260900917508292],[1993,0.0002217526319570483],[1994,0.00015316654896788788],[1995,0.0001219910567000877],[1996,0.00012470196907120076],[1997,0.00013012379381342688],[1998,0.00013012379381342688],[1999,0.00013175034123609472],[2000,0.00013229252371031733]],
    "G Index": [[1975,0.013168752578737451],[1976,0.0132375189107413],[1977,0.014406546554806766],[1978,0.015334892036858753],[1979,0.017122816668958877],[1980,0.0170196671709531],[1981,0.018876358135057076],[1982,0.018876358135057076],[1983,0.018119928483014715],[1984,0.01739788199697428],[1985,0.0168821345069454],[1986,0.01650391968092422],[1987,0.017432265162976208],[1988,0.0187732086370513],[1989,0.019632787787099436],[1990,0.00976481914454683],[1991,0.00900838949250447],[1992,0.005879521386329253],[1993,0.004263512584238757],[1994,0.003507082932196397],[1995,0.0034726997661944712],[1996,0.0038852977582175766],[1997,0.006085820382340806],[1998,0.006876633200385091],[1999,0.007736212350433228],[2000,0.007701829184431302]]
  },
  {
    "name": "Norway",
    "region": "EU",
    "code": "NOR",
    "Population": [[1975,3906491],[1976,3934530],[1977,3961021],[1978,3985400],[1979,4007311],[1980,4026584],[1981,4043438],[1982,4058406],[1983,4072256],[1984,4085619],[1985,4098697],[1986,4111566],[1987,4124588],[1988,4138150],[1989,4152559],[1990,4167994],[1991,4184542],[1992,4202287],[1993,4221267],[1994,4241487],[1995,4263058],[1996,4285960],[1997,4309881],[1998,4334392],[1999,4359184],[2000,4384077]],
    "Arable Area": [[1975,806],[1976,795],[1977,790],[1978,793],[1979,792],[1980,795],[1981,800],[1982,806],[1983,830],[1984,817],[1985,828],[1986,841],[1987,849],[1988,855],[1989,858],[1990,869],[1991,869],[1992,874],[1993,882],[1994,864],[1995,892],[1996,883],[1997,890],[1998,901],[1999,992],[2000,1000]],
    "Energy Consumption": [[1975,71642],[1976,73397],[1977,85318],[1978,78089],[1979,78744],[1980,82348],[1981,81257],[1982,85546],[1983,93707],[1984,91526],[1985,97122],[1986,95996],[1987,101946],[1988,107161],[1989,106822],[1990,99834],[1991,104426],[1992,104391],[1993,104611],[1994,106167],[1995,108648],[1996,109335],[1997,112721],[1998,106242],[1999,117805],[2000,114045]],
    "GDP Per Capita": [[1975,3102],[1976,3886],[1977,4670],[1978,5454],[1979,6238],[1980,7022],[1981,7794],[1982,8628],[1983,9769],[1984,11106],[1985,12275],[1986,13064],[1987,13963],[1988,15326],[1989,16488],[1990,17417],[1991,18125],[1992,18866],[1993,19779],[1994,20924],[1995,22409],[1996,23285],[1997,24366],[1998,25877],[1999,27277],[2000,29084]],
    "Life Expectancy (Women)": [[1975,76.8],[1976,77],[1977,77.19],[1978,77.39],[1979,77.6],[1980,77.8],[1981,78],[1982,78.19],[1983,78.39],[1984,78.6],[1985,78.78],[1986,78.96],[1987,79.14],[1988,79.32],[1989,79.5],[1990,79.56],[1991,79.62],[1992,79.67],[1993,79.74],[1994,79.8],[1995,79.89],[1996,80],[1997,80.1],[1998,80.2],[1999,80.3],[2000,80.39]],
    "Life Expectancy (Men)": [[1975,70.76],[1976,70.92],[1977,71.08],[1978,71.24],[1979,71.4],[1980,71.56],[1981,71.72],[1982,71.88],[1983,72.04],[1984,72.2],[1985,72.32],[1986,72.44],[1987,72.56],[1988,72.67],[1989,72.8],[1990,72.84],[1991,72.88],[1992,72.92],[1993,72.96],[1994,73],[1995,73.26],[1996,73.52],[1997,73.78],[1998,74.03],[1999,74.3],[2000,74.56]],
    "Life Expectancy": [[1975,73.68],[1976,73.86],[1977,74.04],[1978,74.22],[1979,74.4],[1980,74.58],[1981,74.76],[1982,74.94],[1983,75.12],[1984,75.3],[1985,75.44],[1986,75.58],[1987,75.72],[1988,75.86],[1989,76],[1990,76.06],[1991,76.12],[1992,76.17],[1993,76.24],[1994,76.3],[1995,76.52],[1996,76.74],[1997,76.96],[1998,77.18],[1999,77.4],[2000,77.62]],
    "Infant Mortality": [[1975,13.46],[1976,13.05],[1977,12.62],[1978,12.22],[1979,11.8],[1980,11.37],[1981,10.97],[1982,10.55],[1983,10.12],[1984,9.72],[1985,9.3],[1986,9.04],[1987,8.78],[1988,8.52],[1989,8.26],[1990,8],[1991,7.98],[1992,7.96],[1993,7.94],[1994,7.92],[1995,7.9],[1996,7.42],[1997,6.94],[1998,6.46],[1999,5.98],[2000,5.5]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,1.97],[1992,4.79],[1993,7.81],[1994,11.06],[1995,14.5],[1996,16.2],[1997,18.9],[1998,22.9],[1999,27.3],[2000,31.7]],
    "P Index": [[1975,0.0031872037995022647],[1976,0.0032100800860044593],[1977,0.0032316933998077202],[1978,0.00325158358806825],[1979,0.0032694601997002477],[1980,0.0032851845361515047],[1981,0.0032989352737922187],[1982,0.0033111472733772557],[1983,0.003322447126013063],[1984,0.0033333496480904843],[1985,0.0033440196461244974],[1986,0.0033545191265266783],[1987,0.0033651434356258463],[1988,0.0033762083165967353],[1989,0.003387964242707157],[1990,0.003400557255373849],[1991,0.003414058335620588],[1992,0.0034285360168496417],[1993,0.003444021302266798],[1994,0.00346051827124124],[1995,0.0034781174857688208],[1996,0.00349680262837281],[1997,0.0035163191464162137],[1998,0.0035363170300231643],[1999,0.003556544174178177],[2000,0.0035768537215906783]],
    "E Index": [[1975,0.019421518409128185],[1976,0.019897283530258526],[1977,0.023128962167862404],[1978,0.021169243614784772],[1979,0.02134680837509268],[1980,0.022323821193641825],[1981,0.02202806065395339],[1982,0.023190770969923783],[1983,0.025403146555989152],[1984,0.024811896567849392],[1985,0.026328923130724262],[1986,0.02602367439773693],[1987,0.0276366672585492],[1988,0.029050408060084663],[1989,0.028958508130703928],[1990,0.02706412256577012],[1991,0.02830897352658524],[1992,0.028299485333286346],[1993,0.02835912540545083],[1994,0.028780943370396023],[1995,0.029453520729669173],[1996,0.02963976040956464],[1997,0.030557675338423525],[1998,0.02880127521317937],[1999,0.0319359031878974],[2000,0.030916600136358892]],
    "G Index": [[1975,0.10665658093797277],[1976,0.13361298308348232],[1977,0.1605693852289919],[1978,0.18752578737450146],[1979,0.214482189520011],[1980,0.24143859166552056],[1981,0.267982395819007],[1982,0.29665795626461283],[1983,0.3358891486728098],[1984,0.3818594416173841],[1985,0.42205336267363497],[1986,0.44918168064915415],[1987,0.48009214688488516],[1988,0.5269564021455095],[1989,0.566909641039747],[1990,0.5988516022555357],[1991,0.623194883784899],[1992,0.6486728097923257],[1993,0.6800646403520836],[1994,0.7194333654242883],[1995,0.7704923669371476],[1996,0.8006120203548343],[1997,0.8377802228029156],[1998,0.8897331866318251],[1999,0.9378696190345207],[2000,1]]
  },
  {
    "name": "French Polynesia",
    "region": "OC",
    "code": "PYF",
    "Population": [[1975,114592],[1976,118304],[1977,122044],[1978,125865],[1979,129807],[1980,133869],[1981,138031],[1982,142295],[1983,146654],[1984,151101],[1985,155639],[1986,160253],[1987,164894],[1988,169500],[1989,174024],[1990,178446],[1991,182776],[1992,187026],[1993,191222],[1994,195386],[1995,199515],[1996,203605],[1997,207671],[1998,211730],[1999,215796],[2000,219871]],
    "Arable Area": [[1975,24],[1976,24],[1977,24],[1978,24],[1979,24],[1980,24],[1981,24],[1982,24],[1983,24],[1984,24],[1985,24],[1986,24],[1987,24],[1988,24],[1989,24],[1990,24],[1991,23],[1992,23],[1993,23],[1994,23],[1995,23],[1996,23],[1997,23],[1998,23],[1999,23],[2000,23]],
    "Energy Consumption": [[1975,102],[1976,109],[1977,119],[1978,129],[1979,141],[1980,153],[1981,196],[1982,215],[1983,235],[1984,255],[1985,280],[1986,290],[1987,187],[1988,203],[1989,220],[1990,225],[1991,225],[1992,256],[1993,271],[1994,291],[1995,302],[1996,317],[1997,323],[1998,335],[1999,349],[2000,335]],
    "GDP Per Capita": [[1975,3408],[1976,4073],[1977,4738],[1978,5403],[1979,6068],[1980,6733],[1981,7088],[1982,8087],[1983,8832],[1984,9396],[1985,10828],[1986,12269],[1987,13065],[1988,13900],[1989,14709],[1990,15896],[1991,17080],[1992,17679],[1993,18486],[1994,19205],[1995,20418],[1996,20653],[1997,20734],[1998,20931],[1999,21062],[2000,21131]],
    "Life Expectancy (Women)": [[1975,61.48],[1976,61.86],[1977,62.23],[1978,62.62],[1979,63],[1980,63.38],[1981,63.76],[1982,64.14],[1983,64.52],[1984,64.9],[1985,65.72],[1986,66.54],[1987,67.36],[1988,68.18],[1989,69],[1990,69.42],[1991,69.84],[1992,70.25],[1993,70.67],[1994,71.1],[1995,71.44],[1996,71.78],[1997,72.11],[1998,72.46],[1999,72.8],[2000,73.14]],
    "Life Expectancy (Men)": [[1975,58.33],[1976,58.58],[1977,58.81],[1978,59.05],[1979,59.3],[1980,59.54],[1981,59.78],[1982,60.01],[1983,60.26],[1984,60.5],[1985,61.2],[1986,61.9],[1987,62.6],[1988,63.3],[1989,64],[1990,64.36],[1991,64.72],[1992,65.08],[1993,65.44],[1994,65.8],[1995,66.22],[1996,66.64],[1997,67.06],[1998,67.48],[1999,67.9],[2000,68.32]],
    "Life Expectancy": [[1975,59.69],[1976,60],[1977,60.3],[1978,60.6],[1979,60.9],[1980,61.19],[1981,61.5],[1982,61.8],[1983,62.1],[1984,62.4],[1985,63.16],[1986,63.92],[1987,64.68],[1988,65.44],[1989,66.2],[1990,66.6],[1991,67],[1992,67.4],[1993,67.8],[1994,68.2],[1995,68.6],[1996,69],[1997,69.4],[1998,69.8],[1999,70.2],[2000,70.6]],
    "Infant Mortality": [[1975,69.33],[1976,68],[1977,66.64],[1978,65.36],[1979,64],[1980,62.64],[1981,61.36],[1982,60],[1983,58.64],[1984,57.36],[1985,56],[1986,50.8],[1987,45.6],[1988,40.4],[1989,35.2],[1990,30],[1991,27.56],[1992,25.12],[1993,22.68],[1994,20.24],[1995,17.8],[1996,16.5],[1997,15.2],[1998,13.9],[1999,12.6],[2000,11.3]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0],[1996,0],[1997,0],[1998,0],[1999,0],[2000,0]],
    "P Index": [[1975,0.0000934926146745413],[1976,0.00009652113835570488],[1977,0.00009957250650429104],[1978,0.00010268996043363535],[1979,0.00010590613509719862],[1980,0.00010922021462114432],[1981,0.00011261588152874207],[1982,0.0001160947675676649],[1983,0.00011965116162105715],[1984,0.0001232793525720632],[1985,0.00012698178804219259],[1986,0.00013074622992389755],[1987,0.00013453270039918855],[1988,0.00013829061529020134],[1989,0.00014198162852661946],[1990,0.00014558942263171248],[1991,0.00014912215634384565],[1992,0.0001525896201490572],[1993,0.00015601302676709664],[1994,0.00015941032542236743],[1995,0.00016277906849335999],[1996,0.00016611599248472826],[1997,0.00016943333550402008],[1998,0.00017274496740645622],[1999,0.000176062310425748],[2000,0.00017938699630956848]],
    "E Index": [[1975,0.00002765130618535321],[1976,0.000029548944845132352],[1977,0.00003225985721624541],[1978,0.00003497076958735847],[1979,0.00003822386443269414],[1980,0.000041476959278029814],[1981,0.000053133882473815974],[1982,0.00005828461597893079],[1983,0.0000637064407211569],[1984,0.00006912826546338303],[1985,0.00007590554639116568],[1986,0.00007861645876227874],[1987,0.00005069406133981422],[1988,0.000055031521133595115],[1989,0.00005964007216448732],[1990,0.00006099552835004385],[1991,0.00006099552835004385],[1992,0.00006939935670049434],[1993,0.00007346572525716392],[1994,0.00007888754999939004],[1995,0.00008186955360761441],[1996,0.000085935922164284],[1997,0.00008756246958695184],[1998,0.0000908155644322875],[1999,0.00009461084175184579],[2000,0.0000908155644322875]],
    "G Index": [[1975,0.11717782973456196],[1976,0.1400426351258424],[1977,0.1629074405171228],[1978,0.18577224590840324],[1979,0.20863705129968368],[1980,0.2315018566909641],[1981,0.24370788062164764],[1982,0.2780566634575712],[1983,0.30367212212900563],[1984,0.3230642277540916],[1985,0.37230092146884886],[1986,0.4218470636776234],[1987,0.4492160638151561],[1988,0.47792600742676383],[1989,0.5057419887223216],[1990,0.5465548067666071],[1991,0.5872644753128868],[1992,0.6078599917480402],[1993,0.635607206711594],[1994,0.6603287030669784],[1995,0.702035483427314],[1996,0.7101155274377665],[1997,0.7129005638839224],[1998,0.7196740475863017],[1999,0.724178242332554],[2000,0.7265506807866868]]
  },
  {
    "name": "Rwanda",
    "region": "AF",
    "code": "RWA",
    "Population": [[1975,3898015],[1976,4020260],[1977,4144469],[1978,4273655],[1979,4410039],[1980,4554233],[1981,4705607],[1982,4863700],[1983,5027665],[1984,5196989],[1985,5363504],[1986,5526006],[1987,5698321],[1988,5899683],[1989,6139088],[1990,6440588],[1991,6789282],[1992,7109723],[1993,7299316],[1994,7293695],[1995,7047441],[1996,6606155],[1997,6107096],[1998,5742029],[1999,5643992],[2000,5869054]],
    "Arable Area": [[1975,748],[1976,808],[1977,805],[1978,884],[1979,912],[1980,939],[1981,965],[1982,980],[1983,997],[1984,1015],[1985,1060],[1986,1075],[1987,1090],[1988,1108],[1989,1119],[1990,1130],[1991,1142],[1992,1153],[1993,1155],[1994,1185],[1995,1187],[1996,1187],[1997,1130],[1998,940],[1999,940],[2000,1000]],
    "Energy Consumption": [[1975,87],[1976,124],[1977,126],[1978,135],[1979,143],[1980,150],[1981,153],[1982,169],[1983,193],[1984,166],[1985,162],[1986,155],[1987,165],[1988,176],[1989,184],[1990,234],[1991,246],[1992,213],[1993,161],[1994,180],[1995,176],[1996,185],[1997,168],[1998,171],[1999,175],[2000,175]],
    "GDP Per Capita": [[1975,39],[1976,118],[1977,197],[1978,276],[1979,355],[1980,434],[1981,455],[1982,515],[1983,602],[1984,690],[1985,769],[1986,807],[1987,869],[1988,837],[1989,874],[1990,902],[1991,883],[1992,913],[1993,924],[1994,939],[1995,985],[1996,1141],[1997,1166],[1998,629],[1999,875],[2000,978]],
    "Life Expectancy (Women)": [[1975,46.04],[1976,46.08],[1977,46.12],[1978,46.16],[1979,46.2],[1980,46.24],[1981,46.28],[1982,46.32],[1983,46.36],[1984,46.4],[1985,46.72],[1986,47.04],[1987,47.36],[1988,47.68],[1989,48],[1990,47.66],[1991,47.32],[1992,46.98],[1993,46.64],[1994,46.3],[1995,42.14],[1996,37.98],[1997,33.82],[1998,29.66],[1999,25.5],[2000,25.5]],
    "Life Expectancy (Men)": [[1975,42.83],[1976,42.87],[1977,42.92],[1978,42.96],[1979,43],[1980,43.04],[1981,43.08],[1982,43.12],[1983,43.16],[1984,43.2],[1985,43.46],[1986,43.72],[1987,43.98],[1988,44.24],[1989,44.5],[1990,43.98],[1991,43.46],[1992,42.94],[1993,42.42],[1994,41.9],[1995,37.9],[1996,33.9],[1997,29.9],[1998,25.9],[1999,21.9],[2000,21.9]],
    "Life Expectancy": [[1975,44.28],[1976,44.36],[1977,44.44],[1978,44.52],[1979,44.6],[1980,44.68],[1981,44.76],[1982,44.84],[1983,44.92],[1984,45],[1985,45.24],[1986,45.48],[1987,45.72],[1988,45.96],[1989,46.2],[1990,45.76],[1991,45.32],[1992,44.88],[1993,44.44],[1994,44],[1995,39.92],[1996,35.84],[1997,31.76],[1998,27.68],[1999,23.6],[2000,23.6]],
    "Infant Mortality": [[1975,135.8],[1976,135.45],[1977,135.09],[1978,134.75],[1979,134.4],[1980,134.04],[1981,133.7],[1982,133.35],[1983,132.99],[1984,132.65],[1985,132.3],[1986,130.7],[1987,129.1],[1988,127.5],[1989,125.9],[1990,124.3],[1991,122.86],[1992,121.42],[1993,119.97],[1994,118.53],[1995,117.1],[1996,120.5],[1997,123.89],[1998,127.3],[1999,130.7],[2000,130.7]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0],[1995,0],[1996,0],[1997,0],[1998,0],[1999,0],[2000,0]],
    "P Index": [[1975,0.003180288452863918],[1976,0.00328002495000935],[1977,0.0033813638233697076],[1978,0.003486763300814427],[1979,0.00359803543813442],[1980,0.003715679550117637],[1981,0.0038391816362470703],[1982,0.003968165578684084],[1983,0.004101940332289145],[1984,0.004240087353784119],[1985,0.0043759425856723065],[1986,0.004508523715854538],[1987,0.004649111015994545],[1988,0.004813397003463958],[1989,0.005008721279296116],[1990,0.005254707241007004],[1991,0.005539197552558635],[1992,0.005800636980607057],[1993,0.005955320948894461],[1994,0.00595073492205938],[1995,0.005749822726320896],[1996,0.005389789024498171],[1997,0.004982619843518156],[1998,0.004684771229641177],[1999,0.00460478540633023],[2000,0.0047884076037251755]],
    "E Index": [[1975,0.00002358493762868362],[1976,0.00003361531340180194],[1977,0.00003415749587602455],[1978,0.00003659731701002631],[1979,0.00003876604690691676],[1980,0.0000406636855666959],[1981,0.000041476959278029814],[1982,0.00004581441907181071],[1983,0.000052320608762482054],[1984,0.000045001145360476794],[1985,0.00004391678041203157],[1986,0.00004201914175225243],[1987,0.00004473005412336549],[1988,0.000047712057731589854],[1989,0.0000498807876284803],[1990,0.0000634353494840456],[1991,0.00006668844432938128],[1992,0.000057742433504708175],[1993,0.000043645689174920263],[1994,0.00004879642268003508],[1995,0.000047712057731589854],[1996,0.00005015187886559161],[1997,0.000045543327834699404],[1998,0.000046356601546033324],[1999,0.00004744096649447855],[2000,0.00004744096649447855]],
    "G Index": [[1975,0.0013409434740750928],[1976,0.0040572135882272035],[1977,0.006773483702379315],[1978,0.009489753816531426],[1979,0.012206023930683537],[1980,0.014922294044835648],[1981,0.015644340530876082],[1982,0.01770733049099161],[1983,0.020698665933159124],[1984,0.023724384541328566],[1985,0.026440654655480678],[1986,0.027747214963553844],[1987,0.029878971255673223],[1988,0.02877870994361161],[1989,0.030050887085682848],[1990,0.031013615733736764],[1991,0.03036033557970018],[1992,0.031391830559757944],[1993,0.03177004538577912],[1994,0.032285792875808],[1995,0.03386741851189658],[1996,0.039231192408196947],[1997,0.040090771558245086],[1998,0.021627011415211114],[1999,0.030085270251684774],[2000,0.0336267363498831]]
  },
  {
    "name": "Saudi Arabia",
    "region": "AS",
    "code": "SAU",
    "Population": [[1975,5991369],[1976,6262068],[1977,6560072],[1978,6888909],[1979,7251401],[1980,7647380],[1981,8077168],[1982,8544235],[1983,9052716],[1984,9604374],[1985,10196888],[1986,10825137],[1987,11483869],[1988,12166340],[1989,12864760],[1990,13581997],[1991,14311016],[1992,15022596],[1993,15679120],[1994,16255743],[1995,16738406],[1996,17139601],[1997,17494146],[1998,17852219],[1999,18250583],[2000,18700473]],
    "Arable Area": [[1975,1467],[1976,1517],[1977,1570],[1978,1640],[1979,1684],[1980,1750],[1981,1804],[1982,1856],[1983,1909],[1984,1962],[1985,2013],[1986,2068],[1987,2270],[1988,2423],[1989,2625],[1990,2780],[1991,2980],[1992,3130],[1993,3290],[1994,3481],[1995,3672],[1996,3746],[1997,3785],[1998,3785],[1999,3785],[2000,3500]],
    "Energy Consumption": [[1975,1150],[1976,1350],[1977,1564],[1978,1670],[1979,2478],[1980,6389],[1981,7263],[1982,9713],[1983,15470],[1984,18909],[1985,25061],[1986,31014],[1987,30615],[1988,31778],[1989,33601],[1990,52863],[1991,57849],[1992,61306],[1993,66061],[1994,70115],[1995,74574],[1996,79628],[1997,87906],[1998,96880],[1999,99833],[2000,103353]],
    "GDP Per Capita": [[1975,3918],[1976,4988],[1977,6058],[1978,7128],[1979,8198],[1980,9268],[1981,9935],[1982,9967],[1983,10883],[1984,12184],[1985,13088],[1986,11141],[1987,9577],[1988,9203],[1989,8447],[1990,8441],[1991,7947],[1992,8501],[1993,8535],[1994,9506],[1995,10563],[1996,11128],[1997,11228],[1998,11479],[1999,11351],[2000,11691]],
    "Life Expectancy (Women)": [[1975,51.98],[1976,52.86],[1977,53.74],[1978,54.62],[1979,55.5],[1980,56.38],[1981,57.26],[1982,58.14],[1983,59.01],[1984,59.9],[1985,60.82],[1986,61.74],[1987,62.66],[1988,63.58],[1989,64.5],[1990,65.22],[1991,65.94],[1992,66.66],[1993,67.38],[1994,68.1],[1995,68.64],[1996,69.17],[1997,69.72],[1998,70.25],[1999,70.8],[2000,71.34]],
    "Life Expectancy (Men)": [[1975,48.23],[1976,49.27],[1977,50.32],[1978,51.36],[1979,52.4],[1980,53.44],[1981,54.48],[1982,55.52],[1983,56.56],[1984,57.6],[1985,58.46],[1986,59.32],[1987,60.18],[1988,61.04],[1989,61.9],[1990,62.51],[1991,63.14],[1992,63.76],[1993,64.38],[1994,65],[1995,65.48],[1996,65.96],[1997,66.44],[1998,66.92],[1999,67.4],[2000,67.88]],
    "Life Expectancy": [[1975,50.05],[1976,51.01],[1977,51.98],[1978,52.94],[1979,53.9],[1980,54.86],[1981,55.82],[1982,56.78],[1983,57.74],[1984,58.7],[1985,59.56],[1986,60.42],[1987,61.28],[1988,62.14],[1989,63],[1990,63.66],[1991,64.32],[1992,64.98],[1993,65.64],[1994,66.3],[1995,66.8],[1996,67.3],[1997,67.8],[1998,68.3],[1999,68.8],[2000,69.3]],
    "Infant Mortality": [[1975,123],[1976,118.5],[1977,113.91],[1978,109.59],[1979,105],[1980,100.41],[1981,96.09],[1982,91.5],[1983,86.91],[1984,82.59],[1985,78],[1986,73.68],[1987,69.36],[1988,65.03],[1989,60.72],[1990,56.4],[1991,53.62],[1992,50.83],[1993,48.06],[1994,45.28],[1995,42.5],[1996,40.42],[1997,38.34],[1998,36.26],[1999,34.18],[2000,32.1]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0.07],[1979,0.21],[1980,0.35],[1981,0.49],[1982,0.63],[1983,0.77],[1984,0.91],[1985,1.05],[1986,1.19],[1987,1.32],[1988,1.46],[1989,1.62],[1990,1.76],[1991,1.89],[1992,1.99],[1993,2.15],[1994,2.4],[1995,2.5],[1996,2.5],[1997,2.5],[1998,3],[1999,3.6],[2000,4]],
    "P Index": [[1975,0.004888201212039164],[1976,0.005109057443711389],[1977,0.005352191110489803],[1978,0.005620480615269649],[1979,0.005916228354017589],[1980,0.006239297259929085],[1981,0.006589950044379498],[1982,0.006971017789581554],[1983,0.007385874133849264],[1984,0.007835957462756414],[1985,0.00831937413312844],[1986,0.00883194605504852],[1987,0.009369388259127252],[1988,0.009926198492211139],[1989,0.01049602109711369],[1990,0.011081195999998045],[1991,0.011675983528424283],[1992,0.012256543033015443],[1993,0.012792183787663136],[1994,0.013262635406899016],[1995,0.013656427520455445],[1996,0.01398375202429823],[1997,0.014273016013667343],[1998,0.014565158405931698],[1999,0.014890173170943296],[2000,0.01525722665125544]],
    "E Index": [[1975,0.0003117549226780019],[1976,0.0003659731701002631],[1977,0.0004239866948420826],[1978,0.000452722365975881],[1979,0.0006717640855618162],[1980,0.001732001913904134],[1981,0.0019689356551394156],[1982,0.002633109186062115],[1983,0.004193781438111904],[1984,0.005126064202537685],[1985,0.00679381749324644],[1986,0.008407623627770044],[1987,0.008299458224162634],[1988,0.008614737332923082],[1989,0.009108936658176994],[1990,0.014330696067414968],[1991,0.01568235697565194],[1992,0.016619519382345724],[1993,0.017908558214809984],[1994,0.01900756209005922],[1995,0.020216357916338534],[1996,0.021586453028699073],[1997,0.023830546289506465],[1998,0.026263319051343326],[1999,0.02706385147453301],[2000,0.02801809262916481]],
    "G Index": [[1975,0.13471324439554394],[1976,0.17150323201760417],[1977,0.2082932196396644],[1978,0.24508320726172467],[1979,0.28187319488378487],[1980,0.31866318250584513],[1981,0.34159675422912944],[1982,0.34269701554119103],[1983,0.3741919955989548],[1984,0.4189244945674598],[1985,0.4500068766332004],[1986,0.38306285242745153],[1987,0.3292875808004401],[1988,0.31642827671572],[1989,0.29043460321826436],[1990,0.29022830422225276],[1991,0.2732430202173016],[1992,0.2922912941823683],[1993,0.2934603218264338],[1994,0.3268463760143034],[1995,0.3631893824783386],[1996,0.3826158712694265],[1997,0.38605418786961904],[1998,0.39468436253610234],[1999,0.39028331728785587],[2000,0.40197359372851055]]
  },
  {
    "name": "Sweden",
    "region": "EU",
    "code": "SWE",
    "Population": [[1975,8084965],[1976,8117862],[1977,8144216],[1978,8168132],[1979,8192567],[1980,8218932],[1981,8246303],[1982,8272583],[1983,8294607],[1984,8310468],[1985,8319263],[1986,8322897],[1987,8325663],[1988,8333422],[1989,8350365],[1990,8377418],[1991,8413202],[1992,8456653],[1993,8505836],[1994,8558830],[1995,8616521],[1996,8678155],[1997,8738187],[1998,8789384],[1999,8826949],[2000,8848174]],
    "Arable Area": [[1975,3055],[1976,3035],[1977,3022],[1978,3023],[1979,3010],[1980,3007],[1981,2998],[1982,3004],[1983,2989],[1984,2983],[1985,2964],[1986,2954],[1987,2945],[1988,2937],[1989,2926],[1990,2912],[1991,2894],[1992,2876],[1993,2857],[1994,2849],[1995,2793],[1996,2771],[1997,2783],[1998,2783],[1999,2770],[2000,2815]],
    "Energy Consumption": [[1975,73571],[1976,78988],[1977,84889],[1978,84464],[1979,87870],[1980,92676],[1981,94822],[1982,98067],[1983,103067],[1984,97230],[1985,100656],[1986,103392],[1987,114324],[1988,124229],[1989,135757],[1990,133992],[1991,142556],[1992,143683],[1993,143286],[1994,145497],[1995,146698],[1996,144963],[1997,145723],[1998,143848],[1999,146734],[2000,146822]],
    "GDP Per Capita": [[1975,4745],[1976,5172],[1977,5599],[1978,6026],[1979,6453],[1980,6880],[1981,7197],[1982,7827],[1983,8778],[1984,9765],[1985,10705],[1986,11643],[1987,12350],[1988,13357],[1989,14049],[1990,14635],[1991,15432],[1992,16317],[1993,17318],[1994,18163],[1995,18616],[1996,18957],[1997,19013],[1998,19744],[1999,20802],[2000,21439]],
    "Life Expectancy (Women)": [[1975,76.86],[1976,77.02],[1977,77.18],[1978,77.34],[1979,77.5],[1980,77.66],[1981,77.82],[1982,77.98],[1983,78.14],[1984,78.3],[1985,78.53],[1986,78.78],[1987,79.02],[1988,79.26],[1989,79.5],[1990,79.62],[1991,79.74],[1992,79.86],[1993,79.97],[1994,80.1],[1995,80.25],[1996,80.42],[1997,80.58],[1998,80.74],[1999,80.9],[2000,81.06]],
    "Life Expectancy (Men)": [[1975,71.94],[1976,71.97],[1977,72.02],[1978,72.05],[1979,72.1],[1980,72.14],[1981,72.17],[1982,72.22],[1983,72.25],[1984,72.3],[1985,72.53],[1986,72.78],[1987,73.02],[1988,73.26],[1989,73.5],[1990,73.66],[1991,73.82],[1992,73.98],[1993,74.14],[1994,74.3],[1995,74.53],[1996,74.78],[1997,75.02],[1998,75.26],[1999,75.5],[2000,75.74]],
    "Life Expectancy": [[1975,74.3],[1976,74.4],[1977,74.5],[1978,74.6],[1979,74.7],[1980,74.8],[1981,74.9],[1982,75],[1983,75.1],[1984,75.2],[1985,75.42],[1986,75.64],[1987,75.86],[1988,76.08],[1989,76.3],[1990,76.5],[1991,76.7],[1992,76.89],[1993,77.1],[1994,77.3],[1995,77.5],[1996,77.7],[1997,77.89],[1998,78.1],[1999,78.3],[2000,78.5]],
    "Infant Mortality": [[1975,11.73],[1976,11.34],[1977,10.95],[1978,10.59],[1979,10.2],[1980,9.8],[1981,9.44],[1982,9.05],[1983,8.65],[1984,8.29],[1985,7.9],[1986,7.68],[1987,7.46],[1988,7.24],[1989,7.02],[1990,6.8],[1991,6.64],[1992,6.47],[1993,6.32],[1994,6.16],[1995,6],[1996,5.84],[1997,5.68],[1998,5.52],[1999,5.36],[2000,5.2]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0.05],[1990,2.16],[1991,4.1],[1992,5.9],[1993,8.2],[1994,10.5],[1995,12.7],[1996,13.8],[1997,14.9],[1998,18.1],[1999,24.9],[2000,29.4]],
    "P Index": [[1975,0.006596311412682848],[1976,0.006623151214282858],[1977,0.006644652753370515],[1978,0.0066641651920447366],[1979,0.0066841010692401115],[1980,0.006705611582939971],[1981,0.006727942865719369],[1982,0.006749384030143125],[1983,0.006767352835518649],[1984,0.0067802934104396985],[1985,0.006787469020831895],[1986,0.00679043390635381],[1987,0.006792690613385626],[1988,0.006799020978483187],[1989,0.006812844328895351],[1990,0.006834916163794736],[1991,0.006864111393160782],[1992,0.006899561927231427],[1993,0.006939689050133009],[1994,0.006982925468225569],[1995,0.007029994045728265],[1996,0.007080279613768361],[1997,0.007129258151922351],[1998,0.007171028444730684],[1999,0.007201676745399572],[2000,0.007218993667579716]],
    "E Index": [[1975,0.019944453405515893],[1976,0.02141295463694784],[1977,0.023012664027141656],[1978,0.02289745025136935],[1979,0.023820787004970458],[1980,0.025123651490527393],[1981,0.025705413285368257],[1982,0.026585104349794445],[1983,0.027940560535350975],[1984,0.02635820098433228],[1985,0.027286959562675617],[1986,0.02802866518741215],[1987,0.030992234591512947],[1988,0.03367739329510043],[1989,0.03680253307651957],[1990,0.03632405704301811],[1991,0.03864568239763934],[1992,0.03895120222186378],[1993,0.03884357900073059],[1994,0.03944296172598369],[1995,0.03976854230175437],[1996,0.03929819900536625],[1997,0.039504228345570845],[1998,0.03899593227598715],[1999,0.03977830158629037],[2000,0.03980215761515617]],
    "G Index": [[1975,0.16314812267913628],[1976,0.17782973456195847],[1977,0.19251134644478063],[1978,0.20719295832760282],[1979,0.22187457021042498],[1980,0.23655618209324714],[1981,0.24745564571585751],[1982,0.26911704029707056],[1983,0.30181543116490167],[1984,0.3357516160088021],[1985,0.368071792050612],[1986,0.4003232017604181],[1987,0.4246321001237794],[1988,0.4592559482877183],[1989,0.48304909916105077],[1990,0.5031976344381791],[1991,0.5306010177417136],[1992,0.5610301196534176],[1993,0.595447668821345],[1994,0.624501444092972],[1995,0.6400770182918443],[1996,0.6518016778985009],[1997,0.6537271351946087],[1998,0.6788612295420162],[1999,0.7152386191720533],[2000,0.7371406959152799]]
  },
  {
    "name": "United States",
    "region": "NA",
    "code": "USA",
    "Population": [[1975,212124541],[1976,214124345],[1977,216123111],[1978,218133070],[1979,220165016],[1980,222226196],[1981,224323441],[1982,226465668],[1983,228661616],[1984,230917197],[1985,233239037],[1986,235626667],[1987,238069643],[1988,240552312],[1989,243063478],[1990,245598258],[1991,248160372],[1992,250757356],[1993,253400645],[1994,256097549],[1995,258849984],[1996,261652086],[1997,264493898],[1998,267361632],[1999,270244831],[2000,273138278]],
    "Arable Area": [[1975,189900],[1976,189300],[1977,188800],[1978,188218],[1979,188218],[1980,188218],[1981,188293],[1982,190624],[1983,190624],[1984,190624],[1985,190624],[1986,189799],[1987,189799],[1988,189799],[1989,189799],[1990,189799],[1991,187776],[1992,187776],[1993,187776],[1994,187776],[1995,187776],[1996,186180],[1997,184948],[1998,184139],[1999,184139],[2000,181306]],
    "Energy Consumption": [[1975,1721317],[1976,1861216],[1977,1979739],[1978,1981410],[1979,2009365],[1980,2132463],[1981,2228643],[1982,2305408],[1983,2348085],[1984,2381378],[1985,2392193],[1986,2333122],[1987,2402910],[1988,2518181],[1989,2609815],[1990,2635832],[1991,2765736],[1992,2910900],[1993,3121605],[1994,3181227],[1995,3276274],[1996,3299529],[1997,3417658],[1998,3496783],[1999,3595759],[2000,3688795]],
    "GDP Per Capita": [[1975,4346],[1976,5142],[1977,5938],[1978,6734],[1979,7530],[1980,8326],[1981,9141],[1982,10236],[1983,11352],[1984,12200],[1985,13504],[1986,13766],[1987,15023],[1988,16433],[1989,17533],[1990,18533],[1991,19394],[1992,20506],[1993,22070],[1994,23155],[1995,23640],[1996,24760],[1997,25791],[1998,27079],[1999,27780],[2000,28990]],
    "Life Expectancy (Women)": [[1975,73.96],[1976,74.32],[1977,74.68],[1978,75.04],[1979,75.4],[1980,75.76],[1981,76.12],[1982,76.48],[1983,76.84],[1984,77.2],[1985,77.34],[1986,77.48],[1987,77.62],[1988,77.76],[1989,77.9],[1990,78],[1991,78.1],[1992,78.2],[1993,78.3],[1994,78.4],[1995,78.5],[1996,78.6],[1997,78.7],[1998,78.8],[1999,78.9],[2000,79]],
    "Life Expectancy (Men)": [[1975,66.44],[1976,66.78],[1977,67.11],[1978,67.46],[1979,67.8],[1980,68.14],[1981,68.48],[1982,68.82],[1983,69.16],[1984,69.5],[1985,69.76],[1986,70.02],[1987,70.28],[1988,70.53],[1989,70.8],[1990,70.94],[1991,71.08],[1992,71.22],[1993,71.36],[1994,71.5],[1995,71.64],[1996,71.78],[1997,71.92],[1998,72.06],[1999,72.2],[2000,72.34]],
    "Life Expectancy": [[1975,70.06],[1976,70.42],[1977,70.78],[1978,71.14],[1979,71.5],[1980,71.86],[1981,72.22],[1982,72.58],[1983,72.94],[1984,73.3],[1985,73.46],[1986,73.61],[1987,73.78],[1988,73.94],[1989,74.1],[1990,74.22],[1991,74.34],[1992,74.46],[1993,74.58],[1994,74.7],[1995,74.82],[1996,74.94],[1997,75.06],[1998,75.17],[1999,75.3],[2000,75.42]],
    "Infant Mortality": [[1975,20.76],[1976,20.1],[1977,19.42],[1978,18.78],[1979,18.1],[1980,17.42],[1981,16.78],[1982,16.1],[1983,15.42],[1984,14.78],[1985,14.1],[1986,13.34],[1987,12.58],[1988,11.82],[1989,11.06],[1990,10.3],[1991,10],[1992,9.7],[1993,9.4],[1994,9.1],[1995,8.8],[1996,8.6],[1997,8.4],[1998,8.2],[1999,8],[2000,7.8]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0.9],[1986,2.4],[1987,5.2],[1988,8.1],[1989,10.6],[1990,12.9],[1991,15.6],[1992,18.4],[1993,20],[1994,21.8],[1995,23.4],[1996,25.3],[1997,27.2],[1998,29.7],[1999,32.4],[2000,35.9]],
    "P Index": [[1975,0.1730668630857908],[1976,0.17469845084755956],[1977,0.176329191732286],[1978,0.17796906469286464],[1979,0.17962687627148685],[1980,0.18130853910584588],[1981,0.18301962643011904],[1982,0.18476741339130653],[1983,0.18655902991086576],[1984,0.1883992994349182],[1985,0.19029362794350463],[1986,0.19224163279179574],[1987,0.1942347929934429],[1988,0.1962603376752831],[1989,0.19830913231384256],[1990,0.20037719299717766],[1991,0.20246755477596018],[1992,0.2045863660754222],[1993,0.20674295641288426],[1994,0.20894328982609137],[1995,0.21118892952931428],[1996,0.21347509123837566],[1997,0.21579365129748526],[1998,0.21813336043818515],[1999,0.2204856870677668],[2000,0.22284637477242514]],
    "E Index": [[1975,0.4666339549907219],[1976,0.5045593479713565],[1977,0.5366898946674998],[1978,0.5371428881247128],[1979,0.5447212436581593],[1980,0.5780920327640869],[1981,0.6041655879494523],[1982,0.6249759067663018],[1983,0.636545267492501],[1984,0.6455707080496477],[1985,0.6485025597790064],[1986,0.6324889293116045],[1987,0.6514078445671283],[1988,0.6826568025601857],[1989,0.7074979769816431],[1990,0.7145509576975679],[1991,0.749766793763275],[1992,0.7891194821073007],[1993,0.8462397612228384],[1994,0.8624027629618887],[1995,0.888169171775607],[1996,0.8944733984946304],[1997,0.9264971352433519],[1998,0.9479472293797839],[1999,0.9747787556641125],[2000,1]],
    "G Index": [[1975,0.14942923944436803],[1976,0.1767982395819007],[1977,0.20416723971943337],[1978,0.23153623985696603],[1979,0.2589052399944987],[1980,0.28627424013203134],[1981,0.3142965204236006],[1982,0.35194608719570897],[1983,0.3903177004538578],[1984,0.4194746252234906],[1985,0.4643102736900014],[1986,0.47331866318250587],[1987,0.5165383028469261],[1988,0.565018566909641],[1989,0.6028400495117591],[1990,0.6372232155136845],[1991,0.6668271214413424],[1992,0.7050612020354834],[1993,0.7588364736624948],[1994,0.796142208774584],[1995,0.8128180442855178],[1996,0.8513271902076743],[1997,0.8867762343556594],[1998,0.9310617521661395],[1999,0.9551643515334892],[2000,0.996767982395819]]
  },
  {
    "name": "South Africa",
    "region": "AF",
    "code": "ZAF",
    "Population": [[1975,23105679],[1976,23735199],[1977,24383117],[1978,25039481],[1979,25697468],[1980,26352528],[1981,27007430],[1982,27671341],[1983,28357481],[1984,29074292],[1985,29829163],[1986,30616723],[1987,31417594],[1988,32204734],[1989,32960770],[1990,33672132],[1991,34349504],[1992,35028773],[1993,35760286],[1994,36577424],[1995,37492564],[1996,38486112],[1997,39520023],[1998,40539858],[1999,41504529],[2000,42401141]],
    "Arable Area": [[1975,13248],[1976,13284],[1977,13320],[1978,13356],[1979,13392],[1980,13430],[1981,13384],[1982,13344],[1983,13294],[1984,13254],[1985,13214],[1986,13169],[1987,13169],[1988,13169],[1989,13169],[1990,13300],[1991,13500],[1992,13700],[1993,14000],[1994,14300],[1995,14600],[1996,14900],[1997,15200],[1998,15500],[1999,15825],[2000,15800]],
    "Energy Consumption": [[1975,54823],[1976,59346],[1977,64495],[1978,70340],[1979,75139],[1980,80886],[1981,79253],[1982,84846],[1983,92529],[1984,99923],[1985,107029],[1986,111032],[1987,128457],[1988,122714],[1989,122250],[1990,144179],[1991,148170],[1992,157021],[1993,162604],[1994,165473],[1995,168325],[1996,168108],[1997,174855],[1998,182757],[1999,188688],[2000,198701]],
    "GDP Per Capita": [[1975,3082],[1976,3319],[1977,3556],[1978,3793],[1979,4030],[1980,4267],[1981,4447],[1982,4796],[1983,5267],[1984,5981],[1985,6741],[1986,6934],[1987,6885],[1988,7317],[1989,7298],[1990,7274],[1991,7376],[1992,7747],[1993,8057],[1994,8199],[1995,8132],[1996,7939],[1997,8033],[1998,8266],[1999,8522],[2000,8883]],
    "Life Expectancy (Women)": [[1975,54.84],[1976,55.28],[1977,55.72],[1978,56.16],[1979,56.6],[1980,57.04],[1981,57.48],[1982,57.92],[1983,58.36],[1984,58.8],[1985,59.37],[1986,59.96],[1987,60.54],[1988,61.12],[1989,61.7],[1990,62.3],[1991,62.9],[1992,63.5],[1993,64.1],[1994,64.7],[1995,64.92],[1996,65.14],[1997,65.36],[1998,65.58],[1999,65.8],[2000,66.02]],
    "Life Expectancy (Men)": [[1975,49.8],[1976,50.1],[1977,50.4],[1978,50.7],[1979,51],[1980,51.3],[1981,51.6],[1982,51.9],[1983,52.2],[1984,52.5],[1985,52.98],[1986,53.46],[1987,53.94],[1988,54.42],[1989,54.9],[1990,55.4],[1991,55.9],[1992,56.4],[1993,56.9],[1994,57.4],[1995,57.58],[1996,57.76],[1997,57.94],[1998,58.12],[1999,58.3],[2000,58.48]],
    "Life Expectancy": [[1975,52.26],[1976,52.62],[1977,52.98],[1978,53.34],[1979,53.7],[1980,54.06],[1981,54.42],[1982,54.78],[1983,55.14],[1984,55.5],[1985,56.04],[1986,56.58],[1987,57.12],[1988,57.66],[1989,58.2],[1990,58.72],[1991,59.24],[1992,59.76],[1993,60.28],[1994,60.8],[1995,61.01],[1996,61.23],[1997,61.46],[1998,61.68],[1999,61.9],[2000,62.12]],
    "Infant Mortality": [[1975,81.43],[1976,80.35],[1977,79.24],[1978,78.2],[1979,77.1],[1980,75.99],[1981,74.95],[1982,73.85],[1983,72.74],[1984,71.7],[1985,70.6],[1986,68.61],[1987,66.64],[1988,64.66],[1989,62.68],[1990,60.7],[1991,58.82],[1992,56.94],[1993,55.06],[1994,53.18],[1995,51.3],[1996,50.78],[1997,50.26],[1998,49.74],[1999,49.22],[2000,48.7]],
    "Number of Personal Computers": [[1975,0],[1976,0],[1977,0],[1978,0],[1979,0],[1980,0],[1981,0],[1982,0],[1983,0],[1984,0],[1985,0],[1986,0],[1987,0],[1988,0],[1989,0],[1990,0],[1991,0],[1992,0],[1993,0],[1994,0.38],[1995,0.9],[1996,1.2],[1997,1.5],[1998,2.3],[1999,2.8],[2000,3.5]],
    "P Index": [[1975,0.018851318971137957],[1976,0.019364927868704255],[1977,0.019893547213114857],[1978,0.020429057427948708],[1979,0.02096589180601923],[1980,0.02150033812137026],[1981,0.022034655528655116],[1982,0.022576323143333188],[1983,0.023136126817523268],[1984,0.023720954158153264],[1985,0.024336833657001226],[1986,0.0249793832556912],[1987,0.025632792951019102],[1988,0.026274999882697738],[1989,0.02689182987456525],[1990,0.027472211518660045],[1991,0.028024861611051517],[1992,0.028579059416110865],[1993,0.029175881733885384],[1994,0.02984256324891196],[1995,0.030589202031665205],[1996,0.03139981185019234],[1997,0.03224335278438294],[1998,0.03307540947845068],[1999,0.033862459308200615],[2000,0.034593981580510816]],
    "E Index": [[1975,0.014862034892153129],[1976,0.016088180557607565],[1977,0.01748402933749368],[1978,0.019068557618409265],[1979,0.020369524465306422],[1980,0.021927485804985096],[1981,0.021484793814782334],[1982,0.02300100710394587],[1983,0.025083801078672033],[1984,0.02708824968587303],[1985,0.029014624016785968],[1986,0.030099802238942527],[1987,0.03482356704560703],[1988,0.033266690070876806],[1989,0.03314090373685716],[1990,0.03908566347547099],[1991,0.04016758860278221],[1992,0.04256701714245438],[1993,0.0440805195192468],[1994,0.04485828027851914],[1995,0.04563143248676058],[1996,0.04557260568830743],[1997,0.04740165826509741],[1998,0.04954382122075095],[1999,0.0511516633480581],[2000,0.053866099905253616]],
    "G Index": [[1975,0.10596891761793426],[1976,0.11411772796039059],[1977,0.12226653830284692],[1978,0.13041534864530327],[1979,0.1385641589877596],[1980,0.14671296933021594],[1981,0.1529019392105625],[1982,0.1649016641452345],[1983,0.1810961353321414],[1984,0.20564571585751615],[1985,0.2317769220189795],[1986,0.23841287305735112],[1987,0.23672809792325678],[1988,0.25158162563608855],[1989,0.250928345482052],[1990,0.2501031494980058],[1991,0.2536102324302022],[1992,0.2663663870169165],[1993,0.2770251684775134],[1994,0.28190757804978683],[1995,0.2796039059276578],[1996,0.2729679548892862],[1997,0.27619997249346717],[1998,0.28421125017191584],[1999,0.29301334066840873],[2000,0.3054256635951038]]
  }
];

module.exports = robertsonData;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var flubber = __webpack_require__(10);
var globals = __webpack_require__(0);
var circlefit = __webpack_require__(11);

d3.chart = function () {  

  /**

  GLOBAL CHART VARIABLES

  **/

  var params = {};
      params.yearMin = globals.param_yearMin;
      params.yearMax = globals.param_yearMax;      
      params.x = globals.param_x;
      params.y = globals.param_y;
      params.radius = globals.param_r;
      params.color = 'region';
      params.facet = 'facet';
      params.key = 'code';
  
  var scale_pop = d3.scaleLinear(), 
      scale_x = d3.scaleLinear(), 
      scale_y = d3.scaleLinear(), 
      scale_scroll = d3.scaleLinear(),
      scale_reg = d3.scaleOrdinal(),
      scale_tmp = d3.scaleLinear(),
      bubbles = new BubbleSet(),
      highlight_points = [],
      bubbleset_points = [],
      outside_points = [],
      bubbleset_outline = "M0 0",
      bubbleset_pad = -3,
      bubbleset_coords = [],
      outside_coords = [],
      bubble_code = "",
      bubble_node,
      animation = 'off',
      loop_count = 0,
      animation_duration = (params.yearMax - params.yearMin) * 500,
      tilt = 'off',
      tilt_selection = 0,
      tilt_time = 0,
      current_year = params.yearMin,
      scroll_year = current_year,
      facets = globals.facets, //show facets?
      num_facets = 0,
      num_facet_cols = 0,
      facet_dim = 0,
      lines = globals.lines, //show lines?
      focus_x = -1,
      focus_y = -1,
      focus_x_lower = -1,
      focus_x_upper = -1,
      focus_y_upper = -1,
      focus_y_lower = -1,
      focus_y_facet = -1,
      this_chart,
      thousand_format = d3.format(".2s"),
      touch_counter = 0,
      last_touch = new Date(),
      touch_points = [];

  function chart (selection) {
    selection.each(function (data){

      this_chart = d3.select(this);
      this_chart.interrupt();

      var bubbleset = this_chart.selectAll('.bubbleset')
      .data([null]);

      /**

      FOCUS

      **/

      var focus = this_chart.selectAll('.focus')
      .data([null]);
      
      var focus_enter = focus.enter()
      .append("g")
      .attr("class", "focus");      

      focus_enter.append('text')
      .attr('class','focus_text')
      .attr('text-anchor', "start")
      .attr('alignment-baseline','hanging')
      .attr('dy','0.2em')
      .attr('id','focus_x_min');

      focus_enter.append('text')
      .attr('class','focus_text')
      .attr('text-anchor', "end")
      .attr('alignment-baseline','hanging')
      .attr('dy','0.2em')
      .attr('id','focus_x_max');

      focus_enter.append('text')
      .attr('class','focus_text')
      .attr('text-anchor', "end")
      .attr('alignment-baseline','baseline')
      .attr('dx','-0.2em')
      .attr('dy','-1em')
      .attr('id','focus_y_min');

      focus_enter.append('text')
      .attr('class','focus_text')
      .attr('text-anchor', "end")
      .attr('alignment-baseline','hanging')
      .attr('dx','-0.2em')
      .attr('id','focus_y_max');      

      var focus_update = focus;

      var focus_exit = focus.exit()
      .remove();

      /**

      DATA WRANGLING

      **/

      //sort data alphabetically by country code
      data.sort(function(x, y){
        return d3.ascending(x[params.key], y[params.key]);
      });

      //assign facet index
      data.forEach(function(d,i){
        d[params.facet] = i;
      });

      num_facets = d3.max(data, function(d){
        return d[params.facet] + 1;
      });

      num_facet_cols = Math.ceil(Math.sqrt(num_facets));

      facet_dim = chart_dim / num_facet_cols;

      focus_enter.append('rect')
      .attr('id','focus_rect_x')
      .attr("x",0)      
      .style('fill','#666')
      .style('stroke','none')
      .style('opacity',0.2)
      .attr("width",facet_dim)
      .attr('y', 0)
      .attr('height', chart_dim)      
      .style("display", "none");

      focus_enter.append('rect')
      .attr('id','focus_rect_y')
      .attr("x",0)      
      .style('fill','#666')
      .style('stroke','none')
      .style('opacity',0.2)
      .attr("width",chart_dim)
      .attr('y', 0)
      .attr('height', facet_dim)
      .style("display", "none");

      var countries = data.map(function(d){
        return {
          id: d.code,
          region: d.region,
          facet: d.facet,
          param_x: d[params.x].map(function(d) {
            return d[1];
          }),
          param_y: d[params.y].map(function(d) {
            return d[1];
          })
        };
      });

      countries.forEach(function(d){
        d.values = [];
        for(var i = 0; i < d.param_x.length; i++){
          if (d.param_x[i] != null && d.param_y[i] != null) {
            d.values.push({
              'param_x': d.param_x[i],
              'param_y': d.param_y[i]
            });
          }
        }
      }); 
      
      /**

      SCALES: initialize domains and ranges

      **/

      //region scale (color)

      scale_reg.range([
        "#fad139",
        "#54b2fc",
        "#f67afe",
        "#8bba32",
        "#c29aeb"]
        // ["#ffd700",
        // "#cd34b5",
        // "#7dfa90",
        // "#fa8775",
        // "#a779e6",
        // "#9AF7F9"]
      );

      //size scale

      if (facets == 'on') {
        scale_pop.range([1.75,7]); // r scale range      
      }
      else {
        scale_pop.range([7,28]); // r scale range      
      }
      
      var pop_max = d3.max(data, function(d){
        return d3.max(d[params.radius], function (dd) {
          return Math.sqrt(dd[1]);
        });
      });
      
      var pop_buffer = pop_max * 0.05;
      
      scale_pop.domain([0,pop_max + pop_buffer]);
      scale_pop.nice();

      //y scale

      if (facets == 'on') {
        scale_y.range([facet_dim, 0]); // y scale range
      }
      else {
        scale_y.range([chart_dim, 0]); // y scale range
      }
      
      var y_min = d3.min(data, function(d){
        return d3.min(d[params.y], function (dd){
          return dd[1];
        });
      });
      
      var y_max = d3.max(data, function(d){
        return d3.max(d[params.y], function (dd) {
          return dd[1];
        });
      });
      
      var y_buffer = (y_max - y_min) * 0.05;
      
      scale_y.domain([d3.max([0,y_min - y_buffer]),y_max + y_buffer]);
      scale_y.nice();

      
      //x scale
      
      if (facets == 'on') {
        scale_x.range([0, facet_dim]); // x scale range
      }
      else {
        scale_x.range([0, chart_dim]); // x scale range
      }
      
      var x_min = d3.min(data, function(d){
        return d3.min(d[params.x], function (dd){
          return dd[1];
        });
      });
      
      var x_max = d3.max(data, function(d){
        return d3.max(d[params.x], function (dd) {
          return dd[1];
        });
      });
      
      var x_buffer = (x_max - x_min) * 0.05;
      
      scale_x.domain([d3.max([0,x_min - x_buffer]),x_max + x_buffer]);
      scale_x.nice();

      // time scale

      scale_tmp.range([-5,5]);
      scale_tmp.domain([-0.5,0.5]);
      scale_tmp.clamp(true);
      scale_tmp.nice();
      scale_tmp.tickFormat(d3.format("d"));

      //SCROLL RING SCALE

      scale_scroll.range([-(4/12),(4/12)]);
      scale_scroll.domain([-10,10]);
      scale_scroll.clamp(true);

      /** 
       
      DEFS: add as required 
      
      **/
     
      /** 
      
        GUIDES / AXES

      **/

     var gamma_indicator = this_chart.selectAll('.gamma_indicator')
     .data([null]);

      gamma_indicator.enter()
      .append("text")
      .attr("class", "gamma_indicator")
      .attr('text-anchor', "start")
      .attr('alignment-baseline','baseline');

      gamma_indicator.style('visibility',non_interactive ? 'hidden' : 'visible')
      .attr('transform', function () {
        return 'translate(0,' + (0 - 0.5 * inner_padding) + ')';
      })
      .attr('dy','-0.2em')
      .text(non_interactive && tilt == 'on' ? '' : 'x: ' + (Math.round(tilt_time) + "° : " + tps + " tilts / second")); 


      gamma_indicator.exit()
      .remove();

      var beta_indicator = this_chart.selectAll('.beta_indicator')
     .data([null]);

      beta_indicator.enter()
      .append("text")
      .attr("class", "beta_indicator")
      .attr('text-anchor', "end")
      .attr('alignment-baseline','baseline');

      beta_indicator.style('visibility',non_interactive ? 'hidden' : 'visible')
      .attr('transform', function () {
        return 'translate(' + (chart_dim) + ',' + (0 - 0.5 * inner_padding) + ')';
      })
      .attr('dy','-0.2em')
      .text(non_interactive && tilt == 'on' ? '' : 'y: ' + (Math.round(tilt_selection) + "°")); 

      beta_indicator.exit()
      .remove();

      year_indicator = this_chart.selectAll('.year_indicator')
      .data([null]);

      year_indicator.enter()
      .append("text")
      .attr("class", "year_indicator");

      year_indicator.transition().duration(250)
      .attr('id', facets == 'on' ? "faceted_year_indicator" : (current_year == params.yearMin) ? "central_year_indicator_min" : "central_year_indicator")
      .attr('text-anchor', facets == 'on' ? "middle" : "middle")
      .attr('alignment-baseline',facets == 'on' ?  'baseline' : 'middle')
      .attr('dy',facets == 'on' ?  '-0.2em' : '0em')
      .attr('transform', function () {
        return facets == 'on' ? 'translate(' + (chart_dim / 2) + ',' + (0 - 0.5 * inner_padding) + ')' : 'translate(' + (chart_dim / 2) + ',' + (chart_dim / 2) + ')';
      })
      .text(facets == 'on' ? (params.yearMin + ' ― ' + params.yearMax) : Math.round(current_year));

      year_indicator.exit()
      .remove();

      var x_indicator = this_chart.selectAll('.x_indicator')
      .data([null]);

      var x_indicator_enter = x_indicator.enter()
      .append("g")
      .attr("class", "x_indicator");

      x_indicator_enter.append('line');

      x_indicator.select('line').attr('x1', 0)
      .attr('x2', chart_dim)
      .attr('y1', chart_dim)
      .attr('y2', chart_dim)
      .style("stroke", facets == 'on' ? 'none' : '#ccc');

      x_indicator_enter.append("text")
      .attr('class','indicator_text');

      x_indicator.select('text').attr('text-anchor', "middle")
      .attr('alignment-baseline','hanging')
      .attr('dy','0.2em')
      .text('← ' + params.x + (!non_interactive ? ' ▼' : '') + ' →')
      .attr('transform', function () {
        return 'translate(' + (chart_dim / 2) + ',' + (chart_dim + inner_padding * 0.5) + ')';
      });

      x_indicator.exit()
      .remove();

      var y_indicator = this_chart.selectAll('.y_indicator')
      .data([null]);

      var y_indicator_enter = y_indicator.enter()
      .append("g")
      .attr("class", "y_indicator");

      y_indicator_enter.append('line');

      y_indicator.select('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', chart_dim)
      .style("stroke", facets == 'on' ? 'none' : '#ccc');

      y_indicator_enter.append("text")
      .attr('class','indicator_text');

      y_indicator.select('text')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','baseline')
      .attr('dy','-0.6em')
      .text('← ' + params.y + (!non_interactive ? ' ▼' : '') + ' →')
      .attr('transform', function () {
        return 'translate(' + (0 - inner_padding * 0.5) + ',' + (chart_dim / 2) + ')rotate(-90)';
      });

      y_indicator.exit()
      .remove();

      focus_x_lower = facets == 'on' ? scale_x.domain()[0] : Math.floor(scale_x.invert(focus_x * facet_dim));      
      focus_x_upper = facets == 'on' ? scale_x.domain()[1] : Math.ceil(scale_x.invert((focus_x + 1) * facet_dim));

      focus_y_lower = facets == 'on' ? scale_y.domain()[0] : Math.floor(scale_y.invert((focus_y + 1) * facet_dim));
      focus_y_upper = facets == 'on' ? scale_y.domain()[1] : Math.ceil(scale_y.invert(focus_y * facet_dim));      
      focus_y_facet = (num_facet_cols - 1) - focus_y;        

      // console.log({
      //   "type":"update",
      //   "focus_x":focus_x,
      //   "focus_y":focus_y,
      //   "focus_x_lower": focus_x_lower,
      //   "focus_x_upper": focus_x_upper,
      //   "focus_y_lower": focus_y_lower,
      //   "focus_y_upper": focus_y_upper
      // });

      focus_update.select('#focus_x_min')
      .attr('x', function () {
        if (focus_x < 0) {
          return 0;
        }
        else {
          if (facets == 'on') {
            return d3.max([0,focus_x * facet_dim]);
          }
          else {
            return d3.max([scale_x(focus_x_lower),scale_x.range()[0]]);
          }
        }
      }) 
      .text(function () {
        if (focus_x < 0 || facets == 'on') {
          return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
        }
        else {
          return scale_x.domain()[1] < 1000 ? d3.max([focus_x_lower,scale_x.domain()[0]]) : thousand_format(d3.max([focus_x_lower,scale_x.domain()[0]])).replace(/G/,"B");
        }
      }) 
      .attr('y', chart_dim);

      focus_update.select('#focus_x_max')
      .attr('x', function () {
        if (focus_x < 0) {
          return scale_x.range()[1];
        }
        else {
          if (facets == 'on') {
            return d3.min([chart_dim - facet_dim,(focus_x + 1) * facet_dim]);
          }
          else {
            return d3.min([scale_x(focus_x_upper),scale_x.range()[1]]);
          }
        }
      }) 
      .text(function () {
        if (focus_x < 0 || facets == 'on') {
          return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] : thousand_format(scale_x.domain()[1]).replace(/G/,"B");
        }
        else {
          return scale_x.domain()[1] < 1000 ? d3.min([focus_x_upper,scale_x.domain()[1]]) : thousand_format(d3.min([focus_x_upper,scale_x.domain()[1]])).replace(/G/,"B");
        }
      }) 
      .attr('y', chart_dim);

      focus_update.select('#focus_y_min')
      .attr('x', 0)
      .attr('y', function () {
        if (focus_y < 0) {
          return chart_dim;
        }
        else {
          if (facets == 'on') {
            return d3.min([chart_dim - facet_dim,(focus_y + 1) * facet_dim]);
          }
          else {
            return d3.max([scale_y(focus_y_lower),scale_y.range()[1]]);
          }
        }
      }) 
      .text(function () {
        if (focus_y < 0 || facets == 'on') {
          return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
        }
        else {
          return scale_y.domain()[1] < 1000 ? d3.max([focus_y_lower,scale_y.domain()[0]]) : thousand_format(d3.max([focus_y_lower,scale_y.domain()[0]])).replace(/G/,"B");
        }
      });

      focus_update.select('#focus_y_max')
      .attr('x', 0)
      .attr('y', function () {
        if (focus_y < 0) {
          return facets == 'on' ? (chart_dim - facet_dim) : scale_y(scale_y.domain()[1]);
        }
        else {
          if (facets == 'on') {
            return d3.min([chart_dim - facet_dim,focus_y * facet_dim]);
          }
          else {
            return d3.min([scale_y(focus_y_upper),scale_y.range()[0]]);
          }
        }
      }) 
      .text(function () {
        if (focus_y < 0 || facets == 'on') {
          return scale_y.domain()[1] < 1000 ? scale_y.domain()[1]: thousand_format(scale_y.domain()[1]).replace(/G/,"B");
        }
        else {
          return scale_y.domain()[1] < 1000 ? d3.min([focus_y_upper,scale_y.domain()[1]]): thousand_format(d3.min([focus_y_upper,scale_y.domain()[1]])).replace(/G/,"B");
        }
      }); 

      focus_update.select('#focus_rect_x')
      .attr('x',focus_x * facet_dim)
      .attr("width",facet_dim)
      .attr('height', chart_dim);

      focus_update.select('#focus_rect_y')
      .attr('y',focus_y * facet_dim)
      .attr("width",chart_dim)
      .attr('height',facet_dim);
     
      /**
        
        HELPER FUNCTIONS
        
      **/

      var bisect = d3.bisector(function(d){
        return d[0];
      });

      function interpolateData(year) {
        return data.map(function (d){
          var tmp = {};
            tmp[params.key] = d[params.key];
            tmp[params.facet] = d[params.facet];
            tmp[params.color] = d[params.color];
            tmp[params.x] = (interpolateValues(d[params.x], year) != null) ? interpolateValues(d[params.x], year) : x_min;
            tmp[params.radius] = (interpolateValues(d[params.radius], year) != null) ? interpolateValues(d[params.radius], year) : 0;
            tmp[params.y] = (interpolateValues(d[params.y], year) != null) ? interpolateValues(d[params.y], year) : y_min;
            return tmp;
        });
      }

      // Finds (and possibly interpolates) the value for the specified year.
      function interpolateValues(values, year) {
        var i = bisect.left(values, year, 0, values.length - 1),
                a = values[i];
        if (i > 0) {
            var b = values[i - 1],
                    t = (year - a[0]) / (b[0] - a[0]);
            return a[1] * (1 - t) + b[1] * t;
        }
        return a[1];
      }      

      function order(a, b) {
        return b[params.radius] - a[params.radius];
      }

      // Positions the marks based on data.
      function position(mark) {        

        var mark_transition;
        
        if (animation == 'off' && tilt == 'off' && !touching){
          mark_transition = mark.transition()
          .delay(function(d,i){
            return i * 10;
          })
          .duration(500);
        }
        else if (animation == 'on' && tilt == 'off'){
          mark_transition = mark.transition()         
          .delay(function(d,i){
            return i * (50 / data.length);
          })
          .duration(50);
        }
        else {
          mark_transition = mark;
        }

        mark_transition.select('circle')
        .attr("cx", function (d) {         
          return (d[params.x] != null) ? scale_x(d[params.x]) : - facet_dim;
        })        
        .style("stroke", function(d){
          if (facets == 'on') {
            return '#999';
          }
          else if (bubbleset_points.indexOf(d[params.key]) != -1) {
            return 'gold';
          }          
          else {
            return '#fff';
          }
        })
        .style("opacity", function(d){   

          if ((focus_x < 0 || focus_x > (num_facet_cols - 1)) && (focus_y_facet < 0 || focus_y_facet > (num_facet_cols - 1))) {
            if (facets == 'off' && bubbleset_points.length != 0) {
              if (bubbleset_points.indexOf(d[params.key]) != -1) {
                d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                if (!non_interactive) {
                  d3.select('#' + d[params.key] + '_bttn').style('display',null);
                }
                if (highlight_points.indexOf(d[params.key]) == -1){
                  highlight_points.push(d[params.key]);
                }
                return 0.75;
              }
              else {
                d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.175);
                d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
                if (!non_interactive) {
                  d3.select('#' + d[params.key] + '_bttn').style('display','none');
                }
                if (highlight_points.indexOf(d[params.key]) != -1){
                  highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                }
                return 0.175;
              }
            }
            else {
              d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
              if (!non_interactive) {
                d3.select('#' + d[params.key] + '_bttn').style('display','none');
              }
              if (highlight_points.indexOf(d[params.key]) != -1){
                highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
              }
              d3.select('#line_' + d[params.key]).select('path').style('opacity', facets == 'on' ? 1 : 0.5);            
              return (facets == 'on' ? 1 : 0.5);
            }
          }
          else {
            if (facets == 'on') {
              d3.select('#line_'+ d[params.key]).select('path').style('opacity',1);
              d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
              if (!non_interactive) {
                d3.select('#' + d[params.key] + '_bttn').style('display',null);
              }
              if (highlight_points.indexOf(d[params.key]) != -1){
                highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
              }
              return 1;              
            }
            else {
              if (bubbleset_points.indexOf(d[params.key]) != -1) {
                d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                if (!non_interactive) {
                  d3.select('#' + d[params.key] + '_bttn').style('display',null);
                }
                if (highlight_points.indexOf(d[params.key]) == -1){
                  highlight_points.push(d[params.key]);
                }
                return 0.75;
              }
              else if ((d[params.y] >= focus_y_lower && d[params.y] < focus_y_upper) || (d[params.x] >= focus_x_lower && d[params.x] < focus_x_upper)) {
                d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                if (!non_interactive) {
                  d3.select('#' + d[params.key] + '_bttn').style('display',null);
                }
                if (highlight_points.indexOf(d[params.key]) == -1){
                  highlight_points.push(d[params.key]);
                }
                return 0.75;
              }
              else {
                d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.175);
                d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
                if (!non_interactive) {
                  d3.select('#' + d[params.key] + '_bttn').style('display','none');
                }
                if (highlight_points.indexOf(d[params.key]) != -1){
                  highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                }
                return 0.175;
              }
            }            
          }
        })
        .attr("cy", function (d) {
          return d[params.y] != null ? scale_y(d[params.y]) : - facet_dim;
        })
        .attr("r", function (d) {
          return (d[params.y] != null && d[params.x] != null) ? scale_pop(Math.sqrt(d[params.radius])) : 0;
        })
        .attr('transform', function (d) {
          if (facets == 'on') {
            return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols)) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols)) + ')';
          }
          else {
            return 'translate(0,0)';
          }
        }); 
        
        mark_transition.select('text')
        .attr("x", function (d) {         
          return facets == 'on' ? 0 : ((d[params.x] != null) ? scale_x(d[params.x]) : - facet_dim);
        })
        .attr("dy", facets == "on" ? '-1em' : '0em')        
        // .style('visibility', function(d){
        //   if (facets == 'on') {
        //     return 'visible';
        //   }
        //   else if (d[params.y] != null && d[params.x] != null){
        //     return 'visible';
        //   }
        //   else {
        //     return 'hidden';
        //   }
        // })
        // .style("display", function(d){          
        //   if (non_interactive) {
        //     return null;
        //   }
        //   else if (bubbleset_points.indexOf(d[params.key]) != -1) {
        //     return null;
        //   }
        //   else if ((focus_x < 0 || focus_x > (num_facet_cols - 1)) && (focus_y_facet < 0 || focus_y_facet > (num_facet_cols - 1))) {            
        //     return facets == 'on' ? null : 'none';
        //   }
        //   else {
        //     if (facets == 'on') {
        //       if (d[params.facet] % num_facet_cols == focus_x || Math.floor(d[params.facet] / num_facet_cols) == focus_y) {
        //         return null;
        //       }
        //       else {
        //         return 'none';
        //       }
        //     }
        //     else {
        //       if ((d[params.y] >= focus_y_lower && d[params.y] < focus_y_upper) || (d[params.x] >= focus_x_lower && d[params.x] < focus_x_upper)) {
        //         return null;
        //       }
        //       else {
        //         return 'none';
        //       }
        //     }            
        //   }
        // })
        .attr("y", function (d) {
          return facets == 'on' ? 0 : (d[params.y] != null ? scale_y(d[params.y]) : - facet_dim);
        })
        .attr('transform', function (d) {
          if (facets == 'on') {
            return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols) + facet_dim * 0.5) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols) + facet_dim) + ')';
          }
          else {
            return 'translate(0,0)';
          }
        });        
      }

      function redrawPolygon(polygon) {

        var polygon_transition;
        
        if (animation == 'off' && tilt == 'off'){
          polygon_transition = polygon.transition()
          .delay(function(d,i){
            return i * 10;
          })
          .duration(500);
        }
        else if (animation == 'on' && tilt == 'off'){
          polygon_transition = polygon.transition()     
          .delay(function(d,i){
            return i * (50 / data.length);
          })     
          .duration(50);
        }
        else {
          polygon_transition = polygon;
        }

        polygon_transition.attr("d", function(d) { 
          if (facets == 'on') {
            return null;
          }
          else {
            return d ? "M" + d.join("L") + "Z" : null; 
          }
        });
      }

      function tweenYear() {
        var year = d3.interpolateNumber(params.yearMin,params.yearMax);
        var counter = 0;
        return function (t) {
          now = new Date();
          if (counter != Math.floor((t * animation_duration) / 100)) {
            displayYear(year(t));
          } 
          counter = Math.floor((t * animation_duration) / 100);
        };
      }

      function tweenCurrentYear() {
        var year = d3.interpolateNumber(current_year,params.yearMax);
        var counter = 0;
        return function (t) {
          now = new Date();
          if (counter != Math.floor((t * animation_duration) / 100)) {
            displayYear(year(t));
          } 
          counter = Math.floor((t * animation_duration) / 100);
        };
      }

      function displayYear(year) {
       
        var progress =  ((year + 1) - params.yearMin) / ((params.yearMax + 1) - params.yearMin);
        if (globals.outer_progress_circle != undefined) {
          d3.select('#outer_progress_value').attr('d', globals.outer_progress_circle.endAngle((Math.PI * 2) * (loop_count + progress)));
        }
        
        current_year = year;
        circle_marks.data(interpolateData(year), function(d){
          return d[params.key];
        })
        .call(position)
        .sort(order);

        voronoi_cells.data(function(){
          var arr = interpolateData(year);
          var tmp = voronoi.polygons(arr);   
          for (var i = 0; i < tmp.length; i++) {
            if (tmp[i] == undefined){
              tmp[i] = [[0,0],[0,0],[0,0],[0,0]];
              tmp[i].data = arr[i];
            }
          }     
          return tmp;       
        })
        .call(redrawPolygon);

        /** 
         * 
         * BUBBLESET INTERACTION 
         * 
        **/
      
        if (!non_interactive) {          

          // console.log({
          //   'bubbleset_points': bubbleset_points,
          //   'outside_points': outside_points
          // });

          var bubbleset_update = bubbleset.transition()
          // .delay(data.length * 10)
          .ease(animation == 'on' ? d3.easeLinear : d3.easeElastic) 
          .duration(animation == 'on' ? 100 : (tilt == 'on' ? 0 : 500 + data.length * 10));

          bubbleset_coords = [];
          // outside_coords = [];
          bubble_node = -1;

          var bubble_x = 0,
              bubble_y = 0,
              bubble_r = 0,
              k = 0;

              
          for (var i = 0; i < bubbleset_points.length; i++) {
            bubble_code = bubbleset_points[i];
            
            k = 0;
            bubble_node = -1;
            
            while(k < data.length && bubble_node == -1) {
              if(data[k].code == bubble_code) {
                bubble_node = k;
              }
              k++;
            }          
                
            bubble_x = scale_x(interpolateValues(data[bubble_node][params.x],current_year));
            bubble_y = scale_y(interpolateValues(data[bubble_node][params.y],current_year));
            bubble_r = scale_pop(Math.sqrt(interpolateValues(data[bubble_node][params.radius],current_year)));

            bubbleset_coords.push({
              x: bubble_x - bubble_r,
              y: bubble_y - bubble_r,
              width: 2 * bubble_r,
              height: 2 * bubble_r,
            });
          }

          // for (var j = 0; j < outside_points.length; j++) {
          //   bubble_code = outside_points[j];
          //   bubble_node = d3.select('#mark_' + bubble_code);
          //   outside_coords.push({
          //     x: bubble_node.select('circle').attr('cx') - bubble_node.select('circle').attr('r'),
          //     y: bubble_node.select('circle').attr('cy') - bubble_node.select('circle').attr('r'),
          //     width: 2 * bubble_node.select('circle').attr('r'),
          //     height: 2 * bubble_node.select('circle').attr('r'),
          //   });
          //   k = 0;
          //   bubble_node = -1;

          //   while(k < data.length && bubble_node == -1) {
          //     if(data[k].code == bubble_code) {
          //       bubble_node = k;
          //     }
          //     k++;
          //   }
            
          //   bubble_x = scale_x(interpolateValues(data[bubble_node][params.x],current_year));
          //   bubble_y = scale_y(interpolateValues(data[bubble_node][params.y],current_year));
          //   bubble_r = scale_pop(Math.sqrt(interpolateValues(data[bubble_node][params.radius],current_year)));

          //   outside_coords.push({
          //     x: bubble_x - bubble_r,
          //     y: bubble_y - bubble_r,
          //     width: 2 * bubble_r,
          //     height: 2 * bubble_r,
          //   });
          // }

          // console.log({
          //   'bubbleset_coords': bubbleset_coords,
          //   'outside_coords': outside_coords
          // });

          var bubbleset_list = bubbles.createOutline(
            BubbleSet.addPadding(bubbleset_coords,bubbleset_pad),
            BubbleSet.addPadding(outside_coords,bubbleset_pad),
            null
          );

          var old_bubbleset_outline = bubbleset_outline.toString();

          bubbleset_outline = new PointPath(bubbleset_list).transform([
            new ShapeSimplifier(0.0),
            new BSplineShapeGenerator(),
            new ShapeSimplifier(0.0),
          ]);

          bubbleset_outline = bubbleset_outline.toString();

          var interpolator = flubber.interpolate(old_bubbleset_outline, bubbleset_outline);

          bubbleset_update.style("visibility", (facets == 'off') ? 'visible' : 'hidden')
          .attrTween('d', function(){ return interpolator; });

          for (var h = 0; h < bubbleset_points.length; h++){
            var node = document.getElementById('mark_' + bubbleset_points[h]);
            node.parentElement.appendChild(node);
          }

          bubbleset.exit()
          .remove();
        }
        
        
        d3.select('.year_indicator').text(facets == 'on' ? (params.yearMin + ' ― ' + params.yearMax) : Math.round(current_year));
        
      }

      var line = d3.line()
      .curve(d3.curveBasis)
      .x(function(d) { 
        return scale_x(d.param_x); 
      })
      .y(function(d) { 
        return scale_y(d.param_y); 
      });

      var voronoi = d3.voronoi()
      .x(function(d) { 
        return scale_x(d[params.x]); 
      })
      .y(function(d) { 
        return scale_y(d[params.y]); 
      })
      .extent([[0, 0], [chart_dim, chart_dim]]);

      function repeat() {
        if (animation == 'on') {            

          animation_duration = (params.yearMax - params.yearMin) * 500;
          this_chart.transition()
          .duration(animation_duration)
          .tween('year',tweenYear)
          .ease(d3.easeLinear)
          .on('end',function(){
            if (globals.trial_index > -1 && globals.num_selected == globals.trials[globals.trial_index].num_responses){
              d3.select('#progress_indicator').style('display','none');
              d3.select('#done_btn').attr('class','img_btn_enabled')
              .style('display',null)
              .attr('disabled',null)
              .attr('src', 'assets/done.svg');
            }
            else {
              d3.select('#submit_btn').attr('class','menu_btn_enabled')
              .attr('disabled',null);
            }
            loop_count++;
            if (!introduction_complete && globals.num_selected == 3) {              
              d3.select('#progress_indicator').style('display','none');
              d3.select('#done_btn').attr('class','img_btn_enabled')
              .style('display',null)
              .attr('disabled',null)
              .attr('src', 'assets/done.svg');
            }
            else {
              if (introduction_complete && loop_count > 0 && globals.num_selected == globals.trials[globals.trial_index].num_responses){
                d3.select('#done_btn').attr('class','img_btn_enabled')
                .attr('src', 'assets/done.svg');
              }
            }
            repeat();
          });
        }
        else {
          displayYear(current_year);
        }         
      }

      /**

      DATA ELEMENT ENTER

      **/

      // CIRCLES

      var circle_marks = this_chart.selectAll(".mark")
      .data(interpolateData(params.yearMin), function(d) {
        return d[params.key];
      });

      // VORONOI PATHS

      var voronoi_cells = this_chart.selectAll("path")
      .data(function(){
        var arr = interpolateData(params.yearMin);
        var tmp = voronoi.polygons(arr);   
        for (var i = 0; i < tmp.length; i++) {
          if (tmp[i] == undefined){
            tmp[i] = [[0,0],[0,0],[0,0],[0,0]];
            tmp[i].data = arr[i];
          }
        }     
        return tmp;
      });

      voronoi_cells.enter()
      .append('path')
      .attr("class", function(d) {         
        return "voronoi_" + d.data[params.key]; 
      })
      .style("stroke", non_interactive ? "transparent" : "#666") //If you want to look at the cells
      .style("opacity", 0.1) //If you want to look at the cells
      .style("stroke-dasharray", "0.2em")
      .style("fill", "none")
      .style("pointer-events", "all")      
      .on('touchstart', function(d){ 
        d3.event.preventDefault(); 
        touchdown(d.data[params.key]);
      }) 
      .on('touchend',touchend);  

      voronoi_cells.call(redrawPolygon);

      // FACETS

      var facet_bounds = this_chart.selectAll(".facet")
      .data(data, function(d) {
        return d[params.key];
      });

      var facet_bound_enter = facet_bounds.enter()
      .append("g")
      .attr("class","facet")
      .attr("id", function (d) {
        return "facet_" + d[params.key];
      });
  
      facet_bound_enter.append('rect')
      .attr("class","facet_rect")      
      .attr("id", function (d) {
        return "facet_" + d[params.key];
      })
      .style("fill", facets == 'on' ? 'transparent' : 'none')
      .attr('width', facet_dim)
      .attr('height', facet_dim)
      .style("stroke-dasharray", '0.1em')
      .style("stroke", facets == 'on' ? '#666' : 'none')
      .attr('transform', function (d) {
        return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols)) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols)) + ')';
      })
      .attr('rx', 5)
      .on('touchstart', function(d){ 
        if (facets == 'on') {
          d3.event.preventDefault(); 
          touchdown(d[params.key]);
        }
      }) 
      .on('touchend',touchend);       

      // LINES
            
      var line_marks = this_chart.selectAll(".line")
      .data(countries, function(d) {
        return d.id;
      });

      var line_mark_enter = line_marks.enter()
      .append("g")
      .attr("class","line")
      .attr("id", function (d) {
        return "line_" + d.id;
      });
  
      line_mark_enter.append('path')
      .attr("class","path_line")      
      .style("stroke", function (d) {
        return lines == 'on' ? scale_reg(d[params.color]) : 'transparent';
      })
      .style('fill','none')
      .attr("d", function(d) { 
        var tmp = d.values;           
        return line(tmp); 
      })
      .style("opacity", function(){
        if (facets == 'on') {
          return 1;
        }
        else {
          return 0.5;
        }
      })
      .attr('transform', function (d) {
        if (facets == 'on') {
          return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols)) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols)) + ')';
        }
        else {
          return 'translate(0,0)';
        }
      });   
      
      //CIRCLE ENTER
      
      var circle_mark_enter = circle_marks.enter()
      .append("g")
      .attr("class","mark")
      .attr("id", function (d) {
        return "mark_" + d[params.key];
      });

      circle_mark_enter.append('circle')
      .attr("class", function (d) {
        return "circle_mark_" + d[params.key];
      })   
      .style("opacity", function(d){
        if (bubbleset_points.indexOf(d[params.key]) != -1) {
          return 0.75;
        }
        else if (facets == 'on') {
          return 1;
        }
        else {
          return 0.5;
        }
      })
      .style("stroke", function(d){
        if (facets == 'on') {
          return '#999';
        }
        else if (bubbleset_points.indexOf(d[params.key]) != -1) {
          return 'gold';
        }       
        else {
          return '#fff';
        }
      })
      .style("fill", function (d) {       
        return scale_reg(d[params.color]);
      });

      circle_mark_enter.append('text')
      .attr("class", 'text_mark')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')
      .attr('id', function(d){
        return "text_mark_" + d[params.key];
      })
      .style('display',non_interactive ? null : null)
      .text(function(d){
        return d[params.key];
      });

      circle_marks.call(position)
      .sort(order);  
      
      /**

      DATA ELEMENT UPDATE 

      **/

      repeat();    
      
      var facet_bound_update = facet_bounds.transition()
      .delay(function(d,i){
        return i * 10;
      })
      .duration(500);
      
      facet_bound_update.selectAll('rect.facet_rect')
      .style("stroke", function(d){
        return facets == 'on' ? (bubbleset_points.indexOf(d[params.key]) != -1 ? 'gold ' : '#999') : 'none';              
      }) 
      .style("fill", facets == 'on' ? 'transparent' : 'none')
      .attr('transform', function (d) {
        return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols)) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols)) + ')';
      });

      var line_mark_update = line_marks.transition()
      .delay(function(d,i){
        return i * 10;
      })
      .duration(500);

      line_mark_update.selectAll('path.path_line')
      .style("stroke", function (d) {
        return lines == 'on' ? scale_reg(d[params.color]) : 'transparent';
      })
      .attr("d", function(d) { 
        var tmp = d.values;   
        // for (var i = 0; i < tmp.length; i++) {
        //   if (tmp[i].param_x == null || tmp[i].param_y == null){
        //     tmp.splice(i,1);
        //   }
        // }
        // console.log(tmp);
        return line(tmp); 
      })
      .attr('transform', function (d) {
        if (facets == 'on') {
          return 'translate(' + (facet_dim * (d[params.facet] % num_facet_cols)) + ',' + (facet_dim * Math.floor(d[params.facet] / num_facet_cols)) + ')';
        }
        else {
          return 'translate(0,0)';
        }
      }); 
      
      /**

      DATA ELEMENT EXIT

      **/

      circle_marks.exit()      
      .remove();

      line_marks.exit()
      .remove();

      facet_bounds.exit()
      .remove();  
      
      
      /** 
      
      VORONOI / FACET INTERACTION 
      
      **/

      function touchdown(d) {       
        d3.event.preventDefault();
        d3.event.stopPropagation();      
        d3.selectAll('circle')
        .style('opacity',0.2);

        d3.selectAll('.path_line')
        .style('opacity',0.2);

        d3.selectAll('.facet_rect')
        .style('opacity',0.2);

        d3.select('.circle_mark_'+d)
        .style('opacity',1);

        d3.select('#facet_'+d)
        .style('opacity',1);

        d3.select('#line_'+d).select('path')
        .style('opacity',1);
      }

      function touchend() {      
        d3.event.preventDefault();
        d3.event.stopPropagation();
        d3.selectAll('circle')
        .style('opacity', function(){
          if (facets == 'on') {
            return 1;
          }
          else {
            return 0.5;
          }
        });

        d3.selectAll('.facet_rect')
        .style('opacity',1);

        d3.selectAll('.path_line')
        .style("opacity", function(d){
          if (bubbleset_points.indexOf(d[params.key]) != -1) {
            return 0.75;
          }
          else if (facets == 'on') {
            return 1;
          }
          else {
            return 0.5;
          }
        });
      }

      /** 
       * 
       * OVERLAY INTERACTION 
       * 
      **/

      d3.selectAll('.overlay').remove();
      
      this_chart.append('rect')
      .attr('class','overlay')
      .attr('id','y_indicator_overlay')
      .attr('width',inner_padding)
      .attr('height',chart_dim)
      .attr('x',0 - inner_padding)
      .attr('y',0)
      .on('touchstart',non_interactive ? null : y_selector);          

      function y_selector() {

        d3.event.preventDefault();
        touching = true;

        d3.select('.y_indicator').select('.indicator_text')
        .transition()
        .duration(100)
        .ease(d3.easeCubic)
        .style('fill','#fff')
        .transition()
        .duration(250)
        .ease(d3.easeCubic)
        .style('fill','gold');

        d3.select('#y_picker').remove();
        d3.select('#x_picker').remove();

        var param_list = [
          "Population",
          "Arable Area",
          "Energy Consumption",
          "GDP Per Capita",
          "Life Expectancy (Women)",
          "Life Expectancy (Men)",
          "Life Expectancy",
          "Infant Mortality",
          "Number of Personal Computers",
          "G Index",
          "E Index",
          "P Index"
        ];

        hideCarousel();

        d3.select('#sandbox_div').append("select")
        .attr('id','y_picker')
        .style('position','absolute')
        .style('top',((svg_dim * 0.5) - 20) + 'px')
        .style('left',(svg_dim * 0.1) + 'px')
        .style('width',(svg_dim * 0.8) + 'px')
        .attr('class','menu_select_enabled')  
        .on('change', function() {
          if (globals.param_x == d3.select(this).property('value')){
            d3.select(this).property('value', globals.param_y);
            alert('y != x');
          }
          else {
            touching = false;
            globals.param_y = d3.select(this).property('value');
            chart_instance.params().y = d3.select(this).property('value');
            d3.select(this).remove();
            chart_g.call(chart_instance);             
            hideAddressBar();
          }
        })
        .selectAll('option')
        .data(param_list)
        .enter()
        .append('option')
        .attr("value", function (d) { return d; })
        .text(function (d) { return 'y: ' + d; })
        .property("selected", function (d) {
          return d === globals.param_y;
        });

      }

      this_chart.append('rect')
      .attr('class','overlay')
      .attr('id','x_indicator_overlay')
      .attr('width',chart_dim)
      .attr('height',inner_padding)
      .attr('x',0)
      .attr('y',chart_dim)
      .on('touchstart',non_interactive ? null : x_selector);       

      function x_selector() {

        d3.event.preventDefault();
        touching = true;

        d3.select('.x_indicator').select('.indicator_text')
        .transition()
        .duration(100)
        .ease(d3.easeCubic)
        .style('fill','#fff')
        .transition()
        .duration(250)
        .ease(d3.easeCubic)
        .style('fill','gold');

        d3.select('#y_picker').remove();
        d3.select('#x_picker').remove();

        var param_list = [
          "Population",
          "Arable Area",
          "Energy Consumption",
          "GDP Per Capita",
          "Life Expectancy (Women)",
          "Life Expectancy (Men)",
          "Life Expectancy",
          "Infant Mortality",
          "Number of Personal Computers",
          "G Index",
          "E Index",
          "P Index"
        ];

        hideCarousel();

        d3.select('#sandbox_div').append("select")
        .attr('id','x_picker')
        .style('position','absolute')
        .style('top',((svg_dim * 0.5) - 20) + 'px')
        .style('left',(svg_dim * 0.1) + 'px')
        .style('width',(svg_dim * 0.8) + 'px')
        .attr('class','menu_select_enabled')  
        .on('change', function() {
          if (globals.param_y == d3.select(this).property('value')){
            d3.select(this).property('value', globals.param_x);
            alert('x != y');
          }
          else {
            touching = false;
            globals.param_x = d3.select(this).property('value');
            chart_instance.params().x = d3.select(this).property('value');
            d3.select(this).remove();
            chart_g.call(chart_instance);             
            hideAddressBar();
          }
        })
        .selectAll('option')
        .data(param_list)
        .enter()
        .append('option')
        .attr("value", function (d) { return d; })
        .text(function (d) { return 'x: ' + d; })
        .property("selected", function (d) {
          return d === globals.param_x;
        });

      }
      
      this_chart.append('rect')
      .attr('class','overlay')
      .attr('width',chart_dim + inner_padding)
      .attr('height',chart_dim + inner_padding)
      .attr('x',0)
      .attr('y',0 - inner_padding)
      .on('touchstart',non_interactive ? null : overlay_touchdown)  
      .on('touchmove',non_interactive ? null : bubbleset_touchmove)
      .on('touchend',non_interactive ? null : overlay_touchend);    

      function overlay_touchdown() {        
        
        d3.event.preventDefault();
        d3.event.stopPropagation();
        touching = true;
        var d = d3.touches(this);
        var x = d[0][0];
        var y = d[0][1];

        d3.select('#y_picker').remove();
        d3.select('#x_picker').remove();        

        circlefit.resetPoints();
        touch_points = [];

        last_touch = new Date();
        touch_counter = 0;

        var touch_point = {
          'x': x,
          'y': y
        };  

        touch_points.push(touch_point);

        scroll_year = current_year;               

        if (animation == 'on') {
          this_chart.interrupt();
        }
        
        d3.select('#focus_rect_x').style('display',null);
        d3.select('#focus_rect_y').style('display',null);

        focus_x = Math.floor(x / facet_dim);
        focus_y = Math.floor(y / facet_dim);

        if (focus_x > (num_facet_cols - 1) || focus_x < 0) {
          focus_x = -1;
        }

        if (focus_y > (num_facet_cols - 1) || focus_y < 0) {
          focus_y = -1;
        }

        focus_x_lower = facets == 'on' ? scale_x.domain()[0] : Math.floor(scale_x.invert(focus_x * facet_dim));      
        focus_x_upper = facets == 'on' ? scale_x.domain()[1] : Math.ceil(scale_x.invert((focus_x + 1) * facet_dim));

        focus_y_lower = facets == 'on' ? scale_y.domain()[0] : Math.floor(scale_y.invert((focus_y + 1) * facet_dim));
        focus_y_upper = facets == 'on' ? scale_y.domain()[1] : Math.ceil(scale_y.invert(focus_y * facet_dim));      
        focus_y_facet = (num_facet_cols - 1) - focus_y;        
        
        // console.log({
        //   "type":"touch",
        //   "focus_x":focus_x,
        //   "focus_y":focus_y,
        //   "focus_x_lower": focus_x_lower,
        //   "focus_x_upper": focus_x_upper,
        //   "focus_y_lower": focus_y_lower,
        //   "focus_y_upper": focus_y_upper
        // });

        d3.selectAll('.mark').select('circle')
        .style('opacity',function(d){
          if (facets == 'on') {
            if (focus_x < 0 || focus_x > (num_facet_cols - 1)) { //focus_x invalid
              if (focus_y < 0 || focus_y > (num_facet_cols - 1)) { //focus_x and focus_y invalid

                d3.select('#focus_x_min')
                .attr('x', 0)
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_x_max')
                .attr('x', scale_x(scale_x.domain()[1]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] : thousand_format(scale_x.domain()[1]).replace(/G/,"B");
                }); 

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', chart_dim - facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
                });
               
              }
              else { // focus_y valid

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', (focus_y + 1) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
                });
          
                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', (focus_y) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
                });

                d3.select('#focus_x_min')
                .attr('x', scale_x(scale_x.domain()[0]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_x_max')
                .attr('x', scale_x(scale_x.domain()[1]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] : thousand_format(scale_x.domain()[1]).replace(/G/,"B");
                }); 
                
              }
            }
            else { //focus_x valid

              d3.select('#focus_x_min')
              .attr('x', focus_x * facet_dim)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
              });

              d3.select('#focus_x_max')
              .attr('x', (focus_x + 1) * facet_dim)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] : thousand_format(scale_x.domain()[1]).replace(/G/,"B");
              });

              d3.select('#focus_y_min')
              .attr('x', 0)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
              });

              d3.select('#focus_y_max')
              .attr('x', 0)
              .attr('y', chart_dim - facet_dim)
              .text(function() { 
                return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
              });

              if (focus_y < 0 || focus_y > (num_facet_cols - 1)) { //focus_y invalid
                //do nothing
              }
              else { //focus_x and focus_y valid 

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', (focus_y + 1) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
                });
          
                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', (focus_y) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
                });
               
              }
            }
            d3.selectAll('.line').select('path').style('opacity',1);
            d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
            if (!non_interactive) {
              d3.select('#' + d[params.key] + '_bttn').style('display',null);
            }
            if (highlight_points.indexOf(d[params.key]) != -1){
              highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
            }
            return 1;          
          }
          else { // facets off!
            if (bubbleset_points.indexOf(d[params.key]) != -1) {
              d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
              d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
              if (!non_interactive) {
                d3.select('#' + d[params.key] + '_bttn').style('display',null);
              }
              if (highlight_points.indexOf(d[params.key]) == -1){
                highlight_points.push(d[params.key]);
              }
              return 0.75;
            }
            else if (focus_x < 0 || focus_x > (num_facet_cols - 1)) { //focus_x invalid
              if (focus_y < 0 || focus_y > (num_facet_cols - 1)) { //focus_x and focus_y invalid

                d3.select('#focus_x_min')
                .attr('x', scale_x(scale_x.domain()[0]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_x_max')
                .attr('x', scale_x(scale_x.domain()[1]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] :  thousand_format(scale_x.domain()[1]).replace(/G/,"B");
                }); 

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', scale_y(scale_y.domain()[1]))
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
                });

                d3.selectAll('.text_mark').attr("class", function(d) {
                  if (bubbleset_points.indexOf(d[params.key]) != -1) {
                    if (highlight_points.indexOf(d[params.key]) == -1){
                      highlight_points.push(d[params.key]);
                    }
                    if (!non_interactive) {
                      d3.select('#' + d[params.key] + '_bttn').style('display',null);
                    }
                    return 'text_mark_highlighted';
                  }
                  else {
                    if (highlight_points.indexOf(d[params.key]) != -1){
                      highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                    }
                    if (!non_interactive) {
                      d3.select('#' + d[params.key] + '_bttn').style('display','none');
                    }
                    return 'text_mark';
                  }
                });

                d3.selectAll('.text_mark_highlighted').attr("class", function(d) {
                  if (bubbleset_points.indexOf(d[params.key]) != -1) {
                    if (highlight_points.indexOf(d[params.key]) == -1){
                      highlight_points.push(d[params.key]);
                    }
                    if (!non_interactive) {
                      d3.select('#' + d[params.key] + '_bttn').style('display',null);
                    }
                    return 'text_mark_highlighted';
                  }
                  else {
                    if (highlight_points.indexOf(d[params.key]) != -1){
                      highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                    }
                    if (!non_interactive) {
                      d3.select('#' + d[params.key] + '_bttn').style('display','none');
                    }
                    return 'text_mark';
                  }
                });

                d3.selectAll('.line').select('path').style('opacity',function(d){
                  if (bubbleset_points.length == 0) {
                    return 0.5;
                  } 
                  else {
                    return bubbleset_points.indexOf(d[params.key]) != -1 ? 0.75 : 0.175;
                  }
                });
                // d3.selectAll('.text_mark').style('display','none');
                if (bubbleset_points.length == 0) {
                  return 0.5;
                } 
                else {
                  return bubbleset_points.indexOf(d[params.key]) != -1 ? 0.75 : 0.175;
                }
              }
              else { // focus_y valid

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', (focus_y + 1) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? focus_y_lower : thousand_format(focus_y_lower).replace(/G/,"B");
                });
          
                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', (focus_y) * facet_dim)
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? focus_y_upper : thousand_format(focus_y_upper).replace(/G/,"B");
                });

                d3.select('#focus_x_min')
                .attr('x', scale_x(scale_x.domain()[0]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[0] : thousand_format(scale_x.domain()[0]).replace(/G/,"B");
                });

                d3.select('#focus_x_max')
                .attr('x', scale_x(scale_x.domain()[1]))
                .attr('y', chart_dim)
                .text(function() { 
                  return scale_x.domain()[1] < 1000 ? scale_x.domain()[1] : thousand_format(scale_x.domain()[1]).replace(/G/,"B");
                }); 

                if (d[params.y] >= focus_y_lower && d[params.y] < focus_y_upper) {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display',null);
                  }
                  if (highlight_points.indexOf(d[params.key]) == -1){
                    highlight_points.push(d[params.key]);
                  }
                  return 0.75;
                }
                else {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.175);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display','none');
                  }
                  if (highlight_points.indexOf(d[params.key]) != -1){
                    highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                  }
                  return 0.175;
                }
              }
            }
            else { //focus_x valid

              d3.select('#focus_x_min')
              .attr('x', focus_x * facet_dim)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_x.domain()[1] < 1000 ? focus_x_lower : thousand_format(focus_x_lower).replace(/G/,"B");
              });

              d3.select('#focus_x_max')
              .attr('x', (focus_x + 1) * facet_dim)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_x.domain()[1] < 1000 ? focus_x_upper : thousand_format(focus_x_upper).replace(/G/,"B");
              });

              d3.select('#focus_y_min')
              .attr('x', 0)
              .attr('y', chart_dim)
              .text(function() { 
                return scale_y.domain()[1] < 1000 ? scale_y.domain()[0] : thousand_format(scale_y.domain()[0]).replace(/G/,"B");
              });

              d3.select('#focus_y_max')
              .attr('x', 0)
              .attr('y', scale_y(scale_y.domain()[1]))
              .text(function() { 
                return scale_y.domain()[1] < 1000 ? scale_y.domain()[1] : thousand_format(scale_y.domain()[1]).replace(/G/,"B");
              });

              if (focus_y < 0 || focus_y > (num_facet_cols - 1)) { //focus_y invalid
                if (d[params.x] >= focus_x_lower && d[params.x] < focus_x_upper) {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display',null);
                  }
                  if (highlight_points.indexOf(d[params.key]) == -1){
                    highlight_points.push(d[params.key]);
                  }
                  return 0.75;
                }
                else {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.175);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display','none');
                  }
                  if (highlight_points.indexOf(d[params.key]) != -1){
                    highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                  }
                  return 0.175;
                }
              }
              else { //focus_x and focus_y valid 

                d3.select('#focus_y_min')
                .attr('x', 0)
                .attr('y', scale_y(focus_y_lower))
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? focus_y_lower : thousand_format(focus_y_lower).replace(/G/,"B");
                });
          
                d3.select('#focus_y_max')
                .attr('x', 0)
                .attr('y', scale_y(focus_y_upper))
                .text(function() { 
                  return scale_y.domain()[1] < 1000 ? focus_y_upper : thousand_format(focus_y_upper).replace(/G/,"B");
                });

                if ((d[params.y] >= focus_y_lower && d[params.y] < focus_y_upper) || (d[params.x] >= focus_x_lower && d[params.x] < focus_x_upper)) {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.75);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark_highlighted');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display',null);
                  }
                  if (highlight_points.indexOf(d[params.key]) == -1){
                    highlight_points.push(d[params.key]);
                  }
                  return 0.75;
                }
                else {
                  d3.select('#line_'+ d[params.key]).select('path').style('opacity',0.175);
                  d3.select('#text_mark_' + d[params.key]).attr("class", 'text_mark');
                  if (!non_interactive) {
                    d3.select('#' + d[params.key] + '_bttn').style('display','none');
                  }
                  if (highlight_points.indexOf(d[params.key]) != -1){
                    highlight_points.splice(highlight_points.indexOf(d[params.key]),1);
                  }
                  return 0.175;
                }
              }
            }
          }
        });

        d3.select('#focus_rect_x')
        .attr('x',focus_x * facet_dim)
        .style('display',(focus_x < 6 && focus_x > -1) ? null : 'none');

        d3.select('#focus_rect_y')
        .attr('y',focus_y * facet_dim)
        .style('display',(focus_y < 6 && focus_y > -1) ? null : 'none');

        updateCarousel();

      }

      function updateCarousel() {
        if (window.location.href.indexOf('mobubble') != -1) { 
          carousel_g.datum(highlight_points);
          carousel_instance.carousel_focus(Math.floor((highlight_points.length - 1) / 2));
          carousel_g.call(carousel_instance);
          setTimeout(function(){
            carousel_g.call(carousel_instance);
          }, 275);
          if (highlight_points.length > 0) {
            d3.selectAll('.carousel_item').style('display','inline');       
            d3.selectAll('.carousel_clutch').style('display','inline'); 
          }
        }
      }

      function hideCarousel() {
        d3.selectAll('.carousel_item').style('display','none');       
        d3.selectAll('.carousel_pin').style('display','none'); 
        if (highlight_points.length > 0) {
          d3.selectAll('.carousel_clutch').style('display','inline'); 
        }
        else {
          d3.selectAll('.carousel_clutch').style('display','none'); 
        }
      }

      function overlay_touchend() {
        
        touch_points = [];
        circlefit.resetPoints();    
        
        touching = false; 
        hideCarousel();
        
        d3.event.preventDefault();
        d3.event.stopPropagation();
        if (animation == 'on'){
          animation_duration = (params.yearMax - current_year) * 500;
          this_chart.transition()
          .duration(animation_duration)
          .tween('year',tweenCurrentYear)
          .ease(d3.easeLinear)
          .on('end',function(){
            loop_count++;
            if (!introduction_complete && globals.num_selected == 3) {              
              d3.select('#progress_indicator').style('display','none');
              d3.select('#done_btn').attr('class','img_btn_enabled')
              .style('display',null)
              .attr('disabled',null)
              .attr('src', 'assets/done.svg');
            }
            else {
              if (loop_count > 0 && globals.num_selected == globals.trials[globals.trial_index].num_responses){
                d3.select('#done_btn').attr('class','img_btn_enabled')
                .attr('src', 'assets/done.svg');
              }
            }
            repeat();
          });  
        }

      }

      /** 
       * 
       * BUBBLESET INTERACTION 
       * 
      **/
     
      if (!non_interactive) {        
          
        bubbleset.enter()
        .append("path")
        .attr("class", "bubbleset")
        .attr("id", "bubbleset")
        .attr('d',bubbleset_outline)
        .style('fill','transparent')
        .style("visibility", (facets == 'off') ? 'visible' : 'hidden')
        .on('touchstart',  bubbleset_touchstart)
        .on('touchmove', bubbleset_touchmove)
        .on('touchend', bubbleset_touchend);
        
        //append nodes inside bubbleset_points to front
        for (var i = 0; i < bubbleset_points.length; i++){
          node = document.getElementById('mark_' + bubbleset_points[i]);
          node.parentElement.appendChild(node);
        }
        
        //append bubbleset to front
        node = document.getElementById('bubbleset');
        node.parentElement.appendChild(node);               

      }

      function bubbleset_touchstart() {

        d3.select('#y_picker').remove();
        d3.select('#x_picker').remove();        

        d3.event.preventDefault();
        d3.event.stopPropagation();
        touching = true;
        if (animation == 'on') {
          this_chart.interrupt();
        }

        circlefit.resetPoints();
        touch_points = [];

        last_touch = new Date();
        touch_counter = 0;

        var d = d3.touches(this);
        var x = d[0][0];
        var y = d[0][1];
        var touch_point = {
          'x': x,
          'y': y
        };  

        touch_points.push(touch_point);

        scroll_year = current_year;
               
        // circlefit.addPoint(x, y);

        d3.select(this).style('fill', 'rgba(102,102,102,0.2)');
        var node = document.getElementById('bubbleset');
        node.parentElement.appendChild(node);   
        //append nodes inside bubbleset_points to front
        for (var i = 0; i < bubbleset_points.length; i++){
          node = document.getElementById('mark_' + bubbleset_points[i]);
          node.parentElement.appendChild(node);
        }
        updateCarousel();        
      }

      function bubbleset_touchmove() {

        
        d3.event.preventDefault();
        d3.event.stopPropagation();
        if (animation == 'on') {
          this_chart.interrupt();
        }
        touching = true;     
        hideCarousel();

        var now = new Date(); 

        if (last_touch != undefined) {
          if (now.getSeconds() != last_touch.getSeconds()) {
            last_touch = now;   
            touch_counter = 0;
          }    
        }
        else {
          last_touch = now; 
        }

        touch_counter++;
        
        circlefit.resetPoints();

        var d = d3.touches(this);
        var x = d[0][0];
        var y = d[0][1];
        var touch_point = {
          'x': x,
          'y': y
        };  

        var result = {
          'success': false 
        };

        // console.log(last_touch.getSeconds() + ":  <" + x + ',' + y + '>');
        touch_points.push(touch_point);
        if (touch_points.length > 30) {
          touch_points.splice(0,1);
          touch_points.forEach(function(point) {
            circlefit.addPoint(point.x, point.y);
          });
        }
        
        if (touch_counter % 3 == 0) {

          if (touch_points.length > 3){
            result = circlefit.compute();       
          }

          if (result.success) {
            var p1 = {
              'x': 0,
              'y': 0
            };          
            var p2 = {
              'x': result.projections[result.projections.length - 2].x - result.center.x,
              'y': result.projections[result.projections.length - 2].y - result.center.y
            };
            var p3 = {
              'x': result.projections[result.projections.length - 1].x - result.center.x,
              'y': result.projections[result.projections.length - 1].y - result.center.y
            };

            var angle = (Math.atan2(p3.y - p1.y, p3.x - p1.x) - Math.atan2(p2.y - p1.y, p2.x - p1.x)) *  180 / Math.PI;
            
            // console.log(result.projections);  
            // console.log({
            //   'p2': '<' + p2.x + ', ' + p2.y + '>',
            //   'p3': '<' + p3.x + ', ' + p3.y + '>',
            //   // 'radius': result.radius,
            //   // 'theta': theta,
            //   'angle': angle,
            //   'scroll': scale_scroll(angle)
            // });
            scroll_year = scroll_year + scale_scroll(angle);
            if (scroll_year < params.yearMin) {
              current_year = params.yearMin;
            }
            else if (scroll_year > params.yearMax) {
              current_year = params.yearMax;
            }
            else {
              current_year = scroll_year;
            }
            chart_g.call(chart_instance);    
          }
        }

      }
      
      function bubbleset_touchend() {
        
        d3.event.preventDefault();
        d3.event.stopPropagation();
        
        touch_points = [];
        circlefit.resetPoints();
        
        touching = false;     
        hideCarousel();
        d3.select(this).style('fill', 'transparent');
        var node = document.getElementById('bubbleset');
        node.parentElement.appendChild(node);   
       
        if (animation == 'on'){
          
          animation_duration = (params.yearMax - current_year) * 500;
          this_chart.transition()
          .duration(animation_duration)
          .tween('year',tweenCurrentYear)
          .ease(d3.easeLinear)
          .on('end',repeat);  
        }     
      }  
      
      if (facets == 'on') {
        highlight_points = [];
        d3.selectAll('.country_btn_enabled').style('display',null);
      }

    });
  }

  /**

  GETTER / SETTER FUNCTIONS

  **/  

  //getter / setter for showing lines
  chart.lines = function (x) {
    if (!arguments.length) {
      return lines;
    }
    lines = x;
    return chart;
  };

  //getter / setter for animation
  chart.animation = function (x) {
    if (!arguments.length) {
      return animation;
    }
    animation = x;
    return chart;
  };

  //getter / setter for facets
  chart.facets = function (x) {
    if (!arguments.length) {
      return facets;
    }
    facets = x;
    return chart;
  };

  //getter / setter for tilt
  chart.tilt = function (x) {
    if (!arguments.length) {
      return tilt;
    }
    tilt = x;
    return chart;
  };

  //getter / setter for current_year
  chart.current_year = function (x) {
    if (!arguments.length) {
      return current_year;
    }
    current_year = x;
    return chart;
  };
  
  //getter / setter for scale_pop
  chart.scale_pop = function (x) {
    if (!arguments.length) {
      return scale_pop;
    }
    scale_pop = x;
    return chart;
  };

  //getter / setter for scale_x
  chart.scale_x = function (x) {
    if (!arguments.length) {
      return scale_x;
    }
    scale_x = x;
    return chart;
  };

  //getter / setter for scale_y
  chart.scale_y = function (x) {
    if (!arguments.length) {
      return scale_y;
    }
    scale_y = x;
    return chart;
  };

  //getter / setter for scale_reg
  chart.scale_reg = function (x) {
    if (!arguments.length) {
      return scale_reg;
    }
    scale_reg = x;
    return chart;
  };

  //getter / setter for scale_tmp
  chart.scale_tmp = function (x) {
    if (!arguments.length) {
      return scale_tmp;
    }
    scale_tmp = x;
    return chart;
  };

  //getter / setter for scale_scroll
  chart.scale_scroll = function (x) {
    if (!arguments.length) {
      return scale_scroll;
    }
    scale_scroll = x;
    return chart;
  };

  //getter / setter for params
  chart.params = function (x) {
    if (!arguments.length) {
      return params;
    }
    params = x;
    return chart;
  };

  //getter / setter for highlight_points
  chart.highlight_points = function (x) {
    if (!arguments.length) {
      return highlight_points;
    }
    highlight_points = x;
    return chart;
  };

  //getter / setter for bubbleset_points
  chart.bubbleset_points = function (x) {
    if (!arguments.length) {
      return bubbleset_points;
    }
    bubbleset_points = x;
    return chart;
  };

  //getter / setter for outside_points
  chart.outside_points = function (x) {
    if (!arguments.length) {
      return outside_points;
    }
    outside_points = x;
    return chart;
  };

  //getter / setter for this_chart
  chart.this_chart = function (x) {
    if (!arguments.length) {
      return this_chart;
    }
    this_chart = x;
    return chart;
  };

  //getter / setter for tilt_time
  chart.tilt_time = function (x) {
    if (!arguments.length) {
      return tilt_time;
    }
    tilt_time = x;
    return chart;
  };

  //getter / setter for tilt_selection
  chart.tilt_selection = function (x) {
    if (!arguments.length) {
      return tilt_selection;
    }
    tilt_selection = x;
    return chart;
  };

  //getter / setter for loop_count
  chart.loop_count = function (x) {
    if (!arguments.length) {
      return loop_count;
    }
    loop_count = x;
    return chart;
  };
 
  return chart;

};

module.exports = d3.chart;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var nationData = __webpack_require__(2);
var globals = __webpack_require__(0); 

function countrySelector () {

  var checkExist;    
  globals.num_selected = 0;
  
  function getDims() {
    height = window.innerHeight;
    width = window.innerWidth;
    svg_dim = d3.min([height,width]) - 2;
    inner_padding = svg_dim * 0.1;
    chart_dim = svg_dim * 0.8;   
  }
  
  function redraw() {
  
    getDims();  

    d3.select('#selector_div').selectAll(".country_btn_enabled")
    .data(all_data, function(d) {
      return d.code;
    })
    .enter()
    .append('input')
    .attr('type','button')
    .attr('class', 'country_btn_enabled')
    .attr('id',function(d){
      return d.code + '_bttn';
    })
    .attr('value',function(d){
      return d.code;
    })
    .attr('title',function(d){
      return d.code;
    })
    .style('background',function(d){
      var scale_reg = chart_instance.scale_reg();
      var color_param = chart_instance.params().color;
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(scale_reg(d[color_param]));
      var rgb_result = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
      return 'rgba(' + rgb_result.r + ',' + rgb_result.g + ',' + rgb_result.b + ',0.5)';
    })
    .style('height', function(){
      if (height < width) {
        return ((height / 8) - 4) + 'px';
      }
      else {
        var num_rows = all_data.length / 8;
        var menubar_height = (width / 7);
        var remaining_height = height - svg_dim - menubar_height - 10; 
        return (remaining_height / num_rows - 4) + 'px';
      }
    })
    .style('width', function(){
      if (height < width) {
        var num_cols = all_data.length / 8;
        var menubar_width = (height / 7);
        var remaining_width = width - svg_dim - menubar_width; 
        return (remaining_width / num_cols - 4) + 'px';
      }
      else {        
        return ((width / 8) - 4) + 'px';
      } 
    })
    .style('margin', '2px')
    .on('touchstart', function(d){
      d3.event.preventDefault(); 
      if (d3.select(this).style('border') == '5px solid gold') {
        globals.num_selected--;
        var unselected = globals.trial_response.indexOf(!introduction_complete ? d.code : d.name);
        globals.trial_response.splice(unselected,1);
        d3.select(this).style('border', '1px solid #ccc');

        if (introduction_complete && (globals.trial_index != -1 && globals.num_selected == globals.trials[globals.trial_index].num_responses && (chart_instance.loop_count() > 0 || chart_instance.lines() == 'on'))) {
          d3.select('#progress_indicator').style('display','none');
          d3.select('#done_btn').attr('class','img_btn_enabled')
          .style('display',null)
          .attr('disabled',null)
          .attr('src', 'assets/done.svg');

        }
        else {
          d3.select('#progress_indicator').style('display',null);
          d3.select('#outer_progress_indicator')
            .attr('display', globals.condition == 'multiples' ? 'none' : null);
          d3.select('#done_btn').attr('class','img_btn_disabled')
          .style('display','none')
          .attr('disabled',true)
          .attr('src', 'assets/na.svg');
        }

        if (!non_interactive) {
          // chart_instance.outside_points().push(d.code);              
  
          var bubble_ind = chart_instance.bubbleset_points().indexOf(d.code);
          chart_instance.bubbleset_points().splice(bubble_ind,1);
  
          chart_g.call(chart_instance);
        }
      }
      else {
        if ((!introduction_complete && globals.num_selected < 3) || (introduction_complete && globals.num_selected != globals.trials[globals.trial_index].num_responses)) {
          globals.num_selected++;
          globals.trial_response.push(!introduction_complete ? d.code : d.name);
          d3.select(this).style('border', '5px solid gold');    
          
          if (introduction_complete && (globals.trial_index != -1 && globals.num_selected == globals.trials[globals.trial_index].num_responses && (chart_instance.loop_count() > 0 || chart_instance.lines() == 'on'))) {
            d3.select('#progress_indicator').style('display','none');
            d3.select('#done_btn').attr('class','img_btn_enabled')
            .style('display',null)
            .attr('disabled',null)
            .attr('src', 'assets/done.svg');

          }
          else {
            d3.select('#progress_indicator').style('display',null);
            d3.select('#outer_progress_indicator')
            .attr('display', globals.condition == 'multiples' ? 'none' : null);
            d3.select('#done_btn').attr('class','img_btn_disabled')
            .style('display','none')
            .attr('disabled',true)
            .attr('src', 'assets/na.svg');
          }          
        }
        if (!non_interactive) {
          d3.select(this).style('border', '5px solid gold');             
  
          // var outside_ind = chart_instance.outside_points().indexOf(d.code);
          // chart_instance.outside_points().splice(outside_ind,1);
          chart_instance.bubbleset_points().push(d.code);
          chart_g.call(chart_instance);                    
          
        }
      }
      if (globals.outer_progress_circle != undefined) {
        if (!introduction_complete) {
          d3.select('#inner_progress_value').attr('d', globals.inner_progress_circle.endAngle((Math.PI * 2) * (globals.num_selected / 3)));
        }
        else {
          d3.select('#inner_progress_value').attr('d', globals.inner_progress_circle.endAngle((Math.PI * 2) * (globals.num_selected / globals.trials[globals.trial_index].num_responses)));
        }
      }
      if (!introduction_complete && globals.num_selected == 3) {        
        if (globals.condition == 'multiples' || chart_instance.loop_count() >= 1) {
          d3.select('#progress_indicator').style('display','none');
          d3.select('#done_btn').attr('class','img_btn_enabled')
          .style('display',null)
          .attr('disabled',null)
          .attr('src', 'assets/done.svg');
        } 
      }
    });    
    
  } 
  
  function loadData () {     

    checkExist = setInterval(function() {
      if (all_data != undefined) {        
        
        redraw();    
        
        hideAddressBar();

        clearInterval(checkExist);
      }
    }, 100); // check every 100ms  

  } 
    
  /** INIT **/

  getDims();
  
  d3.select('body').append('div')
  .attr('id','selector_div')
  .style('height', function(){
    if (height < width) {
      return (height) + 'px';
    }
    else {
      var menubar_height = (width / 7);
      var remaining_height = height - svg_dim - menubar_height - 10; 
      return (remaining_height) + 'px';
    }
  })
  .style('width', function(){
    if (height < width) {
      var menubar_width = (height / 7);
      var remaining_width = width - svg_dim - menubar_width; 
      return (remaining_width) + 'px';
    }
    else {        
      return (width) + 'px';
    }      
  })
  .style('bottom','0px')
  .style('float', (height < width) ? 'right' : 'unset')
  .style('left', (height < width) ? (svg_dim) + 'px' : 'unset')
  .style('position', 'absolute')
  .attr('tabindex',0);
  
  all_data = nationData;     
  loadData();

}

module.exports = countrySelector;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);

d3.carousel = function () {

  /**

  CAROUSEL VARIABLES

  **/

  var params = {};         

  var this_carousel,
      carousel_focus = 0,
      svg_height,
      svg_width,
      focus_element;

  function carousel (selection) {
    selection.each(function (data){

      this_carousel = d3.select(this);
      this_carousel.interrupt();

      svg_height = d3.select('#carousel_svg').style('height');
      svg_height = +svg_height.substr(0,svg_height.indexOf('px'));

      svg_width = d3.select('#carousel_svg').style('width');
      svg_width = +svg_width.substr(0,svg_width.indexOf('px'));

      var center_y = svg_height * 0.5;
      var focus_height = (svg_height <= svg_width) ? (svg_width / 7 - 6) : (svg_height / 7 - 6); // same as button height

      var clutch = this_carousel.selectAll('.carousel_clutch')
      .data([null]);      
      
      var clutch_enter = clutch.enter()
      .append('g')
      .style('display','none')
      .attr('class','carousel_clutch');

      var defs = clutch_enter.append('defs');

      var grad1 = defs.append('linearGradient')
      .attr('id','grad1')
      .attr('x1','0%')
      .attr('x2','0%')
      .attr('y1','0%')
      .attr('y2','100%');

      grad1.append('stop')
      .attr('offset','0%')
      .style('stop-color','#222')
      .style('stop-opacity',1);

      grad1.append('stop')
      .attr('offset','100%')
      .style('stop-color','#333')
      .style('stop-opacity',1); 
      
      var grad2 = defs.append('linearGradient')
      .attr('id','grad2')
      .attr('x1','0%')
      .attr('x2','0%')
      .attr('y1','0%')
      .attr('y2','100%');

      grad2.append('stop')
      .attr('offset','0%')
      .style('stop-color','#333')
      .style('stop-opacity',1);

      grad2.append('stop')
      .attr('offset','100%')
      .style('stop-color','#222')
      .style('stop-opacity',1); 
     
      clutch_enter.append('rect')
      .attr('class','clutch_enabled')
      .attr('rx',5)
      .attr('ry',5)
      .style('margin', '2px')
      .style('fill','url(#grad1)')      
      .on('touchstart',clutchDown)
      .on('touchend',clutchEnd);  

      clutch_enter.append('text')
      .text('⚲')
      .attr('id','clutch_search')
      .attr('class','clutch_text')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')
      .on('touchstart',clutchDown)
      .on('touchend',clutchEnd);
      
      clutch_enter.append('text')
      .text('↑')      
      .attr('class','clutch_text')
      .attr('dy','-1em')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')
      .on('touchstart',clutchDown)
      .on('touchend',clutchEnd);

      clutch_enter.append('text')
      .text('↓')      
      .attr('class','clutch_text')
      .attr('dy','1em')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')
      .on('touchstart',clutchDown)
      .on('touchend',clutchEnd);      

      function clutchDown() {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        carousel_touching = true;
        touching = false;
        carousel_items.call(position);
        d3.select('.clutch_enabled')
        .attr('class','clutch_touch')
        .style('fill','url(#grad2)');
        d3.select('.carousel_clutch').selectAll('text')
        .style('fill','gold');
        d3.selectAll('.carousel_item').style('display','inline');
        d3.selectAll('.carousel_pin').style('display','inline');
      }

      function clutchEnd() {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        carousel_touching = false;
        touching = true;
        d3.select('.clutch_touch')
        .attr('class','clutch_enabled')
        .style('fill','url(#grad1)');
        d3.select('.carousel_clutch').selectAll('text')
        .style('fill','#ccc');
        // d3.selectAll('.carousel_item').style('display','none');
      }      

      var clutch_update = clutch;
      
      clutch_update.select('rect')
      .attr('width',focus_height - 4)
      .attr('height',svg_height - 4)
      .attr('x',svg_width-focus_height - 2)
      .attr('y',2);

      clutch_update.selectAll('text')
      .attr('transform','translate('+ (svg_width - 2 - 0.5 * focus_height) + ',' + (svg_height / 2) +')');
      
      clutch_update.select('#clutch_search')
      .attr('transform','translate('+ (svg_width - 2 - 0.5 * focus_height) + ',' + (svg_height / 2) +')rotate(-45)');

      clutch.exit()
      .remove();

      var pin = this_carousel.selectAll('.carousel_pin')
      .data([null]);      
      
      var pin_enter = pin.enter()
      .append('g')
      .style('display','none')
      .attr('class','carousel_pin');

      pin_enter.append('rect')
      .attr('class','pin_enabled')
      .attr('rx',5)
      .attr('ry',5)
      .style('margin', '2px')
      .style('fill','url(#grad1)')
      .on('touchstart',pinDown)
      .on('touchend',pinEnd);  

      pin_enter.append('text')
      .text('+')
      .attr('id','pin_icon')
      .attr('class','pin_text')
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')      
      .on('touchstart',pinDown)
      .on('touchend',pinEnd);

      var highlight_points = chart_instance.highlight_points();
      focus_element = highlight_points[carousel_focus];      

      function pinDown() {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        carousel_touching = true;
        touching = false;     
        console.log(focus_element);
        if (chart_instance.bubbleset_points().indexOf(focus_element) == -1) {
          chart_instance.bubbleset_points().push(focus_element);
          // var outside_ind = chart_instance.outside_points().indexOf(focus_element);
          // chart_instance.outside_points().splice(outside_ind,1);
          chart_g.call(chart_instance);
          d3.select('.pin_enabled').attr('class','pin_active');
          d3.select('.pin_text').attr('class','pin_text_active')
          .text('x');
        }
        else {
          var bubble_ind = chart_instance.bubbleset_points().indexOf(focus_element);
          // chart_instance.outside_points().push(focus_element); 
          chart_instance.bubbleset_points().splice(bubble_ind,1);  
          chart_g.call(chart_instance);      
          var updated_highlight_points = chart_instance.highlight_points();
          carousel_g.datum(updated_highlight_points);
          carousel_instance.carousel_focus(Math.floor((updated_highlight_points.length - 1) / 2));
          carousel_g.call(carousel_instance);
          setTimeout(function(){
            carousel_g.call(carousel_instance);
          }, 275);
          var bubbleset_points = chart_instance.bubbleset_points();
          if (bubbleset_points.length == 0 && updated_highlight_points.length == 0) {
            d3.selectAll('.carousel_item').style('display','none');       
            d3.selectAll('.carousel_pin').style('display','none');             
            d3.selectAll('.carousel_clutch').style('display','none');           
          }
        } 
      }

      function pinEnd() {
        d3.event.preventDefault();
        d3.event.stopPropagation();
        carousel_touching = false;
        touching = false;       
        d3.selectAll('.carousel_pin').style('display','none');
        d3.selectAll('.carousel_item').style('display','none');
      }

      var pin_update = pin;
      
      pin_update.attr('transform','translate('+ (svg_width / 2 + (focus_height - 4) + 6) + ',' + (center_y - (focus_height * 0.5) - 2) +')');
           

      pin_update.select('rect')
      .attr('width',focus_height - 4)
      .attr('height',focus_height - 4)
      .attr('class',function(){        
        return (chart_instance.bubbleset_points().indexOf(focus_element) == -1) ? 'pin_enabled' : 'pin_active';
      });      

      pin_update.select('text')
      .attr('x',(focus_height - 4) / 2)
      .attr('y',(focus_height - 4) / 2)
      .attr('class',function(){        
        return (chart_instance.bubbleset_points().indexOf(focus_element) == -1) ? 'pin_text' : 'pin_text_active';
      })
      .text(function(){  
        return (chart_instance.bubbleset_points().indexOf(focus_element) == -1) ? '+' : 'x';
      });      

      pin.exit()
      .remove();

      function position(item) {

        var item_transition = item.transition()
        .ease(d3.easeLinear) 
        .duration(250);        

        item_transition.attr('transform',function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          var dir_from_focus = Math.sign(i - carousel_focus);
          var x_translate = (svg_width * 0.5 + 0.5 * ((focus_height * 2) - 4)) - ((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.05)) - 2;
          var y_translate = 0;

          if (dist_from_focus == 0) {
            y_translate = center_y - (focus_height * 0.5) - 2;
          }
          else {
            var offset = 0;
            var j = (dir_from_focus == -1) ? 1 : 2;
            var buffer = (dir_from_focus == -1) ? 6 : 10;
            for (j; j <= dist_from_focus; j++){
              offset = offset + buffer + d3.max([0,(focus_height - 4) * (1 - (j * 0.1))]);
            }
            if (dir_from_focus == -1) {              
              y_translate = center_y - ((focus_height - 4) * 0.5) - 4 - offset;
            }
            else {
              y_translate = center_y + ((focus_height - 4) * 0.5) + 2 + offset;
            }
          }

          return 'translate('+ x_translate + ',' + y_translate + ')';
        });
        
        item_transition.select('.carousel_rect')
        .attr('x',0)
        .attr('y',0)     
        .attr('height', function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          if (dist_from_focus == 0) {            
            return (focus_height - 4);
          }
          else {
            return d3.max([0,(focus_height - 4) * (1 - (dist_from_focus * 0.1))]);
          }
        })
        .attr('width', function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          return d3.max([0,((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.1))]);
        })
        .style('opacity',function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          return 0.75 * (1 - (dist_from_focus * 0.25));
        })        
        .attr('stroke', function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          if (dist_from_focus == 0) {            
            return '#fff';
          }
          else {
            return '#ccc';
          }
        });

        item_transition.select('.carousel_text')    
        .attr('y', function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          if (dist_from_focus == 0) {            
            return focus_height / 2;
          }
          else {
            return d3.max([0,(focus_height - 4) * (1 - (dist_from_focus * 0.1))]) / 2;
          }          
        })
        .attr('x', function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          return d3.max([0,((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.1))]) / 2;
        })
        .style('font-size',function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          return 0.7 * (1 - (dist_from_focus * 0.1)) + 'em';
        })
        .style('opacity',function(d,i){
          var dist_from_focus = Math.abs(i - carousel_focus);
          return 0.75 * (1 - (dist_from_focus * 0.25));
        });

      }      

      //carousel item enter

      var carousel_items = this_carousel.selectAll('.carousel_item')
      .data(data, function(d){
        return d;
      });

      var carousel_item_enter = carousel_items.enter()
      .append('g')
      .attr('class','carousel_item')
      .attr('id',function(d){
        return 'carousel_item_' + d;
      })
      .style('display','none')
      .attr('transform',function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        var dir_from_focus = Math.sign(i - carousel_focus);
        var x_translate = (svg_width * 0.5 + 0.5 * ((focus_height * 2) - 4)) - ((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.05)) - 2;
        var y_translate = 0;

        if (dist_from_focus == 0) {
          y_translate = center_y - (focus_height * 0.5) - 2;
        }
        else {
          var offset = 0;
          var j = (dir_from_focus == -1) ? 1 : 2;
          var buffer = (dir_from_focus == -1) ? 6 : 10;
          for (j; j <= dist_from_focus; j++){
            offset = offset + buffer + d3.max([0,(focus_height - 4) * (1 - (j * 0.1))]);
          }
          if (dir_from_focus == -1) {              
            y_translate = center_y - ((focus_height - 4) * 0.5) - 4 - offset;
          }
          else {
            y_translate = center_y + ((focus_height - 4) * 0.5) + 2 + offset;
          }
        }

        return 'translate('+ x_translate + ',' + y_translate + ')';
      });

      carousel_item_enter.append('rect')
      .attr('class', 'carousel_rect')      
      .attr('rx',5)
      .attr('ry',5)      
      .attr('id',function(d){
        return d + '_bttn';
      })
      .attr('stroke', function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        if (dist_from_focus == 0) {            
          return '#fff';
        }
        else {
          return '#ccc';
        }
      })
      .style('stroke-width','2px')
      .style('fill',function(d){
        return d3.select('.circle_mark_' + d).style('fill');
      })
      .attr('x',0)
      .attr('y',0)     
      .attr('height', function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        if (dist_from_focus == 0) {            
          return (focus_height - 4);
        }
        else {
          return d3.max([0,(focus_height - 4) * (1 - (dist_from_focus * 0.1))]);
        }
      })
      .attr('width', function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        return d3.max([0,((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.1))]);
      })
      .style('opacity',function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        return 0.75 * (1 - (dist_from_focus * 0.25));
      });

      carousel_item_enter.append('text')
      .style('font-size','0em')
      .attr('class', 'carousel_text')      
      .attr('text-anchor', "middle")
      .attr('alignment-baseline','middle')
      .text(function(d){
        return d;
      })
      .attr('y', function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        if (dist_from_focus == 0) {            
          return focus_height / 2;
        }
        else {
          return d3.max([0,(focus_height - 4) * (1 - (dist_from_focus * 0.1))]) / 2;
        }          
      })
      .attr('x', function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        return d3.max([0,((focus_height * 2) - 4) * (1 - (dist_from_focus * 0.1))]) / 2;
      })
      .style('font-size',function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        return 0.7 * (1 - (dist_from_focus * 0.1)) + 'em';
      })
      .style('opacity',function(d,i){
        var dist_from_focus = Math.abs(i - carousel_focus);
        return 0.75 * (1 - (dist_from_focus * 0.25));
      });      

      //carousel item exit

      var carousel_items_exit = carousel_items.exit()
      .transition()
      .ease(d3.easeLinear) 
      .duration(250)
      .remove();

      carousel_items_exit.attr('transform', 'translate('+ svg_width + ',0)');     

      carousel_items_exit.select('.carousel_text')
      .style('font-size','0em');
      
       //carousel item update

      carousel_items.call(position);
      
    });

  }
  
  /**
  
    GETTER / SETTER FUNCTIONS
  
  **/

  //getter / setter for params
  carousel.params = function (x) {
    if (!arguments.length) {
      return params;
    }
    params = x;
    return carousel;
  };

  //getter / setter for this_carousel
  carousel.this_carousel = function (x) {
    if (!arguments.length) {
      return this_carousel;
    }
    this_carousel = x;
    return carousel;
  };

  //getter / setter for carousel_focus
  carousel.carousel_focus = function (x) {
    if (!arguments.length) {
      return carousel_focus;
    }
    carousel_focus = x;
    return carousel;
  };


  return carousel;

};

module.exports = d3.carousel;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);
var initTasks = __webpack_require__(7);
var sandbox = __webpack_require__(9);
var consent = __webpack_require__(12);
var introduction = __webpack_require__(13);
var questionnaire = __webpack_require__(14);
var trial = __webpack_require__(23);
var countrySelector = __webpack_require__(4);
var carousel = __webpack_require__(5);
var menu = __webpack_require__(24);     

function setCookie (c_name, value, exdays)
{
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
}

function getCookie (c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
    {
       x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
          x=x.replace(/^\s+|\s+$/g,"");
          if (x==c_name)
          {
              return unescape(y);
          }
    }
 }

scale_tilt_time = d3.scaleLinear();

scale_tilt_time.range([0.019178082191780823,1]);
scale_tilt_time.clamp(true);

scale_tilt_selection = d3.scaleLinear();

scale_tilt_selection.clamp(true);

window.appInsights = appInsights;    

appInsights.queue.push(function () {

  appinsights.context.addTelemetryProcessor(function (envelope) {
    console.log(envelope);

  });

  appInsights.context.addTelemetryInitializer(function (envelope) {

    envelope.data.baseData.client_IP = 'censored';
    envelope.data.baseData.clientip = 'censored';

    // // To set custom properties:
    envelope.data.baseData.properties = envelope.data.baseData.properties || {};
    envelope.data.baseData.properties.clientWidth = window.innerWidth;
    envelope.data.baseData.properties.clientHeight = window.innerHeight;

    // // To set custom metrics:
    // telemetryItem.measurements = telemetryItem.measurements || {};
    // telemetryItem.measurements["globalMetric"] = 100;
  });
});

/* jshint ignore:end */

initTasks();

appInsights.trackEvent("InitTasks", { 
  "TimeStamp": new Date().valueOf(),
  "Event": "InitTasks",
  "user_id": globals.userID
});

non_interactive = true;

window.addEventListener('load', function() { 
  
  resumptions = [];
  globals.selection_tilt_array = [];
  globals.time_tilt_array = [];
  globals.userID = 'Dev_' + new Date().valueOf();
  globals.last_pause = new Date().valueOf();
  
  appInsights.trackPageView('index.html');  
  
  hideAddressBar();   

  globals.last_pause = new Date().valueOf();

  resumptions.push({
    'resumption_time': new Date().valueOf() + 1,
    'pause_time': globals.last_pause,
    'pause_duration': 1
  }); //app resumed

  if (window.location.href.indexOf('mobubble') == -1 && window.innerHeight < window.innerWidth) {
    
    d3.select('body').append('input')
    .attr('id','landscape_btn')
    .attr('type','button')
    .style('color','#111')
    .style('background','#ef5350')
    .style('border-color','#fff')
    .attr('value','Hold your phone in portrait mode.')
    .attr('title','Hold your phone in portrait mode.')
    .on('touchstart', function() {  
      d3.select('#landscape_btn').remove();
    }); 
  }

  appInsights.trackEvent("Load", { 
    "TimeStamp": new Date().valueOf(),
    "user_id": globals.userID, 
    "Event":"Load",
    "Width": window.innerWidth, 
    "Height": window.innerHeight,
    "Mode": (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait'
  });
  
});  

window.onfocus = function(e) {
  var r_time = new Date().valueOf();
  if (resumptions.length == 0 || globals.last_pause > resumptions[resumptions.length - 1].resumption_time && window.innerHeight > window.innerWidth) {
    resumptions.push({
      'resumption_time': r_time,
      'pause_time': globals.last_pause,
      'pause_type':'focus',
      'pause_duration': r_time - globals.last_pause
    }); //app resumed
  }
  console.log(resumptions[resumptions.length - 1]);  
  appInsights.trackEvent("InFocus", { 
    "TimeStamp": new Date().valueOf(),
    "user_id": globals.userID, 
    "Event": "InFocus",
    "Focus": true ,
    'resumption_time': r_time,
    'pause_time': globals.last_pause,
    'pause_type': 'focus',
    'pause_duration': r_time - globals.last_pause
  });
};

window.onblur = function(e) {
  if (resumptions.length == 0 || resumptions[resumptions.length - 1].resumption_time > globals.last_pause) {
    globals.last_pause = new Date().valueOf(); //app paused
  }
  console.log('FocusLoss'); 
  appInsights.trackEvent("FocusLoss", { 
    "TimeStamp": new Date().valueOf(),
    "Event": "FocusLoss",
    "user_id": globals.userID, 
    "Focus": false 
  });
};

window.onbeforeunload = function() { return "Your work will be lost."; };

window.onresize = function(e) {
  
  d3.select('#landscape_btn').remove();

  if (document.getElementById('landscape_btn')) {
    document.getElementById('landscape_btn').remove();
  }
  hideAddressBar();

  if (window.location.href.indexOf('mobubble') == -1) {
    if (window.innerHeight < window.innerWidth) {
      if (resumptions[resumptions.length - 1].resumption_time > globals.last_pause) {
        globals.last_pause = new Date().valueOf(); //app paused
      }
      console.log('Resized: landscape'); 
      appInsights.trackEvent("Resized", { 
        "TimeStamp": new Date().valueOf(),
        "user_id": globals.userID, 
        "Event": "Resized",
        "Width": window.innerWidth, 
        "Height": window.innerHeight,
        "Mode": 'landscape' 
      });
  
      d3.select('body').append('input')
      .attr('id','landscape_btn')
      .attr('type','button')
      .style('color','#111')
      .style('background','#ef5350')
      .style('border-color','#fff')
      .attr('value','Hold your phone in portrait mode.')
      .attr('title','Hold your phone in portrait mode.')
      .on('touchstart', function() {  
        d3.select('#landscape_btn').remove();
      });        
      
    }
    else {
      d3.select('#landscape_btn').remove();
      if (document.getElementById('landscape_btn')) {
        document.getElementById('landscape_btn').remove();
      }
      var r_time = new Date().valueOf();
      if (globals.last_pause > resumptions[resumptions.length - 1].resumption_time) {
        resumptions.push({
          'resumption_time': r_time,
          'pause_time': globals.last_pause,
          'pause_type': 'orientation',
          'pause_duration': r_time - globals.last_pause
        }); //app resumed
      }
      console.log(resumptions[resumptions.length - 1]); 
      appInsights.trackEvent("Resized", { 
        "TimeStamp": new Date().valueOf(),
        "user_id": globals.userID, 
        "Event": "Resized",
        "Width": window.innerWidth, 
        "Height": window.innerHeight,
        "Orientation": 'portrait',
        'resumption_time': r_time,
        'pause_time': globals.last_pause,
        'pause_type': 'orientation',
        'pause_duration': r_time - globals.last_pause
      });
  
    }
  }
  else {    
    var checkOrientation = setInterval(function() {
      if (window.innerHeight < window.innerWidth && d3.select('#selector_div').style('height') != window.innerHeight + 'px') {
        orientation_changed = false;
        changeOrientation();    
      }
      else if (window.innerHeight > window.innerWidth && d3.select('#selector_div').style('width') != window.innerWidth + 'px') {
        orientation_changed = false;
        changeOrientation();
      }
      else {
        orientation_changed = true;
        clearInterval(checkOrientation);
      }
    }, 100);        
  }
};

function changeOrientation () {
  if (d3.select('#main_svg') != undefined){
    chart_instance.this_chart().interrupt();
  }
  if (d3.select('#selector_div') != undefined) {
    carousel_instance.this_carousel().interrupt();
  }
  console.log('changeOrientation');
  height = window.innerHeight;
  width = window.innerWidth;
  svg_dim = d3.min([height,width]) - 2;
  inner_padding = svg_dim * 0.1;
  chart_dim = svg_dim * 0.8;
  globals.selection_tilt_array = [];
  globals.time_tilt_array = [];

  d3.selectAll('.toolbar')
  .style('position','absolute')
  .style('top', height < width ? '0px' : (svg_dim) + 'px')
  .style('right', height < width ? '0px' : 'unset')
  .style('width', height < width ? (height / 7) + 'px'  : width + 'px')
  .style('height',  height < width ? height + 'px' : (width / 7) + 'px');

  d3.selectAll('.img_btn_enabled')
  .style('margin', height < width ? '0px' : '2px')
  .style('height', height < width ? (height / 7 - 6) + 'px' : (width / 7 - 6) + 'px')
  .style('width', width < height ? (width / 7 - 6) + 'px' : (height / 7 - 6) + 'px'); 

  d3.selectAll(".country_btn_enabled")
  .style('height', function(){
    if (height < width) {
      return ((height / 8) - 4) + 'px';
    }
    else {
      var num_rows = all_data.length / 8;
      var menubar_height = (width / 7);
      var remaining_height = height - svg_dim - menubar_height - 10; 
      return (remaining_height / num_rows - 4) + 'px';
    }
  })
  .style('width', function(){
    if (height < width) {
      var num_cols = all_data.length / 8;
      var menubar_width = (height / 7);
      var remaining_width = width - svg_dim - menubar_width; 
      return (remaining_width / num_cols - 4) + 'px';
    }
    else {        
      return ((width / 8) - 4) + 'px';
    }      
  });

  d3.select('#selector_div')
  .style('height', function(){
    if (height < width) {
      return (height) + 'px';
    }
    else {
      var menubar_height = non_interactive ? (width / 7) : 0;
      var remaining_height = height - svg_dim - menubar_height - 10; 
      return (remaining_height) + 'px';
    }
  })
  .style('width', function(){
    if (height < width) {
      var menubar_width = non_interactive ? (height / 7) : 0;
      var remaining_width = width - svg_dim - menubar_width; 
      return (remaining_width) + 'px';
    }
    else {        
      return (width) + 'px';
    }      
  })
  .style('float', (height < width) ? 'right' : 'inherit')
  .style('left', (height < width) ? (svg_dim) + 'px' : '0px')  
  .style('position', 'absolute');

  d3.selectAll('.carousel_item').style('display','none');

  d3.select('#carousel_svg').style('width',d3.select('#selector_div').style('width'));
  d3.select('#carousel_svg').style('height',d3.select('#selector_div').style('height'));

  chart_g.call(chart_instance); 
  if (window.location.href.indexOf('mobubble') != -1) { 
    carousel_g.call(carousel_instance);            
  }

  appInsights.trackEvent("Resized", { 
    "TimeStamp": new Date().valueOf(),
    "user_id": globals.userID, 
    "Event": "Resized",
    "Width": window.innerWidth, 
    "Height": window.innerHeight,
    "Orientation": 'portrait'
  });
}

window.addEventListener("deviceorientation", tiltHandler, true);

function tiltHandler(event) {

  if (!touching && orientation_changed) {

    var tilt_time;
    var tilt_selection;
    var now = new Date(); 
  
    scale_tilt_selection.domain([25,65]);
    scale_tilt_time.domain([2,40]);

    if (window.innerHeight > window.innerWidth) {
      tilt_time = event.gamma;
      tilt_selection = event.beta;
    }
    else {
      tilt_time = event.beta;
      tilt_selection = Math.abs(event.gamma);
    }
  
    if (globals.time_tilt_array == undefined) {
      globals.time_tilt_array = [];
    }
    globals.time_tilt_array.push(tilt_time);
    if (globals.time_tilt_array.length >= 5) {
      globals.time_tilt_array.splice(0,1);    
    }
  
    if (globals.selection_tilt_array == undefined) {
      globals.selection_tilt_array = [];
    }
    globals.selection_tilt_array.push(tilt_selection);
    if (globals.selection_tilt_array.length >= 5) {
      globals.selection_tilt_array.splice(0,1);    
    }
      
    if (last_tilt != undefined) {
      if (now.getSeconds() != last_tilt.getSeconds()) {
        last_tilt = now;           
        tps = tilt_counter;
        tilt_counter = 0;
      }    
    }
    else {
      last_tilt = now; 
    }
  
    var j = globals.time_tilt_array.length - 1;
    var consistent_time_tilt = true;
    var time_tilt_sign = 0;
    var consistent_selection_tilt = true;
    var selection_tilt_sign = 0;  
  
    time_tilt_sign = Math.sign(globals.time_tilt_array[j]);
    selection_tilt_sign = Math.sign(globals.selection_tilt_array[j] - globals.selection_tilt_array[j-1]);
    for (var i = j-1; i > 0; i--) {
      if (Math.sign(globals.time_tilt_array[i]) != time_tilt_sign) {
        consistent_time_tilt = false;
      }
      if (Math.sign(globals.selection_tilt_array[i] - globals.selection_tilt_array[i-1]) != selection_tilt_sign) {
        consistent_selection_tilt = false;
      }
    }
    
    tilt_counter++;
    
    if (document.getElementById('chart_g') != null && chart_instance.tilt() == 'on') {
    
      var param_pop = chart_instance.params().radius;
      var scale_pop = chart_instance.scale_pop();
      
      if (tilt_counter % 5) {
        chart_instance.tilt_selection(tilt_selection);      
        d3.selectAll('.country_btn_enabled')
        .style('border', function(d){
          return (chart_instance.bubbleset_points().indexOf(d.code) == -1) ? '1px solid #ccc' : '5px solid gold';
        });
  
        d3.selectAll('.mark').select('circle')
        .attr('r',function(d){
          return scale_pop(Math.sqrt(d[param_pop]));
        });
  
        var highlighted_points = chart_instance.highlight_points();     
  
        if (Math.abs(tilt_time) > 2 && !carousel_touching) {
  
          d3.selectAll('.carousel_item').style('display','none');
  
          if (consistent_time_tilt) {
            chart_instance.tilt_time(tilt_time);
            
            var year = chart_instance.current_year();
            var min_year = chart_instance.params().yearMin;
            var max_year = chart_instance.params().yearMax;
            if ((year - scale_tilt_time(Math.abs(tilt_time))) < min_year && Math.sign(tilt_time) == -1) {
              chart_instance.current_year(min_year);
            }
            else if ((year + scale_tilt_time(Math.abs(tilt_time))) > max_year && Math.sign(tilt_time) == 1){
              chart_instance.current_year(max_year);
            }
            else {
              chart_instance.current_year(year + Math.sign(tilt_time) * scale_tilt_time(Math.abs(tilt_time)));
            }    
          }       
          chart_g.call(chart_instance);  
        }    
  
        else if (highlighted_points.length > 0 && carousel_touching) {
          highlighted_points.sort(function(x, y){
            return d3.ascending(x, y);
          });
  
          d3.selectAll('.carousel_item').style('display','inline');
  
          scale_tilt_selection.range([0,(highlighted_points.length-1)]);
  
          if (consistent_selection_tilt) {
            var highlighted_point_index = 0;
            var selection_tilts = 0;
            for (var g = globals.selection_tilt_array.length - 1; g >= 0; g--){
              selection_tilts = selection_tilts + globals.selection_tilt_array[g];
            }
            if (selection_tilt_sign == 1) {
              highlighted_point_index = Math.round(scale_tilt_selection(selection_tilts / globals.selection_tilt_array.length));
              if (highlighted_point_index > highlighted_points-1){
                highlighted_point_index = highlighted_points - 1;
              }
            }
            else if (selection_tilt_sign == -1){
              highlighted_point_index = Math.round(scale_tilt_selection(selection_tilts / globals.selection_tilt_array.length));
              if (highlighted_point_index < 0){
                highlighted_point_index = 0;
              }
            }
                     
            if (globals.highlighted_point != highlighted_points[highlighted_point_index]) {
              globals.highlighted_point = highlighted_points[highlighted_point_index];
              carousel_instance.carousel_focus(highlighted_point_index);
              carousel_g.call(carousel_instance); 
              var node_r = d3.select('#mark_' + globals.highlighted_point).select('circle').attr('r');        
              d3.select('#mark_' + globals.highlighted_point).select('circle')
              .transition()
              .ease(d3.easeCubic)
              .duration(250)
              .attr('r', (node_r * 1.5))
              .style('stroke-width','2px')
              .transition()
              .ease(d3.easeCubic)
              .duration(250)
              .attr('r', node_r)
              .style('stroke-width','1px');
            }       
          }
          
          d3.select('#' + globals.highlighted_point + '_bttn')
          .style('border', '5px solid cyan');
            
          var node = document.getElementById('mark_' + globals.highlighted_point);
          node.parentElement.appendChild(node);
          chart_g.call(chart_instance);   
        
        }
        

      }
    }
  }
  else {
    carousel_touching = false;
  }
}

d3.select("body")
.on("keydown", function () {    
  
  switch(d3.event.keyCode) {    

    case 27: // test override on 'Esc' and load menu
      test_override = true;
      consent_complete = true;
      introduction_complete = true;

      globals.trial_index = -1;

      globals.animation = 'off';
      globals.lines = 'off';
      globals.facets = 'off';

      appInsights.trackEvent("Escape", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "Escape",
        "user_id": globals.userID
      });

      if (document.getElementById('selector_div') != undefined) {      
        document.getElementById('selector_div').remove();                    
      } 
     
      if (document.getElementsByTagName('div')[0] != undefined) {        
               
        document.getElementsByTagName('div')[0].remove();      
        appInsights.trackEvent("TestOverride_Load_Menu", { 
          "TimeStamp": new Date().valueOf(),
          "Event": "TestOverride_Load_Menu",
          "user_id": globals.userID
        });
        if (window.location.href.indexOf('mobubble') == -1){
          loadMenu();
        }
        else {
          loadSandbox();
        }         
        hideAddressBar();
      }           
    break;    

    default:
      test_override = true;
      if (document.getElementsByTagName('div')[0] != undefined) {      
        document.getElementsByTagName('div')[0].remove();      
        appInsights.trackEvent("LoadMenu", { 
          "TimeStamp": new Date().valueOf(),
          "Event": "LoadMenu",
          "user_id": globals.userID
        });
        if (window.location.href.indexOf('mobubble') == -1){
          loadMenu();
        }     
        else {
          loadSandbox();
        }
      }
    break;
  }    

});

loadSandbox = function () {

  globals.trial_index = 0;
  non_interactive = false;
  test_override = true;    

  appInsights.trackEvent("SandBox_Open", { 
    "TimeStamp": new Date().valueOf(),
    "Event": "SandBox_Open",
    "user_id": globals.userID
  });

  setTimeout(function(){
    // Hide the address bar!
		sandbox();  
  }, 100);
  hideAddressBar(); 
};

loadMenu = function () {
  
  menu(); 

  d3.select('#consent_btn')
  .on('touchstart', function() {    
    if (test_override || !consent_complete) {
      document.getElementById('menu_div').remove();
      appInsights.trackEvent("ConsentStart", { 
        "TimeStamp": new Date().valueOf(),
        "user_id": globals.userID,
        "Event": "ConsentStart",
        "Scene": 0
      });
      consent(0);
      hideAddressBar();
    }  
  });

  d3.select('#introduction_btn')
  .on('touchstart', function() {      
    if (test_override || (!introduction_complete && consent_complete)) {
      document.getElementById('menu_div').remove();
      appInsights.trackEvent("IntroStart", { 
        "TimeStamp": new Date().valueOf(),
        "user_id": globals.userID,
        "Event": "IntroStart",
        "Scene": 0
      });
      introduction(0);
      hideAddressBar();
    }
  });

  d3.select('#trial_btn')
  .on('touchstart', function() {

    if (test_override || introduction_complete) {
      globals.trial_index = -1;  
      non_interactive = true;
      test_override = false;  
      
      switch (globals.condition) {
  
        case 'stepper':
  
          globals.animation = 'off';
          globals.lines = 'off';
          globals.facets = 'off';
          break;
  
        case 'animation':
  
          globals.animation = 'on';
          globals.lines = 'off';
          globals.facets = 'off';
          break;
  
        case 'multiples':
  
          globals.animation = 'off';
          globals.lines = 'on';
          globals.facets = 'on';
          break;
  
        default:
  
          globals.animation = 'off';
          globals.lines = 'off';
          globals.facets = 'off';
          break;
      }   
  
      appInsights.trackEvent("Experiment_Start", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "Experiment_Start",
        "condition": globals.condition,
        "user_id": globals.userID
      });
      document.getElementById('menu_div').remove();   
      trial();  
      countrySelector();
      hideAddressBar();   
    }
  });

  d3.select('#questionnaire_btn')
  .on('touchstart', function() {    
    if (test_override || experiment_complete) {
      document.getElementById('menu_div').remove();
      appInsights.trackEvent("SurveyStart", { 
        "TimeStamp": new Date().valueOf(),
        "user_id": globals.userID,
        "Event": "SurveyStart",
        "Scene": 0
      });
      questionnaire(0);
      hideAddressBar();
    }  
  });

  d3.select('#secret_sandbox')
  .on('touchstart', function() {  
    document.getElementById('menu_div').remove(); 
    globals.trial_index = 0;
    non_interactive = true;
    test_override = true;    

    appInsights.trackEvent("SandBox_Open", { 
      "TimeStamp": new Date().valueOf(),
      "Event": "SandBox_Open",
      "user_id": globals.userID
    });
    sandbox();
    hideAddressBar();   
  });
};

 if (getCookie('visited')) {
  // alert('You have already participated in this study.'); 
  // appInsights.trackEvent("RepeatParticipant", { 
  //   "TimeStamp": new Date().valueOf(),
  //   "Event": "RepeatParticipant",
  //   "user_id": globals.userID
  // });
  if (window.location.href.indexOf('mobubble') == -1){
    loadMenu();
  }
  else {
    loadSandbox(); 
  }
 }
 else {
   setCookie('visited',1,365);
   appInsights.trackEvent("NewParticipant", { 
    "TimeStamp": new Date().valueOf(),
    "Event": "NewParticipant",
    "user_id": globals.userID
  });
  if (window.location.href.indexOf('mobubble') == -1){
    loadMenu();
  }
  else {
    loadSandbox();
  }
 }

d3.select('body').append('svg')
.style('display','none')
.attr('xmlns','http://www.w3.org/2000/svg')
.attr('version','1.1')
.attr('height','0')
.append('filter')
.attr('id','myblurfilter')
.attr('width','110%')
.attr('height','110%')
.append('feGaussianBlur')
.attr('stdDeviation','30')
.attr('result','blur');


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var globals = __webpack_require__(0);
var nationData = __webpack_require__(2);
var taskList = __webpack_require__(8);

function initTasks() {

  nationData.forEach(function (d){ 
    d.orig_code = d.code;
  });

  var rand_condition = Math.random();

  globals.condition = (rand_condition <= 0.67) ? 'animation' : 'stepper'; 

  // globals.condition = 'stepper';

  if (window.location.href.indexOf('mobubble') == -1) {
    console.log({
      'condition': globals.condition
    });
  }

  // console.log(nationData);   
  max_trials = taskList.length;

  var tutorial_tasks = taskList.slice(0,3);
  var test_tasks = taskList.slice(3,taskList.length);
  test_tasks = shuffle(test_tasks);

  //correct cases where two consecutive trials have same pair of axes
  var corrected = false;
  var swap_count = 0;
  while (!corrected){
    corrected = true; //assume the shuffling produced no two consecutive trials with the same pair of axes
    if (swap_count > test_tasks.length) {
      // console.log('reshuffling');
      test_tasks = shuffle(test_tasks); // reshuffle if excessive swapping occurs
    }
    var tmp;
    for (var i = 0; i < (test_tasks.length - 2); i++){

      //test if this task and the next share the same axes
      if (test_tasks[i].x == test_tasks[i+1].x && test_tasks[i].y == test_tasks[i+1].y){

        //a swap is needed, set the corrected flag to false
        // console.log('swapping trials ' + (i+1) + ' and ' + (i+2));
        swap_count++;
        corrected = false;
        tmp = test_tasks[i+2];
        test_tasks[i+2] = test_tasks[i+1];
        test_tasks[i+1] = tmp;
      }
    }
    //check the last two trials
    if (test_tasks[test_tasks.length-2].x == test_tasks[test_tasks.length-1].x && test_tasks[test_tasks.length-2].y == test_tasks[test_tasks.length-1].y) {
      // console.log('swapping trials ' + (test_tasks.length-1) + ' and 0');
      swap_count++;
      corrected = false;
      tmp = test_tasks[0]; //swap last to first
      test_tasks[0] = test_tasks[test_tasks.length-1];
      test_tasks[test_tasks.length-1] = tmp;
    }
  }


  globals.trials = tutorial_tasks.concat(test_tasks);
  if (window.location.href.indexOf('mobubble') == -1) {
    console.log(globals.trials);
  }
}

module.exports = initTasks;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var taskList = [  
	{
		"task_index": -3,
		"x": "Energy Consumption",
		"y": "GDP Per Capita",
		"prompt": "Select the country that had the largest change in <span class='instruction_emphasis'>GDP Per Capita</span>.",
		"num_responses": 1,
		"correct_responses": ["Norway"],
		"yearMin": 1980,
		"yearMax": 2000,
		"tutorial": true,
		"quality_control": false
	},
	{
		"task_index": -2,
		"x": "Number of Personal Computers",
		"y": "GDP Per Capita",
		"prompt": "Select <span class='instruction_number'>three</span> countries with rapid growth in the <span class='instruction_emphasis'>Number of Personal Computers</span> between 1985 and 2000.",
		"num_responses": 3,
		"correct_responses": ["Denmark","Iceland","Norway","Sweden","United States","Australia"],
		"yearMin": 1985,
		"yearMax": 2000,
		"tutorial": true,
		"quality_control": false
	},
	{
		"task_index": -1,
		"x": "Number of Personal Computers",
		"y": "Life Expectancy",
		"prompt": "Select <span class='instruction_number'>one</span> foo country with little growth in the <span class='instruction_emphasis'>Number of Personal Computers</span>.",
		"num_responses": 1,
		"correct_responses": ["Hungary"],
		"yearMin": 1985,
		"yearMax": 2000,
		"tutorial": true,
		"quality_control": false
	},
	{
		"task_index": 0,
		"x": "Population",
		"y": "GDP Per Capita",
		"prompt": "Select the <span class='instruction_number'>two</span> countries having the largest <span class='instruction_emphasis'>Population</span> in the year 2000.",
		"num_responses": 2,
		"correct_responses": ["India","China"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": true
	},
	{
		"task_index": 1,
		"x": "E Index",
		"y": "G Index",
		"prompt": "Select <span class='instruction_number'>two</span> countries whose <span class='instruction_emphasis'>E Index</span> grew faster than their <span class='instruction_emphasis'>G Index</span>.",
		"num_responses": 2,
		"correct_responses": ["India","China"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 2,
		"x": "Energy Consumption",
		"y": "GDP Per Capita",
		"prompt": "Select <span class='instruction_number'>three</span> countries that had little change in <span class='instruction_emphasis'>GDP Per Capita</span>.",
		"num_responses": 3,
		"correct_responses": ["Gambia","Liberia","Rwanda"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},	
	{
		"task_index": 3,
		"x": "Life Expectancy",
		"y": "Infant Mortality",
		"prompt": "Select <span class='instruction_number'>one</span> country with a decreasing <span class='instruction_emphasis'>Infant Mortality</span> rate, but little change in <span class='instruction_emphasis'>Life Expectancy</span>.",
		"num_responses": 1,
    "correct_responses": ["Hungary"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 4,
		"x": "Life Expectancy",
		"y": "Infant Mortality",
		"prompt": "Select <span class='instruction_number'>two</span> countries whose <span class='instruction_emphasis'>Infant Mortality</span> rate decreased first, then increased later.",
		"num_responses": 2,
		"correct_responses": ["Liberia","Rwanda"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 5,
		"x": "Life Expectancy",
		"y": "Infant Mortality",
		"prompt": "Select <span class='instruction_number'>two</span> countries whose <span class='instruction_emphasis'>Infant Mortality</span> rate decreased the most.",
		"num_responses": 2,
		"correct_responses": ["Gambia","Saudi Arabia"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 6,
		"x": "E Index",
		"y": "P Index",
		"prompt": "Select <span class='instruction_number'>two</span> countries whose <span class='instruction_emphasis'>P Index</span> grew faster than their <span class='instruction_emphasis'>E Index</span>.",
		"num_responses": 2,
		"correct_responses": ["India","China"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 7,
		"x": "Life Expectancy (Women)",
		"y": "Life Expectancy (Men)",
		"prompt": "Select <span class='instruction_number'>one</span> country where <span class='instruction_emphasis'>Life Expectancy</span> (<span class='instruction_emphasis'>Women</span> & <span class='instruction_emphasis'>Men</span>) increased first and decreased later.",
		"num_responses": 1,
		"correct_responses": ["Liberia","Rwanda"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 8,
		"x": "Arable Area",
		"y": "Population",
		"prompt": "Select <span class='instruction_number'>one</span> country that had a decrease in <span class='instruction_emphasis'>Arable Area</span>, even as their <span class='instruction_emphasis'>Population</span> increased.",
		"num_responses": 1,
		"correct_responses": ["United States"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
	},
	{
		"task_index": 9,
		"x": "Arable Area",
		"y": "Population",
		"prompt": "Select <span class='instruction_number'>one</span> country that had an increase in <span class='instruction_emphasis'>Arable Area</span>, but only a slight increase in <span class='instruction_emphasis'>Population</span>.",
		"num_responses": 1,
		"correct_responses": ["Australia"],
		"yearMin": 1975,
		"yearMax": 2000,
		"tutorial": false,
		"quality_control": false
  }
];

module.exports = taskList;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);
var chart = __webpack_require__(3);
var carousel = __webpack_require__(5);
var nationData = __webpack_require__(2);

function sandbox () {

  suppress_touch_val_feedback = false;
  suppress_touch_feedback = false;
  globals.trial_response = [];
  
  var checkExist;    
  var checkTouch;
  
  function getDims() {
    height = window.innerHeight;
    width = window.innerWidth;
    svg_dim = d3.min([height,width]) - 2;
    inner_padding = svg_dim * 0.1;
    chart_dim = svg_dim * 0.8;
  }
  
  function draw() {
  
    getDims();
        
    d3.select('#main_svg')
    .style('height',svg_dim + 'px')
    .style('width',svg_dim + 'px');

    if (window.location.href.indexOf('mobubble') != -1) {
      d3.select('#selector_div')
      .style('height', function(){
      if (height < width) {
        return (height) + 'px';
      }
      else {
        var menubar_height = non_interactive ? (width / 7) : 0;
        var remaining_height = height - svg_dim - menubar_height - 10; 
        return (remaining_height) + 'px';
      }
      })
      .style('width', function(){
        if (height < width) {
          var menubar_width = non_interactive ? (height / 7) : 0;
          var remaining_width = width - svg_dim - menubar_width; 
          return (remaining_width) + 'px';
        }
        else {        
          return (width) + 'px';
        }      
      })
      .style('float', (height < width) ? 'right' : 'unset')
      .style('left', (height < width) ? (svg_dim) + 'px' : 'unset');

      d3.select('#carousel_svg').style('width',d3.select('#selector_div').style('width'));
      d3.select('#carousel_svg').style('height',d3.select('#selector_div').style('height'));
      
    }

    chart_g.attr('transform','translate(' + inner_padding + ',' + inner_padding + ')');
  
    d3.selectAll('.guide').remove();
    chart_instance.lines('off'); 
    chart_instance.animation('off');
    chart_instance.facets('off');
    chart_instance.current_year(globals.param_yearMin);

    chart_g.call(chart_instance);
    chart_g.call(chart_instance);

    if (window.location.href.indexOf('mobubble') != -1) { 

      carousel_g.datum([]);
      carousel_g.call(carousel_instance);

    }
  
    d3.selectAll('.toolbar')
    .style('position','absolute')
    .style('top', height < width ? '0px' : (svg_dim) + 'px')
    .style('right', height < width ? '0px' : 'unset')
    .style('width', height < width ? (height / 7) + 'px'  : width + 'px')
    .style('height',  height < width ? height + 'px'  : (width / 7) + 'px');
  
    d3.selectAll('.img_btn_enabled')
    .style('margin', height < width ? '0px' : '2px')
    .style('height', height < width ? (height / 7 - 6) + 'px' : (width / 7 - 6) + 'px')
    .style('width', width < height ? (width / 7 - 6) + 'px' : (height / 7 - 6) + 'px'); 

    // d3.select('#sandbox_div')
    // .style('height', function(){
    //   return svg_dim + (height < width ? (height / 7 - 6) : (width / 7 - 6)) + 'px'; 
    // });

  }
  
  function toggleLines () {
    chart_instance.this_chart().interrupt();
    if (chart_instance.lines() == "on") {
      chart_instance.lines("off");
    }
    else if (chart_instance.lines() == "off") {
      chart_instance.lines("on"); 
    }
    chart_g.call(chart_instance);
    appInsights.trackEvent("SandBoxEvent", { 
      "TimeStamp": new Date().valueOf(),
      "user_id": globals.userID, 
      "Event": "SandBoxEvent",
      "EventType": "toggleLines", 
      "Status": chart_instance.lines()
    });
    document.getElementById('sandbox_div').focus();
  }

  function toggleAnimate () {
    chart_instance.this_chart().interrupt();
    if (chart_instance.animation() == "on") {
      chart_instance.current_year(Math.floor(chart_instance.current_year()));
      chart_instance.animation("off");
      d3.select('#next_btn')
      .attr('class','img_btn_enabled')
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/next.svg');
      d3.select('#prev_btn')
      .attr('class','img_btn_enabled');
    }
    else if (chart_instance.animation() == "off") {
      chart_instance.animation("on"); 
      d3.select('#next_btn')
      .attr('class','img_btn_disabled')
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/next_gold.svg');
      d3.select('#prev_btn')
      .attr('class','img_btn_disabled');
    }
    chart_g.call(chart_instance);
    appInsights.trackEvent("SandBoxEvent", { 
      "TimeStamp": new Date().valueOf(),
      "user_id": globals.userID, 
      "Event": "SandBoxEvent",
      "EventType": "toggleAnimate", 
      "Status": chart_instance.animation()
    });
    document.getElementById('sandbox_div').focus();
  }
  
  function toggleFacets () {
    chart_instance.this_chart().interrupt();
    if (chart_instance.facets() == "on") {
      chart_instance.facets("off");      
    }
    else if (chart_instance.facets() == "off") {
      chart_instance.facets("on");      
    }
    chart_g.call(chart_instance);
    appInsights.trackEvent("SandBoxEvent", { 
      "TimeStamp": new Date().valueOf(),
      "user_id": globals.userID, 
      "Event": "SandBoxEvent",
      "EventType": "toggleFacets", 
      "Status": chart_instance.facets()
    });
    document.getElementById('sandbox_div').focus();
  }

  function loadData () {     

    checkExist = setInterval(function() {
      if (all_data != undefined) {        
        chart_g.datum(all_data);
        draw();    

        hideAddressBar();

        d3.select('#sandbox_div')
        .style('visibility','visible');

        appInsights.trackEvent("SandBoxEvent", { 
          "TimeStamp": new Date().valueOf(),
          "user_id": globals.userID, 
          "Event": "SandBoxEvent",
          "EventType": "loadData", 
        });

        clearInterval(checkExist);
      }
    }, 100); // check every 100ms

    chart_instance = chart();
    if (window.location.href.indexOf('mobubble') != -1) {
      carousel_instance = carousel();
    }
  
    main_svg = d3.select('#main_svg').remove();
  
    main_svg = d3.select('#sandbox_div').append('svg')
    .attr('id','main_svg');  

    if (window.location.href.indexOf('mobubble') != -1) {
      carousel_svg = d3.select('#carousel_svg').remove();
    
      carousel_svg = d3.select('#selector_div').append('svg')
      .attr('id','carousel_svg');  
      
      carousel_g = carousel_svg.append('g')
      .attr('id','carousel_g');    
    }
  
    defs = d3.select('#main_svg').append('defs');
  
    chart_g = main_svg.append('g')
    .attr('id','chart_g');      

    
    document.getElementById('sandbox_div').focus();

    // var orientation_div = d3.select('#sandbox_div').append('div')
    // .attr('id','orientation_div')
    // .attr('tabindex',0);

    // orientation_div.append('span')
    // .attr('id','orientation_span')
    // .html('<span class="instruction_emphasis">TooSmallForMultiples</span>');

  } 
    
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','sandbox_div')
  .attr('tabindex',0);

  d3.select('body').append('div')
  .attr('id','selector_div')
  .style('bottom','0px')
  .style('position', 'absolute')
  .attr('tabindex',0);

  all_data = nationData;  
  if (non_interactive){
    var codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]; //,
    codes = shuffle(codes);
    all_data.forEach(function (d,i){ 
      d.code = codes[i]; 
    });
  }
  else {
    all_data.forEach(function (d){ 
      d.code = d.orig_code; 
    });
  }     
  loadData(); 

  function exitHandler () {
    // console.log('remove sandbox');
    if (window.location.href.indexOf('mobubble') == -1){
      appInsights.trackEvent("SandBox_Closed", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "SandBox_Closed",
        "user_id": globals.userID
      });
      document.getElementById('sandbox_div').remove();
      if (document.getElementById('selector_div') != undefined) {      
        document.getElementById('selector_div').remove();                    
      } 
      loadMenu();
      hideAddressBar();   
    }    
  }

  if (non_interactive) {
    var menubar = d3.select('#sandbox_div').append('div')
    .attr('class','toolbar')
    .attr('id','menubar');
    
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('id','fullscreen_btn')
    .attr('disabled', null)
    .attr('type','image')
    .attr('name','Exit')
    .attr('title', 'Exit')
    .attr('src', 'assets/fullscreen.png')
    .on('touchstart',function(){
      d3.event.preventDefault();
      exitHandler();
    });
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('id','na_btn')
    .attr('type','image')
    .attr('name','MiscToggle')
    .attr('title', 'MiscToggle')
    .attr('src', 'assets/na.svg')
    .on('touchstart', function() {
      d3.event.preventDefault(); 
    });    
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('type','image')
    .attr('name','LineToggle')
    .attr('title', 'LineToggle')
    .attr('src', 'assets/line.svg')
    .on('touchstart', function() {
      d3.event.preventDefault();
      toggleLines();
    });
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('type','image')
    .attr('name','FacetToggle')
    .attr('title', 'FacetToggle')
    .attr('src', 'assets/grid.svg')
    .on('touchstart', function() {
      d3.event.preventDefault();
      toggleFacets();
    });  
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('type','image')
    .attr('name','AnimateToggle')
    .attr('title', 'AnimateToggle')
    .attr('src', 'assets/play.svg')
    .on('touchstart', function() {
      d3.event.preventDefault();
      toggleAnimate();
    });  
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('id','prev_btn')
    .attr('type','image')
    .attr('name','PrevToggle')
    .attr('title', 'PrevToggle')
    .attr('src', 'assets/prev.svg')
    .on('touchstart', function() {    
      d3.event.preventDefault();
      d3.select(this).transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/prev_gold.svg')
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/prev.svg');
      chart_instance.this_chart().interrupt();
  
      if (chart_instance.animation() == 'off'){
  
        if (chart_instance.current_year() == chart_instance.params().yearMin) {
          chart_instance.current_year(chart_instance.params().yearMax);
        }
        else {
          var prev_year = chart_instance.current_year() - 1;
          chart_instance.current_year(prev_year);
        }
        chart_g.call(chart_instance);
  
        checkTouch = setInterval(function() {
          if (chart_instance.current_year() == chart_instance.params().yearMin) {
            chart_instance.current_year(chart_instance.params().yearMax);
          }
          else {
            var prev_year = chart_instance.current_year() - 1;
            chart_instance.current_year(prev_year);
          }
          chart_g.call(chart_instance);
        }, 500); // check every 500ms if touch is ongoing          
  
      }
    })
    .on('touchend', function(){
      d3.event.preventDefault();
      clearInterval(checkTouch);
    });    
  
    menubar.append("input")
    .attr('class', 'img_btn_enabled')
    .attr('id','next_btn')
    .attr('type','image') 
    .attr('name','NextToggle')
    .attr('title', 'NextToggle')
    .attr('src', 'assets/next.svg')
    .on('touchstart', function() {    
      d3.event.preventDefault();
      d3.select(this).transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/next_gold.svg')
      .transition()
      .duration(250)
      .ease(d3.easeCubic)
      .attr('src', 'assets/next.svg');
      chart_instance.this_chart().interrupt();
  
      if (chart_instance.animation() == 'off'){
  
        if (chart_instance.current_year() == chart_instance.params().yearMax) {
          chart_instance.loop_count(chart_instance.loop_count + 1);
          chart_instance.current_year(chart_instance.params().yearMin);
        }
        else {
          var next_year = chart_instance.current_year() + 1;
          chart_instance.current_year(next_year);
        }
        chart_g.call(chart_instance);
  
        checkTouch = setInterval(function() {
          if (chart_instance.current_year() == chart_instance.params().yearMax) {
            chart_instance.loop_count(chart_instance.loop_count + 1);
            chart_instance.current_year(chart_instance.params().yearMin);
          }
          else {
            var next_year = chart_instance.current_year() + 1;
          chart_instance.current_year(next_year);
          }
          chart_g.call(chart_instance);
        }, 500); // check every 500ms if touch is ongoing          
  
      }
    })
    .on('touchend', function(){
      d3.event.preventDefault();
      clearInterval(checkTouch);
    });    
  }
  else if (window.location.href.indexOf('mobubble') != -1) {
    chart_instance.tilt('on');
  }

}

module.exports = sandbox;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.flubber=t.flubber||{})}(this,function(t){"use strict";function n(t){return 10===t||13===t||8232===t||8233===t||32===t||9===t||11===t||12===t||160===t||t>=5760&&an.indexOf(t)>=0}function e(t){switch(32|t){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:case 114:return!0}return!1}function r(t){return t>=48&&t<=57}function i(t){return t>=48&&t<=57||43===t||45===t||46===t}function a(t){this.index=0,this.path=t,this.max=t.length,this.result=[],this.param=0,this.err="",this.segmentStart=0,this.data=[]}function o(t){for(;t.index<t.max&&n(t.path.charCodeAt(t.index));)t.index++}function s(t){var n,e=t.index,i=e,a=t.max,o=!1,s=!1,h=!1,u=!1;if(i>=a)return void(t.err="SvgPath: missed param (at pos "+i+")");if(n=t.path.charCodeAt(i),43!==n&&45!==n||(i++,n=i<a?t.path.charCodeAt(i):0),!r(n)&&46!==n)return void(t.err="SvgPath: param should start with 0..9 or `.` (at pos "+i+")");if(46!==n){if(o=48===n,i++,n=i<a?t.path.charCodeAt(i):0,o&&i<a&&n&&r(n))return void(t.err="SvgPath: numbers started with `0` such as `09` are ilegal (at pos "+e+")");for(;i<a&&r(t.path.charCodeAt(i));)i++,s=!0;n=i<a?t.path.charCodeAt(i):0}if(46===n){for(u=!0,i++;r(t.path.charCodeAt(i));)i++,h=!0;n=i<a?t.path.charCodeAt(i):0}if(101===n||69===n){if(u&&!s&&!h)return void(t.err="SvgPath: invalid float exponent (at pos "+i+")");if(i++,n=i<a?t.path.charCodeAt(i):0,43!==n&&45!==n||i++,!(i<a&&r(t.path.charCodeAt(i))))return void(t.err="SvgPath: invalid float exponent (at pos "+i+")");for(;i<a&&r(t.path.charCodeAt(i));)i++}t.index=i,t.param=parseFloat(t.path.slice(e,i))+0}function h(t){var n,e;n=t.path[t.segmentStart],e=n.toLowerCase();var r=t.data;if("m"===e&&r.length>2&&(t.result.push([n,r[0],r[1]]),r=r.slice(2),e="l",n="m"===n?"l":"L"),"r"===e)t.result.push([n].concat(r));else for(;r.length>=rn[e]&&(t.result.push([n].concat(r.splice(0,rn[e]))),rn[e]););}function u(t){var n,r,a,u,c=t.max;if(t.segmentStart=t.index,n=t.path.charCodeAt(t.index),!e(n))return void(t.err="SvgPath: bad command "+t.path[t.index]+" (at pos "+t.index+")");if(a=rn[t.path[t.index].toLowerCase()],t.index++,o(t),t.data=[],!a)return void h(t);for(r=!1;;){for(u=a;u>0;u--){if(s(t),t.err.length)return;t.data.push(t.param),o(t),r=!1,t.index<c&&44===t.path.charCodeAt(t.index)&&(t.index++,o(t),r=!0)}if(!r){if(t.index>=t.max)break;if(!i(t.path.charCodeAt(t.index)))break}}h(t)}function c(t,n){return[t[0]*n[0]+t[2]*n[1],t[1]*n[0]+t[3]*n[1],t[0]*n[2]+t[2]*n[3],t[1]*n[2]+t[3]*n[3],t[0]*n[4]+t[2]*n[5]+t[4],t[1]*n[4]+t[3]*n[5]+t[5]]}function f(){if(!(this instanceof f))return new f;this.queue=[],this.cache=null}function l(t,n,e,r){var i=t*r-n*e<0?-1:1,a=Math.sqrt(t*t+n*n),o=Math.sqrt(t*t+n*n),s=t*e+n*r,h=s/(a*o);return h>1&&(h=1),h<-1&&(h=-1),i*Math.acos(h)}function p(t,n,e,r,i,a,o,s,h,u){var c=u*(t-e)/2+h*(n-r)/2,f=-h*(t-e)/2+u*(n-r)/2,p=o*o,g=s*s,v=c*c,x=f*f,y=p*g-p*x-g*v;y<0&&(y=0),y/=p*x+g*v,y=Math.sqrt(y)*(i===a?-1:1);var d=y*o/s*f,m=y*-s/o*c,M=u*d-h*m+(t+e)/2,w=h*d+u*m+(n+r)/2,b=(c-d)/o,L=(f-m)/s,A=(-c-d)/o,q=(-f-m)/s,k=l(1,0,b,L),P=l(b,L,A,q);return 0===a&&P>0&&(P-=ln),1===a&&P<0&&(P+=ln),[M,w,k,P]}function g(t,n){var e=4/3*Math.tan(n/4),r=Math.cos(t),i=Math.sin(t),a=Math.cos(t+n),o=Math.sin(t+n);return[r,i,r-i*e,i+r*e,a+o*e,o-a*e,a,o]}function v(t,n,e){if(!(this instanceof v))return new v(t,n,e);this.rx=t,this.ry=n,this.ax=e}function x(t){if(!(this instanceof x))return new x(t);var n=on(t);this.segments=n.segments,this.err=n.err,this.__stack=[]}function y(t){var n=t.match(wn);return n?n.map(Number):[]}function d(t,n,e,r,i,a,o,s){this.a={x:t,y:n},this.b={x:e,y:r},this.c={x:i,y:a},this.d={x:o,y:s},null!==o&&void 0!==o&&null!==s&&void 0!==s?(this.getArcLength=_,this.getPoint=L,this.getDerivative=M):(this.getArcLength=A,this.getPoint=b,this.getDerivative=m),this.init()}function m(t,n,e){return{x:2*(1-e)*(t[1]-t[0])+2*e*(t[2]-t[1]),y:2*(1-e)*(n[1]-n[0])+2*e*(n[2]-n[1])}}function M(t,n,e){return b([3*(t[1]-t[0]),3*(t[2]-t[1]),3*(t[3]-t[2])],[3*(n[1]-n[0]),3*(n[2]-n[1]),3*(n[3]-n[2])],e)}function w(t,n,e,r,i){for(var a=1,o=t/n,s=(t-e(r,i,o))/n;a>.001;){var h=e(r,i,o+s),u=e(r,i,o-s),c=Math.abs(t-h)/n,f=Math.abs(t-u)/n;c<a?(a=c,o+=s):f<a?(a=f,o-=s):s/=2}return o}function b(t,n,e){return{x:(1-e)*(1-e)*t[0]+2*(1-e)*e*t[1]+e*e*t[2],y:(1-e)*(1-e)*n[0]+2*(1-e)*e*n[1]+e*e*n[2]}}function L(t,n,e){return{x:(1-e)*(1-e)*(1-e)*t[0]+3*(1-e)*(1-e)*e*t[1]+3*(1-e)*e*e*t[2]+e*e*e*t[3],y:(1-e)*(1-e)*(1-e)*n[0]+3*(1-e)*(1-e)*e*n[1]+3*(1-e)*e*e*n[2]+e*e*e*n[3]}}function A(t,n,e){void 0===e&&(e=1);var r=t[0]-2*t[1]+t[2],i=n[0]-2*n[1]+n[2],a=2*t[1]-2*t[0],o=2*n[1]-2*n[0],s=4*(r*r+i*i),h=4*(r*a+i*o),u=a*a+o*o;if(0===s)return e*Math.sqrt(Math.pow(t[2]-t[0],2)+Math.pow(n[2]-n[0],2));var c=h/(2*s),f=u/s,l=e+c,p=f-c*c;return Math.sqrt(s)/2*(l*Math.sqrt(l*l+p)-c*Math.sqrt(c*c+p)+p*Math.log(Math.abs((l+Math.sqrt(l*l+p))/(c+Math.sqrt(c*c+p)))))}function q(t,n){return qn[t][n]}function k(t,n,e){var r,i,a,o=e.length-1;if(0===o)return 0;if(0===t){for(i=0,a=0;a<=o;a++)i+=q(o,a)*Math.pow(1-n,o-a)*Math.pow(n,a)*e[a];return i}for(r=new Array(o),a=0;a<o;a++)r[a]=o*(e[a+1]-e[a]);return k(t-1,n,r)}function P(t,n,e){var r=k(1,e,t),i=k(1,e,n),a=r*r+i*i;return Math.sqrt(a)}function _(t,n,e){var r,i,a,o;void 0===e&&(e=1);for(r=e/2,i=0,a=0;a<20;a++)o=r*Ln[20][a]+r,i+=An[20][a]*P(t,n,o);return r*i}function E(t,n,e,r){var i=t*r-n*e<0?-1:1,a=t*e+n*r;return a>1&&(a=1),a<-1&&(a=-1),i*Math.acos(a)}function S(t,n,e,r,i,a,o,s,h,u){var c=u*(t-e)/2+h*(n-r)/2,f=-h*(t-e)/2+u*(n-r)/2,l=o*o,p=s*s,g=c*c,v=f*f,x=l*p-l*v-p*g;x<0&&(x=0),x/=l*v+p*g,x=Math.sqrt(x)*(i===a?-1:1);var y=x*o/s*f,d=x*-s/o*c,m=u*y-h*d+(t+e)/2,M=h*y+u*d+(n+r)/2,w=(c-y)/o,b=(f-d)/s,L=(-c-y)/o,A=(-f-d)/s,q=E(1,0,w,b),k=E(w,b,L,A);return 0===a&&k>0&&(k-=kn),1===a&&k<0&&(k+=kn),[m,M,q,k]}function C(t,n){var e=4/3*Math.tan(n/4),r=Math.cos(t),i=Math.sin(t),a=Math.cos(t+n),o=Math.sin(t+n);return[r,i,r-i*e,i+r*e,a+o*e,o-a*e,a,o]}function Z(t,n,e,r,i,a,o,s,h){var u=0,c=[],f=[];Pn(t,n,e,r,i,a,o,s,h).forEach(function(t){var n=new bn(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),e=n.getTotalLength();u+=e,c.push(e),f.push(n)}),this.length=u,this.partialLengths=c,this.curves=f}function T(t,n,e,r){this.x0=t,this.x1=n,this.y0=e,this.y1=r}function F(t,n){return Math.sqrt((t[0]-n[0])*(t[0]-n[0])+(t[1]-n[1])*(t[1]-n[1]))}function z(t,n,e){return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e]}function j(t,n){return F(t,n)<1e-9}function I(t,n,e){var r=t.map(function(t,e){return V(t,n[e])});return function(t){var n=r.map(function(n){return n(t)});return e?H(n):n}}function V(t,n){return function(e){return t.map(function(t,r){return t+e*(n[r]-t)})}}function X(t){return"number"==typeof t&&isFinite(t)}function Y(t){return G(t)?nn(t):[(t[0][0]+t[t.length-1][0])/2,(t[0][1]+t[t.length-1][1])/2]}function G(t){for(var n=0;n<t.length-2;n++){var e=t[n],r=t[n+1],i=t[n+2];if(e[0]*(r[1]-i[1])+r[0]*(i[1]-e[1])+i[0]*(e[1]-r[1]))return!0}return!1}function O(t){return new yn(t).abs()}function D(t){return t.toString().split("M").map(function(t,n){return t=t.trim(),n&&t?"M"+t:t}).filter(function(t){return t})}function H(t){return"M"+t.join("L")+"Z"}function N(t){return D(O(t))}function Q(t,n){var e=O(t);return U(e)||R(e,n)}function U(t){var n=t.segments||[],e=[];if(!n.length||"M"!==n[0][0])return!1;for(var r=0;r<n.length;r++){var i=n[r],a=i[0],o=i[1],s=i[2];if("M"===a&&r||"Z"===a)break;if("M"===a||"L"===a)e.push([o,s]);else if("H"===a)e.push([o,e[e.length-1][1]]);else{if("V"!==a)return!1;e.push([e[e.length-1][0],o])}}return!!e.length&&{ring:e}}function R(t,n){var e,r,i=D(t)[0],a=[],o=3;if(!i)throw new TypeError(Cn);r=B(i),e=r.getTotalLength(),n&&X(n)&&n>0&&(o=Math.max(o,Math.ceil(e/n)));for(var s=0;s<o;s++){var h=r.getPointAtLength(e*s/o);a.push([h.x,h.y])}return{ring:a,skipBisect:!0}}function B(t){if("undefined"!=typeof window&&window&&window.document)try{var n=window.document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttributeNS(null,"d",t),n}catch(t){}return Sn(t)}function W(t,n){for(var e=t.length+n,r=en(t)/n,i=0,a=0,o=r/2;t.length<e;){var s=t[i],h=t[(i+1)%t.length],u=F(s,h);o<=a+u?(t.splice(i+1,0,u?z(s,h,(o-a)/u):s.slice(0)),o+=r):(a+=u,i++)}}function $(t,n){void 0===n&&(n=1/0);for(var e=0;e<t.length;e++)for(var r=t[e],i=e===t.length-1?t[0]:t[e+1];F(r,i)>n;)i=z(r,i,.5),t.splice(e+1,0,i)}function J(t,n){var e,r,i;if("string"==typeof t){var a=Q(t,n);t=a.ring,i=a.skipBisect}else if(!Array.isArray(t))throw new TypeError(Cn);if(e=t.slice(0),!K(e))throw new TypeError(Cn);return e.length>1&&j(e[0],e[e.length-1])&&e.pop(),r=tn(e),r>0&&e.reverse(),!i&&n&&X(n)&&n>0&&$(e,n),e}function K(t){return t.every(function(t){return Array.isArray(t)&&t.length>=2&&X(t[0])&&X(t[1])})}function tt(t,n,e){var r;return r=t.length-n.length,W(t,r<0?-1*r:0),W(n,r>0?r:0),Tn(t,n),I(t,n,e)}function nt(t,n,e){e=e||2;var r=n&&n.length,i=r?n[0]*e:t.length,a=et(t,0,i,e,!0),o=[];if(!a)return o;var s,h,u,c,f,l,p;if(r&&(a=ut(t,n,a,e)),t.length>80*e){s=u=t[0],h=c=t[1];for(var g=e;g<i;g+=e)f=t[g],l=t[g+1],f<s&&(s=f),l<h&&(h=l),f>u&&(u=f),l>c&&(c=l);p=Math.max(u-s,c-h)}return it(a,o,e,s,h,p),o}function et(t,n,e,r,i){var a,o;if(i===Et(t,n,e,r)>0)for(a=n;a<e;a+=r)o=kt(a,t[a],t[a+1],o);else for(a=e-r;a>=n;a-=r)o=kt(a,t[a],t[a+1],o);return o&&Mt(o,o.next)&&(Pt(o),o=o.next),o}function rt(t,n){if(!t)return t;n||(n=t);var e,r=t;do{if(e=!1,r.steiner||!Mt(r,r.next)&&0!==mt(r.prev,r,r.next))r=r.next;else{if(Pt(r),(r=n=r.prev)===r.next)return null;e=!0}}while(e||r!==n);return n}function it(t,n,e,r,i,a,o){if(t){!o&&a&&pt(t,r,i,a);for(var s,h,u=t;t.prev!==t.next;)if(s=t.prev,h=t.next,a?ot(t,r,i,a):at(t))n.push(s.i/e),n.push(t.i/e),n.push(h.i/e),Pt(t),t=h.next,u=h.next;else if((t=h)===u){o?1===o?(t=st(t,n,e),it(t,n,e,r,i,a,2)):2===o&&ht(t,n,e,r,i,a):it(rt(t),n,e,r,i,a,1);break}}}function at(t){var n=t.prev,e=t,r=t.next;if(mt(n,e,r)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(yt(n.x,n.y,e.x,e.y,r.x,r.y,i.x,i.y)&&mt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ot(t,n,e,r){var i=t.prev,a=t,o=t.next;if(mt(i,a,o)>=0)return!1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,h=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,u=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,c=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,f=vt(s,h,n,e,r),l=vt(u,c,n,e,r),p=t.nextZ;p&&p.z<=l;){if(p!==t.prev&&p!==t.next&&yt(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&mt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(p=t.prevZ;p&&p.z>=f;){if(p!==t.prev&&p!==t.next&&yt(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&mt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}return!0}function st(t,n,e){var r=t;do{var i=r.prev,a=r.next.next;!Mt(i,a)&&wt(i,r,r.next,a)&&Lt(i,a)&&Lt(a,i)&&(n.push(i.i/e),n.push(r.i/e),n.push(a.i/e),Pt(r),Pt(r.next),r=t=a),r=r.next}while(r!==t);return r}function ht(t,n,e,r,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&dt(o,s)){var h=qt(o,s);return o=rt(o,o.next),h=rt(h,h.next),it(o,n,e,r,i,a),void it(h,n,e,r,i,a)}s=s.next}o=o.next}while(o!==t)}function ut(t,n,e,r){var i,a,o,s,h,u=[];for(i=0,a=n.length;i<a;i++)o=n[i]*r,s=i<a-1?n[i+1]*r:t.length,h=et(t,o,s,r,!1),h===h.next&&(h.steiner=!0),u.push(xt(h));for(u.sort(ct),i=0;i<u.length;i++)ft(u[i],e),e=rt(e,e.next);return e}function ct(t,n){return t.x-n.x}function ft(t,n){if(n=lt(t,n)){var e=qt(n,t);rt(e,e.next)}}function lt(t,n){var e,r=n,i=t.x,a=t.y,o=-1/0;do{if(a<=r.y&&a>=r.next.y){var s=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(s<=i&&s>o){if(o=s,s===i){if(a===r.y)return r;if(a===r.next.y)return r.next}e=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!e)return null;if(i===o)return e.prev;var h,u=e,c=e.x,f=e.y,l=1/0;for(r=e.next;r!==u;)i>=r.x&&r.x>=c&&yt(a<f?i:o,a,c,f,a<f?o:i,a,r.x,r.y)&&((h=Math.abs(a-r.y)/(i-r.x))<l||h===l&&r.x>e.x)&&Lt(r,t)&&(e=r,l=h),r=r.next;return e}function pt(t,n,e,r){var i=t;do{null===i.z&&(i.z=vt(i.x,i.y,n,e,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,gt(i)}function gt(t){var n,e,r,i,a,o,s,h,u=1;do{for(e=t,t=null,a=null,o=0;e;){for(o++,r=e,s=0,n=0;n<u&&(s++,r=r.nextZ);n++);for(h=u;s>0||h>0&&r;)0===s?(i=r,r=r.nextZ,h--):0!==h&&r?e.z<=r.z?(i=e,e=e.nextZ,s--):(i=r,r=r.nextZ,h--):(i=e,e=e.nextZ,s--),a?a.nextZ=i:t=i,i.prevZ=a,a=i;e=r}a.nextZ=null,u*=2}while(o>1);return t}function vt(t,n,e,r,i){return t=32767*(t-e)/i,n=32767*(n-r)/i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),n=16711935&(n|n<<8),n=252645135&(n|n<<4),n=858993459&(n|n<<2),n=1431655765&(n|n<<1),t|n<<1}function xt(t){var n=t,e=t;do{n.x<e.x&&(e=n),n=n.next}while(n!==t);return e}function yt(t,n,e,r,i,a,o,s){return(i-o)*(n-s)-(t-o)*(a-s)>=0&&(t-o)*(r-s)-(e-o)*(n-s)>=0&&(e-o)*(a-s)-(i-o)*(r-s)>=0}function dt(t,n){return t.next.i!==n.i&&t.prev.i!==n.i&&!bt(t,n)&&Lt(t,n)&&Lt(n,t)&&At(t,n)}function mt(t,n,e){return(n.y-t.y)*(e.x-n.x)-(n.x-t.x)*(e.y-n.y)}function Mt(t,n){return t.x===n.x&&t.y===n.y}function wt(t,n,e,r){return!!(Mt(t,n)&&Mt(e,r)||Mt(t,r)&&Mt(e,n))||mt(t,n,e)>0!=mt(t,n,r)>0&&mt(e,r,t)>0!=mt(e,r,n)>0}function bt(t,n){var e=t;do{if(e.i!==t.i&&e.next.i!==t.i&&e.i!==n.i&&e.next.i!==n.i&&wt(e,e.next,t,n))return!0;e=e.next}while(e!==t);return!1}function Lt(t,n){return mt(t.prev,t,t.next)<0?mt(t,n,t.next)>=0&&mt(t,t.prev,n)>=0:mt(t,n,t.prev)<0||mt(t,t.next,n)<0}function At(t,n){var e=t,r=!1,i=(t.x+n.x)/2,a=(t.y+n.y)/2;do{e.y>a!=e.next.y>a&&i<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next}while(e!==t);return r}function qt(t,n){var e=new _t(t.i,t.x,t.y),r=new _t(n.i,n.x,n.y),i=t.next,a=n.prev;return t.next=n,n.prev=t,e.next=i,i.prev=e,r.next=e,e.prev=r,a.next=r,r.prev=a,r}function kt(t,n,e,r){var i=new _t(t,n,e);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Pt(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function _t(t,n,e){this.i=t,this.x=n,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Et(t,n,e,r){for(var i=0,a=n,o=e-r;a<e;a+=r)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function St(t,n){var e=n.id,r=n.bbox,i=null==n.properties?{}:n.properties,a=Ct(t,n);return null==e&&null==r?{type:"Feature",properties:i,geometry:a}:null==r?{type:"Feature",id:e,properties:i,geometry:a}:{type:"Feature",id:e,bbox:r,properties:i,geometry:a}}function Ct(t,n){function e(t,n){n.length&&n.pop();for(var e=u[t<0?~t:t],r=0,i=e.length;r<i;++r)n.push(h(e[r],r));t<0&&Vn(n,i)}function r(t){return h(t)}function i(t){for(var n=[],r=0,i=t.length;r<i;++r)e(t[r],n);return n.length<2&&n.push(n[0]),n}function a(t){for(var n=i(t);n.length<4;)n.push(n[0]);return n}function o(t){return t.map(a)}function s(t){var n,e=t.type;switch(e){case"GeometryCollection":return{type:e,geometries:t.geometries.map(s)};case"Point":n=r(t.coordinates);break;case"MultiPoint":n=t.coordinates.map(r);break;case"LineString":n=i(t.arcs);break;case"MultiLineString":n=t.arcs.map(i);break;case"Polygon":n=o(t.arcs);break;case"MultiPolygon":n=t.arcs.map(o);break;default:return null}return{type:e,coordinates:n}}var h=In(t.transform),u=t.arcs;return s(n)}function Zt(t){for(var n,e=-1,r=t.length,i=t[r-1],a=0;++e<r;)n=i,i=t[e],a+=n[0]*i[1]-n[1]*i[0];return Math.abs(a)}function Tt(t,n){function e(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(e);break;case"Polygon":r(t.arcs);break;case"MultiPolygon":t.arcs.forEach(r)}}function r(t){t.forEach(function(n){n.forEach(function(n){(a[n=n<0?~n:n]||(a[n]=[])).push(t)})}),o.push(t)}function i(n){return Zt(Ct(t,{type:"Polygon",arcs:[n]}).coordinates[0])}var a={},o=[],s=[];return n.forEach(e),o.forEach(function(t){if(!t._){var n=[],e=[t];for(t._=1,s.push(n);t=e.pop();)n.push(t),t.forEach(function(t){t.forEach(function(t){a[t<0?~t:t].forEach(function(t){t._||(t._=1,e.push(t))})})})}}),o.forEach(function(t){delete t._}),{type:"MultiPolygon",arcs:s.map(function(n){var e,r=[];if(n.forEach(function(t){t.forEach(function(t){t.forEach(function(t){a[t<0?~t:t].length<2&&r.push(t)})})}),r=Yn(t,r),(e=r.length)>1)for(var o,s,h=1,u=i(r[0]);h<e;++h)(o=i(r[h]))>u&&(s=r[0],r[0]=r[h],r[h]=s,u=o);return r})}}function Ft(t){return function(n,e){return Dn(t(n),e)}}function zt(t,n){var e={},r={type:"Topology",objects:{triangles:{type:"GeometryCollection",geometries:[]}},arcs:[]};return t.forEach(function(t){var i=[];t.forEach(function(t,a){var o=t[0]<t[1]?t.join(","):t[1]+","+t[0],s=t.map(function(t){return n[t]});o in e?i.push(~e[o]):(i.push(e[o]=r.arcs.length),r.arcs.push(s))}),r.objects.triangles.geometries.push({type:"Polygon",area:Math.abs(tn(t.map(function(t){return n[t[0]]}))),arcs:[i]})}),r.objects.triangles.geometries.sort(function(t,n){return t.area-n.area}),r}function jt(t,n){for(var e=t.objects.triangles.geometries,r=Hn(function(t){return t.area}).left;e.length>n;)!function(){var n=e[0],i=On(e)[0][0],a=e[i],o=Tt(t,[n,a]);o.area=n.area+a.area,o.type="Polygon",o.arcs=o.arcs[0],e.splice(i,1),e.shift(),e.splice(r(e,o.area),0,o)}();if(n>e.length)throw new RangeError("Can't collapse topology into "+n+" pieces.");return Xn(t,t.objects.triangles).features.map(function(t){return t.geometry.coordinates[0].pop(),t.geometry.coordinates[0]})}function It(t){for(var n=zn(t.reduce(function(t,n){return t.concat([n[0]],[n[1]])},[])),e=[],r=0,i=n.length;r<i;r+=3)e.push([[n[r],n[r+1]],[n[r+1],n[r+2]],[n[r+2],n[r]]]);return e}function Vt(t,n,e){function r(t,n,o){void 0===n&&(n=[]),void 0===o&&(o=0);for(var s=0;s<t.length;s++){var h=t.splice(s,1),u=e[h[0]][n.length];o+u<i&&(t.length?r(t.slice(),n.concat(h),o+u):(i=o+u,a=n.concat(h))),t.length&&t.splice(s,0,h[0])}}var i=1/0,a=t.map(function(t,n){return n});return r(a),a}function Xt(t,n){var e=F(Y(t),Y(n));return e*e}function Yt(t,n,e){void 0===e&&(e={});var r=e.maxSegmentLength;void 0===r&&(r=10);var i=e.string;void 0===i&&(i=!0);var a=e.single;void 0===a&&(a=!1);var o=J(t,r);o.length<n.length+2&&W(o,n.length+2-o.length);var s,h=Qn(o,n.length),u=n.map(function(t){return J(t,r)}),c="string"==typeof t&&t;return a&&!n.every(function(t){return"string"==typeof t})||(s=n.slice(0)),Dt(h,u,{match:!0,string:i,single:a,t0:c,t1:s})}function Gt(t,n,e){void 0===e&&(e={});var r=e.maxSegmentLength;void 0===r&&(r=10);var i=e.string;void 0===i&&(i=!0);var a=e.single;void 0===a&&(a=!1);var o=Yt(n,t,{maxSegmentLength:r,string:i,single:a});return a?function(t){return o(1-t)}:o.map(function(t){return function(n){return t(1-n)}})}function Ot(t,n,e){void 0===e&&(e={});var r=e.maxSegmentLength;void 0===r&&(r=10);var i=e.string;void 0===i&&(i=!0);var a=e.single;if(void 0===a&&(a=!1),!Array.isArray(t)||!Array.isArray(n)||t.length!==n.length||!t.length)throw new TypeError(Zn);var o,s,h=function(t){return J(t,r)},u=t.map(h),c=n.map(h);return a?(t.every(function(t){return"string"==typeof t})&&(o=t.slice(0)),n.every(function(t){return"string"==typeof t})&&(s=n.slice(0))):(o=t.slice(0),s=n.slice(0)),Dt(u,c,{string:i,single:a,t0:o,t1:s,match:!1})}function Dt(t,n,e){void 0===e&&(e={});var r=e.string,i=e.single,a=e.t0,o=e.t1,s=e.match,h=s?Un(t,n):t.map(function(t,n){return n}),u=h.map(function(e,i){return tt(t[e],n[i],r)});if(s&&Array.isArray(a)&&(a=h.map(function(t){return a[t]})),i&&r&&(Array.isArray(a)&&(a=a.join(" ")),Array.isArray(o)&&(o=o.join(" "))),i){var c=r?function(t){return u.map(function(n){return n(t)}).join(" ")}:function(t){return u.map(function(n){return n(t)})};return r&&(a||o)?function(t){return t<1e-4&&a||1-t<1e-4&&o||c(t)}:c}return r?(a=Array.isArray(a)?a.map(function(t){return"string"==typeof t&&t}):[],o=Array.isArray(o)?o.map(function(t){return"string"==typeof t&&t}):[],u.map(function(t,n){return a[n]||o[n]?function(e){return e<1e-4&&a[n]||1-e<1e-4&&o[n]||t(e)}:t})):u}function Ht(t,n,e,r,i){return Rt(Bt(t,n,e),r,Jt(t,n,e),2*Math.PI*e,i)}function Nt(t,n,e,r,i){var a=Ht(n,e,r,t,i);return function(t){return a(1-t)}}function Qt(t,n,e,r,i,a){return Rt(Wt(t,n,e,r),i,Kt(t,n,e,r),2*e+2*r,a)}function Ut(t,n,e,r,i,a){var o=Qt(n,e,r,i,t,a);return function(t){return o(1-t)}}function Rt(t,n,e,r,i){void 0===i&&(i={});var a=i.maxSegmentLength;void 0===a&&(a=10);var o=i.string;void 0===o&&(o=!0);var s,h,u=J(n,a);return X(r)&&u.length<r/a&&W(u,Math.ceil(r/a-u.length)),s=t(u),h=I(s,u,o),o?function(t){return t<1e-4?e:h(t)}:h}function Bt(t,n,e){return function(r){var i=Y(r),a=en(r.concat([r[0]])),o=Math.atan2(r[0][1]-i[1],r[0][0]-i[0]),s=0;return r.map(function(i,h){var u;return h&&(s+=F(i,r[h-1])),u=o+2*Math.PI*(a?s/a:h/r.length),[Math.cos(u)*e+t,Math.sin(u)*e+n]})}}function Wt(t,n,e,r){return function(i){var a=Y(i),o=en(i.concat([i[0]])),s=Math.atan2(i[0][1]-a[1],i[0][0]-a[0]),h=0;s<0&&(s=2*Math.PI+s);var u=s/(2*Math.PI);return i.map(function(a,s){s&&(h+=F(a,i[s-1]));var c=$t((u+(o?h/o:s/i.length))%1);return[t+c[0]*e,n+c[1]*r]})}}function $t(t){return t<=1/8?[1,.5+4*t]:t<=3/8?[1.5-4*t,1]:t<=5/8?[0,2.5-4*t]:t<=7/8?[4*t-2.5,0]:[1,4*t-3.5]}function Jt(t,n,e){var r=t-e+","+n,i=t+e+","+n,a="A"+e+","+e+",0,1,1,";return"M"+r+a+i+a+r+"Z"}function Kt(t,n,e,r){var i=t+e,a=n+r;return"M"+t+","+n+"L"+i+","+n+"L"+i+","+a+"L"+t+","+a+"Z"}var tn=function(t){for(var n,e=-1,r=t.length,i=t[r-1],a=0;++e<r;)n=i,i=t[e],a+=n[1]*i[0]-n[0]*i[1];return a/2},nn=function(t){for(var n,e,r=-1,i=t.length,a=0,o=0,s=t[i-1],h=0;++r<i;)n=s,s=t[r],h+=e=n[0]*s[1]-s[0]*n[1],a+=(n[0]+s[0])*e,o+=(n[1]+s[1])*e;return h*=3,[a/h,o/h]},en=function(t){for(var n,e,r=-1,i=t.length,a=t[i-1],o=a[0],s=a[1],h=0;++r<i;)n=o,e=s,a=t[r],o=a[0],s=a[1],n-=o,e-=s,h+=Math.sqrt(n*n+e*e);return h},rn={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},an=[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],on=function(t){var n=new a(t),e=n.max;for(o(n);n.index<e&&!n.err.length;)u(n);return n.err.length?n.result=[]:n.result.length&&("mM".indexOf(n.result[0][0])<0?(n.err="SvgPath: string should start with `M` or `m`",n.result=[]):n.result[0][0]="M"),{err:n.err,segments:n.result}};f.prototype.matrix=function(t){return 1===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&0===t[4]&&0===t[5]?this:(this.cache=null,this.queue.push(t),this)},f.prototype.translate=function(t,n){return 0===t&&0===n||(this.cache=null,this.queue.push([1,0,0,1,t,n])),this},f.prototype.scale=function(t,n){return 1===t&&1===n||(this.cache=null,this.queue.push([t,0,0,n,0,0])),this},f.prototype.rotate=function(t,n,e){var r,i,a;return 0!==t&&(this.translate(n,e),r=t*Math.PI/180,i=Math.cos(r),a=Math.sin(r),this.queue.push([i,a,-a,i,0,0]),this.cache=null,this.translate(-n,-e)),this},f.prototype.skewX=function(t){return 0!==t&&(this.cache=null,this.queue.push([1,0,Math.tan(t*Math.PI/180),1,0,0])),this},f.prototype.skewY=function(t){return 0!==t&&(this.cache=null,this.queue.push([1,Math.tan(t*Math.PI/180),0,1,0,0])),this},f.prototype.toArray=function(){var t=this;if(this.cache)return this.cache;if(!this.queue.length)return this.cache=[1,0,0,1,0,0],this.cache;if(this.cache=this.queue[0],1===this.queue.length)return this.cache;for(var n=1;n<this.queue.length;n++)t.cache=c(t.cache,t.queue[n]);return this.cache},f.prototype.calc=function(t,n,e){var r;return this.queue.length?(this.cache||(this.cache=this.toArray()),r=this.cache,[t*r[0]+n*r[2]+(e?0:r[4]),t*r[1]+n*r[3]+(e?0:r[5])]):[t,n]};var sn=f,hn={matrix:!0,scale:!0,rotate:!0,translate:!0,skewX:!0,skewY:!0},un=/\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,cn=/[\s,]+/,fn=function(t){var n,e,r=new sn;return t.split(un).forEach(function(t){if(t.length){if(void 0!==hn[t])return void(n=t);switch(e=t.split(cn).map(function(t){return+t||0}),n){case"matrix":return void(6===e.length&&r.matrix(e));case"scale":return void(1===e.length?r.scale(e[0],e[0]):2===e.length&&r.scale(e[0],e[1]));case"rotate":return void(1===e.length?r.rotate(e[0],0,0):3===e.length&&r.rotate(e[0],e[1],e[2]));case"translate":return void(1===e.length?r.translate(e[0],0):2===e.length&&r.translate(e[0],e[1]));case"skewX":return void(1===e.length&&r.skewX(e[0]));case"skewY":return void(1===e.length&&r.skewY(e[0]))}}}),r},ln=2*Math.PI,pn=function(t,n,e,r,i,a,o,s,h){var u=Math.sin(h*ln/360),c=Math.cos(h*ln/360),f=c*(t-e)/2+u*(n-r)/2,l=-u*(t-e)/2+c*(n-r)/2;if(0===f&&0===l)return[];if(0===o||0===s)return[];o=Math.abs(o),s=Math.abs(s);var v=f*f/(o*o)+l*l/(s*s);v>1&&(o*=Math.sqrt(v),s*=Math.sqrt(v));var x=p(t,n,e,r,i,a,o,s,u,c),y=[],d=x[2],m=x[3],M=Math.max(Math.ceil(Math.abs(m)/(ln/4)),1);m/=M;for(var w=0;w<M;w++)y.push(g(d,m)),d+=m;return y.map(function(t){for(var n=0;n<t.length;n+=2){var e=t[n+0],r=t[n+1];e*=o,r*=s;var i=c*e-u*r,a=u*e+c*r;t[n+0]=i+x[0],t[n+1]=a+x[1]}return t})},gn=Math.PI/180;v.prototype.transform=function(t){var n=Math.cos(this.ax*gn),e=Math.sin(this.ax*gn),r=[this.rx*(t[0]*n+t[2]*e),this.rx*(t[1]*n+t[3]*e),this.ry*(-t[0]*e+t[2]*n),this.ry*(-t[1]*e+t[3]*n)],i=r[0]*r[0]+r[2]*r[2],a=r[1]*r[1]+r[3]*r[3],o=((r[0]-r[3])*(r[0]-r[3])+(r[2]+r[1])*(r[2]+r[1]))*((r[0]+r[3])*(r[0]+r[3])+(r[2]-r[1])*(r[2]-r[1])),s=(i+a)/2;if(o<1e-10*s)return this.rx=this.ry=Math.sqrt(s),this.ax=0,this;var h=r[0]*r[1]+r[2]*r[3];o=Math.sqrt(o);var u=s+o/2,c=s-o/2;return this.ax=Math.abs(h)<1e-10&&Math.abs(u-a)<1e-10?90:180*Math.atan(Math.abs(h)>Math.abs(u-a)?(u-i)/h:h/(u-a))/Math.PI,this.ax>=0?(this.rx=Math.sqrt(u),this.ry=Math.sqrt(c)):(this.ax+=90,this.rx=Math.sqrt(c),this.ry=Math.sqrt(u)),this},v.prototype.isDegenerate=function(){return this.rx<1e-10*this.ry||this.ry<1e-10*this.rx};var vn=v;x.prototype.__matrix=function(t){var n,e=this;t.queue.length&&this.iterate(function(r,i,a,o){var s,h,u,c;switch(r[0]){case"v":s=t.calc(0,r[1],!0),h=0===s[0]?["v",s[1]]:["l",s[0],s[1]];break;case"V":s=t.calc(a,r[1],!1),h=s[0]===t.calc(a,o,!1)[0]?["V",s[1]]:["L",s[0],s[1]];break;case"h":s=t.calc(r[1],0,!0),h=0===s[1]?["h",s[0]]:["l",s[0],s[1]];break;case"H":s=t.calc(r[1],o,!1),h=s[1]===t.calc(a,o,!1)[1]?["H",s[0]]:["L",s[0],s[1]];break;case"a":case"A":var f=t.toArray(),l=vn(r[1],r[2],r[3]).transform(f);if(f[0]*f[3]-f[1]*f[2]<0&&(r[5]=r[5]?"0":"1"),s=t.calc(r[6],r[7],"a"===r[0]),"A"===r[0]&&r[6]===a&&r[7]===o||"a"===r[0]&&0===r[6]&&0===r[7]){h=["a"===r[0]?"l":"L",s[0],s[1]];break}h=l.isDegenerate()?["a"===r[0]?"l":"L",s[0],s[1]]:[r[0],l.rx,l.ry,l.ax,r[4],r[5],s[0],s[1]];break;case"m":c=i>0,s=t.calc(r[1],r[2],c),h=["m",s[0],s[1]];break;default:for(u=r[0],h=[u],c=u.toLowerCase()===u,n=1;n<r.length;n+=2)s=t.calc(r[n],r[n+1],c),h.push(s[0],s[1])}e.segments[i]=h},!0)},x.prototype.__evaluateStack=function(){var t,n,e=this;if(this.__stack.length){if(1===this.__stack.length)return this.__matrix(this.__stack[0]),void(this.__stack=[]);for(t=sn(),n=this.__stack.length;--n>=0;)t.matrix(e.__stack[n].toArray());this.__matrix(t),this.__stack=[]}},x.prototype.toString=function(){var t,n,e=this,r=[];this.__evaluateStack();for(var i=0;i<this.segments.length;i++)n=e.segments[i][0],t=i>0&&"m"!==n&&"M"!==n&&n===e.segments[i-1][0],r=r.concat(t?e.segments[i].slice(1):e.segments[i]);return r.join(" ").replace(/ ?([achlmqrstvz]) ?/gi,"$1").replace(/ \-/g,"-").replace(/zm/g,"z m")},x.prototype.translate=function(t,n){return this.__stack.push(sn().translate(t,n||0)),this},x.prototype.scale=function(t,n){return this.__stack.push(sn().scale(t,n||0===n?n:t)),this},x.prototype.rotate=function(t,n,e){return this.__stack.push(sn().rotate(t,n||0,e||0)),this},x.prototype.skewX=function(t){return this.__stack.push(sn().skewX(t)),this},x.prototype.skewY=function(t){return this.__stack.push(sn().skewY(t)),this},x.prototype.matrix=function(t){return this.__stack.push(sn().matrix(t)),this},x.prototype.transform=function(t){return t.trim()?(this.__stack.push(fn(t)),this):this},x.prototype.round=function(t){var n,e=0,r=0,i=0,a=0;return t=t||0,this.__evaluateStack(),this.segments.forEach(function(o){var s=o[0].toLowerCase()===o[0];switch(o[0]){case"H":case"h":return s&&(o[1]+=i),i=o[1]-o[1].toFixed(t),void(o[1]=+o[1].toFixed(t));case"V":case"v":return s&&(o[1]+=a),a=o[1]-o[1].toFixed(t),void(o[1]=+o[1].toFixed(t));case"Z":case"z":return i=e,void(a=r);case"M":case"m":return s&&(o[1]+=i,o[2]+=a),i=o[1]-o[1].toFixed(t),a=o[2]-o[2].toFixed(t),e=i,r=a,o[1]=+o[1].toFixed(t),void(o[2]=+o[2].toFixed(t));case"A":case"a":return s&&(o[6]+=i,o[7]+=a),i=o[6]-o[6].toFixed(t),a=o[7]-o[7].toFixed(t),o[1]=+o[1].toFixed(t),o[2]=+o[2].toFixed(t),o[3]=+o[3].toFixed(t+2),o[6]=+o[6].toFixed(t),void(o[7]=+o[7].toFixed(t));default:return n=o.length,s&&(o[n-2]+=i,o[n-1]+=a),i=o[n-2]-o[n-2].toFixed(t),a=o[n-1]-o[n-1].toFixed(t),void o.forEach(function(n,e){e&&(o[e]=+o[e].toFixed(t))})}}),this},x.prototype.iterate=function(t,n){var e,r,i,a=this.segments,o={},s=!1,h=0,u=0,c=0,f=0;if(n||this.__evaluateStack(),a.forEach(function(n,e){var r=t(n,e,h,u);Array.isArray(r)&&(o[e]=r,s=!0);var i=n[0]===n[0].toLowerCase();switch(n[0]){case"m":case"M":return h=n[1]+(i?h:0),u=n[2]+(i?u:0),c=h,void(f=u);case"h":case"H":return void(h=n[1]+(i?h:0));case"v":case"V":return void(u=n[1]+(i?u:0));case"z":case"Z":return h=c,void(u=f);default:h=n[n.length-2]+(i?h:0),u=n[n.length-1]+(i?u:0)}}),!s)return this;for(i=[],e=0;e<a.length;e++)if(void 0!==o[e])for(r=0;r<o[e].length;r++)i.push(o[e][r]);else i.push(a[e]);return this.segments=i,this},x.prototype.abs=function(){return this.iterate(function(t,n,e,r){var i,a=t[0],o=a.toUpperCase();if(a!==o)switch(t[0]=o,a){case"v":return void(t[1]+=r);case"a":return t[6]+=e,void(t[7]+=r);default:for(i=1;i<t.length;i++)t[i]+=i%2?e:r}},!0),this},x.prototype.rel=function(){return this.iterate(function(t,n,e,r){var i,a=t[0],o=a.toLowerCase();if(a!==o&&(0!==n||"M"!==a))switch(t[0]=o,a){case"V":return void(t[1]-=r);case"A":return t[6]-=e,void(t[7]-=r);default:for(i=1;i<t.length;i++)t[i]-=i%2?e:r}},!0),this},x.prototype.unarc=function(){return this.iterate(function(t,n,e,r){var i,a,o,s=[],h=t[0];return"A"!==h&&"a"!==h?null:("a"===h?(a=e+t[6],o=r+t[7]):(a=t[6],o=t[7]),i=pn(e,r,a,o,t[4],t[5],t[1],t[2],t[3]),0===i.length?[["a"===t[0]?"l":"L",t[6],t[7]]]:(i.forEach(function(t){s.push(["C",t[2],t[3],t[4],t[5],t[6],t[7]])}),s))}),this},x.prototype.unshort=function(){var t,n,e,r,i,a=this.segments;return this.iterate(function(o,s,h,u){var c,f=o[0],l=f.toUpperCase();s&&("T"===l?(c="t"===f,e=a[s-1],"Q"===e[0]?(t=e[1]-h,n=e[2]-u):"q"===e[0]?(t=e[1]-e[3],n=e[2]-e[4]):(t=0,n=0),r=-t,i=-n,c||(r+=h,i+=u),a[s]=[c?"q":"Q",r,i,o[1],o[2]]):"S"===l&&(c="s"===f,e=a[s-1],"C"===e[0]?(t=e[3]-h,n=e[4]-u):"c"===e[0]?(t=e[3]-e[5],n=e[4]-e[6]):(t=0,n=0),r=-t,i=-n,c||(r+=h,i+=u),a[s]=[c?"c":"C",r,i,o[1],o[2],o[3],o[4]]))}),this};var xn=x,yn=xn,dn={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},mn=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Mn=function(t){var n=[];return t.replace(mn,function(t,e,r){var i=e.toLowerCase();for(r=y(r),"m"===i&&r.length>2&&(n.push([e].concat(r.splice(0,2))),i="l",e="m"===e?"l":"L");r.length>=0;){if(r.length===dn[i])return r.unshift(e),n.push(r);if(r.length<dn[i])throw new Error("malformed path data");n.push([e].concat(r.splice(0,dn[i])))}}),n},wn=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi,bn=function(t,n,e,r,i,a,o,s){return new d(t,n,e,r,i,a,o,s)};d.prototype={constructor:d,init:function(){this.length=this.getArcLength([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y])},getTotalLength:function(){return this.length},getPointAtLength:function(t){var n=w(t,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]);return this.getPoint([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],n)},getTangentAtLength:function(t){var n=w(t,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]),e=this.getDerivative([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],n),r=Math.sqrt(e.x*e.x+e.y*e.y);return r>0?{x:e.x/r,y:e.y/r}:{x:0,y:0}},getPropertiesAtLength:function(t){var n,e=w(t,this.length,this.getArcLength,[this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y]),r=this.getDerivative([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],e),i=Math.sqrt(r.x*r.x+r.y*r.y);n=i>0?{x:r.x/i,y:r.y/i}:{
x:0,y:0};var a=this.getPoint([this.a.x,this.b.x,this.c.x,this.d.x],[this.a.y,this.b.y,this.c.y,this.d.y],e);return{x:a.x,y:a.y,tangentX:n.x,tangentY:n.y}}};var Ln=[[],[],[-.5773502691896257,.5773502691896257],[0,-.7745966692414834,.7745966692414834],[-.33998104358485626,.33998104358485626,-.8611363115940526,.8611363115940526],[0,-.5384693101056831,.5384693101056831,-.906179845938664,.906179845938664],[.6612093864662645,-.6612093864662645,-.2386191860831969,.2386191860831969,-.932469514203152,.932469514203152],[0,.4058451513773972,-.4058451513773972,-.7415311855993945,.7415311855993945,-.9491079123427585,.9491079123427585],[-.1834346424956498,.1834346424956498,-.525532409916329,.525532409916329,-.7966664774136267,.7966664774136267,-.9602898564975363,.9602898564975363],[0,-.8360311073266358,.8360311073266358,-.9681602395076261,.9681602395076261,-.3242534234038089,.3242534234038089,-.6133714327005904,.6133714327005904],[-.14887433898163122,.14887433898163122,-.4333953941292472,.4333953941292472,-.6794095682990244,.6794095682990244,-.8650633666889845,.8650633666889845,-.9739065285171717,.9739065285171717],[0,-.26954315595234496,.26954315595234496,-.5190961292068118,.5190961292068118,-.7301520055740494,.7301520055740494,-.8870625997680953,.8870625997680953,-.978228658146057,.978228658146057],[-.1252334085114689,.1252334085114689,-.3678314989981802,.3678314989981802,-.5873179542866175,.5873179542866175,-.7699026741943047,.7699026741943047,-.9041172563704749,.9041172563704749,-.9815606342467192,.9815606342467192],[0,-.2304583159551348,.2304583159551348,-.44849275103644687,.44849275103644687,-.6423493394403402,.6423493394403402,-.8015780907333099,.8015780907333099,-.9175983992229779,.9175983992229779,-.9841830547185881,.9841830547185881],[-.10805494870734367,.10805494870734367,-.31911236892788974,.31911236892788974,-.5152486363581541,.5152486363581541,-.6872929048116855,.6872929048116855,-.827201315069765,.827201315069765,-.9284348836635735,.9284348836635735,-.9862838086968123,.9862838086968123],[0,-.20119409399743451,.20119409399743451,-.3941513470775634,.3941513470775634,-.5709721726085388,.5709721726085388,-.7244177313601701,.7244177313601701,-.8482065834104272,.8482065834104272,-.937273392400706,.937273392400706,-.9879925180204854,.9879925180204854],[-.09501250983763744,.09501250983763744,-.2816035507792589,.2816035507792589,-.45801677765722737,.45801677765722737,-.6178762444026438,.6178762444026438,-.755404408355003,.755404408355003,-.8656312023878318,.8656312023878318,-.9445750230732326,.9445750230732326,-.9894009349916499,.9894009349916499],[0,-.17848418149584785,.17848418149584785,-.3512317634538763,.3512317634538763,-.5126905370864769,.5126905370864769,-.6576711592166907,.6576711592166907,-.7815140038968014,.7815140038968014,-.8802391537269859,.8802391537269859,-.9506755217687678,.9506755217687678,-.9905754753144174,.9905754753144174],[-.0847750130417353,.0847750130417353,-.2518862256915055,.2518862256915055,-.41175116146284263,.41175116146284263,-.5597708310739475,.5597708310739475,-.6916870430603532,.6916870430603532,-.8037049589725231,.8037049589725231,-.8926024664975557,.8926024664975557,-.9558239495713977,.9558239495713977,-.9915651684209309,.9915651684209309],[0,-.16035864564022537,.16035864564022537,-.31656409996362983,.31656409996362983,-.46457074137596094,.46457074137596094,-.600545304661681,.600545304661681,-.7209661773352294,.7209661773352294,-.8227146565371428,.8227146565371428,-.9031559036148179,.9031559036148179,-.96020815213483,.96020815213483,-.9924068438435844,.9924068438435844],[-.07652652113349734,.07652652113349734,-.22778585114164507,.22778585114164507,-.37370608871541955,.37370608871541955,-.5108670019508271,.5108670019508271,-.636053680726515,.636053680726515,-.7463319064601508,.7463319064601508,-.8391169718222188,.8391169718222188,-.912234428251326,.912234428251326,-.9639719272779138,.9639719272779138,-.9931285991850949,.9931285991850949],[0,-.1455618541608951,.1455618541608951,-.2880213168024011,.2880213168024011,-.4243421202074388,.4243421202074388,-.5516188358872198,.5516188358872198,-.6671388041974123,.6671388041974123,-.7684399634756779,.7684399634756779,-.8533633645833173,.8533633645833173,-.9200993341504008,.9200993341504008,-.9672268385663063,.9672268385663063,-.9937521706203895,.9937521706203895],[-.06973927331972223,.06973927331972223,-.20786042668822127,.20786042668822127,-.34193582089208424,.34193582089208424,-.469355837986757,.469355837986757,-.5876404035069116,.5876404035069116,-.6944872631866827,.6944872631866827,-.7878168059792081,.7878168059792081,-.8658125777203002,.8658125777203002,-.926956772187174,.926956772187174,-.9700604978354287,.9700604978354287,-.9942945854823992,.9942945854823992],[0,-.1332568242984661,.1332568242984661,-.26413568097034495,.26413568097034495,-.3903010380302908,.3903010380302908,-.5095014778460075,.5095014778460075,-.6196098757636461,.6196098757636461,-.7186613631319502,.7186613631319502,-.8048884016188399,.8048884016188399,-.8767523582704416,.8767523582704416,-.9329710868260161,.9329710868260161,-.9725424712181152,.9725424712181152,-.9947693349975522,.9947693349975522],[-.06405689286260563,.06405689286260563,-.1911188674736163,.1911188674736163,-.3150426796961634,.3150426796961634,-.4337935076260451,.4337935076260451,-.5454214713888396,.5454214713888396,-.6480936519369755,.6480936519369755,-.7401241915785544,.7401241915785544,-.820001985973903,.820001985973903,-.8864155270044011,.8864155270044011,-.9382745520027328,.9382745520027328,-.9747285559713095,.9747285559713095,-.9951872199970213,.9951872199970213]],An=[[],[],[1,1],[.8888888888888888,.5555555555555556,.5555555555555556],[.6521451548625461,.6521451548625461,.34785484513745385,.34785484513745385],[.5688888888888889,.47862867049936647,.47862867049936647,.23692688505618908,.23692688505618908],[.3607615730481386,.3607615730481386,.46791393457269104,.46791393457269104,.17132449237917036,.17132449237917036],[.4179591836734694,.3818300505051189,.3818300505051189,.27970539148927664,.27970539148927664,.1294849661688697,.1294849661688697],[.362683783378362,.362683783378362,.31370664587788727,.31370664587788727,.22238103445337448,.22238103445337448,.10122853629037626,.10122853629037626],[.3302393550012598,.1806481606948574,.1806481606948574,.08127438836157441,.08127438836157441,.31234707704000286,.31234707704000286,.26061069640293544,.26061069640293544],[.29552422471475287,.29552422471475287,.26926671930999635,.26926671930999635,.21908636251598204,.21908636251598204,.1494513491505806,.1494513491505806,.06667134430868814,.06667134430868814],[.2729250867779006,.26280454451024665,.26280454451024665,.23319376459199048,.23319376459199048,.18629021092773426,.18629021092773426,.1255803694649046,.1255803694649046,.05566856711617366,.05566856711617366],[.24914704581340277,.24914704581340277,.2334925365383548,.2334925365383548,.20316742672306592,.20316742672306592,.16007832854334622,.16007832854334622,.10693932599531843,.10693932599531843,.04717533638651183,.04717533638651183],[.2325515532308739,.22628318026289723,.22628318026289723,.2078160475368885,.2078160475368885,.17814598076194574,.17814598076194574,.13887351021978725,.13887351021978725,.09212149983772845,.09212149983772845,.04048400476531588,.04048400476531588],[.2152638534631578,.2152638534631578,.2051984637212956,.2051984637212956,.18553839747793782,.18553839747793782,.15720316715819355,.15720316715819355,.12151857068790319,.12151857068790319,.08015808715976021,.08015808715976021,.03511946033175186,.03511946033175186],[.2025782419255613,.19843148532711158,.19843148532711158,.1861610000155622,.1861610000155622,.16626920581699392,.16626920581699392,.13957067792615432,.13957067792615432,.10715922046717194,.10715922046717194,.07036604748810812,.07036604748810812,.03075324199611727,.03075324199611727],[.1894506104550685,.1894506104550685,.18260341504492358,.18260341504492358,.16915651939500254,.16915651939500254,.14959598881657674,.14959598881657674,.12462897125553388,.12462897125553388,.09515851168249279,.09515851168249279,.062253523938647894,.062253523938647894,.027152459411754096,.027152459411754096],[.17944647035620653,.17656270536699264,.17656270536699264,.16800410215645004,.16800410215645004,.15404576107681028,.15404576107681028,.13513636846852548,.13513636846852548,.11188384719340397,.11188384719340397,.08503614831717918,.08503614831717918,.0554595293739872,.0554595293739872,.02414830286854793,.02414830286854793],[.1691423829631436,.1691423829631436,.16427648374583273,.16427648374583273,.15468467512626524,.15468467512626524,.14064291467065065,.14064291467065065,.12255520671147846,.12255520671147846,.10094204410628717,.10094204410628717,.07642573025488905,.07642573025488905,.0497145488949698,.0497145488949698,.02161601352648331,.02161601352648331],[.1610544498487837,.15896884339395434,.15896884339395434,.15276604206585967,.15276604206585967,.1426067021736066,.1426067021736066,.12875396253933621,.12875396253933621,.11156664554733399,.11156664554733399,.09149002162245,.09149002162245,.06904454273764123,.06904454273764123,.0448142267656996,.0448142267656996,.019461788229726478,.019461788229726478],[.15275338713072584,.15275338713072584,.14917298647260374,.14917298647260374,.14209610931838204,.14209610931838204,.13168863844917664,.13168863844917664,.11819453196151841,.11819453196151841,.10193011981724044,.10193011981724044,.08327674157670475,.08327674157670475,.06267204833410907,.06267204833410907,.04060142980038694,.04060142980038694,.017614007139152118,.017614007139152118],[.14608113364969041,.14452440398997005,.14452440398997005,.13988739479107315,.13988739479107315,.13226893863333747,.13226893863333747,.12183141605372853,.12183141605372853,.10879729916714838,.10879729916714838,.09344442345603386,.09344442345603386,.0761001136283793,.0761001136283793,.057134425426857205,.057134425426857205,.036953789770852494,.036953789770852494,.016017228257774335,.016017228257774335],[.13925187285563198,.13925187285563198,.13654149834601517,.13654149834601517,.13117350478706238,.13117350478706238,.12325237681051242,.12325237681051242,.11293229608053922,.11293229608053922,.10041414444288096,.10041414444288096,.08594160621706773,.08594160621706773,.06979646842452049,.06979646842452049,.052293335152683286,.052293335152683286,.03377490158481415,.03377490158481415,.0146279952982722,.0146279952982722],[.13365457218610619,.1324620394046966,.1324620394046966,.12890572218808216,.12890572218808216,.12304908430672953,.12304908430672953,.11499664022241136,.11499664022241136,.10489209146454141,.10489209146454141,.09291576606003515,.09291576606003515,.07928141177671895,.07928141177671895,.06423242140852585,.06423242140852585,.04803767173108467,.04803767173108467,.030988005856979445,.030988005856979445,.013411859487141771,.013411859487141771],[.12793819534675216,.12793819534675216,.1258374563468283,.1258374563468283,.12167047292780339,.12167047292780339,.1155056680537256,.1155056680537256,.10744427011596563,.10744427011596563,.09761865210411388,.09761865210411388,.08619016153195327,.08619016153195327,.0733464814110803,.0733464814110803,.05929858491543678,.05929858491543678,.04427743881741981,.04427743881741981,.028531388628933663,.028531388628933663,.0123412297999872,.0123412297999872]],qn=[[1],[1,1],[1,2,1],[1,3,3,1]],kn=2*Math.PI,Pn=function(t,n,e,r,i,a,o,s,h){var u=Math.sin(i*kn/360),c=Math.cos(i*kn/360),f=c*(t-s)/2+u*(n-h)/2,l=-u*(t-s)/2+c*(n-h)/2;if(0===f&&0===l)return[];if(0===e||0===r)return[];e=Math.abs(e),r=Math.abs(r);var p=f*f/(e*e)+l*l/(r*r);p>1&&(e*=Math.sqrt(p),r*=Math.sqrt(p));var g=S(t,n,s,h,a,o,e,r,u,c),v=[],x=g[2],y=g[3],d=Math.max(Math.ceil(Math.abs(y)/(kn/4)),1);y/=d;for(var m=0;m<d;m++)v.push(C(x,y)),x+=y;return v.map(function(t){for(var n=0;n<t.length;n+=2){var i=t[n+0],a=t[n+1];i*=e,a*=r;var o=c*i-u*a,s=u*i+c*a;t[n+0]=o+g[0],t[n+1]=s+g[1]}return t})},_n=function(t,n,e,r,i,a,o,s,h){return new Z(t,n,e,r,i,a,o,s,h)};Z.prototype={constructor:Z,init:function(){},getTotalLength:function(){return this.length},getPointAtLength:function(t){var n=this;t<0?t=0:t>this.length&&(t=this.length);for(var e=this.partialLengths.length-1;this.partialLengths[e]>=t&&this.partialLengths[e]>0;)e--;e<this.partialLengths.length-1&&e++;for(var r=0,i=0;i<e;i++)r+=n.partialLengths[i];return this.curves[e].getPointAtLength(t-r)},getTangentAtLength:function(t){var n=this;t<0?t=0:t>this.length&&(t=this.length);for(var e=this.partialLengths.length-1;this.partialLengths[e]>=t&&this.partialLengths[e]>0;)e--;e<this.partialLengths.length-1&&e++;for(var r=0,i=0;i<e;i++)r+=n.partialLengths[i];return this.curves[e].getTangentAtLength(t-r)},getPropertiesAtLength:function(t){var n=this.getTangentAtLength(t),e=this.getPointAtLength(t);return{x:e.x,y:e.y,tangentX:n.x,tangentY:n.y}}};var En=function(t,n,e,r){return new T(t,n,e,r)};T.prototype.getTotalLength=function(){return Math.sqrt(Math.pow(this.x0-this.x1,2)+Math.pow(this.y0-this.y1,2))},T.prototype.getPointAtLength=function(t){var n=t/Math.sqrt(Math.pow(this.x0-this.x1,2)+Math.pow(this.y0-this.y1,2)),e=(this.x1-this.x0)*n,r=(this.y1-this.y0)*n;return{x:this.x0+e,y:this.y0+r}},T.prototype.getTangentAtLength=function(){var t=Math.sqrt((this.x1-this.x0)*(this.x1-this.x0)+(this.y1-this.y0)*(this.y1-this.y0));return{x:(this.x1-this.x0)/t,y:(this.y1-this.y0)/t}},T.prototype.getPropertiesAtLength=function(t){var n=this.getPointAtLength(t),e=this.getTangentAtLength();return{x:n.x,y:n.y,tangentX:e.x,tangentY:e.y}};var Sn=function(t){function n(t){if(!t)return null;for(var a,o=Mn(t),s=[0,0],h=[0,0],u=0;u<o.length;u++)"M"===o[u][0]?(s=[o[u][1],o[u][2]],i.push(null)):"m"===o[u][0]?(s=[o[u][1]+s[0],o[u][2]+s[1]],i.push(null)):"L"===o[u][0]?(e+=Math.sqrt(Math.pow(s[0]-o[u][1],2)+Math.pow(s[1]-o[u][2],2)),i.push(new En(s[0],o[u][1],s[1],o[u][2])),s=[o[u][1],o[u][2]]):"l"===o[u][0]?(e+=Math.sqrt(Math.pow(o[u][1],2)+Math.pow(o[u][2],2)),i.push(new En(s[0],o[u][1]+s[0],s[1],o[u][2]+s[1])),s=[o[u][1]+s[0],o[u][2]+s[1]]):"H"===o[u][0]?(e+=Math.abs(s[0]-o[u][1]),i.push(new En(s[0],o[u][1],s[1],s[1])),s[0]=o[u][1]):"h"===o[u][0]?(e+=Math.abs(o[u][1]),i.push(new En(s[0],s[0]+o[u][1],s[1],s[1])),s[0]=o[u][1]+s[0]):"V"===o[u][0]?(e+=Math.abs(s[1]-o[u][1]),i.push(new En(s[0],s[0],s[1],o[u][1])),s[1]=o[u][1]):"v"===o[u][0]?(e+=Math.abs(o[u][1]),i.push(new En(s[0],s[0],s[1],s[1]+o[u][1])),s[1]=o[u][1]+s[1]):"z"===o[u][0]||"Z"===o[u][0]?(e+=Math.sqrt(Math.pow(o[0][1]-s[0],2)+Math.pow(o[0][2]-s[1],2)),i.push(new En(s[0],o[0][1],s[1],o[0][2])),s=[o[0][1],o[0][2]]):"C"===o[u][0]?(a=new bn(s[0],s[1],o[u][1],o[u][2],o[u][3],o[u][4],o[u][5],o[u][6]),e+=a.getTotalLength(),s=[o[u][5],o[u][6]],i.push(a)):"c"===o[u][0]?(a=new bn(s[0],s[1],s[0]+o[u][1],s[1]+o[u][2],s[0]+o[u][3],s[1]+o[u][4],s[0]+o[u][5],s[1]+o[u][6]),e+=a.getTotalLength(),s=[o[u][5]+s[0],o[u][6]+s[1]],i.push(a)):"S"===o[u][0]?(a=u>0&&["C","c","S","s"].indexOf(o[u-1][0])>-1?new bn(s[0],s[1],2*s[0]-o[u-1][o[u-1].length-4],2*s[1]-o[u-1][o[u-1].length-3],o[u][1],o[u][2],o[u][3],o[u][4]):new bn(s[0],s[1],s[0],s[1],o[u][1],o[u][2],o[u][3],o[u][4]),e+=a.getTotalLength(),s=[o[u][3],o[u][4]],i.push(a)):"s"===o[u][0]?(a=u>0&&["C","c","S","s"].indexOf(o[u-1][0])>-1?new bn(s[0],s[1],s[0]+a.d.x-a.c.x,s[1]+a.d.y-a.c.y,s[0]+o[u][1],s[1]+o[u][2],s[0]+o[u][3],s[1]+o[u][4]):new bn(s[0],s[1],s[0],s[1],s[0]+o[u][1],s[1]+o[u][2],s[0]+o[u][3],s[1]+o[u][4]),e+=a.getTotalLength(),s=[o[u][3]+s[0],o[u][4]+s[1]],i.push(a)):"Q"===o[u][0]?(a=new bn(s[0],s[1],o[u][1],o[u][2],o[u][3],o[u][4]),e+=a.getTotalLength(),i.push(a),s=[o[u][3],o[u][4]],h=[o[u][1],o[u][2]]):"q"===o[u][0]?(a=new bn(s[0],s[1],s[0]+o[u][1],s[1]+o[u][2],s[0]+o[u][3],s[1]+o[u][4]),e+=a.getTotalLength(),h=[s[0]+o[u][1],s[1]+o[u][2]],s=[o[u][3]+s[0],o[u][4]+s[1]],i.push(a)):"T"===o[u][0]?(a=u>0&&["Q","q","T","t"].indexOf(o[u-1][0])>-1?new bn(s[0],s[1],2*s[0]-h[0],2*s[1]-h[1],o[u][1],o[u][2]):new En(s[0],o[u][1],s[1],o[u][2]),i.push(a),e+=a.getTotalLength(),h=[2*s[0]-h[0],2*s[1]-h[1]],s=[o[u][1],o[u][2]]):"t"===o[u][0]?(a=u>0&&["Q","q","T","t"].indexOf(o[u-1][0])>-1?new bn(s[0],s[1],2*s[0]-h[0],2*s[1]-h[1],s[0]+o[u][1],s[1]+o[u][2]):new En(s[0],s[0]+o[u][1],s[1],s[1]+o[u][2]),e+=a.getTotalLength(),h=[2*s[0]-h[0],2*s[1]-h[1]],s=[o[u][1]+s[0],o[u][2]+s[0]],i.push(a)):"A"===o[u][0]?(a=new _n(s[0],s[1],o[u][1],o[u][2],o[u][3],o[u][4],o[u][5],o[u][6],o[u][7]),e+=a.getTotalLength(),s=[o[u][6],o[u][7]],i.push(a)):"a"===o[u][0]&&(a=new _n(s[0],s[1],o[u][1],o[u][2],o[u][3],o[u][4],o[u][5],s[0]+o[u][6],s[1]+o[u][7]),e+=a.getTotalLength(),s=[s[0]+o[u][6],s[1]+o[u][7]],i.push(a)),r.push(e);return n}var e=0,r=[],i=[];n.getTotalLength=function(){return e},n.getPointAtLength=function(t){var n=a(t);return i[n.i].getPointAtLength(n.fraction)},n.getTangentAtLength=function(t){var n=a(t);return i[n.i].getTangentAtLength(n.fraction)},n.getPropertiesAtLength=function(t){var n=a(t);return i[n.i].getPropertiesAtLength(n.fraction)};var a=function(t){t<0?t=0:t>e&&(t=e);for(var n=r.length-1;r[n]>=t&&r[n]>0;)n--;return n++,{fraction:t-r[n-1],i:n}};return n(t)},Cn='All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n',Zn="flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).",Tn=function(t,n){for(var e,r,i,a=t.length,o=1/0,s=0;s<a;s++)!function(i){r=0,n.forEach(function(n,e){var o=F(t[(i+e)%a],n);r+=o*o}),r<o&&(o=r,e=i)}(s);e&&(i=t.splice(0,e),t.splice.apply(t,[t.length,0].concat(i)))},Fn=function(t,n,e){void 0===e&&(e={});var r=e.maxSegmentLength;void 0===r&&(r=10);var i=e.string;void 0===i&&(i=!0);var a=J(t,r),o=J(n,r),s=tt(a,o,i);return!i||"string"!=typeof t&&"string"!=typeof n?s:function(e){return e<1e-4&&"string"==typeof t?t:1-e<1e-4&&"string"==typeof n?n:s(e)}},zn=nt;nt.deviation=function(t,n,e,r){var i=n&&n.length,a=i?n[0]*e:t.length,o=Math.abs(Et(t,0,a,e));if(i)for(var s=0,h=n.length;s<h;s++){var u=n[s]*e,c=s<h-1?n[s+1]*e:t.length;o-=Math.abs(Et(t,u,c,e))}var f=0;for(s=0;s<r.length;s+=3){var l=r[s]*e,p=r[s+1]*e,g=r[s+2]*e;f+=Math.abs((t[l]-t[g])*(t[p+1]-t[l+1])-(t[l]-t[p])*(t[g+1]-t[l+1]))}return 0===o&&0===f?0:Math.abs((f-o)/o)},nt.flatten=function(t){for(var n=t[0][0].length,e={vertices:[],holes:[],dimensions:n},r=0,i=0;i<t.length;i++){for(var a=0;a<t[i].length;a++)for(var o=0;o<n;o++)e.vertices.push(t[i][a][o]);i>0&&(r+=t[i-1].length,e.holes.push(r))}return e};var jn=function(t){return t},In=function(t){if(null==t)return jn;var n,e,r=t.scale[0],i=t.scale[1],a=t.translate[0],o=t.translate[1];return function(t,s){s||(n=e=0);var h=2,u=t.length,c=new Array(u);for(c[0]=(n+=t[0])*r+a,c[1]=(e+=t[1])*i+o;h<u;)c[h]=t[h],++h;return c}},Vn=function(t,n){for(var e,r=t.length,i=r-n;i<--r;)e=t[i],t[i++]=t[r],t[r]=e},Xn=function(t,n){return"GeometryCollection"===n.type?{type:"FeatureCollection",features:n.geometries.map(function(n){return St(t,n)})}:St(t,n)},Yn=function(t,n){function e(n){var e,r=t.arcs[n<0?~n:n],i=r[0];return t.transform?(e=[0,0],r.forEach(function(t){e[0]+=t[0],e[1]+=t[1]})):e=r[r.length-1],n<0?[e,i]:[i,e]}function r(t,n){for(var e in t){var r=t[e];delete n[r.start],delete r.start,delete r.end,r.forEach(function(t){i[t<0?~t:t]=1}),s.push(r)}}var i={},a={},o={},s=[],h=-1;return n.forEach(function(e,r){var i,a=t.arcs[e<0?~e:e];a.length<3&&!a[1][0]&&!a[1][1]&&(i=n[++h],n[h]=e,n[r]=i)}),n.forEach(function(t){var n,r,i=e(t),s=i[0],h=i[1];if(n=o[s])if(delete o[n.end],n.push(t),n.end=h,r=a[h]){delete a[r.start];var u=r===n?n:n.concat(r);a[u.start=n.start]=o[u.end=r.end]=u}else a[n.start]=o[n.end]=n;else if(n=a[h])if(delete a[n.start],n.unshift(t),n.start=s,r=o[s]){delete o[r.end];var c=r===n?n:r.concat(n);a[c.start=r.start]=o[c.end=n.end]=c}else a[n.start]=o[n.end]=n;else n=[t],a[n.start=s]=o[n.end=h]=n}),r(o,a),r(a,o),n.forEach(function(t){i[t<0?~t:t]||s.push([t])}),s},Gn=function(t,n){for(var e=0,r=t.length;e<r;){var i=e+r>>>1;t[i]<n?e=i+1:r=i}return e},On=function(t){function n(t,n){t.forEach(function(t){t<0&&(t=~t);var e=i[t];e?e.push(n):i[t]=[n]})}function e(t,e){t.forEach(function(t){n(t,e)})}function r(t,n){"GeometryCollection"===t.type?t.geometries.forEach(function(t){r(t,n)}):t.type in o&&o[t.type](t.arcs,n)}var i={},a=t.map(function(){return[]}),o={LineString:n,MultiLineString:e,Polygon:e,MultiPolygon:function(t,n){t.forEach(function(t){e(t,n)})}};t.forEach(r);for(var s in i)for(var h=i[s],u=h.length,c=0;c<u;++c)for(var f=c+1;f<u;++f){var l,p=h[c],g=h[f];(l=a[p])[s=Gn(l,g)]!==g&&l.splice(s,0,g),(l=a[g])[s=Gn(l,p)]!==p&&l.splice(s,0,p)}return a},Dn=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Hn=function(t){return 1===t.length&&(t=Ft(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)<0?r=a+1:i=a}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)>0?i=a:r=a+1}return r}}},Nn=Hn(Dn),Qn=(Nn.right,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2),function(t,n){return jt(zt(It(t),t),n)}),Un=function(t,n){if(t.length>8)return t.map(function(t,n){return n});var e=t.map(function(t){return n.map(function(n){return Xt(t,n)})});return Vt(t,n,e)};t.interpolate=Fn,t.separate=Yt,t.combine=Gt,t.interpolateAll=Ot,t.splitPathString=N,t.toPathString=H,t.fromCircle=Ht,t.toCircle=Nt,t.fromRect=Qt,t.toRect=Ut,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
The MIT License (MIT)

Copyright (c) 2015 Michael MIGLIORE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

var circlefit = (function () {
  var my = {},
      points = [];

  function linearSolve2x2(matrix, vector) {
    var det = matrix[0]*matrix[3] - matrix[1]*matrix[2];
    if (det < 1e-8) return false; //no solution
    var y = (matrix[0]*vector[1] - matrix[2]*vector[0])/det;
    var x = (vector[0] - matrix[1]*y)/matrix[0];
    return [x,y];
  }

  my.addPoint = function (x, y) {
    points.push({x: x, y: y});
  };

  my.resetPoints = function () {
    points = [];
  };

  my.compute = function () {
    var result = {
      points: points,
      projections: [],
      distances: [],
      success: false,
      center: {x:0, y:0},
      radius: 0,
      residue: 0,
      computationTime: performance.now()
    };

    //means
    var m = points.reduce(function(p, c) {
      return {x: p.x + c.x/points.length,
              y: p.y + c.y/points.length};
    },{x:0, y:0});
    
    //centered points
    var u = points.map(function(e){
      return {x: e.x - m.x,
              y: e.y - m.y};
    });

    //solve linear equation
    var Sxx = u.reduce(function(p,c) {
      return p + c.x*c.x;
    },0);

    var Sxy = u.reduce(function(p,c) {
      return p + c.x*c.y;
    },0);

    var Syy = u.reduce(function(p,c) {
      return p + c.y*c.y;
    },0);

    var v1 = u.reduce(function(p,c) {
      return p + 0.5*(c.x*c.x*c.x + c.x*c.y*c.y);
    },0);

    var v2 = u.reduce(function(p,c) {
      return p + 0.5*(c.y*c.y*c.y + c.x*c.x*c.y);
    },0);

    var sol = linearSolve2x2([Sxx, Sxy, Sxy, Syy], [v1, v2]);

    if (sol === false) {
      //not enough points or points are colinears
      return result;
    }

    result.success = true;

    //compute radius from circle equation
    var radius2 = sol[0]*sol[0] + sol[1]*sol[1] + (Sxx+Syy)/points.length;
    result.radius = Math.sqrt(radius2);

    result.center.x = sol[0] + m.x;
    result.center.y = sol[1] + m.y;

    points.forEach(function(p) {
      var v = {x: p.x - result.center.x, y: p.y - result.center.y};
      var len2 = v.x*v.x + v.y*v.y;
      result.residue += radius2 - len2;
      var len = Math.sqrt(len2);
      result.distances.push(len - result.radius);
      result.projections.push({
        x: result.center.x + v.x*result.radius/len,
        y: result.center.y + v.y*result.radius/len
      });     
    });

    result.computationTime = performance.now() - result.computationTime;

    return result;
  };

  return my;
}());

module.exports = circlefit;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);

function consent (scene) {  
  
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','consent_div')
  .attr('tabindex',0)
  .on('touchstart', function() {    
    d3.event.preventDefault(); 
  });  

  var consent_content_div = d3.select('#consent_div').append('div')
  .attr('class','toolbar')
  .style('width','100%')
  .style('height',(window.innerHeight - 50) + 'px')
  .attr('id','consent_content_div')
  .on('touchstart', function() {    
    d3.event.preventDefault(); 
  });  

  switch (scene) {

    case 0:

      consent_content_div.append('span')
      .attr('class','consent_text')
      .html('<span class="instruction_emphasis">MICROSOFT<br>Experiment Participation Consent Form</span><br>' +
      '<span style="text-align:left; font-size:0.9em;"><p>Thank you for deciding to volunteer in a Microsoft Research experiment. The researchers are studying how different ways to present quantities that change over time help with respect to the perception of trends. Please note that you have no obligation to participate and you may decide to terminate your participation at any time. What follows is a description of the experiment, and your consent to participate. Please read this information carefully.</p></span>')
      .on('touchstart', function() {    
        d3.event.preventDefault(); 
      });    
      
      d3.select('#consent_div')
      .style('visibility','visible');

    break;
    
    case 1:

      consent_content_div.append('span')
      .attr('class','consent_text')
      .html(
        '<span class="instruction_emphasis">Title of Experiment:</span><br>' +
        '<span style="text-align:left; font-size:0.9em;"><p><em>Bubble Charts on Mobile Phones</em></p></span>' +
        '<span class="instruction_emphasis">Benefits and Risks:</span><br>' +
        '<span style="text-align:left; font-size:0.9em;"><p>This experiment will inform the design of information visualization tools.</p></span>' +
        '<span style="text-align:left; font-size:0.9em;"><p>There are no known risks associated with this experiment.</p></span>'        
      )
      .on('touchstart', function() {    
        d3.event.preventDefault(); 
      });    
      
      d3.select('#consent_div')
      .style('visibility','visible');

    break;

    case 2:
    
      consent_content_div.append('span')
      .attr('class','consent_text')
      .html(         
        '<span class="instruction_emphasis">Procedure:</span><br>' +
        '<span style="text-align:left; font-size:0.9em;"><p>The experiment will take approximately <span class="instruction_emphasis">20 minutes</span> to complete. You will be asked to respond to a series of questions relating to  <span class="instruction_emphasis">bubble charts</span>, a type of chart that will be explained shortly. Sessions will be logged anonymously to calculate accuracy and response times. The experimental procedure is as follows:</p>' +
        '<ol>' +
        '<li> An introductory tutorial.' +
        '<li> <span class="instruction_emphasis">13 presentations</span> of bubble charts, each with an associated question.' +
        '<li> An exit survey.' +
       
        '</ol></span>'
        
      )
      .on('touchstart', function() {    
        d3.event.preventDefault(); 
      });    
      
      d3.select('#consent_div')
      .style('visibility','visible');

    break;

    case 3:
    
      consent_content_div.append('span')
      .attr('class','consent_text')
      .html(         
        '<span class="instruction_emphasis">Research Data:</span><br>' +
        '<span style="text-align:left; font-size:0.9em;"><p>In this experiment, we will <span class="instruction_emphasis">NOT</span> be collecting any personal information about you.</p></span>' + 
        '<span style="text-align:left; font-size:0.7em;"><p>You give your permission to our research team at Microsoft Research to collect information about your participation in the research project in the formats and medium ("Data") described previously. Microsoft shall control all Data in connection with the research project. You may also provide suggestions, comments or other feedback ("Feedback") to Microsoft with respect to the research project. Feedback is entirely voluntary and the research team at Microsoft shall be free to use, disclose, license, or otherwise distribute, and exploit the Feedback and Data as authorized by the research participant. If you work for Microsoft, no Data or Feedback collected from you will be shared directly with anyone in your management chain.</p>' + '</span>'        
      )
      .on('touchstart', function() {    
        d3.event.preventDefault(); 
      });    
      
      d3.select('#consent_div')
      .style('visibility','visible');

    break;

    case 4:
    
      consent_content_div.append('span')
      .attr('class','consent_text')
      .html(         
        '<span class="instruction_emphasis">Your Authority to Participate:</span><br>' +
        '<span style="text-align:left; font-size:0.7em;"><p>You represent that you have the full right and authority to agree to this statement, and if you are a minor that you have the consent (as indicated below) of your legal guardian to sign and acknowledge this form. You assume the full risk of any injuries, damages, or losses you may sustain as a result of your participation in the project. In addition, you agree to release and hold harmless Microsoft and its affiliates from any and all claims that you may have now or in the future related to or arising from your participation in the research project, and you hereby waive all such claims. Microsoft will not be liable for any damages related to your participation in the project. By agreeing below, you confirm that you understand what the project is about and how and why it is being done. Should you have any questions concerning this project, please contact the supervising researcher, Bongshin Lee (bongshin@microsoft.com).</p></span>' + '<span style="text-align:left; font-size:0.9em;"><p>Please confirm your acceptance by tapping the "<span class="instruction_emphasis">I AGREE</span>" button below.</p></span>'        
      )
      .on('touchstart', function() {    
        d3.event.preventDefault(); 
      });    
      
      d3.select('#consent_div')
      .style('visibility','visible');

    break;
    
    default: // return to main menu

      d3.select('#consent_div').remove();
      if (document.getElementById('consent_div') != undefined) {      
        document.getElementById('consent_div').remove(); 
      }
      appInsights.trackEvent("ConsentComplete", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "ConsentComplete",
        "user_id": globals.userID
      });
      
      consent_complete = true;
      loadMenu();
      hideAddressBar();   

    break;
  }
  
  d3.select('#consent_div').append('input')
  .attr('class', 'menu_btn_enabled')
  .attr('id','submit_btn')
  .attr('type','button')
  .attr('value', scene == 4 ? 'I AGREE' : 'NEXT')
  .attr('title', scene == 4 ? 'I AGREE' : 'NEXT')
  .on('touchstart', function() {    

    d3.event.preventDefault();  
    
    d3.select('#consent_div').remove();
    if (document.getElementById('consent_div') != undefined) {      
      document.getElementById('consent_div').remove(); 
    }

    appInsights.trackEvent("Consent", { 
      "TimeStamp": new Date().valueOf(),
      "user_id": globals.userID,
      "Event": "Consent",
      "Scene": scene + 1
    });
    consent(scene + 1);
  });
 
}

module.exports = consent;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);
var chart = __webpack_require__(3);
var nationData = __webpack_require__(2);
var countrySelector = __webpack_require__(4);

function introduction (scene) {

  suppress_touch_feedback = true;
  suppress_touch_val_feedback = true;
  globals.trial_response = [];
  chart_stage = -1;

  var checkExist;  
  var checkTouch;
  var attempts = 0;

  chart_instance = chart();

  all_data = nationData;  
  if (non_interactive){
    var codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]; //,
    codes = shuffle(codes);
    all_data.forEach(function (d,i){ 
      d.code = codes[i]; 
    });
  }
  else {
    all_data.forEach(function (d){ 
      d.code = d.orig_code; 
    });
  }   
    
  function getDims() {
    height = window.innerHeight;
    width = window.innerWidth;
    svg_dim = d3.min([height,width]) - 2;
    inner_padding = svg_dim * 0.1;
    chart_dim = svg_dim * 0.8;
  }

  function draw() {
  
    getDims();
        
    d3.select('#main_svg')
    .style('height',svg_dim + 'px')
    .style('width',svg_dim + 'px');
    
    chart_g.attr('transform','translate(' + inner_padding + ',' + inner_padding + ')');
  
    d3.selectAll('.guide').remove();
    chart_instance.lines('off'); 
    chart_instance.animation('off');
    chart_instance.facets('off');
    chart_instance.current_year(globals.param_yearMin);

    chart_g.call(chart_instance);
    d3.selectAll('.mark').style('display','none');
    d3.select('.year_indicator').style('display','none');
    chart_g.call(chart_instance);
  
  }

  function loadData () {     

    checkExist = setInterval(function() {
      if (all_data != undefined) {        
        chart_g.datum(all_data);
        draw();    
        
        hideAddressBar();

        d3.select('#introduction_div')
        .style('visibility','visible');

        appInsights.trackEvent("IntroEvent", { 
          "TimeStamp": new Date().valueOf(),
          "user_id": globals.userID, 
          "Event": "IntroEvent",
          "EventType": "loadData", 
        });

        clearInterval(checkExist);
      }
    }, 100); // check every 100ms

    chart_instance = chart();
  
    main_svg = d3.select('#main_svg').remove();
  
    main_svg = d3.select('#introduction_div').append('svg')
    .attr('id','main_svg')
    .style('margin-top',-40 + 'px');  
  
    defs = d3.select('#main_svg').append('defs');
  
    chart_g = main_svg.append('g')
    .attr('id','chart_g');    
    
    document.getElementById('introduction_div').focus();

  } 

  function build_chart(stage) {

    switch (stage) {

      case 0:

        instruction_text.html('6. In this experiment, you will view charts depicting numerical values. In this example, <span class="instruction_emphasis">Life Expectancy</span> increases from left to right, and <span class="instruction_emphasis">GDP Per Capita</span> (a common economic indicator) increases from bottom to top.'); 
        loadData();

        break;

      case 1:

        instruction_text.html('7. Each of the circles below represents a country, where the <span class="instruction_emphasis">size</span> of a circle represents the corresponding country\'s <span class="instruction_emphasis">Population</span>.<br><br>'); 

        d3.selectAll('.mark').select('circle')
        .style('fill','#54b2fc');
        d3.selectAll('.mark').select('text').style('display','none');
        d3.selectAll('.mark').style('display',null);
        chart_instance.animation('off');
        chart_g.call(chart_instance);

        break;

      case 2:

        instruction_text.html('8. In this experiment, we won\'t use the real names of countries. Instead, we will assign each country a letter, and we will color the countries according to the continent in which they can be found.<br>'); 

        var scale_reg = chart_instance.scale_reg();
        var color_param = chart_instance.params().color;

        d3.selectAll('.mark').select('circle')
        .style('fill',function(d){
          return scale_reg(d[color_param]);
        });
        d3.selectAll('.mark').select('text').style('display',null);
        d3.selectAll('.mark').style('display',null);

        break;

      case 3:

        instruction_text.html('9. This chart reflects the 1975 <span class="instruction_emphasis">Life Expectancy</span>, <span class="instruction_emphasis">GDP Per Capita</span>, and <span class="instruction_emphasis">Population</span> values for these countries.<br><br>'); 

        d3.select('.year_indicator').style('display',null);

        break;

      case 4:

        instruction_text.html('10. The animation shows how the <span class="instruction_emphasis">Life Expectancy</span>, <span class="instruction_emphasis">GDP Per Capita</span>, and <span class="instruction_emphasis">Population</span> of these countries changed between 1975 and 2000. The animation will start over after reaching the year 2000.<br>'); 

        chart_instance.animation('on');
        chart_g.call(chart_instance);

        break;

      case 5:

        switch (globals.condition) {

          case 'stepper':

            instruction_text.html('11. <span class="instruction_emphasis">Tap or hold</span> the buttons below to navigate in time. The <span class="instruction_emphasis">ring</span> (bottom-right) must be complete to continue.'); 

            addmenu();
            chart_instance.current_year(globals.param_yearMin);
            chart_instance.animation('off');
            chart_instance.loop_count(0);
            update_outer_progress(1 / 25);
            chart_g.call(chart_instance);
            d3.select('#submit_btn').attr('class','menu_btn_disabled').attr('disabled',true);


            break;

          case 'animation':

            instruction_text.html('11. The ring (bottom-right) will show the <span class="instruction_emphasis">progress of the animation</span>. You may proceed once the ring is complete.'); 

            addmenu();
            chart_instance.current_year(globals.param_yearMin);
            chart_instance.loop_count(0);
            update_outer_progress(1 / 25);
            chart_instance.animation('on');
            chart_g.call(chart_instance);
            d3.select('#submit_btn').attr('class','menu_btn_disabled').attr('disabled',true);

            break;

          case 'multiples':

            instruction_text.html('11. Here\'s another way to show the same data. Instead of a single chart, each country has its own chart, where the <span class="instruction_emphasis">dot corresponds to the final values</span>, and each country\'s trajectory is drawn as a line.');

            d3.select('.year_indicator').style('display','none');
            chart_instance.animation('off');
            chart_instance.current_year(globals.param_yearMax);
            chart_instance.lines('on');
            chart_instance.facets('on');
            chart_g.call(chart_instance);
            // d3.select('#submit_btn').attr('class','menu_btn_disabled').attr('disabled',true);

            break;

          default:

            break;

        }       

        break;

      case 6:
      
        instruction_text.html('');        
        
        var intro_content_div = d3.select('#introduction_div')
        .append('div')
        .attr('class','toolbar')
        .style('width','100%')
        .style('height',(window.innerHeight - 50) + 'px')
        .attr('id','intro_content_div');   

        intro_content_div.append('span')
        .attr('class','consent_text')
        .html('<span style="text-align:left; font-size:0.8em;">12. In the experiment, you\'ll be asked to select one or more countries based on their characteristics.' + 
        '<br><br>In some cases, there may be more correct responses than required responses, and the order in which you select responses does not matter.' + 
        '<br><br>If you change your mind about a selection, tap it again to de-select it.' + 
        '<br><br>Tap <span class="instruction_emphasis">NEXT</span> to respond to an example question.</span>');   

        d3.select('#main_svg').style('display','none');
        d3.select('#menubar').style('display','none');

        switch (globals.condition) {

          case 'stepper':

            chart_instance.current_year(globals.param_yearMin);
            chart_instance.animation('off');
            chart_instance.loop_count(0);
            update_outer_progress(1 / 25);
            chart_g.call(chart_instance);

            break;

          case 'animation':

            chart_instance.current_year(globals.param_yearMin);
            chart_instance.loop_count(0);
            update_outer_progress(1 / 25);
            chart_instance.animation('on');
            chart_g.call(chart_instance);

            break;

          case 'multiples':

            chart_instance.animation('off');
            chart_instance.current_year(globals.param_yearMax);
            chart_instance.loop_count(0);
            update_outer_progress(0 / 25);
            chart_instance.lines('on');
            chart_instance.facets('on');
            addmenu();
            chart_g.call(chart_instance);

            break;

          default:

            break;

        }       

        d3.select('#menubar').style('display','none');
       
        break;

      case 7:

        d3.select('#instruction_text').remove();
        d3.select('#intro_content_div').remove();

        chart_instance.current_year(globals.condition == 'multiples' ? globals.param_yearMax : globals.param_yearMin);
        chart_instance.loop_count(0);
        update_outer_progress(1 / 25);
        chart_g.call(chart_instance);

        d3.select('.year_indicator').style('display',null);
        d3.select('#instruction_div').style('display','none');
        d3.select('#submit_btn').style('display','none');
        d3.select('#main_svg').style('display',null)        
        .style('margin-top',0 + 'px');
        d3.select('#menubar').style('display',null);

        d3.select('.task_instruction_span')
        .html((globals.condition != 'multiples' ? ' View <span class=\'instruction_emphasis\'>all years</span>, s' : 'S') + 'elect <span class="instruction_number">three</span> countries that are <span class="instruction_emphasis">labeled with VOWELS</span> using the buttons below, then tap \'DONE\'.');  

        countrySelector();        

        break;

      default:

        chart_instance.animation('off');
        chart_instance.current_year(globals.param_yearMax);
        chart_instance.loop_count(0);
        update_outer_progress(0 / 25);
        chart_g.call(chart_instance);

        d3.select('#introduction_div').remove();
        if (document.getElementById('introduction_div') != undefined) {      
          document.getElementById('introduction_div').remove(); 
        }

        appInsights.trackEvent("Intro", { 
          "TimeStamp": new Date().valueOf(),
          "user_id": globals.userID,
          "Event": "Intro",
          "Scene": scene + 1
        });

        scene = 7;
        introduction(scene);

        break;

    }   

  }
      
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','introduction_div')
  .attr('tabindex',0);  

  var instruction_div = d3.select('#introduction_div').append('div')
  .attr('class','toolbar')
  .attr('id','instruction_div');

  var instruction_text = instruction_div.append('span')
  .attr('id','instruction_text');  

  switch (scene) {

    case 0:

      instruction_text.html('Please review the following protocols before beginning the experiment.');    
      d3.select('#introduction_div')
      .style('visibility','visible');

      break;   
      
    case 1:

      instruction_text.html('1. For the duration of this experiment, hold your phone in <span class="instruction_emphasis">portrait mode</span>.');    
      d3.select('#introduction_div')
      .style('visibility','visible'); 

      getDims();

      main_svg = d3.select('#introduction_div').append('svg')
      .attr('id','main_svg')
      .style('height',svg_dim + 'px')
      .style('width',svg_dim + 'px')
      .style('margin-top',-40 + 'px');

      main_svg.append('svg:image')
      .attr('class','instruction_svg')
      .attr("xlink:href", "assets/portrait.svg")
      .attr("width", chart_dim)
      .attr("height", chart_dim)
      .attr("x", inner_padding)
      .attr("y", inner_padding);
          
      document.getElementById('introduction_div').focus();

      break;

    case 2:
  
      instruction_text.html('2. Hold your phone with one hand and use the <span class="instruction_emphasis">index finger on your other hand</span> to touch your phone. It doesn\'t matter which hand holds the phone; just ensure that you are comfortable. However, do not switch the arrangement of your hands during the experiment.');    
      d3.select('#introduction_div')
      .style('visibility','visible'); 

      getDims();

      main_svg = d3.select('#introduction_div').append('svg')
      .attr('id','main_svg')
      .style('height',svg_dim + 'px')
      .style('width',svg_dim + 'px');

      main_svg.append('svg:image')
      .attr('class','instruction_svg')
      .attr("xlink:href", "assets/holdingphone.svg")
      .attr("width", chart_dim)
      .attr("height", chart_dim)
      .attr("x", inner_padding)
      .attr("y", inner_padding);
          
      document.getElementById('introduction_div').focus();

      break;

    case 3:
    
      instruction_text.html('3. Make sure that your phone\'s <span class="instruction_emphasis">brightness</span> level is set to <span class="instruction_emphasis">maximum</span>.');    
      d3.select('#introduction_div')
      .style('visibility','visible'); 

      getDims();

      main_svg = d3.select('#introduction_div').append('svg')
      .attr('id','main_svg')
      .style('height',svg_dim + 'px')
      .style('width',svg_dim + 'px');

      main_svg.append('svg:image')
      .attr('class','instruction_svg')
      .attr("xlink:href", "assets/brightness.svg")
      .attr("width", chart_dim)
      .attr("height", chart_dim)
      .attr("x", inner_padding)
      .attr("y", inner_padding);
          
      document.getElementById('introduction_div').focus();

      break;
    
    case 4:
    
      instruction_text.html('4. Ensure a stable <span class="instruction_emphasis">WiFi</span> network and sufficient <span class="instruction_emphasis">battery power</span> for approximately <span class="instruction_emphasis">20 minutes</span>.');    
      d3.select('#introduction_div')
      .style('visibility','visible'); 

      getDims();

      main_svg = d3.select('#introduction_div').append('svg')
      .attr('id','main_svg')
      .style('height',svg_dim + 'px')
      .style('width',svg_dim + 'px');

      main_svg.append('svg:image')
      .attr('class','instruction_svg')
      .attr("xlink:href", "assets/wifi.svg")
      .attr("width", chart_dim)
      .attr("height", chart_dim)
      .attr("x", inner_padding)
      .attr("y", inner_padding);
          
      document.getElementById('introduction_div').focus();

      break; 
      
    case 5:
    
      instruction_text.html('5. <span class="instruction_emphasis">DO NOT</span> tap your browser\'s back or refresh buttons at any time.');    
      d3.select('#introduction_div')
      .style('visibility','visible'); 

      getDims();

      main_svg = d3.select('#introduction_div').append('svg')
      .attr('id','main_svg')
      .style('height',svg_dim + 'px')
      .style('width',svg_dim + 'px');

      main_svg.append('svg:image')
      .attr('class','instruction_svg')
      .attr("xlink:href", "assets/nonav.svg")
      .attr("width", chart_dim)
      .attr("height", chart_dim)
      .attr("x", inner_padding)
      .attr("y", inner_padding);
          
      document.getElementById('introduction_div').focus();

      break;

    case 6: 

      console.log('chart build');  

      break;
    
    case 7:

      d3.select('#selector_div').remove();
      d3.select('#instruction_div').remove();
      
      var intro_content_div = d3.select('#introduction_div')
      .append('div')
      .attr('class','toolbar')
      .style('width','100%')
      .style('height',(window.innerHeight - 50) + 'px')
      .attr('id','intro_content_div');        

      intro_content_div.append('span')
      .attr('class','consent_text')
      .html('<span style="text-align:left; font-size:0.9em;"><p>Congratulations!<br><br> You are now <span class="instruction_emphasis">ready to begin</span> the experiment, where you will answer 13 questions. </p> ' + 
      '<p>The remainder of the experiment will proceed as follows:</p>' + 
      '<ol>' +
      '<li> <span class="instruction_emphasis">13 questions:</span>' + 
      '<ul>' +
      '<li>These include  <span class="instruction_emphasis">3 practice questions</span> and <span class="instruction_emphasis">10 timed questions</span>.' +
      '<li>Some questions may have <span class="instruction_emphasis">multiple correct responses</span>.' +
      '<li>Each question is expected to take under a minute to complete.' + 
      '<li>The question will always be shown below the chart.' +
      '</ul><li> An <span class="instruction_emphasis">exit survey</span> containing <span class="instruction_emphasis">3 questions</span>.' +
     
      '</ol></span>'
      );    

      d3.select('#introduction_div')
      .style('visibility','visible');        

      break;

    default: // return to main menu

      d3.select('#introduction_div').remove();
      if (document.getElementById('introduction_div') != undefined) {      
        document.getElementById('introduction_div').remove(); 
      }
      appInsights.trackEvent("IntroComplete", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "IntroComplete",
        "user_id": globals.userID
      });

      introduction_complete = true;
      suppress_touch_feedback = false;
      suppress_touch_val_feedback = false;
      loadMenu();
      hideAddressBar();   

      break;
  }
  
  d3.select('#introduction_div').append('input')
  .attr('class', 'menu_btn_enabled')
  .attr('id','submit_btn')
  .attr('type','button')
  .attr('value', scene == 16 ? 'BEGIN' : 'NEXT')
  .attr('title', scene == 16 ? 'BEGIN' : 'NEXT')
  .on('touchstart', nextIntroScene);

  function nextIntroScene () {

    d3.event.preventDefault();          

    if (d3.select(this).attr('disabled') == null) {
      if (chart_stage == 7) {
        attempts++;

        d3.select('#main_svg').attr('class','blurme');
        d3.select('#selector_div').remove();
        d3.select('#menubar').style('display','none');

        var score = 0;
        if (globals.trial_response.indexOf('A') != -1) {
          score++;
        }
        if (globals.trial_response.indexOf('E') != -1) {
          score++;
        }
        if (globals.trial_response.indexOf('I') != -1) {
          score++;
        }
        if (globals.trial_response.indexOf('O') != -1) {
          score++;
        }
        if (score != 3) {

          var incorrect_feedback_btn =  d3.select('#introduction_div').append('div')
          .attr('class', 'feedback_btn_enabled')
          .attr('id','feedback_btn')
          .style('background','#ef5350')
          .style('border-color','#fff')        
          .on('touchstart', function() {  

            d3.event.preventDefault(); 

            d3.select('#progress_indicator').style('display',null);
            d3.select('#outer_progress_indicator')
            .attr('display', globals.condition == 'multiples' ? 'none' : null);
            d3.select('#done_btn').attr('class','img_btn_disabled')
            .style('display','none')
            .attr('disabled',true)
            .attr('src', 'assets/na.svg')
            .style('margin', function(){
              return height < width ? '0px' : '2px';
            })
            .attr('height', function(){
              return height < width ? (height / 7 - 6) : (width / 7 - 6);
            })
            .attr('width', function (){
              return width < height ? (width / 7 - 6) : (height / 7 - 6);
            });
            d3.select('#feedback_btn').remove();
            d3.select('#menubar').style('display',null);
            d3.select('#main_svg').attr('class',null);
            globals.num_selected = 0;
            globals.trial_response = [];            
            countrySelector();
            d3.select('#inner_progress_value').attr('d', globals.inner_progress_circle.endAngle(0));
            
            //try again
          });

          incorrect_feedback_btn.append('span')
          .attr('id','button_text')
          .style('color','#111')
          .style('font-weight','400')
          .html(function() {    
            if (attempts > 1) {
              return '<span class="correct_incorrect">INCORRECT</span><br>Tap on this message to try again.<br> (Hint: Vowels include A, E, I, O, & U).';
            }
            else {
              return '<span class="correct_incorrect">INCORRECT</span><br>Tap on this message to try again.';
            }
          }); 

        } 
        else {
          chart_stage++;
          build_chart(chart_stage);
        }
      }
      else if (scene != 5) {
        d3.select('#introduction_div').remove();
        if (document.getElementById('introduction_div') != undefined) {      
          document.getElementById('introduction_div').remove(); 
        }
  
        appInsights.trackEvent("Intro", { 
          "TimeStamp": new Date().valueOf(),
          "user_id": globals.userID,
          "Event": "Intro",
          "Scene": scene + 1
        });
        introduction(scene + 1);
      }
      else {
        chart_stage++;
        build_chart(chart_stage);
      }
    } 
  }

  function addmenu () {
    var menubar = d3.select('#introduction_div').append('div')
    .attr('class','toolbar')
    .attr('id','menubar')
    .style('float', function(){
      return height < width ? 'left' : 'inherit';
    })
    .style('width', function(){
      return height < width ? (height / 7) + 'px'  : width + 'px';
    })
    .style('height', function(){
      return height < width ? height + 'px'  : (width / 7) + 'px';
    });  

    menubar.append("input")
    .attr('class', 'img_btn_disabled')  
    .attr('id','prev_btn')
    .style('margin', function(){
      return height < width ? '0px' : '2px';
    })
    .attr('height', function(){
      return height < width ? (height / 7 - 6) : (width / 7 - 6);
    })
    .attr('width', function (){
      return width < height ? (width / 7 - 6) : (height / 7 - 6);
    })
    .attr('type','image')
    .attr('name','PrevToggle')
    .attr('title', 'PrevToggle')
    .attr('disabled', true)
    .attr('src', globals.condition == 'stepper' ? 'assets/prev_grey.svg' : 'assets/na.svg')
    .on('touchstart', function() {    
      d3.event.preventDefault();          

      if (globals.condition == 'stepper'){

        d3.select(this).attr('src', globals.condition == 'stepper' ? (chart_instance.loop_count() < 1 ? 'assets/prev_grey.svg' : 'assets/prev_gold.svg') : 'assets/na.svg');
        chart_instance.this_chart().interrupt();
        

        if (chart_instance.current_year() != chart_instance.params().yearMin) {      
          var prev_year = chart_instance.current_year() - 1;
          chart_instance.current_year(prev_year);
          var outer_progress =  ((prev_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
          update_outer_progress(chart_instance.loop_count() + outer_progress);
          
        }
        else if (chart_instance.loop_count() > 0 && chart_instance.current_year() == chart_instance.params().yearMin) {
          chart_instance.current_year(chart_instance.params().yearMax);
          d3.selectAll('.mark').style('display','none');
            d3.selectAll('.path_line').style('display','none');
            setTimeout(function(){
              d3.selectAll('.mark').style('display',null);
              d3.selectAll('.path_line').style('display',null);
            }, 500);
        }
        chart_g.call(chart_instance);

        checkTouch = setInterval(function() {
          if (chart_instance.current_year() != chart_instance.params().yearMin) {
            var prev_year = chart_instance.current_year() - 1;
            chart_instance.current_year(prev_year);   
            var outer_progress =  ((prev_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
            update_outer_progress(chart_instance.loop_count() + outer_progress);
          }
          else if (chart_instance.loop_count() > 0 && chart_instance.current_year() == chart_instance.params().yearMin) {
            chart_instance.current_year(chart_instance.params().yearMax);
            d3.selectAll('.mark').style('display','none');
            d3.selectAll('.path_line').style('display','none');
            setTimeout(function(){
              d3.selectAll('.mark').style('display',null);
              d3.selectAll('.path_line').style('display',null);
            }, 500);
          }
          chart_g.call(chart_instance);
          
        }, 500); // check every 500ms if touch is ongoing          

      }
    })
    .on('touchend', function(){
      
      d3.event.preventDefault();
      clearInterval(checkTouch);

      if (globals.condition == 'stepper') {
        d3.select(this).attr('class',(chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'img_btn_disabled' : 'img_btn_enabled')
        .attr('disabled', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? true : null)
        .attr('src', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'assets/prev_grey.svg' : 'assets/prev.svg');
      }
    });    

    menubar.append("input")
    .attr('id','next_btn')
    .attr('class', globals.condition == 'stepper' ? 'img_btn_enabled' : 'img_btn_disabled')  
    .style('margin', function(){
      return height < width ? '0px' : '2px';
    })
    .attr('height', function(){
      return height < width ? (height / 7 - 6) : (width / 7 - 6);
    })
    .attr('width', function (){
      return width < height ? (width / 7 - 6) : (height / 7 - 6);
    })
    .attr('type','image') 
    .attr('name','NextToggle')
    .attr('title', 'NextToggle')
    .attr('src', globals.condition == 'stepper' ? 'assets/next.svg' : 'assets/na.svg')
    .attr('disabled', globals.condition == 'stepper' ? null : true)
    .on('touchstart', function() {    
      d3.event.preventDefault();    

      if (globals.condition == 'stepper'){

        d3.select(this).attr('src', globals.condition == 'stepper' ? 'assets/next_gold.svg' : 'assets/na.svg');
        chart_instance.this_chart().interrupt();

        if (chart_instance.current_year() == chart_instance.params().yearMax) {
          chart_instance.current_year(chart_instance.params().yearMin);
          d3.selectAll('.mark').style('display','none');
          d3.selectAll('.path_line').style('display','none');
          setTimeout(function(){
            d3.selectAll('.mark').style('display',null);
            d3.selectAll('.path_line').style('display',null);
          }, 500);
        }
        else {
          var next_year = chart_instance.current_year() + 1;
          var outer_progress =  ((next_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
          update_outer_progress(chart_instance.loop_count() + outer_progress);
          if (chart_instance.current_year() == (chart_instance.params().yearMax - 1)) {
            chart_instance.loop_count(chart_instance.loop_count() + 1);
            // d3.select('#progress_indicator').style('display','none');
            if (chart_stage == 7 && globals.num_selected == 3) {
              
              d3.select('#progress_indicator').style('display','none');
              d3.select('#done_btn').attr('class','img_btn_enabled')
              .style('display',null)
              .attr('disabled',null)
              .attr('src', 'assets/done.svg');
            }
            else {
              d3.select('#submit_btn').attr('class','menu_btn_enabled')
              .attr('disabled',null);
            }
          }
          chart_instance.current_year(next_year);
        }
        chart_g.call(chart_instance);     

        checkTouch = setInterval(function() {
          if (chart_instance.current_year() == chart_instance.params().yearMax) {
            chart_instance.current_year(chart_instance.params().yearMin);
            d3.selectAll('.mark').style('display','none');
            d3.selectAll('.path_line').style('display','none');
            setTimeout(function(){
              d3.selectAll('.mark').style('display',null);
              d3.selectAll('.path_line').style('display',null);
            }, 500);
          }
          else {
            var next_year = chart_instance.current_year() + 1;
            var outer_progress =  ((next_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
            update_outer_progress(chart_instance.loop_count() + outer_progress);
            if (chart_instance.current_year() == (chart_instance.params().yearMax - 1)) {
              chart_instance.loop_count(chart_instance.loop_count() + 1);
              // d3.select('#progress_indicator').style('display','none');
              if (chart_stage == 7 && globals.num_selected == 3) {                
                d3.select('#progress_indicator').style('display','none');
                d3.select('#done_btn').attr('class','img_btn_enabled')
                .style('display',null)
                .attr('disabled',null)
                .attr('src', 'assets/done.svg');
              }
              else{
                d3.select('#submit_btn').attr('class','menu_btn_enabled')
                .attr('disabled',null);
              }
            }
            chart_instance.current_year(next_year);
          }
          chart_g.call(chart_instance);
        }, 500); // check every 500ms if touch is ongoing    

      }
    })
    .on('touchend', function(){

      d3.event.preventDefault();
      clearInterval(checkTouch);

      d3.select(this).attr('src', globals.condition == 'stepper' ? 'assets/next.svg' : 'assets/na.svg');

      if (globals.condition == 'stepper') {
        d3.select('#prev_btn').attr('class',(chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'img_btn_disabled' : 'img_btn_enabled')
        .attr('disabled', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? true : null)
        .attr('src', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'assets/prev_grey.svg' : 'assets/prev.svg');
      }
    });    

    var progress_radius = (height < width ? (height / 7 - 6) : (width / 7 - 6)) / 2;
    var progress_stroke = 2;
    var progress_dim = progress_radius * 2;

    var prompt = menubar.append("div")
    .attr('id','prompt')
    .style('margin','2px')
    .style('height', (progress_dim) + 'px')
    .style('width', (width - progress_dim * 3 - 24) + 'px')
    .on('touchstart', function() {    
      d3.event.preventDefault(); 
    });

    prompt.append('span')
    .attr('class','task_instruction_span')
    .html('');      

    //progress indicators
    var progress_colors = {
      outer_fill: 'gold',
      inner_fill: '#fff',
      track: '#999',
      stroke: '#333',
    };

    menubar.append("input")
    .attr('class', 'img_btn_disabled')
    .attr('disabled',true)
    .style('display','none')
    .style('margin','2px')
    .style('height', progress_dim + 'px')
    .style('width', progress_dim + 'px')
    .attr('id','done_btn')
    .attr('type','image')
    .attr('name','Done')
    .attr('title', 'Done')
    .attr('src', 'assets/na.svg')
    .on('touchstart', nextIntroScene);

    var progress_svg = menubar.append("svg")
    .attr('disabled',true)
    .attr('id','progress_indicator')
    .attr('height', progress_dim)
    .attr('width', progress_dim);
    
    globals.outer_progress_circle = d3.arc()
    .startAngle(0)
    .cornerRadius(7.5)
    .innerRadius(progress_radius)
    .outerRadius(progress_radius - 7.5);

    var outer_track_circle = d3.arc()
    .startAngle(0)
    .endAngle(Math.PI * 2)
    .innerRadius(progress_radius)
    .outerRadius(progress_radius - 7.5);

    globals.inner_progress_circle = d3.arc()
    .startAngle(0)
    .cornerRadius(7.5)
    .innerRadius(progress_radius - 7.5)
    .outerRadius(progress_radius - 15);

    var inner_track_circle = d3.arc()
    .startAngle(0)
    .endAngle(Math.PI * 2)
    .innerRadius(progress_radius - 7.5)
    .outerRadius(progress_radius - 15);

    var outer_progress_track = progress_svg.append('g')
    .attr('id','outer_progress_indicator')
    .attr('display', globals.condition == 'multiples' ? 'none' : null)
    .attr('transform', 'translate(' + progress_dim / 2 + ',' + progress_dim / 2 + ')');
    
    outer_progress_track.append('path')
    .attr('fill', progress_colors.track)
    .attr('stroke', progress_colors.stroke)
    .attr('stroke-width', progress_stroke + 'px')
    .attr('d', outer_track_circle);

    outer_progress_track.append('path')
    .attr('id', 'outer_progress_value')
    .attr('fill', progress_colors.outer_fill)
    .attr('stroke', progress_colors.stroke)
    .attr('stroke-width', progress_stroke + 'px')
    .attr('d', globals.inner_progress_circle.endAngle(0));     

    update_outer_progress(1 / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin));

    var inner_progress_track = progress_svg.append('g')
    .attr('id','inner_progress_indicator')
    .attr('display', null)
    .attr('transform', 'translate(' + progress_dim / 2 + ',' + progress_dim / 2 + ')');
    
    inner_progress_track.append('path')
    .attr('fill', progress_colors.track)
    .attr('stroke', progress_colors.stroke)
    .attr('stroke-width', progress_stroke + 'px')
    .attr('d', inner_track_circle);

    inner_progress_track.append('path')
    .attr('id', 'inner_progress_value')
    .attr('fill', progress_colors.inner_fill)
    .attr('stroke', progress_colors.stroke)
    .attr('stroke-width', progress_stroke + 'px')
    .attr('d', globals.inner_progress_circle.endAngle(0));
  }

  function update_outer_progress(progress) {
    if (globals.condition != 'multiples') {
      d3.select('#outer_progress_value').attr('d', globals.outer_progress_circle.endAngle((Math.PI * 2) * progress));
    }
  } 
 
}

module.exports = introduction;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var Clipboard = __webpack_require__(15);
var globals = __webpack_require__(0);

function questionnaire (scene) {

  var likert_rb;

  var clip = new Clipboard('.btn'); 

  clip.on("success", function(e) {
    console.log('copied: ' + e.text);    
  });
  clip.on("error", function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);   
  });

  d3.select('#questionnaire_div').remove();
  if (document.getElementById('questionnaire_div') != undefined) {      
    document.getElementById('questionnaire_div').remove(); 
  }
  
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','questionnaire_div')
  .attr('tabindex',0);  

  var instruction_div = d3.select('#questionnaire_div').append('div')
  .attr('class','toolbar')
  .style('height','150px')
  .style('padding-bottom','50%')
  .attr('id','instruction_div');

  var instruction_text = instruction_div.append('span')
  .attr('id','instruction_text');  

  switch (scene) {

    case 0:

      instruction_text.html('<span class="instruction_emphasis">Congratulations!</span><br>You have completed the study tasks. Please take a moment to respond to three questions about the chart design used in this study.');    

      d3.select('#questionnaire_div').append('input')
      .attr('class', 'menu_btn_enabled')
      .attr('id','submit_btn')
      .attr('type','button')
      .attr('value','NEXT')
      .attr('title', 'NEXT')
      .on('touchstart', function() {   
        
        d3.event.preventDefault(); 
        
        appInsights.trackEvent("Survey", { 
          "TimeStamp": new Date().valueOf(),
          "user_id": globals.userID,
          "Event": "Survey",
          "Scene": scene + 1
        });

        questionnaire(scene + 1);        
        
      });

      break;  

    case 1:
    
      instruction_text.html('1. Prior to this experiment, how <span class="instruction_emphasis">familiar</span> were you with the type of chart used in this experiment on a scale ranging from <span class="instruction_emphasis">1</span> (not familair at all) to <span class="instruction_emphasis">5</span> (very familiar)?');    

      var familiarity = 0;

      d3.select('#questionnaire_div').append('input')
      .attr('class', 'menu_btn_disabled')
      .attr('disabled', true)
      .attr('id','submit_btn')
      .attr('type','button')
      .attr('value','NEXT')
      .attr('title', 'NEXT')
      .on('touchstart', function() { 

        d3.event.preventDefault(); 
        
        if (d3.select(this).attr('disabled') == null) {
          appInsights.trackEvent("Survey", { 
            "TimeStamp": new Date().valueOf(),
            "user_id": globals.userID,
            "Event": "Survey",
            "Question": "Familiarity",
            "Response": familiarity
          });
  
          questionnaire(scene + 1);          
        
        }
        
      });

      likert_rb = d3.select('#questionnaire_div').selectAll(".menu_btn_enabled")
      .data([1,2,3,4,5])
      .enter();     

      setTimeout(function(){
        likert_rb.append('input')
        .attr('class', 'menu_btn_enabled')
        .style('width','18%')
        .style('margin-left','1%')      
        .style('margin-right','1%')
        .style('transform','translate(0,0)')
        .attr('type','button')
        .attr('value',function(d){
          return(d);
        })
        .attr('title', function(d){
          return(d);
        })
        .on('touchstart', function(d) {  

          d3.event.preventDefault(); 
          
          d3.selectAll('.menu_btn_enabled').style('border', '1px solid #ccc');           
          d3.select(this).style('border', '5px solid gold');

          familiarity = d;  

          d3.select('#submit_btn').attr('class', 'menu_btn_enabled')
          .attr('disabled', null);
            
        });                   
      }, 500);    

      break;

    case 2:
    
      instruction_text.html('2. Throughout this experiment, how <span class="instruction_emphasis">confident</span> were you when responding to the questions on a scale ranging from <span class="instruction_emphasis">1</span> (not confident at all) to <span class="instruction_emphasis">5</span> (completely confident)?');    

      var confidence = 0;

      d3.select('#questionnaire_div').append('input')
      .attr('class', 'menu_btn_disabled')
      .attr('disabled', true)
      .attr('id','submit_btn')
      .attr('type','button')
      .attr('value','NEXT')
      .attr('title', 'NEXT')
      .on('touchstart', function() { 

        d3.event.preventDefault(); 
        
        if (d3.select(this).attr('disabled') == null) {
          appInsights.trackEvent("Survey", { 
            "TimeStamp": new Date().valueOf(),
            "user_id": globals.userID,
            "Event": "Survey",
            "Question": "Confidence",
            "Response": confidence
          });  
          questionnaire(scene + 1);          
        }

      });

      likert_rb = d3.select('#questionnaire_div').selectAll(".menu_btn_enabled")
      .data([1,2,3,4,5])
      .enter();     

      setTimeout(function(){
        likert_rb.append('input')
        .attr('class', 'menu_btn_enabled')
        .style('width','18%')
        .style('margin-left','1%')      
        .style('margin-right','1%')
        .style('transform','translate(0,0)')
        .attr('type','button')
        .attr('value',function(d){
          return(d);
        })
        .attr('title', function(d){
          return(d);
        })
        .on('touchstart', function(d) {   
          
          d3.event.preventDefault(); 
          
          d3.selectAll('.menu_btn_enabled').style('border', '1px solid #ccc');           
          d3.select(this).style('border', '5px solid gold');
          
          confidence = d;

          d3.select('#submit_btn').attr('class', 'menu_btn_enabled')
          .attr('disabled', null);   
          
        });                   
      }, 500);


      break;

    case 3:
    
      instruction_text.html('3. Throughout this experiment, how <span class="instruction_emphasis">easy</span> was it to answer the questions using the interface provided to you on a scale ranging from <span class="instruction_emphasis">1</span> (very difficult) to <span class="instruction_emphasis">5</span> (very easy)?');    

      var ease = 0;

      d3.select('#questionnaire_div').append('input')
      .attr('class', 'menu_btn_disabled')
      .attr('disabled', true)
      .attr('id','submit_btn')
      .attr('type','button')
      .attr('value','NEXT')
      .attr('title', 'NEXT')
      .on('touchstart', function() { 
        
        d3.event.preventDefault(); 

        if (d3.select(this).attr('disabled') == null) {
          appInsights.trackEvent("Survey", { 
            "TimeStamp": new Date().valueOf(),
            "user_id": globals.userID,
            "Event": "Survey",
            "Question": "Confidence",
            "Response": ease
          });
  
          questionnaire(scene + 1); 
        }

      });

      likert_rb = d3.select('#questionnaire_div').selectAll(".menu_btn_enabled")
      .data([1,2,3,4,5])
      .enter();     

      setTimeout(function(){
        likert_rb.append('input')
        .attr('class', 'menu_btn_enabled')
        .style('width','18%')
        .style('margin-left','1%')      
        .style('margin-right','1%')
        .style('transform','translate(0,0)')
        .attr('type','button')
        .attr('value',function(d){
          return(d);
        })
        .attr('title', function(d){
          return(d);
        })
        .on('touchstart', function(d) {  

          d3.event.preventDefault(); 
                  
          d3.selectAll('.menu_btn_enabled').style('border', '1px solid #ccc');           
          d3.select(this).style('border', '5px solid gold');
          
          ease = d;

          d3.select('#submit_btn').attr('class', 'menu_btn_enabled')
          .attr('disabled', null);      
          
        });          
       
      }, 500);

      break;
    
    default: // return to main menu
          
      d3.select('#instruction_div').remove();
      
      var questionnaire_content_div = d3.select('#questionnaire_div')
      .append('div')
      .attr('class','toolbar')
      .style('width','100%')
      .style('height',(window.innerHeight - 50) + 'px')
      .attr('id','intro_content_div');        

      questionnaire_content_div.append('span')
      .attr('class','consent_text')
      .html('<span class="instruction_emphasis">Thank you!</span><br>You have completed the survey and the study. Copy your completion code below. This code will remain valid for 30 minutes:<br><br><span class="instruction_emphasis" id="copy_code" style="user-select:all;">7479906172</span>'
      );          

      d3.select('#questionnaire_div').append('input')
      .attr('class', 'btn')
      .attr('id','submit_btn')
      .attr('type','button')
      .attr('value','Copy 7479906172')
      .attr('title', 'Copy 7479906172')
      .attr('data-clipboard-target','#copy_code')
      .attr('data-clipboard-text', '7479906172');
      
      appInsights.trackEvent("SurveyComplete", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "SurveyComplete",
        "user_id": globals.userID
      });        

      questionnaire_complete = true;

      break;
  }

  d3.select('#questionnaire_div')
  .style('visibility','visible');

  document.getElementById('questionnaire_div').focus();  
  
}

module.exports = questionnaire;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(16), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(20);
var delegate = __webpack_require__(21);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(22);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);
var chart = __webpack_require__(3);
var nationData = __webpack_require__(2);
var countrySelector = __webpack_require__(4);

function trial () {

  suppress_touch_val_feedback = true;
  suppress_touch_feedback = true;  
  globals.trial_response = [];
  globals.num_selected = 0;
  
  var checkExist;    
  var checkTouch;
  var trial;
  var giveup;
  
  function getDims() {
    height = window.innerHeight;
    width = window.innerWidth;
    svg_dim = d3.min([height,width]) - 2;
    inner_padding = svg_dim * 0.1;
    chart_dim = svg_dim * 0.8;
  }
  
  function draw() {
          
    d3.select('#main_svg')
    .style('height',svg_dim + 'px')
    .style('width',svg_dim + 'px');
    
    chart_g.attr('transform','translate(' + inner_padding + ',' + inner_padding + ')');
  
    d3.selectAll('.guide').remove();
    chart_instance.lines(globals.lines); 
    chart_instance.animation('off');
    chart_instance.facets(globals.facets);
    chart_instance.current_year(globals.facets == 'on' ? globals.param_yearMax : globals.param_yearMin);

    chart_g.call(chart_instance);
    scale_reg = chart_instance.scale_reg();
    d3.select('.year_indicator').style('display','none');
    d3.selectAll('.mark').style('visibility','hidden');
    chart_g.call(chart_instance);
  
    d3.selectAll('.toolbar')
    .style('float', function(){
      return height < width ? 'left' : 'inherit';
    })
    .style('width', function(){
      return height < width ? (height / 7) + 'px'  : width + 'px';
    })
    .style('height', function(){
      return height < width ? height + 'px'  : (width / 7) + 'px';
    });

    d3.select('#prompt')
    .style('margin', function(){
      return height < width ? '0px' : '2px';
    })
    .style('width', function (){
      return height < width ? (height - (height / 7) * 3 - 6) + 'px' : (width - (width / 7) * 3 - 6) + 'px';
    })
    .style('height', function(){
      return height < width ? (height / 7 - 6) : (width / 7 - 6) + 'px';
    }); 

    // d3.select('#trial_div')
    // .style('height', function(){
    //   return svg_dim + (height < width ? (height / 7 - 6) : (width / 7 - 6)) + 'px'; 
    // });

  }
  
  function loadData () {     

    globals.param_x = globals.trials[0].x;
    globals.param_y = globals.trials[0].y;
    globals.param_yearMin = globals.trials[0].yearMin;
    globals.param_yearMax = globals.trials[0].yearMax;

    checkExist = setInterval(function() {
      if (all_data != undefined) {        
        chart_g.datum(all_data);        
        draw();    
        
        nextTrial();
        
        hideAddressBar();

        d3.select('#trial_div')
        .style('visibility','visible');

        clearInterval(checkExist);
      }
    }, 100); // check every 100ms

    chart_instance = chart();    
  
    main_svg = d3.select('#main_svg').remove();
  
    main_svg = d3.select('#trial_div').append('svg')
    .attr('id','main_svg');  
  
    defs = d3.select('#main_svg').append('defs');
  
    chart_g = main_svg.append('g')
    .attr('id','chart_g');    
    
    document.getElementById('trial_div').focus();
  } 

  function nextTrial () {

    d3.selectAll('.mark').style('display',null);
    d3.selectAll('.path_line').style('display',null);
    d3.select('#main_svg').attr('class',null);
    d3.select('#done_btn').attr('class','img_btn_disabled')
    .style('display','none')
    .attr('disabled',true)
    .attr('src', 'assets/na.svg')
    .style('margin', function(){
      return height < width ? '0px' : '2px';
    })
    .attr('height', function(){
      return height < width ? (height / 7 - 6) : (width / 7 - 6);
    })
    .attr('width', function (){
      return width < height ? (width / 7 - 6) : (height / 7 - 6);
    });

    d3.select('#progress_indicator').style('display',null);
    d3.select('#outer_progress_indicator')
    .attr('display', globals.facets == 'on' ? 'none' : null);

    update_outer_progress(1 / 25);
    d3.select('#inner_progress_value').attr('d', globals.inner_progress_circle.endAngle(0));

    d3.select('#menubar').style('display','none');
    d3.select('.year_indicator').style('display','none');
    chart_instance.this_chart().interrupt();

    chart_instance.animation('off');
    chart_g.call(chart_instance);
    
    d3.selectAll('.mark').style('visibility','hidden');
    d3.selectAll('.line').style('visibility','hidden');
    if (document.getElementById('selector_div') != null){
      document.getElementById('selector_div').remove();
    }
    globals.trial_index++;
    globals.trial_response = [];

    if (globals.trial_index != max_trials) {

      var trial_prompt = globals.trials[globals.trial_index].prompt;
      var regex = /<span class='instruction_number'>/gi;
      trial_prompt = trial_prompt.replace(regex,"");
      regex = /<span class='instruction_emphasis'>/gi;
      trial_prompt = trial_prompt.replace(regex,"");
      regex = /<\/span>/gi;
      trial_prompt = trial_prompt.replace(regex,"");

      //init next trial
      trial = {
        user_id: globals.userID,
        trial_index: globals.trial_index,
        condition: globals.condition,
        task_index: globals.trials[globals.trial_index].task_index,
        x: globals.trials[globals.trial_index].x,
        y: globals.trials[globals.trial_index].y,
        prompt: trial_prompt,
        num_responses: globals.trials[globals.trial_index].num_responses,
        correct_responses: globals.trials[globals.trial_index].correct_responses,
        yearMin: globals.trials[globals.trial_index].yearMin,
        yearMax: globals.trials[globals.trial_index].yearMax,
        tutorial: globals.trials[globals.trial_index].tutorial,
        quality_control: globals.trials[globals.trial_index].quality_control,
        responses: [],
        load_time: new Date().valueOf(),
        reading_time: 0,
        reading_interruptions: 0,
        reading_interruption_time: 0,
        start_time: 0,
        interruptions: 0,
        interruption_time: 0,
        end_time: 0,
        completion_time: 0,
        next_step_count: 0,
        prev_step_count: 0,
        loop_count: 0,
        attempts: 0,
        num_errors: 0,
        error: 0,
        give_up: false
      };

      globals.param_x = globals.trials[globals.trial_index].x;
      globals.param_y = globals.trials[globals.trial_index].y;
      globals.param_yearMin = globals.trials[globals.trial_index].yearMin;
      globals.param_yearMax = globals.trials[globals.trial_index].yearMax;

      chart_instance.params().yearMin = globals.param_yearMin;
      chart_instance.current_year(globals.facets == 'on' ? globals.param_yearMax : globals.param_yearMin);
      chart_instance.params().yearMax = globals.param_yearMax;      
      chart_instance.params().x = globals.param_x;
      chart_instance.params().y = globals.param_y;    
      
      chart_g.call(chart_instance);

      d3.select('#trial_div').append('div')
      .attr('class', 'feedback_btn_enabled')
      .style('top',(svg_dim + 5) + 'px')
      .attr('id','start_btn')
      .on('touchstart', function() {   

        startTrial();
      });      

      var eur_hex = scale_reg('EU');
      var eur_color = '';
      switch (eur_hex) {

        case '#fad139':
          eur_color = 'yellow';
          break;

        case '#54b2fc':
          eur_color = 'blue';
          break;

        case '#f67afe':
          eur_color = 'pink';
          break;

        case '#8bba32':
          eur_color = 'green';
          break;

        case '#c29aeb':
          eur_color = 'purple';
          break;

        default:
          eur_color = '';
          break;
      }
      
      var eur_rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(scale_reg('EU'));
      var rgb_result = eur_rgb ? {
        r: parseInt(eur_rgb[1], 16),
        g: parseInt(eur_rgb[2], 16),
        b: parseInt(eur_rgb[3], 16)
      } : null;
      var eur_rgba = 'rgba(' + rgb_result.r + ',' + rgb_result.g + ',' + rgb_result.b + ',0.5)';
      
      var eur = eur_color + " / <span style='font-size:1em; -webkit-text-stroke: 0.5px #fff; color:" + eur_rgba + ";'>⬤</span>";

      globals.trials[globals.trial_index].prompt = globals.trials[globals.trial_index].prompt.replace("foo", eur);

      d3.select('#start_btn').append('span')
      .attr('id','button_text')
      .html(globals.trials[globals.trial_index].prompt + '<br><span>Tap on this message to start ' + (globals.trials[globals.trial_index].tutorial ? 'this <span class="instruction_emphasis">PRACTICE</span> trial.</span>' : ('trial <span class="instruction_emphasis">' + ((globals.trial_index - 3) + 1) + '</span> of <span class="instruction_emphasis">' + (globals.trials.length - 3) + '.</span></span>')));  
    }
    else {
      globals.trial_index = -1;
      experiment_complete = true;

      chart_instance.animation('off');
      chart_instance.lines('off');
      chart_instance.facets('off');
      chart_instance.loop_count(0);
      
      globals.animation = 'off';
      globals.lines = 'off';
      globals.facets = 'off';

      chart_g.call(chart_instance);

      appInsights.trackEvent("TrialsCompleted", { 
        "TimeStamp": new Date().valueOf(),
        "Event": "TrialsCompleted",
        "user_id": globals.userID
      });
      document.getElementById('trial_div').remove();
      
      loadMenu();
      hideAddressBar();  
    }
  }

  function startTrial () {

    chart_instance.loop_count(0);

    d3.select('#menubar').style('display',null);
    d3.select('.year_indicator').style('display',null);

    d3.selectAll('.mark').style('visibility','visible');
    d3.selectAll('.line').style('visibility','visible');

    update_outer_progress(1 / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin));

    if (globals.animation == 'on'){
      chart_instance.animation('on');
      chart_g.call(chart_instance);
    }

    d3.selectAll('.img_btn_disabled')
    .style('margin', function(){
      return height < width ? '0px' : '2px';
    })
    .attr('height', function(){
      return height < width ? (height / 7 - 6) : (width / 7 - 6);
    })
    .attr('width', function (){
      return width < height ? (width / 7 - 6) : (height / 7 - 6);
    }); 

    d3.select('#prev_btn').attr('class',(chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'img_btn_disabled' : (globals.condition == 'stepper' ? 'img_btn_enabled' : 'img_btn_disabled'))
    .attr('disabled', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? true : (globals.condition == 'stepper' ? null : true))
    .attr('src', globals.condition == 'stepper' ? 'assets/prev_grey.svg' : 'assets/na.svg');

    d3.select('#next_btn')
    .attr('class', globals.condition == 'stepper' ? 'img_btn_enabled' : 'img_btn_disabled')
    .attr('disabled', globals.condition == 'stepper' ? null : true)
    .attr('src', globals.condition == 'stepper' ? 'assets/next.svg' : 'assets/na.svg');

    d3.select('#done_btn')
    .style('display','none')
    .attr('class', 'img_btn_disabled')
    .attr('disabled',true);

    trial.interruptions = 0;
    trial.interruption_time = 0;
    trial.start_time = new Date().valueOf();
    
    if (resumptions.length > 0 ) {
      var i = resumptions.length - 1;
      while (resumptions[i].resumption_time > trial.load_time && i >= 0) {
        trial.reading_interruptions++;
        trial.reading_interruption_time += resumptions[i].pause_duration;
        i--;
      }
    }

    trial.reading_time = trial.start_time - trial.load_time - trial.reading_interruption_time;
    
    d3.select('#start_btn').remove();
    countrySelector();
    d3.select('.task_instruction_span').html(globals.trials[globals.trial_index].prompt);   

    if (globals.trials[globals.trial_index].tutorial != true) {
      giveUpLoop();
    }

  }

  function giveUpLoop () {

    giveup = setTimeout(function(){
      // I give up / I don't know option presented after 30s
      d3.select('#main_svg').attr('class','blurme');
      d3.select('#selector_div').style('display','none');
      d3.select('#menubar').style('display','none');

      var keep_going_btn =  d3.select('#trial_div').append('div')
      .attr('class', 'feedback_btn_enabled')
      .attr('id','keep_going_btn')
      .style('background','#8bc34a')
      .style('height','50px')
      .style('border-color','#fff')
      .on('touchstart', function() {  

        d3.event.preventDefault(); 
        
        d3.select('#keep_going_btn').remove();
        d3.select('#give_up_btn').remove();
        d3.select('#menubar').style('display',null);
        d3.select('#main_svg').attr('class',null);
        d3.select('#selector_div').style('display',null);            
        giveUpLoop();
        
      });  

      keep_going_btn.append('span')
      .attr('id','button_text')      
      .style('color','#111')
      .style('font-weight','400')
      .html('<span class="correct_incorrect">NEED MORE TIME?</span><br>Tap on this message if you need more time.'); 

      var give_up_btn =  d3.select('#trial_div').append('div')
      .attr('class', 'feedback_btn_enabled')
      .attr('id','give_up_btn')
      .style('height','50px')
      .style('background','#ef5350')
      .style('border-color','#fff')
      .on('touchstart', function() {  

        d3.event.preventDefault(); 
        
        d3.select('#keep_going_btn').remove();
        d3.select('#give_up_btn').remove();  
        trial.give_up = true;     
        endTrial();            
        
      });  

      give_up_btn.append('span')
      .attr('id','button_text')      
      .style('color','#111')
      .style('font-weight','400')
      .html('<span class="correct_incorrect">GIVE UP?</span><br>Tap on this message if you don\'t know the answer.'); 

    }, 60000);

  }

  function endTrial () {

    clearTimeout(giveup);

    if (d3.select('#done_btn').attr('disabled') == null || trial.give_up) {

      var i = 0;
      trial.num_errors = 0;
      trial.loop_count = chart_instance.loop_count();
      trial.attempts++;

      for (i = 0; i < globals.trial_response.length; i++) {
        if (globals.trials[globals.trial_index].correct_responses.indexOf(globals.trial_response[i]) == -1) {
          trial.num_errors++;
        }
      }

      trial.error = trial.num_errors / globals.trials[globals.trial_index].num_responses;

      if (trial.give_up) {
        trial.num_errors = globals.trials[globals.trial_index].num_responses;
        trial.error = 1;
      }

      if (resumptions.length > 0 ) {
        var j = resumptions.length - 1;
        while (resumptions[j].resumption_time > trial.start_time && j >= 0) {
          trial.interruptions++;
          trial.interruption_time += resumptions[j].pause_duration;
          j--;
        }
      }

      trial.end_time = new Date().valueOf();
      trial.completion_time = trial.end_time - trial.start_time - trial.interruption_time;
      trial.responses = globals.trial_response;

      console.log(trial);
      appInsights.trackEvent("TrialComplete", trial);

      if (globals.trials[globals.trial_index].tutorial == true) {

        d3.select('#main_svg').attr('class','blurme');
        d3.select('#selector_div').remove();
        d3.select('#menubar').style('display','none');
        // give feedback for tutorial trials
        if (trial.error != 0){
          //give negative feedback

          var incorrect_feedback_btn =  d3.select('#trial_div').append('div')
          .attr('class', 'feedback_btn_enabled')
          .attr('id','feedback_btn')
          .style('background','#ef5350')
          .style('border-color','#fff')        
          .on('touchstart', function() {  

            d3.event.preventDefault(); 

            if (trial.attempts >= 2) {
              //show hint   
              all_data.forEach(function (d){
                if (globals.trials[globals.trial_index].correct_responses.indexOf(d.name) != -1) {
                  d3.select('#mark_' + d.code).style('display',null);
                  d3.select('#line_' + d.code).select('.path_line').style('display',null);
                }
                else {
                  d3.select('#line_' + d.code).select('.path_line').style('display','none');
                  d3.select('#mark_' + d.code).style('display','none');
                }
              });

              if (trial.attempts <= 3) {
                setTimeout(function(){
                  // Hide the address bar!
                  d3.selectAll('.mark').style('display',null);
                  d3.selectAll('.path_line').style('display',null);
                }, 1500);    
              }
        
            }

            d3.select('#progress_indicator').style('display',null);
            d3.select('#outer_progress_indicator')
            .attr('display', globals.facets == 'on' ? 'none' : null);
            d3.select('#done_btn').attr('class','img_btn_disabled')
            .style('display','none')
            .attr('disabled',true)
            .attr('src', 'assets/na.svg')
            .style('margin', function(){
              return height < width ? '0px' : '2px';
            })
            .attr('height', function(){
              return height < width ? (height / 7 - 6) : (width / 7 - 6);
            })
            .attr('width', function (){
              return width < height ? (width / 7 - 6) : (height / 7 - 6);
            });
            d3.select('#feedback_btn').remove();
            d3.select('#menubar').style('display',null);
            d3.select('#main_svg').attr('class',null);
            globals.num_selected = 0;
            globals.trial_response = [];
            trial.responses = [];
            trial.error = 0;
            trial.num_errors = 0;
            countrySelector();
            d3.select('#inner_progress_value').attr('d', globals.inner_progress_circle.endAngle(0));
            
            //try again
            trial.start_time = new Date().valueOf();
          });  

          incorrect_feedback_btn.append('span')
          .attr('id','button_text')
          .style('color','#111')
          .style('font-weight','400')
          .html(function() {            
            if (trial.attempts > 3) {
              return '<span class="correct_incorrect">INCORRECT</span><br>Tap on this message to see the correct response.';
            } 
            else if (trial.attempts > 1) {
              return '<span class="correct_incorrect">INCORRECT</span><br>Tap on this message to see a brief hint.';
            } 
            else {
               return '<span class="correct_incorrect">INCORRECT</span><br>Tap on this message to try again.';
            }
          }); 
        }
        else {
          //give positive feedback

          d3.select('#selector_div').remove();
          d3.select('#menudiv').remove();
        
          var correct_feedback_btn = d3.select('#trial_div').append('div')
          .attr('class', 'feedback_btn_enabled')
          .attr('id','feedback_btn')
          .style('background','#8bc34a')
          .style('border-color','#fff')
          .on('touchstart', function() { 

            d3.event.preventDefault(); 

            d3.select('#feedback_btn').remove(); 
            if (globals.trial_index == 2) {

              console.log('test trial warning');

              var timed_trial_warning = d3.select('#trial_div').append('div')
              .attr('class', 'feedback_btn_enabled')
              .attr('id','timed_trial_warning')
              .style('border-color','#fff')
              .on('touchstart', function() {    
                d3.event.preventDefault(); 
                d3.select('#timed_trial_warning').remove(); 
                nextTrial();
              }); 
              
              timed_trial_warning.append('span')
              .attr('id','button_text')
              .style('font-weight','400')
              .html('The remaining trials will be timed. Complete each trial as <span class="instruction_emphasis">quickly</span> as you can. You will not be told if your responses are correct. <br><span class="instruction_emphasis">Tap on this message to continue</span>.');  
            }
            else {
              nextTrial();
            }
             
          });        

          correct_feedback_btn.append('span')
          .attr('id','button_text')
          .style('color','#111')
          .style('font-weight','400')
          .html('<span class="correct_incorrect">CORRECT</span><br>Tap on this message to continue.<br>');  
        }
      }
      else {
        //test trial
        nextTrial();
      }

    }
  }
    
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','trial_div')
  .attr('tabindex',0);

  all_data = nationData;  
  if (non_interactive){
    var codes = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"]; //,
    codes = shuffle(codes);
    all_data.forEach(function (d,i){ 
      d.code = codes[i]; 
    });
  }
  else {
    all_data.forEach(function (d){ 
      d.code = d.orig_code; 
    });
  }     
  loadData(); 

  getDims();

  var menubar = d3.select('#trial_div').append('div')
  .attr('class','toolbar')
  .style('display','none')
  .attr('id','menubar');  

  menubar.append("input")
  .attr('class','img_btn_disabled')  
  .attr('id','prev_btn')
  .attr('type','image')
  .attr('name','PrevToggle')
  .attr('title', 'PrevToggle')
  .attr('disabled', true)
  .attr('src', globals.condition == 'stepper' ? 'assets/prev_grey.svg' : 'assets/na.svg')
  .on('touchstart', function() {    
    d3.event.preventDefault();    

    if (globals.condition == 'stepper'){

      clearTimeout(giveup);
      giveUpLoop();

      d3.select(this).attr('src', globals.condition == 'stepper' ? (chart_instance.loop_count() < 1 ? 'assets/prev_grey.svg' : 'assets/prev_gold.svg') : 'assets/na.svg');
      chart_instance.this_chart().interrupt();      

      if (chart_instance.current_year() != chart_instance.params().yearMin) {      
        var prev_year = chart_instance.current_year() - 1;
        chart_instance.current_year(prev_year);
        var outer_progress =  ((prev_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
        update_outer_progress(chart_instance.loop_count() + outer_progress);
        
      }
      else if (chart_instance.loop_count() > 0 && chart_instance.current_year() == chart_instance.params().yearMin) {
        chart_instance.current_year(chart_instance.params().yearMax);
        d3.selectAll('.mark').style('display','none');
        d3.selectAll('.path_line').style('display','none');
        setTimeout(function(){
          d3.selectAll('.mark').style('display',null);
          d3.selectAll('.path_line').style('display',null);
        }, 500);
      }
      trial.prev_step_count++;
      chart_g.call(chart_instance);

      checkTouch = setInterval(function() {
        if (chart_instance.current_year() != chart_instance.params().yearMin) {
          var prev_year = chart_instance.current_year() - 1;
          chart_instance.current_year(prev_year);   
          var outer_progress =  ((prev_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
          update_outer_progress(chart_instance.loop_count() + outer_progress);
        }
        else if (chart_instance.loop_count() > 0 && chart_instance.current_year() == chart_instance.params().yearMin) {
          chart_instance.current_year(chart_instance.params().yearMax);
          d3.selectAll('.mark').style('display','none');
          d3.selectAll('.path_line').style('display','none');
          setTimeout(function(){
            d3.selectAll('.mark').style('display',null);
            d3.selectAll('.path_line').style('display',null);
          }, 500);
        }
        trial.prev_step_count++;
        chart_g.call(chart_instance);
        
      }, 500); // check every 500ms if touch is ongoing          

    }
  })
  .on('touchend', function(){
    
    d3.event.preventDefault();
    clearInterval(checkTouch);

    if (globals.condition == 'stepper') {
      d3.select(this).attr('class',(chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'img_btn_disabled' : 'img_btn_enabled')
      .attr('disabled', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? true : null)
      .attr('src', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'assets/prev_grey.svg' : 'assets/prev.svg');
    }
  });    

  menubar.append("input")
  .attr('id','next_btn')
  .attr('class', 'img_btn_disabled')  
  .attr('type','image') 
  .attr('name','NextToggle')
  .attr('title', 'NextToggle')
  .attr('src', globals.condition == 'stepper' ? 'assets/next.svg' : 'assets/na.svg')
  .attr('disabled', globals.condition == 'stepper' ? null : true)
  .on('touchstart', function() {    
    d3.event.preventDefault();    

    if (globals.condition == 'stepper'){

      clearTimeout(giveup);
      giveUpLoop();

      d3.select(this).attr('src', globals.condition == 'stepper' ? 'assets/next_gold.svg' : 'assets/na.svg');
      chart_instance.this_chart().interrupt();

      if (chart_instance.current_year() == chart_instance.params().yearMax) {
        chart_instance.current_year(chart_instance.params().yearMin);
        d3.selectAll('.mark').style('display','none');
        d3.selectAll('.path_line').style('display','none');
        setTimeout(function(){
          d3.selectAll('.mark').style('display',null);
          d3.selectAll('.path_line').style('display',null);
        }, 500);
      }
      else {
        var next_year = chart_instance.current_year() + 1;
        var outer_progress =  ((next_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
        update_outer_progress(chart_instance.loop_count() + outer_progress);
        if (chart_instance.current_year() == (chart_instance.params().yearMax - 1)) {
          chart_instance.loop_count(chart_instance.loop_count() + 1);
          if (globals.num_selected == globals.trials[globals.trial_index].num_responses){          
            d3.select('#progress_indicator').style('display','none');
            d3.select('#done_btn').attr('class','img_btn_enabled')
            .style('display',null)
            .attr('disabled',null)
            .attr('src', 'assets/done.svg');
          }
        }
        chart_instance.current_year(next_year);
      }
      trial.next_step_count++;
      chart_g.call(chart_instance);     

      checkTouch = setInterval(function() {
        if (chart_instance.current_year() == chart_instance.params().yearMax) {
          chart_instance.current_year(chart_instance.params().yearMin);
          d3.selectAll('.mark').style('display','none');
          d3.selectAll('.path_line').style('display','none');
          setTimeout(function(){
            d3.selectAll('.mark').style('display',null);
            d3.selectAll('.path_line').style('display',null);
          }, 500);
        }
        else {
          var next_year = chart_instance.current_year() + 1;
          var outer_progress =  ((next_year + 1) - chart_instance.params().yearMin) / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin);
          update_outer_progress(chart_instance.loop_count() + outer_progress);
          if (chart_instance.current_year() == (chart_instance.params().yearMax - 1)) {
            chart_instance.loop_count(chart_instance.loop_count() + 1);
            if (globals.num_selected == globals.trials[globals.trial_index].num_responses){          
              d3.select('#progress_indicator').style('display','none');
              d3.select('#done_btn').attr('class','img_btn_enabled')
              .style('display',null)
              .attr('disabled',null)
              .attr('src', 'assets/done.svg');
            }
          }
          chart_instance.current_year(next_year);
        }
        trial.next_step_count++;
        chart_g.call(chart_instance);
      }, 500); // check every 500ms if touch is ongoing    

    }
  })
  .on('touchend', function(){

    d3.event.preventDefault();
    clearInterval(checkTouch);

    d3.select(this).attr('src', globals.condition == 'stepper' ? 'assets/next.svg' : 'assets/na.svg');

    if (globals.condition == 'stepper') {
      d3.select('#prev_btn').attr('class',(chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'img_btn_disabled' : 'img_btn_enabled')
      .attr('disabled', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? true : null)
      .attr('src', (chart_instance.current_year() == chart_instance.params().yearMin && chart_instance.loop_count() < 1) ? 'assets/prev_grey.svg' : 'assets/prev.svg');
    }

  });    

  var prompt = menubar.append("div")
  .attr('id','prompt')
  .on('touchstart', function() {    
    d3.event.preventDefault(); 
  });

  prompt.append('span')
  .attr('class','task_instruction_span')
  .html('');  

  menubar.append("input")
  .attr('class', 'img_btn_disabled')
  .attr('disabled',true)
  .style('display','none')
  .attr('id','done_btn')
  .attr('type','image')
  .attr('name','Done')
  .attr('title', 'Done')
  .attr('src', 'assets/na.svg')
  .on('touchstart', endTrial);

  //progress indicators
  var progress_colors = {
    outer_fill: 'gold',
    inner_fill: '#fff',
    track: '#999',
    stroke: '#333',
  };

  var progress_radius = (height < width ? (height / 7 - 6) : (width / 7 - 6)) / 2;
  var progress_stroke = 2;
  var progress_dim = progress_radius * 2;

  var progress_svg = menubar.append("svg")
  .attr('disabled',true)
  .attr('id','progress_indicator')
  .attr('height', progress_dim)
  .attr('width', progress_dim);
  
  globals.outer_progress_circle = d3.arc()
  .startAngle(0)
  .cornerRadius(7.5)
  .innerRadius(progress_radius)
  .outerRadius(progress_radius - 7.5);

  var outer_track_circle = d3.arc()
  .startAngle(0)
  .endAngle(Math.PI * 2)
  .innerRadius(progress_radius)
  .outerRadius(progress_radius - 7.5);

  globals.inner_progress_circle = d3.arc()
  .startAngle(0)
  .cornerRadius(7.5)
  .innerRadius(progress_radius - 7.5)
  .outerRadius(progress_radius - 15);

  var inner_track_circle = d3.arc()
  .startAngle(0)
  .endAngle(Math.PI * 2)
  .innerRadius(progress_radius - 7.5)
  .outerRadius(progress_radius - 15);

  var outer_progress_track = progress_svg.append('g')
  .attr('id','outer_progress_indicator')
  .attr('display', globals.facets == 'on' ? 'none' : null)
  .attr('transform', 'translate(' + progress_dim / 2 + ',' + progress_dim / 2 + ')');
  
  outer_progress_track.append('path')
  .attr('fill', progress_colors.track)
  .attr('stroke', progress_colors.stroke)
  .attr('stroke-width', progress_stroke + 'px')
  .attr('d', outer_track_circle);

  outer_progress_track.append('path')
  .attr('id', 'outer_progress_value')
  .attr('fill', progress_colors.outer_fill)
  .attr('stroke', progress_colors.stroke)
  .attr('stroke-width', progress_stroke + 'px')
  .attr('d', globals.inner_progress_circle.endAngle(0));

  function update_outer_progress(progress) {
    d3.select('#outer_progress_value').attr('d', globals.outer_progress_circle.endAngle((Math.PI * 2) * progress));
  } 

  update_outer_progress(1 / ((chart_instance.params().yearMax + 1) - chart_instance.params().yearMin));

  var inner_progress_track = progress_svg.append('g')
  .attr('id','inner_progress_indicator')
  .attr('display', null)
  .attr('transform', 'translate(' + progress_dim / 2 + ',' + progress_dim / 2 + ')');
  
  inner_progress_track.append('path')
  .attr('fill', progress_colors.track)
  .attr('stroke', progress_colors.stroke)
  .attr('stroke-width', progress_stroke + 'px')
  .attr('d', inner_track_circle);

  inner_progress_track.append('path')
  .attr('id', 'inner_progress_value')
  .attr('fill', progress_colors.inner_fill)
  .attr('stroke', progress_colors.stroke)
  .attr('stroke-width', progress_stroke + 'px')
  .attr('d', globals.inner_progress_circle.endAngle(0));
  
}

module.exports = trial;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(1);
var globals = __webpack_require__(0);

function menu () {
    
  /** INIT **/
  
  d3.select('body').append('div')
  .attr('id','menu_div')
  .attr('tabindex',0);  

  var instruction_div = d3.select('#menu_div').append('div')
  .attr('class','toolbar')
  .attr('id','instruction_div')
  .style('height','50px');  

  instruction_div.append('span')
  .attr('id','instruction_text')
  .html('<span class="instruction_emphasis">BUBBLE <span class="instruction_emphasis" id="secret_sandbox">CHARTS</span> ON MOBILE PHONES</span><br>Tap on the buttons below to proceed with the experiment.');  
  var navbar = d3.select('#menu_div').append('div')
  .attr('class','toolbar')
  .attr('id','navbar');

  navbar.append("input")
  .attr('class', test_override || !consent_complete ? 'menu_btn_enabled' : 'menu_btn_disabled')
  .attr('disabled', test_override || !consent_complete ? null : true)
  .attr('id','consent_btn')    
  .attr('type','button')
  .attr('value','1. Consent to Participate')
  .attr('title', '1. Consent to Participate');

  navbar.append("input")
  .attr('class', test_override || (!introduction_complete && consent_complete) ? 'menu_btn_enabled' : 'menu_btn_disabled')
  .attr('disabled', test_override || (!introduction_complete && consent_complete) ? null : true)
  .attr('id','introduction_btn')    
  .attr('type','button')
  .attr('value','2. Introduction to the Experiment')
  .attr('title', '2. Introduction to the Experiment');  

  navbar.append("input")
  .attr('id','trial_btn')
  .attr('class', (test_override || (introduction_complete && !experiment_complete)) ? 'menu_btn_enabled' : 'menu_btn_disabled')
  .attr('disabled', (test_override || (introduction_complete && !experiment_complete)) ? null : true)
  .attr('type','button')
  .attr('value','3. Experiment')
  .attr('title', '3. Experiment');

  navbar.append("input")
  .attr('class', (test_override || experiment_complete) ? 'menu_btn_enabled' : 'menu_btn_disabled')
  .attr('disabled', (test_override || experiment_complete) ? null : true)
  .attr('id','questionnaire_btn')    
  .attr('type','button')
  .attr('value','4. Survey & Conclusion')
  .attr('title', '4. Survey & Conclusion');

  // var param_list = [
  //   "Life Expectancy",
  //   "Income Per Capita ($)",
  //   "GDP Per Capita ($)",
  //   "Fertility Rate",
  //   "CO2 Emissions",
  //   "Population",
  //   "Electricity Consumption (kWh)",
  //   "Infant Mortality (per 1k births)",
  //   "Murder Rate (per 100k)",
  //   "Traffic Mortalities (per 100k)"
  // ];

  // var param_list = [
  //   "Population",
  //   "Arable Area",
  //   "Energy Consumption",
  //   "GDP Per Capita",
  //   "Life Expectancy (Women)",
  //   "Life Expectancy (Men)",
  //   "Life Expectancy",
  //   "Infant Mortality",
  //   "Number of Personal Computers"
  // ];

  // navbar.append("select")
  // .attr('id','x_picker')
  // .attr('class','menu_select_enabled')
  // .on('change', function() {
  //   if (globals.param_y == d3.select(this).property('value')){
  //     d3.select(this).property('value', globals.param_x);
  //     alert('x != y');
  //   }
  //   else{
  //     globals.param_x = d3.select(this).property('value');
  //   }
  //   console.log(globals.param_x);
  // })
  // .selectAll('option')
  // .data(param_list)
  // .enter()
  // .append('option')
  // .attr("value", function (d) { return d; })
  // .text(function (d) { return 'x: ' + d; })
  // .property("selected", function (d) {
  //   return d === globals.param_x;
  // });

  // navbar.append("select")
  // .attr('id','y_picker')
  // .attr('class','menu_select_enabled')  
  // .on('change', function() {
  //   if (globals.param_x == d3.select(this).property('value')){
  //     d3.select(this).property('value', globals.param_y);
  //     alert('y != x');
  //   }
  //   else {
  //     globals.param_y = d3.select(this).property('value');
  //   }
  //   console.log(globals.param_y);
  // })
  // .selectAll('option')
  // .data(param_list)
  // .enter()
  // .append('option')
  // .attr("value", function (d) { return d; })
  // .text(function (d) { return 'y: ' + d; })
  // .property("selected", function (d) {
  //   return d === globals.param_y;
  // });
 
}

module.exports = menu;


/***/ })
/******/ ]);