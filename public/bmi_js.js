function calculate(){
    var weight=document.getElementById("weight").value;
    var height=document.getElementById("height").value;

    if(weight=="" && height==""){
        var status=document.getElementById("status");
        status.innerHTML="Enter valid height and width";
    }
    else{
        var bmi=weight/(height*height);
        var bmi=bmi.toFixed(2);
        var result=document.getElementById("result");
        result.innerHTML="Your bmi is "+bmi;
        if(bmi<=18.4){
            var status=document.getElementById("status");
            status.innerHTML="You are Under Weight  &#128531";
        }
        else if(bmi<=24.9){
            var status=document.getElementById("status");
            status.innerHTML="You have a healthy Weight";
        }
        else if(bmi<=39.9){
            var status=document.getElementById("status");
            status.innerHTML="You are Over Weight  &#128534";
        }
        else if(bmi>=40){
            var status=document.getElementById("status");
            status.innerHTML="You are Obese";
        }
        }
    
}

function reset(){
    document.getElementById("weight").value="";
    document.getElementById("height").value="";
    document.getElementById("result").innerText="";
    document.getElementById("status").innerText="";
}