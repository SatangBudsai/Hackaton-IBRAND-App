import { Fragment, useState } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";
import TableNoneDetail from "./component/TableNoneDetail";

export function TB_6_Produce({ className }) {
  const [token, setToken] = useState(localStorage.getItem("status"));
  const [admin, setAdmin] = useState(parseInt(localStorage.getItem("admin")));

  if (!token) {
    window.location.href = "/login";
  }

  if (admin != 1) {
    window.location.href = "/";
  }
  return (
    <Fragment>
      <div className={className}>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col bg-body-purple">
              <div className="fs-2 fw-bold mt-5 ms-5">On Produce</div>
              <div class="input-group flex-nowrap my-3">
                <span class="input-group-text bg-warning" id="addon-wrapping">
                  <i class="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Order Number"
                />
              </div>
              <TableNoneDetail />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(TB_6_Produce)``;
