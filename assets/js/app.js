(function($, g) {
    
    
    
    $.fn.showMap = function(options) {
        
        var locations = {
        
            prague: new g.maps.LatLng(50.085401, 14.416020),
            walk1: new g.maps.LatLng(50.084194, 14.423488),
            walk2: new g.maps.LatLng(50.079064, 14.416728),
            walk3: new g.maps.LatLng(50.084052, 14.407507),
            walk4: new g.maps.LatLng(50.089790, 14.417056)
            
        
        };
        
        options = $.extend({
        
            center: locations.prague,
            zoom: 15,
            scrollwheel: false,
            mapTypeId: g.maps.MapTypeId.ROADMAP 
        
        }, options);
        
        var map = new g.maps.Map(document.getElementById($(this).attr('id')), options);
    
    
        //markers
        var marker1=new google.maps.Marker({
            position:locations.walk1,
            });

        marker1.setMap(map);
        
        var marker2=new google.maps.Marker({
            position:locations.walk2,
            });

        marker2.setMap(map);
        
        var marker3=new google.maps.Marker({
            position:locations.walk3,
            });

        marker3.setMap(map);
        
        var marker4=new google.maps.Marker({
            position:locations.walk4,
            });

        marker4.setMap(map);
        
        //info windows
        var infowindow1 = new google.maps.InfoWindow({
            content:"This is the Walk1 description"
            });

        
        var infowindow2 = new google.maps.InfoWindow({
            content:"This is the Walk2 description"
            });

        
        var infowindow3 = new google.maps.InfoWindow({
            content:"This is the Walk3 description"
            });

        
        var infowindow4 = new google.maps.InfoWindow({
            content:"This is the Walk4 description"
            });

        
        //events
        
        google.maps.event.addListener(marker1, 'click', function() {
            
            if(infowindow1.OPENED) {
                infowindow1.close(map,marker1);
            } else {
                infowindow1.open(map,marker1);
                marker1.setAnimation(google.maps.Animation.BOUNCE);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
            });
        
        google.maps.event.addListener(marker2, 'click', function() {
            
            if(infowindow2.OPENED) {
                infowindow2.close(map,marker2);
            } else {
                infowindow2.open(map,marker2);
                marker2.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
            });
        
        google.maps.event.addListener(marker3, 'click', function() {
            
            if(infowindow3.OPENED) {
                infowindow3.close(map,marker3);
            } else {
                infowindow3.open(map,marker3);
                marker3.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
            });
        
        google.maps.event.addListener(marker4, 'click', function() {
            
            if(infowindow4.OPENED) {
                infowindow4.close(map,marker4);
            } else {
                infowindow4.open(map,marker4);
                marker4.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
            }
            
            });
        
        // DOM button to infowindow
        
        
        $("#walkmarker1").click(function() {
      
            if(infowindow1.OPENED) {
                infowindow1.close(map,marker1);
            } else {
                infowindow1.open(map,marker1);
                marker1.setAnimation(google.maps.Animation.BOUNCE);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
        });
        
        $("#walkmarker2").click(function() {
      
            if(infowindow2.OPENED) {
                infowindow2.close(map,marker2);
            } else {
                infowindow2.open(map,marker2);
                marker2.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
        });
        
        $("#walkmarker3").click(function() {
      
            if(infowindow3.OPENED) {
                infowindow3.close(map,marker3);
            } else {
                infowindow3.open(map,marker3);
                marker3.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow4.close(map,marker4);
                marker4.setAnimation(null);
            }
            
        });
        
        $("#walkmarker4").click(function() {
      
            if(infowindow4.OPENED) {
                infowindow4.close(map,marker4);
            } else {
                infowindow4.open(map,marker4);
                marker4.setAnimation(google.maps.Animation.BOUNCE);
                infowindow1.close(map,marker1);
                marker1.setAnimation(null);
                infowindow2.close(map,marker2);
                marker2.setAnimation(null);
                infowindow3.close(map,marker3);
                marker3.setAnimation(null);
            }
            
        });


        
        
        
        
        return this;
    };
    
    $.fn.parallax = function() {
    
        var moveBg = function(elem) {
            var speed = elem.data("speed");
            if(!speed) { speed = 2;}
            var y = '50%' + ((elem.offset().top - $(window).scrollTop()) / speed ) + 'px';
            elem.css({"background-position": y, "background-attachment": "fixed"});
        };
        
        return this.each(function() {
            var self = $(this);
                moveBg(self);
            $(window).scroll(function() {
                moveBg(self);
            });
            $(window).resize(function() {
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
                
                /*if($(window).height() > ($(document).height() - pos)) {
                    pos = pos - $(window).height();
                }*/
                $('html, body').stop().animate({scrollTop: pos}, settings.speed, settings.easing, function() {
                    if(typeof callback === "function") {
     callback.call(self);
                    }
    
    });
                if (settings.history) {
                    window.history.pushState('','',target.selector);
                } else {
                    window.history.pushState('','','./');
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

    
