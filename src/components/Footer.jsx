import React from "react";

const Footer = () => {
    return (
        <div className=" bg-light fixed-bottom  border-top">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use  href="#twitter" /></svg></a></li>
                    <li className="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use href="#instagram" /></svg></a></li>
                    <li className="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use  href="#facebook" /></svg></a></li>
                </ul>
            </footer>
        </div>

    )

}



export default Footer;
