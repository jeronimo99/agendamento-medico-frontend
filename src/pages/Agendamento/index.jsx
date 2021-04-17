import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import {
  selectSpec,
  selectSpecList,
  selectDoctor,
  selectDoctorList,
  selectHoursRange,
  selectDate,
  change,
  fetchSpecList,
  fetchDoctorList,
} from './agendamentoSlice';

import './styles.css';

function Agendamento() {
  const spec = useSelector(selectSpec);
  const specList = useSelector(selectSpecList);
  const doctor = useSelector(selectDoctor);
  const doctorList = useSelector(selectDoctorList);
  const date = useSelector(selectDate);
  const hoursRange = useSelector(selectHoursRange);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchSpecList());
  }, [dispatch]);

  useEffect(() => {
    if (specList.length < 1) {
      return;
    }
    dispatch(fetchDoctorList(spec));
  }, [dispatch, spec]);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(change({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="agendamento-container">
      <Link to="/">
        <i className="bi bi-arrow-left-square"></i>
      </Link>
      <form>
        <select name="spec" value={spec} onChange={handleChange}>
          <option value="">Especialidade</option>
          {specList &&
            specList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
        {spec && (
          <select name="doctor" value={doctor} onChange={handleChange}>
            <option value="">Médico</option>
            {doctorList &&
              doctorList.map((item) => (
                <option key={item.crm} value={item.crm}>
                  {item.name}
                </option>
              ))}
          </select>
        )}
        {spec && doctor && (
          <TextField
            id="date"
            label="Data"
            type="date"
            name="date"
            value={date}
            onChange={handleChange}
            InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        {spec && doctor && (
          <TextField
            id="hoursRange"
            label="Horário de atendimento"
            type="hoursRange"
            name="hoursRange"
            value={hoursRange}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        <InputLabel id="horario">Horário</InputLabel>
      </form>
    </div>
  );
}

export default Agendamento;
