import React from 'react';
import SignatureCanvas from "react-signature-canvas";

const { Option } = Select;
import { Button, DatePicker, Form, Input, Select } from 'antd';
import IReceiptData from '../types/Receipt';
interface ReceiptFormProps {
    handle : (value : IReceiptData) => void
}

function ReceiptForm({ handle } : ReceiptFormProps) {
    const [form] = Form.useForm();
    const sigPadRef = React.useRef(null);

    const handleSignature = () => {
        const signature = sigPadRef?.current?.getTrimmedCanvas().toDataURL();
        form.setFieldValue('signature', signature);

        form.validateFields().then((values) => {
            handle(values);
            form.resetFields();
            sigPadRef?.current?.clear();
        });
    };

    return (
        <div className='flex justify-center items-center max-md:p-6'>
            <Form 
                onFinish={handleSignature}
                form={form}
                className='bg-gray-100 shadow-xl grid md:grid-cols-2 gap-4 p-3 rounded-lg w-full max-w-4xl'
                layout='vertical'
            >
                <Form.Item
                
                    name="nom"
                    required
                    label="Nom"
                    rules={[{ required: true, message: 'Veuillez saisir votre nom' }]}
                >
                    <Input placeholder='Nom' size='large' type='text'/>
                </Form.Item>
                <Form.Item
                    name="prenom"
                    required
                    label="Prenom"
                    rules={[{ required: true, message: 'Veuillez saisir votre prenom' }]}
                >
                    <Input placeholder='Prenom' size='large' type='text'/>
                </Form.Item>
                <Form.Item
                    name="objet"
                    required
                    label="Objet"
                    rules={[{ required: true, message: 'Veuillez saisir l\'objet' }]}
                >
                    <Input placeholder="Objet" size='large' type='text'/>
                </Form.Item>
                <Form.Item
                    name="date"
                    required
                    label="Date"
                    rules={[{ required: true, message: 'Veuillez saisir la date' }]}
                >
                    <DatePicker size='large' className='w-full'/>
                </Form.Item>
                <Form.Item
                    name="montant"
                    required
                    label="Montant en €"
                    rules={[{ required: true, message: 'Veuillez saisir le montant' }]}
                >
                    <Input placeholder="Montant en €"  size='large' type='number'/>
                </Form.Item>
                <Form.Item
                    name="moyen_paiement"
                    required
                    label="Moyen de paiement"
                    rules={[{ required: true, message: 'Veuillez choisir le moyen de paiement' }]}
                >
                    <Select placeholder="CB" size='large'>
                        <Option value="CB">Carte Bancaire</Option>
                        <Option value="espece">Espèce</Option>
                    </Select>
                </Form.Item>

                <Form.Item 
                    className='col-span-2' label="Signature"
                    name="signature"
                    required
                >
                    <SignatureCanvas ref={sigPadRef} canvasProps={{ className : "bg-white border-1 cursor-pointer w-full h-[150px]"}}   />
                </Form.Item>
                <Form.Item className='col-span-2'>
                    <Button htmlType='submit' size='large' className='bg-[midnightblue] text-white border-none w-full p-6 font-bold'
                    // onClick={handleSignature}
                    >
                        Téléchargez le Reçu
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ReceiptForm;
