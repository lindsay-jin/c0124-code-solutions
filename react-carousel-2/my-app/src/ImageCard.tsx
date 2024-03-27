type Images = {
  src: string;
  alt: string;
};

type Prop = {
  image: Images;
};

//only want to display one image
export function ImageCard({ image }: Prop) {
  return (
    <div>
      <img src={image.src} alt={image.alt} style={{ width: '300px' }} />
    </div>
  );
}
