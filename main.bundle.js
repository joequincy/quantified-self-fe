/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _diary = __webpack_require__(1);

	var _diary2 = _interopRequireDefault(_diary);

	var _diaryModel = __webpack_require__(5);

	var _diaryModel2 = _interopRequireDefault(_diaryModel);

	var _app = __webpack_require__(6);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var diary = new _diaryModel2.default($('#diary')[0]);
	var app = new _app2.default(diary);
	diary.useApp = app;

	app.setupBindings();

	diary.reset();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./diary.scss", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/index.js!./diary.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".modalForm {\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.modalForm section {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -200px;\n  margin-top: -80px;\n  width: 400px;\n  height: 160px;\n  border-radius: 5px;\n  padding: 10px;\n  box-sizing: border-box;\n  box-shadow: 0 0 5px 1px #333333;\n  background-color: #FFFFFF; }\n\n.hidden, .meal ul:empty, .meal ul:empty::before {\n  display: none !important; }\n\n.meal > .name {\n  font-size: 18pt;\n  font-weight: bold; }\n\n.meal ul::before {\n  content: 'Food';\n  font-size: 16pt; }\n\n.meal li {\n  font-size: 12pt; }\n\n.additions-container {\n  width: 79%;\n  display: flex;\n  justify-content: center; }\n\n#additions {\n  width: 2rem;\n  display: flex;\n  justify-content: space-between; }\n\n#additions a {\n  margin: 1rem; }\n\nli {\n  list-style: none;\n  padding: .3rem; }\n\n#diary {\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.meal {\n  border: .2rem solid black;\n  border-radius: .8rem;\n  justify-content: center;\n  align-content: center;\n  background-color: #F5FCFF; }\n\n.meal-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.default-button {\n  font-size: .8rem; }\n\n.default-button:hover {\n  background: lightblue; }\n\nbody {\n  background: lightgreen; }\n\nh1 {\n  display: flex;\n  justify-content: center;\n  font-size: 3rem; }\n\n.meal:hover {\n  background: lightyellow; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Diary = function () {
	  function Diary(elm) {
	    _classCallCheck(this, Diary);

	    this.container = elm;
	    this.foodList = [];
	  }

	  _createClass(Diary, [{
	    key: 'reset',
	    value: function reset() {
	      $(this.container).empty();
	      this.foodList = [];
	      this.initializeFood();
	      this.initializeMeals();
	    }
	  }, {
	    key: 'initializeMeals',
	    value: function initializeMeals(mealPromise) {
	      var _this = this;

	      this.app.getAllMeals().then(function (meals) {
	        meals.forEach(function (meal) {
	          _this.appendMeal(meal);
	        });
	      }).catch(function (e) {
	        console.error(e.error);
	      });
	    }
	  }, {
	    key: 'initializeFood',
	    value: function initializeFood(foodPromise) {
	      var _this2 = this;

	      this.app.getAllFood().then(function (foods) {
	        _this2.foodList = foods;
	      }).catch(function (e) {
	        console.error(e.error);
	      });
	    }
	  }, {
	    key: 'appendMeal',
	    value: function appendMeal(meal, target) {
	      var _this3 = this;

	      var clone = importTemplate('#mealTemplate');
	      $('.meal', clone).attr('data-meal-id', meal.id);
	      $('.name', clone).html(meal.name);
	      var appendedElm = null;
	      if (target) {
	        $(target).replaceWith(clone);
	        appendedElm = clone;
	      } else {
	        appendedElm = $(clone).appendTo(this.container).get(0);
	      }
	      if (meal.hasOwnProperty('Food')) {
	        meal.Food.sort(function (a, b) {
	          return a.id - b.id;
	        }).forEach(function (food) {
	          _this3.appendFood(food, $('ul', appendedElm));
	        });
	      }
	      $('.showAddFoodToMealButton', appendedElm).on('click', null, { type: 'FoodToMeal' }, function (e) {
	        return _this3.app.showAddForm(e);
	      });
	      $('.deleteMealButton', appendedElm).on('click', null, { type: 'DeleteMeal' }, function (e) {
	        return _this3.app.sendRequest(e);
	      });
	    }
	  }, {
	    key: 'appendFood',
	    value: function appendFood(food, target) {
	      var _this4 = this;

	      var clone = importTemplate('#foodTemplate');
	      $(clone).attr('data-food-id', food.id);
	      $('.name', clone).text(food.name);
	      $('.calories', clone).text(food.calories + " cal");
	      target.append(clone);
	      $('.removeFoodFromMealButton', clone).on('click', null, { type: 'RemoveFoodFromMeal' }, function (e) {
	        return _this4.app.sendRequest(e);
	      });
	    }
	  }, {
	    key: 'useApp',
	    set: function set(app) {
	      this.app = app;
	    }
	  }]);

	  return Diary;
	}();

	exports.default = Diary;


	function importTemplate(selector) {
	  var template = $(selector)[0].content;
	  return document.importNode(template, true).firstElementChild;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var QSapp = function () {
	  function QSapp(diary) {
	    _classCallCheck(this, QSapp);

	    this.diary = diary;
	    this.self = this;
	    this.apiHost = 'https://quantified-self-be-raad.herokuapp.com/api/v1/';
	  }

	  _createClass(QSapp, [{
	    key: 'getAllFood',
	    value: function getAllFood() {
	      return fetch(this.apiHost + 'foods').then(function (response) {
	        return response.json();
	      }).then(function (foods) {
	        return foods.sort(function (a, b) {
	          return a.id - b.id;
	        });
	      }).catch(function (e) {
	        return console.dir(e);
	      });
	    }
	  }, {
	    key: 'getAllMeals',
	    value: function getAllMeals() {
	      return fetch(this.apiHost + 'meals').then(function (response) {
	        return response.json();
	      }).then(function (meals) {
	        return meals.sort(function (a, b) {
	          return a.id - b.id;
	        });
	      }).catch(function (e) {
	        return console.dir(e);
	      });
	    }
	  }, {
	    key: 'showAddForm',
	    value: function showAddForm(event) {
	      var _this = this;

	      var type = event.data.type;
	      var clone = $('#additions>#add' + type + 'Form');
	      if (clone.length == 1) {
	        this.elmToggleVisibility.call(clone[0], true);
	        clone[0][0].focus();
	      } else {
	        var template = $('#add' + type + 'FormTemplate')[0].content;
	        clone = document.importNode(template, true).firstElementChild;
	        var appendedElm = $(clone).appendTo('#additions').get(0);
	        var inserted = $('#additions>#add' + type + 'Form').submit({ type: type }, function (e) {
	          return _this.sendRequest(e);
	        }).click(this.elmToggleVisibility);
	        inserted[0][0].focus();
	      }
	      switch (type) {
	        case 'FoodToMeal':
	          var meal = $(event.target).closest('.meal')[0];
	          $('h3', appendedElm).append(meal.children[0].textContent);
	          var mealId = parseInt(meal.attributes['data-meal-id'].textContent);
	          this.populateFoods(mealId, appendedElm);
	          break;
	      }
	    }
	  }, {
	    key: 'showFoodDeleteForm',
	    value: function showFoodDeleteForm(event) {
	      var _this2 = this;

	      var clone = $('#additions>#deleteFoodForm');
	      if (clone.length == 1) {
	        this.elmToggleVisibility.call(clone[0], true);
	        clone[0][0].focus();
	      } else {
	        var template = $('#deleteFoodFormTemplate')[0].content;
	        clone = document.importNode(template, true).firstElementChild;
	        var appendedElm = $(clone).appendTo('#additions').get(0);
	        this.populateFoods(0, appendedElm);
	        var inserted = $('#additions>#deleteFoodForm').submit({ type: 'DeleteFood' }, function (e) {
	          return _this2.sendRequest(e);
	        }).click(this.elmToggleVisibility);
	        inserted[0][0].focus();
	      }
	    }
	  }, {
	    key: 'populateFoods',
	    value: function populateFoods(mealId, form) {
	      if (mealId != 0) {
	        form.elements['mealId'].value = mealId;
	      }
	      var select = $('select', form);
	      this.diary.foodList.forEach(function (food) {
	        select.append('<option value="' + food.id + '">' + food.name + ' - ' + food.calories + 'cal</option>');
	      });
	    }
	  }, {
	    key: 'postNewFood',
	    value: function postNewFood(form) {
	      var _this3 = this;

	      fetch(this.apiHost + 'foods', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ food: {
	            name: form[0].value,
	            calories: form[1].value
	          } })
	      }).then(function (r) {
	        return r.json();
	      }).then(function (food) {
	        _this3.diary.foodList.push(food);
	      });
	      $(form).remove();
	    }
	  }, {
	    key: 'postNewMeal',
	    value: function postNewMeal(form) {
	      var _this4 = this;

	      fetch(this.apiHost + 'meals', {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ meal: {
	            name: form[0].value
	          } })
	      }).then(function (r) {
	        return r.json();
	      }).then(function (meal) {
	        _this4.diary.appendMeal(meal);
	      });
	      $(form).remove();
	    }
	  }, {
	    key: 'postFoodToMeal',
	    value: function postFoodToMeal(form) {
	      var _this5 = this;

	      fetch(this.apiHost + 'meals/' + form[1].value + '/foods/' + form[0].value, {
	        method: 'POST'
	      }).then(function (r) {
	        return r.json();
	      }).then(function (response) {
	        fetch(_this5.apiHost + 'meals/' + form[1].value).then(function (r) {
	          return r.json();
	        }).then(function (meal) {
	          var replacedMeal = $('.meal[data-meal-id=' + form[1].value + ']')[0];
	          _this5.diary.appendMeal(meal, replacedMeal);
	        });
	        // alert(response.message)
	      });
	      $(form).remove();
	    }
	  }, {
	    key: 'removeFoodFromMeal',
	    value: function removeFoodFromMeal(link) {
	      var _this6 = this;

	      var foodId = $(link).closest('.food')[0].attributes['data-food-id'].textContent;
	      var mealId = $(link).closest('.meal')[0].attributes['data-meal-id'].textContent;
	      fetch(this.apiHost + 'meals/' + mealId + '/foods/' + foodId, {
	        method: 'DELETE'
	      }).then(function (r) {
	        if (!r.ok) {
	          throw Error(r.json());
	        }
	      }).then(function (response) {
	        fetch(_this6.apiHost + 'meals/' + mealId).then(function (r) {
	          return r.json();
	        }).then(function (meal) {
	          var affectedMeal = $('.meal[data-meal-id=' + mealId + ']')[0];
	          _this6.diary.appendMeal(meal, affectedMeal);
	        });
	        // alert(response.message)
	      }).catch(function (e) {
	        console.error(e.error);
	      });
	    }
	  }, {
	    key: 'deleteMeal',
	    value: function deleteMeal(link) {
	      var mealId = $(link).closest('.meal')[0].attributes['data-meal-id'].textContent;
	      fetch(this.apiHost + 'meals/' + mealId, {
	        method: 'DELETE'
	      }).then(function (r) {
	        if (!r.ok) {
	          throw Error(r.json());
	        }
	      }).then(function (response) {
	        $('.meal[data-meal-id=' + mealId + ']').remove();
	      }).catch(function (e) {
	        console.error(e);
	      });
	    }
	  }, {
	    key: 'deleteFood',
	    value: function deleteFood(form) {
	      var _this7 = this;

	      fetch(this.apiHost + 'foods/' + form[0].value, {
	        method: 'DELETE'
	      }).then(function (r) {
	        if (!r.ok) {
	          throw Error(r.json());
	        }
	      }).catch(function (e) {
	        console.error(e);
	      }).then(function () {
	        _this7.diary.reset();
	      });
	      $(form).remove();
	    }
	  }, {
	    key: 'sendRequest',
	    value: function sendRequest(e) {
	      e.preventDefault();
	      switch (e.data.type) {
	        case 'Food':
	          this.postNewFood(e.target);
	          break;
	        case 'Meal':
	          this.postNewMeal(e.target);
	          break;
	        case 'FoodToMeal':
	          this.postFoodToMeal(e.target);
	          break;
	        case 'RemoveFoodFromMeal':
	          this.removeFoodFromMeal(e.target);
	          break;
	        case 'DeleteMeal':
	          this.deleteMeal(e.target);
	          break;
	        case 'DeleteFood':
	          this.deleteFood(e.target);
	          break;
	      }
	    }
	  }, {
	    key: 'elmToggleVisibility',
	    value: function elmToggleVisibility(e) {
	      if (e === true || e.target == this) {
	        $(this).toggleClass('hidden');
	      }
	    }
	  }, {
	    key: 'setupBindings',
	    value: function setupBindings() {
	      var _this8 = this;

	      $('#showAddFoodButton').on('click', null, { type: 'Food' }, function (e) {
	        return _this8.showAddForm(e);
	      });
	      $('#showAddMealButton').on('click', null, { type: 'Meal' }, function (e) {
	        return _this8.showAddForm(e);
	      });
	      $('#deleteFoodButton').on('click', null, { type: 'DeleteFood' }, function (e) {
	        return _this8.showFoodDeleteForm(e);
	      });
	    }
	  }]);

	  return QSapp;
	}();

	exports.default = QSapp;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ })
/******/ ]);
