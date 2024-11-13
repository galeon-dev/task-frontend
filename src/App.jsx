import { Card } from '@mui/material';
import medicationsDB from './data/medications.json';

console.log(medicationsDB); // Medications data

function App() {
    return (
        <div>
            <Card style={{ margin: 20, padding: 15, width: '50%' }}>Hello World!</Card>
        </div>
    );
}

export default App;
