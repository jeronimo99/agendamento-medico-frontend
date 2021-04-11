import { useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

import Sidebar from '../../components/Sidebar';
import {
  selectIsLoading,
  selectError,
  selectFilteredData,
  selectFilter,
  fetchPatients,
  clear,
  changeFilter,
} from './patientsSlice';
import './styles.css';

import PatientsTable from './PatientsTable';

function Patients() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectFilteredData);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(clear());
    dispatch(fetchPatients());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="patients-body-container">
      <div className="patients-container">
        <Sidebar />
        <div className="section">
          <h1>Patients</h1>
          <div style={{ margin: '20px 0' }}>
            <h3>Filtro</h3>
            <input value={filter} onChange={handleChange} />
          </div>
          {isLoading && <Loader type="Oval" height={40} width={40} />}
          {error && <span id="error">{error}</span>}
          <PatientsTable data={data} />
        </div>
      </div>
    </div>
  );
}

export default Patients;
