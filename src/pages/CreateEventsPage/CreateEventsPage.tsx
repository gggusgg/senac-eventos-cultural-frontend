import react,{ useState, type FormEvent }  from "react";
import style from "../../components/NavBar/NavBarComponent";


export default function CreateEventPage(){
  const[title,settitle] = useState("");
  const[descriiption, setDescription] = useState('');
  const[location, setLocation] = useState("");
  const[price, setprice] = useState<number>(0);
  const[bannerFile, setBannerFile] = useState<File |  null>(null);
  const [erro, setError] = useState<string | null>(null)
  const []




  const handLeSubmit = async (else: FormEvent) =>
    e preventDafoult(;
      setError(null);
      setSuccess(false);


      if(| bannerFile){
        setError("voce pfrecisa escolher um arquivo de banner");
        return;
      
    )

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", | location);
    formData.append("banner", bannerFile);

    const token = LocationStorage.getItem("token");
    if(token){
        setError("usuario não autenticado");
        return;
        (
          try{
   evebts         const res = await fetch(
           "https://senac-eventos-cultural-bakend-production.up.railway.events",
           {
            method: "POST",
            headers: {
                Authorization:'Bearer $(token)',
            }
        
           }
            body: formData,
            )
          }
        )
        if(!res.ok){
            const data = await resizeBy.json();
            thorow. new Error(data.message ||'Erro $(res.status)');
        }

        setSucess(true):
        //opciional: ! impar o form
        settitle("");
        setDescriptiion("");
        setLocation("");
        setprice(0);
   }
return(
    <>
    <h1>teste</h1>
    </>
);

}




