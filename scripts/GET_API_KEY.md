# How to Get Your GSA API Key (2 Minutes)

## Step-by-Step Instructions

### 1. Visit the GSA API Page

Open this URL in your browser:
**https://open.gsa.gov/api/perdiem/**

### 2. Scroll to "Getting Started" Section

Look for the heading **"Getting started"** on the page.

Under **"User requirements"**, you'll see:
> "To begin using this API, you will need to register for an API Key. You can sign up for an API key below."

### 3. Fill Out the Signup Form

The form will ask for:
- **Name:** Your full name
- **Email:** Your email address

**Note:** This is a FREE service. No payment required.

### 4. Submit the Form

Click the submit button.

**You will receive your API key INSTANTLY via email.**

### 5. Copy Your API Key

Check your email for the API key.

It will look something like this:
```
DEMO_KEY1234567890abcdefghijklmnopqrstuvwxyz
```

### 6. Set Environment Variable

Open your terminal and run:

```bash
export GSA_API_KEY="paste-your-key-here"
```

Replace `paste-your-key-here` with the actual key from your email.

**To make it permanent** (so you don't have to set it every time):

Add this line to your `~/.zshrc` or `~/.bashrc`:

```bash
echo 'export GSA_API_KEY="your-key-here"' >> ~/.zshrc
source ~/.zshrc
```

### 7. Verify It Works

Test the API key:

```bash
curl -H "x-api-key: $GSA_API_KEY" \
  "https://api.gsa.gov/travel/perdiem/v2/rates/city/Washington/state/DC/year/2026"
```

If it works, you'll see JSON data returned.

If you get a 403 error, the API key is not set correctly.

---

## Quick Commands

Once you have your API key set:

```bash
# Check if API key is set
echo $GSA_API_KEY

# Run the verification script
cd ~/Documents/per-diem/scripts
node fetch-gsa-data.js
```

---

## Troubleshooting

### "No API key returned via email"

1. Check spam folder
2. Wait 5 minutes (should be instant, but occasionally delayed)
3. Try signing up again with a different email
4. Contact GSA support: digitalteam@gsa.gov

### "403 Forbidden" error when testing

1. Verify the environment variable is set: `echo $GSA_API_KEY`
2. Make sure there are no extra spaces or quotes
3. Try copying the key directly without quotes: `export GSA_API_KEY=your-key`
4. Request a new key if the old one expired

### "Command not found: node"

You need Node.js installed:

```bash
# On macOS with Homebrew
brew install node

# Verify installation
node --version
```

---

## Rate Limits

- **Default:** 1,000 requests per hour
- **Sufficient for:** Our use case (fetching ~20 cities)
- **Need more?** Email digitalteam@gsa.gov to request increase

---

## Security Note

**Do NOT commit your API key to GitHub.**

The environment variable approach keeps it secure.

If you accidentally expose your key:
1. Request a new key
2. Revoke the old one (contact GSA)

---

**Ready?** Get your key now: https://open.gsa.gov/api/perdiem/

Once you have it, run:

```bash
export GSA_API_KEY="your-key"
cd ~/Documents/per-diem/scripts
node fetch-gsa-data.js
```

You'll have verified US per diem data in 2 minutes! 🚀
