import { ThemeProvider } from './components/ThemeContext';
import AppRoutes from './routes/routes';
import './App.css';

function App() {
    return (
        <ThemeProvider>
            <AppRoutes />
        </ThemeProvider>
    );
}

export default App;