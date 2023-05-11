import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Allblogs = ({blogs,deleteBtn}) => {
    const allblogs=blogs
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
                            {blog.content}
                        </Typography>
                    </div>
                    <div className="blogBtn">
                        <Button  variant='outlined' color='secondary'  onClick={()=>{deleteBtn(index)}}>Delete</Button>
                    </div>
                </div>
            </li>
                ))
            }
        </ul>
     </div>
     );
}
 
export default Allblogs
