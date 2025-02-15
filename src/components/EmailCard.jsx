function EmailCard(){
    return (
        <>
            <div className="list-group list-group-flush" id="list-tab" role="tablist">
                <a className="list-group-item list-group-item-action  p-0 m-0" id="list-home-list" data-bs-toggle="list"
                   href="#list-home" role="tab" aria-controls="list-home">
                    <div className="container">
                        <div className="email-card-title d-flex justify-content-between align-items-center">
                            <span className="card-title fw-bolder m-0">xyz@email.com</span>
                            <button type="button" className="btn btn-light">
                                <img src="delete_forever.svg" width="20px" height="20px"/>
                            </button>
                        </div>
                        <p className="email-subject fs-6 fw-light">This is some text which will be present in the email
                            subject</p>
                    </div>
                </a>
            </div>

            </>
            )
            }

            export default EmailCard;