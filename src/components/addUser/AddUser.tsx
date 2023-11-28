import { GridColDef } from "@mui/x-data-grid";
import "./addUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = (props: Props) => {
  return (
    <div>
      <h1 className="header">Add User</h1>
      <div className="close">X</div>
      <div className="container">
        <label >{props.columns.}</label>
      </div>
    </div>
  );
};

export default AddUser;
