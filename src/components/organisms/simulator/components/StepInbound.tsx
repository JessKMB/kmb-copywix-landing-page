import type { Product } from "../hooks/useSimulator";
import ProductComponent from "./Product";
import { Headphones } from "lucide-react";
import './styles.css';

interface StepInboundProps {
    products: Product[];
    onNextStep: (page?: number) => void;
    onActiveInboundProduct: (productId: string, channel: 'inbound' | 'outbound') => void;
    onChangeInboundQuantity: (productId: string, quantity: number, channel: 'inbound' | 'outbound') => void;
}

const StepInbound = ({ products, onNextStep, onActiveInboundProduct, onChangeInboundQuantity }: StepInboundProps) => {
    return (
        <div className="gap-10 flex flex-col animate-step-in">
            <div className="text-center flex flex-col items-center justify-center gap-4">
                <div className="bg-blue-200 border-blue-600 border-3 rounded-full p-3! spin-x">
                    <Headphones className="w-8 h-8 text-blue-600" /> 
                </div>
                <p className="text-white text-3xl text-center md:text-4xl font-semibold leading-snug">
                    1. Selecciona los productos que deseas incluir en tu servicio{" "}
                    <span className="text-blue-400 font-bold">Inbound</span>
                </p>
            </div>

            <div className="flex flex-col gap-4">
                {products.map((product) => (
                    <ProductComponent
                        key={product.id}
                        product={product}
                        onActiveProduct={onActiveInboundProduct}
                        onChangeQuantity={onChangeInboundQuantity}
                    />
                ))}
            </div>

            <button
                className="
                    p-4! bg-blue-500 hover:bg-blue-600 
                    text-white font-semibold 
                    rounded-xl shadow-md 
                    transition-all duration-200
                    cursor-pointer
                "
                onClick={() => onNextStep(2)}
            >
                Continuar →
            </button>
        </div>
    );
};

export default StepInbound;
