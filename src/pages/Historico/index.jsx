import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';

import {
  selectError,
  selectData,
  selectDate,
  fetchAppointments,
  changeDate,
  deleteAppointment,
} from './historicoSlice';
import './styles.css';

import HistoricoTable from './HistoricoTable';

function Historico() {
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const date = useSelector(selectDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAppointments(date));
  }, [date]);

  const handleChangeDate = (e) => {
    e.preventDefault();
    dispatch(changeDate(e.target.value));
  };

  const handleDelete = (appointment) => {
    dispatch(deleteAppointment({ schedule: appointment, date }));
  };

  return (
    <div className="agendamento-admin-body-container">
      <div className="agendamento-admin-container">
        <div className="sair">
          <Link to="/">
            <i className="bi bi-arrow-left-square"></i>
          </Link>
        </div>
        <div className="filtros">
          <TextField
            id="date"
            label="Data"
            type="date"
            name="date"
            value={date}
            onChange={handleChangeDate}
            InputProps={{
              inputProps: { min: moment().format('YYYY-MM-DD') },
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        {error && <span id="error">{error}</span>}
        <div className="section">
          <HistoricoTable data={data} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Historico;
