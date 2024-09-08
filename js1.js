function val1(){
    var  x=(document.getElementById('search2').value);
    if(x.toString().length ==10)
    {
        alert('Mobile number verified! \nPls Continue');
    }
    else{
        alert('Invalid Mobile Number \nTry Again');
        document.getElementById('search2').value="";
        document.getElementById('search2').focus();
    }
}

function val2(){

    let x1=y1=z1=false;
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
            document.getElementById('name').focus();
    }
    else{x1=true;}

    var re = /\S+@\S+\.\S+/;
    let z = document.forms["myForm"]["email"].value;
    if(!re.test(z)){
        alert("Invalid Email Id");
        document.getElementById('email').value="";
        document.getElementById('email').focus();
    }else{z1=true;}


    let y = document.forms["myForm"]["Address"].value;
    if (y == "") {
        alert("Address must be filled out");
        document.getElementById('add').focus();
        return false;
    }else{y1=true;}


    if(x1 && y1 && z1)
    {
        alert("Thankyou!\n\nYour Details have been registered");
        document.location.href="myntraQ3b.html";
    }
}

