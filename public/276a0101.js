// JavaScript Document

function pctfn(a,b,p) 
{        if   (a.length>0 && b.length<1)
		{p.innerHTML="Missing Entry!"}
		else if (a.length<1 && b.length>0)
		{ p.innerHTML="Missing Your Marks!";}
	   else if    (a< 0 || b <= 0) 
		{p.innerHTML = "Invalid Input!";}
        else  {p.innerHTML = (a / b * 100).toFixed(0)+("%");} 
}

 
function clrFn()
{
	pct1.innerHTML="";
	pct2.innerHTML="";
	pct3.innerHTML="";
	pct4.innerHTML="";
	t3.innerHTML="";
}
 
  
function rfsFn()
{
	location.reload()
	
}

function meanFn()
{	
	var sum = 0;
	var count = 0;	 

	var each = [parseFloat(document.getElementById("pct1").innerHTML),
				parseFloat(document.getElementById("pct2").innerHTML),
				parseFloat(document.getElementById("pct3").innerHTML),
				parseFloat(document.getElementById("pct4").innerHTML)]
	
	var result=0;
 /*
   var each = document.getElementsByClassName('pct');
   
   for(var i=0;i<each.length;i++)
	{
		if (parseFloat(each[i].innerHTML) >= 0)
		{
			sum += parseFloat(each[i].innerHTML);
			count++;
		}
	}
	*/	
	for(var i=0;i<each.length;i++)
	{
		if(each[i]>=0)
		
			{ 	sum += each[i];
				count++;
			}
			
	}
	result = sum/count;
	 
 document.getElementById("t3").innerHTML = "Mean: "+ result.toFixed(2) +" / 100";
 
}
 /*
 
 function avgFn()
 { 
var n =  [ parseFloat(document.getElementsByName("a1")[0].value),
   parseFloat(document.getElementsByName("a2")[0].value),
 parseFloat(document.getElementsByName("a3")[0].value),
   parseFloat(document.getElementsByName("a4")[0].value)];
var d1 =  parseFloat(document.getElementsByName("b1")[0].value),
var d1 =   		  parseFloat(document.getElementsByName("b2")[0].value),
var d1 =		  parseFloat(document.getElementsByName("b3")[0].value),
var d4 =		  parseFloat(document.getElementsByName("b4")[0].value)];

var totaln=0;
var totald=0; 
var count=0;
 }*/
 
 
  
function avgFn() {
/*
	


	var numerators = document.getElementsByClassName("fenzi");
	var sum = 0;
	for(i=0;i<numerators.length;i++){
 		if(parseFloat(numerators[i].value)>=0){
		sum += parseFloat(numerators[i].value);
		}
	}
	alert(sum);
*/



var numerator =  [(document.getElementById("a1").value),
  		 	 (document.getElementById("a2").value),
 		  	 (document.getElementById("a3").value),
	   		 (document.getElementById("a4").value)];
var denominator =  [ (document.getElementById("b1").value),
   		   (document.getElementById("b2").value),
		   (document.getElementById("b3").value),
		   (document.getElementById("b4").value)];
 var sum = 0; 
 var count=0;
 var count2=0;

 for(var i=0;i<numerator.length;i++)
	{
		if(parseFloat(numerator[i])>=0)
			{ 	sum += parseFloat(numerator[i]);
				count++;
			}
	}
	
var he=0;
 for(var  j=0;j<denominator.length;j++)
	{
		if(parseFloat(denominator[j])>=0)
		
			{ 	he += parseFloat(denominator[j]);
				count2++;
			}
	}

  {document.getElementById("t3").innerHTML = "Average: "
    +(sum/he * 100).toFixed(2)+ " /100"; }
	
	
}

 
 
 
