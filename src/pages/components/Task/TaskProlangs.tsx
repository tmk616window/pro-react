import {useState} from 'react'
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
    TextField,
    IconButton,
    Grid
  } from '@material-ui/core';
  
  import DeleteIcon from '@material-ui/icons/Delete';
  

  export const TaskProlangs = () => {

      const [form, setForm] = useState<string>("")
      const [proLangs, setProLangs] = useState<string[]>([])
    
      const deleteContent = (id:number) => {
        setProLangs(proLangs.filter((_, i) => i !== id))
      }
        
      const addContent = () => {
        setProLangs([...proLangs, form]);
        console.log(proLangs)
        setForm("")
        };

  

    return (
    <>
    <Card>
      <CardContent>
      <h4>プログラミング言語</h4>  
       {proLangs.map((proLang:string, index:number) => (
         
          <p className="article" key={index}>{proLang}< IconButton onClick={() =>deleteContent(index)}><DeleteIcon fontSize="small"/></IconButton></p>
          
      ))} 

      </CardContent>
      <Divider />
      <CardActions>
          <input value={form} onChange={(e) => setForm(e.target.value)}/>
          <Button onClick={() =>addContent()}>追加</Button>
      </CardActions>

    </Card>
    </>
  )
};
  
  
  