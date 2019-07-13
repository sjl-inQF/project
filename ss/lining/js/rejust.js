var ot=document.querySelector(".txto");
var op1=document.querySelector(".pas1");
var op2=document.querySelector(".pas2");
var pho=document.querySelector(".phone");
var tes=document.querySelector(".test");
var zhu=document.querySelector(".zhu");

var user=pass=pass1=tel=test=0;

ot.onfocus=function(){

    ot.value="";
    ot.style.color="black";
    this.nextElementSibling.style.display="block";
    this.nextElementSibling.innerHTML = "请输入字母、数字、“-”“_”的组合，开头不为数字，6-20个字符";
}
ot.onblur=function(){
    var reg = /^[a-z_]\w{5,19}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "成功";
        user = 1;
    }else{
        this.nextElementSibling.style.display="block";
        this.nextElementSibling.innerHTML = "请输入字母、数字、“-”“_”的组合，开头不为数字，6-20个字符";
        user = 0;
    }
}


op1.onfocus=function(){
    op1.value="";
    op1.style.color="black";
    this.nextElementSibling.style.display="block";
    this.nextElementSibling.innerHTML = "6-20个字符";
}
op1.onblur=function(){
    var reg = /^\w{6,20}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "成功";
        pass = 1;
    }else{
        this.nextElementSibling.style.display="block";
        this.nextElementSibling.innerHTML = "6-20个字符";
        pass = 0;
    }
}






op2.onfocus=function(){
    op2.value="";
    op2.style.color="black"; 
    this.nextElementSibling.style.display="block";
    this.nextElementSibling.innerHTML = "6-20个字符";
}
op2.onblur=function(){
    if(this.value==op1.value){
        this.nextElementSibling.innerHTML = "成功";
        pass1 = 1;
    }else{
        this.nextElementSibling.style.display="block";
        this.nextElementSibling.innerHTML = "密码不一致";
        pass1 = 0;
    }
}






pho.onfocus=function(){
    pho.value="";
    pho.style.color="black";
    this.nextElementSibling.style.display="block";
    this.nextElementSibling.innerHTML = "手机号";
  
}
pho.onblur=function(){
    var reg = /^1[3-9]\d{9}$/;
    if(reg.test(this.value)){
        this.nextElementSibling.innerHTML = "成功";
        tel = 1;
    }else{
        this.nextElementSibling.style.display="block";
        this.nextElementSibling.innerHTML = "手机号不正确";
        tel = 0;
    }
}





tes.onfocus=function(){
    tes.value="";
    tes.style.color="black";
    this.nextElementSibling.style.display="block";
    this.nextElementSibling.innerHTML = "4位验证码";
}
tes.onblur=function(){
    var reg=/^[a-zA-Z0-9]{4}$/;
    if(reg.test(this.value)){
          this.nextElementSibling.innerHTML = "成功";
         test1 = 1;
    }else{
        this.nextElementSibling.style.display="block";
        this.nextElementSibling.innerHTML = "验证码不对";
          test1 = 0; 
    }
}


zhu.onclick=function(){
    if(pass&&pass1&&tel&&user&&test1){
        setCookie("user",ot.value,3);
        setCookie("pass",op1.value,3);
        setCookie("tel",pho.value,3);
        login();
    }
    
}
function login(){
    setTimeout(function () {
        location.assign("login.html");
    }, 3000);
}
// console.log(ot.value);
// var user_1=ot.value;
// var pass_1=op1.value;
// var tel_1=pho.value;
// zhu.onclick=function(){
//     if(user&&tel&&test1&&pass1&&pass){
//         // alert("成功");
//         var obj={user_1:ot.value,pass_1:op1.value,tel_1:pho.value};
//         localStorage.setCookie("rejust",JSON.stringify(obj));

// }else{
//         alert("不成功");
//     }
// }








