function updateoutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"  + $("#cssPanel").val()  + "</style></head><body>"  + $("#htmlPanel").val() + "</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#jsPanel").val());

}



$(".toggleButton").hover(function(){
    $(this).addClass("highlightedButton");
}, function(){
    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("highlightedButton");

    var panelId = "#" + $(this).attr("id") + "Panel" ;
    // console.log(panelId);
    $(panelId).toggleClass("hidden");

    var numberOfActivePanels = 4 - $(".hidden").length;
    $(".panel").width(($(window).width() / numberOfActivePanels) -13);
});

$(".panel").height($(window).height() - $("#topBar").height() - 13);
$(".panel").width(($(window).width() /2) - 13);
updateoutput();

$("textarea").on("change keyup paste", function(){
    updateoutput();
});

