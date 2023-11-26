import DataTable from "../../components/dataTable/DataTable";
import "./user.scss";

const User = () => {
  return (
    <div className="users">
      <div className="title">
        <h2>Users</h2>
        <button>Add New Users</button>
      </div>
      <DataTable />
    </div>
  );
};

export default User;
