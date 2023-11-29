import style from "./navbarStyle.module.css";
import { useNavigate } from "react-router-dom";
import home from "../../imgs/home.svg";
import imgUser from "../../imgs/userIcon.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={style.containerNavbar}>
      <ul className={style.navList}>
        <li
          className={style.navItem}
          id={style.startIcon}
          onClick={() => navigate("/")}
        >
          <img src={home} alt={"Home"} />
        </li>
        <li className={style.navItem} onClick={() => navigate("/newUser")}>
          NUEVO USUARIO
        </li>
        <li className={style.navItem} onClick={() => navigate("/ingresos")}>
          INGRESOS
        </li>
        <li className={style.navItem} onClick={() => navigate("/egresos")}>
          EGRESOS
        </li>
        <li
          className={style.navItem}
          onClick={() => navigate("/selecUser")}
          id={style.imgSelectUser}
        >
          <img title={'Selecionar Usuario'} id={style.imgSelectUser} src={imgUser} alt={"Icono usuarios"} />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
