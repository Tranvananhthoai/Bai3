let canNang= prompt("Nhập cân nặng(Kg)");
let chieuCao= prompt("Nhập chiều cao(M)");
let BMI= canNang/(chieuCao*chieuCao);
if (BMI < 18.5){
    console.log("Gầy");
}else if (BMI >= 25){
     console.log("Béo");
}else{ //18.5 <= BMI <25
    console.log("Bình thường");
}
 console.log("Chỉ số BMI của bạn là:"+ BMI.toFixed(2));
