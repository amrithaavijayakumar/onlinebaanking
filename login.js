function logi()
{
    let data=accnos.value
    if(data in localStorage)
    {
        let details=JSON.parse(localStorage.getItem(data))
        console.log(details);
        alert("LOGIN SUCCESSFULL")
        window.location='./home.html'
    }
    else
    {
        alert('NO SUCH USER FOUND')
    }
    
    
    
   }

