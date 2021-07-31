import { useEffect, useState } from "react";
import { Herois, Wrapper, Input, Select, A, Name } from "./styles";

export function App() {
  const [input, setInput] = useState(""); // salva o valor digitado pelo usuario(nome)
  const [select, setSelect] = useState(""); // salva o valor escolhido no select pelo usuario(classes)

  const [fullList, setFullList] = useState([]);
  const [filterSelect, setFilterSelect] = useState([]);
  const [champs, setChamps] = useState([]);

  useEffect(() => {
    const fetchChampsLol = async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json"
      );
      const result = await response.json();
      setFilterSelect(Object.values(result.data));
      setFullList(Object.values(result.data));
      setChamps(Object.values(result.data));
    };
    fetchChampsLol();
  }, []);

  useEffect(() => {
    console.log("render");
    console.log(input);
  }, [input]);

  function handleChange(e) {
    const valorInput = e.target.value;
    setInput(valorInput); //seta o input como (a)
    // filterSelect = []
    const filteredChamps = filterSelect.filter((c) =>
      c.id.toUpperCase().includes(valorInput.toUpperCase())
    );
    setChamps(filteredChamps); //setou os campeões com (ahri) na tela
  }

  function selectChange(e) {
    const valorSelect = e.target.value;
    setSelect(valorSelect); //seta "" no select

    let filteredClasses = fullList;

    if (valorSelect !== "") {
      filteredClasses = fullList.filter((c) => c.tags.includes(valorSelect));
    }
    //Champeõs Suport ex: todos
    //valorInput = (ahri)
    // 1 valor = NAMI.includes(AHRI)
    const filteredInput = filteredClasses.filter((c) =>
      c.id.toUpperCase().includes(input.toUpperCase())
    );
    //filterdInput = []
    setChamps(filteredInput);
    setFilterSelect(filteredClasses);
  }

  return (
    <div>
      <Wrapper>
        <Input
          type="text"
          placeholder="Campeão"
          value={input}
          onChange={handleChange}
        />
        <Select value={select} onChange={selectChange}>
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
