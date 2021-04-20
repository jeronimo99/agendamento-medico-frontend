import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectError,
  selectData,
  fetchAppointments,
  deleteAppointment,
} from './historicoSlice';
import './styles.css';

import HistoricoTable from './HistoricoTable';

function Historico() {
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments());
  }, []);

  const handleDelete = (appointment) => {
    dispatch(deleteAppointment({ schedule: appointment }));
  };

  return (
    <div className="agendamento-admin-body-container">
      <div className="agendamento-admin-container">
        <div className="sair">
          <Link to="/">
            <i className="bi bi-arrow-left-square"></i>
          </Link>
        </div>
        {error && <span id="error">{error}</span>}
        <div className="section">
          <HistoricoTable data={data} handleDelete={handleDelete} />
          {console.log(data)}
        </div>
      </div>
    </div>
  );
}

export default Historico;
