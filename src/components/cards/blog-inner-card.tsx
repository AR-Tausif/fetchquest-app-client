import { GredientPragraphLittleBox } from "../boxes";

export const BlogInnerCard = () => {
  return (
    <div className="flex items-center gap-x-4 rounded-md bg-white border">
      <div className="w-full flex justify-center items-end h-[250px] bg-[url(https://s3-alpha-sig.figma.com/img/0e1d/d7cb/3e99122e66a070b6b5cc85a573077dc2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa-3OTjsDnHYiVxGKmnVNKrbVYWZW3RYnAqNOerTppEmk789OHol2Nr07oIcVTdZUzs3wm1b3NVCTQMNisXsFG2pIGQKe84078l~2asjXG3-TXi0p2VBumuaXnkjh-AZCThETOD3wBzPiT5TMY0LC9kQIqs6scyJZmMQi~UGFqAXcvplR2U7t~r3I3cGjQjr82qZnK-4A~Lu6kH8bs3qsPUdj851WcMuIBiTx-VTfhsD2ZoCtYjnUjTUO25Z6UhO34aLs~j-rePSmGnQQdfLRTbQL2wP-0b7zKMJ6a~M~5Y3f3zXDhZHvsVnEo7E7BRQB9XFcJrfxtajGYs4ktw5HQ__)] bg-no-repeat bg-cover bg-center">
        <p className="uppercase py-4 text-white font-bold px-2 text-center text-sm">
          Nobara kugasaki
        </p>
      </div>
      <div className="space-y-4 w-[180%] p-4">
        <div className="">
          <GredientPragraphLittleBox text="Fetch quest games" />
        </div>
        <p className="text-sm">12 Feb 2024</p>
        <p className="font-semibold text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut hic
          corrupti, eveniet magnam nisi ipsam totam a cupiditate maiores, sequi
          explicabo eius. Aut ipsam, culpa provident omnis eum nulla accusamus?
        </p>
      </div>
    </div>
  );
};
