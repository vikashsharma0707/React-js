import { Link, Outlet } from "react-router-dom";








const Services=()=>{
    return(
        <>
          <h1>this is services page</h1>
          <table>
             <tr>
              <td>
                <Link to="companyservices">compmay services</Link>
                <br/><br/>
                <Link to="productservies">product servies</Link>
                <br/><br/>
                <Link to="sellsservices">sell services</Link>
              </td>

              <td>
                <Outlet/>
              </td>
             </tr>

          </table>
        </>
    )
}

export default Services;