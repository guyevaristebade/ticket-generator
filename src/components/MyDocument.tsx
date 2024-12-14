// MyDocument.tsx
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
// import IReceiptData from '../types/Receipt';
import logo from '../assets/react.png';
import signature from '../assets/signature.jpeg';

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 24, marginBottom: 10 },
  section: { marginBottom: 10 },
  signature: { marginTop: 20, width: 150, height: 50 },
  logo: { width: 100, height: 100 },
  header : { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  date : { border : '1px solid black', padding: 5 ,backgroundColor: 'lightgray' }
});



const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image style={styles.logo} src={logo} />
        <View style={styles.date}>
          {new Date().toLocaleDateString()}
        </View>
      </View>
      <Text style={styles.title}>Reçu</Text>
      <View style={styles.section}>
        <Text>Nom complet : Jean Philippe Simon</Text>
        <Text>Date : {"22-12-2025"}</Text>
        <Text>Montant : 2000€</Text>
        <Text>Moyen de paiement : Carte Bancaire</Text>
      </View>
      <Image src={signature} style={styles.signature} />
    </Page>
  </Document>
);

export default MyDocument;
