/*jshint -W098 */
(function ( root, factory ) {
	if ( typeof module === "object" && module.exports ) {
		// Node, or CommonJS-Like environments
		module.exports = function ( _ ) {
			_ = _ || require( "underscore" );
			return factory( _ );
		};
	} else if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define( ["underscore"], function ( _ ) {
			return factory( _, root );
		} );
	} else {
		// Browser globals
		root.postal = factory( root._, root );
	}
}( this, function ( _, global, undefined ) {

	var postal;

	//import("ConsecutiveDistinctPredicate.js");
	//import("DistinctPredicate.js");
	//import("ChannelDefinition.js");
	//import("SubscriptionDefinition.js");
	//import("AmqpBindingsResolver.js");
	//import("LocalBus.js");
	//import("Api.js");

	/*jshint -W106 */
	if ( global.hasOwnProperty( "__postalReady__" ) && typeof global.__postalReady__ === "function" ) {
		global.__postalReady__();
	}
	/*jshint +W106 */

	return postal;
} ));