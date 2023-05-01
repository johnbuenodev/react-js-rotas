import { Router, useParams } from "react-router-dom";
import RoutesCustom from "../../routes";

function Lista() {


  const { id } = useParams();

    return(
     <div>
     <div className="header-custom">
     <h2 className="title-page" >Lista</h2>
      <RoutesCustom />
     </div>
     <div>
      <h3>Id passagem de parametro na rota: {id}</h3>
     </div>
   </div>
    )
}

export default Lista;