import React from "react";
import ChampList from "./champList";
import { Input, Wrepper, Bottom, Select } from "./styles";

export default function Main() {
  return (
    <div>
      <Wrepper>
        <Input type="text" placeholder="Campeão" />
        <Bottom type="submit">Buscar</Bottom>
        <Select value="type">
          <option value="">Tipo </option>
          <option value="lutador">Lutador</option>
          <option value="mago">Mago</option>
          <option value="assassino">Assassino</option>
          <option value="tank">Tank</option>
        </Select>
      </Wrepper>
      <ChampList />
    </div>
  );
}
