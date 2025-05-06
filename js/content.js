// User information to prefill
const userInfo = {
  name: "<your_name>",
  phone: "<your_number>",
  email: "<your_email>",
  ctc: "<your_ctc>",
  job_location: "Remote",
  preferred_location: "Remote/NCR/Bangalore",
  years_of_experience: "6",
  notice_period: "0 days",
  current_role: "SDE2",
  current_company: "<current_company_name>",
  linkedin: "<linkedin_profile_url>",
  github: "<github_profile_url>",
};

// Mapping of possible keywords to userInfo fields
const fieldMappings = [
  {
    keys: ["name", "full name", "your name"],
    value: userInfo.name
  },
  {
    keys: ["phone", "mobile", "number", "contact"],
    value: userInfo.phone
  },
  {
    keys: ["email", "e-mail", "mail id"],
    value: userInfo.email
  },
  {
    keys: ["ctc", "compensation", "package", "pay", "salary", "current ctc", "current compensation"],
    value: userInfo.ctc
  },
  {
    keys: ["current job location", "present working location", "current location", "job location"],
    value: userInfo.job_location
  },
  {
    keys: ["preferred working location", "preferred location", "location preference"],
    value: userInfo.preferred_location
  },
  {
    keys: ["years of experience", "experience", "total experience"],
    value: userInfo.years_of_experience
  },
  {
    keys: ["notice period", "notice"],
    value: userInfo.notice_period
  },
  {
    keys: ["current role", "current designation", "role"],
    value: userInfo.current_role
  },
  {
    keys: ["current company", "company", "employer"],
    value: userInfo.current_company
  },
  {
    keys: ["linkedin", "linkedin profile", "linkedin url"],
    value: userInfo.linkedin
  },
  {
    keys: ["github", "github profile", "github url"],
    value: userInfo.github
  }
];

// Function to find the best matching value for a label
function getMappedValue(label) {
  label = label.toLowerCase();
  for (const mapping of fieldMappings) {
    for (const key of mapping.keys) {
      if (label.includes(key)) {
        return mapping.value;
      }
    }
  }
  return null;
}

// Function to fill form fields
function fillForm() {
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    const label = input.closest('div[role="listitem"]')?.textContent?.toLowerCase() ||
                  input.closest('div[role="group"]')?.textContent?.toLowerCase() ||
                  input.closest('label')?.textContent?.toLowerCase();
    if (label) {
      const value = getMappedValue(label);
      if (value !== null) {
        input.value = value;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  });
}

// Set up MutationObserver to detect form field changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.type === 'childList') {
      fillForm();
    }
  });
});

// Start observing the form container
const formContainer = document.querySelector('form[role="list"]') ||
                      document.querySelector('form[role="form"]');
if (formContainer) {
  observer.observe(formContainer, {
    childList: true,
    subtree: true
  });
}

// Also try to fill immediately in case fields are already loaded
fillForm();

// Add periodic check as a fallback
setInterval(fillForm, 1000);