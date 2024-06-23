import React, { Suspense } from 'react'
import ScoreboardContent from '../components/ScoreboardContent';

export default function Scoreboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ScoreboardContent />
  </Suspense>
);
}
