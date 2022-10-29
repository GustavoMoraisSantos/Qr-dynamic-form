// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{`Hello ${process.env.REACT_APP_NAME}`}</p>
//         <div style={{display:'flex', width:"30%", justifyContent:"space-around"}}>
//           <a
//             className="App-link"
//             href="https://www.linkedin.com/in/gustavo-morais-b996b6211/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Linkedin
//           </a>
//           <a
//             className="App-link"
//             href="https://github.com/GustavoMoraisSantos"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             GitHub
//           </a>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import "antd/dist/antd.css";

function App() {
  // const [link1, setLink1] = useState("");
  // const [link2, setLink3] = useState("");
  // const [link3, setLink3] = useState("");
  const [link, setLink] = useState({
    name: "",
    linkedin: "",
    github: "",
  });

  const [qrcodeLink, setQrcodeLink] = useState("");

  const handleGenerateImage = (link_url) => {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 600,
        margin: 1,
      },
      function (err, url) {
        setQrcodeLink(url);
      }
    );
  };

  const handleChangeName = (e) => {
    setLink((prevState) => {
      return { ...prevState, name: e };
    });
  };
  const handleChangeLinkedin = (e) => {
    setLink((prevState) => {
      return { ...prevState, linkedin: e };
    });
  };
  const handleChangeGithub = (e) => {
    setLink((prevState) => {
      return { ...prevState, github: e };
    });
  };

  useEffect(() => {
    handleGenerateImage(link.name)
    console.log("link", link);
  }, [link]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 style={{color:'whitesmoke'}}>{link}</h1>

        <div style={{backgroundColor:'white', padding:'20px 20px 10px 20px'}}> 

        <QRCode value={link} />
        </div>

        <Input
          onChange={(e) => handleChangeValue(e.target.value)}
          placeholder="Digite seu link"
          style={{ width: "20%", marginBottom: "20px", marginTop: "20px" }}
          defaultValue=""
        />
        <Button href={qrcodeLink} download={`qrcode.png`} type="primary">Baixar QRCode</Button> */}

        <QRCode value={link} />

        <Input
          onChange={(e) => handleChangeName(e.target.value)}
          placeholder="Digite seu nome"
          style={{ width: "20%" }}
        />
        <Input
          onChange={(e) => handleChangeLinkedin(e.target.value)}
          placeholder="Linkedin"
          style={{ width: "20%", marginTop: "20px" }}
        />
        <Input
          onChange={(e) => handleChangeGithub(e.target.value)}
          placeholder="Github"
          style={{ width: "20%", marginTop: "20px" }}
        />

        <Button href={qrcodeLink} download={`qrcode.png`} type="primary">
          Baixar QRCode
        </Button>
      </header>
    </div>
  );
}

export default App;
