import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <>
      <EmployeeListItem name="James King" bio="President and CEO" />
      <EmployeeListItem name="Julie Taylor" bio="VP of Marketing" />
      <EmployeeListItem name="Eugene Lee" bio="CFO" />
      <EmployeeListItem name="John Williams" bio="VP of Engineering" />
      <EmployeeListItem name="Ray Moore" bio="VP of Sales" />
      <EmployeeListItem name="Paul Jones" bio="QA Manager" />
    </>
  );
}

export default EmployeeList;
