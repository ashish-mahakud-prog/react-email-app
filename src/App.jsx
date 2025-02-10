import Header from "./components/Header.jsx";
import EmailListingContainer from "./components/EmailListingContainer.jsx";
import EmailContainer from "./components/EmailContainer.jsx";

function App() {

    return (
        <>
            <div className=" app-container d-flex justify-content-center vh-100">
                <div className="main-container">
                    <Header/>
                    <div className="mail-container d-flex">
                        <EmailListingContainer/>
                        <EmailContainer/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
