import { useState } from "react";

//Từ 07:00 - 11:30
function App() {

  const [name, setName] = useState('')

  console.log(name);
  return (
    <div style={{padding: 32}}>

      
      {/* One way binding - Thay đổi dữ liệu bên ngoài (1 chiều) mà state bên trong (chiều còn lại) cũng thay đổi */}
    {/* <input onChange={e => setName(e.target.value)}/> */}


    {/* Two way binding - Bổ sung thêm thay đổi bên trong dẫn đến bên ngoài thay đổi */}

    <input value = {name}  onChange={e => setName(e.target.value)}/>
    <button onClick={() => setName("Nguyen Van BBB")}>Change Name</button>
    </div>
  );
}
export default App;