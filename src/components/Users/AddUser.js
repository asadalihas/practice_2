import React ,{useState} from 'react'
import Card from '../UI/Card';


const AddUser = (props) => {

    const  [userName,setUserName]= useState('');
    const  [ageName,setAgeName]= useState('');

    const userNameChange = (event)=>{
        setUserName(event.target.value)

    };

    const ageUserNameChange = (event)=>{
        setAgeName(event.target.value)

    };


    const addUserHandler = (event) =>{
        event.preventDefault();
        if(userName.trim().length === 0 || ageName.trim().length === 0){
            return;
         }
         if(+ageName < 1){
             return;
         }
        props.onAddUser(userName,ageName);
        setUserName('')
        setAgeName('')
    }



  return (
    <Card  >
     <form  style={{
         display:'flex',
         color: 'black',
         justifyContent:'space-evenly',
         backgroundColor:'lightskyblue',
         alignItems:'center',
         justifyItems:'center',
         flexDirection:'column',
         margin:'200px',
         borderRadius:'12px',
         gap:'5px',
         padding:'20px'
         }} onSubmit={addUserHandler}>
        <label htmlFor='username' >User Name</label>
        <input id='username' type='text' value={userName} onChange={userNameChange} />
        <label htmlFor='age' >Age (years) </label>
        <input id='age' type='number' value={ageName} onChange={ageUserNameChange} />
        <button type='submit' onClick={addUserHandler} >Add User</button>
    </form>

    </Card>
  )
}

export default AddUser
