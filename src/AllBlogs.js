import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  breakWords  from './breaking';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Allblogs = ({blogs,deleteBtn}) => {
    const allblogs=blogs
    const role=useSelector(state=>state.isAdmin)
    console.log(role)
    return ( 
     <div>        
        <ul className='allBlogs'>
            {
                allblogs.map((blog,index)=>(
                    <li key={index}>
                <div className="myImg">
                    <img src={blog.image} alt="" />
                </div>

                <div className="blogDetails">
                    <div className="blogTitle">
                        <Typography variant="h5">{blog.title}</Typography>
                    </div>
                    <div className="blogInfo">
                        <Typography variant='body1'>
                            {breakWords(blog.content)}... <Link> Read more</Link>
                            
                        </Typography>
                    </div>
                    {role && <div className="blogBtn">
                        <Button  variant='outlined' color='secondary'  onClick={()=>{deleteBtn(index)}}>Delete</Button>
                    </div>}
                </div>
            </li>
                ))
            }
        </ul>
     </div>
     );
}
 
export default Allblogs