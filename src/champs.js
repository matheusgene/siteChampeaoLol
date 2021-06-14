import React from 'react';
import  {Names, Span, Link, A, Input} from './styles'






export default function Champs() {
const champs = [{
    name: 'Aatrox',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/aatrox/'

},{
    name: 'Ahri',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/ahri/'
},
{
    name: 'Akali',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/akali/'
},
{
    name: 'Alistar',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/alistar/'
},{
    name: 'Amumu',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/amumu/'
},{
    name: 'LeeSin',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg',
    link: 'https://www.youtube.com/watch?v=2GUpsTTRFFE'
},{
    name: 'Annie',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/annie/'
},{
    name: 'Aphelios',
    url: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg',
    link: 'https://br.leagueoflegends.com/pt-br/champions/aphelios/'
},]
    
    const champ = champs.map(n =><A href={n.link}> <Span><img src={n.url} alt=""></img> <Names><h1>{n.name}</h1></Names></Span></A>)

    
    
    return ( 
        
    
       <div>
        <Input type="text" placeholder="Campeão" />
        <select value='type'>
            <option> </option>    
            <option value='lutador'>Lutador</option>
            <option value='mago'>Mago</option>
            <option value='assassino'>Assassino</option>
            <option value='tank'>Tank</option>
        </select>
            <Link>
            {champ}
           </Link>
            


            
        </div>
     
    );
    };