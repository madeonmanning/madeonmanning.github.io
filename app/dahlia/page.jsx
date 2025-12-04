import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import DahliaGrid from './DahliaGrid';
import './Dahlia.css';

const DahliaPage = () => {
  const filePath = path.join('data', 'dahlias.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  return (
    <div className="dahlia-container">
      <h1>Dahlia Inventory</h1>
      <p>Browse our collection of beautiful dahlias. Use the filters below to find the perfect bloom.</p>
      <DahliaGrid dahlias={records} />
    </div>
  );
};

export default DahliaPage;