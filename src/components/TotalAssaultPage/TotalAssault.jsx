import React from 'react';
import { useParams } from 'react-router-dom';
import RaidBossList from './RaidBossList';
import RaidStudentList from './RaidStudentList';

export default function TotalAssault() {
  const { bossName } = useParams(); // Extracts the boss name from the url

  return (
    <div>
      <RaidBossList />
      <RaidStudentList selectedBoss={bossName} />
    </div>
  );
}