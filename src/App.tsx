// import { Form } from 'antd';
import { useEffect, useCallback, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import ReceiptForm from "./components/ReceiptForm";
import IReceiptData from './types/Receipt';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './components/MyDocument';

function App() {

  const [receiptData, setReceiptData] = useState<{} |null>(null)
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Nouvel état pour gérer la visibilité
  const transfertFieldsValue = useCallback((values : IReceiptData) => {
    setReceiptData(values);
    setIsButtonVisible(true);
  }, [])

  const handleDocumentLoad = () => {
    setIsButtonVisible(false); // Rend le bouton invisible après chargement
  };

  useEffect(() => {
    console.log(receiptData, "je suis dans app");
    console.log(isButtonVisible, "je suis le boolean dans app");
  }, [receiptData, isButtonVisible])


  function handleDownloadClick(): void {
    setIsButtonVisible(false);
    setReceiptData(null);
  }

  return (
    <div className="bg-white min-h-screen">
      <Header/>
      <ReceiptForm handle={transfertFieldsValue}  />
      {receiptData && isButtonVisible && (
        <div className="flex justify-center gap-4 items-center py-10">
          <PDFDownloadLink
            document={<MyDocument />}
            fileName={`reçu-Guy}-Bade.pdf`}
            className="bg-green-500 text-white p-3 rounded text-center"
            onLoad={handleDocumentLoad}
        >
          Télécharger
          </PDFDownloadLink>
          
          <button  onClick={handleDownloadClick} className="bg-blue-500 text-white p-3 rounded text-center">Reset</button>
        </div>
        )
      }

        
    </div>
  );
}

export default App;