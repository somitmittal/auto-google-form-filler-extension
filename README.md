# Google Form Filler Chrome Extension

Automatically fills Google Forms with your predefined information using smart field mapping.

## Features

- **Auto-fills** your name, phone, email, CTC, job location, and preferred location on Google Forms.
- **AI-like mapping**: Recognizes various label phrasings (e.g., "Current job location", "Present working location", "Compensation", "Package", etc.) and fills the correct value.
- Works on all Google Forms.

## How It Works

The extension scans Google Forms for input fields and matches their labels to your information using a flexible keyword mapping system. This ensures that even if the field names vary, your data is filled in the right place.

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. The extension icon should appear in your browser.

## Configuration

To change your personal information, edit the `userInfo` object in `js/content.js`:

```js
const userInfo = {
  name: "Your Name",
  phone: "Your Phone",
  email: "your@email.com",
  ctc: "Your CTC",
  job_location: "Your Current Job Location",
  preferred_location: "Your Preferred Location(s)"
};
```

## Future Enhancements
- Support for more Google Form types.
- Customizable keyword mapping.
- Integration with other HR platforms.
- Add AI functionality to make it more robust and avoid keyword/field mappings.