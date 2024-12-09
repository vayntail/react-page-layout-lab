function EmployeeListItem(props) {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          display: "flex",
          padding: "4px",
          gap: "4px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            backgroundColor: "#cccccc",
          }}
        ></div>
        <div>
          <h2>{props.name}</h2>
          <p>{props.bio}</p>
        </div>
      </div>
    </>
  );
}

export default EmployeeListItem;
