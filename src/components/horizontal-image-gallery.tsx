interface IGellaryContent {
  description: string;
  image: string;
}
interface IProps {
  gellaryContent: IGellaryContent[];
}

export const HorizontalImageGallery = ({ gellaryContent }: IProps) => {
  return (
    <div className='flex justify-center gap-3 md:gap-16 py-14'>
      {gellaryContent.map((content, index) => (
        <img
          key={index}
          className={`w-[14vw] h-[20vw] object-cover border border-white p-1 rounded-lg ${
            index === 1 || index === 3 ? 'mt-10 md:mt-32' : ''}`}
          src={content.image}
          alt='game image'
        />
      ))}
    </div>
  );
};
