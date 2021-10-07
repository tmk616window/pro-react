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
  
  export const TaskTools = () => (
    <>
    <Card>
      <CardContent>
      <h4>使用ツール</h4>
      <p className="toolArticle">vue</p>
      <p className="toolArticle">vue</p>
      <p className="toolArticle">vue</p>
      <p className="toolArticle">vue</p>
      <p className="toolArticle">vue</p>
      <p className="toolArticle">vue</p>
      </CardContent>
      <Divider />
      
    </Card>
    </>
  );
  
  
  