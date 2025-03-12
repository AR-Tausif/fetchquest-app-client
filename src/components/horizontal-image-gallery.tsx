interface IGellaryContent {
  description: string;
  image: string;
}
interface IProps {
  gellaryContent: IGellaryContent[];
}

export const HorizontalImageGallery = ({ gellaryContent }: IProps) => {
  return (
    <div className='flex justify-center gap-3 sm:gap-16 py-14'>
      {gellaryContent.map((content, index) => (
        <img
          key={index}
          className='w-[14vw] h-[20vw] object-cover border border-white p-1 rounded-lg'
          src={content.image}
          alt='game image'
        />
      ))}
    </div>
  );
};
