import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const App = () => {

  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {

    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("email",data.email);
    for(let i =0; i<data.images.length; i++){
    formData.append("images ",data.images[i]);
    }

    console.log(data);

   await axios.post('http://localhost:3000/user/create',formData,{
    withCredentials:true
   })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>

        <input
          type="text"
          placeholder="Enter your name"
          {...register("name")}
        />
        <br></br>

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
        />
        <br></br>

        <input
          type="file"
          {...register("images")}
          multiple
          placeholder='upload your image'
        />
        <br></br>

        <input type="submit" />

      </form>
    </div>
  )
}

export default App