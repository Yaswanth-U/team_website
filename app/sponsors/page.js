// import Link from "next/link";

// export default function Sponsors() {
//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-8">
//             <h1 className="text-6xl font-black text-emerald-600">Sponsors</h1>
//             <p className="text-gray-600 mt-4 max-w-3xl">
//                 We appreciate the support of our sponsors in driving innovation.
//             </p>
//             <Link href="/#home" className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-md">
//                 Go Back
//             </Link>

//             {/* Footer */}
//             <footer className="py-6 text-center bg-gray-900 text-white">
//                 <p>© 2025 Auto Z. All rights reserved.</p>                
//                 <a href="mailto:teamautoz2020@gmail.com" className="text-emerald">Email Us</a>
//                 <Link href="/" className="text-emerald-400 mt-4 block">Go Back</Link>
//             </footer>
//         </div>
//     );
// }


// import Link from "next/link";

// export default function Sponsors() {
//     return (
//         <div className="min-h-screen flex flex-col">
//             {/* Main Content */}
//             <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center text-center px-8">
//                 <h1 className="text-6xl font-black text-emerald-600">Sponsors</h1>
//                 <p className="text-gray-600 mt-4 max-w-3xl">
//                     We appreciate the support of our sponsors in driving innovation.
//                 </p>
//                 {/* <Link href="/#home" className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-md">
//                     Go Back
//                 </Link> */}
//             </div>

//             {/* Footer - Stays at the Bottom */}
//             <footer className="w-full py-6 text-center bg-gray-900 text-white">
//                 <p>© 2025 Auto Z. All rights reserved.</p>                
//                 <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
//                 <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
//             </footer>
//         </div>
//     );
// }



// page.js
import Link from "next/link";

export default function Sponsors() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Main Content */}
            <div className="flex-grow bg-gray-100 flex flex-col items-center justify-center text-center px-8 py-16">
                <h1 className="text-6xl font-black text-emerald-600">Sponsors</h1>
                <p className="text-gray-600 mt-4 max-w-3xl">
                    We appreciate the support of our sponsors in driving innovation. Their generous contributions enable us to continue pushing the boundaries of autonomous systems and technology.
                    <a 
    href="SPONSORSHIP.pdf"  // 👈 place your file inside public/sponsors/
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-emerald-600 font-semibold underline"
  >
    Click here to know more
  </a>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 max-w-5xl">
                    <div className="flex flex-col items-center">
                        <img src="/pictures/nvidia.png" alt="NVIDIA" className="h-20 object-contain" />
                        <h2 className="text-xl font-bold mt-4">NVIDIA</h2>
                        <p className="text-sm text-gray-600 mt-2">NVIDIA supports our research by providing access to advanced GPU technology, essential for real-time perception and deep learning in autonomous vehicles.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/pictures/xsens.png" alt="Xsens" className="h-20 object-contain" />
                        <h2 className="text-xl font-bold mt-4">Xsens</h2>
                        <p className="text-sm text-gray-600 mt-2">Xsens provides precision motion tracking systems, helping us enhance localization and control accuracy in dynamic environments.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/pictures/tdk.png" alt="TDK" className="h-20 object-contain" />
                        <h2 className="text-xl font-bold mt-4">TDK</h2>
                        <p className="text-sm text-gray-600 mt-2">TDK supports our sensor integration work with high-quality components, ensuring reliable data acquisition and processing.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/pictures/solidworks.png" alt="SolidWorks" className="h-20 object-contain" />
                        <h2 className="text-xl font-bold mt-4">SolidWorks</h2>
                        <p className="text-sm text-gray-600 mt-2">SolidWorks provides industry-standard CAD software, enabling us to prototype and simulate mechanical systems with high precision.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/pictures/kubler.png" alt="Kübler" className="h-20 object-contain" />
                        <h2 className="text-xl font-bold mt-4">Kübler</h2>
                        <p className="text-sm text-gray-600 mt-2">Kübler supports our robotics projects with their reliable encoders and automation components, crucial for motion feedback and safety.</p>
                    </div>
                </div>

                <p className="text-sm text-gray-500 mt-12">Sponsors enable us to continue our experiments knowing we won’t be putting ourselves out of business.</p>
            </div>

            {/* Footer */}
            <footer className="w-full py-6 text-center bg-gray-900 text-white">
                <p>© 2025 Auto Z. All rights reserved.</p>                
                <a href="mailto:teamautoz2020@gmail.com" className="text-emerald-400 block mt-2">Email Us</a>
                <Link href="/" className="text-emerald-400 block mt-2">Go Back</Link>
            </footer>
        </div>
    );
}
