import { useEffect, useState } from "react";
import { Herois, Name, A, Wrapper, Input } from "./styles";
export function App() {
  const [champs, setChamps] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchChampsLol = async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/11.14.1/data/pt_BR/champion.json"
      );
      const { data } = await response.json();
      setChamps(data);
    };
    fetchChampsLol();
  }, []);

  const sos = Object.values(champs).map((n) => n.id);
  const sos2 = sos.filter((c) => c.includes(input));

  const lol = sos2.map((n, index) => (
    <A
      href={`https://br.leagueoflegends.com/pt-br/champions/${n.toLowerCase()}`}
    >
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${
          n.charAt(0).toUpperCase() + n.substr(1)
        }_0.jpg`}
        alt="champions"
        key={index}
      ></img>
      <Name>{n}</Name>
    </A>
  ));

  function handleChange(e) {
    setInput(e.target.value.charAt(0).toUpperCase() + e.target.value.substr(1));
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
      </Wrapper>
      <Herois>{lol}</Herois>
    </div>
  );
}
