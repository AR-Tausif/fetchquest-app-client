import { AppButton } from "@/components/buttons/app-button";
import "./styles/game-overview.css";
import { CustomVerticalTab } from "./custom-vertical-tab";
import { TSingleGameOverview } from "@/types/index";

const gamesOverviews: TSingleGameOverview[] = [
  {
    id: 1,
    name: "NOBARA KUGASAKI",
    content: `
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium |

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium |

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. |

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.|

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium`,
    photo: "/images/pages/who-we-are/section-four/tab-img/tab-1.jpg",
  },
  // Adding additional objects based on the repeated images in the HTML
  {
    id: 2,
    name: "TANJEROO KUGASAKI",
    content:
      "Additional description could go here for the second image instance.",
    photo: "/images/pages/who-we-are/section-four/tab-img/tab-1.jpg",
  },
  {
    id: 3,
    name: "KAKASHI UCHIHA",
    content:
      "Additional description could go here for the third image instance.",
    photo: "/images/pages/who-we-are/section-four/tab-img/tab-1.jpg",
  },
  {
    id: 4,
    name: "NARUTO UZUMAKI",
    content: `Naruto follows the story of Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, the leader of his village, despite being shunned for having the Nine-Tailed Fox spirit sealed within him. The series starts with him as a mischievous, loud kid who’s terrible at ninja skills but grows into a powerful, inspiring figure through grit, friendship, and a lot of battles. It’s split into two main parts: the original Naruto, focusing on his childhood, and Naruto: Shippuden, which picks up after a time skip as he matures and faces bigger threats. |

    The manga ran from 1999 to 2014, with 72 volumes, and the anime adaptation has hundreds of episodes—Naruto with 220, and Shippuden with 500. It’s packed with ninja action, elemental jutsu (techniques), and themes about perseverance, loyalty, and redemption. Key characters include Sasuke Uchiha, his brooding rival, and Sakura Haruno, their teammate. The world’s got a mix of feudal vibes and supernatural flair, with villages like the Hidden Leaf and clans wielding unique abilities.`,
    photo: "/images/pages/who-we-are/section-four/tab-img/tab-1.jpg",
  },
];

export const GamerOverviewSection = () => {
  const afterBgUrl =
    "/images/pages/who-we-are/section-four/container-bg.jpg";
  return (
    <div
      className={`relative bg-[url(/images/pages/who-we-are/section-four/container-bg.jpg)] bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gray-900/50 before:w-full before:h-full before:-z-50 z-50 after:content-[''] after:absolute after:bottom-0 after:top-0 after:right-0 after:w-[28%] after:h-full after:bg-[url(/images/pages/who-we-are/section-four/container-bg.jpg)] after:-z-10 after:bg-no-repeat after:bg-center after:bg-cover after:hidden after:md:flex after:bg-black/50`}
    >
      <section className="py-14 max-w-6xl mx-auto">
        <CustomVerticalTab gamesOverviews={gamesOverviews} />
      </section>
    </div>
  );
};
