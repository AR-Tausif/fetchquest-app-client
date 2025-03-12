import { GameItemBox } from '@/components/boxes';
import { SectionHeading } from '@/components/top-headings/SectionHeading';

export const GamingProductShowing = () => {
  return (
    <div className=''>
      <div className='text-center'>
        <div className='py-8'>
          <SectionHeading title='Igniting a lifelong passion' />
        </div>
        <p className='w-1/3 mx-auto'>
          Looking for more? NexaGear has a full lineup of gaming accessories,
          from mousepads to headsets, that bring comfort, precision, and style
          to your setup.
        </p>
      </div>

      <div className='flex justify-center items-center my-10'>
        <div className='flex justify-center items-center'>
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
        </div>
      </div>
    </div>
  );
};
