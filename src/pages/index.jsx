import React from 'react';
import { Button, Space } from 'antd';
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
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
    const dispatch = useAppDispatch();
    const { sectionVisibility } = useAppSelector((state) => state.survey);

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

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <FormCard>
                {sections.map(({ key, component }) =>
                    sectionVisibility[key] ? <div key={key}>{component}</div> : null
                )}
            </FormCard>
            <FormCard>
                <Space className="flex justify-start">
                    <Button 
                        className="bg-danger hover:bg-danger-hover text-white border-danger"
                        type="primary"
                    >
                        Cancel
                    </Button>
                    <Button 
                        className="bg-primary hover:bg-primary-hover text-white border-primary"
                        type="primary"
                    >
                        Submit
                    </Button>
                </Space>
            </FormCard>
        </div>
    );
};

export default Home;