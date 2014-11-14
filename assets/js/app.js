(function($, goo) {
    
    $.fn.showMap = function(options){
        
        var locations = {
          
            prague: new goo.maps.LatLng(50.088157, 14.421240)
            
            
        };
        
        options = $.extend({
        
            center: locations.prague,
            zoom: 12,
            scrollwheel: false,
            mapTypeId: goo.maps.MapTypeId.ROADMAP
        
        }, options); 
        
        var map = new goo.maps.Map(document.getElementById($(this).attr('id')), options);
        
        return this;
    };
 
 $.fn.parallax = function() {
 
  var moveBg = function(elem) {
  
   var speed = elem.data("speed");
   if(!speed){ 
   speed = 2;
   }
   var y = ' 50% ' + ((elem.offset().top - $(window).scrollTop()) / speed) + 'px';
   elem.css({"background-position": y, "background-attachment": "fixed"});
   
  };
  
  return this.each(function() {
   
   var self = $(this);
   
   moveBg(self);
   
   $(window).scroll(function(){
    moveBg(self);
   });
   
   $(window).resize(function(){
    moveBg(self);
   });
   
   
  });
 
 };
 
    $.fn.autoscroll = function (options, callback) {
        
        var self = this;
        var settings = $.extend({
            speed: 1000,
            offset: 0,
            easing: "swing",
            history: true
        }, options);
        
        return self.click(function(event) {
            
            event.preventDefault();
        
            var target = $(this.hash);
        
            if (target.length) {
                
                var pos = target.offset().top - settings.offset;
                $('html, body').stop().animate({scrollTop: pos}, settings.speed, settings.easing, function() {
     if(typeof callback === "function"){
     callback.call(self);
     }
    });
    
    if(settings.history) {
     window.history.pushState('', '', target.selector);
    }else {
     window.history.pushState('', '', './');
    }
    
            }
        });
    };
 
}(jQuery, google));



$(document).ready(function() {
 
 var navDown = false;
 
 $(".nav-link").autoscroll({easing: 'easeOutQuint'}).click(function(event) {
  
  if (navDown) {
    $("#nav-links").toggleClass("hidden");
    navDown = false;
   }
 });
 

    
    $("#hamburger").click(function(event) {
        
  $("#nav-links").toggleClass("hidden");
        
        if(navDown) {
            navDown = false;
        } else {
            navDown = true;
        }
    
    });
    
 $(".parallax").parallax();
    
    $("#map-canvas").showMap();
 
 
});