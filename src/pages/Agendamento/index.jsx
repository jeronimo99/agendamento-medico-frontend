import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { selectDate, change } from './agendamentoSlice';
import { WORK_TIMES } from '../../utils/constants';

import './styles.css';

function Agendamento() {
  const date = useSelector(selectDate);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(change({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="agendamento-container">
      <Link to="/">
        <i class="bi bi-arrow-left-square"></i>
      </Link>
      <form>
        <TextField
          id="date"
          label="Data"
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel id="horario">Horário</InputLabel>
        <Select
          labelId="horario"
          id="horario"
          // value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </form>
    </div>
  );
}

export default Agendamento;
