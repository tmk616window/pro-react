import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import {NewTaskDetails} from '../components/Task/NewTaskDetails';
  import {TaskProlangs} from '../components/Task/TaskProlangs'
  import {TaskTools} from '../components/Task/TaskTools'

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
                lg={9}
                md={9}
                xs={12}
              >
                <NewTaskDetails />
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs/>
                <br/>
                <TaskTools/>
              </Grid>
            </Grid>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

          </Container>
        </Box>
      </>  
    )
  };
  
  