# NUESA Uniuyo E-Library - Making Learning Easy

A comprehensive digital library platform for the Faculty of Engineering, University of Uyo. Built with React, Tailwind CSS, and Framer Motion for a modern, interactive user experience.

## 🚀 Features

### 📚 Core Features
- **Interactive Landing Page** with animations and parallax effects
- **Department Navigation** with detailed course materials
- **Faculty Map** with interactive markers for all departments
- **Course Materials** organized by level and semester
- **Leadership Profiles** for faculty and student executives
- **Admin Dashboard** for content management
- **Responsive Design** optimized for all devices

### 🎨 Design & UX
- **Color Theme**: Green (#2E7D32), White (#FFFFFF), Light Orange (#FFB74D)
- **Typography**: Poppins and Inter fonts
- **Animations**: Framer Motion for smooth transitions
- **Modern UI**: Card-based layout with soft shadows and rounded corners

### 🏛️ Departments Covered
- Mechanical Engineering
- Chemical Engineering
- Petroleum Engineering
- Electrical Engineering
- Computer Engineering
- Agricultural Engineering
- Food Engineering

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: React-Leaflet
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd c:\Users\DATASOFT\Desktop\Nuesa_library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.js          # Navigation header
│   │   └── Footer.js          # Footer with links and ads
│   └── ParticleBackground.js  # Animated background
├── pages/
│   ├── LandingPage.js         # Home page with hero section
│   ├── DepartmentsPage.js     # Department overview
│   ├── DepartmentDetail.js    # Individual department page
│   ├── CoursePage.js          # Course materials page
│   ├── MapPage.js             # Interactive faculty map
│   ├── AboutPage.js           # Leadership and about
│   └── AdminPage.js           # Admin dashboard
├── App.js                     # Main app component
├── index.js                   # App entry point
└── index.css                  # Global styles
```

## 🎯 Key Pages

### 🏠 Landing Page
- Hero section with animated text and parallax background
- Statistics showcase
- Feature highlights
- Call-to-action sections

### 🏢 Departments Page
- Grid layout of all 7 engineering departments
- Hover animations and department stats
- Direct links to course materials

### 📖 Course Materials
- Organized by academic level (100-500)
- Semester-based course listings
- Material preview and download options
- Search and filter functionality

### 🗺️ Faculty Map
- Interactive map using React-Leaflet
- Department location markers
- Building information and contact details
- Multiple map view options

### 👥 Leadership Section
- Faculty deans (current and past)
- NUESA executive council
- Department heads
- Profile cards with achievements

### ⚙️ Admin Dashboard
- Secure login system
- Material upload interface
- User management
- Analytics and statistics

## 🔐 Admin Access

**Demo Credentials:**
- Username: `admin`
- Password: `nuesa2024`

## 🎨 Customization

### Colors
The color scheme can be modified in `tailwind.config.js`:
```javascript
colors: {
  nuesa: {
    green: '#2E7D32',
    orange: '#FFB74D',
    // Add custom colors
  }
}
```

### Animations
Framer Motion animations can be customized in individual components. Key animation variants are defined in each page component.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`

## 🔧 Configuration

### Environment Variables
Create a `.env` file for configuration:
```env
REACT_APP_API_URL=your_api_url
REACT_APP_GOOGLE_ADSENSE_ID=your_adsense_id
```

### Google AdSense Integration
Ad spaces are pre-configured in:
- Footer banner (728x90)
- Sidebar ads (300x250)
- Course page sidebar

## 📊 Features Roadmap

### Phase 1 (Current)
- ✅ Landing page with animations
- ✅ Department navigation
- ✅ Course material organization
- ✅ Interactive faculty map
- ✅ Leadership profiles
- ✅ Admin dashboard

### Phase 2 (Future)
- [ ] User authentication system
- [ ] File upload and storage
- [ ] Search functionality
- [ ] User profiles and favorites
- [ ] Discussion forums
- [ ] Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Development Team

Built with ❤️ for the NUESA community at University of Uyo.

## 📞 Support

For support and questions:
- Email: nuesa@uniuyo.edu.ng
- Phone: +234 85 200 2345

---

**NUESA Uniuyo E-Library** - Making Learning Easy 🎓
