// 删
function removeCookie(key,options){
    options=options?options:{};
    options.expires=-1;
    setCookie(key,null,options);
}
// removeCookie("a");


// 查
function getCookie(key){
    var str=document.cookie;
    for(var i=0;i<str.split("; ").length;i++){
        if(str.split("; ")[i].split("=")[0]==key){
            return str.split("; ")[i].split("=")[1];
        }
        // console.log(str.split("; ")[i]);
    }
    // console.log(str.split("; "));
}
// console.log(getCookie("a"));

// 增
function setCookie(key,value,options){
    options=options?options:{};
    var path=options.path?`path=options.path;`:"";
    if(options.expires){
        var d=new Date();
        d.setDate(d.getDate()+options.expires);
        var day=`expires=${d}`;
    }else{
        var day="";
    }
    document.cookie=`${key}=${value};${path};${day}`;
}

// setCookie("a","30",{
//     path:'/',
//     expires:3,
// })
