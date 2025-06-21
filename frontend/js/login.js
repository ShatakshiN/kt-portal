const form = document.forms[0]

form.addEventListener('submit' , async(e)=>{
    try{
        e.preventDefault()
        
        
        const data = {
            
            EmployeeId : e.target.EmployeeId.value,
            
            password : e.target.password.value
        }
        const res = await axios.post('http://localhost:4000/user/login', data)
        console.log(res)
        if(res.status == 200){
            alert('logged in successfully')
            localStorage.setItem('token' , res.data.token)
            window.location = '../views/test2.html'
        }



    }catch(e){
        console.log(e)
        alert(e.response.data.msg)
    }
})