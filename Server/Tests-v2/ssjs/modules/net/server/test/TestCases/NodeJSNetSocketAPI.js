﻿/*
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
////////////////////////////////////////////////////////////////////////////////////	Test Node JS net.Socket API - tests are done according Node.js doc :////	http://nodejs.org/docs/v0.6.6/api/net.html//////////////////////////////////////////////////////////////////////////////////function testCheckSocketAPI() {	var sock=new net.Socket();		Y.Assert.isObject(sock.connect,				"Check connect method exists : ");	Y.Assert.isNumber(sock.bufferSize, 			"Check bufferSize property exists : ");	Y.Assert.isObject(sock.setEncoding,			"Check setEncoding method exists : ");	Y.Assert.isObject(sock.setSecure,  			"Check setSecure method exists : ");	Y.Assert.isObject(sock.write, 				"Check write method exists : "); 	Y.Assert.isObject(sock.end, 				"Check end method exists : "); 	Y.Assert.isObject(sock.destroy, 			"Check destroy method exists : "); 	Y.Assert.isObject(sock.pause, 				"Check pause method exists : "); 	Y.Assert.isObject(sock.resume, 				"Check resume method exists : ");  	Y.Assert.isObject(sock.setTimeout,	 		"Check setTimeout method exists : ");  	Y.Assert.isObject(sock.setNoDelay, 			"Check setNoDelay method exists : ");  	Y.Assert.isObject(sock.setKeepAlive,	 	"Check setKeepAlive method exists : ");  	Y.Assert.isObject(sock.address,				"Check address property exists : ");  	Y.Assert.isUndefined(sock.remoteAddress,	"New remoteAddress property - Update the test ! ");  	//Y.Assert.isString(sock.remoteAddress, 	"Check remoteAddress property exists : ");  	Y.Assert.isUndefined(sock.remoteAddress, 	"New remoteAddress property - Update the test ! : ");	//Y.Assert.isNumber(sock.remotePort, 		"Check remotePort property exists : ");  	Y.Assert.isNumber(sock.bytesRead, 			"Check bytesRead property exists : ");  	Y.Assert.isNumber(sock.bytesWritten, 		"Check bytesWritten property exists : ");}function testCheckSocketAPI_connect_first_param_1() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(undefined);				Y.Assert.fail('connect accept bad first parameter <undefined>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <undefined> !')}function testCheckSocketAPI_connect_first_param_2() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(null);				Y.Assert.fail('connect accept bad first parameter <null>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <null> !')}function testCheckSocketAPI_connect_first_param_3() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(1234);				Y.Assert.fail('connect accept bad first parameter <1234>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <1234> !')}function testCheckSocketAPI_connect_first_param_4() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect("hello");				Y.Assert.fail('connect accept bad first parameter <"hello">');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <"hello"> !')}//Cas qui rÃ©ussi !function testCheckSocketAPI_connect_first_param_5() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080);	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'connect failed with good parameter <8080> !')}function testCheckSocketAPI_connect_second_param_1() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, undefined);				Y.Assert.fail('connect accept bad second parameter <undefined>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <undefined> !')}function testCheckSocketAPI_connect_second_param_2() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, null);				Y.Assert.fail('connect accept bad second parameter <null>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <null> !')}function testCheckSocketAPI_connect_second_param_3() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, 1234);				Y.Assert.fail('connect accept bad second parameter <1234>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <1234> !')}function testCheckSocketAPI_connect_second_param_4() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, "hello");				Y.Assert.fail('connect accept bad second parameter <"hello">');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'connect succeed with bad parameter <"hello"> !')}//cas qui rÃ©ussifunction testCheckSocketAPI_connect_second_param_5() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, "127.0.0.1");			}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'connect failed with good parameter <"127.0.0.1"> !')}//cas qui rÃ©ussifunction testCheckSocketAPI_connect_second_param_6() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.connect(8080, "localhost");			}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "connect Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "connect Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'connect failed with good parameter <"localhost"> !')}function testCheckSocketAPI_setEncoding_first_param_1() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding(undefined);				Y.Assert.fail('sentEncoding accept bad first parameter <undefined>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'sentEncoding succeed with bad parameter <undefined> !')}function testCheckSocketAPI_setEncoding_first_param_2() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding(null);				Y.Assert.fail('sentEncoding accept bad first parameter <null>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'sentEncoding succeed with bad parameter <null> !')}function testCheckSocketAPI_setEncoding_first_param_3() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding(1234);				Y.Assert.fail('sentEncoding accept bad first parameter <1234>');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'sentEncoding succeed with bad parameter <1234> !')}function testCheckSocketAPI_setEncoding_first_param_4() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding("hello");				Y.Assert.fail('sentEncoding accept bad first parameter <"hello">');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isTrue(didFail, 'sentEncoding succeed with bad parameter <"hello"> !')}//cas qui rÃ©ussifunction testCheckSocketAPI_setEncoding_first_param_5() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding('ascii');	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'sentEncoding failed with good parameter <"ascii"> !')}//cas qui rÃ©ussifunction testCheckSocketAPI_setEncoding_first_param_6() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding("utf8");	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'sentEncoding failed with good parameter <"utf8"> !')}//cas qui rÃ©ussifunction testCheckSocketAPI_setEncoding_first_param_7() {	var failWithListener=false;	var failWithListenerMessage=false;		var failWithException=false;	var failWithExceptionMessage=false;	var sock=new net.Socket();		sock.addListener('error', function(err) {		failWithListener=true;		if(errorMessageExists(err))		{			failWithListenerMessage=true;			}			});	try {		sock.setEncoding("base64");	}	catch(err) {				failWithException=true;				if(errorMessageExists(err))		{			failWithExceptionMessage=true;		}			}		wait(123);	sock=null;	var didFail=failWithListener||failWithException;	if(failWithListener) {					Y.Assert.isTrue(failWithListenerMessage, "sentEncoding Failure : Found an error listener with no message !");				}	if(failWithException) {					Y.Assert.isTrue(failWithExceptionMessage, "sentEncoding Failure : Found an exception with no message !");				}		Y.Assert.isFalse(didFail, 'sentEncoding failed with good parameter <"base64"> !')}