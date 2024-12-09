function Header(props) {
  let button;
  if (props.employeePage) {
    button = (
      <div style={{ position: "absolute", left: "0" }}>
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
            d="M15 6L9 12L15 18"
            stroke="#202020"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    );
  } else {
    button = null;
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "8px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {button}
        <h1>{props.title}</h1>
      </div>
    </>
  );
}

export default Header;
