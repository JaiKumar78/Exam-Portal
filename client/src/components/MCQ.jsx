import React, { useState } from "react";
import { FormControl, Select, MenuItem, Typography, Grid, Paper, styled, Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MCQs = [
    {
        "question" : "The Pritzker prize is an international award given to recognise contribution in the field of",
        "options" : ["literature", "mathematics", "architecture", 'medicine'],
        "id": 1
    }
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const MCQ = () => {
    const [option, setOption] = useState('');

    const handleChange = (event) => {
        setOption(event.target.value);
    };

    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <Grid container spacing={2}>
            <Grid item xs={8} sx={{position: "relative"}}>
                <Item sx={{height: 500, fontSize: 20}}>
                    1.The Pritzker prize is an international award given to recognise contribution in the field of
                    <FormControl variant="standard" sx={{ marginLeft: 2 }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={option}
                            onChange={handleChange}
                        >
                            {MCQs[0].options.map((opt) => (
                                <MenuItem key={opt} value={opt}>
                                    {opt}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button startIcon={<KeyboardArrowLeftIcon />} variant="contained"
                    sx={{ position: 'absolute', bottom: 25, left: 25 }}>Previous</Button>
                    <Button endIcon={<KeyboardArrowRightIcon />} variant="contained"
                    sx={{ position: 'absolute', bottom: 25, right: 25 }}>Next</Button>
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

export default MCQ;
