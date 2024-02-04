import { Button, AppBar} from '@mui/material';
import { CartWidget } from "../common/CartWidget";


export const Navbar = () => {
 return (
  <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
    <div>
    <Button variant="contained" style={{ marginRight: '8px', marginBottom:'5px' }}>Home</Button>
        <Button variant="contained" style={{ marginRight: '8px', marginBottom:'5px'}}>Camisetas</Button>
        <Button variant="contained" style={{ marginRight: '8px', marginBottom:'5px'}} >Accesorios</Button> 
    </div>
      <div>
      <CartWidget/>
      </div>
    </AppBar>
  );
}
