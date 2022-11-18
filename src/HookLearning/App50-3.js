import { useState } from "react";


//Từ 11:40 - 13:47
// Ứng dụng của 2 way binding trong làm form
function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // CALL API
    console.log({
      name,
      email
    })
  }
  return (
    <div style={{padding: 32}}>

    <input value = {name}  onChange={e => setName(e.target.value)}/>
    <input value = {email}  onChange={e => setEmail(e.target.value)}/>
    <button onClick={(handleSubmit)}>Register</button>
    </div>
  );
}
export default App;