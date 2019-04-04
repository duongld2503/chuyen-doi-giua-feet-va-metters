var a1 = feetToMetters(1);
var a2 = feetToMetters(2);

var a = [];
a[0] = 0;
for (i=1;i<10;i++){
    a[i] = feetToMetters([i]);
}
document.write(a + "<br>");

var b=[];
b[0] = 0;
for (i=1;i<10;i++){
    b[i] = mettersToFeed(i);
}
document.write(b);



function feetToMetters(f) {
    let m = f*0.305;
    return m;
}

function mettersToFeed(m) {
    let f = 3.279*m;
    return f;
}