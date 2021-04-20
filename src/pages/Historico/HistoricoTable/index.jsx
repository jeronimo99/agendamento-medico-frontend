import PropTypes from 'prop-types';
import './styles.css';

function HistoricoTable({ data = null, handleDelete }) {
  return (
    <div className="doctors-table">
      <div className="row" id="title">
        <div className="cell">Dia</div>
        <div className="cell">Horário</div>
        <div className="cell">Médico</div>
        <div className="cell">Especialização</div>
      </div>
      {data &&
        data.map((item) => (
          <div className="row items" key={item}>
            <div className="cell">{item.date}</div>
            <div className="cell">{item.appointment}</div>
            <div className="cell">{item.doctor}</div>
            <div className="cell">{item.spec}</div>
          </div>
        ))}
    </div>
  );
}

HistoricoTable.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
};

export default HistoricoTable;
