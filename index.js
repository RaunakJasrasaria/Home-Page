var id = [];

$(".email").click(function(){
  $(".inval").removeClass("notvisibile");
});

$(".email").keydown(function(event){
  id.push(event.key);
  console.log(id);
  if( id.includes("@") && id.includes(".")){
    $(".inval").addClass("notvisibile");
  }
  });
