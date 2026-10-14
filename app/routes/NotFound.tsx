import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from "~/components/ui/empty";

function NotFound() {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyTitle className="text-[10rem] font-black text-orange-600 leading-none select-none">
                    404
                </EmptyTitle>
                <h2 className="mt-2 mb-3 text-2xl font-bold text-gray-900">
                    Page not found
                </h2>
                <EmptyDescription>
                    The page you are looking for doesn't exist or has been moved.
                </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
                <Button render={<Link to="/" />}>
                    <FaArrowLeft /> Back to recipes
                </Button>
            </EmptyContent>
        </Empty >
    );
}

export default NotFound;