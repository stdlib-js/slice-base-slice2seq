/*
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

import Slice = require( '@stdlib/slice-ctor' );
import slice2seq = require( './index' );


// TESTS //

// The function returns a string...
{
	slice2seq( new Slice( 0, 10, 2 ) ); // $ExpectType string
	slice2seq( new Slice( null, null, -2 ) ); // $ExpectType string
}

// The compiler throws an error if the function is provided a first argument which is not a slice object...
{
	slice2seq( '1' ); // $ExpectError
	slice2seq( 1 ); // $ExpectError
	slice2seq( true ); // $ExpectError
	slice2seq( false ); // $ExpectError
	slice2seq( null ); // $ExpectError
	slice2seq( undefined ); // $ExpectError
	slice2seq( [] ); // $ExpectError
	slice2seq( {} ); // $ExpectError
	slice2seq( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slice2seq(); // $ExpectError
	slice2seq( new Slice( 0, 10, 2 ), {} ); // $ExpectError
}
