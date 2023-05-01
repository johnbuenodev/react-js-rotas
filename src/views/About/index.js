import RoutesCustom from "../../routes";

function About(props) {

  let { value1, value2 } = props;  //desestruturação

    return(
      <div>
      <div className="header-custom">
      <h2 className="title-page" >Sobre</h2>
       <RoutesCustom />
      </div>
    </div>
    )
}

export default About;