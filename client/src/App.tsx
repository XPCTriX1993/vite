import React, { useEffect, useState } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Box } from '@mui/system'
import Red from '@mui/material/colors/red'
import Grey from '@mui/material/colors/grey'
import { Button, Grid, Input, Typography } from '@mui/material'
import FormDialog from './Components/popupInput'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton'





function App() {
  const [selectFile, setselectFile] = useState();
  const [loading, setLoading] = React.useState(false);
  const finalTest = []
  function handleClick(event) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('file', selectFile)
    axios.post('/hello', formData, { baseURL: 'http://127.0.0.1:5000' })
      .then((res) => {
        
        document.getElementById('demo1').innerHTML = res.data.message.replaceAll('\\n','<br>')
        setLoading(false)
        console.log(res.data.message)
        
      })
  }
    let dddd = 'dfdfq\\nweqwe';
    console.log(dddd.replace('\\n','\n'))




  const detailWork = [
    {
      id: 1,
      name: 'ancom',
      detail: 'an luc 5 gio'
    },
    {
      id: 2,
      name: 'ngu',
      detail: 'an luc 9 gio'
    }
  ]

  useEffect(() => {
    document.getElementById('demo').innerHTML = detailWork[0].detail
  }, [])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <Grid container sx={{ flexFlow: 'row', height: '80%', width: '80%' }}>

        <Grid xs={3} sx={{ background: Red[400], display: 'flex', flexFlow: 'column', border: '1px black solid', borderRadius: '20px', marginRight: '5px' }}>
          <Box sx={{ display: 'flex', flexFlow: 'row', height: 'auto', paddingRight: '5px', paddingTop: '10px', justifyContent: 'space-between', marginLeft: '10px', marginTop: '20px', marginRight: '10px' }}>
            <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', height: 'auto' }}>Ten cong viec</Typography>

            <FormDialog>
            </FormDialog>

          </Box>
          {detailWork.map((value) => <Typography variant='h5' sx={{ height: '50px', marginLeft: '10px', marginTop: '20px', paddingLeft: '5px', background: Grey[400], width: 'auto', marginRight: '10px', borderRadius: '20px', display: 'flex', alignItems: 'center' }} onClick={() => {
            for (let i = 0; i < detailWork.length; i++) {
              if (value.id === detailWork[i].id) {
                document.getElementById('demo').innerHTML = detailWork[i].detail
              }
            }

          }}>{value.name}</Typography>)}
        </Grid>

        <Grid xs={9} sx={{ display: 'flex', flexFlow: 'column', border: '1px black solid', borderRadius: '20px', }}>

          <Typography variant='h3' sx={{ display: 'flex', justifyContent: 'center', height: 'auto' }}>Chi tiet</Typography>
          <Typography id='demo' sx={{ marginLeft: '10px', paddingTop: '10px' }}></Typography>
          <Input type={'file'} onChange={(e) => { setselectFile(e.target.files[0]) }}></Input>
       
          
        <LoadingButton
          onClick={handleClick}
          loading={loading}
         
          variant="outlined"
        >
          <span>Fetch data</span>
        </LoadingButton>
          <Typography id='demo1' sx={{ marginLeft: '10px', paddingTop: '10px' }}></Typography>
          {/* <Editor 
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={seteditorState}/> */}

        </Grid>


      </Grid>
      
    </Box>
  )
}

export default App
