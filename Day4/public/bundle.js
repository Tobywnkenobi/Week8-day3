/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webApp_TrackerApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webApp/TrackerApp */ \"./src/webApp/TrackerApp.ts\");\n/* harmony import */ var _tracker_Workout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracker/Workout */ \"./src/tracker/Workout.ts\");\n/* harmony import */ var _tracker_Tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracker/Tracker */ \"./src/tracker/Tracker.ts\");\n/* harmony import */ var _tracker_routines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracker/routines */ \"./src/tracker/routines.ts\");\n\n\n\n\nconsole.log('hello webpack');\nconst routine = new _tracker_routines__WEBPACK_IMPORTED_MODULE_3__.LegDay('Leg Day', [\n    new _tracker_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Bulgarian Split Squats', 40),\n    new _tracker_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Leg Curls', 20),\n    new _tracker_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Calf Raises', 50),\n    new _tracker_Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Hip Thrusts', 80),\n]);\nconst tracker = new _tracker_Tracker__WEBPACK_IMPORTED_MODULE_2__[\"default\"](routine);\nnew _webApp_TrackerApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"](tracker).displayWorkouts();\n\n\n//# sourceURL=webpack://day-4/./src/index.ts?");

/***/ }),

/***/ "./src/tracker/Routine.ts":
/*!********************************!*\
  !*** ./src/tracker/Routine.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Routine)\n/* harmony export */ });\n/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workout */ \"./src/tracker/Workout.ts\");\n\nclass Routine {\n    name;\n    workoutArray;\n    workouts = {};\n    constructor(name, workoutArray) {\n        this.name = name;\n        this.workoutArray = workoutArray;\n        workoutArray.map((workout) => this.workouts[workout.name] = workout);\n    }\n    addWorkout(workout, reps) {\n        this.workouts[workout] = new _Workout__WEBPACK_IMPORTED_MODULE_0__[\"default\"](workout, reps);\n    }\n    removeWorkout(workout) {\n        delete this.workouts[workout];\n    }\n}\n\n\n//# sourceURL=webpack://day-4/./src/tracker/Routine.ts?");

/***/ }),

/***/ "./src/tracker/Tracker.ts":
/*!********************************!*\
  !*** ./src/tracker/Tracker.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tracker)\n/* harmony export */ });\nclass Tracker {\n    routine;\n    constructor(routine) {\n        this.routine = routine;\n    }\n    addReps(workout, count) {\n        if (this.routine.workouts.hasOwnProperty(workout)) {\n            this.routine.workouts[workout].reps += count;\n        }\n    }\n    completeReps(workout, count) {\n        if (this.routine.workouts.hasOwnProperty(workout)) {\n            this.routine.workouts[workout].reps -= count;\n        }\n    }\n    completeWorkout(workout) {\n        this.routine.removeWorkout(workout);\n    }\n    displayWorkouts() {\n        console.table(this.routine.workouts);\n    }\n}\n\n\n//# sourceURL=webpack://day-4/./src/tracker/Tracker.ts?");

/***/ }),

/***/ "./src/tracker/Workout.ts":
/*!********************************!*\
  !*** ./src/tracker/Workout.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Workout)\n/* harmony export */ });\nclass Workout {\n    name;\n    _reps;\n    constructor(name, _reps) {\n        this.name = name;\n        this._reps = _reps;\n    }\n    get reps() {\n        return this._reps;\n    }\n    set reps(reps) {\n        this._reps = reps >= 0 ? reps : 0;\n        // if( reps >= 0 ) {\n        //   this._reps = reps\n        // } else this._reps = 0\n    }\n}\n\n\n//# sourceURL=webpack://day-4/./src/tracker/Workout.ts?");

/***/ }),

/***/ "./src/tracker/routines.ts":
/*!*********************************!*\
  !*** ./src/tracker/routines.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BoulderingTraining: () => (/* binding */ BoulderingTraining),\n/* harmony export */   Insanity: () => (/* binding */ Insanity),\n/* harmony export */   LegDay: () => (/* binding */ LegDay),\n/* harmony export */   Pull: () => (/* binding */ Pull)\n/* harmony export */ });\n/* harmony import */ var _Routine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routine */ \"./src/tracker/Routine.ts\");\n/* harmony import */ var _Workout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workout */ \"./src/tracker/Workout.ts\");\n\n\nclass LegDay extends _Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    name;\n    workoutArray;\n    workouts = {};\n    constructor(name, workoutArray) {\n        super(name, workoutArray);\n        this.name = name;\n        this.workoutArray = workoutArray;\n        workoutArray.map((workout) => (this.workouts[workout.name] = workout));\n    }\n}\nclass Insanity extends _Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static workouts = [\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('burpees', 25),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('bearCrawls', 3),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('mountainClimbers', 15),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('lunges', 20),\n    ];\n}\nclass BoulderingTraining extends _Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(name = 'Bouldering Training', workoutArray = [\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('pullups', 10),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('max-deadhang', 3),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('max-hangboard-pinch', 3),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('max-hangboard-crimp', 3),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('splitsquats', 10),\n        new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('dips', 10),\n    ]) {\n        super(name, workoutArray);\n    }\n}\nclass Pull extends _Routine__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super('Pull Day', [\n            //biceps\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('25lb Curls', 8),\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('20lb Hammer Curls', 8),\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('30lbs - 7-7-7', 2),\n            //back\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('85lb Lat pull downs', 8),\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('30lb cross-body cable pull-down', 8),\n            new _Workout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('30lb single-arm cable rows', 8),\n        ]);\n    }\n}\n// const legDay = new LegDay('Leg Day', [\n//   new Workout('Bulgarian Split Squats', 40),\n//   new Workout('Leg Curls', 20),\n//   new Workout('Calf Raises', 50),\n//   new Workout('Hip Thrusts', 80),\n// ]);\n// const routine = new Routine('plyo', [\n//   new Workout('pushups',25),\n//   new Workout('pullups',3),\n//   new Workout('situps', 15),\n//   new Workout('sprints', 5)\n// ])\n\n\n\n//# sourceURL=webpack://day-4/./src/tracker/routines.ts?");

/***/ }),

/***/ "./src/webApp/TrackerApp.ts":
/*!**********************************!*\
  !*** ./src/webApp/TrackerApp.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TrackerApp)\n/* harmony export */ });\nclass TrackerApp {\n    container;\n    tracker;\n    constructor(tracker) {\n        this.container = document.getElementsByTagName('main')[0];\n        this.tracker = tracker;\n    }\n    displayWorkouts() {\n        for (const workout of Object.values(this.tracker.routine.workouts)) {\n            const workoutDiv = this.createWorkoutDiv(workout);\n            this.container.appendChild(workoutDiv);\n        }\n    }\n    createWorkoutDiv(workout) {\n        const workoutDiv = document.createElement('div');\n        const p = document.createElement('p');\n        this.updatePText(p, workout);\n        workoutDiv.appendChild(p);\n        this.addRepButtons(workoutDiv);\n        return workoutDiv;\n    }\n    updatePText(p, workout) {\n        p.innerText = `${workout.name}\r\n    Reps: ${workout.reps}`;\n    }\n    addRepButtons(div) {\n        const buttonContainer = document.createElement('div');\n        for (const direction of ['+', '-']) {\n            for (const number of [5, 10, 15]) {\n                const repButton = document.createElement('button');\n                repButton.innerText = `${direction}${number}`;\n                repButton.addEventListener('click', bindsadjustReps(this));\n                buttonContainer.append(repButton);\n            }\n        }\n        div.appendChild(buttonContainer);\n    }\n}\n\n\n//# sourceURL=webpack://day-4/./src/webApp/TrackerApp.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;