	for (var i = 0; i < 7; i++) {
	for (var j = 0; j <= i; j++) {
		document.write(" * ");
	}
	document.write("<br>");
}

document.write("<br><br>");

for (var i = 0; i < 7; i++) {
	for (var j = 0; j < 7; j++) {
		document.write(" * ");
	}
	document.write("<br>");
}

document.write("<br><br>");

for (var i = 0; i < 7; i++) {
	for (var j = 0; j < 7; j++) {
		if (i==0 || i == 6 || j == 0 || j == 6) {
			document.write(" * ");
		}
		else{
			document.write(" &nbsp;&nbsp;");
		}
	}
	document.write("<br>");
}

document.write("<br><br>");

for (var i = 0; i < 7 ; i++) {
	for (var j = 7; j > i; j--) {
		document.write(" * ");
	}
	document.write("<br>");
}
