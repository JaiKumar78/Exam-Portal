import { useState } from "react";
import { AppBar, Typography, Avatar, Toolbar, Drawer, CssBaseline, Divider, Paper, FormControl, InputLabel, MenuItem, Box, Select } from '@mui/material';
import MCQ from './components/MCQ'
import ImageDescription from "./components/ImageDescription";

const App = () => {
  const [part, setPart] = useState('MCQ');
  
  const handleChange = (event) => {
    setPart(event.target.value);
  };

  const renderPartComponent = () => {
    switch (part) {
      case "MCQ":
        return <MCQ />;
      case "JUMBLED WORDS":
        return <JumbledWords />;
      case "IMAGE DESCRIPTION":
        return <ImageDescription />;
      default:
        return null;
    }
  };


  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" sx={{ height: 80, justifyContent: "center" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            {new Date().toDateString()}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
            Hello
          </Typography>
          <Avatar sx={{ width: 50, height: 50, marginLeft: 2 }}>
            H
          </Avatar>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* To push the content below the AppBar */}
      <div>
        <Drawer
          variant="permanent"
          anchor="left"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              top: '80px', // Push the drawer down by 80px to clear AppBar height
            },
          }}
        >
        <Paper>
          <div>
            <Typography variant="h5" sx={{ textAlign: "center", marginTop: 2, marginBottom: 2.5 }}>
              Assessment
            </Typography>
            <Divider />
          </div>  
        </Paper>
        </Drawer>
        <div style={{marginTop: '20px', marginLeft: '240px', padding: '20px'}}>
        <Box sx={{textAlign: "right" }}>
          <FormControl sx={{width: 220}} >
            <Select
            sx={{textAlign: "left"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={part}
              onChange={handleChange}
            >
              <MenuItem value={"MCQ"}>MCQ</MenuItem>
              <MenuItem value={"JUMBLED WORDS"}>JUMBLED WORDS</MenuItem>
              <MenuItem value={"IMAGE DESCRIPTION"}>IMAGE DESCRIPTION</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
        {renderPartComponent()}
        </Box>
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
