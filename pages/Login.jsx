import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Login() {
  const [user,setUser]=useState('');
  const [pass,setPass]=useState('');

  return (
    <Box sx={{width:300, m:'50px auto', display:'flex', flexDirection:'column', gap:2}} dir="rtl">
      <h2 style={{textAlign:'center'}}>דף כניסה</h2>
      <TextField label="שם משתמש" value={user} onChange={e=>setUser(e.target.value)} />
      <TextField label="סיסמה" type="password" value={pass} onChange={e=>setPass(e.target.value)} />
      <Button variant="contained">כניסה</Button>
    </Box>
  );
}
