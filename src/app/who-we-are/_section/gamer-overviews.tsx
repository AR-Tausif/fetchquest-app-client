import { AppButton } from "@/components/buttons/app-button";
import "./styles/game-overview.css";
import { CustomVerticalTab } from "./custom-vertical-tab";

export const GamerOverviewSection = () => {
  const gamesOverviews = [
    {
      id: 1,
      name: "NOBARA KUGASAKI",
      content: `
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium |
  
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium |
  
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. |
  
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.|
  
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
      photo:
        "https://s3-alpha-sig.figma.com/img/0e1d/d7cb/3e99122e66a070b6b5cc85a573077dc2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa-3OTjsDnHYiVxGKmnVNKrbVYWZW3RYnAqNOerTppEmk789OHol2Nr07oIcVTdZUzs3wm1b3NVCTQMNisXsFG2pIGQKe84078l~2asjXG3-TXi0p2VBumuaXnkjh-AZCThETOD3wBzPiT5TMY0LC9kQIqs6scyJZmMQi~UGFqAXcvplR2U7t~r3I3cGjQjr82qZnK-4A~Lu6kH8bs3qsPUdj851WcMuIBiTx-VTfhsD2ZoCtYjnUjTUO25Z6UhO34aLs~j-rePSmGnQQdfLRTbQL2wP-0b7zKMJ6a~M~5Y3f3zXDhZHvsVnEo7E7BRQB9XFcJrfxtajGYs4ktw5HQ__",
    },
    // Adding additional objects based on the repeated images in the HTML
    {
      id: 2,
      name: "TANJEROO KUGASAKI",
      content:
        "Additional description could go here for the second image instance.",
      photo:
        "https://s3-alpha-sig.figma.com/img/0e1d/d7cb/3e99122e66a070b6b5cc85a573077dc2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa-3OTjsDnHYiVxGKmnVNKrbVYWZW3RYnAqNOerTppEmk789OHol2Nr07oIcVTdZUzs3wm1b3NVCTQMNisXsFG2pIGQKe84078l~2asjXG3-TXi0p2VBumuaXnkjh-AZCThETOD3wBzPiT5TMY0LC9kQIqs6scyJZmMQi~UGFqAXcvplR2U7t~r3I3cGjQjr82qZnK-4A~Lu6kH8bs3qsPUdj851WcMuIBiTx-VTfhsD2ZoCtYjnUjTUO25Z6UhO34aLs~j-rePSmGnQQdfLRTbQL2wP-0b7zKMJ6a~M~5Y3f3zXDhZHvsVnEo7E7BRQB9XFcJrfxtajGYs4ktw5HQ__",
    },
    {
      id: 3,
      name: "KAKASHI UCHIHA",
      content:
        "Additional description could go here for the third image instance.",
      photo:
        "https://s3-alpha-sig.figma.com/img/0e1d/d7cb/3e99122e66a070b6b5cc85a573077dc2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa-3OTjsDnHYiVxGKmnVNKrbVYWZW3RYnAqNOerTppEmk789OHol2Nr07oIcVTdZUzs3wm1b3NVCTQMNisXsFG2pIGQKe84078l~2asjXG3-TXi0p2VBumuaXnkjh-AZCThETOD3wBzPiT5TMY0LC9kQIqs6scyJZmMQi~UGFqAXcvplR2U7t~r3I3cGjQjr82qZnK-4A~Lu6kH8bs3qsPUdj851WcMuIBiTx-VTfhsD2ZoCtYjnUjTUO25Z6UhO34aLs~j-rePSmGnQQdfLRTbQL2wP-0b7zKMJ6a~M~5Y3f3zXDhZHvsVnEo7E7BRQB9XFcJrfxtajGYs4ktw5HQ__",
    },
    {
      id: 4,
      name: "NARUTO UZUMAKI",
      content: `Naruto follows the story of Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, the leader of his village, despite being shunned for having the Nine-Tailed Fox spirit sealed within him. The series starts with him as a mischievous, loud kid who’s terrible at ninja skills but grows into a powerful, inspiring figure through grit, friendship, and a lot of battles. It’s split into two main parts: the original Naruto, focusing on his childhood, and Naruto: Shippuden, which picks up after a time skip as he matures and faces bigger threats. |

      The manga ran from 1999 to 2014, with 72 volumes, and the anime adaptation has hundreds of episodes—Naruto with 220, and Shippuden with 500. It’s packed with ninja action, elemental jutsu (techniques), and themes about perseverance, loyalty, and redemption. Key characters include Sasuke Uchiha, his brooding rival, and Sakura Haruno, their teammate. The world’s got a mix of feudal vibes and supernatural flair, with villages like the Hidden Leaf and clans wielding unique abilities.`,
      photo:
        "https://s3-alpha-sig.figma.com/img/0e1d/d7cb/3e99122e66a070b6b5cc85a573077dc2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Oa-3OTjsDnHYiVxGKmnVNKrbVYWZW3RYnAqNOerTppEmk789OHol2Nr07oIcVTdZUzs3wm1b3NVCTQMNisXsFG2pIGQKe84078l~2asjXG3-TXi0p2VBumuaXnkjh-AZCThETOD3wBzPiT5TMY0LC9kQIqs6scyJZmMQi~UGFqAXcvplR2U7t~r3I3cGjQjr82qZnK-4A~Lu6kH8bs3qsPUdj851WcMuIBiTx-VTfhsD2ZoCtYjnUjTUO25Z6UhO34aLs~j-rePSmGnQQdfLRTbQL2wP-0b7zKMJ6a~M~5Y3f3zXDhZHvsVnEo7E7BRQB9XFcJrfxtajGYs4ktw5HQ__",
    },
  ];

  const afterBgUrl =
    "https://s3-alpha-sig.figma.com/img/d3ed/09f7/252004e28d933592d719d0fca45e5787?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H0ihIPUscpg9fFeNj~ZI2LnKPv-zvtUsP88b6G4tmrBXkp-4nJXX-pFJ5jAv4PwzwTn2ItkCj99lNhDz9IvVMqdw5bKsu2W8FSsMX4mCUerEOxYGgjFujRpkv5sbDl9zbyZl0aCtfdibzS4txAvsbaLl1qhvb9jgj4mBY80oWSd4sPoh~DjFllXGR7PJgze2-bpSCVFhURYE9ZmgFPHLw30KvyUGTbthq5QFy4kJPVAPUH-TcKfWqeA~j-8BMGO6asCcclhuqPkwx38SUo9jZr-Lt~bQM8B9Cj85jubT63THK76c30kzNnhvuY0wOjvVlmIoNGcX0Iqrw8-nqk4M1A__";
  return (
    <div
      className={`relative bg-[url(https://s3-alpha-sig.figma.com/img/d3ed/09f7/252004e28d933592d719d0fca45e5787?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H0ihIPUscpg9fFeNj~ZI2LnKPv-zvtUsP88b6G4tmrBXkp-4nJXX-pFJ5jAv4PwzwTn2ItkCj99lNhDz9IvVMqdw5bKsu2W8FSsMX4mCUerEOxYGgjFujRpkv5sbDl9zbyZl0aCtfdibzS4txAvsbaLl1qhvb9jgj4mBY80oWSd4sPoh~DjFllXGR7PJgze2-bpSCVFhURYE9ZmgFPHLw30KvyUGTbthq5QFy4kJPVAPUH-TcKfWqeA~j-8BMGO6asCcclhuqPkwx38SUo9jZr-Lt~bQM8B9Cj85jubT63THK76c30kzNnhvuY0wOjvVlmIoNGcX0Iqrw8-nqk4M1A__)] bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gray-900/50 before:w-full before:h-full before:-z-50 z-50 after:content-[''] after:absolute after:bottom-0 after:top-0 after:right-0 after:bg-red-500 after:w-[28%] after:h-full after:bg-[url(https://s3-alpha-sig.figma.com/img/d3ed/09f7/252004e28d933592d719d0fca45e5787?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H0ihIPUscpg9fFeNj~ZI2LnKPv-zvtUsP88b6G4tmrBXkp-4nJXX-pFJ5jAv4PwzwTn2ItkCj99lNhDz9IvVMqdw5bKsu2W8FSsMX4mCUerEOxYGgjFujRpkv5sbDl9zbyZl0aCtfdibzS4txAvsbaLl1qhvb9jgj4mBY80oWSd4sPoh~DjFllXGR7PJgze2-bpSCVFhURYE9ZmgFPHLw30KvyUGTbthq5QFy4kJPVAPUH-TcKfWqeA~j-8BMGO6asCcclhuqPkwx38SUo9jZr-Lt~bQM8B9Cj85jubT63THK76c30kzNnhvuY0wOjvVlmIoNGcX0Iqrw8-nqk4M1A__)] after:-z-10 after:bg-no-repeat after:bg-center after:bg-cover`}
    >
      <section className="py-14 max-w-6xl mx-auto">
        <CustomVerticalTab gamesOverviews={gamesOverviews} />
      </section>
    </div>
  );
};
