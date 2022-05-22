function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal >0)
    {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var amount= interest
        document.getElementById("result").innerHTML="\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    else
    {
        document.getElementById("result").innerHTML="\<br\>Enter a Valid Amount "
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

