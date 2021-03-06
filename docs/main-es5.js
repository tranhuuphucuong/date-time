(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/cuongtran/cuong/date-time/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/utils/timezone */
      "e2en");
      /* harmony import */


      var _date_time_date_time_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./date-time/date-time.component */
      "r1zq");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.date = new Date();
          this.year = "";
          this.month = "";
          this.day = "";
          this.hour = "";
          this.minute = "";
          this.second = "";
          this.milliseconds = "";
          this.dateTime = {};
          this.dateTimeUTC = {};
          this.dateTimeLocal = {};
          this.dateTimeCustom = "abcd";
          this.timestamp = Date.now();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setInterval(function () {
              var now = new Date();
              _this.dateTimeCustom = Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "yyyy MM dd, HH:mm:ss.SSS", {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
              });
              _this.year = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "yyyy");
              _this.month = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "MM");
              _this.day = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "dd");
              _this.hour = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "HH");
              _this.minute = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "mm");
              _this.second = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "ss");
              _this.milliseconds = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["format"])(now, "SSS");
              _this.timestamp = now.getTime();
              _this.dateTime = {
                year: _this.year,
                month: _this.month,
                day: _this.day,
                hour: _this.hour,
                minute: _this.minute,
                second: _this.second,
                milliseconds: _this.milliseconds,
                timezone: "local"
              };
              _this.dateTimeUTC = {
                year: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "yyyy", {
                  timeZone: "UTC"
                }),
                month: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "MM", {
                  timeZone: "UTC"
                }),
                day: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "dd", {
                  timeZone: "UTC"
                }),
                hour: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "HH", {
                  timeZone: "UTC"
                }),
                minute: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "mm", {
                  timeZone: "UTC"
                }),
                second: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "ss", {
                  timeZone: "UTC"
                }),
                milliseconds: Object(src_utils_timezone__WEBPACK_IMPORTED_MODULE_2__["formatToTimeZone"])(now, "SSS", {
                  timeZone: "UTC"
                }),
                timezone: "UTC"
              };
              _this.dateTimeLocal = {
                year: _this.year,
                month: _this.month,
                day: _this.day,
                hour: _this.hour,
                minute: _this.minute,
                second: _this.second,
                milliseconds: _this.milliseconds,
                timezone: null
              };
            }, 500);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.??fac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 19,
        vars: 4,
        consts: [[1, "container", "center"], [1, "fixed-title"], [1, "article"], [1, "title"], [3, "dateTime"], [3, "timestamp"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "ISO 8601");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Full date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "date-time", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Full date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "date-time", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Timestamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "date-time", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Not a full date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "date-time", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dateTime", ctx.dateTimeUTC);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dateTime", ctx.dateTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("timestamp", ctx.timestamp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("dateTime", ctx.dateTimeLocal);
          }
        },
        directives: [_date_time_date_time_component__WEBPACK_IMPORTED_MODULE_3__["DateTimeComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _date_time_date_time_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./date-time/date-time.component */
      "r1zq");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _date_time_date_time_component__WEBPACK_IMPORTED_MODULE_4__["DateTimeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _date_time_date_time_component__WEBPACK_IMPORTED_MODULE_4__["DateTimeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "e2en":
    /*!*******************************!*\
      !*** ./src/utils/timezone.ts ***!
      \*******************************/

    /*! exports provided: format, formatToTimeZone, startOfDaytz, endOfDaytz, isSameDaytz */

    /***/
    function e2en(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "format", function () {
        return format;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formatToTimeZone", function () {
        return formatToTimeZone;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startOfDaytz", function () {
        return startOfDaytz;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "endOfDaytz", function () {
        return endOfDaytz;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isSameDaytz", function () {
        return isSameDaytz;
      });
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! date-fns */
      "b/SL");
      /* harmony import */


      var date_fns_tz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! date-fns-tz */
      "cb+M");
      /* harmony import */


      var date_fns_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! date-fns/locale */
      "Opvh");

      var locale = {
        'en-GB': date_fns_locale__WEBPACK_IMPORTED_MODULE_2__["enGB"],
        'fi-FI': date_fns_locale__WEBPACK_IMPORTED_MODULE_2__["fi"]
      };

      var format = function format(date, _format, options) {
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(date, _format, Object.assign(Object.assign({}, options), {
          locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_2__["enGB"]
        }));
      };

      var formatToTimeZone = function formatToTimeZone(date, formatStr, options) {
        return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["format"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["utcToZonedTime"])(date, options.timeZone), formatStr, Object.assign(Object.assign({}, options), {
          locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_2__["enGB"]
        }));
      };

      var timezoneHelper = function timezoneHelper(dateFnsFn, date, tz) {
        var localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["zonedTimeToUtc"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(dateFnsFn(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_1__["zonedTimeToUtc"])(formatToTimeZone(date, 'yyyy-MM-dd HH:mm:ss', {
          timeZone: tz
        }), localTimezone)), 'yyyy-MM-dd HH:mm:ss'), tz);
      };

      var startOfDaytz = function startOfDaytz(date, tz) {
        return timezoneHelper(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"], date, tz);
      };

      var endOfDaytz = function endOfDaytz(date, tz) {
        return timezoneHelper(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"], date, tz);
      };

      var isSameDaytz = function isSameDaytz(dateLeft, dateRight, tz) {
        if (startOfDaytz(dateLeft, tz).getTime() === startOfDaytz(dateRight, tz).getTime()) {
          return true;
        } else {
          return false;
        }
      }; // (window as any).tzh = {
      //   formatToTimeZone,
      //   timezoneHelper,
      //   startOfDaytz,
      //   endOfDaytz,
      //   isSameDaytz
      // }

      /***/

    },

    /***/
    "r1zq":
    /*!**************************************************!*\
      !*** ./src/app/date-time/date-time.component.ts ***!
      \**************************************************/

    /*! exports provided: DateTimeComponent */

    /***/
    function r1zq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateTimeComponent", function () {
        return DateTimeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DateTimeComponent_div_0_span_60_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function DateTimeComponent_div_0_span_60_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "07");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
        }
      }

      function DateTimeComponent_div_0_span_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Time zone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, DateTimeComponent_div_0_span_60_span_4_Template, 2, 0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DateTimeComponent_div_0_span_60_ng_container_5_Template, 9, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.dateTime.timezone === "UTC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.dateTime.timezone === "local");
        }
      }

      function DateTimeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Date Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Year");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Month");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Day");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Time Components");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Hour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Minute");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Second");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "milliseconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](60, DateTimeComponent_div_0_span_60_Template, 6, 2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.year, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.month, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.day, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.hour, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.minute, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.second, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r0.dateTime.milliseconds, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.dateTime.timezone);
        }
      }

      function DateTimeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "milliseconds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r1.timestamp, " ");
        }
      }

      var DateTimeComponent = /*#__PURE__*/function () {
        function DateTimeComponent() {
          _classCallCheck(this, DateTimeComponent);

          this.dateTime = {};
          this.timestamp = 0;
        }

        _createClass(DateTimeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DateTimeComponent;
      }();

      DateTimeComponent.??fac = function DateTimeComponent_Factory(t) {
        return new (t || DateTimeComponent)();
      };

      DateTimeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: DateTimeComponent,
        selectors: [["date-time"]],
        inputs: {
          dateTime: "dateTime",
          timestamp: "timestamp"
        },
        decls: 2,
        vars: 2,
        consts: [["class", "part", 4, "ngIf"], [1, "part"], [1, "partial", "date"], [1, "brace", "top"], [1, "des", "top"], [1, "partial"], [1, "brace", "bottom"], [1, "des", "bottom"], [1, "sympol"], [1, "partial", "T"], [1, "partial", "small"], [1, "partial", "time"], ["class", "partial timezone", "style", "margin-left: 10px; min-width: 55px;", 4, "ngIf"], [1, "partial", "timezone", 2, "margin-left", "10px", "min-width", "55px"], ["class", "partial small", 4, "ngIf"], [4, "ngIf"]],
        template: function DateTimeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, DateTimeComponent_div_0_Template, 61, 8, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, DateTimeComponent_div_1_Template, 7, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.timestamp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.timestamp);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DateTimeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'date-time',
            templateUrl: './date-time.component.html'
          }]
        }], null, {
          dateTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          timestamp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map