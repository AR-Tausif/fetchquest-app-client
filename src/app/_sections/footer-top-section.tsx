import Image from 'next/image';

export const FooterTopSection = () => {
  return (
    <section className='text-gray-600 body-font bg-[#062047] mt-2 '>
      <div className='flex md:flex-row flex-col items-center'>
        <div className='w-[50%] mb-10 md:mb-0 grow'>
          <Image
            className='object-cover object-center !w-full h-full'
            alt='hero'
            src='https://s3-alpha-sig.figma.com/img/45d8/208e/9ba1dfff27b18079731ae3815c680674?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZT08IkQKAKbkcK1S8EVzU8zV-B3JVnjctY9L0UW88TxPPRf6IoE0i4dCN2COk-2l7ncpjJwJxc-d0k99H9t4~IEo87aKs-jvq7L8FumJVzyIoX3L7~ZRJVfBFCBIRYWXoGSnvGwgCbukDqnXXRnEmqsSX-ObmiY3qthyhwPGtH0-OtNqIuT4cMOiU9MiD2U3lgQ65gTiYBtCSMbDb3PdPJbVrmgqfe0U1aKmFF7YDk3yqlRKjtkzP72IXa7cAEzr0D3RBbTSkQGBh2JlL658uWF13fqI0ZLsB3Uzw0I9TSgr~cMvk2j~Nh6dhtEdVheev8oQziy9kskrt0anh5mnlg__'
            width={100}
            height={100}
          />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 py-10 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Before they sold out
            <br className='hidden lg:inline-block' />
            readymade gluten
          </h1>
          <p className='mb-8 leading-relaxed text-[#F4F4F4]'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
