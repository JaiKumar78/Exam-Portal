import React, { useState } from "react";
import { Grid, Paper, styled, Button, Table, TableBody, TableCell, TableRow, FormControl, Select, MenuItem } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const jumbled = [
    {
        "sentences": [
            "Through the crowded street, she searched for a familiar face.",
            "Nean signs blazed overhead, adding to her disorientation.",
            "Finally a kind stranger offered her directions, leading her back to safety",
            "Amidst the bustling city, she wandered lost and confused.",
            "Cars honked impatiently as she darted across intersections."
        ]
    }
]

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
}));

const JumbledSentences = () => {
    const [jumbledWords, setJumbledWords] = useState(Array(jumbled[0].sentences.length).fill(''));

    const handleChange = (index, event) => {
        const newJumbledWords = [...jumbledWords];
        newJumbledWords[index] = event.target.value;
        setJumbledWords(newJumbledWords);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={8} sx={{ position: "relative" }}>
                <Item sx={{ height: 500, overflow: 'auto' }}>
                    <Table>
                        <TableBody>
                            {jumbled[0].sentences.map((sentence, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ verticalAlign: "middle" }}>
                                        <FormControl variant="outlined" sx={{ marginRight: 2, width: 220 }}>
                                            <Select
                                                value={jumbledWords[index] || ""}
                                                onChange={(event) => handleChange(index, event)}
                                            >
                                                {Array.from({ length: jumbled[0].sentences.length }, (_, i) => (
                                                    <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell sx={{ verticalAlign: "middle", fontSize: 25 }}>{sentence}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
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
                    >
                        Next
                    </Button>
                </Item>
            </Grid>
            <Grid item xs={4} container direction="row" spacing={1}>
                {Array.from({ length: 10 }, (_, i) => (
                    <Grid item key={i}>
                        <Item>{i + 1}</Item>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default JumbledSentences;
