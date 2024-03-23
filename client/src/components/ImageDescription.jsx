import React, { useState } from "react";
import { Grid, Paper, styled, Button, TextField } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ID = [
    {
        "src": "../src/assets/imgae.jpg",
        "id": 1
    }
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const ImageDescription = () => {
    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value); // Update the description in the component state
    };

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    const handleSubmit = () => {
        // You can use 'description' state variable for further processing or submitting
        console.log("Description:", description);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={8} sx={{ position: "relative" }}>
                <Item sx={{ height: 500 }}>
                    <img src={ID[0].src} alt="" width={400} style={{ marginBottom: 10 }}/>
                    <TextField
                        onChange={handleChange}
                        sx={{ fontSize: 50 }}
                        id="outlined-basic"
                        label="Describe the above picture"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />
                    <Button
                        startIcon={<KeyboardArrowLeftIcon />}
                        variant="contained"
                        sx={{ position: 'absolute', bottom: 20, left: 25 }}
                    >
                        Previous
                    </Button>
                    <Button
                        endIcon={<KeyboardArrowRightIcon />}
                        variant="contained"
                        sx={{ position: 'absolute', bottom: 20, right: 25 }}
                        onClick={handleSubmit}
                    >
                        Next
                    </Button>
                </Item>
            </Grid>
            <Grid item xs={4} container direction="row" spacing={1}>
                {numbers.map((num) => (
                    <Grid item key={num}>
                        <Item>{num}</Item>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default ImageDescription;
