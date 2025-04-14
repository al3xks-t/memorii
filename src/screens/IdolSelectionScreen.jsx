import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { idols } from '../utils/idols';

const IdolSelectionScreen = () => {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedVersion, setSelectedVersion] = useState(null);

  const handleConfirm = () => {
    const overlayPath = `assets/member_images/${selectedGroup}_${selectedMember}_${selectedVersion}`;
    navigate('/camera', { state: { overlayPath } });
  };

  const renderGrid = (items, onClick) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 170px)', gap: '20px' }}>
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => onClick(item)}
          style={{ width: 170, height: 170, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <img
            src={`assets/member_images/${item}.png`}
            alt={item}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
          />
        </button>
      ))}
    </div>
  );

  if (!selectedGroup) {
    const groupList = Object.keys(idols);
    return (
      <div className="screen idol-selection">
        <h2>Select a Group</h2>
        {renderGrid(groupList, setSelectedGroup)}
      </div>
    );
  }

  if (!selectedMember) {
    const memberList = Object.keys(idols[selectedGroup]);
    return (
      <div className="screen idol-selection">
        <h2>Select a Member from {selectedGroup}</h2>
        {renderGrid(memberList.map(m => `${selectedGroup}_${m}`), (memberImg) => {
          const memberName = memberImg.split('_')[1];
          setSelectedMember(memberName);
        })}
      </div>
    );
  }

  if (!selectedVersion) {
    const versionCount = idols[selectedGroup][selectedMember];
    const versionList = Array.from({ length: versionCount }, (_, i) => `${selectedGroup}_${selectedMember}_${i + 1}`);
    return (
      <div className="screen idol-selection">
        <h2>Select a Version</h2>
        {renderGrid(versionList, (verPath) => {
          const version = verPath.split('_')[2];
          setSelectedVersion(version);
        })}
      </div>
    );
  }

  return (
    <div className="screen idol-selection">
      <h2>Ready to Shoot!</h2>
      <p>Group: {selectedGroup} | Member: {selectedMember} | Version: {selectedVersion}</p>
      <button onClick={handleConfirm}>Continue to Camera</button>
    </div>
  );
};

export default IdolSelectionScreen;
