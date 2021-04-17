import { useLayoutEffect } from 'react';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Loader from 'react-loader-spinner';

import Sidebar from '../../components/Sidebar';
import {
  selectIsLoading,
  selectError,
  selectData,
  addDoctor,
  fetchDoctors,
  deleteDoctor,
  clear,
} from './doctorsSlice';
import './styles.css';

import DoctorsTable from './DoctorsTable';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Nome muito curto!')
    .max(50, 'Nome muito longo!')
    .required('Obrigatório'),
  crm: Yup.string().required('Obrigatório'),
  spec: Yup.string().required('Obrigatório'),
});

function Doctors() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      crm: '',
      spec: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addDoctor(values));
      formik.resetForm();
    },
  });

  useLayoutEffect(() => {
    dispatch(clear());
    dispatch(fetchDoctors());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteDoctor(id));
  };

  return (
    <div className="doctor-body-container">
      <Sidebar />
      <div className="doctor-container">
        <div className="section">
          <form onSubmit={formik.handleSubmit}>
            <div className="doctor-inputs">
              <div className="name-input">
                <div className="label">
                  <label htmlFor="name">Nome Completo</label>
                  {formik.touched.name && formik.errors.name && (
                    <span>{formik.errors.name}</span>
                  )}
                </div>
                <div className="campo">
                  <input
                    type="text"
                    placeholder="Ex: Dr. Roberto Dias"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="crm-input">
                <div className="label">
                  <label htmlFor="crm">CRM</label>
                  {formik.touched.crm && formik.errors.crm && (
                    <span>{formik.errors.crm}</span>
                  )}
                </div>
                <div className="campo">
                  <input
                    type="text"
                    placeholder="Ex: 015482/MG"
                    name="crm"
                    id="crm"
                    value={formik.values.crm}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              <div className="spec-input">
                <div className="label">
                  <label htmlFor="spec">Especialização</label>
                  {formik.touched.spec && formik.errors.spec && (
                    <span>{formik.errors.spec}</span>
                  )}
                </div>
                <div className="campo">
                  <input
                    type="text"
                    placeholder="Ex: Cardiologista"
                    name="spec"
                    id="spec"
                    value={formik.values.spec}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              {isLoading && <Loader type="Oval" height={40} width={40} />}
              {error && <span id="error">{error}</span>}
              <button type="submit" className="add-doc">
                <i className="bi bi-person-plus-fill"></i>Cadastrar
              </button>
            </div>
          </form>
          <DoctorsTable data={data} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Doctors;
