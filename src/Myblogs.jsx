import { useState, useEffect } from "react";
import { firestore } from "./firebase";

let Myblogs = (props) => {
  let [blog, setBlogs] = useState([]);

  useEffect(() => {
    let f = async () => {
      let qs = await firestore.collection("blogs").get();

      let tempArr = [];
      qs.forEach((doc) => {
        tempArr.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setBlogs(tempArr);
      console.log(tempArr);
    };

    f();
  }, []);

  console.log(blog)

  // let arr = blog.filter((ele) => {
  //      return ele.data.email === props.user.email;

  // });

  // console.log(arr);

  return (
    //

      <div>
        <ul>
           {blog.map((ele,idx)=>{
               if(ele.data.email===props.user.email){
                return(
                  <li key={idx}>
                    <h2>{ele.data.Title}</h2>
                    <p>{ele.data.Content}</p>
                  </li>
                ) 
               }
               
           })}
        </ul>
      </div>
    // <div>
    //     <h1>{arr[0].data.Title}</h1>
    //     <p>{arr[0].data.Content}</p>
    // </div>
    
  );
};

export default Myblogs;