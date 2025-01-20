
export default function Footer (){
    const currentDate = new Date().getFullYear();

    return(
         
        <footer className="bg-[#0a051a] w-full h-40 flex flex-col justify-center gap-4 md:flex-row items-center p-6 text-sm text-gray-400">
            <p>© copyright Devneto {currentDate}. all rights reserved.</p>
            <p className="text-sm font-light text-purple-600">design and devolopment by Cloves Neto</p>
        </footer>
    )
} 