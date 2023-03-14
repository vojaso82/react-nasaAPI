import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

interface NasaData {
  id: string;
  name: string;
  url: string;
}

function App() {
  const [nasaData, setNasaData] = useState<NasaData[]>();

  console.log("nasaData", nasaData);

  //     AXIOS
  const getNasaData = async () => {
    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      if (response.data.success === true) {
        setNasaData(response.data.data.memes);
      } else if (response.data.success === false) {
        console.log("Error getting api data");
      }
    } catch (err: any) {
      throw new Error("Error getting api data");
    }
  };

  // //     FETCH();
  // const getNasaData = async () => {
  //   try {
  //     const response = await fetch("https://api.imgflip.com/get_memes");
  //     const data = await response.json();
  //     console.log("data", data.data.memes);
  //     if (data.success === true) {
  //       setNasaData(data.data.memes);
  //     } else if (data.success === false) {
  //       console.log("Error getting api data");
  //     }
  //   } catch (err: any) {
  //     throw new Error("Error getting api data");
  //   }
  // };

  useEffect(() => {
    getNasaData();
  }, []);

  return (
    <div className="App">
      <div style={styles.containerGrid as React.CSSProperties}>
        {nasaData ? (
          nasaData.map((each: NasaData) => (
            <div style={styles.box} key={each.id}>
              <h2 style={{ fontSize: "10px" }}>{each.name}</h2>
              <img style={styles.photo} src={each.url} alt={each.name} />
            </div>
          ))
        ) : (
          <p>NO DATA</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  containerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 200px)",
    gridColumnGap: "10px",
    gridRowGap: "10px",
    justifyContent: "center",
  },

  box: {
    // margin: "20px",
  },
  photo: {
    width: "150px",
    height: "150px",
  },
};

export default App;

// import { useEffect, useState } from "react";

// // *
// // *
// // * 1. Go to https://api.nasa.gov/index.html.
// // * There is no need to register for the API, it’s fine to use the DEMO_KEY as api_key.

// //  2. Expand the Mars Rover Photos section from the API list.

// //  3. Go to the manifest api, to get the rover details for a rover_name, curiosity.
// // const MANIFEST_API_URL = `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${API_KEY}`;
// // and get the mission manifest details, and display the details in the app.

// //  4.  Scroll up to the example query for photos of mars, which should look something like below:
// // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY

// // And replace the earth_date with 2023-02-03 from the above query to get photos from the earth date of 2023-02-03.

// import "./styles.css";

// interface NasaData {
//   name: string;
//   landing_date: string;
//   launch_date: string;
//   status: string;
// }

// interface NasaImages {
//   img_src: string;
//   id: number;
//   camera: any;
// }

// export default function App() {
//   const [nasaData, setNasaData] = useState<NasaData>();
//   const [nasaImages, setNasaImages] = useState<NasaImages[]>([]);

//   const apiKey = "H3xapCYNbsEnxpPpSjh3ZOdpBS4ewdReP9IbvmGK";
//   const fetchNasaApiData = async () => {
//     try {
//       const response = await fetch(
//         `https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${apiKey}`
//       );
//       const data = await response.json();
//       //console.log("data", data);
//       if (data) {
//         setNasaData(data.photo_manifest);
//       } else if (!data) {
//         throw new Error("Error getting data");
//       }
//     } catch (err) {
//       throw new Error("Error retriving data");
//     }
//   };

//   const fetchNasaImages = async () => {
//     try {
//       const response = await fetch(
//         `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-02-03&api_key=${apiKey}`
//       );
//       const data = await response.json();
//       console.log("data images", data.photos);
//       if (data) {
//         setNasaImages(data.photos);
//       } else if (!data) {
//         throw new Error("Error getting data");
//       }
//     } catch (err) {
//       throw new Error("Error retriving data");
//     }
//   };

//   //console.log("nasaData", nasaData);

//   useEffect(() => {
//     fetchNasaApiData();
//     fetchNasaImages();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Nasa API</h1>
//       <h1>Nasa API</h1>
//       <div >
//         <h2> {nasaData?.name}</h2>
//         <p> {nasaData?.landing_date}</p>
//         <p> {nasaData?.launch_date}</p>
//         <p> {nasaData?.status}</p>
//       </div>
//       <div></div>
//       <div>
//         {nasaImages ? (
//           nasaImages.map((each: NasaImages) => (
//             <div key={each.id}>
//               <img src={each.img_src} alt={each.camera.name} />
//             </div>
//           ))
//         ) : (
//           <p>No images to show</p>
//         )}
//       </div>
//     </div>
//   );
// }
