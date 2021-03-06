import PropTypes from 'prop-types';
import './styles.css';
import { sortArray } from '../../../utils/functions';

function AgendamentoAdminTable({ data = null, handleDelete }) {
  return (
    <div className="doctors-table">
      <div className="row" id="title">
        <div className="cell">Paciente</div>
        <div className="cell">Horário</div>
        <div className="cell">Telefone</div>
        <div className="cell"></div>
      </div>
      {data &&
        sortArray(data).map((item) => (
          <div className="row" key={item.appointment}>
            <div className="cell">{item.name}</div>
            <div className="cell">{item.appointment}</div>
            <div className="cell">{item.phone}</div>
            <div className="cell center">
              <button>
                <a
                  href={`https://wa.me/550${item.phone}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </button>
              <button onClick={() => handleDelete(item.appointment)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

AgendamentoAdminTable.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
};

export default AgendamentoAdminTable;
