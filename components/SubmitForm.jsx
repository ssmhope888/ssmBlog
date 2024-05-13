import React from "react";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import {TextField} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {appHost} from "../GlobalContext";

function  SubmitForm() {

  const { control, handleSubmit,register,formState:{ errors } } = useForm();

  const showToast = (error) => {
    if(error){
      toast('发布失败');
    }else{
      toast('发布成功');
    }
  };

  const onSubmit = (data) => {
    let postData = data;
    postData.date = new Date().toDateString();
    postData.id = Math.floor(Math.random() * 1000);
    axios.post(`${appHost}api/savePost`,{
      ...postData
    }).then(function (response) {
      showToast(null);
    })
    .catch(function (error) {
      showToast(error);
    });
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col  items-center justify-center" >
      <div class="mb-8 mt-8 w-500">
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField  {...register('title',{ required: true,maxLength: 50 })} style={{width:'500px'}} id="title" label="文章标题" variant="outlined" />}
      />
      <p class="text-[#f20731]">{errors.title && '标题不能为空或长度不能超个50个字符'}</p>
      </div>
      <div class="mb-8 w-500">
       <Controller
        name="description"
        control={control}
        render={({ field }) => 
        <TextField
        id="description"
        label="文章内容"
        variant="outlined"
        multiline
        style={{width:'500px'}} 
        {...register('description',{ required: true,maxLength: 100 })}
      /> 
      
    }
      />
      <p class="text-[#f20731]">{errors.description && '文章内容不能为空或长度不能超个100个字符'}</p>
      </div>
      <button type="submit">发布</button>
    </form>
    <ToastContainer />
    </>
  );
};

export default SubmitForm;