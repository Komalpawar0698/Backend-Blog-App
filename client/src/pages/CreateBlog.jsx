import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Box, Button, InputLabel, TextField, Typography, } from '@mui/material'
const CreateBlog = () => {
    const Id = localStorage.getItem("userId")
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        title:'',
        description:'',
        image:''
    })
const handleChange = (e) => {
    setInputs(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {data} = await axios.post('http://localhost:8000/api/v1/blog/create-blog',{
                title:inputs.title,
                description:inputs.description,
                image:inputs.image,
                user: Id,
            })
            if(data?.success){
                toast.success("blog created")
                navigate("/my-blogs")
            }

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <Box 
        width={"50%"} 
        border={3} 
        borderRadius={10} 
        padding={3} 
        margin="auto" 
        boxShadow={'10px 10px 20px #ccc'} 
        display="flex" 
        flexDirection={'column'}
        marginTop="30px"
        >
            <Typography
             varient="h2" 
             textAlign={'center'}
             fontWeight="bold" 
             padding={3} 
             color="gray"
             >
                Create a pots
            </Typography>
            <InputLabel 
            sx={{ mb:1, mt:2, fontsize:"24px", fontWeight:"bold"}}
            >
                Title
            </InputLabel>
            <TextField 
            name="title"
            value={inputs.title} 
            onChange={handleChange}
            margin="normal" 
            varient="outlined"
            required
             />
              <InputLabel 
            sx={{ mb:1, mt:2, fontsize:"24px", fontWeight:"bold"}}
            >
                Description
            </InputLabel>
            <TextField 
            name="description"
            value={inputs.description} 
            onChange={handleChange}
            margin="normal" 
            varient="outlined"
            required
             /> <InputLabel 
             sx={{ mb:1, mt:2, fontsize:"24px", fontWeight:"bold"}}
             >
                 Image URL
             </InputLabel>
             <TextField 
             name="image"
             value={inputs.image} 
             onChange={handleChange}
             margin="normal" 
             varient="outlined"
             required
              />
              <Button type="submit" color="primary" variant="contained">
                SUBMIT
                </Button>
        </Box>
    </form>

    </>
  )
}

export default CreateBlog
