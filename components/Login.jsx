import React from "react";
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import {TextField} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const savedPassword = 'ssm123';
const savedUserName = 'admin';

function  LoginForm() {

  const router = useRouter();
  const { control, handleSubmit,register,formState:{ errors } } = useForm();

  const showToast = (message) => {
    toast(message);
  };

  const onSubmit = (data) => {

    let {name,password} = data;
    if(savedUserName === name && savedPassword === password){
      showToast('登陆成功！进在为你跳转发布界面');
      setTimeout(()=>{
        router.push('/blog/post')
      },2200)

    }else{

      showToast("密码或用户名错，请重新输入！");
      
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col  items-center justify-center" >
      <div class="mb-8 mt-8 w-500">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField  {...register('name',{ required: true,maxLength: 20 })} style={{width:'500px'}} id="title" label="用户名" variant="outlined" />}
      />
      <p class="text-[#f20731]">{errors.name && '用户名不能为空或长度不能超个20个字符'}</p>
      </div>
      <div class="mb-8 w-500">
       <Controller
        name="password"
        control={control}
        render={({ field }) => 
        <TextField
        id="description"
        label="密码"
        variant="outlined"
        style={{width:'500px'}} 
        {...register('password',{ required: true,maxLength: 6 })}
      /> 
      
    }
      />
      <p class="text-[#f20731]">{errors.password && '密码不能为空或长度不能超个6个字符'}</p>
      </div>
      <button type="submit">登陆</button>
    </form>
    <ToastContainer />
    </>
  );
};

export default LoginForm;