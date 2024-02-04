import { Button, AppBar} from '@mui/material';
import { CartWidget } from "../common/CartWidget";
import Logo from '../common/Logo';


export const Navbar = () => {
 return (
<AppBar position="static" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div style={{ display: 'flex' }}>
        <Logo></Logo>
        <Button variant="contained" style={{ marginRight: '8px' }}>Home</Button>
        <Button variant="contained" style={{ marginRight: '8px' }}>Camisetas</Button>
        <Button variant="contained">Accesorios</Button>
      </div>
        <CartWidget />
    </AppBar>
  );
}
