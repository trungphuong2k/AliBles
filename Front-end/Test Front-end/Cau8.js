function songay13thu6(nam) {
    var counter = 0;
    for (i = 1; i <= 12; i++) {
        var d = new Date(i + "/13/" + nam);                          
        if (d.getDay() == 5) {
            counter++;
        }
    }
    return counter;

}
console.log(songay13thu6(2020));