import PropTypes from 'prop-types';
import './styles.css';

function HistoricoTable({ data = null, handleDelete }) {
  return (
    <div className="doctors-table">
      <div className="row" id="title">
        <div className="cell">Médico</div>
        <div className="cell">Horário</div>
        <div className="cell">Telefone</div>
        <div className="cell"></div>
      </div>
      {data &&
        data.map((item) => (
          <div className="row" key={item}>
            <div className="cell">Médico</div>
            <div className="cell">{item}</div>
            <div className="cell">Telefone</div>
            <div className="cell center">
              <button>
                <a
                  href={`https://wa.me/${item.phone}`}
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

HistoricoTable.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
};

export default HistoricoTable;
