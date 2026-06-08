// import { useState } from "react";
// import Sidebar from "./sidebar";

// export default function Layout() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   return (
//     <div className="flex h-screen bg-cream">
//       {/* mobile overlay*/}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-charcol z-40 md:hidden"
//           onClick={() => {
//             setIsMobileMenuOpen(false);
//           }}
//         />
//       )}

//       <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
//     </div>
//   );
// }
