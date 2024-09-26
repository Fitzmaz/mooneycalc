import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { itemName } from "~/services/items";
import { useMarket } from "~/services/market";

export interface ItemDetailProps {
  hrid: string;
}

export const ItemDetail = ({ hrid }: ItemDetailProps) => {
  const market = useMarket();
  const name = itemName(hrid);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button>{name}</button>
      </PopoverTrigger>
      <PopoverContent>
        <h3 className="pb-1 text-muted-foreground">{name}</h3>
        <p>Ask: {market.market[name]?.ask}</p>
        <p>Bid: {market.market[name]?.bid}</p>
      </PopoverContent>
    </Popover>
  );
};

export default ItemDetail;
