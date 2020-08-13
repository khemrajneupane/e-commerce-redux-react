import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import pdfService from "../services/items";

const Pdf = () => {
  const basketItem = useSelector((state) => state.shoppingBasket);
  const { basketItems } = basketItem;

  /* const[initialStates, setInitialState] = useState({
        name: "basketItems.name",
        receiptId: basketItems.id,
        price1: basketItems.price,
        price2: basketItems.price,
    })*/

  const createAndDownloadPdf = async () => {
    try {
      await pdfService.create({
        buyer_name: "John Doe",
        name: basketItems.name,
        purchasedId: basketItems.id,
        price1: basketItems.price,
        price2: basketItems.price,
      });
      const res = await pdfService.getPdf();
      const pdfBlob = new Blob([res.data], { type: "application/pdf" });
      saveAs(pdfBlob, "receipt.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
        <Link to="/pdf">view pdf receipt</Link>
        <button onClick={createAndDownloadPdf}>Download Your Purchase</button>
     
    </div>
  );
};
export default Pdf;
