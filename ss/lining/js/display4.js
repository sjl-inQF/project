class Car {
    constructor() {
        this.tbody = document.querySelector("tbody");
        this.count = 0;
        this.url = "http://localhost/1905/lining/goods/index.json";
        this.init();
        this.addEvent();
        this.isfous = true;
    }
    addEvent() {
        var that = this;
        this.tbody.oninput = function (eve) {
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            
            if (t.className == "changeNum") {
                that.id = t.parentNode.parentNode.getAttribute("index");
                that.setData(function (i) {
                    that.goods[i].num = t.value;   
                    that.count=that.goods[i].num*that.goods[i].price;
                    // console.log(t.value);             
                })
                that.display();
            }
           
        }
        this.tbody.onclick = function(eve){
            var e = eve || window.event;
            var t = e.target || e.srcElement;
            if (t.className == "delete"){
                that.id = t.parentNode.parentNode.getAttribute("index");
                t.parentNode.parentNode.remove();
                that.setData(function(i){
                    that.goods.splice(i,1);
                })
                that.display();
            }
        }
        this.tbody.onclick=function(eve){
            var e=eve||window.event;
            var t=e.target||e.srcElement;
            // console.log(t);
            if(t.className=="check"){
                that.id = t.parentNode.parentNode.getAttribute("index");
                // console.log(that.id);

                that.setData(function(i){
                    that.count=that.goods[i].num*that.goods[i].price;
                })
                that.display();
            }
           
            console.log(that.count);
        }
        
       
    }
    setData(callback) {
        for (var i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == this.id) {
                callback(i);
            }
        }
        localStorage.setItem("goods1",JSON.stringify(this.goods));
    }

    init(){
        var that = this;
        ajaxPost(this.url, function(res){
            that.res = JSON.parse(res);
            console.log(that.res);
            that.getData();
            
        })
    }


    getData(){
        this.goods =localStorage.getItem("goods1")?JSON.parse(localStorage.getItem("goods1")):[];
        // console.log(this.res);
        // console.log(this.goods);
        this.display();
    }
    display(){
        var str = "";
        var str2 = "";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].id==this.goods[j].id){
                    this.count+=this.goods[j].num*this.goods[j].price;
                    str+=`
                    <tr index="${this.res[i].id}">
                        <td><input type="checkbox" class="check" checked="checked"></td>
                        <td><img src="${this.res[i].src}"></td>
                        <td>${this.res[i].title}</td>
                        <td>￥${this.res[i].price}</td>
                        <td><input type="number" value="${this.goods[j].num}" class="changeNum" min ="1"></td>
                        <td><input type="button" value="删除" class="delete"></td>
                    </tr>
                `
                }
            }
        }
        str2 = `<tr>
                    <td>合计:</td>
                    <td colspan="5">${this.count}</td>
                </tr>`
        str += str2;
        this.tbody.innerHTML = str;
    }
}
new Car();
