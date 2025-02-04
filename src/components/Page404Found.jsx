import { Link } from "react-router-dom";
function ErrorsFunc(){
    return (
        <>
            <div className="max-w-5xl mx-auto md:mt-44 mt-18 md:px-0 px-8">
                <h1 className="md:text-9xl text-5xl font-bold italic work-sens text-Black font-onset">404</h1>
                <p className=" font-medium md:text-3xl text-xl text-black font-onset">This Page Does Not Exist, <Link to= "/" className="border-b border-black font-semibold md:text-5xl text-3xl text-black">Back To Home</Link></p>
            </div>
        </>
    )
}
export default ErrorsFunc;