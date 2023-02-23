import logo from "./logo.svg";
import "./App.css";
import ListSubjects from "./pages/ListSubjects";
import ListComments from "./pages/ListComments";
import SubjectDetail from "./pages/SubjectDetail";
import AddComment from "./pages/AddComment";
import Home from "./pages/Home";
import StateshookAndEvents from "./pages/StateshookAndEvents";
import CondicionalRendering from "./pages/CondicionalRendering";
import ListKey from "./pages/ListKey";
//
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//
import IsPrivate from "./components/IsPrivate";
import Navbar from "./components/Navbar";
//
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
//import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subjects"
          element={
            <IsPrivate>
              <ListSubjects />
            </IsPrivate>
          }
        />
        <Route
          path="/StateshookAndEvents"
          element={
            <IsPrivate>
              <StateshookAndEvents />
            </IsPrivate>
          }
        />
        <Route
          path="/CondicionalRendering"
          element={
            <IsPrivate>
              <CondicionalRendering />
            </IsPrivate>
          }
        />
        <Route
          path="/ListKey"
          element={
            <IsPrivate>
              <ListKey />
            </IsPrivate>
          }
        />
        <Route
          path="/comments"
          element={
            <IsPrivate>
              <ListComments />
            </IsPrivate>
          }
        />
        <Route
          path="/subjects/:subjectId"
          element={
            <IsPrivate>
              <SubjectDetail />
            </IsPrivate>
          }
        />
        <Route
          path="/comments/:commentId"
          element={
            <IsPrivate>
              <AddComment />
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
