var n, s = 0;

do {
	n = prompt("Nhập n: ")
	n = parseInt(n);
} while (isNaN(n) ||  n <= 0)

for (var i = 1; i <= n; i++) {
	s += 1 / i ;
}
alert("Tổng S = 1 + 1/2 + 1/3 ….+ 1/n = " +s);