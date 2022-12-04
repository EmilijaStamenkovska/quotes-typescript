// Core
import { Routes, Route } from 'react-router-dom';
// Pages
import QuotesListPage from './components/pages/QuotesListPage';
import RandomQuotePage from './components/pages/RandomQuotePage';
// Styles
import './assets/style/style.module.css';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<QuotesListPage />} />
			<Route path="/random-quote" element={<RandomQuotePage />} />
		</Routes>
	);
};

export default App;
