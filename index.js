function submit(){
    let math = parseInt(document.getElementById("math").value);
    let phy = parseInt(document.getElementById("phy").value);
    let chem = parseInt(document.getElementById("chem").value);
    if((math>=101) || (phy>=101) || (chem>=101)){
        document.getElementById("ans").innerHTML= "Please enter value under 100!!!";
        document.getElementById("total").innerHTML = "N/A";
        document.getElementById("percent").innerHTML = "N/A";
        document.getElementById("grad").innerHTML = "N/A";
        document.getElementById("result").innerHTML = " ";
    }
    else{
        document.getElementById("ans").innerHTML= " ";
        let total = math + phy + chem;
        document.getElementById("total").innerHTML = total + " / 300";
        let per = (total/300)*100 ;
        document.getElementById("percent").innerHTML = per.toFixed(2) + "%";
        let grd = Math.round(per);
        if(grd>=90){
            document.getElementById("grad").innerHTML = "A";
        }
        else if(grd>=80 && grd<90){
            document.getElementById("grad").innerHTML = "B";
        }
        else if(grd>=70 && grd<80){
            document.getElementById("grad").innerHTML = "C";
        }
        else if(grd>=55 && grd<70){
            document.getElementById("grad").innerHTML = "D";
        }
        else if(grd>=35 && grd<55){
            document.getElementById("grad").innerHTML = "E";
        }
        else{
            document.getElementById("grad").innerHTML = "F";
        }
        
        if(grd<=100 && grd>=35){
            document.getElementById("result").style.color = "green";
            document.getElementById("result").innerHTML = "Congratulations!! You are Pass.";
        }
        else{
            document.getElementById("result").style.color = "red";
            document.getElementById("result").innerHTML = "Sorry!! You are Fail.";
        }
    }                      
}