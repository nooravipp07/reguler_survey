import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SurveyDataProvider } from '@/context/SurveyDataContext';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans'
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SurveyDataProvider>
        <AntdRegistry>
          <main className={`${openSans.variable} font-sans`}>
            <Component {...pageProps} />
          </main>
        </AntdRegistry>
      </SurveyDataProvider>
    </Provider>
  );
}