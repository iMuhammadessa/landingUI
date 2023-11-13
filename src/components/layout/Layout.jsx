import Navbar from "../navbar/Navbar";

import "./Layout.css";
const Layout = () => {
  return (
    <div className="main">
      <div className="left">
        <Navbar />
        <div className="textCenter">
          <h1>Hello,</h1>
          <p>
            A landing page is a standalone web page, created specifically for a
            marketing or advertising campaign. It is where a visitor “lands”
            after they click on a link in an email, or ads from Google, YouTube,
            Facebook, Instagram, Twitter, or similar places on the web.
          </p>
          <a href="#">Read</a>
        </div>
      </div>
      <div className="right">
        <div className="rightTop">
          <div className="rightTopLeft"></div>
          <div className="rightTopRight"></div>
        </div>
        <div className="rightBottom"></div>
      </div>
    </div>
  );
};

export default Layout;
