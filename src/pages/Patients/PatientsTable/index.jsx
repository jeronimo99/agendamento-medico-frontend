import PropTypes from 'prop-types';
import './styles.css';

function PatientsTable({ data = null }) {
  return (
    <div className="patients-table">
      <div className="row title">
        <div className="cell">Nome</div>
        <div className="cell">E-mail</div>
        <div className="cell">Telefone</div>
      </div>
      {data &&
        data.map((item) => (
          <div className="row" key={item.email}>
            <div className="cell">{item.name}</div>
            <div className="cell">{item.email}</div>
            <div className="cell">{item.phone}</div>
          </div>
        ))}
    </div>
  );
}

PatientsTable.propTypes = {
  data: PropTypes.array,
};

export default PatientsTable;
