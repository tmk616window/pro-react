import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import {TaskProfile} from './components/Task/TaskProfile';
  import {TaskDetails} from './components/Task/TaskDetails';
  
  export default function Task() {

    return(
      <>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
        <Box
          sx={{
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProfile />
              </Grid>
              <Grid
                item
                lg={9}
                md={9}
                xs={12}
              >
                <TaskDetails />
              </Grid>
            </Grid>
            <br/>
            <Grid
                spacing={3}
                lg={4}
                md={6}
                xs={12}
              >
            </Grid>
          </Container>
        </Box>
      </>  
    )
  };
  
  