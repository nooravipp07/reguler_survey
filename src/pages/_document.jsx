// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const cache = createCache({ key: 'css' });
		const { extractCriticalToChunks } = createEmotionServer(cache);

		const originalRenderPage = ctx.renderPage;

		ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
			function EnhanceApp(props) {
				return <App emotionCache={cache} {...props} />;
			},
		});

		const initialProps = await Document.getInitialProps(ctx);
		const emotionStyles = extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			key={style.key}
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
		));

		return {
		...initialProps,
		styles: (
			<>
			{initialProps.styles}
			{emotionStyleTags}
			</>
		),
		};
	}

	render() {
		return (
		<Html>
			<Head />
			<body>
			<Main />
			<NextScript />
			</body>
		</Html>
		);
	}
}
