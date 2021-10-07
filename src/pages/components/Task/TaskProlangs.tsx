import Logo from '../../../img/logo.png'
import Image from 'next/image'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid
  } from '@material-ui/core';
  
  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
  };
  
  export const TaskProlangs = () => (
    <>
    <Card>
      <CardContent>
      <h4>プログラミング言語</h4>
      <p className="article">vue</p>
      <p className="article">vue</p>
      <p className="article">vue</p>
      <p className="article">vue</p>
      <p className="article">vue</p>

      </CardContent>
      <Divider />
      
    </Card>
    </>
  );
  
  
  