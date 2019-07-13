var oroot=document.querySelector(".root");
var ophone=document.querySelector(".phone");
var otxt1=document.querySelector(".txt1");
var otxt2=document.querySelector(".txt2");
var otxt3=document.querySelector(".txt3");
var otxt4=document.querySelector(".txt4");
var otxt5=document.querySelector(".txt5");
var otxt6=document.querySelector(".txt6");
var ofind=document.querySelector(".find");
var onews=document.querySelector(".news");
var od=document.querySelector(".deng");
var obox1=document.querySelector(".box1");
var obox2=document.querySelector(".box2");



var user=pass=test=call=test1=test2=0;
var count=0;
otxt1.onfocus=function(){
 
    otxt1.value="";
    otxt1.style.color="black";
}
otxt1.onblur=function(){
    if (otxt1.value === ""){
        this.nextElementSibling.innerHTML  = "不能为空";
        this.nextElementSibling.style.display = "block";
        user = 0;
    }else if (otxt1.value === getCookie("user")){
        user = 1;
        this.nextElementSibling.innerHTML = "成功";
    }
}




otxt2.onblur=function(){
    if (otxt2.value === ""){
        this.nextElementSibling.innerHTML  = "不能为空";
        this.nextElementSibling.style.display = "block";
        pass = 0;
    }else if (otxt2.value === getCookie("pass")){
        pass = 1;
        this.nextElementSibling.innerHTML = "成功";
    }
}






// otxt3.onfocus=function(){
//     otxt3.value="";
//     otxt3.style.color="black";
// }
// otxt3.onblur=function(){
//     var reg=/^[a-zA-Z0-9]{4}$/;
//     if(reg.test(this.value)){
//           this.nextElementSibling.innerHTML = "成功";
//           test = 1;
//     }else{
//         this.nextElementSibling.style.display="block";
//         this.nextElementSibling.innerHTML = "验证码不对";
//           test = 0; 
//     }
// }




// otxt4.onfocus=function(){
//     otxt4.value="";
//     otxt4.style.color="black";
// }
// otxt4.onblur=function(){
//     var reg = /^1[3-9]\d{9}$/;
//     if(reg.test(this.value)){
//           this.nextElementSibling.innerHTML = "成功";
//          call = 1;
//     }else{
//         this.nextElementSibling.style.display="block";
//         this.nextElementSibling.innerHTML = "手机号不对";
//           call = 0; 
//     }
// }


// otxt5.onfocus=function(){
//     otxt5.value="";
//     otxt5.style.color="black";
// }
// otxt5.onblur=function(){
//     var reg=/^[a-zA-Z0-9]{4}$/;
//     if(reg.test(this.value)){
//           this.nextElementSibling.innerHTML = "成功";
//          test1 = 1;
//     }else{
//         this.nextElementSibling.style.display="block";
//         this.nextElementSibling.innerHTML = "验证码不对";
//           test1 = 0; 
//     }
// }



// otxt6.onfocus=function(){
//     otxt6.value="";
//     otxt6.style.color="black";
// }
// otxt6.onblur=function(){
//     var reg=/^[a-zA-Z0-9]{4}$/;
//     if(reg.test(this.value)){
//           this.nextElementSibling.innerHTML = "成功";
//          test2 = 1;
//     }else{
//         this.nextElementSibling.style.display="block";
//         this.nextElementSibling.innerHTML = "动态码不对";
//           test2 = 0; 
//     }
// }

oroot.onclick=function(){
    obox2.style.display="none";
    obox1.style.display="block";
    count=0;
  
}
ophone.onclick=function(){
    obox2.style.display="block";
    obox1.style.display="none";
    count=1;
}




// if(count==0){
//     od.onclick=function(){
//         console.log(2222);
//         if(user&&tel&&test){
//             this.nextElementSibling.innerHTML = "成功"; 
//             login(); 
//         }else{
//             if(user==0){
//                alert("用户名不对")
//             }
//             if(call==0){
//               alert("电话号不对")
//             }
//             if(test==0){
//                 alert("验证码不对")
//             }  
//         }
//     }   
// }else{
//     od.onclick=function(){
//         console.log(2222);
//         if(call&&test1&&test2){
//             this.nextElementSibling.innerHTML = "成功"; 
//         }else{
//             if(call==0){
//                alert("用户名不对")
//             }
//             if(test1==0){
//               alert("验证码不对")
//             }
//             if(test2==0){
//                 alert("验证码不对")
//             }
            
//         }
//     }
// }

od.onclick=function(){
    if(user===1&&pass===1){
        login();
    }else{
        alert("重新登录");
    }
}

function login(){
    setTimeout(function () {
        location.assign("../html/first1.html");
    }, 3000);
    let x=getCookie("pass");
    localStorage.setItem("yes",x);
}









// var login=JSON.parse(getCookie("login"));
// otxt1.value=login.user;
// otxt2.value=login.pass;
// otxt3.value=login.test;
// var obj={
//     user:otxt1.value,
//     pass:otxt2.value,
//     test:otxt3.value,

// }
// setCookie("login",JSON.stringify(obj));



// var login1=JSON.parse(getCookie("login1"));
// otxt4.value=login.tel;
// otxt5.value=login.test1;
// otxt6.value=login.test2;
// var obj1={
//     tel:otxt4.value,
// }
// setCookie("login1",JSON.parse("obj1"))





// console.log(getCookie("login"));
//下册刷新或者进入页面，可以直接读取cookie，填充账号
// var login=JSON.parse(getCookie("login"));

// otxt1.value=login.user;
// otxt2.value=login.pass;
// otxt3.value=login.test;
// otxt4.value=login.tel;
// otxt5.value=login.test1;
// otxt6.value=login.test2;

// od.onclick=function(){
//     if(login.user==otxt1.value&&login.pass==otxt2.value&&login.tel==otxt4.value){

//     }



//     console.log(otxt1.value);
//         var obj={user:otxt1.value,pass:otxt2.value,tel:otxt4.value};
//         //5存到cookie之前，对象转成字符
//         setCookie("login",JSON.stringify(obj))
    
// }




