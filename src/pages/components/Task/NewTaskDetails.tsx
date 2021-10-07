import { useState } from 'react';
import Logo from '../../../img/logo.png'
import Image from 'next/image'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

type content = {
    title :string,
    text: string
}

export const NewTaskDetails = (props: any) => {
  const [contents, setContents] = useState<content[]>([{title:"", text:""}])
  // const [content, setContent] =useState<content>({title:"", text:""})

  const addContent = () => {
    setContents([...contents, {title:"", text:""}]);
    console.log(contents)
    };

    const changeHandle = (e: any, index:number) => {
      // contents[index] = e.target.value
      // setContents(...contents, contents[0])
    }
  
  const changeHand = (e: any) => {
    setContents(e.target.value)
  }

  const removeContent = (index:number) => {
    setContents(contents.splice(index, index));
  }

  const deleteContent = (id:number) => {
    setContents(contents.filter((_, i) => i !== id))
  }


  const contenthandleChange = (event: any) => {
    setContents({
      ...contents,
      [event.target.contents]: event.target.value
    });
  };


  const [values, setValues] = useState({
    email: 'demo@devias.io',
    country: 'USA'
  });


  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
      <Card>
        <Divider />
        <CardContent>
        <Grid
            item
            md={12}
            xs={12}
        >
        <TextField
            fullWidth
            label="タイトル"
            name="タイトル"
            required
            variant="outlined"
        />
        </Grid>
        <br/>
          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              md={12}
              xs={12}
            >
              <Image src={Logo} height="800"/>
            </Grid>
                <Button onClick={addContent}>追加</Button>
                {contents.map((c:{title:string, text:string}, index:number) => (
                    <Grid
                        key={index}
                        item
                        md={12}
                        xs={12}
                    >
                        <Button onClick={()=>deleteContent(index)}>削除</Button>
                        <TextField
                            fullWidth
                            label="タイトル"
                            name="タイトル"
                            required
                            onChange={changeHand}
                            value={c.title}
                            variant="outlined"
                            />
                        <br/>
                        <br/>

                        <TextField
                            fullWidth
                            label="コンテンツ"
                            name="コンテンツ"
                            // onChange={changeHandle}                
                            required
                            value={c.text}
                            variant="outlined"
                        />
                    </Grid>
                ))}
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Twitterアカウント"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="年齢"
                name="phone"
                onChange={handleChange}
                type="number"
                // value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="職業"
                name="職業"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="在宅居住地"
                name="在宅居住地"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                // value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="secondary"
            variant="contained"
          >
            保存
          </Button>
        </Box>
      </Card>
  );
};




