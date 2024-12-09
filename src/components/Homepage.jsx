import EmployeeList from "./EmployeeList";
import Header from "./Header";
import Searchbar from "./SearchBar";

function HomePage() {
  return (
    <>
      <div>
        <Header title="Employee Directory" employeePage={false} />
        <Searchbar />
        <EmployeeList />
      </div>
    </>
  );
}

export default HomePage;
