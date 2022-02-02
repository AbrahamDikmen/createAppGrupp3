import { useState, useEffect } from "react";

let cityName = "fiji";

async function getImage() {
  let imageLink = "";
  let response = await fetch(
    `https://pixabay.com/api/?key=25521224-067cb032904da2f120a0b95e2&q=${cityName}&image_type=photo`
  );

  if (response.status === 200) {
    const imageJson = await response.json();
    imageLink = imageJson.hits[0].webformatURL;
  } else {
    throw new Error("Unable to fetch image");
  }
  return imageLink;
}

function showImage() {
  const [imageLink, setImageLink] = useState("");
  useEffect(async () => {
    setImageLink(getImage());
  }, []);
  return (
    <>
      <Container className="fetched-photo">
        <img src={imageLink} alt="" />
      </Container>
    </>
  );
}

export default showImage;
