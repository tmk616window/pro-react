// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
// import FacebookIcon from '../icons/Facebook';
// import GoogleIcon from '../icons/Google';

export const Login = () => {
//   const navigate = useNavigate();

  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
            //   navigate('', { replace: true });
            }}
          >
            {({
            //   errors,
            //   handleBlur,
            //   handleChange,
            //   handleSubmit,
            //   isSubmitting,
            //   touched,
            //   values
            }) => (
              <form >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  {/* <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid> */}
                  {/* <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid> */}
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Email Address"
                //   label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                //   label="Password"
                  placeholder="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  {/* <button width="100">dedew</button>   */}
                  <Button
                    color="secondary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link>
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

