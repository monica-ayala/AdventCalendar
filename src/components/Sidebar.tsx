// Import statements for Lucide-React icons
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState, ReactNode } from "react";
import { FaAirbnb } from "react-icons/fa";
import { BsFillTreeFill } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { Link } from 'react-router-dom';


// Sidebar context with a default value
const SidebarContext = createContext({ expanded: false } as { expanded: boolean });

// Optional Sidebar Props
export interface ISideBarProps {
  children?: ReactNode;
}

// Sidebar item props
export interface ISideBarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
 expandSideBar?: () => void;
}

export default function Sidebar({ children }: ISideBarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <nav className="h-screen w-fit flex flex-col bg-white border-r shadow-sm">
      <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="./src/assets/imgs/advent-logo.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-44" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
        <SidebarContext.Provider value={{ expanded }}>
        <ul className="flex-1 px-3">
          <SidebarItem icon={<BsFillTreeFill />
} text="Calendario" active={true} expandSideBar={() => setExpanded((curr) => !curr)}/>
          <SidebarItem icon={<BsFillInfoCircleFill />} text="Instrucciones" expandSideBar={() => setExpanded((curr) => !curr)} />
          <SidebarItem icon={<ImGithub />} text="Source code" expandSideBar={() => setExpanded((curr) => !curr)}/>
          
          {/* Add more sidebar items as needed */}
        </ul>
      </SidebarContext.Provider>

        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://encaromafloristeria.es/wp-content/uploads/2017/11/El-mu%C3%A9rdago-mucho-m%C3%A1s-que-una-planta-sevilla-dos-hermanas-alcala-de-guadaira.jpg.webp"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
            <span className="text-xs">Hecho por</span>
              <h4 className="font-semibold">Mónica Ayala</h4>
            </div>
          </div>
        </div>
    </nav>
  );
}

export function SidebarItem({ icon, text, active, alert, expandSideBar }: ISideBarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      onClick={expandSideBar}
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-800"
            : "hover:bg-red-50"
        }
    `}
    >
      {icon}
  <Link to={`/${text}`}
    className={`overflow-hidden transition-all ${
      expanded ? "w-52 ml-3" : "w-0"
    }`}
  >
    {text}
  </Link>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-red-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

    </li>
  );
}
