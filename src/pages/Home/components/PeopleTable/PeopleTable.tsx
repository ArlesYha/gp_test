import { Checkbox } from "@mui/material";
import { type GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type Person } from "../../../../models";
import { addFavorite } from "../../../../redux/states";
import { AppStore } from "../../../../redux/store";

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;
  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const favoritePeople = useSelector((store: AppStore) => store.favorities);

  const findPerson = (person: Person) =>
    !!favoritePeople.find((p) => p.id === person.id);
  const filterPerson = (person: Person) =>
    favoritePeople.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      width: 50,
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
      headerName: "Categories",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happiness",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: pageSize,
          },
        },
      }}
      pageSizeOptions={[5, 10]}
      // checkboxSelection
      disableRowSelectionOnClick
    />
  );
};

export default PeopleTable;
