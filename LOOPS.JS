console.log("connect aypoyaaaa");

var a = 0;   //initialization
while(a<10)   //condition
{
    console.log(a,"to sari");
    a++;   //increment / decrement
}

for(var i=50;i>=0;i-=5)  // init, cond , inc/dec
{

    console.log(i,"do sari")
}





var rect_no = document.getElementById("rect_no");
var rect_holders = document.getElementsByClassName("rect_holder");
var circ_holders = document.getElementsByClassName("circle_holder");
var error = document.getElementById("error");


function goTo()
{
    console.log("clicked")
    window.location.href ="loginpage-1.html"
}


function renderRectangles()
{
    let no_rectangles = rect_no.value ;
    if(no_rectangles!="")
    {
        console.log(no_rectangles);
        error.innerHTML ="";
        let div_html = "<div> :) </div>";  //required string of HTML
        let temp_string = "";
        for(let a=1;a<=no_rectangles;a++)
        {
            temp_string = temp_string + "<div> " + a + "</div>";

        }

        let c=no_rectangles;
        rect_holders[0].innerHTML = temp_string;

        temp_string ="";
        while(c>0)
        {

            temp_string = temp_string + "<div>" + c + "</div>"

            c--;
        }
        circ_holders[0].innerHTML =temp_string;
        
    }
    else 
    {
        error.innerHTML = "Please enter valid number";
        error.style = "color:red";
    }
}

