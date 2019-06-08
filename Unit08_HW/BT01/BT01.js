var x = 0, y = 0;
for (var i = 1; i <= 100; i++) {
	if (i % 3 ==0) {
		x++;
	}
	if(i % 7 ==0) {
		y++;
	}
}
document.write("Có "+x+" các số nguyên chia hết cho 3 trong đoạn 1 đến 100.<br>")
document.write("Có "+y+" các số nguyên chia hết cho 7 trong đoạn 1 đến 100.<br>")
