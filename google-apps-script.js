/**
 * GOOGLE APPS SCRIPT FOR GERETH & GARETTE WEDDING RSVP (BULLETPROOF)
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
    var data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = data.timestamp || new Date().toLocaleString();
    var name = data.name || data.guestName || '';
    var attendance = data.attendance || '';
    
    // Total guests: check data.totalGuests, data.guestCount, or default to 1 if attending
    var totalGuests = 0;
    if (data.totalGuests !== undefined && data.totalGuests !== null && data.totalGuests !== '') {
      totalGuests = Number(data.totalGuests);
    } else if (data.guestCount !== undefined && data.guestCount !== null && data.guestCount !== '') {
      totalGuests = Number(data.guestCount);
    } else if (attendance === 'Yes' || attendance === 'Joyfully Accept') {
      totalGuests = 1;
    }

    var companionNames = data.companionNames || data.companions || 'None';
    var message = data.message || '';

    sheet.appendRow([
      timestamp,
      name,
      attendance,
      totalGuests,
      companionNames,
      message
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
