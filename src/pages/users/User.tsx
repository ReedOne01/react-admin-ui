import { Link } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import { userRows } from "../../data";
import "./user.scss";
import {
  // DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import AddUser from "../../components/addUser/AddUser";

const User = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },

    {
      field: "img",
      headerName: "avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} />;
      },
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: true,
      type: "string",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      editable: true,
      type: "string",
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      type: "email",
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone Num",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      type: "Date || string",
      width: 110,
      // editable: true,
    },
    // {
    //   field: "fullName",
    //   headerName: "Full name",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    // },
    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="users">
      <div className="title">
        <h2>Users</h2>
        <button onClick={() => setOpen(true)}>Add New Users</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <AddUser slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default User;
