type DayjsObject = {
    $L: string;
    $d: Date;
    $y: number;
    $M: number;
    $D: number;
    $W: number;
    $H: number;
    $m: number;
    $s: number;
    $ms: number;
    $x: Record<string, unknown>;
    $isDayjsObject: boolean;
  };

  

export default interface IReceiptData {
    nom: string;
    prenom: string;
    objet: string;
    date: DayjsObject;
    montant: number;
    moyen_paiement: string;
    signature: string;
}