import { Link } from 'react-router-dom';
import './styles.css';
import loginImage from '../../assets/login.svg';

function Login() {
  return (
    <div className="login-container">
      <div className="login-img">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="login-form">
        <div id="h2">
          <h2>Login</h2>
        </div>
        <form action="">
          <div className="inputs">
            <label htmlFor="login">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
              </svg>
            </label>
            <input type="email" placeholder="e-mail" name="login" id="login" />
          </div>
          <div className="inputs">
            <label htmlFor="senha">
              <svg className="svg-icon" viewBox="0 0 20 20">
                <path
                  fill="none"
                  d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"
                ></path>
                <circle fill="none" cx="9.98" cy="9.446" r="1.629"></circle>
              </svg>
            </label>
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="senha"
            />
          </div>
          <div className="btn">
            <Link to="..//PRINCIPAL/main.html" id="entrar">
              <button>Entrar</button>
            </Link>
          </div>
          <Link to="/registrar">Não possuo Cadastro</Link>
          <Link to="/">Esqueci minha senha</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
