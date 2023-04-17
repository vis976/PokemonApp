import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import logo from "../../assets/logo.png"
import "./style.css"

const Pokemon = () => {
    const [pokeData, setPokeData] = useState([]);
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [searchData, setSearchData] = useState([])

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])

    // Search bar functionality : Filtering pokemon-data in terms of input value and storing in search input box.
    
    useEffect(() => {
        if (pokeData && pokeData.length) {
            const results = pokeData.filter((item) => item.name.includes(search));
            setSearchData(results);
        }
    }, [pokeData, search]);

    return (
        <>
            <div className="container-header">
                <div className="left-box">
                    <img src={logo} alt="" />
                    <h2>Search for Pokemon by name</h2>
                </div>
                <div className="right-box">
                    <input placeholder="What Pokemon you are looking for" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="container">

                <div className="left-content">

                    {/* Displaying search data - if no input value in search bar, displaying all pokemon*/}

                    {searchData.length !== undefined
                        ? <Card pokemon={searchData} loading={loading} infoPokemon={poke => setPokeDex(poke)} /> :
                        <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    }
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="detail-content">
                    <Pokeinfo data={pokeDex} />
                </div>
                {/* <Pokeinfo data={pokeDex} /> */}
            </div>
        </>
    )
}
export default Pokemon;
