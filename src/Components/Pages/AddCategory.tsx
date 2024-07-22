import { useContext, useState } from "react"
import Header from "../UI/Header"
import Icon from "../UI/Icon"
import Input from "../UI/Input"
import { DataContext } from "../../Contexts/DataProvider"
import { Link, useNavigate } from "react-router-dom"
const AddCategory = () => {
    const {setData}= useContext(DataContext)
    const [title, setTitle] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newCategory = {
            id: crypto.randomUUID(),
            title: title,
            item:[]
        }
        setData(prevData => [...prevData, newCategory])

        navigate("/home")
    }
  return (
      <>
          <div>
              <Header title="Add Category" />
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-1/2 max-w-full">
                  <Input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                      placeholder="Add Category Title e.g Groceries"
                  />
                  <div className="flex justify-start gap-4">
                      <Link to={-1}>
                          <button type="reset" className="btn border px-4 h-12 rounded-xl">
                              <span>Cancel</span>
                              <Icon label="close" color="text-primary" />
                          </button>
                      </Link>
                      <button type="submit" className="btn-primary px-4 h-12 rounded-xl">
                          <span>Done</span>
                          <Icon label="check" color="text-white" />
                      </button>
                  </div>
              </form>
          </div>
      </>
  )
}

export default AddCategory