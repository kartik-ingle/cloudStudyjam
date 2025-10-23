#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// This script helps you update the CSV file and see changes in real-time
console.log('🔄 CSV Update Helper');
console.log('===================');
console.log('');
console.log('To update the CSV data:');
console.log('1. Edit the leaderboard.csv file in the project root');
console.log('2. The changes will be automatically reflected in the app');
console.log('3. Or use the refresh button in the app to reload data');
console.log('');
console.log('Current CSV file location:', path.resolve('./leaderboard.csv'));
console.log('Public CSV file location:', path.resolve('./public/leaderboard.csv'));

// Check if files exist
const rootCsv = './leaderboard.csv';
const publicCsv = './public/leaderboard.csv';

if (fs.existsSync(rootCsv)) {
  console.log('✅ Root CSV file exists');
  const stats = fs.statSync(rootCsv);
  console.log(`   Last modified: ${stats.mtime.toLocaleString()}`);
} else {
  console.log('❌ Root CSV file not found');
}

if (fs.existsSync(publicCsv)) {
  console.log('✅ Public CSV file exists');
  const stats = fs.statSync(publicCsv);
  console.log(`   Last modified: ${stats.mtime.toLocaleString()}`);
} else {
  console.log('❌ Public CSV file not found');
}

console.log('');
console.log('💡 Tips:');
console.log('- The app automatically refreshes data every 30 seconds');
console.log('- Use the refresh button to manually reload data');
console.log('- Make sure both CSV files are in sync');
console.log('- The app will fall back to hardcoded data if CSV loading fails');
