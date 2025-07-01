import React from 'react';
import { Button, Space } from 'antd';
import { 
    CloseOutlined, 
    CheckOutlined,
    FormOutlined 
} from '@ant-design/icons';
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
            <FormCard 
                title={
                    <div className="flex items-center gap-2">
                        <FormOutlined className="text-primary" />
                        <span>Survey Form</span>
                    </div>
                }
            >
                {sections.map(({ key, component }) =>
                    sectionVisibility[key] ? <div key={key}>{component}</div> : null
                )}
            </FormCard>
            <FormCard>
                <Space className="flex justify-start">
                    <Button 
                        icon={<CloseOutlined />}
                        className="bg-danger hover:bg-danger-hover text-white border-danger flex items-center"
                        type="primary"
                        size="large"
                    >
                        Cancel
                    </Button>
                    <Button 
                        icon={<CheckOutlined />}
                        className="bg-primary hover:bg-primary-hover text-white border-primary flex items-center"
                        type="primary"
                        size="large"
                    >
                        Submit
                    </Button>
                </Space>
            </FormCard>
        </div>
    );
};

export default Home;