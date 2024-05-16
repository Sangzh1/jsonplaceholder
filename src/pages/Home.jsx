import { useFetch } from "../hooks/useFetch"
import { useState } from "react";
import Todos from "../components/Todos";

const API = "https://jsonplaceholder.typicode.com"
function Home() {
  const [url, setUrl] = useState(API + "/todos");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };
  console.log(data);
  return (
    <div className="pt-16"> 
      {data && <Todos data={data}/>}
    </div>
  )
}

export default Home