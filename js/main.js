//BT1

function soNguyenNhoNhat(){
    sum = 0;
    for(var i =0 ; sum<10000;i++){
        sum += i;    
    }
    i--;
    document.getElementById("txtSoNguyenDuongNhoNhat").innerHTML = "Số nguyên dương nhỏ nhất là: " + i;
}
document.getElementById("btnKetQuaBT1").onclick=soNguyenNhoNhat;


//BT2
function BT2(){
    var x = Number(document.getElementById("nhapX").value);
    var n = Number(document.getElementById("nhapN").value);

    document.getElementById("txtTinhTong").innerHTML= "Tổng: " + tinhTong(x,n);
}
document.getElementById("btnBT2").onclick = BT2;

//Hàm tính tổng
function tinhTong(x,n){
    var sum = 0;
    for(var i=1; i<=n; i++){
        sum+= (Math.pow(x, i));
    }
    return sum;
}


//BT3
function giaiThua(){
    var n = Number(document.getElementById("intGiaiThua").value);
    var giaiThua = 1
    for(var i = 1; i<=n; i++){
        giaiThua *= i;
    }
    document.getElementById("txtGiaiThua").innerHTML = "Giai Thừa: " + giaiThua;
}
document.getElementById("btnGiaThua").onclick=giaiThua;

//BT4

function creatDiv(){
    var print = document.getElementById("txtDiv");
    var nodeText ="";
    for( var i = 1; i<=10;i++){
        var div = document.createElement("div");
        if(i%2==0){
            nodeText = document.createTextNode("Div Chẵn");
            div.style.background = "red";
        }else{
            nodeText = document.createTextNode("Div lẻ");
            div.style.background = "blue";
        }
        div.appendChild(nodeText);
        print.appendChild(div);
    }
}
document.getElementById("btnDiv").onclick= creatDiv;