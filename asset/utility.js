(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utility"] = factory();
	else
		root["utility"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by rubyisapm on 16/12/21.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
	  var base=__webpack_require__(1),
	    objTransfer=__webpack_require__(2);
	  return {
	    base:base,
	    objTransfer:objTransfer
	  }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by rubyisapm on 16/12/21.
	 */
	!(module.exports = {
	  upperCaseFirst:function(str){
	    return str.replace(/^[a-z]/,function(firstLetter){
	      return firstLetter.toUpperCase();
	    })
	  },
	  lowerCaseFirst:function(str){
	    return str.replace(/^[A-Z]/,function(firstLetter){
	      return firstLetter.toLowerCase();
	    })
	  },
	  isArray:function(val){
	    return Object.prototype.toString.call(val)==='[object Array]';
	  },
	  isObject:function(val){
	    return typeof val==='object' && !utility.base.isArray(val);
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by rubyisapm on 16/12/21.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
	  var base=__webpack_require__(1);
	  function transferKeyInObj(transfer,obj){
	    if(obj===null){
	      return obj;
	    }
	    var newObj={},
	      keys=Object.keys(obj);
	    if(keys.length===0){
	      return obj;
	    }
	    keys.map(function(key){
	      var val=obj[key],
	        newKey=transfer(key);
	      if(base.isObject(val)){
	        newObj[newKey]=transferKeyInObj(val);
	      }else if(base.isArray(val)){
	        newObj[newKey]=transferKeyInArray(transfer,val);
	      }else{
	        newObj[newKey]=val;
	      }
	    });
	    return newObj;
	  }

	  function transferKeyInArray(transfer,arr){
	    if(arr.length==0){
	      return arr;
	    }
	    var newArray=[];
	    arr.map(function(item,index){
	      if(base.isArray(item)){
	        newArray[index]=transferKeyInArray(transfer,item);
	      }else if(base.isObject(item)){
	        newArray[index]=transferKeyInObj(transfer,item);
	      }else{
	        newArray[index]=item;
	      }
	    });
	    return newArray;
	  }



	  return {
	    upperKey:function(obj){
	      return transferKeyInObj(base.upperCaseFirst,obj);
	    },
	    lowerKey:function(obj){
	      return transferKeyInObj(base.lowerCaseFirst,obj);
	    }
	  }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ])
});
;