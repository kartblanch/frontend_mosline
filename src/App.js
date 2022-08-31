import './App.css';
import {Login} from "./pages/Login/Login";
import {Header} from "./components/Header/Header";
import {Registration} from "./pages/Registration/Registration";
import {AddQuestion} from "./pages/AddQuestion/AddQuestion";
import {Results} from "./pages/Results/Results";
import {Route, Routes} from "react-router-dom";
import {QuestionsList} from "./pages/QuestionsList/QuestionsList";
import Container from "@mui/material/Container";

function App() {
    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Results/>}/>
                    <Route path="/add-question" element={<AddQuestion/>}/>
                    <Route path="/start-test" element={<QuestionsList/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Registration/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
