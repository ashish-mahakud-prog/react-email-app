import EmailCard from "./EmailCard.jsx";

function EmailListingContainer(){
    return(
        <>
            {/*<!-- inbox with email list! -->*/}
            <div className="col-md-3 min-vh-100">
                <div className=" bg-light">
                    {/*<!-- inbox header with count! -->*/}
                    <div className="px-1 pb-2 inbox-header d-flex justify-content-between align-items-center">
                        <h3 className="header">INBOX</h3>
                        <span className="badge bg-primary p-2">14</span>
                    </div>
                    <EmailCard/>
                </div>
            </div>
        </>
    )
}
export default EmailListingContainer