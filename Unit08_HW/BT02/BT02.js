var i = 0, n, tong = 0;

do {
	n = prompt("Nhập n: ")
	n = parseInt(n);
} while (isNaN(n) ||  n <= 0);
do {
	tong = tong + i;
} while (i++ < n)
alert("Tổng các số từ 1 đến " +n+" là: " +tong);