import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../pages/Login/loginSlice';

import './styles.css';

function Sidebar() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className="sidebar">
      <div className="menu-links">
        <div id="home">
          <Link to="/admin">
            Início <i className="bi bi-house-fill"></i>
          </Link>
        </div>
        <div id="agendamento">
          <Link to="/">
            Agendamentos <i className="bi bi-calendar2-check"></i>
          </Link>
        </div>
        <div id="paciente">
          <Link to="/admin/pacientes">
            Pacientes <i className="bi bi-people-fill"></i>
          </Link>
        </div>
        <div id="medico">
          <Link to="/admin/medicos">
            Médicos <i className="bi bi-clipboard-plus"></i>
          </Link>
        </div>
      </div>
      <div className="sair">
        <button onClick={handleLogout}>
          <i className="bi bi-x-circle-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
