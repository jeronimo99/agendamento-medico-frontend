import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { register, selectIsLoading, selectError } from './registerSlice';
import Loader from 'react-loader-spinner';

import './styles.css';
import registerImage from '../../assets/register.svg';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Nome muito curto!')
    .max(50, 'Nome muito longo!')
    .required('Obrigatório'),
  phone: Yup.string().required('Obrigatório'),
  email: Yup.string()
    .email('Email inválido')
    .lowercase('Letras minúsculas')
    .required('Obrigatório'),
  password: Yup.string().min(6, 'Senha muito curta!').required('Obrigatório'),
});

function Register() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(register(values));
      formik.resetForm();
    },
  });

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
          <form>
            <div className="inputs">
              <div className="label">
                <label htmlFor="name">Nome Completo</label>
                {formik.touched.name && formik.errors.name && (
                  <span>{formik.errors.name}</span>
                )}
              </div>
              <div className="campo">
                <input
                  type="text"
                  placeholder="Ex: João da Silva Neto"
                  name="name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="inputs cpf-fone">
              <div className="fone">
                <div className="label">
                  <label htmlFor="phone">Telefone</label>
                  {formik.touched.phone && formik.errors.phone && (
                    <span>{formik.errors.phone}</span>
                  )}
                </div>
                <div className="campo">
                  <input
                    type="text"
                    placeholder="Ex: 33 999707070"
                    name="phone"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
            <div className="inputs">
              <div className="label">
                <label htmlFor="email">E-mail</label>
                {formik.touched.email && formik.errors.email && (
                  <span>{formik.errors.email}</span>
                )}
              </div>
              <div className="campo">
                <input
                  type="email"
                  placeholder="Ex: joao.neto@hotmail.com"
                  name="email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="inputs">
              <div className="label">
                <label htmlFor="password">Senha</label>
                {formik.touched.password && formik.errors.password && (
                  <span>{formik.errors.password}</span>
                )}
              </div>
              <div className="campo">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Coloque uma senha forte como: @Tq31A#po7"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {isLoading && <Loader type="Oval" height={40} width={40} />}
              {error && <span id="error">{error}</span>}
            </div>
          </form>
        </div>
      </div>
      <div className="botoes">
        <div className="sair">
          <Link to="/login">Sair</Link>
        </div>
        <div className="btn">
          <button type="submit" onClick={formik.handleSubmit}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
