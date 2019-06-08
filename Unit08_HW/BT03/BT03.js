var n, s=0, gt = 1;

do {
	n = prompt("Nhập n: ")
	n = parseInt(n);
} while (isNaN(n) ||  n <= 0)
for (var i = 1; i <= n; i++) {
	gt=gt*i;
	s += i / gt ;
}
alert("Tổng S = 1 /1! + 2 /2! + ….+ n / n! = " +s);