//グローバルスタイルシートを設定
import './src/styles/global.css';

//フォント（Fontsource）の読み込み
import "@fontsource/noto-sans-jp" 

//ナビゲーションバー操作のJavaScript
export const onRouteUpdate = ({ location }) => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
      //console.log("click");
      //console.log(navLinks.classList);
      nav.classList.toggle("nav-active");
    
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          // console.log(index);
          link.style.animation = `navLinksFade 0.5s ease forwards ${
            index / 7 + 0.4
          }s`;
        }
      });
      
      //burger animataion
      burger.classList.toggle("toggle");
    });
};
