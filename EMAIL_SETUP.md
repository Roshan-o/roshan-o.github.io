# Email Setup Instructions

This portfolio includes a contact form that can send emails using EmailJS. Follow these steps to set it up:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen service
5. Note down your **Service ID**

## 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New message from {{name}} - {{subject}}

From: {{name}} <{{email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Note down your **Template ID**

## 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update the Contact Component

1. Open `app/components/Contact.tsx`
2. Find the `sendEmail` function
3. Replace the placeholder IDs with your actual IDs:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID  
  form.current,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email to confirm it's working

## Environment Variables (Optional)

For better security, you can use environment variables:

1. Create a `.env.local` file in your project root
2. Add your EmailJS credentials:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Update the Contact component to use these variables:

```typescript
const result = await emailjs.sendForm(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  form.current,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Troubleshooting

- Make sure your email service is properly configured
- Check that your template variable names match the form field names
- Verify your public key is correct
- Check the browser console for any error messages

## Limitations

EmailJS free plan includes:
- 200 emails per month
- EmailJS branding in emails
- Basic support

For production use, consider upgrading to a paid plan or implementing a backend email solution.