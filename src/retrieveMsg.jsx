import { Typography } from "@mui/material";

const RetrieveMsg = ({message}) => {
    return ( 
        <div className="retriveMsg text-center rounded">
            <div>
              <div>
              <Typography>
                    {message}!
                </Typography>
              </div>
            </div>
        </div>
    );
}
 
export default RetrieveMsg;