import styles from "./Card.module.css";

const Card = () => {
  return (
    <a className={styles.contenedorCard}>
      <div className={styles.contenedorActivo}>
        <p className={styles.textoActivo}>Activo</p>
      </div>
      <div className={styles.contenedorInfo}>
        <h5 className={styles.textoNombre}>Luis Alzate</h5>
        <p className={styles.textoRol}>Vendedor Estrella</p>
      </div>
    </a>
  );
};

export default Card;
