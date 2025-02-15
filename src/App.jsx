import Header from "./components/Header.jsx";
import EmailListingContainer from "./components/EmailListingContainer.jsx";
import EmailContainer from "./components/EmailContainer.jsx";

function App() {

    return (
        <>
            <div className="container min-vh-100">
                <Header/>
                <div className="row g-2 h-100">
                    <EmailListingContainer/>
                    <EmailContainer/>
                </div>
            </div>
        </>
    )
}

export default App
