
function nhap(bien){
	var a;
	do {
		a = prompt("Nhập " +bien+":")
		a = parseInt(a);
	} while (isNaN(a) ||  a <= 0);
	return a;
}

var m, n, k;

n = nhap("n");
m = nhap("m");
k = nhap("k");

var tong = 0;
if (m > n) {
	for (var i = n; i <= m; i++) {
		if (i % k == 0) {
			tong = tong + i;
		}
	}
	alert("Tổng các số chia hết cho " +k+ " trong khoảng từ " +n+ " đến " +m+ " là: " +tong);
}
else{
	alert("Bạn cần nhập M >= N");
}
