
var cacheBuster = Date.now();

/*- jQuery Document Ready, Optional Triggers ---------------------------------*/

$(document).ready(function(){
	widont();
	initFitVid();
});

$(window).load(function() {
	initWaypoints();
});

$(window).resize(function() {

});

$(window).scroll(function(evt) {

});

/*- Add scroll triggers (Waypoints) ------------------------------------------*/

function initWaypoints() {

	var htmlElement = $('html')[0];

	// EXAMPLE: enable waypoints for all figure elements in your main content area
	// $('.content figure').each(function() {
	// 	new Waypoint.Inview({
	// 	  element: this,
	// 	  enter: function(direction) {
	// 	    // console.log('Enter triggered with direction ' + direction);
	// 	    $(this.element).addClass('waypoint-enter');
	// 	    $(this.element).removeClass('waypoint-entered');
	// 	    $(this.element).removeClass('waypoint-exit');
	// 	    $(this.element).removeClass('waypoint-exited');
	// 	  },
	// 	  entered: function(direction) {
	// 	    // console.log('Entered triggered with direction ' + direction);
	// 	    $(this.element).removeClass('waypoint-enter');
	// 	    $(this.element).addClass('waypoint-entered');
	// 	    $(this.element).removeClass('waypoint-exit');
	// 	    $(this.element).removeClass('waypoint-exited');
	// 	  },
	// 	  exit: function(direction) {
	// 	    // console.log('Exit triggered with direction ' + direction);
	// 	    $(this.element).removeClass('waypoint-enter');
	// 	    $(this.element).removeClass('waypoint-entered');
	// 	    $(this.element).addClass('waypoint-exit');
	// 	    $(this.element).removeClass('waypoint-exited');
	// 	  },
	// 	  exited: function(direction) {
	// 	    // console.log('Exited triggered with direction ' + direction);
	// 	    $(this.element).removeClass('waypoint-enter');
	// 	    $(this.element).removeClass('waypoint-entered');
	// 	    $(this.element).removeClass('waypoint-exit');
	// 	    $(this.element).addClass('waypoint-exited');
	// 	  }
	// 	});
	// });

}

/*- Turn on FitVid -----------------------------------------------------------*/

function initFitVid() {
	try {
		$('.content').fitVids();
	} catch(e) {}
}

/*- Widon't ------------------------------------------------------------------*/
//
// Zap tyographic widows in headlines
// See: http://justinhileman.info/article/a-jquery-widont-snippet/
function widont() {
	$('h1,h2,h3').each(function() {
		$(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
	});
}
