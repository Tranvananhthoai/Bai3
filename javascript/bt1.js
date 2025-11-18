let gia = prompt("nhập giá sản phẩm:");
let soLuong = prompt("nhập số lượng:");
let tong = gia*soLuong;
 tong -= tong*0.1
 tong += tong*0.05
console.log("Tổng hóa đơn sau khi giảm giá và thêm VAT:" + tong.toFixed(2)) ;