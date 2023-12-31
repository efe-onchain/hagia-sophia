import React, {useState} from "react";
import { TextField, Button} from "@mui/material";
import { Link } from "react-router-dom"
import SendIcon from '@mui/icons-material/Send';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CreateBounty } from "../../components/SendTransaction/sendTransactionWagmi";

const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '700px', // Adjust the maximum width as needed
      margin: '0 auto',
      marginTop: '40px'
    },
    textField: {
      marginBottom: '36px', // Adjust the spacing between fields as needed
    },
    submitButton: {
      marginTop: '16px', // Adjust the spacing above the submit button as needed
      backgroundColor: '#6A0DAD', // Byzantine Blue
      color: 'white',
    },
  };

const BountyForm = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        documentUrl: '',
        bountyAmount: ''
      });

    const [alertSuccess, setAlertSuccess] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here This is where etherjs
        console.log(formData);
        setAlertSuccess(true);
      };
    
      return (
        <div className="research-form">
        <h1>Please fill out the information below and wait for approval.</h1>
          <br/>
          <br/>
        <form style={styles.form} onSubmit={handleSubmit}>
            <TextField
                label="Title"
                name="title"
                fullWidth
                required
                onChange={handleChange}
                value={formData.title}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
            <TextField
                label="Description"
                name="description"
                fullWidth
                required
                onChange={handleChange}
                value={formData.description}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
            <TextField
                label="Bounty Document URL"
                name="documentUrl"
                fullWidth
                required
                onChange={handleChange}
                value={formData.documentUrl}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
            <TextField
                label="Bounty Amount"
                name="bountyAmount"
                fullWidth
                required
                onChange={handleChange}
                value={formData.bountyAmount}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
          {/* <Button
            type="submit"
            variant="contained"
            color="primary"
            style={styles.submitButton}
            endIcon={<SendIcon />}
          >
            Submit
          </Button> */}
          <CreateBounty title={formData.title} description={formData.description} documentUrl={formData.documentUrl} bountyAmount={formData.bountyAmount}/>
        </form>
        <Snackbar open={alertSuccess} autoHideDuration={3000} onClose={() => setAlertSuccess(false)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlertSuccess(false)} severity="success">
          Successfully Submitted Bounty Application!
        </MuiAlert>
      </Snackbar>
    </div>
    );
      
}

export default BountyForm