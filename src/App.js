import './App.css';
import {Login} from "./pages/Login/Login";
import {Header} from "./components/Header/Header";
import {Registration} from "./pages/Registration/Registration";
import {AddQuestion} from "./pages/AddQuestion/AddQuestion";
import {QuestionsCard} from "./pages/QuestionsCard/QuestionsCard";
import {Results} from "./pages/Results/Results";

function App() {
    return (
        <>
            <Header/>
            <Results/>
        </>
    );
}

export default App;
