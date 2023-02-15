import { useState, useEffect } from 'react'
import {Box, Input, Text, FormControl, Button, ButtonGroup, Alert, FormErrorMessage} from '@chakra-ui/react'
import './App.css'
import data from './data/users_login.json'

function App() {
  const[optionUser, setOptionUser] = useState({user:"",password:""});

  const findUser= ()=>{
     const currenUser = data.find((e)=>{
      return  e.pass=== optionUser.password && e.mail === optionUser.user
    })
     if (!currenUser){
      console.log(currenUser)
      alert("El Email o Contraseña son invalidos.") 
     }else if (currenUser){
      window.location='/users'
     }
  };  
  
  return (
   <Box> 
    <Box>
      <Text>Ingrese su Mail:</Text>
      <Input placeholder='Ingrese su mail aqui' type='email' value={optionUser.user} onChange={(e) => setOptionUser({...optionUser, user:e.target.value})}></Input>  
    </Box>
    <Box>
      <Text>Ingrese su Contraseña:</Text>
    <Input placeholder='Ingrese su constraseña aqui' type='password' value={optionUser.password} onChange={(e) => setOptionUser({...optionUser, password:e.target.value})}></Input>
    </Box>
    <Box>

    </Box>
    <Box>
    <Button
      type='submit'
      onClick={()=>(findUser())}    
    > 
    Click to submit </Button>
    
    </Box>
   </Box>   
  )
 }

export default App