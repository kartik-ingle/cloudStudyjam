# 📊 CSV Data Update Guide

This guide explains how to update the CSV data in your GDG Leaderboard application.

## 🔄 How Data Updates Work

The application now supports **dynamic CSV data loading** with the following features:

### ✅ Automatic Updates
- **Auto-refresh**: Data refreshes every 30 seconds automatically
- **Real-time**: Changes to CSV files are detected and loaded
- **Fallback**: If CSV loading fails, the app uses hardcoded backup data

### 🎯 Manual Updates
- **Refresh Button**: Click the refresh button in the app to reload data immediately
- **Error Handling**: If there's an error, you'll see a retry button

## 📁 File Locations

### Primary CSV File
```
/Users/kartikingle/Downloads/GDG_Leaderboard/leaderboard.csv
```
This is your main CSV file that you should edit.

### Public CSV File
```
/Users/kartikingle/Downloads/GDG_Leaderboard/public/leaderboard.csv
```
This is automatically copied from the main file for the web app to access.

## 🛠️ How to Update Data

### Method 1: Edit the CSV File
1. Open `leaderboard.csv` in your preferred editor
2. Make your changes (add/remove participants, update badge counts, etc.)
3. Save the file
4. The app will automatically detect changes within 30 seconds
5. Or click the refresh button for immediate updates

### Method 2: Replace the CSV File
1. Replace the entire `leaderboard.csv` file with your new data
2. Make sure the format matches the original structure
3. The app will automatically load the new data

### Method 3: Use the Helper Script
```bash
node update-csv.js
```
This script will show you the current status of your CSV files.

## 📋 CSV Format Requirements

Your CSV file must have these columns in this exact order:

```csv
User Name,User Email,Google Cloud Skills Boost Profile URL,Profile URL Status,Access Code Redemption Status,All Skill Badges & Games Completed,# of Skill Badges Completed,Names of Completed Skill Badges,# of Arcade Games Completed,Names of Completed Arcade Games
```

### Example Row:
```csv
"John Doe","john@example.com","https://profile-url","All Good","Yes","No",5,"Badge 1 | Badge 2",1,"Game 1"
```

## 🔍 What Gets Updated

When you update the CSV file, these will automatically refresh:

### Dashboard (Home Page)
- Total participants count
- Total badges earned
- Average progress
- Top performer
- Completion statistics
- All other metrics

### Leaderboard Page
- Participant rankings
- Progress bars
- Badge counts
- Filter results
- Search results

## 🚨 Troubleshooting

### If Data Doesn't Update
1. Check that both CSV files exist
2. Verify the CSV format is correct
3. Look for error messages in the app
4. Try clicking the refresh button
5. Check the browser console for errors

### If You See Errors
1. The app will show error messages
2. Click "Try again" to retry loading
3. The app will fall back to hardcoded data if needed
4. Check that your CSV file is properly formatted

### Common Issues
- **Wrong format**: Make sure CSV has the correct column headers
- **Missing quotes**: Ensure text fields are properly quoted
- **Empty values**: Use empty strings `""` for missing data
- **File permissions**: Make sure the app can read the CSV files

## 🎯 Best Practices

1. **Backup**: Keep a backup of your working CSV file
2. **Test**: Make small changes first to test the system
3. **Format**: Always maintain the exact column structure
4. **Quotes**: Use double quotes around text fields
5. **Encoding**: Save as UTF-8 encoding

## 📱 App Features

### Dashboard Features
- Real-time statistics
- Refresh button with loading indicator
- Last updated timestamp
- Error handling with retry options

### Leaderboard Features
- Search and filter participants
- Sort by different criteria
- Progress visualization
- Export options (CSV/PDF buttons)

## 🔧 Technical Details

The app uses:
- **React hooks** for state management
- **Automatic polling** every 30 seconds
- **Error boundaries** for graceful failures
- **Fallback data** for reliability
- **Real-time updates** without page refresh

---

**Need Help?** Check the browser console for detailed error messages or contact the development team.
