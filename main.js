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

    // =====================portfolio message display and hind============================//
    $("#portfolio1").mouseover(function(){
        $(".games").show();
        $("#portfolio1").css("opacity","0.7");
        $("#portfolio1").mouseout(()=>{
            $(".games").hide();
            $("#portfolio1").css("opacity","10");
        });

        //For hide that displayed text
    });
    $("#portfolio4").mouseout(()=>{
        $(".blank").hide();
        $("#portfolio4").css("opacity","10")
    });
    $("#portfolio4").mouseover(function(){
        $(".blank").show();
        $("#portfolio4").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio3").mouseout(()=>{
        $(".ontario").hide();
        $("#portfolio3").css("opacity","10");
    });
    $("#portfolio3").mouseover(function(){
        $(".ontario").show();
        $("#portfolio3").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio2").mouseout(()=>{
        $(".diamond").hide();
        $("#portfolio2").css("opacity","10");
    });
    $("#portfolio2").mouseover(function(){
        $(".diamond").show();
        $("#portfolio2").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio5").mouseout(()=>{
        $(".nature").hide();
        $("#portfolio5").css("opacity","10");
    });
    $("#portfolio5").mouseover(function(){
        $(".nature").show();
        $("#portfolio5").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio6").mouseout(()=>{
        $(".fun").hide();
        $("#portfolio6").css("opacity","10");
    });
    $("#portfolio6").mouseover(function(){
        $(".fun").show();
        $("#portfolio6").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio7").mouseout(()=>{
        $(".burned-logo").hide();
        $("#portfolio7").css("opacity","10");
    });
    $("#portfolio7").mouseover(function(){
        $(".burned-logo").show();
        $("#portfolio7").css("opacity","0.7");

        //For hide that displayed text
    });
    $("#portfolio8").mouseout(()=>{
        $(".giraffee").hide();
        $("#portfolio8").css("opacity","10");
    });
    $("#portfolio8").mouseover(function(){
        $(".giraffee").show();
        $("#portfolio8").css("opacity","0.7");

        //For hide that displayed text
    });


});
//   form validation
 function formValidation() {
    let username=document.forms["form"]["username"].value;
    let email=document.forms["form"]["email"].value;
    let message=document.forms["form"]["message"].value;

    if(username=="" || email=="" || message==""){
        alert("All fields must be filled");
    }else{
        alert(`username:${username},\n email address: ${email},\n we appreciate alot for choosing Delani studion to serve you, we have received your message, Thank you for reaching to us. \n received by JoeGakumo`);
    }
}