       // Asynchronous

// Q1
function a(){
    console.log("I am Neetu kumari")
}
setTimeout(a,5000);
console.log("end")

// Q2
function a(k){
    var sum=0;
    for (var i of k ){
        sum=sum+i
    }
    console.log("sum of a list"+" "+sum)
}
setTimeout(a,5000,[1,2,3,4,5]);
console.log("end")

// Q3
function add(a,b){
    var c=a+b
    console.log("I am neetu"+""+c)
}
setTimeout(add,4000,10,20);
console.log("end") 

// Q4
function add(a,b){
    var c=a+b
    console.log(c)
}
function sub(a,b){
    c=a-b
    console.log(c)
}
setTimeout(sub,5000,15,5)
console.log("end")


//        syncronous

// Q5
function a(){
    console.log("I am from punjab")
}
function b(callback){
    callback();
}
b(a);
console.log("end")

// Q6
function add(n,m){
    k=n+m
    console.log(k)
}
function sub(callback,n,m){
    callback(n,m)
}
sub(add,15,20)
console.log("finish")

// Q7
function l(a){
    var sum=0
    for (var i of a){
        sum=sum+i
    }
    console.log("sum of list"+" "+sum)
}
function m(callback){
    callback([1,2,3,4,5])
}
m(l)
console("sum of list")

        // callback
// Q8
function add(a){
    console.log("neetu"+" "+a)
}
function sub(callback){
    var a="kumari"
    callback(a)
}
sub(add)

// Q9
function show1(b){
    console.log("I am show1 function"+" "+b)
}
function show2(callback){
    var b=121;
    callback(b)
}
show2(show1);


// Q10
function add(a,b){
    var c=a+b
    console.log(c)
}
function sub(callback,a,b){
    callback(a,b)
}
sub(add ,10,15)





