import { Link } from "react-router-dom"
import "../CSS_files/Header.css"

const Header = () => {
  return (
    <Link class="Link" to="/">
    <h1 class="title">
      NC News
    </h1>
    </Link>
  )
}

export default Header;
