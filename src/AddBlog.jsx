import React from "react";
import { firestore } from "./firebase";
import "./addblog.css"

let AddBlog = (props) => {
   console.log(props)
   let obj = {
       Username:props.user.displayName,
       email:props.user.email,
       Title:"",
       Content:""
   }


  return (
    <div className="blog-form">
      <div class="mb-3 blog-title">
        <label for="exampleFormControlInput1" class="form-label ">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          onChange={(e)=>{
             obj.Title= e.currentTarget.value
          }}
        />
      </div>
      <div class="mb-3 blog-content">
        <label for="exampleFormControlTextarea1" class="form-label ">
          Write Your Blog
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e)=>{
             obj.Content= e.currentTarget.value
          }}
        ></textarea>
      </div>
      <button 
         type="button" 
         class="btn btn-primary"
         onClick={()=>{
            firestore.collection("blogs").add({
                Name:obj.Username,
                email:obj.email,
                Title:obj.Title,
                Content:obj.Content
            })
         }}
      >Submit
      </button>

    </div>
  );

  
};

export default AddBlog;