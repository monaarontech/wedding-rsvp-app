/**
 * GOOGLE APPS SCRIPT FOR WEDDING RSVP
 * 
 * Instructions:
 * 1. Open a new Google Sheet (e.g. name it "Raymond & Dianne Wedding RSVPs")
 * 2. In row 1, add column headers:
 *    A1: Timestamp | B1: Name | C1: Attendance | D1: Guest Count | E1: Dietary | F1: Message
 * 3. Click Extensions > Apps Script
 * 4. Paste this entire code into Code.gs
 * 5. Click Deploy > New deployment
 * 6. Select type: Web app
 *    - Description: "RSVP Endpoint"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 7. Click Deploy, authorize permissions, and copy the Web App URL!
 * 8. Add that Web App URL to your Vercel Environment Variables as `VITE_GOOGLE_SHEET_URL`
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.attendance || '',
      data.guestCount || '0',
      data.dietary || '',
      data.message || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
