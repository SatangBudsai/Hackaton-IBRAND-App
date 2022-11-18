import { Fragment, useState } from "react";

import styled from "styled-components";
import Sidebar from "./component/Sidebar";

export function TB_3_Testing({ className }) {
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
              <div className="fs-2 fw-bold mt-5 ms-5">On Testing</div>
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
              <table class="table ">
                <thead className="bg-navbar text-light">
                  <tr>
                    <th scope="col">Order Number</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Owner</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-light">
                    <th scope="row">0231541311</th>
                    <td>15/11/2565</td>
                    <td>
                      <div
                        class="spinner-border spinner-border-sm me-2 text-primary"
                        role="status"
                      ></div>
                      รอการยืนยัน...
                    </td>
                    <td>Otto</td>
                    <td>
                      <button type="button" class="btn btn-primary">
                        Send
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default styled(TB_3_Testing)``;
