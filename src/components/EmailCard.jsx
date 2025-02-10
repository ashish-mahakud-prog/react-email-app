function EmailCard(){
    return (
        <>
            <a href="#" className="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <button className="btn" title="Delete">
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.
                </div>
            </a>
            <a href="#" className="list-group-item list-group-item-action py-3 lh-tight">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">List group item heading</strong>
                    <button className="btn" title="Delete">
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
                <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.
                </div>
            </a>
        </>
    )
}

export default EmailCard;