import { Link } from "react-router-dom"

const LeftNavbar = () =>{

    return (
        <div className="flex space-x-5">
            <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="" className="rounded-s-lg" height={50} width={50}/>
            <Link to="/" ><h2 className="text-blue-500 font-bold">Alok Singh Kushwah</h2></Link>
        </div>
    )
}

export default LeftNavbar