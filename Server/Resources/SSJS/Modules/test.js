/*
* This file is part of Wakanda software, licensed by 4D under
*  (i) the GNU General Public License version 3 (GNU GPL v3), or
*  (ii) the Affero General Public License version 3 (AGPL v3) or
*  (iii) a commercial license.
* This file remains the exclusive property of 4D and/or its licensors
* and is protected by national and international legislations.
* In any event, Licensee's compliance with the terms and conditions
* of the applicable license constitutes a prerequisite to any use of this file.
* Except as otherwise expressly stated in the applicable license,
* such license does not include any other license or rights on this file,
* 4D's and/or its licensors' trademarks and/or other proprietary rights.
* Consequently, no title, copyright or other proprietary rights
* other than those specified in the applicable license is granted.
*/
/**
 * <p>The "test" module provides a "run" method that runs unit tests and catalogs their
 * results. The "run" method must return the total number of failures, suitable for 
 * use as a process exit status code.</p>
 *
 * <pre name="code" class="js">
 * if (module === require.main) {
 * &nbsp;   require("test").run(exports);
 * }
 * </pre>
 *
 * <p><a href="http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Test">CommonJS test module reference</a></p>
 *
 * @module test
 */
 
 
/*jslint white: true, es5: true, onevar: true, undef: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: true */

// "use strict";

/*global console*/

if (typeof Test === undefined) {
/**
 * <p>The "test" module provides a "run" method that runs unit tests and catalogs their
 * results. The "run" method must return the total number of failures, suitable for 
 * use as a process exit status code.</p>
 *
 * <pre name="code" class="js">
 * if (module === require.main) {
 * &nbsp;   require("test").run(exports);
 * }
 * </pre>
 *
 * <p><a href="http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Test">CommonJS test module reference</a></p>
 *
 * @class Test
 * @extends Object
 **/
     Test = function Test() {};
}


/**
 * Array store of all messages sent via the <code>print</code> method when
 * the <code>mode</code> property is set to "output".
 *
 * @property output
 * @type Array
 * @shared Shared
 * @default []
 **/
exports.output = [];


/**
 * The <code>print</code> method send messages to either the console or its own
 * <code>output</code> array property.
 *
 * @method print
 **/
exports.print = function print(msg) {
	console.log(msg);
	output.push(msg);
};


/**
 * The <code>assert</code> method send the <code>message</code> to the 
 * <code>print</code> method prefixed by either 'PASS' or 'FAIL'
 * from the result of the <code>condition</code>
 *
 * @method assert
 * @param {Boolean} condition
 * @param {String} message
 **/
exports.assert = function assert(condition, message) {
    if (condition) {
        console.info('PASS - ', message);
        output.push('PASS - ' + message);
    } else {
        console.warn('FAIL - ', message);
        output.push('FAIL - ' + message);
    }
};


/**
 * <p>The "test" module provides a "run" method that runs unit tests and catalogs their
 * results. The "run" method must return the total number of failures, suitable for 
 * use as a process exit status code.</p>
 *
 * <pre name="code" class="js">
 * if (module === require.main) {
 * &nbsp;   require("test").run(exports);
 * }
 * </pre>
 *
 * <p><a href="http://wiki.commonjs.org/wiki/Unit_Testing/1.0#Test">CommonJS test module reference</a></p>
 *
 * <p><code>run</code> accept any Object, usually a unit test module's exports. <code>run(object)</code> 
 * will scan the object for all functions and object properties that have names that begin with but
 * are not equal to <code>"test"</code>, and other properties for specific flags. Sub-objects with 
 * names that start with but are not equal to <code>"test"</code> will be run as sub-tests.</p>
 *
 * <pre name="code" class="js">
 * // ./sub-test
 * exports.testPatience = function () {
 * &nbsp;   require('os').sleep(1000);
 * };
 * </pre>
 *
 * <pre name="code" class="js">
 * // ./test
 * exports.testSubTest = require("./sub-test");
 * </pre>
 *
 * <p>Test names may be any String that begins with <code>"test"</code>, not necessarily respecting a case convention.</p>
 *
 * <pre name="code" class="js">
 * [
 * &nbsp;   [{"a": 10}, {"a": 10}],
 * &nbsp;   [[1, 2, 3], [1, 2, 3]]
 * ].forEach(function (pair) {
 * &nbsp;   exports['test ' + pair[0].toSource()] = function () {
 * &nbsp;       assert.equal.apply(assert, pair);
 * &nbsp;   };
 * });
 *
 * exports["test behaviour X"] = function() {
 * &nbsp;   behaviour.X()
 * }
 * </pre>
 *
 * @method run
 * @param {Object} testSuite
 **/
exports.run = function (testSuite) {

    runStack.push(testSuite);

    Object.keys(testSuite).forEach(
        function (testName) {
            var test, subTestSuite;
            
            if (!(testName.substr(0, 4).match(/^test/i) && testName.length === 4)) {
                return;
            }
            
            test = testSuite[testName];
            
            if (typeof test !== "function") {
                
                subTestSuite = test;
                
                if (runStack.indexOf(subTestSuite) === -1) {
                    return;
                }
                
                exports.run(subTestSuite);
            }
            
            try {
                test();
            } catch (e) {}
        }
    );
    
    runStack.pop();
};

runStack = [];