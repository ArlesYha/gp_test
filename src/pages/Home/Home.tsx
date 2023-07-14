import React, { useEffect } from "react";
import { People } from "../../data/people";
import { addPeople } from "../../redux/states";
import { PeopleTable } from ".";
import { useDispatch } from "react-redux";

export type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
