let nam= prompt("Nhập năm:");
if (nam > 0){
if (nam % 4===0 && (nam % 100 !== 0 || nam % 400 === 0)){
    console.log(nam +" Năm nhuận");
}else {
    console.log(nam +" Năm không nhuận");
}
}else{
    console.log("Năm không hợp lệ, vui lòng nhập số dương");
}


    
