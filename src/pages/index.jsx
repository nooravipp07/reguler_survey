import React from 'react';
import { Button, Space } from 'antd';
import Header from '@/components/sections/personal/Header';
import InformasiNasabah from '@/components/sections/personal/InformasiNasabah';
import InformasiTempatTinggal from '@/components/sections/personal/InformasiTempatTinggal';
import InformasiPekerjaanWira from '@/components/sections/personal/InformasiPekerjaanNasabahWira';
import InformasiPekerjaanNonWira from '@/components/sections/personal/InformasiPekerjaanNasabahNonWira';
import InformasiOrder from '@/components/sections/personal/InformasiOrder';
import InformasiObjectPembiayaan from '@/components/sections/personal/InformasiObjectPembiayaan';
import InformasiSupplier from '@/components/sections/personal/InfomasiSupplier';
import InformasiPencairanLangsung from '@/components/sections/personal/InformasiPencairanLangsung';
import EmergencyContact from '@/components/sections/personal/EmergncyContact';
import InformasiSurvey from '@/components/sections/personal/InformasiSurvey';
import CancelApplication from '@/components/sections/personal/CancelApplication';

import FormCard from '@/components/ui/FormCard';


const Home = () => {

    const sections = [
        { key: 'showInformasiNasabah', component: <InformasiNasabah /> },
        { key: 'showInformasiPekerjaanWira', component: <InformasiPekerjaanWira /> },
		{ key: 'showInformasiPekerjaanNonWira', component: <InformasiPekerjaanNonWira /> },
		{ key: 'showInformasiTempatTinggal', component: <InformasiTempatTinggal /> },
		{ key: 'showInformasiOrder', component: <InformasiOrder /> },
		{ key: 'showInformasiObjectPembiayaan', component: <InformasiObjectPembiayaan /> },
		{ key: 'showInformasiSupplier', component: <InformasiSupplier /> },
		{ key: 'showInformasiPencairanLangsung', component: <InformasiPencairanLangsung /> },
		{ key: 'showEmergencyContact', component: <EmergencyContact /> },
		{ key: 'showInformasiSurvey', component: <InformasiSurvey /> },
		{ key: 'showCancelApplication', component: <CancelApplication /> },
    ];

    const sectionVisibility = {
		showInformasiNasabah: true,
		showInformasiPekerjaanWira: true,
		showInformasiPekerjaanNonWira: true,
		showInformasiTempatTinggal: true,
		showInformasiOrder: true,
		showInformasiObjectPembiayaan: true,
		showInformasiSupplier: true,
		showInformasiPencairanLangsung: true,
		showEmergencyContact: true,
		showInformasiSurvey: true,
		showCancelApplication: true,
	};

    return (
        <>
            <Header />
            <FormCard>
                {sections.map(({ key, component }) =>
                    sectionVisibility[key] ? <div key={key}>{component}</div> : null
                )}
            </FormCard>
            <FormCard>
                <Space style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button style={{ backgroundColor: '#FF0000', color: 'white' }} variant="solid">Cancel</Button>
                    <Button style={{ backgroundColor: '#004890', color: 'white' }} variant="solid">Submit</Button>
                </Space>
            </FormCard>
        </>
    );
};

export default Home;
