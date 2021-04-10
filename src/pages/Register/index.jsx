import { Link } from 'react-router-dom';
import './styles.css';
import registerImage from '../../assets/register.svg';

function Register() {
  return (
    <div className="register-container">
      <div id="h2">
        <h2>Cadastro</h2>
      </div>
      <div className="conta">
        <div className="info">
          <div className="img">
            <img src={registerImage} alt="" />
          </div>
        </div>
        <div className="form-conta">
          <form action="">
            <div className="inputs">
              <div className="label">
                <label htmlFor="NOME" id="nome">
                  Nome Completo
                </label>
              </div>
              <div className="campo">
                <input
                  type="text"
                  placeholder="Ex: João da Silva Neto"
                  name="NOME"
                  id="NOME"
                />
              </div>
            </div>
            <div className="inputs cpf-fone">
              <div className="fone">
                <div className="label">
                  <label htmlFor="telefone">Telefone</label>
                </div>
                <div className="campo">
                  <input
                    type="text"
                    placeholder="Ex: 33 999707070"
                    name="telefone"
                    id="telefone"
                  />
                </div>
              </div>
            </div>
            <div className="inputs">
              <div className="label">
                <label htmlFor="email">E-mail</label>
              </div>
              <div className="campo">
                <input
                  type="email"
                  placeholder="Ex: joao.neto@hotmail.com"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="label">
                <label htmlFor="senha">Senha</label>
              </div>
              <div className="campo">
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  placeholder="Coloque uma senha forte como: @Tq31A#po7"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="botoes">
        <div className="sair">
          <Link to="/login">Sair</Link>
        </div>
        <div className="btn">
          <Link href="../LOGIN/index.html">Cadastrar</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
