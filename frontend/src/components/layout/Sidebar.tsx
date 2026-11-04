import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../common/Button";
import { Icon } from "../common/Icon";
import { useAuth } from "../../context/AuthContext";
import { uiConfig } from "../../config/uiConfig";

export const Sidebar = () => {

    const { odjava } = useAuth();
    const navigate = useNavigate();
    const handleOdjava = () => {
        odjava();
        navigate("/login", { replace: true });
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <span className="brand-mark">{uiConfig.brand.shortName}</span>
                <div>
                    <strong>{uiConfig.brand.name}</strong>
                    <small>{uiConfig.brand.subtitle}</small>
                </div>
            </div>

            <nav aria-label="Glavna navigacija" className="sidebar-nav">
                {uiConfig.navigation.map((item) => (
                    <NavLink key={item.to} to={item.to} className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>
                        <Icon name={item.icon} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <Button variant="ghost" fullWidth onClick={handleOdjava}>
                    <Icon name="logout" size={18} />
                    <span>Odjava</span>
                </Button>
            </div>
        </aside>
    );
};
