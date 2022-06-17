//1.show the input box
$(".fa-plus").click(function () {
    $("input").fadeToggle(); //toggle that make it on or off

})

//2.check of tasks
$("ul").on("click", "li", function () {
    $(this).toggleClass("checked");
})


//3.show the delete icon
$("ul").on("mouseover", "li span", function () {
    $(this).css("width", "40px");
    $(this).css("opacity", "1.0");
})

$("li span").mouseout(function () {
    $(this).css("width", "0px");
    $(this).css("opacity", "0.0");
})
//4.delete tasks ("li").remove() delete all the li span
$("ul").on("click", "li span", function () {

    $(this).parent().fadeOut(500, function () {

        $(this).remove();
    }
    )
})
//5.add new tasks
$("input").keypress(function (event) {
    if (event.which === 13) {
        let newTask = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span> " + newTask + "</li>");
        $(this).val("");
    }
})