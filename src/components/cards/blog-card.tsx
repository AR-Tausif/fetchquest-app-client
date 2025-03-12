export const BlogCard = ({ className="" }: { className?: string }) => {
  return (
    <div
      className={`h-[342px] flex flex-col-reverse text-white bg-[url(https://s3-alpha-sig.figma.com/img/1bfb/3739/e9021267ee759903b14d957ade2c968e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tgi4B-FqHtoLQ15EXEW5dItj6UI-X33hRp9iqLiJYcMPLbnewbHLPrulGLDU3EOTSokhV-iV9KZ8KAujdKpiHH5YDdDcChbtJrPQxtH~GIUF9B3RO54g1Lc6ITY2Ds6GhFdHZoQM8UimGNrv3JV5E2IGr7DD7CEMNtkGZaaXPwdbyYcfr7ocJDeTK6EAXa-0AvOX~f9flYWeFkv53eSrDe34~Y5W-LLJNMVZUEieFRaKYCeZwvys7RIFRBSWgyeRaJWlqYEgoZcAwp4HhCUKZIg4i53m1LR424CSuURVr5-Grgc5IJ8aqVR6cJyJMV0tvtXRkPLClpEm7lTBe5q1dQ__)] bg-cover bg-center ${className}`}
    >
      <div className="space-y-2 p-10">
        <p>The Official Trailer</p>
        <h3 className="text-4xl">Check6: Newcomers</h3>
        <p className="uppercase underline underline-offset-4 text-xl font-bold">
          Watch now
        </p>
      </div>
    </div>
  );
};
