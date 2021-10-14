import './App.css';
import {useEffect, useState} from "react";
import ListStarships from "./components/ListStarships/ListStarships";
import TableCompare from "./components/TableCompare/TableCompare";

function App() {

    const [starships, setStarships] = useState([]);
    const [compareList, setCompareList] = useState([]);

    const toggleToCompareList = (name, optionToggle) => {
        if(optionToggle === 'add'){
            const addObject = [...starships].find((element,index)=>{
                if(element.name === name){
                    return starships[index];
                }
                return false;
            });
            setCompareList([...compareList, addObject]);
        } else if(optionToggle === 'remove'){
            const removeObject = compareList.filter((item)=> item.name !== name);
            setCompareList(removeObject);
        }
    }

    const getAllStarship = async () => {
        try {
            let urlSWAP = 'https://swapi.dev/api/starships/';
            let starshipsTemp = [];
            while (true) {
                let request = await fetch(urlSWAP);
                let result = await request.json();
                if (result.next !== null) {
                    urlSWAP = result.next;
                }
                starshipsTemp = starshipsTemp.concat(result.results);
                if (result.count === starshipsTemp.length) {
                    const filteredArray = starshipsTemp.filter(starship => starship.films.includes('https://swapi.dev/api/films/5/'));
                    setStarships(filteredArray);
                    break;
                }
            }
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getAllStarship();
    }, [])
    return (
        <div className="App">
            <ListStarships
                listStarships={starships}
                toggleToCompareList = {toggleToCompareList}
            />
            {compareList.length > 0 && <TableCompare compareList={compareList}/>}
        </div>
    );
}

export default App;
