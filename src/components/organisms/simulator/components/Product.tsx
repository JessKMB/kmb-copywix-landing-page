import type { Product } from "../hooks/useSimulator";

interface ProductProps {
    product: Product;
    onActiveProduct: any
    onChangeQuantity: any
}

const interactionRanges = [0, 100, 200, 400, 700, 1000, 3000, 5000, 10000, 20000];
const rangeLabels = ["0-100", "100-200", "200-400", "400-700", "700-1000", "1000-3000", "3000-5000", "5000-10.000", "10.000 - 20.000"];

const ProductComponent = ({ product, onActiveProduct, onChangeQuantity}: ProductProps) => {
    const currentIndex = interactionRanges.findIndex((val, i) => {
        const nextVal = interactionRanges[i + 1] ?? Infinity;
        return product.quantity >= val && product.quantity < nextVal;
    });
    const Icon = product.icon;
    return (
            <div
                key={product.id}
                className={`
                    flex flex-col md:flex-row flex-wrap md:flex-nowrap items-start md:items-center gap-4 
                    bg-gray-800 p-4! rounded-xl shadow-md transition 
                    hover:shadow-lg w-full
                    ${product.isActive ? "opacity-100" : "opacity-60"}
                    `}
            >
                <div className="flex gap-4 items-center justify-center">
                    <div className="bg-blue-200 border-blue-600 border-3 rounded-full p-3! spin-x">
                        <Icon className="w-5 h-5 text-blue-500"/>
                    </div>
                    <input
                        type="checkbox"
                        checked={product.isActive}
                        onChange={() => onActiveProduct(product.id)}
                        className="
                            h-7 w-7
                            rounded-md 
                            border-gray-400 
                            text-blue-600 
                            focus:ring-2 
                            focus:ring-blue-500 
                            cursor-pointer
                        "
                    />

                </div>

                <div className="flex-1">
                    <span
                        className={`block text-lg md:text-2xl font-medium mb-1 ${
                            product.isActive ? "text-[#58c0ff]" : "text-gray-300"
                        }`}
                    >
                        {product.name}
                    </span>
                    {/* 🔹 Nueva línea de descripción */}
                    <p
                        className={`text-sm leading-snug max-w-lg ${
                            product.isActive ? "text-gray-300" : "text-gray-400"
                        }`}
                    >
                        {product.description}
                    </p>
                </div>

                {/* Slider solo si está activo */}
                {product.isActive && (
                    <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                        <input
                            type="range"
                            min={0}
                            max={interactionRanges.length - 2}
                            value={currentIndex}
                            onChange={(e) => {
                                const index = Number(e.target.value);
                                onChangeQuantity(product.id, interactionRanges[index]);
                            }}
                            className="
                                flex-1 max-w-xs md:max-w-md 
                                h-2 bg-gray-600 
                                rounded-lg appearance-none 
                                cursor-pointer accent-blue-500
                            "
                        />
                        <span className="text-blue-400 font-bold w-28 text-right">
                            {rangeLabels[currentIndex]} (~${(product.price * product.quantity).toFixed(2)})
                        </span>
                    </div>
                )}
            </div>
    );
};

export default ProductComponent;
