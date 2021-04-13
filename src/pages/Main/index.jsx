import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../pages/Login/loginSlice';

import './styles.css';
import img1 from '../../assets/mainImg1.svg';
import img2 from '../../assets/mainImg2.svg';
import img3 from '../../assets/mainImg3.svg';

function Main() {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className="main-container">
      <div className="header">
        <h1>Agendamento</h1>
        <button onClick={handleLogout} id="botaoSair">
          Sair
        </button>
      </div>
      <div className="container">
        <div className="card" id="card1">
          <div className="title">
            <p>histórico de agendamentos</p>
          </div>
          <div className="imagem">
            <img src={img1} alt="histórico" />
          </div>
          <div className="botao">
            <Link to="/" id="conferir" className="botaoCard">
              conferir
            </Link>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="title">
            <p>realizar agendamento</p>
          </div>
          <div className="imagem">
            <img src={img2} alt="agendamento" />
          </div>
          <div className="botao">
            <Link to="/agendamento" id="agendar" className="botaoCard">
              agendar !
            </Link>
          </div>
        </div>
        <div className="card" id="card3">
          <div className="title">
            <p>dados cadastrais</p>
          </div>
          <div className="imagem">
            <img src={img3} alt="ajuste" />
          </div>
          <div className="botao">
            <Link to="/" id="ajustar" className="botaoCard">
              ajustar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
