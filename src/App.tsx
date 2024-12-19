import { useCallback, useState } from 'react';
import Header from "./components/Header";
import ReceiptForm from "./components/ReceiptForm";
import IReceiptData from './types/Receipt';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Receipt from './components/Receipt';

function App() {

  const [receiptData, setReceiptData] = useState<IReceiptData | null>(null)
  const [isButtonVisible, setIsButtonVisible] = useState(false); // Nouvel état pour gérer la visibilité des boutons de téléchargement et de réinitialisation
  const transfertFieldsValue = useCallback((values : IReceiptData) => {
    setReceiptData(values);
    setIsButtonVisible(true);
  }, [])

  const handleDocumentLoad = () => {
    setIsButtonVisible(false); // Rend le bouton invisible après chargement
  };

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
            document={<Receipt receiptData={receiptData} />}
            fileName={`reçu-Guy}-Bade.pdf`}
            className="bg-blue-500 text-white p-3 rounded text-center"
            onLoad={handleDocumentLoad}
        >
          Télécharger
          </PDFDownloadLink>
          
          <button  onClick={handleDownloadClick} className="bg-red-500 text-white p-3 rounded text-center">Réinitialiser</button>
        </div>
        )
      }
    </div>
  );
}

export default App;