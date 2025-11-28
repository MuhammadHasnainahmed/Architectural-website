import Gallery from "../Component/Gallery";



function Gallerypage() {
  return (
    <>
    <Gallery startIndex={0} limit={52} isSection={false} />
    </>
  );
}

export default Gallerypage;
