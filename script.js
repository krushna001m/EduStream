// DOM Elements
const navLinks = document.getElementById('navLinks');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const coursePreviewModal = document.getElementById('coursePreviewModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const coursesContainer = document.getElementById('coursesContainer');
const coursesGrid = document.getElementById('coursesGrid');
const coursePreviewContent = document.getElementById('coursePreviewContent');
const courseSearch = document.getElementById('courseSearch');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');

// Sample course data - expanded with more courses
const courses = [
    {
        id: 1,
        title: 'Web Development Fundamentals',
        category: 'Development',
        image: 'https://via.placeholder.com/300x200',
        lessons: 24,
        duration: '12 hours',
        description: 'Learn the fundamentals of web development including HTML, CSS, and JavaScript to build responsive websites.',
        rating: 4.8,
        price: 49.99,
        instructor: 'John Smith',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'This comprehensive course covers everything you need to know to get started with web development. From basic HTML structure to advanced CSS layouts and JavaScript interactivity.',
        topics: [
            'HTML5 Semantic Elements',
            'CSS Flexbox and Grid',
            'JavaScript ES6+ Features',
            'Responsive Design Principles',
            'Web Accessibility Standards'
        ]
    },
    {
        id: 2,
        title: 'Data Science Essentials',
        category: 'Data Science',
        image: 'https://via.placeholder.com/300x200',
        lessons: 32,
        duration: '16 hours',
        description: 'Master the essential skills of data science including Python, statistics, and machine learning algorithms.',
        rating: 4.7,
        price: 59.99,
        instructor: 'Emily Chen',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'This course provides a solid foundation in data science concepts and techniques. You\'ll learn how to analyze data, create visualizations, and build predictive models.',
        topics: [
            'Python for Data Analysis',
            'Statistical Methods',
            'Data Visualization',
            'Machine Learning Basics',
            'Data Cleaning and Preprocessing'
        ]
    },
    {
        id: 3,
        title: 'Mobile App Development',
        category: 'Development',
        image: 'https://via.placeholder.com/300x200',
        lessons: 28,
        duration: '14 hours',
        description: 'Learn to build native mobile applications for iOS and Android using React Native framework.',
        rating: 4.6,
        price: 54.99,
        instructor: 'Michael Johnson',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'This course teaches you how to develop cross-platform mobile applications using React Native. You\'ll learn component-based architecture, state management, and native APIs.',
        topics: [
            'React Native Components',
            'State Management with Redux',
            'Native Device Features',
            'App Deployment',
            'Performance Optimization'
        ]
    },
    {
        id: 4,
        title: 'UI/UX Design Masterclass',
        category: 'Design',
        image: 'https://via.placeholder.com/300x200',
        lessons: 20,
        duration: '10 hours',
        description: 'Master the principles of user interface and user experience design to create beautiful, functional digital products.',
        rating: 4.9,
        price: 64.99,
        instructor: 'Sarah Williams',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'This masterclass covers everything from design theory to practical implementation. Learn how to create user-centered designs that are both aesthetically pleasing and highly functional.',
        topics: [
            'Design Thinking Process',
            'User Research Methods',
            'Wireframing and Prototyping',
            'Visual Design Principles',
            'Usability Testing'
        ]
    },
    {
        id: 5,
        title: 'Digital Marketing Strategy',
        category: 'Marketing',
        image: 'https://via.placeholder.com/300x200',
        lessons: 18,
        duration: '9 hours',
        description: 'Develop comprehensive digital marketing strategies to grow your business and reach your target audience.',
        rating: 4.5,
        price: 44.99,
        instructor: 'David Thompson',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'Learn how to create and implement effective digital marketing strategies across multiple channels. This course covers SEO, social media, email marketing, and paid advertising.',
        topics: [
            'Market Research and Analysis',
            'Content Marketing Strategy',
            'Social Media Marketing',
            'Search Engine Optimization',
            'Email Marketing Campaigns'
        ]
    },
    {
        id: 6,
        title: 'Business Analytics',
        category: 'Business',
        image: 'https://via.placeholder.com/300x200',
        lessons: 22,
        duration: '11 hours',
        description: 'Learn how to use data analytics to make better business decisions and drive organizational success.',
        rating: 4.7,
        price: 54.99,
        instructor: 'Robert Garcia',
        preview: 'https://www.w3schools.com/html/mov_bbb.mp4',
        details: 'This course teaches you how to collect, analyze, and interpret business data to make informed decisions. You\'ll learn various analytical techniques and tools used in the industry.',
        topics: [
            'Data Collection Methods',
            'Descriptive Analytics',
            'Predictive Analytics',
            'Data Visualization Tools',
            'Business Intelligence'
        ]
    }
];

// Navigation menu functions
function showMenu() {
    navLinks.style.right = '0';
    navLinks.classList.add('active');
}

function hideMenu() {
    navLinks.style.right = '-300px';
    navLinks.classList.remove('active');
}

// Modal functions
function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target === loginModal) {
        closeModal(loginModal);
    } else if (event.target === signupModal) {
        closeModal(signupModal);
    } else if (event.target === coursePreviewModal) {
        closeModal(coursePreviewModal);
    }
};

// Event listeners for buttons
if (loginBtn) {
    loginBtn.addEventListener('click', () => openModal(loginModal));
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => openModal(signupModal));
}

// Switch between login and signup
if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        openModal(signupModal);
    });
}

if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(signupModal);
        openModal(loginModal);
    });
}

// Close buttons for modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
    });
});

// Form submissions
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real application, you would send this data to a server
        console.log('Login attempt:', { email, password });
        
        // Simulate successful login
        alert('Login successful!');
        closeModal(loginModal);
        
        // Update UI to show logged in state (simplified for demo)
        document.querySelector('.auth-buttons').innerHTML = `
            <div class="user-profile">
                <span>Welcome, ${email.split('@')[0]}</span>
                <button id="logoutBtn" class="btn login-btn">Logout</button>
            </div>
        `;
        
        // Add logout functionality
        document.getElementById('logoutBtn').addEventListener('click', function() {
            location.reload(); // Simple reload to reset the UI
        });
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real application, you would send this data to a server
        console.log('Signup attempt:', { name, email, password });
        
        // Simulate successful signup
        alert('Account created successfully! Please log in.');
        closeModal(signupModal);
        openModal(loginModal);
    });
}

// Load courses for homepage
function loadCourses() {
    if (coursesContainer) {
        coursesContainer.innerHTML = '';
        
        // Display only first 3 courses on homepage
        const homepageCourses = courses.slice(0, 3);
        
        homepageCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-details">
                    <span class="course-category">${course.category}</span>
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-info">
                        <span><i class="fas fa-book"></i> ${course.lessons} lessons</span>
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    </div>
                    <p class="course-description">${course.description}</p>
                    <div class="course-footer">
                        <div class="course-rating">
                            <i class="fas fa-star"></i>
                            <span>${course.rating}</span>
                        </div>
                        <div class="course-price">$${course.price}</div>
                    </div>
                    <button class="btn preview-btn" data-id="${course.id}">Preview Course</button>
                </div>
            `;
            coursesContainer.appendChild(courseCard);
        });
        
        // Add event listeners to preview buttons
        document.querySelectorAll('.preview-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const courseId = parseInt(this.getAttribute('data-id'));
                openCoursePreview(courseId);
            });
        });
    }
}

// Load all courses for courses page
function loadAllCourses(filteredCourses = null) {
    if (coursesGrid) {
        coursesGrid.innerHTML = '';
        
        const coursesToDisplay = filteredCourses || courses;
        
        if (coursesToDisplay.length === 0) {
            coursesGrid.innerHTML = `
                <div class="no-courses">
                    <h3>No courses found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }
        
        coursesToDisplay.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-details">
                    <span class="course-category">${course.category}</span>
                    <h3 class="course-title">${course.title}</h3>
                    <div class="course-info">
                        <span><i class="fas fa-book"></i> ${course.lessons} lessons</span>
                        <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    </div>
                    <p class="course-description">${course.description}</p>
                    <div class="course-footer">
                        <div class="course-rating">
                            <i class="fas fa-star"></i>
                            <span>${course.rating}</span>
                        </div>
                        <div class="course-price">$${course.price}</div>
                    </div>
                    <button class="btn preview-btn" data-id="${course.id}">Preview Course</button>
                </div>
            `;
            coursesGrid.appendChild(courseCard);
        });
        
        // Add event listeners to preview buttons
        document.querySelectorAll('.preview-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const courseId = parseInt(this.getAttribute('data-id'));
                openCoursePreview(courseId);
            });
        });
    }
}

// Filter courses
function filterCourses() {
    if (!coursesGrid) return;
    
    const searchTerm = courseSearch ? courseSearch.value.toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value : 'all';
    const price = priceFilter ? priceFilter.value : 'all';
    const sort = sortFilter ? sortFilter.value : 'popular';
    
    let filteredCourses = [...courses];
    
    // Apply search filter
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) || 
            course.description.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredCourses = filteredCourses.filter(course => 
            course.category.toLowerCase() === category
        );
    }
    
    // Apply price filter
    if (price !== 'all') {
        switch(price) {
            case 'free':
                filteredCourses = filteredCourses.filter(course => course.price === 0);
                break;
            case 'paid':
                filteredCourses = filteredCourses.filter(course => course.price > 0);
                break;
            case 'under-50':
                filteredCourses = filteredCourses.filter(course => course.price < 50);
                break;
            case '50-100':
                filteredCourses = filteredCourses.filter(course => course.price >= 50 && course.price <= 100);
                break;
            case 'over-100':
                filteredCourses = filteredCourses.filter(course => course.price > 100);
                break;
        }
    }
    
    // Apply sorting
    switch(sort) {
        case 'popular':
            filteredCourses.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            // In a real app, you would sort by date
            // Here we're just using the ID as a proxy for "newest"
            filteredCourses.sort((a, b) => b.id - a.id);
            break;
        case 'price-low':
            filteredCourses.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredCourses.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredCourses.sort((a, b) => b.rating - a.rating);
            break;
    }
    
    loadAllCourses(filteredCourses);
}

// Open course preview
function openCoursePreview(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    if (!course) return;
    
    coursePreviewContent.innerHTML = `
        <div class="preview-header">
            <img src="${course.image}" alt="${course.title}">
            <div class="preview-header-text">
                <h3>${course.title}</h3>
                <p>Instructor: ${course.instructor}</p>
            </div>
        </div>
        <div class="preview-video">
            <video controls>
                <source src="${course.preview}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="preview-details">
            <h4>About This Course</h4>
            <p>${course.details}</p>
            <h4>What You'll Learn</h4>
            <ul>
                ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        </div>
        <div class="quiz-container">
            <div class="quiz-header">
                <h3>Sample Quiz</h3>
                <p>Try this sample question from the course</p>
            </div>
            <div class="quiz-question">
                <p>What does HTML stand for?</p>
                <div class="quiz-options">
                    <div class="quiz-option" data-correct="false">Hyperlinks and Text Markup Language</div>
                    <div class="quiz-option" data-correct="true">Hyper Text Markup Language</div>
                    <div class="quiz-option" data-correct="false">Home Tool Markup Language</div>
                    <div class="quiz-option" data-correct="false">Hyper Text Making Language</div>
                </div>
            </div>
        </div>
        <div class="preview-footer">
            <div class="preview-price">$${course.price}</div>
            <button class="btn enroll-btn">Enroll Now</button>
        </div>
    `;
    
    // Add event listeners to quiz options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function() {
            // Remove any previous selections
            document.querySelectorAll('.quiz-option').forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
            
            // Add selected class
            this.classList.add('selected');
            
            // Check if correct
            const isCorrect = this.getAttribute('data-correct') === 'true';
            
            // Add appropriate class after a short delay
            setTimeout(() => {
                if (isCorrect) {
                    this.classList.add('correct');
                } else {
                    this.classList.add('incorrect');
                    // Show the correct answer
                    document.querySelector('.quiz-option[data-correct="true"]').classList.add('correct');
                }
            }, 500);
        });
    });
    
    // Add event listener to enroll button
    document.querySelector('.enroll-btn').addEventListener('click', function() {
        // In a real application, this would handle the enrollment process
        alert(`You have successfully enrolled in "${course.title}"!`);
        closeModal(coursePreviewModal);
    });
    
    openModal(coursePreviewModal);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load courses on homepage
    loadCourses();
    
    // Load all courses on courses page
    loadAllCourses();
    
    // Add event listeners for filters
    if (courseSearch) {
        courseSearch.addEventListener('input', filterCourses);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterCourses);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterCourses);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', filterCourses);
    }
    
    // Add event listeners for pagination (simplified)
    document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled || this.classList.contains('active')) return;
            
            document.querySelector('.pagination-btn.active').classList.remove('active');
            this.classList.add('active');
            
            // In a real application, this would load the appropriate page of courses
            // For this demo, we'll just reload the same courses
            loadAllCourses();
        });
    });
});