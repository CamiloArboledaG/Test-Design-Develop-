import { Avatar, Drawer } from "@mui/material";
import styles from "./BarraLateral.module.css";
import PersonIcon from "@mui/icons-material/Person";

const BarraLateral = () => {
  return (
    <Drawer
      sx={{
        width: 202,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: 202,
          boxSizing: "none",
          boxShadow: "2px 2px 10px 0px #C1C1C140",
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={styles.contenedorUp}>
        <Avatar
          alt="Avatar Usuario"
          src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?t=st=1654462274~exp=1654462874~hmac=18261b0202d6dd7e151f4f6803eb990872ac0dee7dd7d250009d5a06bab0a1e1&w=996"
          sx={{ width: 100, height: 100 }}
        />
        <div className={styles.contenedorTextoUp}>
          <h5>Lorena Alzate</h5>
          <p>Lorena@gmail.com</p>
        </div>
      </div>
      <div className={styles.contenedorCenter}>
        <a className={styles.contenedorSeccion}>
          <PersonIcon></PersonIcon>
          <h5>Sección</h5>
        </a>
        <a className={styles.contenedorSeccionSelecto}>
          <PersonIcon></PersonIcon>
          <h5>Usuarios</h5>
        </a>
        <a className={styles.contenedorSeccion}>
          <PersonIcon></PersonIcon>
          <h5>Sección</h5>
        </a>
        <a className={styles.contenedorSeccion}>
          <PersonIcon></PersonIcon>
          <h5>Sección</h5>
        </a>
        <a className={styles.contenedorSeccion}>
          <PersonIcon></PersonIcon>
          <h5>Sección</h5>
        </a>
      </div>
      <div className={styles.contenedorEnd}>
        <div className={styles.contenedorBoton}>
          <button>
            <h6>Cerrar</h6>
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default BarraLateral;
