import React ,{useState}from 'react';
import AddUser from './components/Users/AddUser';
import UserLIst from './components/Users/UserLIst';

function App() {
  const addUserHandler = (uNAme,uAge) =>{
    setUserList((prevUserList) =>{
      return([...prevUserList,{name:uNAme,age:uAge,id:Math.random().toString()}]);
    });

  };
   const [userList,setUserList]= useState([]);


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLIst users={userList} />
    </div>
  );
}

export default App;
