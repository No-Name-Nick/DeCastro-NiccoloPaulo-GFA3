var num1 =  Math.round(Math.random()*20)
var num2 =  Math.round(Math.random()*20)
var num3 = Math.round(Math.random()*20)
console.log('Num 1 : '+num1+'\nNum 2 : '+num2+"\nNum 3 : "+num3)

function BigNum(){
    if(num1 >= num2){
        if(num1 >= num3){
            document.getElementById('BigNum').innerHTML = "The number of explosives is "+num1+"."
        }
        else{
            document.getElementById('BigNum').innerHTML = "The number of explosives is "+num3+"."
        }
    }
    else{
        if(num2 >= num3){
            document.getElementById('BigNum').innerHTML = "The number of explosives is "+num2+"."
        }
        else{
            document.getElementById('BigNum').innerHTML = "The number of explosives is "+num3+"."
        }
    }
}
function Letter(){
    const alphabet = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    document.getElementById('Alphabet').innerHTML = "The start of the passcode is: "+alphabet[num1]+"."
}

function Hour(){
    var Mins = num2*num3
    var Hrs = Math.trunc(Mins/60)
    var MinsLeft = Mins%60
    if(Hrs == 0){
        if(MinsLeft == 0){
            document.getElementById('Time').innerHTML = "There is no time"
        }else{
            document.getElementById('Time').innerHTML = "The amount of time left to defuse them is "+MinsLeft+" minutes"
        }
    }
    else {
        if(MinsLeft == 0){
            document.getElementById('Time').innerHTML = "There is no time"
        }else{
            document.getElementById('Time').innerHTML = "The amount of time left to defuse them is "+Hrs+" hours and "+MinsLeft+" minutes"
        }
    }
}
function Call(){
    BigNum();
    Letter();
    Hour();
}

