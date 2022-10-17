import { useEffect, useState } from 'react';
import './Search.css'

const Search = () => {
  //seteo de hooks useState
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  //funcion para traer datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";
  const showData = async () => {
    const response = await fetch (URL);
    const data = await response.json();
    setUsers(data);
  }
  //metodo de filtrado
  let results=[];
  if(!search)
  {
    results = users;
  }else{
    results = users.filter((dato)=>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value)
  }
  useEffect(()=>{
    showData();
  },[])

  //renderizado de vista
  return (
    <div>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>

        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='searchHtr text-white'>
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
                {results.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
  )
};

export default Search;
