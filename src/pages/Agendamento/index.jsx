import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import {
  selectSpec,
  selectSpecList,
  selectDoctor,
  selectDoctorList,
  selectSchedule,
  selectScheduleList,
  selectDate,
  selectError,
  changeSpec,
  changeDoctor,
  changeDate,
  change,
  clear,
  fetchSpecList,
  fetchDoctorList,
  fetchScheduleList,
} from './agendamentoSlice';

import './styles.css';

function Agendamento() {
  const spec = useSelector(selectSpec);
  const specList = useSelector(selectSpecList);
  const doctor = useSelector(selectDoctor);
  const doctorList = useSelector(selectDoctorList);
  const date = useSelector(selectDate);
  const schedule = useSelector(selectSchedule);
  const scheduleList = useSelector(selectScheduleList);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(clear());
    dispatch(fetchSpecList());
  }, []);

  useEffect(() => {
    if (specList.length < 1) {
      return;
    }
    dispatch(fetchDoctorList(spec));
  }, [spec]);

  useEffect(() => {
    if (!doctor || !date) {
      return;
    }
    dispatch(fetchScheduleList(doctor, date));
  }, [doctor, date]);

  const handleChangeSpec = (e) => {
    e.preventDefault();
    dispatch(changeSpec(e.target.value));
  };

  const handleChangeDoctor = (e) => {
    e.preventDefault();
    dispatch(changeDoctor(e.target.value));
  };

  const handleChangeDate = (e) => {
    e.preventDefault();
    dispatch(changeDate(e.target.value));
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
      {error && error}
      <form>
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
            onChange={handleChangeDate}
            InputProps={{ inputProps: { min: moment().format('YYYY-MM-DD') } }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        {spec && doctor && date && (
          <FormControl>
            <InputLabel id="agendamento-schedule">
              Horário de atendimento
            </InputLabel>
            <Select
              name="schedule"
              labelId="agendamento-schedule"
              id="agendamento-doctor"
              value={schedule}
              onChange={handleChange}
            >
              <MenuItem value="">Horário de atendimento</MenuItem>
              {scheduleList &&
                scheduleList.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        )}
        {spec && doctor && date && schedule && (
          <Button color="primary">Agendar</Button>
        )}
      </form>
    </div>
  );
}

export default Agendamento;
