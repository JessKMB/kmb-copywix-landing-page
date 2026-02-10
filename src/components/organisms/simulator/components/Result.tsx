import { useMemo } from "react";
import type { Product, ProductsOutbound } from "../hooks/useSimulator";
import './styles.css'

interface ResultsProps {
    inboundProducts: Product[];
    outboundProducts: ProductsOutbound[]; 
    onRestart: () => void;
}

const Results = ({ inboundProducts, outboundProducts, onRestart }: ResultsProps) => {
    const inboundTotal = useMemo(() => 
        inboundProducts.reduce((sum, p) => sum + p.price * p.quantity, 0), 
    [inboundProducts]);

    const outboundTotal = useMemo(() => 
        outboundProducts.reduce((sum, group) => 
            sum + group.products.reduce((groupSum, p) => groupSum + p.price * p.quantity, 0)
        , 0), 
    [outboundProducts]);

    const grandTotal = inboundTotal + outboundTotal;

    return (
        <div
        className="
            bg-gray-800 p-8! rounded-2xl shadow-lg 
            flex flex-col items-center justify-center gap-6
            text-center animate-fade-in-up
        "
        >
        <h2 className="text-4xl font-bold text-white">
            🎉 ¡Tu simulación está lista!
        </h2>

        <p className="text-xl text-gray-300 max-w-xl">
            Basado en los productos seleccionados, tu <span className="text-blue-400 font-semibold">costo estimado mensual</span> es:
        </p>

        <div className="bg-gray-700 px-6! py-4! rounded-xl shadow-md">
            <span className="text-3xl md:text-4xl font-extrabold text-blue-400">
            ~${grandTotal.toFixed(2)}
            </span>
        </div>

        <p className="text-lg text-gray-400">
            Puedes ajustar los productos si deseas cambiar el resultado.
        </p>

        <button
            onClick={onRestart}
            className="
            px-6! py-3! bg-blue-600 hover:bg-blue-700 
            text-white font-semibold text-lg rounded-xl 
            shadow-md transition
            "
        >
            🔄 Reiniciar simulación
        </button>

        </div>
    );
};

export default Results;
