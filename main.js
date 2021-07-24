$(document).ready(function(){
    // effect to unhide and  message and hide icon design
    $("#design").click(()=>{
        $(".designhide").show(3000);
        $("#design").hide(3000);
    });
    // to hide text and display icon design
    $(".designhide").click(()=>{
        $("#design").show(3000);
        $(".designhide").hide(3000);
    });
    // to unhide message and hide icon development
    $("#development").click(()=>{
        $(".devhide").show(3000);
        $("#development").hide(3000);
    });
    $(".devhide").click(()=>{
        $("#development").show(3000);
        $(".devhide").hide(3000);
    });
    // unhide the product management message and hide the icon
    $("#prdmngt").click(()=>{
        $(".prdhide").show(3000);
        $("#prdmngt").hide(3000);
    });
    $(".prdhide").click(()=>{
        $("#prdmngt").show(3000);
        $(".prdhide").hide(3000);
    });

});