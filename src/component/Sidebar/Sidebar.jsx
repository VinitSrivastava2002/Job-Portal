import './Sidebar.css'

export default function Sidebar() {
  return (
      <div className="sidebar">
            <div className="logo">
                <img           
                loading="eager"
                alt=""
                src="src\assets\Sidebar\logo.svg"
                />
            </div>

            <div className="menu-container">
                <div className="menu-heading">
                    <div className="main-menu">MAIN MENU</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\dashboard icon.svg"
                    />
                    <div className="menu-item-text">Dashboard</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\recruitment icon.svg"
                    />
                    <div className="menu-item-text">Recruitment</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\scheduled icon.svg"
                    />
                    <div className="menu-item-text">Schedule</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\employee icon.svg"
                    />
                    <div className="menu-item-text">Employee</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\department icon.svg"
                    />
                    <div className="menu-item-text">Department</div>
                </div>
            </div>

            <div className="menu-container">
                <div className="menu-heading">
                    <div className="main-menu">OTHER</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\Support icon.svg"
                    />
                    <div className="menu-item-text">Support</div>
                </div>

                <div className="menu-item">
                    <img
                    className="menu-item-icon"
                    loading="eager"
                    alt=""
                    src="src\assets\Sidebar\Setting icon.svg"
                    />
                    <div className="menu-item-text">Setting</div>
                </div>
            </div>
       </div>  
  )
}
