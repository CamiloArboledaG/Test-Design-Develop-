import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Search, SearchIconWrapper, StyledInputBase } from "../Search";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./BarraSuperior.module.css";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const BarraSuperior = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 202px)`,
        ml: `202px`,
        boxShadow: "none",
        bgcolor: "white",
        color: "black",
        padding: "0px 64px",
        height: "85px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
        <h1>Usuarios</h1>
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{
                    "aria-label": "Search",
                }}
            />
        </Search>
        <div className={styles.contenedorFiltros}>
            <a className={styles.boton}>
                <FilterAltIcon/>
            </a>
            <a className={styles.boton}>
                <AttachMoneyIcon/>
            </a>
            <a className={styles.boton}>
                <LocationOnIcon/>
            </a>
        </div>
    </AppBar>
  );
};

export default BarraSuperior;
