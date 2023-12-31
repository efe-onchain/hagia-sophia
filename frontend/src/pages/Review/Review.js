import React, {useState} from "react";
import { TextField, Button} from "@mui/material";
import { Link } from "react-router-dom"
import SendIcon from '@mui/icons-material/Send';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { CreatePeerReview } from "../../components/SendTransaction/sendTransactionWagmi";

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

const Review = () => {

    const [formData, setFormData] = useState({
        researchId: '',
        feedback: '',
        documentUrl: '',
        rating: ''
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
        <h1>Please fill out the information below for peer review and wait for approval.</h1>
          <br/>
          <br/>
        <form style={styles.form} onSubmit={handleSubmit}>
            <TextField
                label="Research ID"
                name="researchId"
                fullWidth
                required
                onChange={handleChange}
                value={formData.researchId}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
            <TextField
                label="Peer Review Document URL"
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
                label="Rating"
                name="rating"
                fullWidth
                required
                onChange={handleChange}
                value={formData.rating}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
            <TextField
                label="Feedback"
                name="feedback"
                fullWidth
                required
                onChange={handleChange}
                value={formData.feedback}
                style={styles.textField}
                InputLabelProps={{
                style: { color: 'white' },
                }}
                InputProps={{
                style: { color: 'white', backgroundColor: '#6A0DAD' },
                }}
            />
          <CreatePeerReview feedback={formData.feedback} documentUrl={formData.documentUrl} rating={formData.rating} researchId={formData.researchId}/>
        </form>
        <Snackbar open={alertSuccess} autoHideDuration={3000} onClose={() => setAlertSuccess(false)}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setAlertSuccess(false)} severity="success">
          Successfully Requested Peer Review
        </MuiAlert>
      </Snackbar>
    </div>
    );
      
}

export default Review