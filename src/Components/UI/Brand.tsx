import { Link } from "react-router-dom"
import Icon from "./Icon"

const Brand = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-x-1">
        <div className="flex-center h-10 w-10 bg-primary rounded-lg">
          <Icon label="notes" size="text-3xl" color="text-white" />
        </div>
        <Link to="https://github.com/learnwithjacksun/Boarde"  className="flex-center h-10 w-10 border rounded-lg">
        <i className="fa-brands fa-github-alt text-xl"></i>
        </Link >
    </div>
    </>
  )
}

export default Brand