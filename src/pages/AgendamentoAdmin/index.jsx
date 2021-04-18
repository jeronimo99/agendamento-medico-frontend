import { useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Loader from 'react-loader-spinner';

import Sidebar from '../../components/Sidebar';
import {
  selectIsLoading,
  selectError,
  selectData,
  selectDoctor,
  selectDoctorList,
  selectDate,
  fetchDoctors,
  fetchAppointments,
  changeDoctor,
  changeDate,
  clear,
} from './agendamentoAdminSlice';
import './styles.css';

import AgendamentoAdminTable from './AgendamentoAdminTable';

function Doctors() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);
  const doctor = useSelector(selectDoctor);
  const date = useSelector(selectDate);
  const doctorList = useSelector(selectDoctorList);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(clear());
    dispatch(fetchDoctors());
  }, [dispatch]);

  useEffect(() => {
    if (doctor) {
      dispatch(fetchAppointments(doctor, date));
    }
  }, [doctor, date]);

  const handleChangeDoctor = (e) => {
    e.preventDefault();
    dispatch(changeDoctor(e.target.value));
  };

  const handleChangeDate = (e) => {
    e.preventDefault();
    dispatch(changeDate(e.target.value));
  };

  const handleDelete = (id) => {};

  return (
    <div className="agendamento-admin-body-container">
      <Sidebar />
      <div className="agendamento-admin-container">
        <div className="filtros">
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
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {doctor && (
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
        )}
        {isLoading && <Loader type="Oval" height={40} width={40} />}
      </div> 
        {error && <span id="error">{error}</span>}
        <div className="section">
          <AgendamentoAdminTable data={data} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default Doctors;
