class GoodsList{
    constructor(){
        this.cont=document.querySelector(".tab_list");
        this.url="http://localhost/1905/lining/goods/index.json";
        this.init();
        this.addEvent();
    }
    addEvent(){
        var that=this;
        this.cont.onclick=function(eve){
            var e=eve||window.event;
            var t=e.target||e.srcElement;
            console.log(t);
            if(t.className=="list_msg"){
                that.id=t.getAttribute("index");
                console.log(that.id);
                that.setData();
            }
            if(t.className=="list_img"){
                that.id=t.parentNode.getAttribute("index");
                console.log(that.id);
                that.setData();
            }
            if(t.className=="list_title"){
                that.id=t.parentNode.getAttribute("index");
                console.log(that.id);
                that.setData();
            }
            if(t.className=="list_price"){
                that.id=t.parentNode.getAttribute("index");
                console.log(that.id);
                that.setData();
            }

        }
    }



    setData(){
        this.goods=localStorage.getItem("goods");
        this.goods=[
            { 
                id:this.id,
                num:0,
            }
        ]
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }


 

    init(){
        var that=this;
        ajaxPost(this.url,function(res){
            // console.log(res);
            that.res=JSON.parse(res);
            that.display();
        })
    }
    display(){
        var str="";
        for(var i=0;i<this.res.length;i++){
            str+=`
            <a href="third.html">
            <div class="list_msg" index="${this.res[i].id}">
            <img src="${this.res[i].src}" class="list_img">
           
            <p class="list_title">${this.res[i].title}</p>
            <span class="list_price">￥${this.res[i].price}</span>
            </div>
            </a>
            `
        }
        this.cont.innerHTML=str;
    }
}
new GoodsList();