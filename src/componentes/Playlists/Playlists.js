import React, {  useEffect, useState } from "react";
import Musicas from "../Musicas/Musicas";
import axios from "axios";

// const playlistsLocal = [
//     {
//         id: 1,
//         name: "Playlist 1"
//     },
//     {
//         id: 2,
//         name: "Playlist 2"
//     },
//     {
//         id: 3,
//         name: "Playlist 3"
//     },
//     {
//         id: 4,
//         name: "Playlist 4"
//     },
// ]
function Playlists() {
    const [playlists, setPlaylists] = useState([])
    
    //Buscando playlists da API
    const getAllPlaylists = ()=>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const config = {headers:{Authorization:"tiberio-santos-ferreira-barbosa"}};

        axios.get(url, config)
        .then((response)=>{
            //console.log(response.data)
            setPlaylists(response.data.result.list)
        })
        .catch((error)=>{
            //console.log(error)
            alert(error)
        })
    }

    //Renderizando as playlists apenas uma vez
    useEffect(()=>{
        getAllPlaylists()
    }, [])
  
    return (
        <div>
            {playlists.map((playlist) => {
                return <Musicas key={playlist.id} playlist={playlist}/>
            })}

        </div>
    );
}

export default Playlists;
