import Header from "./Header";

function EmployeePage() {
  return (
    <>
      <Header title="Employee" employeePage={true} />
      <div style={{ border: "1px solid gray", margin: "4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "100%",
              backgroundColor: "#cccccc",
            }}
          ></div>
          <div>
            <h2>Julie Taylor</h2>
            <p>VP of Marketing</p>
          </div>
        </div>
        <hr />
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Call Office</h3>
            <p>781-000-0002</p>
          </div>

          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#202020"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <hr />
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Call Mobile</h3>
            <p>617-000-0002</p>
          </div>

          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#202020"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <hr />
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>SMS</h3>
            <p>617-000-0002</p>
          </div>

          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#202020"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <hr />
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Email</h3>
            <p>jtaylor@fakemail.com</p>
          </div>

          <svg
            width="24px"
            height="24px"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#202020"
          >
            <path
              d="M9 6L15 12L9 18"
              stroke="#202020"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default EmployeePage;
