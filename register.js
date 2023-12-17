function regis()
{

    const details={
        un:uname.value,
        acc:accno.value,
        ps:psw.value

    }
    if(details.un==""||details.acc==""||details.ps=="")
    {
        alert("PLEASE FILL THE COMPLETE DETAILS")
    }
    else
    {
        localStorage.setItem(details.acc,JSON.stringify(details))
        alert('USER REGISTERED SUCCESSFULLY')
    }
    window.location='./login.html'
}