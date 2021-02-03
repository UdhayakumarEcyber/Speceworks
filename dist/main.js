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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/*! exports provided: id, author, widgets, sidebarLinks, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"262aca7f-55d6-4c8b-9b78-3bda2a981951\",\"author\":\"\",\"widgets\":[{\"id\":\"spaceworks\",\"title\":\"spaceworks\",\"description\":\"A sample widget\"}],\"sidebarLinks\":[{\"id\":\"spaceworksLink\"}]}");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lost_found-section {\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  height: 100%; }\n  .lost_found-section .technician_chart-section {\n    display: inline-block;\n    width: 100%;\n    height: 100%; }\n    .lost_found-section .technician_chart-section .data-list-container .data-list {\n      border-top: 1px solid #eaeaea8a; }\n      .lost_found-section .technician_chart-section .data-list-container .data-list .data-list-item {\n        border: none; }\n        .lost_found-section .technician_chart-section .data-list-container .data-list .data-list-item:nth-child(even) .list-item {\n          background-color: #d8d8d816; }\n        .lost_found-section .technician_chart-section .data-list-container .data-list .data-list-item .list-item {\n          padding: 15px 20px; }\n    .lost_found-section .technician_chart-section .technician_chart {\n      display: inline-block;\n      width: 100%;\n      left: -20px;\n      position: relative;\n      height: 98%; }\n      .lost_found-section .technician_chart-section .technician_chart .recharts-wrapper .recharts-layer {\n        font-size: 8px; }\n      .lost_found-section .technician_chart-section .technician_chart .recharts-legend-wrapper {\n        display: inline-block;\n        width: auto !important;\n        right: 0 !important;\n        left: unset !important;\n        top: -25px !important;\n        bottom: unset !important; }\n    .lost_found-section .technician_chart-section .lost_found-table .header .list-item {\n      padding: 10px 20px; }\n      .lost_found-section .technician_chart-section .lost_found-table .header .list-item .category, .lost_found-section .technician_chart-section .lost_found-table .header .list-item .reported_time, .lost_found-section .technician_chart-section .lost_found-table .header .list-item .location {\n        padding-top: 10px; }\n    .lost_found-section .technician_chart-section .lost_found-table .list-item .category {\n      display: inline-block;\n      width: 60%; }\n      .lost_found-section .technician_chart-section .lost_found-table .list-item .category span {\n        display: inline-block;\n        width: 40px;\n        height: 40px;\n        vertical-align: middle;\n        margin-right: 15px; }\n        .lost_found-section .technician_chart-section .lost_found-table .list-item .category span img {\n          max-width: 100%;\n          max-height: 100%; }\n    .lost_found-section .technician_chart-section .lost_found-table .list-item .reported_time {\n      display: inline-block;\n      width: 17%;\n      padding-top: 12px; }\n    .lost_found-section .technician_chart-section .lost_found-table .list-item .location {\n      display: inline-block;\n      width: 17%;\n      padding-top: 12px; }\n    .lost_found-section .technician_chart-section .lost_found-table .list-item .filter {\n      display: inline-block;\n      width: 8%; }\n    .lost_found-section .technician_chart-section#totalTechnician {\n      height: 45%; }\n  .lost_found-section .sample-subtitle {\n    background-color: #8d548140; }\n  .lost_found-section .list-card {\n    display: inline-block;\n    width: 100%;\n    margin-top: 10px; }\n    .lost_found-section .list-card .sample-item-field .label {\n      font-size: 10px;\n      font-weight: 600;\n      width: 40%; }\n    .lost_found-section .list-card .sample-item-field .value {\n      display: inline-block;\n      width: 100%; }\n      .lost_found-section .list-card .sample-item-field .value .percentage .up, .lost_found-section .list-card .sample-item-field .value .percentage .down {\n        display: inline-block;\n        width: 12px;\n        height: 12px;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-size: 100% auto; }\n      .lost_found-section .list-card .sample-item-field .value .percentage .up {\n        background-image: url(https://static.iviva.com/images/top-green-arrow.png); }\n      .lost_found-section .list-card .sample-item-field .value .percentage .down {\n        background-image: url(https://static.iviva.com/images/bottom-green-arrow.png); }\n\n.lost_found-title {\n  border-bottom: 1px solid #dedede;\n  padding: 36px 10px; }\n  .lost_found-title .title-section .title-icon {\n    background-size: contain;\n    filter: grayscale(1);\n    opacity: 0.7;\n    width: 25px;\n    height: 25px; }\n  .lost_found-title .uti-analytics_rht {\n    margin-top: 0.5em; }\n\nspan.recharts-legend-item-text {\n  font-size: 10px;\n  text-transform: capitalize; }\n\n.action-section {\n  display: inline-flex;\n  width: 75%; }\n  .action-section .digi_twin-rgt {\n    display: inline-flex;\n    width: 100%; }\n    .action-section .digi_twin-rgt .digital-selbox {\n      display: inline-block;\n      width: 30%;\n      padding: 0 10px; }\n    .action-section .digi_twin-rgt .digital-sm-bar {\n      display: inline-block;\n      width: 30%;\n      padding: 30px 10px 20px 10px; }\n      .action-section .digi_twin-rgt .digital-sm-bar.digital-filter-bar {\n        padding: 40px 10px 20px 10px;\n        width: 7%; }\n\n.nav_bar_section {\n  display: inline-flex;\n  width: 100%;\n  margin: 0 0 2em 0; }\n  .nav_bar_section .nav_bar {\n    display: inline-block;\n    /* width: 15%;\r\n         margin: 0 5%;*/\n    width: 100%;\n    margin: 0 0%; }\n    .nav_bar_section .nav_bar:first-child {\n      margin-left: 0; }\n    .nav_bar_section .nav_bar:last-child {\n      margin-right: 0; }\n    .nav_bar_section .nav_bar .nav_bar_icon {\n      display: inline-block;\n      padding: 10px;\n      background: #fff;\n      border-radius: 10px;\n      width: 100%;\n      height: 130px;\n      position: relative; }\n      .nav_bar_section .nav_bar .nav_bar_icon .profile-image-container {\n        transform: translate(-50%, -50%);\n        position: absolute;\n        top: 50%;\n        left: 50%; }\n    .nav_bar_section .nav_bar .nav_bar_name {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      margin-top: 10px;\n      line-height: 1.3em; }\n\n.clog-top-calen {\n  position: absolute;\n  top: 12px;\n  right: 30px; }\n\n.clog-section {\n  display: inline-flex;\n  margin-top: 2.5em; }\n  .clog-section .clog-section-lft {\n    display: inline-block;\n    width: 20%; }\n    .clog-section .clog-section-lft .clog-ahu-filter {\n      display: inline-block;\n      width: 100%;\n      position: relative;\n      text-align: center; }\n      .clog-section .clog-section-lft .clog-ahu-filter .ahu-filter-pict {\n        background-image: url(https://static.iviva.com/images/Maf_dashboard/AHU-filter.svg);\n        width: 140px;\n        height: 140px;\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-size: 100%;\n        display: inline-block; }\n      .clog-section .clog-section-lft .clog-ahu-filter .ahu-filter-txt {\n        margin: 10px 0 0 0;\n        text-align: left;\n        display: inline-block; }\n        .clog-section .clog-section-lft .clog-ahu-filter .ahu-filter-txt h4 {\n          font-size: 2em;\n          margin: 0; }\n        .clog-section .clog-section-lft .clog-ahu-filter .ahu-filter-txt p {\n          font-size: 11px;\n          margin: 5px 0 0 0; }\n  .clog-section .clog-section-rgt {\n    display: inline-block;\n    width: 80%; }\n    .clog-section .clog-section-rgt .clog_data_list {\n      display: inline-block; }\n      .clog-section .clog-section-rgt .clog_data_list .list-item-header {\n        background-color: #fef7f3;\n        border-radius: 10px 10px 0 0; }\n        .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt {\n          font-size: 10px; }\n          .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.asset {\n            width: 29%; }\n          .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.gradient {\n            width: 13%; }\n          .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.feedback {\n            width: 19%; }\n          .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.pressure_value {\n            width: 15%; }\n          .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.pressure_low {\n            width: 24%; }\n            .clog-section .clog-section-rgt .clog_data_list .list-item-header .list-item-elmt.pressure_low .uxp-form-group {\n              margin-bottom: 0;\n              margin-top: -10px; }\n      .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item:nth-child(even) .list-item {\n        background-color: #fef7f3; }\n      .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item:nth-child(odd) .list-item {\n        background-color: #f5ebe5; }\n      .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item {\n        display: inline-block; }\n        .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .up, .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .down {\n          display: inline-block;\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: 100%;\n          width: 12px;\n          height: 12px;\n          margin-top: 0px;\n          position: absolute;\n          margin-left: 3px; }\n        .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .list-item-elmt {\n          background: #fff;\n          padding: 5px 10px;\n          border-radius: 5px;\n          box-shadow: 0px 0px 7px #2c2c2c78;\n          display: inline-block;\n          width: 6%;\n          margin: 0 6%; }\n          .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .list-item-elmt.asset {\n            width: 21%;\n            display: inline-block;\n            margin: 0 2% 0 0; }\n        .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .up {\n          background-image: url(https://static.iviva.com/images/Maf_dashboard/top-arrow.svg); }\n        .clog-section .clog-section-rgt .clog_data_list .data-list .data-list-item .list-item .down {\n          background-image: url(https://static.iviva.com/images/Maf_dashboard/down-arrow.svg); }\n\n.recharts-tooltip-cursor, .recharts-cartesian-grid {\n  display: none; }\n\n.technician_chart .recharts-surface .recharts-layer:nth-child(even) .recharts-bar-rectangles .recharts-layer .recharts-bar-rectangle path:hover {\n  fill: #c8c8c8; }\n\n.technician_chart .recharts-surface .recharts-layer:nth-child(odd) .recharts-bar-rectangles .recharts-layer .recharts-bar-rectangle path:hover {\n  fill: #efefef; }\n\n.my-custom-tooltip {\n  display: inline-block;\n  width: 100px; }\n  .my-custom-tooltip .overall-tooltip {\n    display: inline-block;\n    width: 100%;\n    background-color: #48809d;\n    margin-top: 10px;\n    color: #fff; }\n    .my-custom-tooltip .overall-tooltip .cust-tooltip-lft {\n      display: inline-block;\n      width: 40%;\n      text-align: center; }\n    .my-custom-tooltip .overall-tooltip .cust-tooltip-rht {\n      display: inline-block;\n      width: 40%;\n      text-align: center; }\n    .my-custom-tooltip .overall-tooltip p {\n      display: inline-block;\n      width: 10%;\n      text-align: center; }\n\n.uti-analytics_rht {\n  display: inline-block;\n  margin-top: 0em;\n  margin-left: 3em;\n  width: 100%; }\n  .uti-analytics_rht.efficiency-analytics_rht {\n    width: 100%; }\n    .uti-analytics_rht.efficiency-analytics_rht .uti-sel-boxes {\n      width: auto;\n      float: right; }\n  .uti-analytics_rht .uti-tabs {\n    display: inline-block;\n    width: 20%; }\n    .uti-analytics_rht .uti-tabs .uxp-toggle-filter {\n      display: inline-block;\n      width: 100%; }\n      .uti-analytics_rht .uti-tabs .uxp-toggle-filter .uxp-toggle-option {\n        text-align: center;\n        display: inline-block;\n        width: auto;\n        font-size: 0.8em;\n        padding: 8px 15px;\n        margin: auto 2px;\n        text-transform: capitalize; }\n        .uti-analytics_rht .uti-tabs .uxp-toggle-filter .uxp-toggle-option.selected {\n          background-color: #7A6FF0;\n          color: #fff; }\n  .uti-analytics_rht .uti-sel-boxes {\n    margin-left: 0em;\n    width: 70%;\n    float: right; }\n    .uti-analytics_rht .uti-sel-boxes .uti-sel-box {\n      display: inline-block;\n      width: 31%;\n      vertical-align: top;\n      margin-left: 3%; }\n      .uti-analytics_rht .uti-sel-boxes .uti-sel-box.sel-margin {\n        margin: 0; }\n      .uti-analytics_rht .uti-sel-boxes .uti-sel-box .police-data-btn {\n        font-size: 12px;\n        padding-top: 12px;\n        padding-bottom: 12px;\n        width: 100%;\n        position: relative; }\n        .uti-analytics_rht .uti-sel-boxes .uti-sel-box .police-data-btn:before {\n          width: 20px;\n          height: 20px;\n          content: \"\";\n          background: url(https://static.iviva.com/images/UXP_spaceworks/database-icon.svg) no-repeat center center;\n          position: absolute;\n          left: 15px;\n          top: 9px;\n          background-size: contain;\n          opacity: 0.3; }\n      .uti-analytics_rht .uti-sel-boxes .uti-sel-box .showcase-input {\n        display: inline-block;\n        padding: 0;\n        margin: 0;\n        font-size: 0.8em;\n        width: 100% !important; }\n        .uti-analytics_rht .uti-sel-boxes .uti-sel-box .showcase-input .uxp-form-select {\n          display: inline-block;\n          min-width: 100%; }\n      .uti-analytics_rht .uti-sel-boxes .uti-sel-box.search-box .uxp-form-group {\n        padding: 0; }\n  .uti-analytics_rht .uti-chk-box {\n    display: inline-block;\n    margin: 0 0 0 15px; }\n    .uti-analytics_rht .uti-chk-box .showcase-checkbox {\n      display: inline-block;\n      padding: 0;\n      margin: 0;\n      width: 100% !important; }\n      .uti-analytics_rht .uti-chk-box .showcase-checkbox .uxp-form-checkbox.toggle-line .checkbox-placeholder {\n        height: 2px;\n        background: #424242; }\n        .uti-analytics_rht .uti-chk-box .showcase-checkbox .uxp-form-checkbox.toggle-line .checkbox-placeholder:before {\n          background-color: #828282; }\n      .uti-analytics_rht .uti-chk-box .showcase-checkbox label {\n        font-size: 9px; }\n  .uti-analytics_rht .uti-filter {\n    display: inline-block;\n    margin: 0.7em 0 0 1em;\n    vertical-align: top; }\n    .uti-analytics_rht .uti-filter .filter-panel-btn {\n      width: 30px;\n      height: 30px; }\n\n.chart-top-section {\n  display: inline-block;\n  width: 100%;\n  margin-top: 10px; }\n  .chart-top-section .analytics-used-details {\n    display: inline-block;\n    width: 48%;\n    vertical-align: middle; }\n    .chart-top-section .analytics-used-details ul {\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      vertical-align: top;\n      margin: 0; }\n      .chart-top-section .analytics-used-details ul li {\n        display: inline-block;\n        width: 23%;\n        position: relative;\n        vertical-align: top; }\n        .chart-top-section .analytics-used-details ul li span.used-det-strip {\n          display: inline-block;\n          width: 2px;\n          height: 30px;\n          background: #4cccbb;\n          position: absolute;\n          left: 0;\n          top: 0; }\n          .chart-top-section .analytics-used-details ul li span.used-det-strip.meeting-strip {\n            background: #4cccbb; }\n          .chart-top-section .analytics-used-details ul li span.used-det-strip.under_used-strip {\n            background: #474747; }\n          .chart-top-section .analytics-used-details ul li span.used-det-strip.over_Used-strip {\n            background: #c1c1c1; }\n        .chart-top-section .analytics-used-details ul li h3 {\n          display: inline-block;\n          width: 80%;\n          margin: 0 0 0 10%;\n          padding: 0; }\n        .chart-top-section .analytics-used-details ul li p {\n          display: inline-block;\n          width: 80%;\n          margin: 5px 0 0 10%;\n          padding: 0;\n          font-size: 0.7em;\n          text-transform: uppercase; }\n  .chart-top-section .uti-chart-legend {\n    display: inline-block;\n    width: 38%;\n    vertical-align: middle; }\n    .chart-top-section .uti-chart-legend.efficiency-legend {\n      width: 38%; }\n      .chart-top-section .uti-chart-legend.efficiency-legend ul {\n        margin-left: 10%; }\n        .chart-top-section .uti-chart-legend.efficiency-legend ul li {\n          width: 20%; }\n    .chart-top-section .uti-chart-legend ul {\n      display: inline-block;\n      width: 100%;\n      text-align: left;\n      vertical-align: top;\n      margin: 8px 0 0 0;\n      padding: 0; }\n      .chart-top-section .uti-chart-legend ul li {\n        display: inline-block;\n        width: 33%;\n        position: relative;\n        vertical-align: top; }\n        .chart-top-section .uti-chart-legend ul li span.chart-legend-round {\n          display: inline-block;\n          width: 10px;\n          height: 10px;\n          border-radius: 50%;\n          margin: 5px 0 0 0; }\n          .chart-top-section .uti-chart-legend ul li span.chart-legend-round.chart-legend-meeting {\n            background: #4cccbb; }\n          .chart-top-section .uti-chart-legend ul li span.chart-legend-round.chart-legend-booked {\n            background: #474747; }\n          .chart-top-section .uti-chart-legend ul li span.chart-legend-round.chart-legend-occupied {\n            background: #c1c1c1; }\n        .chart-top-section .uti-chart-legend ul li p {\n          display: inline-block;\n          width: 80%;\n          margin: 6px 0 0 5%;\n          padding: 0;\n          font-size: 0.7em;\n          text-transform: uppercase;\n          vertical-align: top; }\n  .chart-top-section .room-range {\n    margin-right: 15px;\n    float: right;\n    font-size: 10px; }\n  .chart-top-section .uti-tabs {\n    display: inline-block;\n    margin-top: 0.5em;\n    vertical-align: middle; }\n    .chart-top-section .uti-tabs .uxp-toggle-filter {\n      display: inline-block;\n      width: 100%; }\n      .chart-top-section .uti-tabs .uxp-toggle-filter .uxp-toggle-option {\n        text-align: center;\n        display: inline-block;\n        width: auto;\n        font-size: 0.8em;\n        padding: 8px 15px;\n        margin: auto 2px;\n        text-transform: capitalize; }\n        .chart-top-section .uti-tabs .uxp-toggle-filter .uxp-toggle-option.selected {\n          background-color: #4cccbb;\n          color: #424242; }\n\n#lostFound_Analytics {\n  display: inline-block; }\n\n.widget-container-block .layout .layout-item {\n  min-width: 468px;\n  max-width: 100%;\n  width: 468px; }\n\n.profile-title[--parent] {\n  border: 10px dashed purple; }\n\n#profile_Card {\n  background: #f8ba7b;\n  /* Old browsers */\n  background: -moz-linear-gradient(-45deg, #f8ba7b 0%, #f8ba7b 19%, #605ae6 100%);\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(-45deg, #f8ba7b 0%, #f8ba7b 19%, #605ae6 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(135deg, #f8ba7b 0%, #f8ba7b 19%, #605ae6 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8ba7b', endColorstr='#605ae6',GradientType=1 );\n  /* IE6-9 fallback on horizontal gradient */\n  height: 100%;\n  padding-top: 5em;\n  min-width: 468px;\n  max-width: 100%;\n  width: 468px; }\n  #profile_Card .item-card {\n    background: transparent; }\n  #profile_Card .profile-lft {\n    display: inline-block;\n    width: 33%;\n    text-align: center; }\n    #profile_Card .profile-lft .profile-pict {\n      display: inline-block;\n      width: 135px;\n      height: 135px;\n      background: #fff;\n      border-radius: 50%;\n      background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/black-handbag.png\");\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: contain; }\n  #profile_Card .profile-rgt {\n    display: inline-block;\n    width: 64%;\n    margin-left: 3%;\n    position: relative;\n    height: 92%; }\n    #profile_Card .profile-rgt .profile-details {\n      display: inline-block;\n      color: #fff; }\n      #profile_Card .profile-rgt .profile-details button.profile-btn {\n        display: inline-block;\n        background: #605ae633;\n        color: #fff;\n        font-size: 12px; }\n      #profile_Card .profile-rgt .profile-details .alert-btn {\n        display: inline-block;\n        background: #605ae633;\n        color: #fff;\n        font-size: 12px;\n        padding: 12px 20px;\n        vertical-align: top;\n        margin-right: 1em; }\n      #profile_Card .profile-rgt .profile-details h5 {\n        font-size: 1.2em;\n        margin: 15px 0 0 0;\n        font-weight: 500; }\n      #profile_Card .profile-rgt .profile-details h1 {\n        font-size: 1.8em;\n        margin: 15px 0 0 0;\n        font-weight: 500; }\n      #profile_Card .profile-rgt .profile-details p {\n        font-size: 0.8em;\n        margin: 15px 0 0 0; }\n      #profile_Card .profile-rgt .profile-details .profile-details-bot {\n        display: inline-block;\n        position: absolute;\n        bottom: 3em; }\n        #profile_Card .profile-rgt .profile-details .profile-details-bot button.profile-btn {\n          margin-right: 2em;\n          display: inline-flex; }\n\n.Almasjid-header .uti-analytics_rht .uti-sel-boxes {\n  width: 30%; }\n  .Almasjid-header .uti-analytics_rht .uti-sel-boxes .uti-sel-box {\n    width: 100%; }\n\n#Almasjid_Widget {\n  display: inline-block;\n  position: relative; }\n  #Almasjid_Widget .uxp-item-list-card {\n    overflow-y: auto;\n    width: 93%;\n    height: 100%;\n    overflow-x: auto;\n    margin-left: 2%;\n    overflow-y: hidden; }\n    #Almasjid_Widget .uxp-item-list-card .header {\n      display: none; }\n    #Almasjid_Widget .uxp-item-list-card .body {\n      display: inline-flex;\n      width: 130%;\n      overflow: hidden;\n      padding: 10px 15px; }\n      #Almasjid_Widget .uxp-item-list-card .body .box {\n        background: #dadada61;\n        border-radius: 20px;\n        display: inline-block;\n        width: 225px;\n        margin-left: 1em;\n        position: relative;\n        text-align: center;\n        vertical-align: top;\n        height: 225px;\n        cursor: pointer; }\n        #Almasjid_Widget .uxp-item-list-card .body .box:hover {\n          border-radius: 50%; }\n          #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-top, #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-bot {\n            background: #fff;\n            padding: 6px 10px 2px 10px;\n            border-radius: 20px; }\n          #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-top {\n            top: 5em; }\n          #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-bot {\n            bottom: 5em; }\n          #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-item {\n            padding: 3em 0;\n            margin: 4.5em 0; }\n            #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-item .box-items_icon {\n              width: 60px;\n              height: 52px; }\n            #Almasjid_Widget .uxp-item-list-card .body .box:hover .box-item p {\n              display: none; }\n        #Almasjid_Widget .uxp-item-list-card .body .box:first-child {\n          margin-left: 0;\n          background: #ffacf44d; }\n        #Almasjid_Widget .uxp-item-list-card .body .box .box-top, #Almasjid_Widget .uxp-item-list-card .body .box .box-bot {\n          display: inline-block;\n          position: absolute;\n          text-align: left;\n          vertical-align: top; }\n          #Almasjid_Widget .uxp-item-list-card .body .box .box-top .label, #Almasjid_Widget .uxp-item-list-card .body .box .box-bot .label {\n            display: inline-block;\n            font-size: 12px;\n            width: 23px;\n            padding: 5px 0 0 0;\n            margin: 0;\n            vertical-align: top; }\n        #Almasjid_Widget .uxp-item-list-card .body .box .box-top {\n          top: 2em;\n          left: 2em; }\n          #Almasjid_Widget .uxp-item-list-card .body .box .box-top .top-icon {\n            display: inline-block;\n            width: 20px;\n            height: 20px; }\n            #Almasjid_Widget .uxp-item-list-card .body .box .box-top .top-icon img {\n              max-width: 100%; }\n        #Almasjid_Widget .uxp-item-list-card .body .box .box-item {\n          display: inline-block;\n          width: 10em;\n          border-radius: 50%;\n          border-style: solid;\n          border-width: 4px;\n          height: 10em;\n          padding: 2em 0;\n          margin: 4.5em 0; }\n          #Almasjid_Widget .uxp-item-list-card .body .box .box-item p {\n            display: inline-block;\n            width: 100%;\n            padding: 0;\n            margin: 0;\n            font-size: 10px; }\n          #Almasjid_Widget .uxp-item-list-card .body .box .box-item .box-items_icon {\n            display: inline-block;\n            width: 40px;\n            height: 40px; }\n            #Almasjid_Widget .uxp-item-list-card .body .box .box-item .box-items_icon img {\n              max-width: 100%;\n              max-height: 100%; }\n        #Almasjid_Widget .uxp-item-list-card .body .box .box-bot {\n          bottom: 2em;\n          right: 2em; }\n          #Almasjid_Widget .uxp-item-list-card .body .box .box-bot .bot-icon {\n            display: inline-block;\n            width: 20px;\n            height: 20px; }\n            #Almasjid_Widget .uxp-item-list-card .body .box .box-bot .bot-icon img {\n              max-width: 100%; }\n  #Almasjid_Widget #Almas_lft_arrow {\n    background: url(\"https://static.iviva.com/images/arrow-bot.svg\") no-repeat center center;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 20px;\n    height: 20px;\n    transform: rotate(270deg);\n    right: 15px;\n    cursor: pointer; }\n\n#Map_Widget .building_map {\n  /*background: url('https://static.iviva.com/images/UXP_spaceworks/map-pict.svg') no-repeat center center; */\n  height: 37em;\n  width: 100%;\n  display: inline-block;\n  margin: 0em 0em;\n  position: relative; }\n  #Map_Widget .building_map #uxp-map-component-container {\n    z-index: 0; }\n  #Map_Widget .building_map .social-distancing-vilation {\n    position: absolute;\n    width: 30%;\n    bottom: 2em;\n    left: 2em;\n    background-color: #fff;\n    border-radius: 25px;\n    z-index: 1; }\n    #Map_Widget .building_map .social-distancing-vilation .social-distancing-sec {\n      display: inline-flex;\n      width: 75%;\n      vertical-align: top;\n      padding-top: 8px;\n      padding: 10px 20px 10px 20px;\n      box-sizing: border-box;\n      font-family: \"Comfortaa\"; }\n      #Map_Widget .building_map .social-distancing-vilation .social-distancing-sec .social-distancing-sec-pict {\n        display: inline-block;\n        width: 25px;\n        height: 25px;\n        background: url(https://static.iviva.com/images/UXP_spaceworks/social-dist-icon1.png) no-repeat center center;\n        background-size: contain;\n        margin-top: 3px; }\n      #Map_Widget .building_map .social-distancing-vilation .social-distancing-sec label {\n        font-size: 14px;\n        padding: 8px 0 0 10px;\n        margin: 0;\n        width: 75%; }\n      #Map_Widget .building_map .social-distancing-vilation .social-distancing-sec em {\n        font-size: 22px;\n        font-style: normal;\n        padding: 3px 0 0 0;\n        margin: 0; }\n    #Map_Widget .building_map .social-distancing-vilation .social-distancing-check {\n      display: inline-block; }\n      #Map_Widget .building_map .social-distancing-vilation .social-distancing-check label {\n        font-size: 12px; }\n  #Map_Widget .building_map .map-list-items {\n    display: inline-flex;\n    position: absolute;\n    width: 26%;\n    bottom: 2em;\n    right: 2em;\n    background-color: #fff;\n    border-radius: 25px;\n    padding: 10px 20px 10px 20px;\n    z-index: 1; }\n    #Map_Widget .building_map .map-list-items .map-item {\n      display: inline-block;\n      background-position: center center;\n      background-repeat: no-repeat;\n      background-size: contain;\n      height: 23px;\n      width: 23px;\n      margin-right: 20px;\n      cursor: pointer; }\n      #Map_Widget .building_map .map-list-items .map-item.enlarge-item {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/icon-expand.svg\"); }\n      #Map_Widget .building_map .map-list-items .map-item.material-tool {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/icon-material-tool.svg\"); }\n      #Map_Widget .building_map .map-list-items .map-item.map-data-count {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/map-data-count.svg\");\n        width: 30px;\n        height: 30px; }\n      #Map_Widget .building_map .map-list-items .map-item.zone-item {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/zone-btn.svg\");\n        width: 40%;\n        height: 28px; }\n      #Map_Widget .building_map .map-list-items .map-item.zoom_out-item {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/icon-map-zoom-out.svg\");\n        width: 17px; }\n      #Map_Widget .building_map .map-list-items .map-item.zoom_in-item {\n        background-image: url(\"https://static.iviva.com/images/UXP_spaceworks/icon-map-zoom-in.svg\");\n        width: 17px;\n        margin-right: 0; }\n\n.top-bar {\n  display: inline-block;\n  width: 150px;\n  height: 150px;\n  box-shadow: 0px 0px 4px #afafafc4;\n  border-radius: 10px;\n  /*margin: 1em 1em;*/\n  margin: 5em 4.5em;\n  position: relative; }\n  .top-bar .top-bar-icon {\n    display: inline-block;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    left: 50%; }\n    .top-bar .top-bar-icon.view-booking {\n      background-image: url(\"https://static.iviva.com./images/Adani_UXP/calendar_min_icon.png\"); }\n  .top-bar .top-bar-txt {\n    display: inline-block;\n    position: absolute;\n    bottom: -2.5em;\n    width: 100%;\n    text-align: center; }\n\n.lost_found-model.modal-container .modal-panel {\n  min-height: 75%; }\n  .lost_found-model.modal-container .modal-panel .modal-header {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    display: inline-block;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border: none;\n    text-align: center;\n    position: relative; }\n    .lost_found-model.modal-container .modal-panel .modal-header .modal-title {\n      font-size: 14px;\n      position: relative; }\n      .lost_found-model.modal-container .modal-panel .modal-header .modal-title:before {\n        width: 30px;\n        height: 30px;\n        content: \"\";\n        background: url(https://static.iviva.com/images/UXP_spaceworks/open-box.svg) no-repeat center center;\n        position: absolute;\n        top: -10px;\n        background-size: contain;\n        transform: translate(-115%, 0%);\n        filter: grayscale(1);\n        opacity: 0.7; }\n    .lost_found-model.modal-container .modal-panel .modal-header .modal-close {\n      position: absolute;\n      right: 10px;\n      top: 10px; }\n      .lost_found-model.modal-container .modal-panel .modal-header .modal-close .close-btn {\n        width: 35px;\n        height: 35px; }\n  .lost_found-model.modal-container .modal-panel .modal-body {\n    position: relative;\n    overflow: hidden; }\n    .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search {\n      display: inline-block;\n      width: 80%;\n      margin-left: 8%; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .modal-back {\n        display: inline-block;\n        position: absolute;\n        left: 6em;\n        top: 0em;\n        cursor: pointer; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .modal-back span.modal-back-icon {\n          position: absolute;\n          cursor: pointer;\n          height: 20px;\n          background-image: url(https://static.iviva.com/images/UXP_spaceworks/rht-arrow-sub.svg);\n          background-position: center center;\n          background-repeat: no-repeat;\n          background-size: contain;\n          width: 25px;\n          transform: rotate(180deg);\n          top: -3px;\n          left: -32px; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_overall {\n        width: 100%;\n        height: auto;\n        min-height: 10vh;\n        max-height: 98vh; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_overall .uxp-form-group {\n          display: inline-block;\n          width: 100%; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_overall .uxp-form-group .uxp-search-box-container {\n            display: inline-block;\n            width: 100%; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_overall .uxp-form-group .uxp-search-box-container .search-box-container {\n              border-radius: 10px;\n              background-color: #eaeaea4a;\n              width: 100%;\n              padding: 10px 15px;\n              box-sizing: border-box;\n              font-size: 13px; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_overall .uxp-form-group label {\n            display: inline-block;\n            width: 100%;\n            font-size: 13px; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box {\n        display: inline-block;\n        width: 100%;\n        /*display: none;*/ }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box label {\n          display: inline-block;\n          width: 100%;\n          font-size: 13px; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .serach-box {\n          border-radius: 10px;\n          background-color: #eaeaea4a;\n          width: 70%;\n          padding: 18px 15px;\n          box-sizing: border-box;\n          font-size: 15px;\n          border: none;\n          outline: none;\n          font-family: \"Comfortaa\"; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-section {\n          display: inline-flex;\n          width: 100%; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-section p {\n            font-size: 13px;\n            display: inline-block;\n            width: 15%;\n            padding: 7px 0 0;\n            text-align: center; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-section .raise-btn {\n            display: inline-block;\n            font-size: 14px;\n            width: 15%;\n            background: #f3f3f3;\n            color: #828282;\n            padding: 16px 0; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-section .raise-btn:after {\n              content: '';\n              position: absolute;\n              cursor: pointer;\n              height: 20px;\n              background-image: url(https://static.iviva.com/images/UXP_spaceworks/rht-arrow-sub.svg);\n              background-position: center center;\n              background-repeat: no-repeat;\n              background-size: contain;\n              width: 25px;\n              transform: rotate(180deg);\n              top: -3px;\n              left: -32px; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list {\n          display: inline-block;\n          padding-left: 10px;\n          width: 100%;\n          height: auto;\n          min-height: 60vh;\n          max-height: 98vh;\n          overflow-y: auto;\n          overflow-x: hidden; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list .uxp-item-list-card {\n            background: transparent; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list .uxp-item-list-card .header {\n              display: none; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list .uxp-item-list-card .body {\n              padding: 0px 0px; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul {\n            display: inline-block;\n            width: 100%;\n            height: 100%;\n            min-height: 90vh;\n            max-height: 95vh; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li {\n              display: inline-block;\n              width: 23%;\n              margin: 2em 0 0 0;\n              vertical-align: top; }\n              .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li .search_pict {\n                display: inline-block;\n                width: 150px;\n                height: 150px;\n                background: #a0a0a0;\n                padding: 5px;\n                border: 1px solid #eaeaea;\n                vertical-align: top;\n                text-align: center;\n                position: relative;\n                border-radius: 10px;\n                cursor: pointer; }\n                .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li .search_pict img {\n                  max-width: 100%;\n                  width: 100%; }\n                .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li .search_pict .found-time {\n                  font-size: 11px;\n                  position: absolute;\n                  right: 10px;\n                  bottom: 5px;\n                  color: #fff; }\n                  .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li .search_pict .found-time:before {\n                    content: '';\n                    background-image: url(https://static.iviva.com/images/UXP_spaceworks/time-icon.svg);\n                    background-position: center center;\n                    background-repeat: no-repeat;\n                    background-size: cover;\n                    width: 12px;\n                    height: 12px;\n                    display: inline-block;\n                    filter: invert(1);\n                    position: absolute;\n                    left: -17px;\n                    top: -1px; }\n              .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box .search-list ul li h6 {\n                display: inline-block;\n                font-size: 11px;\n                padding: 10px 0 0 0;\n                margin: 0;\n                width: 71%;\n                line-height: 1.5em; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .lost_found_search-box1 {\n        display: none; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details-section1 {\n        display: none; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details-section {\n        display: block;\n        width: 85%;\n        overflow-y: auto;\n        overflow-x: hidden;\n        height: 78vh; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details-section .found-details {\n          display: inline-block;\n          width: 100%;\n          min-height: 80vh;\n          max-height: 100vh; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul {\n        list-style: none; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li {\n          display: inline-block;\n          width: 100%;\n          vertical-align: top; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .drog_drop {\n            border: 1px dashed #dadada;\n            display: inline-block;\n            width: 98%;\n            padding: 2em;\n            margin: 0 1%;\n            text-align: center;\n            cursor: pointer; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .drog_drop p {\n              font-size: 13px; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms {\n            position: relative; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns1 {\n              display: none; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns {\n              display: inline-block;\n              position: absolute;\n              top: 2.7em;\n              width: 300px; }\n              .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns p {\n                font-size: 10px;\n                color: #7A6FF0; }\n              .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns ul {\n                display: inline-flex; }\n                .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns ul li {\n                  display: inline-block;\n                  width: auto;\n                  margin: 0 5px 0 0; }\n                  .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .matching_terms .matching_terms-btns ul li .btn {\n                    display: inline-block;\n                    font-size: 6px; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .uxp-form-group {\n            width: 100% !important; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li ul {\n            display: inline-block;\n            width: 100%;\n            padding: 0; }\n            .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li ul li {\n              display: inline-block;\n              width: 50%; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li lable {\n            display: inline-block;\n            width: 100%;\n            font-size: 12px; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li input, .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li textarea {\n            display: inline-block;\n            width: 100%;\n            font-size: 12px;\n            font-family: \"Comfortaa\"; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li textarea {\n            background: #f7f7f7;\n            border: none;\n            border-radius: 10px;\n            padding: 10px;\n            min-height: 100px;\n            font-size: 13px;\n            outline: none; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .uxp-form-select .uxp-select-placeholder.dynamic-select {\n            position: relative;\n            background: #f7f7f7; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details ul li .uxp-date-time-picker-container {\n            background: #f7f7f7;\n            padding: 5px 10px;\n            box-shadow: none; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .found-details .found-arrow {\n        position: absolute;\n        top: 50%;\n        transform: translateY(-50%);\n        right: 20px;\n        cursor: pointer;\n        height: 35px;\n        background-image: url(https://static.iviva.com/images/UXP_spaceworks/rht-arrow-sub.svg);\n        background-position: center center;\n        background-repeat: no-repeat;\n        background-size: contain;\n        width: 40px; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .qr_code-section1 {\n        display: none; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .qr_code-section {\n        display: inline-block;\n        width: 300px;\n        border: 1px solid #ddd;\n        position: absolute;\n        top: 15px;\n        right: 2em;\n        height: 76vh;\n        border-radius: 10px;\n        background-color: #ffffff; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .qr_code-section .qr-scan-code {\n          display: inline-block;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          transform: translate(-50%, -50%); }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .qr_code-section .qr-scan-code .qr-pict {\n            display: inline-block;\n            width: 100%;\n            height: 100px;\n            background-image: url(https://static.iviva.com/images/UXP_spaceworks/QR-code.png);\n            background-position: center center;\n            background-repeat: no-repeat;\n            background-size: contain; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .qr_code-section .qr-scan-code .qr-btn {\n            display: inline-block;\n            margin-top: 1em; }\n      .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .last-item-reported {\n        display: inline-block; }\n        .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .last-item-reported .uxp-form-group {\n          display: inline-flex;\n          margin-top: 2.5em; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .last-item-reported .uxp-form-group label {\n            width: 50%;\n            margin-top: 0.7em; }\n          .lost_found-model.modal-container .modal-panel .modal-body .lost_found_search .last-item-reported .uxp-form-group .uxp-form-checkbox {\n            width: 30%;\n            margin-top: -10px; }\n\n#footer {\n  display: inline-block;\n  width: 100%; }\n  #footer p {\n    font-size: 12px; }\n\n.search-list1 {\n  display: inline-block; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
//import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ComposedChart, } from 'recharts';
const components_2 = __webpack_require__(/*! uxp/components */ "uxp/components");
const DATA = [
    {
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter: "",
        list_pict: "https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    },
    {
        category: "BLACK HANDBAG FOUND NEAR THE ENTERANCE ",
        reported_time: "12:00 PM",
        location: "Enterance",
        filter: "",
        list_pict: "https://static.iviva.com/images/UXP_spaceworks/black-handbag.png"
    },
    {
        category: "BLACK SUITCASE FOUND NEAR THE REST ROOM",
        reported_time: "12:00 PM",
        location: "Rest Room",
        filter: "",
        list_pict: "https://static.iviva.com/images/UXP_spaceworks/black-suitcase.png"
    },
    {
        category: "WATER BOTTLE IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter: "",
        list_pict: "https://static.iviva.com/images/UXP_spaceworks/blue-bottle.png"
    },
    {
        category: "AMERICAN PASSPORTS FOUND IN THE PRAYER AREA",
        reported_time: "12:00 PM",
        location: "Prayer Area",
        filter: "",
        list_pict: "https://static.iviva.com/images/UXP_spaceworks/American-possport.png"
    }
];
// datalist
const renderItem = (item, key) => {
    return (React.createElement("div", { className: "list-item" },
        React.createElement("div", { className: "category" },
            React.createElement("span", null,
                React.createElement("img", { src: item.list_pict }),
                " "),
            item.category),
        React.createElement("div", { className: "reported_time" }, item.reported_time),
        React.createElement("div", { className: "location" }, item.location),
        React.createElement("div", { className: "filter" }, item.filter)));
};
const getDataItems = (max, pageToken) => {
    let last = 0;
    if (pageToken !== null)
        last = parseInt(pageToken);
    let p = new Promise((resolve, reject) => {
        let data = DATA.filter((item, key) => (key > last && key <= last + max));
        let response = { items: data, pageToken: (last + data.length).toString() };
        resolve(response);
    });
    return p;
};
// const TopBar: React.FunctionComponent<{}> = (props) => {   
//     return <>
//         <WidgetWrapper>
//             <div id="top_Bar"> 
//              <div className="top-bar"> 
//                 <div className="top-bar-icon view-booking"></div> 
//                 <div className="top-bar-txt view-booking-txt">View Bookings</div> 
//              </div>  
//              </div>
//         </WidgetWrapper>
//     </>
// } 
const LostFoundAnalytics = (props) => {
    let [selected, setSelected] = React.useState("op-1");
    let [inputValue, setInputValue] = React.useState("");
    let [toggleFilterValue, setToggleFilterValue] = React.useState("lost");
    let [checkedCheckState, setCheckedCheckState] = React.useState(true);
    let [defCheckState, setDefCheckState] = React.useState(false);
    let [showModal, setShowModal] = React.useState(false);
    let [date, setDate] = React.useState(new Date());
    // const people = [   
    //     "Black Suitcase found near the rest room",
    //     "Black bag found near stairs",
    //     "Red Shoe found hostel room",
    //     "Book found in prayer Area",
    //     "Pen found in near enterance",
    //     "Blue handbag found in Prayer Area"  
    //   ];
    const data_list = [
        {
            "Icon": "https://static.iviva.com/images/UXP_spaceworks/black-suitcase.png",
            "Name": "Black Suitcase found in the enterance",
            "Time": "12:00 PM"
        },
        {
            "Icon": "https://static.iviva.com/images/UXP_spaceworks/black-handbag.png",
            "Name": "Black Handbag found near the enterance",
            "Time": "02:00 PM"
        },
        {
            "Icon": "https://static.iviva.com/images/UXP_spaceworks/blue-bottle.png",
            "Name": "Water Bottle found in the playing Area",
            "Time": "10:00 AM"
        },
        {
            "Icon": "https://static.iviva.com/images/UXP_spaceworks/American-possport.png",
            "Name": "American Passport found in the prayer area",
            "Time": "08:00 AM"
        }
    ];
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    () => {
        const results = people.filter(person => person.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    };
    const onChangeCheckbox = (checked) => {
        setCheckedCheckState(checked);
    };
    const onChangeCheckboxDef = (checked) => {
        setDefCheckState(checked);
    };
    /*changes*/
    const [isActive, setActive] = React.useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    let className = 'qr_code-section1';
    const [isActive12, setActive12] = React.useState(false);
    const QRcode = () => {
        setActive12(!isActive12);
    };
    if (isActive12) {
        className += ' qr_code-section';
    }
    let className1 = 'matching_terms-btns1';
    const [isActive13, setActive13] = React.useState(false);
    const matchingTermsShow = () => {
        setActive13(!isActive13);
    };
    if (isActive13) {
        className1 += ' matching_terms-btns';
    }
    var clicked = false;
    function QRcode_matching_terms() {
        if (clicked) {
            // QRcode(); 
            matchingTermsShow();
        }
        else {
            QRcode();
            //  matchingTermsShow(); 
        }
        clicked = !clicked;
    }
    return React.createElement(React.Fragment, null,
        React.createElement(components_1.WidgetWrapper, null,
            React.createElement(components_1.TitleBar, { className: "lost_found-title", icon: 'https://static.iviva.com/images/UXP_spaceworks/open-box.svg', title: 'LOST AND FOUND' },
                React.createElement("div", { className: "uti-analytics_rht" },
                    React.createElement("div", { className: "uti-tabs" },
                        React.createElement(components_1.ToggleFilter, { options: [
                                { label: "LOST", value: "lost" },
                                { label: "FOUND", value: "found" }
                            ], value: toggleFilterValue, onChange: (value) => { setToggleFilterValue(value); } })),
                    React.createElement("div", { className: "uti-sel-boxes" },
                        React.createElement("div", { className: "uti-sel-box sel-margin" },
                            React.createElement("button", { className: "btn police-data-btn", onClick: () => setShowModal(true) }, "Police Database")),
                        React.createElement("div", { className: "uti-sel-box search-box" },
                            React.createElement(components_1.FormField, { backgroundColor: "white" },
                                React.createElement(components_1.SearchBox, { value: inputValue, onChange: (newValue) => { setInputValue(newValue); } }))),
                        React.createElement("div", { className: "uti-sel-box" },
                            React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                React.createElement(components_1.Select, { selected: selected, options: [
                                        { label: "Al-Masjid an-Nabawi", value: "op-1" },
                                        { label: "Al-Masjid an-Nabawi", value: "op-2" },
                                        { label: "Al-Masjid an-Nabawi", value: "op-3" },
                                    ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" })))))),
            React.createElement("div", { className: "lost_found-section" },
                React.createElement("div", { className: "technician_chart-section inline bgWhite", id: "lostFound_Analytics" },
                    React.createElement("div", { className: "lost_found-table" },
                        React.createElement("div", { className: "header" },
                            React.createElement("div", { className: "list-item" },
                                React.createElement("div", { className: "category" }, "CATEGORY"),
                                React.createElement("div", { className: "reported_time" }, "REPORTED TIME"),
                                React.createElement("div", { className: "location" }, "LOCATION"),
                                React.createElement("div", { className: "filter" },
                                    React.createElement("div", { className: "uti-filter" },
                                        React.createElement(components_1.FilterPanel, { enableClear: (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) > 0 || selected != null, onClear: () => { setInputValue(""); setSelected(null); } },
                                            React.createElement(components_1.FormField, { className: "no-padding mb-only" },
                                                React.createElement(components_1.Label, null, "Sort By"),
                                                React.createElement(components_1.Select, { selected: selected, options: [
                                                        { label: "Name", value: "op-1" },
                                                        { label: "Date", value: "op-2" },
                                                    ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --", isValid: selected ? (selected === null || selected === void 0 ? void 0 : selected.length) > 0 : null })),
                                            React.createElement(components_1.FormField, { className: "no-padding mb-only" },
                                                React.createElement(components_1.Label, null, "Name"),
                                                React.createElement(components_1.Input, { type: "text", value: inputValue, onChange: (value) => { setInputValue(value); }, isValid: inputValue ? inputValue.trim().length > 0 : null, hasIndicator: true, placeholder: "placeholder" }))))))),
                        React.createElement("div", { className: "body" },
                            React.createElement("div", { className: "lost_found_popup" },
                                React.createElement(components_1.Modal, { className: "lost_found-model", title: "LOST AND FOUND", 
                                    // icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg" 
                                    show: showModal, onOpen: () => { }, onClose: () => setShowModal(false) },
                                    React.createElement("div", { className: "lost_found_search" },
                                        React.createElement("div", { className: "modal-back", onClick: () => setShowModal(false) },
                                            React.createElement("span", { className: "modal-back-icon" }),
                                            "Home"),
                                        React.createElement("div", { className: "lost_found_overall" },
                                            React.createElement("div", { className: isActive ? 'lost_found_search-box1' : "lost_found_search-box" },
                                                React.createElement("label", null, "Begin your Search"),
                                                React.createElement("div", { className: "search-section" },
                                                    React.createElement("input", { type: "text", placeholder: "A Block Bag", value: searchTerm, onChange: handleChange, className: "serach-box" }),
                                                    React.createElement("p", null, "Not mine"),
                                                    React.createElement("input", { className: "btn raise-btn", type: "submit", value: "Raise a complaint", onClick: toggleClass })),
                                                React.createElement("div", { className: isActive ? 'search-list1' : "search-list" },
                                                    React.createElement("ul", null, data_list.map(item => (React.createElement("li", { key: item.Icon },
                                                        React.createElement("div", { className: "search_pict" },
                                                            React.createElement("img", { src: item.Icon }),
                                                            React.createElement("span", { className: "found-time" }, item.Time)),
                                                        React.createElement("h6", null, item.Name))))))),
                                            React.createElement("div", { className: isActive ? 'found-details-section' : "found-details-section1" },
                                                React.createElement("div", { className: "found-details" },
                                                    React.createElement("ul", null,
                                                        React.createElement("li", null,
                                                            React.createElement("div", { className: "drog_drop" },
                                                                React.createElement("p", null, "Drop your file"))),
                                                        React.createElement("li", null,
                                                            React.createElement("div", { className: "matching_terms" },
                                                                React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                    React.createElement(components_1.Label, null, "Title"),
                                                                    React.createElement(components_1.Input, { type: "text", value: inputValue, onChange: (value) => setInputValue(value), placeholder: "Input placeholder" })),
                                                                React.createElement("div", { className: className1, onClick: matchingTermsShow },
                                                                    React.createElement("p", null, "Experience image AI found some matching terms."),
                                                                    React.createElement("ul", null,
                                                                        React.createElement("li", null,
                                                                            React.createElement("button", { className: "btn mobile-btn" }, "Mobile phone")),
                                                                        React.createElement("li", null,
                                                                            React.createElement("button", { className: "btn streetmad-btn" }, "Street Madinah")),
                                                                        React.createElement("li", null,
                                                                            React.createElement("button", { className: "btn watch-btn" }, "Watch")),
                                                                        React.createElement("li", null,
                                                                            React.createElement("button", { className: "btn window-btn" }, "Window")))))),
                                                        React.createElement("li", null,
                                                            React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                React.createElement(components_1.Label, null, "Item description"),
                                                                React.createElement("textarea", { className: "form-control", id: "exampleFormControlTextarea1" }))),
                                                        React.createElement("li", null,
                                                            React.createElement("ul", null,
                                                                React.createElement("li", null,
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Name"),
                                                                        React.createElement(components_1.Input, { type: "text", value: inputValue, onChange: (value) => setInputValue(value), placeholder: "Input placeholder" }))),
                                                                React.createElement("li", null,
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Contact Number"),
                                                                        React.createElement(components_1.Input, { type: "number", value: inputValue, onChange: (value) => setInputValue(value), placeholder: "Input placeholder" })))),
                                                            React.createElement("ul", null,
                                                                React.createElement("li", null,
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Location"),
                                                                        React.createElement(components_1.Select, { selected: selected, options: [
                                                                                { label: "Facility one, West wing, Building 1", value: "op-1" },
                                                                                { label: "Facility one, East wing, Building 1", value: "op-2" },
                                                                                { label: "Facility one, North wing, Building 1", value: "op-3" },
                                                                            ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" }))),
                                                                React.createElement("li", null,
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Report Date"),
                                                                        React.createElement(components_1.DatePicker, { title: "Select Date", date: date, onChange: (date) => setDate(date) })))),
                                                            React.createElement("ul", null,
                                                                React.createElement("li", null,
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Time Reported"),
                                                                        React.createElement(components_1.DatePicker, { title: "Select Date", date: date, onChange: (date) => setDate(date) }))),
                                                                React.createElement("li", { className: "last-item-reported" },
                                                                    React.createElement(components_1.FormField, { inline: true, className: "showcase-checkbox", backgroundColor: "white" },
                                                                        React.createElement(components_1.Label, null, "Lost item reported"),
                                                                        React.createElement(components_1.Checkbox, { onChange: onChangeCheckbox, checked: checkedCheckState, label: '', isValid: true })))))),
                                                    React.createElement("div", { className: "found-arrow", onClick: QRcode_matching_terms }))),
                                            React.createElement("div", { className: className, onClick: QRcode },
                                                React.createElement("div", { className: "qr-scan-code" },
                                                    React.createElement("div", { className: "qr-pict" }),
                                                    React.createElement("button", { className: "btn qr-btn" }, "Print QR"))))))),
                            React.createElement(components_1.DataList, { className: "has-no-footer", data: (max, last) => getDataItems(max, last), renderItem: renderItem, pageSize: 10 })))))));
};
const ProfileCard = (props) => {
    return React.createElement(React.Fragment, null,
        React.createElement(components_1.WidgetWrapper, null,
            React.createElement(components_1.TitleBar, { title: '', className: "profile-title" }, " "),
            React.createElement("div", { id: "profile_Card" },
                React.createElement("div", { className: "profile-lft" },
                    React.createElement("div", { className: "profile-pict" })),
                React.createElement("div", { className: "profile-rgt" },
                    React.createElement("div", { className: "profile-details" },
                        React.createElement("button", { className: "btn profile-btn" }, "Al-Masjid an-Nabawi"),
                        React.createElement("h5", null, "NEW LOST ITEM REPORTED"),
                        React.createElement("h1", null, "BLACK HANDBAG"),
                        React.createElement("p", null, "AT 12:30 PM"),
                        React.createElement("div", { className: "profile-details-bot" },
                            React.createElement("button", { className: "btn alert-btn" }, "Alert Team"),
                            React.createElement(components_1.Button, { className: "btn profile-btn", title: "View CCTV", onClick: () => alert("clicked"), icon: "https://static.iviva.com/images/UXP_spaceworks/cctv-icon.png" })))))));
};
const AlmasjidWidget = (props) => {
    let [selected, setSelected] = React.useState("op-1");
    return React.createElement(React.Fragment, null,
        React.createElement(components_1.WidgetWrapper, null,
            React.createElement(components_1.TitleBar, { className: "Almasjid-header", icon: 'https://static.iviva.com/images/Adani_UXP/users.svg', title: 'AL-MASJID AN-NABAWI' },
                React.createElement("div", { className: "uti-analytics_rht" },
                    React.createElement("div", { className: "uti-sel-boxes" },
                        React.createElement("div", { className: "uti-sel-box sel-margin" },
                            React.createElement(components_1.FormField, { inline: true, className: "showcase-input", backgroundColor: "white" },
                                React.createElement(components_1.Select, { selected: selected, options: [
                                        { label: "Al-Masjid on-Nabawi", value: "op-1" },
                                        { label: "Al-Masjid on-Nabawi", value: "op-2" },
                                        { label: "Al-Masjid on-Nabawi", value: "op-3" },
                                    ], onChange: (value) => { setSelected(value); }, placeholder: " -- select --" })))))),
            React.createElement("div", { id: "Almasjid_Widget" },
                React.createElement(components_1.ItemListCard, { className: "list-boxes", title: "", item: {
                        "hvac": {
                            "icon": "https://static.iviva.com/images/Adani_UXP/AC_min.png",
                            "top_label": 75,
                            "green_icon": "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                            "bot_label": 25,
                            "red_icon": "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png"
                        },
                        "lighting": {
                            "icon": "https://static.iviva.com/images/UXP_spaceworks/light.svg",
                            "top_label": 75,
                            "green_icon": "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                            "bot_label": 25,
                            "red_icon": "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png"
                        },
                        "elevators": {
                            "icon": "https://static.iviva.com/images/UXP_spaceworks/elevater.png",
                            "top_label": 75,
                            "green_icon": "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                            "bot_label": 25,
                            "red_icon": "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png"
                        },
                        "fire alarm": {
                            "icon": "https://static.iviva.com/images/UXP_spaceworks/Fire_Alarm.svg",
                            "top_label": 75,
                            "green_icon": "https://static.iviva.com/images/UXP_spaceworks/top-arrow.png",
                            "bot_label": 25,
                            "red_icon": "https://static.iviva.com/images/UXP_spaceworks/bottom-arrow.png"
                        }
                    }, fields: ["hvac", "lighting", "elevators", "fire alarm"], renderField: (item, field) => {
                        return (React.createElement("div", { className: "box" },
                            React.createElement("div", { className: "box-top" },
                                React.createElement("label", { className: "label" }, item[field].top_label),
                                React.createElement("span", { className: "top-icon" },
                                    React.createElement("img", { src: item[field].green_icon }))),
                            React.createElement("div", { className: "box-item" },
                                React.createElement("div", { className: "icon box-items_icon" },
                                    React.createElement("img", { src: item[field].icon })),
                                React.createElement("p", null, field.toUpperCase())),
                            React.createElement("div", { className: "box-bot" },
                                React.createElement("label", { className: "label" }, item[field].bot_label),
                                React.createElement("span", { className: "bot-icon" },
                                    React.createElement("img", { src: item[field].red_icon })))));
                    } }),
                React.createElement("div", { id: "Almas_lft_arrow" }))));
};
const MapWidget = (props) => {
    // const MapComponent: React.FunctionComponent<IMapComponentProps> = (props) => {
    let [defCheckState, setDefCheckState] = React.useState(false);
    // const onChangeCheckboxDef = (checked: boolean) => {
    //     setDefCheckState(checked);
    // }
    let [checkedCheckState, setCheckedCheckState] = React.useState(true);
    const onChangeCheckbox = (checked) => {
        setCheckedCheckState(checked);
    };
    // props
    //    let { mapUrl, markers, onMarkerClick, center, zoom, regions, onClick, onRegionClick } = props;
    return React.createElement(React.Fragment, null,
        React.createElement(components_1.WidgetWrapper, null,
            React.createElement(components_1.TitleBar, { title: '', className: "map-title" }, " "),
            React.createElement("div", { id: "Map_Widget" },
                React.createElement("div", { className: "building_map" },
                    React.createElement(components_2.MapComponent, { mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", markers: [
                            {
                                latitude: 6.927079,
                                longitude: 79.861244
                            },
                            {
                                latitude: 1.290270,
                                longitude: 103.851959,
                                data: {
                                    name: "singapore"
                                }
                            }
                        ], onMarkerClick: (el, data) => {
                            console.log(el);
                            console.log(data);
                        } }),
                    React.createElement("div", { className: "social-distancing-vilation" },
                        React.createElement("div", { className: "social-distancing-sec" },
                            React.createElement("span", { className: "social-distancing-sec-pict" }),
                            React.createElement("label", null, "Social distancing vialations"),
                            React.createElement("em", null, "134")),
                        React.createElement("div", { className: "social-distancing-check" },
                            React.createElement(components_1.Checkbox, { onChange: onChangeCheckbox, checked: checkedCheckState, label: 'View', type: "switch-line", isValid: true }))),
                    React.createElement("div", { className: "map-list-items" },
                        React.createElement("div", { className: "map-item enlarge-item" }),
                        React.createElement("div", { className: "map-item material-tool" }),
                        React.createElement("div", { className: "map-item map-data-count" }),
                        React.createElement("div", { className: "map-item zone-item" }),
                        React.createElement("div", { className: "map-item zoom_out-item" }),
                        React.createElement("div", { className: "map-item zoom_in-item" }))))));
};
React.createElement("div", { id: "footer" },
    React.createElement("p", null, "Powered by spaceworx.io"));
// registerWidget({
//     "id": "top_Bar",
//     "name": "TOP BAR",
//     "widget": TopBar,
//     "configs": {
//     }
// });
uxp_1.registerWidget({
    "id": "lostFound_Analytics",
    "name": "LOSTFOUND ANALYTICS",
    "widget": LostFoundAnalytics,
    "configs": {}
});
uxp_1.registerWidget({
    "id": "Almasjid_Widget",
    "name": "ALMASJID WIDGET",
    "widget": AlmasjidWidget,
    "configs": {}
});
uxp_1.registerWidget({
    "id": "profile_Card",
    "name": "PROFILE CARD",
    "widget": ProfileCard,
    "configs": {}
});
uxp_1.registerWidget({
    "id": "Map_Widget",
    "name": "MAP WIDGET",
    "widget": MapWidget,
    "configs": {}
});


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUI = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    let widget = Object.assign({}, _widget, { id: (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    let link = Object.assign({}, _link, { id: (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase() });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}
exports.registerLink = registerLink;
function registerUI(_ui) {
    let ui = Object.assign({}, _ui, { id: (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase() });
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', ui.id);
    window.registerUI(ui);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = UXPComponents;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map