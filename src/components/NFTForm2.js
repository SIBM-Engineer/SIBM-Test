import { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';


//function App() {
class NFTForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          seconds : 0,
          imgBuffer : "",
          revealImg: false,
          revealImg2: false,
          image: null,
          imageName: null,
          mint_market : true,
          pinataConnection : false,
          file : "",
          setFile : "",
          myipfsHash : "", 
          setIPFSHASH : ""
        };//localStorage.getItem("Timer")  };
        this.onImageChange = this.onImageChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
      }

  const handleFile=async (fileToHandle) =>{

    

    console.log('starting')

    // initialize the form data
    const formData = new FormData()

    // append the file form data to 
    formData.append("file", fileToHandle)

    // call the keys from .env

    const API_KEY = process.env.REACT_APP_API_KEY
    const API_SECRET = process.env.REACT_APP_API_SECRET

    // the endpoint needed to upload the file
    const url =  `https://api.pinata.cloud/pinning/pinFileToIPFS`

    const response = await axios.post(
      url,
      formData,
      {
          maxContentLength: "Infinity",
          headers: {
              "Content-Type": `multipart/form-data;boundary=${formData._boundary}`, 
              'pinata_api_key': API_KEY,
              'pinata_secret_api_key': API_SECRET

          }
      }
  )

  console.log(response)

  // get the hash
  setIPFSHASH(response.data.IpfsHash)

  
  }

  

  return (
    <div className="App">
      <input type="file" onChange={(event)=>setFile(event.target.files[0])}/>
      <button onClick={()=>handleFile(file)}>Pin</button>
      
      
    {

      //  render the hash
      myipfsHash.length > 0 && <img height='200' src={`https://gateway.pinata.cloud/ipfs/${myipfsHash}`} alt='not loading'/>
    }
    

    </div>
  );
}

export default App;