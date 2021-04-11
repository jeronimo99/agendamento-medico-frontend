import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../pages/Login/loginSlice';

import './styles.css';
import adminImage from '../../assets/adminMain.svg';

function Admin() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className="admin-body-container">
      <div className="admin-container">
        <div className="sidebar">
          <div className="menu-links">
            <div id="home">
              <NavLink to="/admin">
                Início <i className="bi bi-house-fill"></i>
              </NavLink>
            </div>
            <div id="agendamento">
              <NavLink to="/">
                Agendamentos <i className="bi bi-calendar2-check"></i>
              </NavLink>
            </div>
            <div id="paciente">
              <NavLink to="/">
                Pacientes <i className="bi bi-people-fill"></i>
              </NavLink>
            </div>
            <div id="medico">
              <NavLink to="/">
                Médicos <i className="bi bi-clipboard-plus"></i>
              </NavLink>
            </div>
          </div>
          <div className="sair">
            <button onClick={handleLogout}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          </div>
        </div>
        <div className="section">
          <img src={adminImage} alt="admin" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
