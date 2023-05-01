import RoutesCustom from "../../routes";

function ErrorPage() {
    return(
     <div>
     <div className="header-custom">
     <h2 className="title-page" >Error</h2>
      <RoutesCustom />
     </div>
     <div id="error-page">
      <h1>Oops! 404</h1>
     </div>
   </div>
    )
}

export default ErrorPage;