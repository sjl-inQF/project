class Goods{
    constructor(){
        this.cont1=document.querySelector(".hot_picture");
        this.url="http://localhost/1905/lining/goods/index.json";
        this.init();
        this.addEvent();
    }
    addEvent(){
        var that=this;
        // console.log(this);

        this.cont1.onclick=function(eve){
            // console.log(1111);
            var e=eve||window.event;
            var t=e.target||e.srcElement;
            // console.log(t.className);
            console.log(t.parentNode.className);
            if(t.className=="product"){
                // console.log(111);
                that.id=t.getAttribute("index");
                // console.log(that.id);
                that.setData();
            }
            if(t.className=="product_img"){
                // console.log(111);
                that.id=t.parentNode.getAttribute("index");
                // console.log(that.id);
                that.setData();
            }
            if(t.className=="product_price"){
                // console.log(111);
                that.id=t.parentNode.getAttribute("index");
                // console.log(that.id);
                that.setData();
            }
            if(t.className=="des"){
                // console.log(111);
                that.id=t.parentNode.getAttribute("index");
                // console.log(that.id);
                that.setData();
            }

        }
            
        }
    

    setData(){
        this.goods=localStorage.getItem("goods");
        console.log(this.goods1);
       this.goods=[
           { 
               id:this.id,
               num:0,
           }
        ];
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }


    init(){
        var that=this;
        ajaxPost(this.url,function(res){
            that.res=JSON.parse(res);
            that.display();
        })
    }


    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            str+=`
                <a href="third.html"  class="product" index="${this.res[i].id}">
                    <img src="${this.res[i].src}" class="product_img">
                    <div class="des">${this.res[i].title}</div>
                    <span class="product_price">￥${this.res[i].price}</span>
                </a>
            `
        }
        this.cont1.innerHTML=str;
    }
}
new Goods();
















