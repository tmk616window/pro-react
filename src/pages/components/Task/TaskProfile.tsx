// import moment from 'moment';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@material-ui/core';
  
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  
  export const TaskProfile = () => (
    <>
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            // src={user.avatar}
            // sx={{
            //   height: 100,
            //   width: 100
            // }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="p"
          >
            {user.name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            <p>mdepwpoew</p>
          </Typography>
          <Typography
            color="textSecondary"
            variant="body1"
          >
            {/* {`${moment().format('hh:mm A')} ${user.timezone}`} */}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      
    </Card>
    </>
  );
  
  
  