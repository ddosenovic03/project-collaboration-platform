import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { applyTheme, getPreferredTheme } from "../../utils/theme";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(getPreferredTheme);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const nextTheme = theme === "light" ? "dark" : "light";

    return (
        <button
            aria-label={`Uključi ${nextTheme === "dark" ? "tamnu" : "svetlu"} temu`}
            className="theme-toggle"
            onClick={() => setTheme(nextTheme)}
            title={`Uključi ${nextTheme === "dark" ? "tamnu" : "svetlu"} temu`}
            type="button"
        >
            <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
        </button>
    );
};
