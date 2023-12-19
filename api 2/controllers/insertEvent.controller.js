
import {google} from "googleapis";
import {OAuth2Client} from "google-auth-library";

const createOAuth2Client = (user) => {
    const oAuth2Client = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: 'http://localhost:8800/auth/google/completeProfile',
    });

    console.log("111");
    
    oAuth2Client.setCredentials({
      access_token: user.accessToken,
      refresh_token: user.refreshToken,
    });
  
    return oAuth2Client;
};


export function insertEvent(req) {
    
    const oAuth2Client = createOAuth2Client(req.user)

    // Set up Google Calendar API
    // const calendar = google.calendar({ version: 'v3', auth: process.env.GOOGLE_API_KEY });
    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });
    

    // Event details
    const event = {
        summary: 'Event Summary',
        description: 'Event Description',
        start: {
          dateTime: '2023-12-15T20:00:00', // December 15th, 8:00 PM (Indian Standard Time)
          timeZone: 'Asia/Kolkata',
        },
        end: {
          dateTime: '2023-12-15T21:00:00', // December 15th, 9:00 PM (Indian Standard Time)
          timeZone: 'Asia/Kolkata',
        },
      };

    // Insert the event
    calendar.events.insert({
    calendarId: 'primary', // 'primary' refers to the user's primary calendar
    resource: event,
    }, (err, res) => {
    if (err) {
        console.error('Error adding event:', err);
        return;
    }
    console.log('Event added:', res.data);
    });
}