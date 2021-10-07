import {
    Box,
    Container,
    Grid
  } from '@material-ui/core';
  import {TaskProfile} from './components/Task/TaskProfile';
  import {TaskDetails} from './components/Task/TaskDetails';
  import {TaskProlangs} from './components/Task/TaskProlangs'
  import {TaskTools} from './components/Task/TaskTools'

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
                <TaskDetails />
              </Grid>
              <Grid
                item
                lg={3}
                md={3}
                xs={12}
              >
                <TaskProlangs />
                <br/>
                <TaskTools />
                <br/>
                <TaskProfile />
              </Grid>
            </Grid>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <h3>コメント一覧</h3>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <p>総合：5.0　フロントエンド: 4.5　バックエンド: 4.5　独自性: 4.5　っっs: 4.5　デザイン: 4.5</p>
              <p>コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧</p>
              <br/>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <p>総合：5.0　フロントエンド: 4.5　バックエンド: 4.5　独自性: 4.5　っっs: 4.5　デザイン: 4.5</p>
              <p>コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧</p>
              <br/>
            </Grid>
            <Grid
                spacing={3}
                lg={10}
                md={10}
                xs={12}
              >
              <p>総合：5.0　フロントエンド: 4.5　バックエンド: 4.5　独自性: 4.5　っっs: 4.5　デザイン: 4.5</p>
              <p>コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧コメント一覧</p>
              <br/>
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
  
  