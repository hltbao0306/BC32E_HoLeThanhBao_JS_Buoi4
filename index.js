//--------------------Bài 1--------------------\\
document.getElementById('btnSapXep').onclick = function (event){
    event.preventDefault();
//Mô hình 3 khối
//Input: soThu1:number , soThu2:number , soThu3:number
var soThu1 = Number(document.getElementById('soThu1').value);
var soThu2 = Number(document.getElementById('soThu2').value);
var soThu3 = Number(document.getElementById('soThu3').value);
//Output: ketQua1: string
var ketQua = "";
//Xử lý:
    if(soThu1 > soThu2 && soThu2 > soThu3) {//=> a>b & b>c
        ketQua = soThu3 + ' < ' + soThu2 + ' < ' + soThu1; //=> c < b < a
    
    } else if (soThu1 > soThu3 && soThu2 < soThu3) {//=> a>c & b<c
        ketQua = soThu2 + ' < ' + soThu3 + ' < ' + soThu1; //=> b < c < a

    } else if (soThu1 > soThu2 && soThu1 < soThu3) {//=> a>b & a<c
        ketQua = soThu2 + ' < ' + soThu1 + ' < ' + soThu3; //=> b < a < c
    
    } else if (soThu1 < soThu2 && soThu1 > soThu3) {//=> a<b & a>c
        ketQua = soThu3 + ' < ' + soThu1 + ' < ' + soThu2; //=> c < a < b
    
    } else if (soThu2 > soThu3 && soThu1 < soThu3) {//=> b>c & a<c
        ketQua = soThu1 + ' < ' + soThu3 + ' < ' + soThu2; //=> a < c < b
    
    } else {
        ketQua = soThu1 + ' < ' + soThu2 + ' < ' + soThu3;
    }
//In kết quả ra màn hình
    document.getElementById('ketQua1').innerHTML = '👉Sắp xếp thứ tự: ' + ketQua;
};

//--------------------Bài 2--------------------\\
document.getElementById('btnGuiLoi').onclick = function (event){
    event.preventDefault();
//Mô hình 3 khối
//Input: thanhVien: string
var thanhVien = document.getElementById('chonThanhVien').value;
//Output: ketQua: string
var ketQua2 = "";
//Xử lý:
//B1: Tạo biến và lấy giá trị về
//B2: Dùng switch case
        //+Nếu user nhập "B"=>'Xin chào Bố! Chúc bố 1 ngày tốt lành.'
        //+Nếu user nhập "M"=>'Xin chào Mẹ! Chúc mẹ 1 ngày tốt lành.'
        //+Nếu user nhập "A"=>'Xin chào Anh Trai! Chúc anh 1 ngày tốt lành.'
        //+Nếu user nhập "E"=>'Xin chào Em Gái! Chúc em 1 ngày tốt lành.'
        //+Nếu user không nhập ký tự trên=>'Xin chào Người lạ ơi! Chúc người lạ 1 ngày tốt lành.'
switch(thanhVien){
    case "B": {
        ketQua2 = 'Xin chào Bố! Chúc bố 1 ngày tốt lành.';
    };break;
    case "M": {
        ketQua2 = 'Xin chào Mẹ! Chúc mẹ 1 ngày tốt lành.';
    };break;
    case "A": {
        ketQua2 = 'Xin chào Anh Trai! Chúc anh 1 ngày tốt lành.';
    };break;
    case "E": {
        ketQua2 = 'Xin chào Em Gái! Chúc em 1 ngày tốt lành.';
    };break;
    case "": {
        ketQua2 = 'Xin chào Người lạ ơi! Chúc người lạ 1 ngày tốt lành.';
    }
}
//In kết quả màn hình
    document.getElementById('ketQua2').innerHTML = '👉' + ketQua2;
};

//--------------------Bài 3--------------------\\
document.getElementById('btnDemSo').onclick = function (event){
    event.preventDefault();
//Mô hình 3 khối
//Input: soThu1:number , soThu2:number , soThu3:number
var soThu1 = Number(document.getElementById('soThu4').value);
var soThu2 = Number(document.getElementById('soThu5').value);
var soThu3 = Number(document.getElementById('soThu6').value);
//Output: numChan: number, numLe: number
var numChan = 0;
var numLe = 0;
//Xử lý:
//B1: Tạo biến và lấy giá trị về
//B2:   Khai báo biến numChan, numLe
        //Dùng if từng biến soThu1 % 2 == 0 => numChan sẽ tăng lên 1 giá trị.
        //Dùng if từng biến soThu2 % 2 == 0 => numChan sẽ tăng lên 1 giá trị.
        //Dùng if từng biến soThu3 % 2 == 0 => numChan sẽ tăng lên 1 giá trị.
        //numLe = 3 - numChan;
    if(soThu1 % 2 == 0){
        numChan++;
    }
    if(soThu2 % 2 == 0){
        numChan++;
    }
    if(soThu3 % 2 == 0){
        numChan++;
    }
    numLe = 3 - numChan;
//In kết quả ra màn hình
document.getElementById('ketQua3').innerHTML = '👉' + "Có " + numChan + " số chẵn và " + numLe + " số lẻ.";
}

//--------------------Bài 4--------------------\\
document.getElementById('btnDuDoan').onclick = function (event){
    event.preventDefault();
//Mô hình 3 khối
//Input: canhDai1:number , canhDai2:number , canhDai3:number
var canhDai1 = Number(document.getElementById('canhDai1').value);
var canhDai2 = Number(document.getElementById('canhDai2').value);
var canhDai3 = Number(document.getElementById('canhDai3').value);
//Output: ketQua: String
var ketQua = "";
//Xử lý:
//B1: Tạo biến và lấy giá trị về
//B2: Dùng if else
        //Nếu canhDai1==canhDai2==canhDai3 => "Tam giác đều"
        //Nếu 2 trong 3 cạnh của tam giác bằng nhau => "Tam giác cân"
        //Nếu:
            //canhDai1*canhDai1 == canhDai2*canhDai2 + canhDai3*canhDai3
            //canhDai2*canhDai2 == canhDai1*canhDai1 + canhDai3*canhDai3
            //canhDai3*canhDai3 == canhDai1*canhDai1 + canhDai2*canhDai2
            //=> "Tam giác vuông"
        //else => "Tam giác thường"
    if(canhDai1 == canhDai2 && canhDai2 == canhDai3){
        ketQua = "Tam giác đều!";
    }else if((canhDai1 == canhDai2) || (canhDai1==canhDai3) || (canhDai2==canhDai3)){
        ketQua = "Tam giác cân!";
    }else if((Math.pow(canhDai1,2)==Math.pow(canhDai2,2) + Math.pow(canhDai3,2)) || (Math.pow(canhDai2,2)==Math.pow(canhDai1,2) + Math.pow(canhDai3,2)) || (Math.pow(canhDai3,2)==Math.pow(canhDai1,2) + Math.pow(canhDai2,2))){
        ketQua = "Tam giác vuông!";
    }else{
        ketQua = "Tam giác thường!";
    }
//In kết quả ra màn hình
document.getElementById('ketQua4').innerHTML = '👉' + ketQua;
}
