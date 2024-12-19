import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../assets/logo_sfk.jpg';
import signature from '../assets/signature.jpeg'; 
import IReceiptData from '../types/Receipt';
import formatDate from '../lib/formatDate';
import translateMonthToFrench from '../lib/translateMonthToFrench';

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  logo: { width: 80, height: 80, borderRadius: 50 },
  dateBox: {flexDirection : 'row', alignItems : 'center',  border: '1px solid lightgray', padding: 5, borderRadius: 5, textAlign: 'center' },
  titleContainer: { padding: 10, backgroundColor: 'lightgray', marginBottom: 15, borderRadius : 10 },
  title: { fontSize: 18, textAlign: 'center' },
  contentBox: {
    border: '1px solid black',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  label: { fontSize: 12, marginBottom: 5 },
  signatureContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 },
  signature: { width: 150, height: 50 },
  signatureLabel: { fontSize: 10, textAlign: 'center', marginTop: 5 },
});

interface ReceiptProps {
  receiptData: IReceiptData | null;
}

const Receipt: React.FC<ReceiptProps> = ({ receiptData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* En-tête avec le logo et la date */}
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.dateBox}>
          <Text>{receiptData?.date ? translateMonthToFrench(formatDate(receiptData.date.$d)) : ''}</Text>
        </View>
      </View>

      {/* Titre */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reçu : STK KANANA FIADANANA</Text>
      </View>

      {/* Informations principales */}
      <View style={styles.contentBox}>
        <Text style={styles.label}>Nom et prénom : {`${receiptData?.nom} ${receiptData?.prenom}`}</Text>
        <Text style={styles.label}>
          Adresse : 2 Rue Saint-Laurent, 77167 Bagneaux-sur-Loing
        </Text>
        <Text style={styles.label}>Montant : {receiptData?.montant}</Text>
        <Text style={styles.label}>Mode de paiement : {receiptData?.moyen_paiement}</Text>
      </View>

      {/* Signatures */}
      <View style={styles.signatureContainer}>
        <View>
          <Image src={signature} style={styles.signature} />
          <Text style={styles.signatureLabel}>Signature de la trésorière</Text>
        </View>
        <View>
          <Image src={receiptData?.signature} style={styles.signature} />
          <Text style={styles.signatureLabel}>Signature de le(a) déposant(e)</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Receipt;
