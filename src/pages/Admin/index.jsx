import './styles.css';
import adminImage from '../../assets/adminMain.svg';
import Sidebar from '../../components/Sidebar';

function Admin() {
  return (
    <div className="admin-body-container">
      <div className="admin-container">
        <Sidebar />
        <div className="section">
          <img src={adminImage} alt="admin" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
