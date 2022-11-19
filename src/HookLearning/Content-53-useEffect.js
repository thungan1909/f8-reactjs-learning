import { useEffect, useState } from "react";

// 1. useEffect(callback)
// -  Gọi callback sau mỗi khi component re-render
// - Gọi callback sau khi thêm element vào DOM
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// - Áp dụng để khi muốn gọi logic 1 lần
// 3. useEffect(callback, [deps])

//--------------
//Chung cho cả 3 loại useEfect
// -Callback luôn được gọi sau khi component mounted (lắp vào)



function Content() {


    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    //
    useEffect(() => {

        // Cach 1
        //Lam cách này không ổn, vì khi useEffect thì sẽ gọi callback sau mỗi khi component re-render
        // //Mà ta lại gọi setPost trong đó, khi stetPost thì sẽ làm gọi lại render lại 
        // // => Tạo vòng lặp vô tận
        //      //lay 1 api co sẵn của google về để làm dữ liệu và lưu vào object posts
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json ())
        // .then(posts =>{
        //     setPosts(posts);
        // })



        //Cach 2, chỉ gọi 1 lần
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json ())
        .then(posts =>{
            setPosts(posts);
        })
    }, [])


    return (
        <div>
            <input
                value = {title}
                onChange = {e => setTitle(e.target.value)}/>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                    
                </ul>
       </div>
    )
  }
  export default Content;
  