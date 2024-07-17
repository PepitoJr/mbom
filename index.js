/*alert("Ohio");
alert("Indiana");
alert("Nouveau mexique");*/
/*var pays="Canada";
var contitnent="Amerique";
//login et password
alert(pays);
alert(contitnent);
var a=100;
var b=50;
var p =a % b;
document.write("Le  modulo  de "+ a +" par raport  "+ b +" donne : "+p);*/
/*function division(a,b){
var v=alert(a/b);
return v;
}
division(8,2);*/
/*var primitive="La grace de Dieu surabonde dans ma vie"
var moi={
    nom:"fotio",
    prenom:"junior",
    age:21,
    QI:7000000,
identite:function(){
    return'prenom :'+this.prenom +
          '\nnom : '+this.nom +
          '\nage : '+ this.age+
          '\nQI : '+ this.QI;
}
}
alert (moi.identite());*/
/*var x=parseInt(prompt("Entrez un nombre :"));
var y=parseInt(prompt("Entrez le deuxieme nombre :"));
var mod=x%y;
var s=x+y;
var d=x/y;
var so=x-y;
var m=x*y;
document.write("Le modulo est de :"+" "+mod+"<br>"+"La somme est de :"+" "+s
    +"<br>"+"La multiplication est de :"+" "+m+"<br>"+"La division est de :"+" "+d+
    " <br>"+"La soustraction est de :"+so
);*/
/*
var x=parseInt(prompt("Entrez un nombre :"));
if (x%2==0){
    document.write("Ce nombre est pair");
}
else 
{
    document.write("Ce nombre est impair");
}*/
/*
var moi=prompt("Entrez un nombre correspondant aux mois de l'annee");
if (moi==1){
alert("Nous sommes Janvier");
}
else if(moi==2){
alert("Nous sommes fevrier");
}
else if(moi==3){
    alert("Nous sommes mars");
}
else if(moi==4){
    alert("Nous sommes Avril");
}
else if(moi==5){
    alert("Nous sommes Mai");
}
else if(moi==6){
    alert("Nous sommes Juin");
}
else if(moi==7){
    alert("Nous sommes juillet");
}
else if(moi==8){
    alert("Nous sommes Aout");
}
else if(moi==9){
    alert("Nous sommes Septembre");
}
else if(moi==10){
    alert("Nous sommes octobre");
}
else if(moi==11){
    alert("Nous sommes novembre");
}
else if(moi==12){
    alert("Nous sommes decembre");
}
else{
    alert("entrez une valeur correcte!!!!");
}*/
/*var x=parseInt(prompt("Entrez un nombre: "));
(x%2==0)? alert("Ce nombre est pair"):alert("Ce nombre est impair");*/
/*
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
for(var i=1;i<=10;i++){
    for(var j=1;j<=10;j++){
        var val=i*j;
        document.write(i+"*"+j+"="+val+"<br>");
    }

}*/
var i=1;
while(i<=10){
    i++;
    document.write("Bonjour tout le Monde!!!");
}
var i=1;
while(i<=10)
{
    var j=1;
    
    while(j<=10){
    var val=i*j;
    document.write(i+" * "+j+" = "+val+"<br>");
    j++;
    }
    i++;
}