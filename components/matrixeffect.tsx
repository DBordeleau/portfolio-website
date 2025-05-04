import { useState, useEffect, useCallback } from 'react';

interface MatrixEffectProps {
    onStop?: () => void;
}

export function MatrixEffect({ onStop }: MatrixEffectProps) {
    const [matrixOutput, setMatrixOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(true);
    const columns = 70;
    const rows = 20;

    const getRandomChar = useCallback(() => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
        return chars[Math.floor(Math.random() * chars.length)];
    }, []);

    useEffect(() => {
        if (!isRunning) return;

        const matrix = Array(columns).fill(0);

        const interval = setInterval(() => {
            for (let i = 0; i < columns; i++) {
                if (Math.random() > 0.98) {
                    matrix[i] = 1;
                }
            }

            let newOutput = [];

            for (let j = 0; j < rows; j++) {
                let row = "";

                for (let i = 0; i < columns; i++) {
                    if (j < matrix[i] && matrix[i] > 0) {
                        const char = getRandomChar();
                        const intensity = j === matrix[i] - 1 ? 1 : (1 - (matrix[i] - j) / 15);
                        const alpha = Math.max(0.1, intensity).toFixed(1);

                        row += `<span style="color: rgba(0, 255, 0, ${alpha});">${char}</span>`;
                    } else {
                        row += " ";
                    }
                }

                newOutput.push(row);
            }

            setMatrixOutput(newOutput);

            for (let i = 0; i < columns; i++) {
                if (matrix[i] > 0) {
                    matrix[i]++;
                    if (matrix[i] >= rows * 2) {
                        matrix[i] = 0;
                    }
                }
            }
        }, 50);

        return () => clearInterval(interval);
    }, [isRunning, getRandomChar]);

    const stopMatrix = useCallback(() => {
        setIsRunning(false);
        if (onStop) {
            setTimeout(() => onStop(), 100);
        }
    }, [onStop]);

    useEffect(() => {
        const handleKeyDown = () => stopMatrix();
        document.addEventListener('keydown', handleKeyDown);

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [stopMatrix]);

    return (
        <div className="matrix-animation font-mono" style={{ lineHeight: '1.2' }}>
            {isRunning ? (
                <>
                    {matrixOutput.map((row, i) => (
                        <div key={i} dangerouslySetInnerHTML={{ __html: row }} />
                    ))}
                    <button
                        onClick={stopMatrix}
                        className="mt-2 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
                    >
                        Stop Matrix (or press any key)
                    </button>
                </>
            ) : (
                <div>Matrix simulation ended.</div>
            )}
        </div>
    );
}