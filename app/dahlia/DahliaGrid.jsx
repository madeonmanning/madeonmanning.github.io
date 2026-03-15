'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Dahlia.css';

const DahliaGrid = ({ dahlias }) => {
  const [formFilter, setFormFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [momFilter, setMomFilter] = useState('all');
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

    if (momFilter !== 'all') {
      filtered = filtered.filter(dahlia => dahlia.MOMOriginal === momFilter);
    }

    filtered.sort((a, b) => a.Name.localeCompare(b.Name)); // Sort alphabetically by Name

    setFilteredDahlias(filtered);
  }, [formFilter, sizeFilter, momFilter, dahlias]);

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
        <div className="filter-group">
          <label htmlFor="mom-filter">Made on Manning Original:</label>
          <select id="mom-filter" value={momFilter} onChange={(e) => setMomFilter(e.target.value)}>
            <option value="all">all</option>
            <option value="Y">Yes</option>
            <option value="N">No</option>
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
              <div className="dahlia-info-header">
                <h3>{dahlia.Name}</h3>
                {dahlia.MOMOriginal === 'Y' && (
                  <Image
                    src="/made-on-manning-original-icon.png"
                    alt="Made on Manning Original"
                    width={30}
                    height={30}
                    className="mom-original-icon"
                  />
                )}
              </div>
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
