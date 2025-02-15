import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductType {
  id: string;
  name: string;
  price: number;
  img: string;
}

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#FDFDFD] rounded-lg hover:shadow">
      <div className="bg-[#D0DDD0] flex items-center justify-center h-[350px] relative rounded-t-lg">
        <Image
          src={product.img}
          alt="Product"
          width={400}
          height={400}
          className="object-contain p-10 max-h-max"
        />
      </div>
      <div className="flex justify-between items-center p-5">
        <div>
          <h3 className="text-xl font-semibold text-[#101010] mb-2">
            {product.name}
          </h3>
          <p className="text-[#2B2B2B] text-base">
            Price Estimate: ${product.price}
          </p>
        </div>
        <Link
          href={`/sell/${product.id}`}
          className="py-3 px-8 bg-[#101010] text-[#FDFDFD] rounded-sm"
        >
          SELL
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
