var food=$(".food");
var user= $(".name");
var cost=$(".money");
var time=$(".times");


$("button").click(function(){
    var userfood= food.val();
    var usercost= cost.val();
    var usertime= time.val();
    var username= user.val();
    
    
    $(".sentence").text("by the year of 2050,"+" "+username+" "+"will have eaten"+" "+parseInt(usertime)*1616+ " " +userfood+" " + "and paid "+parseInt(usercost)*parseInt(usertime)*1616+" "+"dollars.");

 
});

