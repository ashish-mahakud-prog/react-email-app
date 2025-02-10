import EmailCard from "./EmailCard.jsx";

function EmailListingContainer(){
    return(
        <>
            <div className="container email-list w-25">
                {/* comment - heading for email list with email count.*/}
                <div className="inbox">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="ms-3">
                            <h6 className="mb-0 fs-4 text-light">Inbox</h6>
                        </div>
                        <div className="ms-3 pe-3">
                            <span className="badge text-light">14</span>
                        </div>
                    </div>
                </div>
                {/* comment - inbox container.*/}
                <div className="list-group list-group-flush scrollarea">
                    <EmailCard/>
                </div>
            </div>
        </>
    )
}
export default EmailListingContainer