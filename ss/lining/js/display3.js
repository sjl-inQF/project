
class Goods{
    constructor(){
        this.cont3=document.querySelector(".big_ctr");
        this.cont33=document.querySelector(".big_left");
        this.url="http://localhost/1905/lining/goods/index.json";
        this.init();
        this.addEvent();
    }
    addEvent(){
        var that=this;
        this.cont3.onclick=function(eve){
            var e=eve||window.event;
            var t=e.target||e.srcElement;
            if(t.className=="car_list"){
                that.id=t.parentNode.getAttribute("index");
                // console.log(that.id);
                that.price=t.parentNode.getAttribute("price");
                console.log(that.price);
                that.setData();
            }
        }
        this.cont33.onmouseover=function(eve){
            var e=eve||window.event;
            var t=e.target||e.srcElement;
            // console.log(t.className);
            if(t.className=="big_left"){
                    that.bigger();   
            }
        }
    }


    setData(){
        this.goods=localStorage.getItem("goods1");
        // console.log(this.goods)
        if(this.goods){
            this.goods=JSON.parse(this.goods);
            var onoff=true;
            for(var i=0;i<this.goods.length;i++){
                if(this.goods[i].id==this.id){
                    this.goods[i].num++;
                    onoff=false;
                }
            }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1,
                    price:this.price,
                })
            }

        }else{
            this.goods=[{
                id:this.id,
                num:1,
                price:this.price,
            }]
        }


        localStorage.setItem("goods1",JSON.stringify(this.goods));
       
    }

    bigger(){
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
                //  console.log(x,y);
                
                 
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
    }


    getData(){
        this.goods=JSON.parse(localStorage.getItem("goods"));
        // console.log(this.goods);
        this.display();
    }

    init(){
        var that=this;
        ajaxPost(this.url,function(res){
            // console.log(res);
            that.res=JSON.parse(res);
            // console.log(that.res);
            that.getData();
        })
    }
    display(){
        console.log(this.goods);
        var str="";
        var str1="";
        for(var i=0;i<this.res.length;i++){
            if(this.goods[0].id == this.res[i].id){
                str=`
                <p index="${this.res[i].id}">${this.res[i].title}</p>
                <div class="new">
                    <div class="codes"><span>商品编码：</span><p>${this.res[i].codes}</p></div>
                    <div class="price_diao"><span>吊牌价：</span><p>${this.res[i].price_diao}</p></div>
                    <div class="price"><span>售价:</span><p>￥${this.res[i].price}</div>
                </div>
              
                <a href="forth.html">
                <div class="buy1" index="${this.res[i].id}" price="${this.res[i].price}">
                    <div class="car_list">加入购物车</div>
                    <div class="car_buy">立即购买</div>
                </div>
                </a>
                `;
                str1=`
                <div class="big_picture" index="${this.res[i].id}">
                <img src="${this.res[i].src}">  
                <span></span>
                <p></p> 
                </div>
    
                <div class="big_left_s">
                <img src="${this.res[i].src}">
                </div>
                `
            }
        }
        this.cont3.innerHTML=str;
        this.cont33.innerHTML=str1;
    }
}
new Goods();
















