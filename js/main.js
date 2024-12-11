function checkPswd() 
{      
    var confirmPassword = "H58k4^@3avgGHBljtTcq";
    var password = document.getElementById('pswd').innerHTML = value;
    if (password == confirmPassword) 
    {
            window.location="09213421341.mp4";
    }
    else
    {
        document.write("Access denied: Incorrect access code");
    }
}

function ShowContact() 
{
    alert("Contact us on cs.ancientfoxstudios@gmail.com");
}