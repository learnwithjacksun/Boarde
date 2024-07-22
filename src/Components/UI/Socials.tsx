import { Link } from "react-router-dom"
import { socials } from "../../Constants/data"

const Socials = () => {
  return (
      <>
      <div className="mt-8">
            <p className="font-semibold text-sm text-subtext">Share to socials:</p>
            <ul className="flex-center gap-4 mt-4">
              {socials.map((social, index) => (
                <li key={index}>
                  <Link to={social.path as string} className="flex-center h-14 w-14 bg-secondary rounded-full">
                    <i className={`fa-brands ${social.icon}`}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </>
  )
}

export default Socials