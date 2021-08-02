import { useEffect, useState } from "react";
import { Herois, Wrapper, Input, Select, A, Name } from "../champ-list/styles";

export default function GabrielChampList() {
  const [fullList, setFullList] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    const fetchChampsLol = async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json"
      );
      const result = await response.json();
      const transformedValue = Object.values(result.data);
      setFullList(transformedValue);
      setChamps(transformedValue);
    };
    fetchChampsLol();
  }, []);

  useEffect(() => {
    const filteredChamps = fullList.filter((champ) => {
      const isMatched = champ.id.toUpperCase().includes(input.toUpperCase());
      if (isMatched && select === "") return true;

      const isTagged = champ.tags.includes(select);
      return isMatched && isTagged;
    });

    setChamps(filteredChamps);
  }, [input, select, fullList]);

  return (
    <div>
      <Wrapper>
        <Input
          type="text"
          placeholder="Campeão"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value={""}>Todos</option>
          <option value={"Fighter"}> Lutador </option>
          <option value={"Mage"}> Mago </option>
          <option value={"Assassin"}> Assasino </option>
          <option value={"Marksman"}>atirador</option>
          <option value={"Support"}> Suporte </option>
          <option value={"Tank"}> Tanke </option>
        </Select>
      </Wrapper>
      <Herois>
        {champs.map((c) => (
          <A
            key={c.id}
            href={`https://br.leagueoflegends.com/pt-br/champions/${c.id.toLowerCase()}`}
          >
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${c.id}_0.jpg`}
              alt="champions"
            ></img>
            <Name>{c.id}</Name>
          </A>
        ))}
      </Herois>
    </div>
  );
}
