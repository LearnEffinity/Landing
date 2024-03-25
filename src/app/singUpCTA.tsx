import React from 'react';
import { OutlinedInput, Button } from '@mui/material';
import './signUpCTA.css';

const SignUpCTA: React.FC = () => {
return (
    <div className="sign-up-cta">
        <OutlinedInput
            className="email-input"
            placeholder="Email Address..."
            sx={{ '& fieldset': { border: 'none' }, width: 'calc(100%)', paddingLeft: 0 }} // Adjust width for input to leave space for button
        />
        <Button className="button-input" variant="contained" color="primary">
            Join Beta!
        </Button>
    </div>
);
};

export default SignUpCTA;