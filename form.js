//taking input field for basic validation just to make sure that the fields are not empty
let inputEmail3=document.getElementById("inputEmail3");
let inputPassword3=document.getElementById("inputPassword3");
//to check whether the fields are not empty
//give any name for function
function validate(){
    /*if(inputEmail3.value =="" || inputPassword3.value =="")
    {//empty ""
        alert("Fields cannot be empty");
        return false;
    }
    else{
        alert("Validation is proper");
        return true;
    }*/
    if(inputEmail3.value==""){
        alert("Email cannot be empty");
        return false;
        
    }
    else if(inputPassword3.value==""){
        alert("Password cannot be empty");
        
    }
    else if(inputPassword3.value<=5){
        alert("Password is short");
        return false;
    }
    else{
        return true;
    }
}
//function gets active only by calling that function
//Event happens only when we submit the login button i.e ONSUBMIT