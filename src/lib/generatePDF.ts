import jsPDF from "jspdf";
import SignatureCanvas from "react-signature-canvas";

// Fonction pour générer le reçu avec des données dynamiques

export interface ReceiptData {
    logoUrl?: string;
    date: string;
    fullName: string;
    address: string;
    amount: string;
    paymentMethod: string;
    treasurerSignature?: string;
    sigPadRef: React.RefObject<SignatureCanvas>;
}

 const generateReceipt = ({
    logoUrl,
    date,
    fullName,
    address,
    amount,
    paymentMethod,
    treasurerSignature,
    sigPadRef
} : ReceiptData) => {
    const doc = new jsPDF();

  // Styles personnalisés
    const fontSize = 12;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);

  // Position de l'en-tête
    const pageWidth = doc.internal.pageSize.getWidth();
    const centerX = pageWidth / 2;

    // Logo
    if (logoUrl) {
        doc.addImage(logoUrl, "PNG", 10, 10, 30, 30); // Ajustez les dimensions
    }

  // Date
    doc.rect(160, 10, 40, 15); // Rectangle pour la date
    doc.text("Date du jour", 165, 18);
    doc.text(date, 165, 25);

    // Titre principal
    doc.setFontSize(14);
    doc.text("Reçu : STK KANANA FIADANANA", centerX, 50, { align: "center" });
    doc.setFontSize(fontSize);

//   // Cadre principal
//   doc.roundedRect(10, 60, 190, 50, 3, 3, "#000"); // Cadre pour les informations

//   // Informations dynamiques
//     doc.text("Nom et prénom :", 15, 70);
//     doc.text(fullName, 60, 70);
    
//     doc.text("Adresse :", 15, 80);
//     doc.text(address, 60, 80);

//     doc.text("Montant :", 15, 90);
//     doc.text(amount, 60, 90);

//     doc.text("Mode de paiement :", 15, 100);
//     doc.text(paymentMethod, 60, 100);

//   // Signatures
//   // Ajouter les signatures si elles existent (images base64)
//     doc.text("Signature de la trésorière", 20, 135);
//     if (treasurerSignature) {
//         doc.addImage(treasurerSignature, "PNG", 80, 30, 50, 10); // Signature 1
//     }

//   doc.roundedRect(120, 120, 80, 30, 3, 3,"#000"); // Cadre pour le déposant
//   doc.text("Signature de le(a) déposant(e)", 130, 135);

//   const depositorSignature = sigPadRef.current?.toDataURL();
//   if (depositorSignature) {
//     doc.addImage(depositorSignature, "PNG", 130, 140, 50, 10); // Signature 2
//   }

//   if (!sigPadRef.current?.isEmpty()) {
    doc.save("recu-paiement.pdf");
//   }
};

export default generateReceipt;


