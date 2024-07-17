/*document.write("France");
var nom= "Fotio Tchoffo";
var prenom= "Junior";
var adresse="Montreal";
alert("Bonjour "+prenom+
 "\n Votre nom de famille est :"+nom+
    "\n vous habitez a : "+ adresse
);*/
/*
var a=150;
var b=60;
var som,mult,div,soust,mod;
som=a+b;
soust=a-b;
div=a/b;
mod=a%b;
mult=a*b;
document.write(a+"+"+b+"="+som+"<br>"+
a+"-"+b+"="+soust+"<br>"+
a+"/"+b+"="+div+"<br>"+
a+"%"+b+"="+mod+"<br>"+
a+"*"+b+"="+mult+"<br>"
);*/
/*
var c=10;
var d=10;
c++;
d--;
document.write("la nouvelle valeur de c est de :"+ c+"<br>"+"la nouvelle valeur de d est de : "+ d);

var mois=parseInt(prompt("Entrez le chiffre correspondant aux jour de la semaine :"));
switch (mois){
    case 1 : alert("Nous sommes Janvier");
    break;
    case 2 : alert("Nous sommes Fevrier");
    break;
    case 3 : alert ("Nous sommes Mars");
    break;
    case 4 : alert ("Nous sommes Avril");
    break;
    case 5 : alert ("Nous sommes Mai");
    break;
    case 6 : alert("Nous sommes Juin");
    break;
    case 7: alert ("Nous sommes Juillet");
    break;
    case 8: alert("Nous sommes en Aout ");
    break;
    case 9: alert("Nous sommes en septembre");
    break;
    case 10: alert ("Nous sommes octobre")
    break;
    case 11 : alert ("nous sommes Novembre");
    break;
    case 12 : alert ("Nous sommes en decembre");
    break;
    default: alert("Entrez une valeur comprise entre 1 et 12");
}*/
/*
var d= new Date();
var dms=d.getTime();
var dy=d.getFullYear();
var dmo=d.getMonth() + 1;
var ddate =d.getDate();

var dh= d.getHours();
var dmi =d.getMinutes();
var ds=d.getSeconds();
var dMs=d.getMilliseconds();
document.write("Nous sommes le " +ddate+"/"+dmo+"/"+dy+
    "<br>"+"il est actuellemnt "+dh+" :"+ dmi+ " :"+dMs
);*/
/*
var d=new Date();
var dy=d.getFullYear();
var dmo=d.getMonth();
var dday=d.getDay();
var ddate=d.getDate();
var dh= d.getHours();
var dmi=d.getMinutes();
var ds=d.getSeconds();
var mois=["janvier","fevier","mars","avril","mai","juin","juillet","aout","septembre","octobre","Novembre","decembre"];
var jours=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
alert("Le "+jours[dday]+" "+ddate+" "+mois[dmo]+ " "+dy+
    "\nil est : "+dh+  "heures"+dmi+"minutes et " +ds+" seconde"
);*/
/*
var x=Math.random()*1000;
var y=Math.round(x);

alert("e nombre decimal random est :"+x
    +"\nle nombre arrondi est : " +y
);*/
/*
var x=Math.random()*1000;
var inf=Math.floor(x);
var sup=Math.ceil(x);
alert("l'arrondi par defaut: "+" " +inf+
    "\n l'arrondi par ecces c'est : "+" "+ sup+
    "\nvoici la valeur exacte de x"+ " "+ x
);*/
/*
var x=-7;
var y=3;
var absx=Math.abs(x);
var absy=Math.abs(y);
alert("la valeur absolue de "+ " "+ x+ " "+"est de:"+" "+absx+
    "\nla valeur absolue de "+ " "+ y+ " "+"est de:"+" "+absy
);*/
/*
var x=7;
var y=2;
var z=0;
var puis=Math.pow(x,y);
var racine=Math.sqrt(y);
var cos=Math.cos(z);
var sin=Math.sin(z);
var Pi=Math.PI;
alert(x+" "+"puissance "+" "+ y+" ="+" "+puis+
    "\nla racine carree de "+" "+y+" ="+" "+racine+
    "\nle cosnus de "+" "+z+" "+"="+" "+cos+
    "\nle sinus de "+" "+z+" "+"="+" "+sin+
    "\nla valeur de pi est de :"+" "+ Pi
);* /*
var para=document.createElement("p");
var texte=document.createTextNode("La grace de Dieu surabonde dans ma vie . C'est lui mon bouclier");
para.appendChild(texte);
document.body.appendChild(para);
 var para1=document.createElement("p");
 var inser=document.createTextNode("Jesus Christ est ma vie !!!");
 para1.id="grace";
 var cont=para1.appendChild(inser);
 var cible=querySelectorAll("");
 alert(cible);*/
 /*
var p=document.createElement("P");
var texte=document.createTextNode("La gloire de Dieu sur abonde dans ma vie");
var para=p.appendChild(texte);
document.body.appendChild(para);*/
/*
var paral=document.querySelectorAll(".p2");
var x=paral[1];
var p=document.createElement("p");
var inser=document.createTextNode("La grace de Dieu Sur abonde dans ma vie");
var para=p.appendChild(inser);
document.body.insertBefore(para,x);*/
/*
var titre=document.querySelectorAll("#titre");
var x=titre[0];
var ntitre=document.createElement("h2");
var texte=document.createTextNode("La crainte de Dieu est le commncement de la sagesse!!");
ntitre.appendChild(texte);
document.body.replaceChild(ntitre,x);
*/
/*var p =document.querySelector(".p2");
p.onclick=function(){
    this.innerHTML= "<strong>Bravo!!<strong>";
    this.style.color="green";
};*/

/* 
p.addEventListener("mouseover",survole);
function survole(){
this.innerHTML="La grace de Dieu surabonde dans ma vie";
this.style.color="orange";
}
p.addEventListener("mousedown",fonction1);
function fonction1(){
    this.style.fontSize="bold";
    this.style.backgroundColor="pink";
    this.style.fontSize="40px";
}

p.addEventListener("mouseout",reset1);
p.addEventListener("mouseup",reset2);
function reset1(){
    this.innerHTML="passez sur moi!!";
    this.style.color="";
}
function reset2(){
    this.style.fontSize="";
    this.style.backgroundColor="";
    this.style.fontSize="";
}*//*
var p=document.querySelector("p");
p.addEventListener("click",effetclick);
function effetclick(event){
    this.innerHTML="Element declencheur"+effetclick.target+"<br>"+ "l'element portant l'evenement "+event.currentTarget;
}*/
/*var div1=document.getElementById("div1");
var p1=document.getElementById("p1");
 var body=document.body;
 var strong=document.querySelector("#div1 #p1 strong");
  div1.addEventListener("click",testd1);
  p1.addEventListener("click",testp1,true);
  body.addEventListener("click",testbody);
  strong.addEventListener("click",teststrong,true);
function testp1(){
    alert("p1 en phase de capture");
}
function teststrong(){
    alert("strong en phase de capture");
}
function testd1 (){
    alert("div 1 en phase de bouillonnement");
}
function testbody(){
    alert("body en phase de bouillonnement");
}*/
/*
var j=document.getElementById("p1");
j.innerHTML="<>hoooo!!!<>";*/
var texte="Bienvenue a tous Messi tous Maroc";
document.write(texte.toLowerCase()+"<br>");
document.write(texte.toUpperCase()+"<br>");
document.write(texte.trim()+"<br>");
document.write(texte.indexOf("tous")+"<br>");
document.write(texte.lastIndexOf("tous"));


