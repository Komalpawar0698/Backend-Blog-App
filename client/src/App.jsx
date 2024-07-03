import Header from "./components/Header";
import { Routes, Route} from "react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast"
function App () {
  return (
    <>
    <Header/>
    <Toaster />
    <Routes>
    <Route path="/" element={<Blogs />}/>
    <Route path="/blogs" element={<Blogs />}/>
    <Route path="/my-blogs" element={<UserBlogs />}/>
    <Route path="/create-blog" element={<CreateBlog/>}/>
    <Route path="/blog-details/:id" element={<BlogDetails/>}/>
    <Route path="/Login" element={<Login />}/>
    <Route path="/Register" element={<Register />}/>
    </Routes>
    
</>
    )
}

export default App;