
import { FaPlus } from "react-icons/fa6"
import { Link } from "react-router"
import { Button } from "../ui/button"

export const AddNewRecipeBtn = () => {
    return (
        <Button render={<Link to="/new" />} className="cursor-pointer" nativeButton={false}>
            <FaPlus />
            New Recipe
        </Button>
    )
}