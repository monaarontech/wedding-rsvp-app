/**
 * GOOGLE APPS SCRIPT FOR GERETH & GARETTE WEDDING RSVP (REVISED)
 * 
 * Instructions:
 * 1. Open your Google Sheet
 * 2. Set Row 1 headers to:
 *    A1: Timestamp | B1: Guest Name | C1: Attendance | D1: Total Guests | E1: Companion Names | F1: Message
 * 3. Click Extensions > Apps Script
 * 4. Replace Code.gs with this entire script below and click Save 💾
 * 5. Click Deploy > Manage deployments > Click Edit (pencil icon) > Version: "New version" > Click Deploy!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.name || '',
      data.attendance || '',
      data.totalGuests !== undefined ? data.totalGuests : (data.attendance === 'Yes' ? 1 : 0),
      data.companionNames || 'None',
      data.message || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
