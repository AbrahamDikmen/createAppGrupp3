import { useState } from "react";
import { Container } from "react-bootstrap";

const GetPhoto = ({ theCity }) => {
  const [imageLink, setImageLink] = useState("");

  //A function to fetch the random-image-API and then return it
  async function getImage() {
    let imageCity = "";
    let response = await fetch(
      `https://pixabay.com/api/?key=25521224-067cb032904da2f120a0b95e2&q=${theCity}&image_type=photo`
    );

    // The image that the APi returns depends entirely on what the user searched for
    // It is searching for the second array to return and if there is none then it looks for the first array to return
    if (response.status === 200) {
      const imageJson = await response.json();
      imageCity =
        imageJson?.hits[1]?.webformatURL || imageJson?.hits[0]?.webformatURL;
    } else {
      throw new Error("Unable to fetch image");
    }

    return setImageLink(imageCity);
  }

  return (
    <>
      <Container
        style={{ background: "transparent" }}
        className="fetched-photo"
      >
        <img className="randomCityImg" src={imageLink} onChange={getImage()} />
      </Container>
    </>
  );
};

export default GetPhoto;
