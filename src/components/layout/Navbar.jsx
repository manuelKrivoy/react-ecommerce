import { Button, Stack } from '@mui/material';
import { CartWidget } from "../common/CartWidget";


export const Navbar = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', background: "lightblue" }}>
      <div>
        <Button variant="contained" style={{ marginRight: '8px' }}>Home</Button>
        <Button variant="contained" style={{ marginRight: '8px' }}>Camisetas</Button>
        <Button variant="contained">Accesorios</Button>
      </div>
          <CartWidget ></CartWidget>
    </header>
  )
}
