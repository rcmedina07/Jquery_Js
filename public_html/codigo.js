var x;
x= $(document);
x.ready(inicializar);

function inicializar()
{
    var x;
    x=$("#hola");
    x.click(clickhecho);    
}
function clickhecho()
{
    var x;
    x=$("#hola");
    x.css("background-color","yellow");
    x.css("font-size","24px");
    x.css("border","1px solid black");
    x.css("width","400px");
    x.css("height","400px");
   }
