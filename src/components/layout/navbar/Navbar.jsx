import { Button, AppBar } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px" }}
    >
      <div>
        <Button variant="contained" sx={{ marginRight: "8px", marginBottom: "5px" }}>
          Home
        </Button>
        <Button variant="contained" sx={{ marginRight: "8px", marginBottom: "5px" }}>
          Selecciones
        </Button>
        <Button variant="contained" sx={{ marginRight: "8px", marginBottom: "5px" }}>
          Clubes
        </Button>
        <Button variant="contained" sx={{ marginRight: "8px", marginBottom: "5px" }}>
          Accesorios
        </Button>
      </div>
      <div>
        <CartWidget />
      </div>
    </AppBar>
  );
};
