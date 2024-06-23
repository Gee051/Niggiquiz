import React, { Suspense } from 'react'
import ScoreboardContent from '../components/ScoreboardContent';

export default function Scoreboard() {
  return (
    <Suspense fallback={<div className='p-3'>Loading...</div>}>
    <ScoreboardContent />
  </Suspense>
);
}
