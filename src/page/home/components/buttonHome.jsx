import Button from '@mui/material/Button';

export const ButtonHome = ({names, functionOnClick}) => {
  return (
    <>
      <Button size= 'small' variant="contained"
      onClick = {functionOnClick}
      sx={{
        border: 1,
        bgcolor: 'red',
        color: 'white',
      }}> {names}</Button>
    </>
  )
}