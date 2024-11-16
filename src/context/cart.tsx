"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { produtos } from "../../public/produto.json";

interface CartContextProps {
  items: typeof produtos | null;
  incluirItem: (id: number) => void;
  excluirItem: (id: number) => void;
  somarPreco: () => string;
  aumentarQuantidade: (qtdProduto: number, id: number) => void;
  reduzirQuantidade: (qtdProduto: number, id: number) => void;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<typeof produtos>([]);

  useEffect(() => {
    const dados = window.localStorage.getItem("ITEMS");
    if (dados !== null) setItems(JSON.parse(dados));
    console.log(items);
  }, []);

  useEffect(() => {
    items !== null &&
      window.localStorage.setItem("ITEMS", JSON.stringify(items));
  }, [items]);

  const excluirItem = (id: number) => {
    let produto = produtos.filter((item) => item.id == id);
    let listaNova = items.filter((item) => item.id !== produto[0].id);
    setItems(listaNova);
    window.localStorage.removeItem(JSON.stringify(produto[0]));
  };

  const incluirItem = (id: number) => {
    let produto = produtos.filter((item) => item.id == id);
    if (!items.includes(produto[0])) setItems([...items, produto[0]]);
  };

  const aumentarQuantidade = (qtdProduto: number, id: number) => {
    const mapeamentoItems = items.map((item) => {
      if (item.id === id) {
        item.quantity += qtdProduto;
      }
      return item;
    });
    setItems(mapeamentoItems);
  };

  const reduzirQuantidade = (qtdProduto: number, id: number) => {
    const mapeamentoItems = items.map((item) => {
      if (item.id === id) {
        item.quantity -= qtdProduto;
      }
      return item;
    });
    setItems(mapeamentoItems);
  };

  const somarPreco = () => {
    let total: number = 0;
    items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        incluirItem,
        excluirItem,
        somarPreco,
        aumentarQuantidade,
        reduzirQuantidade,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
