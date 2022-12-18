import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <>
    <nav>
        <figure className="logo">
            <StaticImage
                src="../images/logo_small.png"
                width={80}
                alt="トップ画像"
                placeholder="blurred"
            />
        </figure>

      <ul className="nav-links">
        <li><a href="#">会社概要</a></li>
        <li><a href="#">事業内容</a></li>
        <li><a href="#">インフォメーション</a></li>
        <li><a href="#">お問い合わせ</a></li>
      </ul>

      <form method="post" action="#" className="search_container">
            <input type="text" size="25" placeholder="Search.." />
            <input type="submit" value="検索" />
      </form>

      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  </>
)

export default Header
