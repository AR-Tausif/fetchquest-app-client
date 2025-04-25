const dummyImg = "/images/containers-bg/work-station-bg.png";
export const VideoEmbed = ({
  className,
  placeholderImage = dummyImg,
}: {
  className?: string;
  placeholderImage?: string;
}) => {
  // const iframeSrcdoc = `
  //   <style>
  //     * {
  //       padding: 0;
  //       margin: 0;
  //       overflow: hidden;
  //     }

  //     body, html {
  //       height: 100%;
  //     }

  //     img, svg {
  //       position: absolute;
  //       width: 100%;
  //       top: 0;
  //       bottom: 0;
  //       margin: auto;
  //     }

  //     svg {
  //       filter: drop-shadow(1px 1px 10px hsl(206.5, 70.7%, 8%));
  //       transition: all 250ms ease-in-out;
  //     }

  //     body:hover svg {
  //       filter: drop-shadow(1px 1px 10px hsl(206.5, 0%, 10%));
  //       transform: scale(1.2);
  //     }
  //   </style>
  //   <a href='https://www.youtube.com/embed/GOW1oxrwUz0?autoplay=1'>
  //     <img src='${placeholderImage}' alt='Coffee Recipe Javascript Project'>
  //     <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24' fill='none' stroke='#ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play-circle'>
  //       <circle cx='12' cy='12' r='10'></circle>
  //       <polygon points='10 8 16 12 10 16 10 8'></polygon>
  //     </svg>
      
  //   </a>
  // `;

  return (
    <div
      className={className}
      style={{
        // width: "100%",
        // height: "50%",
        // maxWidth: "550px",
        // boxShadow: "6px 6px 10px hsl(206.5, 0%, 75%)",
      }}
    >
      {/* <div
        className="w-full h-full"
        style={{
          position: "relative",
          paddingBottom: "56.15%",
          height: "0",
          overflow: "hidden",
        }}
      > */}
        <img className="object-cover mx-auto w-full" src={placeholderImage} alt='Coffee Recipe Javascript Project'/>
        {/* <iframe
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "0",
          }}
          loading="lazy"
          srcDoc={iframeSrcdoc} // Use the srcdoc attribute with content
          src="https://www.youtube.com/embed/GOW1oxrwUz0"
          title="Coffee Recipe Javascript Project"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
      {/* </div> */}
    </div>
  );
};
