 
var book = {
 author:"Dan Brown" ,
 title:"Angels and Demons",
 pages:30,
 isCheckedOut : function(c){
 return c;
 },
  fullName : function() {
    return this.title+ " by " + this.author;
  }
};
document.getElementById("book").innerHTML = "The book name is "+book.fullName();
var rating=[60,80,75];
book.isCheckedOut(false);
document.getElementById("status").innerHTML = "The book is "+CheckStatus();
 function CheckStatus(){
     if(book.isCheckedOut(false)){
        return "not present in library";
        }
     else{
         return "present in library";
     }
 }
document.getElementById("rate").innerHTML = "The average rating is "+ratingAvg() +".";

function addRating(rate){
  var x = rating.push(rate);  
    return x;
}
function ratingAvg(){
    var sum=0;
    for(var i=0;i<rating.length;i++)
        sum+=rating[i];
    
        return sum/rating.length;
}
  
//now for converting
function myFunction(){
var str=document.getElementById("string").innerHTML;
 var txt=str.replace(/u/g,"uu");
txt=txt.replace(/e/g,"ee");
document.getElementById("string").innerHTML="the converted string is "+txt;
}















