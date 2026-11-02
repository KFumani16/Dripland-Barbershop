# Dripland Barbershop Website

## Student Information

**Student Name:** Fumani Khoza  
**Student Number:** ST10511032  
**Module:** Web Development (Introduction)  
**Module Code:** WEDE5020  
**Institution:** Rosebank International

---

## Project Overview

Dripland Barbershop is a local barbershop based in Mkhuhlu, Mpumalanga, South Africa. The business was established in 2019 and provides quality haircut and grooming services to customers in the local community.

The purpose of this website is to create a professional online presence for Dripland Barbershop. The website provides customers with information about the business, services, gallery, location, enquiries and contact details.

The website is developed using HTML, CSS and JavaScript, with responsive design techniques used to improve the user experience across desktop, tablet and mobile screen sizes.

---

## Website Goals and Objectives

The main goals and objectives of the website are to:

- Establish a professional online presence for Dripland Barbershop.
- Increase awareness of the business.
- Improve customer access to business information.
- Display the services offered by the barbershop.
- Provide customers with information about the barbershop's location.
- Provide directions to the business.
- Improve customer communication through contact and enquiry pages.
- Create a visually attractive and easy-to-navigate website.
- Support future business growth.

---

## Target Audience

The website is aimed at:

- Existing Dripland Barbershop customers.
- Potential new customers in Mpumalanga.
- Students.
- Working professionals.
- Visitors searching online for a local barbershop.

---

## Key Features and Functionality

The website includes the following pages and features:

### Home Page
- Welcome message.
- Introduction to Dripland Barbershop.
- Navigation menu.
- Dripland Barbershop logo.
- Featured information about the business.

### About Page
- Information about Dripland Barbershop.
- Background and history of the business.
- Business information.

### Services Page
- Haircut and grooming services.
- Service information.
- Service cards arranged using CSS Grid.
- Hover effects on service cards.
- JavaScript service search functionality.

### Gallery Page
- Collection of Dripland Barbershop images.
- Responsive image layout.
- CSS Grid layout.
- Image hover effects.
- JavaScript lightbox functionality for viewing enlarged images.

### Location Page
- Dripland Barbershop location in Mkhuhlu, Mpumalanga.
- Physical location information.
- Google Maps location.
- Get Directions link.

### Enquiry Page
- Customer enquiry functionality.
- Form for customers to submit enquiries.
- JavaScript form validation.
- Dynamic service price responses to help customers understand service costs.

### Contact Page
- Contact information.
- General customer communication.
- Contact and appointment form.
- HTML5 and JavaScript form validation.
- Appointment request details prepared in an email using a mailto link.

---

## Website Design

The website uses a consistent visual design throughout the pages.

### Colour Scheme

The main colours used are:

- Dark Blue
- Gold
- White

Dark blue is used as a primary colour for the website header and navigation, while gold is used for headings, borders and other visual elements.

### Typography

The website uses a simple and readable typography system. Arial is used as the main font, with different font sizes and weights applied to headings and paragraphs.

CSS relative units such as `rem` are used for typography to support responsive design.

---

## Part 1 – Website Planning and Structure

Part 1 focused on planning the website structure and developing the initial HTML pages.

The initial website structure included the main pages required for the project. HTML elements such as headings, paragraphs, images, links, navigation and forms were used to create the website content.

The website was structured so that customers could navigate between the different pages using the navigation menu.

An additional Gallery page was included to display images of hairstyles and the barbershop.

---

## Part 2 – CSS Styling and Responsive Design

Part 2 focused on improving the visual appearance of the website using CSS and making the website responsive across different screen sizes.

### External CSS Stylesheet

An external stylesheet named `style.css` was created inside the `css` folder.

The stylesheet is linked to the website pages using:

```html
<link rel="stylesheet" href="css/style.css">
```

### CSS Styling

CSS selectors and properties were used to style the website elements. These included:

- Background colours and text colours.
- Font sizes and typography.
- Margins and padding.
- Borders and rounded corners.
- Navigation menu styling.
- Image sizing and positioning.
- Hover effects and transitions.

### Layout and Design

CSS Grid and Flexbox were used to organise website content and create structured layouts.

Service cards and gallery images were arranged to improve the presentation of information.

### Responsive Design

Media queries were implemented to adjust the website layout for different screen sizes.

The website was tested using browser developer tools in mobile and desktop views. The pages were checked for overlapping elements, layout problems and horizontal scrolling.

### Visual Improvements

The website design was improved by:

- Using a consistent dark blue, gold and white colour scheme.
- Improving heading sizes and positioning.
- Adding smooth navigation effects.
- Adding image hover effects.
- Improving the positioning and sizing of the business logo.

---

## Part 3 – JavaScript, Website Functionality and SEO

Part 3 focused on improving website functionality using JavaScript, implementing form validation and improving search engine optimisation (SEO).

### JavaScript Implementation

A JavaScript file named `script.js` was created inside the `js` folder and linked to the website pages.

JavaScript was used to add interactive functionality to the website.

### Interactive Features

The following JavaScript features were implemented:

**1. Gallery Lightbox**

A lightbox feature was added to the Gallery page. Visitors can click on an image to view a larger version. The lightbox can be closed using the close button, by clicking outside the image or by pressing the Escape key.

**2. Services Search Functionality**

A search bar was added to the Services page. JavaScript allows visitors to search for available haircut and grooming services.

**3. Enquiry Form Functionality**

JavaScript validation was added to the Enquiry form to check that customers provide the required information. A dynamic price response was also implemented so that customers can view the cost of their selected service.

**4. Appointment Form Functionality**

The Contact page includes JavaScript validation for appointment information. The form checks required information and prevents invalid or past appointment dates from being accepted.

A mailto link is used to prepare an appointment request email containing the customer's information and appointment details.

### Form Validation

HTML5 and JavaScript validation techniques were used to improve the accuracy of customer information.

The validation includes:

- Required fields.
- Valid email address format.
- South African phone number format.
- Appointment date validation.
- Message length validation.
- Form submission checks.

### Search Engine Optimisation (SEO)

SEO improvements were implemented to help search engines understand the website content.

The improvements include:

- Unique page titles.
- Meta descriptions and keywords.
- Appropriate heading structures.
- Descriptive image alternative text.
- Internal navigation links between website pages.
- Mobile-friendly layouts.
- A `robots.txt` file.
- A `sitemap.xml` file.

These improvements help make the website more accessible, organised and easier for search engines to understand.

---

## Website Testing

The Dripland Barbershop website was tested using Google Chrome and its Developer Tools to ensure that all pages and interactive features function correctly.

The following tests were performed:

| Test | Result |
|---|---|
| Navigation links across all pages | Successful |
| Gallery lightbox | Successful |
| Services search bar | Successful |
| Contact form validation | Successful |
| Contact form email functionality | Successful |
| Enquiry form validation | Successful |
| Dynamic service price response | Successful |
| Interactive location map | Successful |
| Mobile responsiveness | Successful |
| Tablet responsiveness | Successful |
| Desktop responsiveness | Successful |
| JavaScript console message | Successful |

### Responsive Design Testing

The website was tested at three different screen sizes using Chrome Developer Tools:

- Desktop view – Successful
- Tablet view – Successful
- Mobile view – Successful

Screenshots of the responsive testing are saved in the `screenshots` folder:

- `screenshots/desktop-view.png`
- `screenshots/tablet-view.png`
- `screenshots/mobile-view.png`

### Lighthouse Performance Testing

Google Chrome Lighthouse was used to evaluate the website in Mobile mode.

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 93 |
| Best Practices | 100 |
| SEO | 100 |

The results indicate that the website performs well in terms of loading speed, accessibility, best practices and search engine optimisation.

## Changelog

### Part 1
- Created the initial HTML website structure.
- Added the Home, About, Services, Gallery, Contact, Enquiry and Location pages.
- Added the business logo and gallery images.
- Created the website navigation menu.

### Part 2
- Created an external CSS stylesheet.
- Applied the dark blue, gold and white colour scheme.
- Improved typography, spacing and page layouts.
- Implemented responsive design using media queries.
- Added CSS hover effects and transitions.
- Improved the logo positioning and sizing.
- Updated website styling based on feedback from the previous phase.

### Part 3
- Created and linked the JavaScript file.
- Implemented the Gallery lightbox.
- Added the Services search functionality.
- Implemented Enquiry form validation.
- Added dynamic service price responses.
- Implemented appointment form validation.
- Added appointment email preparation using a mailto link.
- Added SEO titles, meta descriptions and image alt text.
- Created the robots.txt and sitemap.xml files.
- Tested website navigation, forms and responsiveness.

---

## Technologies and Tools Used

- **HTML5:** Used to structure website content.
- **CSS3:** Used to style the website and implement responsive layouts.
- **JavaScript:** Used to implement interactive features and form validation.
- **Visual Studio Code:** Used as the code editor.
- **Web Browser Developer Tools:** Used for testing and debugging.
- **Git and GitHub:** Used for version control and project management.

---

## References

Google (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Mozilla Developer Network (MDN) (n.d.) *HTML: HyperText Markup Language*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML (Accessed: 2 November 2026).

Mozilla Developer Network (MDN) (n.d.) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 2 November 2026).

Mozilla Developer Network (MDN) (n.d.) *JavaScript*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript (Accessed: 2 November 2026).

Mozilla Developer Network (MDN) (n.d.) *HTML Forms*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms (Accessed: 2 November 2026).

World Wide Web Consortium (W3C) (n.d.) *Web Accessibility Initiative (WAI)*. Available at: https://www.w3.org/WAI/ (Accessed: 2 November 2026).

---

## Conclusion

The Dripland Barbershop website was developed to provide the business with a professional online presence. The project progressed from the initial HTML structure in Part 1 to CSS styling and responsive design in Part 2, followed by JavaScript functionality, form validation and SEO improvements in Part 3.

The final website aims to improve customer access to business information, showcase haircut and grooming services, and make communication with the barbershop easier.