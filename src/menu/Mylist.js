import { Fragment, useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";
import DonotHave from "../component/DonotHave";
import Loading from "../component/Loading";
import axios from "axios";

export default function Mylist() {
  const [factory, setFactory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [data_user, setdata_user] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);
        const user = await axios.get(`http://localhost:8000/user/getuser`, {
          headers: {
            token: token
          }
        });
        const factory = await axios.get(
          `http://localhost:8000/factory/watchlist?search=${user.data.watchlist}`
        );
        setFactory(factory.data);
        setUser(user.data);
      } catch (e) {
        console.error(e);

      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  if (loading) return <Loading />

  console.log(factory);

  return (
    <Fragment>
      <Navbar onNav="mylist" />
      <div className="container-fluid pt-4 bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="border-bottom border-3 pb-2 border-primary">
              <div className="fs-4 fw-bold text-uppercase">
                <i class="bi bi-heart-fill fs-5 me-2 text-danger"></i>
                Mylist
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="container-fluid bg-body-purple">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
              {factory.length > 0 ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {factory.map((factoryData) => (
                    <Card
                      key={factoryData.fac_id}
                      factory={factoryData}
                      user={user}
                    />
                  ))}
                </div>
              ) : (
                <DonotHave />
              )}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
