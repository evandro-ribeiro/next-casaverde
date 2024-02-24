"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { produtos } from "../../public/produto.json";

interface CartContextProps {
    items: typeof produtos | null,
    incluirItem: (id: number) => void,
    excluirItem: (id: number) => void,
    somarPreco: () => string,
    somarQuantidade: (id: number) => void,
    diminuirQuantidade: (id: number) => void,
    qtd: number,
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartProvider = ({children}: {children: React.ReactNode}) => {

    const [items, setItems] = useState<typeof produtos>([]);
    const [qtd, setQtd] = useState<number>(1);

    useEffect(() => {
        const dados = window.localStorage.getItem("ITEMS");
        if(dados !== null) setItems(JSON.parse(dados));
        console.log(items);
    }, []);

    useEffect(() => {
        items !== null && window.localStorage.setItem("ITEMS", JSON.stringify(items));
    }, [items]);

    const excluirItem = (id: number) => {
        let produto = produtos.filter(item => item.id == id);
        let listaNova = items.filter(item => item.id !== produto[0].id);
        setItems(listaNova);
        window.localStorage.removeItem(JSON.stringify(produto[0]));
    }

    const incluirItem = (id: number) => {
        let produto = produtos.filter(item => item.id == id);
        if(!items.includes(produto[0])) setItems([...items, produto[0]]);
    };

    const somarPreco = () => {
        let total: number = 0;
        items.forEach(item => {
            total = total + (item.price * qtd);
        });
        return total.toFixed(2);
    }

    const somarQuantidade = (id: number) => {
        setQtd(qtd + 1);
    }

    const diminuirQuantidade = (id: number) => {
        if(qtd > 1) setQtd(qtd - 1);
    }

    return (
        <CartContext.Provider value={{items, incluirItem, excluirItem, somarPreco, somarQuantidade, diminuirQuantidade, qtd}}>{children}</CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };