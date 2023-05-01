import RoutesCustom from "../../routes";

function Galeria(props) {

    let { value1, value2 } = props;  //desestruturação

    return(
      <div>
      <div className="header-custom">
      <h2 className="title-page" >Galeria</h2>
       <RoutesCustom />
      </div>
    </div>
    )
}

export default Galeria;