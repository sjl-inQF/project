class Good{
    constructor(){
        this.cont=document.querySelector(".cont");
        this.url="http://localhost/1905/lining/goods/index.json";
        this.init();
        this.addEvent();
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
        for(var i=0;i<this.length;i++){

            str=`  <div class="big_picture">
                <img src="${this.res[i].src}">  
                <span></span>
                <p></p> 
                </div>
        <div class="small">
            <img src="${this.res[i].src}">
            <img src="${this.res[i].src}">
            <img src="${this.res[i].src}">
            <img src="${this.res[i].src}">
        </div>

                <p>${this.res[i].title}</p>
                <div class="new">
                    <div class="codes"><span>商品编码：</span><p>${this.res[i].codes}</p></div>
                    <div class="price_diao"><span>吊牌价：</span><p>${this.res[i].price_diao}</p></div>
                    <div class="price"><span>售价:</span><p>${this.res[i].price}/p></div>
                </div>
                <div class="buy1">
                    <div class="car_list">加入购物车</div>
                    <div class="car_buy">立即购买</div>
                </div>
            `

        }
    }
}