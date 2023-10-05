/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Slice = require( '@stdlib/slice-ctor' );
var slice2seq = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof slice2seq, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function converts a Slice object to a subsequence string', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		new Slice(),
		new Slice( null ),
		new Slice( 10 ),
		new Slice( -1 ),
		new Slice( 2, 10 ),
		new Slice( null, -1 ),
		new Slice( -5, null ),
		new Slice( null, null, null ),
		new Slice( 2, 10, 2 ),
		new Slice( -2, -10, -2 ),
		new Slice( null, 10, 2 ),
		new Slice( 2, null, 2 ),
		new Slice( 2, 10, null ),
		new Slice( null, null, 2 ),
		new Slice( 2, null, null ),
		new Slice( null, 10, null ),
		new Slice( -1, null, -2 ),
		new Slice( null, null, -2 )
	];
	expected = [
		':',
		':',
		':10',
		':-1',
		'2:10',
		':-1',
		'-5:',
		':',
		'2:10:2',
		'-2:-10:-2',
		':10:2',
		'2::2',
		'2:10',
		'::2',
		'2:',
		':10',
		'-1::-2',
		'::-2'
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = slice2seq( values[ i ] );
		t.strictEqual( actual, expected[ i ], 'returns expected value when provided ' + values[ i ].toString() );
	}
	t.end();
});
