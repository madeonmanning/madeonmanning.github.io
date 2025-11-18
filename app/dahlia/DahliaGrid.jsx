'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Dahlia.css';

const DahliaGrid = ({ dahlias }) => {
  const [formFilter, setFormFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [filteredDahlias, setFilteredDahlias] = useState([...dahlias].sort((a, b) => a.Name.localeCompare(b.Name)));

  const forms = ['all', ...Array.from(new Set(dahlias.map(d => d.Form))).sort()];
  const sizes = ['all', ...Array.from(new Set(dahlias.map(d => d.Size))).sort()];

  useEffect(() => {
    let filtered = dahlias;

    if (formFilter !== 'all') {
      filtered = filtered.filter(dahlia => dahlia.Form === formFilter);
    }

    if (sizeFilter !== 'all') {
      filtered = filtered.filter(dahlia => dahlia.Size === sizeFilter);
    }

    filtered.sort((a, b) => a.Name.localeCompare(b.Name)); // Sort alphabetically by Name

    setFilteredDahlias(filtered);
  }, [formFilter, sizeFilter, dahlias]);

  const slugify = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  return (
    <div className="dahlia-container">
      <div className="dahlia-filters">
        <div className="filter-group">
          <label htmlFor="form-filter">Filter by Form:</label>
          <select id="form-filter" value={formFilter} onChange={(e) => setFormFilter(e.target.value)}>
            {forms.map(form => (
              <option key={form} value={form}>{form}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label htmlFor="size-filter">Filter by Bloom Size:</label>
          <select id="size-filter" value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="dahlia-grid">
        {filteredDahlias.map(dahlia => (
          <div key={dahlia.Name} className="dahlia-card">
            <div className="dahlia-image-container">
              <Image
                src={'/dahlias/' + dahlia.Picture}
                alt={dahlia.Name}
                width={300}
                height={300}
                className="dahlia-image"
              />
            </div>
            <div className="dahlia-info">
              <h3>{dahlia.Name}</h3>
              <p><strong>Form:</strong> {dahlia.Form}</p>
              <p><strong>Size:</strong> {dahlia.Size}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DahliaGrid;
