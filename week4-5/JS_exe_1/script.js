//Q.8
function longest(){
    let arr=document.getElementById("longest").value.split(",");
    let res="";
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>res.length){
            res=arr[i];
        }
    }

    document.getElementById("result").innerHTML=res+" : "+res.length;
}

//Q.9
function findlong(){
    let arr=document.getElementById("wd").value.split(",");
    let k=document.getElementById("inti").value;
    let res=[];

    for(let i=0;i<arr.length;i++){
        if(arr[i].length>parseInt(k)){
            res.push(arr[i]);
        }
    }
    document.getElementById("result").innerHTML=res;
}

//Q.10
function findfreq(){
    let str=document.getElementById("freq").value;
    let obj={}

    for(let i=0;i<str.length;i++){
        if(!(str[i] in obj)){
            obj[str[i]]=1;
        }
        else{
            obj[str[i]]+=1;
        }
    }
    document.getElementById("result").innerHTML=JSON.stringify(obj);
}//Harsh VM

//Q.11
function solve(){
    let str=document.getElementById("equation").value;
    document.getElementById("result").innerHTML=eval(str);
}

//Q.12 only script
function getnames(){
    let names = [];
    while (true) {
        let name = prompt("Enter a name (or click Cancel to finish):");
        if (name === null) {
            break;
        }
        names.push(name);
    }
    names.sort();
    let orderedList = "<ol>";
    for (let i = 0; i < names.length; i++) 
    {orderedList += `<li>${names[i]}</li>`;}
    orderedList += "</ol>";
    document.getElementById("result").innerHTML = orderedList;
}//Harsh VM


//Q.13
function rand(){
    let k=parseInt(document.getElementById("rand").value);
    let arr=[];
    let avg=0;
    for(let i=0;i<k;i++){
        let x=Math.floor(Math.random()*100);
        arr.push(x);
        avg+=x;
    }
    avg/=k;

    document.getElementById("result").innerHTML=arr+"</br>"+"Avg:"+avg;
}

//Q.14
function formm() {
    let p1 = document.getElementById("pass1").value;
    let p2 = document.getElementById("pass2").value;

    if (p1 === p2) {
        alert("You can proceed!");
    } else {
        alert("Passwords are not the same!");
    }
}

//Q.15 and Q.16
function welcome(){
    alert("Welcome everyone!!!");
}//Harsh VM

//Q.17
function hometown(){
    let name=document.getElementById("nn").value;
    let age=parseInt(document.getElementById("agg").value);
    let home=document.getElementById("hometown").value;
    let res="Welcome: "+name+"<br>"+"Age: "+age+"<br>"+"Hometown: "+"<a href=\"https://maps.google.com/maps?q=" + home + "\">Link</a>";

    document.getElementById("result").innerHTML=res;
}
