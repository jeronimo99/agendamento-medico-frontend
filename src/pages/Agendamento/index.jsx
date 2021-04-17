import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  selectSpec,
  selectSpecList,
  selectDoctor,
  selectDoctorList,
  selectHoursRange,
  selectDate,
  changeSpec,
  changeDoctor,
  change,
  clear,
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
    dispatch(clear());
    dispatch(fetchSpecList());
  }, [dispatch]);

  useEffect(() => {
    if (specList.length < 1) {
      return;
    }
    dispatch(fetchDoctorList(spec));
  }, [dispatch, spec]);

  const handleChangeSpec = (e) => {
    e.preventDefault();
    dispatch(changeSpec(e.target.value));
  };

  const handleChangeDoctor = (e) => {
    e.preventDefault();
    dispatch(changeDoctor(e.target.value));
  };

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
        {/* <select name="spec" value={spec} onChange={handleChange}>
          <option value="">Especialidade</option>
          {specList &&
            specList.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select> */}
        <FormControl>
          <InputLabel id="agendamento-spec">Especialidade</InputLabel>
          <Select
            name="spec"
            labelId="agendamento-spec"
            id="agendamento-spec"
            value={spec}
            onChange={handleChangeSpec}
          >
            <MenuItem value="">Especialidade</MenuItem>
            {specList &&
              specList.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {spec && (
          <FormControl>
            <InputLabel id="agendamento-doctor">Médico</InputLabel>
            <Select
              name="doctor"
              labelId="agendamento-doctor"
              id="agendamento-doctor"
              value={doctor}
              onChange={handleChangeDoctor}
            >
              <MenuItem value="">Médico</MenuItem>
              {doctorList &&
                doctorList.map((item) => (
                  <MenuItem key={item.crm} value={item.crm}>
                    {item.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
      </form>
    </div>
  );
}

export default Agendamento;
