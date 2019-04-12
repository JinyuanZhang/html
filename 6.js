function fnLogin() {
    let oUna = document.getElementById("box_name");
    let oUast = document.getElementById("box_pass");
    if (oUna.value.length > 20 || oUna.value.length < 6) {
        window.alert("用户名请输入6-20位字符");
        return;
    }else if((oUna.value.charCodeAt(0)>=48) && (oUna.value.charCodeAt(0)<=57)) {
        window.alert("首字符必须为字母");
        return;
    }else if ((oUast.value.length > 20 )|| (oUast.value.length < 6)) {
        window.alert("密码请输入6-20位字符");
        return;
    }
    else if(oUast.value.length===0 ){
        window.alert("密码不能为空");
        return;
    }

        window.alert("登录成功");

}
// function fnLogin() {
//
//     var oUna = document.getElementById("box_name")
//
//     var oUast = document.getElementById("box_pass")
//
//     var oError = document.getElementById("error_box")
//
//     var isError = true;
//
//     if (oUna.value.length > 20 || oUna.value.length < 6) {
//
//         oError.innerHTML = "用户名请输入6-20位字符";
//
//         isError = false;
//
//         return;
//
//     }else if((oUna.value.charCodeAt(0)>=48) && (oUna.value.charCodeAt(0)<=57)){
//
//         oError.innerHTML = "首字符必须为字母";
//
//         return;
//
//     }else for(var i=0;i<oUna.value.charCodeAt(i);i++){
//
//         if((oUna.value.charCodeAt(i)<48)||(oUna.value.charCodeAt(i)>57) && (oUna.value.charCodeAt(i)<97)||(oUna.value.charCodeAt(i)>122)){
//
//             oError.innerHTML = "必须为字母跟数字组成";
//
//             return;
//
//         }
//
//     }
//
//     if (oUast.value.length > 20 || oUast.value.length < 6) {
//
//         oError.innerHTML = "密码请输入6-20位字符"
//
//         isError = false;
//
//         return;
//     }
//
//     window.alert("登录成功")
//
// }