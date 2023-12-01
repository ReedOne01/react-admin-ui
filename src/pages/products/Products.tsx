import { GridColDef } from "@mui/x-data-grid";
import AddUser from "../../components/addUser/AddUser";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { useState } from "react";
import { products } from "../../data";

const Products = () => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
    },
    {
      field: "img",
      headerName: "img",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img} alt="" />;
      },
    },
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 150,
    },
    {
      field: "color",
      type: "string",
      headerName: "Color",
      width: 90,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 90,
    },
    {
      field: "producer",
      type: "string",
      headerName: "Producer",
      width: 100,
    },
    {
      field: "createdAt",
      type: "string",
      headerName: "Created At",
      width: 100,
    },
    {
      field: "instock",
      type: "string",
      headerName: "Instock",
      width: 90,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="title">
        <h2>Products</h2>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="users" columns={columns} rows={products} />
      {open && <AddUser slug="products" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
