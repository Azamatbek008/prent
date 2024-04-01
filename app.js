$( document ).ready(function() {

    var tl = new TimelineLite({});
  
    $( "#anim" ).click(function() {
        tl.to("#big-apple", 0, {opacity:1, y:-1000,transformOrigin:"50% 50%"})
        tl.to("#big-apple", 1, {ease: Bounce.easeOut, y: 0})
  
        $("#anim").hide();
        $("#account").show();
    });
  
    // my account
    $( "#account" ).click(function() {
        tl.to("#basket", 0.4, {opacity:0,fill:'#BD946B'})
        tl.addLabel("time1", "+=1")
        tl.to("#eye-left", 0.4, {opacity:1,fill:'#274B6D'}, "time1")
        tl.to("#eye-right", 0.4, {opacity:1,fill:'#274B6D'}, "time1")
        tl.to("#lips", 0.4, {opacity:1,fill:'#274B6D'}, "time1")
  
        tl.to("#eye-right", 0.6, {morphSVG:{shape:"#eye-close",fill:'#274B6D'}})
        tl.to("#eye-right", 1, {morphSVG:{shape:"#eye-right",fill:'#274B6D'}})
  
        $("#account").hide();
        $("#delivery").show();
    });
  
    // delivery
    $( "#delivery" ).click(function() {
        tl.addLabel("time2", "+=1")
        tl.to("#eye-left", 0.4, {opacity:0,fill:'#274B6D'}, "time2")
        tl.to("#eye-right", 0.4, {opacity:0,fill:'#274B6D'}, "time2")
        tl.to("#lips", 0.4, {opacity:0,fill:'#274B6D'}, "time2")
   
        tl.to("#apple", 0.6, {morphSVG:"#box",fill:'#cfb28a'})
        tl.to("#stem", 0.6, {morphSVG:"#ribbon",fill:'#b48a58'})
        tl.to("#light", 0.6, {morphSVG:"#label",fill:'#FFF'})
        tl.to("#leaf", 1, {y:-350, x:-500, rotation:300, fill:'#e58a28'})
  
        $("#delivery").hide();
        $("#paiement").show();
    });
  
    // paiement
    $( "#paiement" ).click(function() {
        tl.to("#truck", 0, {x:-2000, opacity:1, fill:'#39619E'})
        tl.to("#truck", 2, {x:0, fill:'#39619E'})
  
        $("#paiement").hide();
        $("#confirmation").show();
    });
  
    // confimation
    $( "#confirmation" ).click(function() {
        tl.addLabel("time3", "+=1")    
        tl.to("#truck", 1, {x:1500}, "time3")
        tl.to("#apple", 1, {x:1500}, "time3")
        tl.to("#stem", 1, {x:1500}, "time3")
        tl.to("#light", 1, {x:1500}, "time3")
  
        tl.to("#good", 0, {x:-1000, opacity:1, fill:"#b48a58"})
        tl.to("#good", 1, {x:0, fill:"#b48a58"})
  
        tl.to("#clock9", 0.1, {opacity:1})
        tl.to("#clock10", 0.1, {opacity:1})
        tl.to("#clock11", 0.1, {opacity:1})
        tl.to("#clock12", 0.1, {opacity:1})
        tl.to("#clock1", 0.1, {opacity:1})
        tl.to("#clock2", 0.1, {opacity:1})
        tl.to("#clock3", 0.1, {opacity:1})
        tl.to("#clock4", 0.1, {opacity:1})
        tl.to("#clock5", 0.1, {opacity:1})
        tl.to("#clock6", 0.1, {opacity:1})
        tl.to("#clock7", 0.1, {opacity:1})
        tl.to("#clock8", 0.1, {opacity:1})
  
        tl.to(".send", 0.1, {opacity:1})
  
        $("#confirmation").hide();
      });
  });