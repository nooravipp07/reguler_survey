import { createContext, useContext, useState } from "react";

export const SurveyDataContext = createContext();

export const SurveyDataProvider = ({ children }) => {
    const [surveyData, setSurveyData] = useState(null);
    const [submittedData, setSubmittedData] = useState({});

    return (
        <SurveyDataContext.Provider
            value={{
                surveyData,
                setSurveyData,
                submittedData,
                setSubmittedData,
            }}
        >
        {children}
        </SurveyDataContext.Provider>
    );
};

export const useSurveyData = () => useContext(SurveyDataContext);
