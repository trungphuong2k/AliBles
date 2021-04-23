var daochuoi = function(cau){

	var chuoimoi= cau.trim(). split(" ").reverse(); 
    console.log(chuoimoi);
	var string = "";
	for(x in chuoimoi)
         string += (x > 0 ? " " : "") + chuoimoi[x]; 
	return string;
	
}


console.log( daochuoi("hello   world!   "));