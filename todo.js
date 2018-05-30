
$("ul").on("click", "li", function(e){
    e.stopPropagation();
   $(this).toggleClass("completed");
});


$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type=text]").on("keypress", function(e){
    if(e.which === 13){
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+$("input[type=text]").val()+"</li>")
        $("input[type=text]").val("");
    }
 });

 $(".fa-pencil-square-o").on("click", function(e){
    $("input[type=text]").fadeToggle();
 });
