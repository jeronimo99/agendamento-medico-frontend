import PropTypes from 'prop-types';
import './styles.css';

function DoctorsTable({ data = null, handleDelete }) {
  return (
    <div className="doctors-table">
      <div className="row" id="title">
        <div className="cell">Nome</div>
        <div className="cell">CRM</div>
        <div className="cell">Especialidade</div>
        <div className="cell"></div>
      </div>
      {data &&
        data.map((item) => (
          <div className="row" key={item._id}>
            <div className="cell">{item.name}</div>
            <div className="cell">{item.crm}</div>
            <div className="cell">{item.spec}</div>
            <div className="cell center">
              <button onClick={() => handleDelete(item._id)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

DoctorsTable.propTypes = {
  data: PropTypes.array,
  handleDelete: PropTypes.func.isRequired,
};

export default DoctorsTable;
