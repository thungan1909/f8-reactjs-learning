import {useState} from 'react'
function App() {

  //1. Giá trị khởi tạo = 1, lần đầu tiên counter sẽ được gán = 1
  const [counter,setCounter] = useState(1);

  //2. Tạo ra 1 hàm
  
  const handleIncrease = () => {
      setCounter(counter +1 ) //5. Khi hàm handleIncrease được gọi, nó sẽ gọi hàm setCounter 
      //6. Khi gọi hàm setCounter, react sẽ đọc lại hàm App (đọc lại từ trên xuống), lây giá trị ta vừa setCounter truyền vào counter (counter = counter + 1)
  }

  return (
    <div className="App" style={{padding: 20}}>
        {/* 3. Truyền giá trị counter hiện tại vào h1, hiển thị h1 */}
        <h1>{counter}</h1>

        {/* 4. Tạo ra button, khi click thì gọi hàm handleIncrease*/}
        <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
