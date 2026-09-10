import "./background.css";

import Kawarp, { useKawarp } from "@kawarp/react";
import random from "just-random";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

const gradients = [
    ["#fff9d2", "#ffebcc", "#bfddf0", "#8cc0eb"],
    ["#810b38", "#f1e2d1", "#dcc3aa", "#541a1a"],
    ["#2c5ead", "#1591dc", "#4bb8fa", "#c4e2f5"],
    ["#fbf5dd", "#e7e1b1", "#306d29", "#0d530e"],
    ["#111844", "#4b5694", "#7288ae", "#eae0cf"],
    ["#622b14", "#995f2f", "#978f66", "#e4d6a9"],
    ["#eeeeee", "#6fcf97", "#2fa084", "#1f6f5f"],
    ["#fff6de", "#8bdfdd", "#f48f68", "#ffe394"],
    ["#59b292", "#ffc94d", "#fae7cb", "#fa6781"],
    ["#121358", "#232f72", "#2f578a", "#36ada3"],
    ["#000000", "#1f150c", "#412d15", "#e1dcc9"],
    ["#9fa1ff", "#b5baff", "#aee2ff", "#d9f9df"],
    ["#767f9e", "#daa464", "#dec384", "#e8ddb4"],
    ["#0d0b61", "#294669", "#478b8d", "#e4d329"],
    ["#007979", "#24b1b1", "#fff0e4", "#ffe0c5"],
    ["#d92243", "#f69d39", "#e0c375", "#fff5e5"],
    ["#4a4466", "#6eadbc", "#9fcbad", "#f1f7d4"],
    ["#e05454", "#c13383", "#792ca2", "#443199"],
    ["#f5f5f5", "#76abae", "#303841", "#ff5722"],
    ["#c1ebe9", "#fff7c5", "#f4ae52", "#4f252e"],
    ["#760031", "#d51c39", "#ff6060", "#feec41"],
    ["#e89951", "#ecb65f", "#f0e76f", "#a5cf83"],
    ["#fdeb9e", "#7ae2cf", "#077a7d", "#06202b"],
    ["#ff0052", "#ffd400", "#00c68d", "#0055da"],
    ["#443199", "#792ca2", "#c13383", "#e05454"],
    ["#39b1d1", "#d6fb61", "#f6850c", "#de3e3e"],
    ["#a5cf83", "#f0e76f", "#ecb65f", "#e89951"],
    ["#ec6530", "#ffae6e", "#ffe3e3", "#8fdddf"],
    ["#000000", "#cb2957", "#dddddd", "#eeeeee"],
    ["#ff6a1c", "#ffda62", "#ffae56", "#f5788b"],
];

function randomGradient() {
    return random(gradients)!;
}

export default function Background() {
    const { ref, loadGradient } = useKawarp();

    useEffect(() => {
        loadGradient(randomGradient());
    }, []);

    useEffect(() => {
        function handleClick() {
            loadGradient(randomGradient());
        }

        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        function msUntilNextHour() {
            const now = new Date();
            return (
                (60 - now.getMinutes()) * 60_000 -
                now.getSeconds() * 1000 -
                now.getMilliseconds()
            );
        }

        const timeout = setTimeout(() => {
            loadGradient(randomGradient());
            const interval = setInterval(
                () => loadGradient(randomGradient()),
                3_600_000,
            );
            return () => clearInterval(interval);
        }, msUntilNextHour());

        return () => clearTimeout(timeout);
    }, []);

    return (
        <ErrorBoundary fallback={<></>}>
            <div className="Background">
                <Kawarp
                    ref={ref}
                    className="kawarp"
                    style={{ width: "100%", height: "100%" }}
                    autoPlay={true}
                    transitionDuration={5_000}
                    saturation={1}
                />
            </div>
        </ErrorBoundary>
    );
}
