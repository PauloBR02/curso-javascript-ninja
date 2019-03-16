(function(){
	var myObject = {
		myProperty: 1,
		init: function init(){
			return this;
		}
	};
	console.log(myObject.init());
})();