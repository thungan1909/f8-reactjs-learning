import { useState } from "react";


//Từ 14:00 - hêt

//Response from API
const course = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'React JS'
  }
]
function App() {


  // Checked lưu giá trị id đã check
  const [checked, setChecked] = useState([])

  console.log(checked);

  const handleCheck = (id) => {
      setChecked(prev => {
        const isChecked = checked.includes(id);
        if (isChecked)
        {
          //Uncheck
          // filter: lọc lấy ra những item có item như id truyền vào (check 2 lần => uncheck)
          return checked.filter(item => item !== id)
        }
        else {
          return [...prev , id]
        }
      })
  }
  const handleSubmit = () => {
    
    }
  
  return (
    <div style={{padding: 32}}>

      
      {course.map(course => (
        // so sánh checked với course.id đang click
        // trả về true/false. Nếu đúng thì mới check và lưu vào checked (phương thức sẵn)
        // nếu checked = true thì mới gọi setChecked
        <div key={course.id}>
            <input type="checkbox"
              checked = {checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}>
            </input>
            {course.name}
        </div>
      ))}
    <button onClick={(handleSubmit)}>Register</button>
    </div>
  );
}
export default App;