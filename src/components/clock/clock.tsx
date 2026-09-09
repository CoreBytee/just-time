import { useEffect, useState } from "react";
import "./clock.css";

function AnimatedDigits({ value, unit }: { value: string; unit: string }) {
    const digits = value.split("");

    return (
        <span className="number">
            {digits.map((digit, i) => (
                <span
                    key={`${unit}-${i}-${digit}`}
                    className="digit"
                >
                    {digit}
                </span>
            ))}
        </span>
    );
}

export default function Clock() {
    const [hour, setHour] = useState<string>("");
    const [minute, setMinute] = useState<string>("");
    const [second, setSecond] = useState<string>("");

    useEffect(() => {
        function updateTime() {
            const now = new Date();
            setHour(now.getHours().toString().padStart(2, "0"));
            setMinute(now.getMinutes().toString().padStart(2, "0"));
            setSecond(now.getSeconds().toString().padStart(2, "0"));
        }

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Clock">
            <AnimatedDigits value={hour} unit="h" />
            <span className="separator">:</span>
            <AnimatedDigits value={minute} unit="m" />
            <span className="separator">:</span>
            <AnimatedDigits value={second} unit="s" />
        </div>
    );
}
