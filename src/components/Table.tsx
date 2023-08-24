import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TableData from "./dataTable";
import styles from "./Project.module.scss";


const Table = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User ID",
      width: 90,
    },
    {
      field: "title",
      headerName: "Title",
      width: 400,
    },
    {
      field: "body",
      headerName: "Body",
      width: 850,
    },
  ];

  const rows = TableData;
  return (
    <>
      <div className={styles.table}>
        <span>Table</span>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </>
  );
};

export default Table;
