import Button from '@mui/material/Button';

export const ButtonHome = ({names, functionClick}) => {
  return (
    <>
      <Button size= 'small' variant="contained"
      onClick={functionClick}
      sx={{
        border: 1,
        bgcolor: 'red',
        color: 'white',
      }}> {names}</Button>
    </>
  )
}