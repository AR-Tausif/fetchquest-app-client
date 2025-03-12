import { GameItemBox } from "@/components/boxes";
import "./styles/styles.css";
export const HorizontalAccordion = () => {
  return (
    <div className="accordion">
      <ul>
        <li>
          {/* content goes here */}
        </li>
        {/* <div className="flex justify-center items-center mt-10 py-10 bg-[url(https://s3-alpha-sig.figma.com/img/41dd/5594/517be32273d495af450b6c5040436a82?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cwCVTVg4DsBp0qFVNWuU42~dkkU1cyZfqvRV~g9RiOt1f8qMHmz-Bz34pd3NKpEw5QKxLN1hjyAankersPp-qrHMsgMzQ3fzRy-~i-8dKXQAposhCH80oFueHctXd3ltZfYtUEFmCkxu~6X5JFdaMz~F5GBIdIcAT1HT8IaplweOwxrJp6~-ZETw52GRjz0rg~HmBj785DWvtnHZ2u3UliuM84TIt2ZwfbzBVMyzjyUF-ZPj24NJfoML91Ud7XJfCi3lUw6ABkOkJD75C3xW2cW4jFhMpNps-EeDIxzpw2dYf8pwvk7oDDhXhfK564EhGxo2fikbNN3KN8zJ~Eu-wQ__)] bg-no-repeat bg-cover bg-bottom">
        <div className="flex justify-center items-center">
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
        </div>
      </div> */}
        <li className="flex justify-center items-center  bg-[url(https://s3-alpha-sig.figma.com/img/41dd/5594/517be32273d495af450b6c5040436a82?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cwCVTVg4DsBp0qFVNWuU42~dkkU1cyZfqvRV~g9RiOt1f8qMHmz-Bz34pd3NKpEw5QKxLN1hjyAankersPp-qrHMsgMzQ3fzRy-~i-8dKXQAposhCH80oFueHctXd3ltZfYtUEFmCkxu~6X5JFdaMz~F5GBIdIcAT1HT8IaplweOwxrJp6~-ZETw52GRjz0rg~HmBj785DWvtnHZ2u3UliuM84TIt2ZwfbzBVMyzjyUF-ZPj24NJfoML91Ud7XJfCi3lUw6ABkOkJD75C3xW2cW4jFhMpNps-EeDIxzpw2dYf8pwvk7oDDhXhfK564EhGxo2fikbNN3KN8zJ~Eu-wQ__)] bg-no-repeat bg-cover bg-bottom">
          {/* <a href="#">
            <div>
              <h1>Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </a>{" "} */}
          <div className="flex justify-center items-center p-20">
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
          <GameItemBox />
        </div>
        </li>
        <li>
            {/* .... Content goes here */}
        </li>
      </ul>
    </div>
  );
};
