import axios from "axios";

let user ='';
const loginReducer=(state={error:''},action)=>{

    switch(action.type){
        
        case "emailORUsername":
            if(action.emailORUsername !==''){
                return {...state,emailORUsername:action.emailORUsername};
            }
            break;
        case "password":
            if(action.password !==''){
                return {...state, password:action.password}
            }
            break;
        case "LOGIN":
<<<<<<< HEAD
                const loadInfo = async () => 
                {
=======
                const loadInfo = async () => {
>>>>>>> 54d86c3e24e2f36c825da95506ffcff76f716a8b
                    const res = await axios.get('http://localhost/project9/PHP/login.php?email='+state.emailORUsername+'&password='+state.password);
                    sessionStorage.clear()
                    sessionStorage.setItem("user_info", res.data);
                    sessionStorage.setItem("user_id", res.data.id);
                    console.log(res.data);
                    let user_info= sessionStorage.getItem("user_info");
                    console.log(user_info);
                
                    if(user_info != '')
                    {
                        window.location.href = "/";
                    }
                    return {...state, error: 'Username/ email or password is invalid'}
                };
            
            loadInfo();
            
            
        default:
            return state;
    }
    
    
    
}
export default loginReducer;