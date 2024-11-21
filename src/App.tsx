import { TextField, Button, Box } from "@mui/material"

const App = () => {
  const [ input, setInput ] = useState<string>("") 

  return (
    <form>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        gap={2}
      >
        <TextField onChange={(e) => setInput(e.target.value)} id="outlined-basic" label="meno.priezvisko" variant="outlined" />
        <Button onClick={() => handleRedirect(input)} variant="contained">Presmerovať</Button>
      </Box>
    </form>
  )
}

const handleRedirect = (input: string) => {
  window.location.href = `http://sql.spsepn.edu.sk/~${input}@spsepn.edu.sk/default.html`
}

export default App