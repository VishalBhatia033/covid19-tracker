function myFunction(x) {
    if (x.matches) { // If media query matches
        // document.getElementsByClassName("llists").style.display = "none";
        document.getElementById('list1').style.display='none';
        document.getElementById('list2').style.display='none';
        document.getElementById('list3').style.display='none';
        document.getElementById('list4').style.display='none';
        document.getElementById('list5').style.display='none';
        
    } else {
     document.getElementById('list1').style.display='inline-block';
        document.getElementById('list2').style.display='inline-block';
        document.getElementById('list3').style.display='inline-block';
        document.getElementById('list4').style.display='inline-block';
        document.getElementById('list5').style.display='inline-block';
    }
  }

//   seocond 
function second(y) {
    if (y.matches) { // If media query matches
        // document.getElementsByClassName("llists").style.display = "none";
        document.getElementById('list6').style.display='block';
        document.getElementById('ulists').style.display='block';
        
    } else {
        document.getElementById('list6').style.display='none';
        document.getElementById('ulists').style.display='none';
     
       
    }
  }
  
  var y = window.matchMedia("(max-width: 1200px)")
  second(y);
  y.addListener(second)

  var x = window.matchMedia("(max-width: 1200px)")
  myFunction(x);
  x.addListener(myFunction)
  let z=true;

  function didit(){
    if(z===true){
        document.getElementById("navigation-home").style.transition= "0.8s";
        document.getElementById('list1').style.display='block';
        document.getElementById('list2').style.display='block';
        document.getElementById('list3').style.display='block';
        document.getElementById('list4').style.display='block';
        document.getElementById('list5').style.display='block';
        z=false;
    }else{
        document.getElementById('list1').style.display='none';
        document.getElementById('list2').style.display='none';
        document.getElementById('list3').style.display='none';
        document.getElementById('list4').style.display='none';
        document.getElementById('list5').style.display='none';
        z=true;
    }
        
  }


  function hideit(){
    document.getElementById('note').style.display="none";
  } 
  window.onscroll = function() {chgclor()};
  
 function chgclor(){
  if (document.documentElement.scrollTop > 30) {
    stick.style.backgroundColor="#0057b8";
    stick.style.transition = " 0.7s";
    stick.style.transitionTimingFunction = "ease-out";
    proj.style.color="white";
    flink.style.color="white";
    slink.style.color="white";
    tlink.style.color="white";
    folink.style.color="white";
    filink.style.color="white";
    list6.style.color="white";

  }else{
    stick.style.backgroundColor="white";
    proj.style.color="black";
    flink.style.color="black";
    slink.style.color="black";
    tlink.style.color="black";
    folink.style.color="black";
    filink.style.color="black";
    list6.style.color="black";
  }
  }