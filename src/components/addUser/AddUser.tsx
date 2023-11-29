import { GridColDef } from "@mui/x-data-grid";
import "./addUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = (props: Props) => {
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h2 className="header">Add new {props.slug}</h2>
        <form>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((item) => (
              <div className="item">
                <label>{item.headerName}</label>
                <input type={item.type} placeholder={item.field} />
              </div>
            ))}
          <button className="btn">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
