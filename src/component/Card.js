import { Fragment, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card({ factory, user }) {
  const [click, setClick] = useState('');
  const [y, setY] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [watchlist, setwatchlist] = useState([]);


  const onClick = () => {
    if (!y && (user.watchlist.includes(parseInt(factory.fac_id))) == false) {
      axios.put(`http://localhost:8000/user/watchlist/${user.user_id}`, {
        fac_id: parseInt(factory.fac_id)
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      setY(true);
    } else {
      axios.put(`http://localhost:8000/user/watchlist/delete/${user.user_id}`, {
        fac_id: parseInt(factory.fac_id)
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      window.location.reload();
    }
  }

  return (
    <Fragment>
      {/* CARD*/}
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 py-0 px-2 mt-4 hoverCard">

        <div className="shadow-lg rounded-4 bg-light h-100 position-relative">
          {
            token && user.watchlist ? <i class={`btn bi bi-heart-fill position-absolute top-0 end-0 me-3 mt-3 stroke-white fs-5 z-100 ${user.watchlist.includes(parseInt(factory.fac_id)) || y ? `text-danger` : click}`} id="x" onClick={onClick} ></i> : null
          }
          <Link to={`/detail/${factory.fac_id}`} style={{ textDecoration: 'none' }}>
            <div className="position-absolute top-0 w-100 h-100 bg-card-contain z-50">
            </div>

            <img
              src={factory.image[0]}
              class="card-img-top border-image"
            />

            <div class="px-3">
              <div class="d-flex mt-2 fw-bold font-6">{factory.title}</div>
              <div class="d-flex fw-semibold fs-3 text-danger">
                <i class="bi bi-currency-bitcoin"></i>{factory.rate_price}
              </div>
              <p class="card-text text-success mt-2 fw-semibold">
                {factory.location}
              </p>
            </div>
            <ul class="list-group list-group-flush border-card p-2 z-0">
              <li class="list-group-item bg-transparent">
                <i class="bi bi-trophy-fill me-2 text-warning"></i>
                {factory.Certificate[0]}
              </li>
              <li class="list-group-item bg-transparent">
                <i class="bi bi-trophy-fill me-2 text-warning"></i>
                {factory.Certificate[1]}
              </li>
              <li class="list-group-item bg-transparent">
                <i class="bi bi-trophy-fill me-2 text-warning"></i>
                {factory.Certificate[2]}
              </li>
            </ul>
          </Link>
        </div>
      </div>
      {/* END CARD*/}


    </Fragment >
  );
}
