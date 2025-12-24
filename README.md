# Kalluri Roshan Lal - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and a working contact form.

## 🚀 Live Demo

The development server is running at: [http://localhost:3000](http://localhost:3000)

## ✨ Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Send emails directly from the website
- **Modern UI**: Clean and professional design
- **SEO Optimized**: Proper meta tags and structure
- **Fast Performance**: Optimized with Next.js

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section with intro
│   │   ├── About.tsx       # About me section
│   │   ├── Experience.tsx  # Work experience timeline
│   │   ├── Education.tsx   # Education & certifications
│   │   ├── Skills.tsx      # Technical skills
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer section
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Main page
├── public/                # Static assets
└── package.json
```

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **EmailJS** - Email functionality
- **Radix UI** - Accessible components

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your actual information:

**Hero Section** (`app/components/Hero.tsx`):
- Name and title
- Profile description
- Social media links
- Location

**About Section** (`app/components/About.tsx`):
- Personal description
- Years of experience
- Project count
- Technology count

**Contact Section** (`app/components/Contact.tsx`):
- Email address
- Phone number
- Social media profiles

### 2. Work Experience

Edit `app/components/Experience.tsx` to add your actual work experience:

```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    location: "City, Country",
    type: "Full-time/Part-time/Contract",
    description: "Brief description of your role...",
    technologies: ["Tech1", "Tech2", "Tech3"],
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ]
  }
];
```

### 3. Education

Update `app/components/Education.tsx` with your educational background:

```typescript
const education = [
  {
    degree: "Your Degree",
    institution: "University/College Name",
    period: "Start Year - End Year",
    location: "City, Country",
    gpa: "Your GPA/Percentage",
    description: "Description of your studies...",
    coursework: ["Course1", "Course2"],
    achievements: ["Achievement1", "Achievement2"]
  }
];
```

### 4. Skills

Modify `app/components/Skills.tsx` to reflect your actual skills:

```typescript
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "JavaScript", level: 90 }
    ]
  }
];
```

### 5. Projects

Add your real projects in `app/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    category: "Web Development",
    description: "Project description...",
    technologies: ["Tech1", "Tech2"],
    features: ["Feature1", "Feature2"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/your-username/project",
    status: "Completed"
  }
];
```

### 6. Profile Photo

To add your profile photo:
1. Add your image to the `public/` folder
2. Update the Hero component to use your image instead of the placeholder

## 📧 Setting Up Email Functionality

The contact form uses EmailJS to send emails. Follow these steps:

1. Read the detailed setup guide: [EMAIL_SETUP.md](./EMAIL_SETUP.md)
2. Create an account at [EmailJS](https://www.emailjs.com/)
3. Set up your email service and template
4. Update the EmailJS configuration in `app/components/Contact.tsx`

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This portfolio can be deployed to various platforms:

- **Vercel** (Recommended): Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Railway**: Connect your repo for full-stack deployments

## 🎨 Theme Customization

The website supports dark/light mode. To customize colors:

1. Edit CSS variables in `app/globals.css`
2. Modify Tailwind classes in components
3. Update the color palette in `tailwind.config.js` if needed

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1366px - 1920px)  
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Questions?

If you have any questions about setting up or customizing this portfolio, feel free to reach out!

---

**Happy coding!** 🚀
