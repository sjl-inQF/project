//   console.log("33333",$(".s_box").find("p"))  
$(".big_picture").find("p").mouseover(function(){
    $("span").stop().show();
 //    console.log($(".b_box").find("img"),22222);
    $(".big_left_s").stop().show();
 //    console.log(event.target);
    
 var w=$(".big_left_s").width()/$(".big_left_s").find("img").width();
 var h=$(".big_left_s").height()/$(".big_left_s").find("img").height();
 
     $(".big_picture").find("p").mousemove(function(e){
         // console.log(111,e);
         $(".big_picture").find("span").css({
             width:$(".big_picture").width()*w,
             height:$(".big_picture").height()*h,
             // left:e.offsetX-$("span").width()/2,
             // top:e.offsetY-$("span").height()/2,
            
          });
         
         var l=e.offsetX-$(".big_picture span").width()/2;
         var t=e.offsetY-$(".big_picture span").height()/2;
         if(l<0){
             l=0;
         }
         if(t<0){
             t=0;
         }
         if(l>$(".big_picture").width()-$(".big_picture span").width()){
             l=$(".big_picture").width()-$(".big_picture span").width()
         }
         if(t>$(".big_picture").height()-$(".big_picture span").height()){
             t=$(".big_picture").height()-$(".big_picture span").height()
         }
         $(".big_picture span").css({
           left:l,
           top:t,
         })
         // console.log(l,t)
         var x=l/($(".big_picture").width()-$(".big_picture span").width())*($(".big_left_s").find("img").width()-$(".big_left_s").width());
        
         var y=t/($(".big_picture").height()-$(".big_picture span").height())*($(".big_left_s").find("img").height()-$(".big_left_s").height());
         console.log(x,y);
        
         
          $(".big_left_s").find("img").css({
            left:-x,
            top:-y,
          })
     })
 
     $(".big_picture").find("p").mouseout(function(){
         $(".big_picture span").stop().hide();
         $(".big_left_s").stop().hide();
     })
 })














