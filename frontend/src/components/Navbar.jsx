import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-500 text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-500 rounded-md px-3 py-2"

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>

      <div className="mx-auto max-w-7xl lg:px-8 sm:px-6">

        <div className='flex h-20 items-center justify-between'>
          
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"> {/* flex-1 items grow and shrink to distribute space evenly */}

            <NavLink className="flex items-center mr-4" to="/"> {/* flex-shrink-0 => item will not shrink */}
              <span className="hidden md:block text-white text-2xl font-bold"> {/* hidden md:block => hides element until md breakpoint is reached, typically >= 768px */}
                Dichonario
              </span>
              <span className="md:hidden mb-1 w-auto text-white text-5xl font-bold"> {/* hidden md:block => hides element until md breakpoint is reached, typically >= 768px */}
                DN
              </span>

            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-3">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Dichos
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add a Dicho
                </NavLink>
              </div>
            </div>

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar
