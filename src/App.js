import "./App.css";
import CourseForm from "./components/courseForm";
import CourseList from "./components/courselist";

function App() {
  return (
    <div className="main-container">
      <CourseForm />
      <CourseList />
    </div>
  );
}

export default App;
