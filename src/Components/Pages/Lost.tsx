import { Link } from "react-router-dom"
import lost from "../../assets/lost.svg"
import Icon from "../UI/Icon"
const Lost = () => {
  return (
      <>
          <div>
              <div className="text-center md:max-w-[480px] max-w-[90%] mx-auto mt-16">
                  <div className="flex-center mb-12"><img src={lost} width={200} alt="Page not found" /></div>
                  <div className="mt-6">
                      <h2 className="font-medium text-subtext text-sm">I see you&apos;re lost, we&apos;re lost too! 🤷‍♀️</h2>
                      <Link to="/home" className="bg-primary gap-1 flex-center py-2 px-4 font-bold text-sm text-white w-[200px] mx-auto mt-4 rounded-lg">
                          <Icon label="arrow_back" color="text-white" />
                          <span>Go back Home</span>
                      </Link>
                  </div>
          </div>
      </div>
      </>
  )
}

export default Lost