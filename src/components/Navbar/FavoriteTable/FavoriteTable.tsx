import { Checkbox } from "@mui/material";
import { type GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type Person } from "../../../models";
import { addFavorite } from "../../../redux/states";
import { AppStore } from "../../../redux/store";

export type FavoriteTableProps = {};

const FavoriteTable: React.FC<FavoriteTableProps> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();

  const stateFavorities = useSelector((store: AppStore) => store.favorities);

  const findPerson = (person: Person) =>
    !!selectedPeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.find((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];

    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };
  const columns = [
    {
      type: "actions",
      field: "actions",
      sortable: false,
      headerName: "",
      maxWidth: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={stateFavorities}
      columns={columns}
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default FavoriteTable;
