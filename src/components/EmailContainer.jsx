function EmailContainer(){
    return(
        <>
            <div className="col d-none d-md-block">
                <div className="h-100 bg-light">
                    <div className=" h-100 tab-content" id="nav-tabContent">
                        <div className="h-100 tab-pane fade show active" id="list-home" role="tabpanel"
                             aria-labelledby="list-home-list">
                            <div className="container h-100">
                                <div className="container fw-bold fs-5 email-subject">
                                    New jobs posted from Capgemini Group!!!
                                </div>
                                <div
                                    className="from-email container fw-normal d-flex justify-content-between align-items-center">
                                    <p className="from-email-id text-truncate">From : xyz@email.com</p>
                                    <p className="email-time">7:45 AM</p>
                                </div>
                                <div className="email-content h-100">
                                    <p className="text-format">Dear Ashish,

                                        You are receiving this email because you joined the Capgemini Talent Community
                                        on 06/02/2025. You will receive these messages every 7 day(s). Your Job Alert
                                        matched the following jobs at Capgemini Career site.

                                        Jobs
                                        Java Developer | 5 to 6 Years | Pune & Hyderabad - Pune, IN
                                        Payments BA - Pune, IN
                                        Senior Software Engineer - C - Pune, IN
                                        Test Automation Engineer - C - Pune, IN
                                        Test Automation Engineer - C - Pune, IN
                                        Java II 4-8 yrs II Pune - Pune, IN
                                        Software Engineer - Pune, IN
                                        Calypso Developer | 4 to 6 years | Pune - Pune, IN
                                        Solution/Delivery Architect - D - Pune, IN
                                        Teamcenter T4EA | 6 to 9 years | Pune - Pune, IN


                                        Manage your Job Alerts

                                        If you do not wish to receive further job posting notifications, Please
                                        unsubscribe now. You can subscribe again later, while applying for a position on
                                        our career site or reviewing your profile
                                        Email Settings | Unsubscribe

                                        Best regards, Talent Acquisition Team
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailContainer