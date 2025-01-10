
export default function Footer (){
    const currentDate = new Date().getFullYear();

    return(
         
        <footer className="bg-[#1a1625] w-full h-40 p-12 flex flex-col md:flex-row justify-around items-center p-6 text-sm text-gray-400">
            <p>© copyright Devneto {currentDate}. all rights reserved.</p>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
                <div className="flex gap-4">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                </div>
                <p>design and devolopment by Cloves Neto</p>
            </div>
        </footer>
    )
} 