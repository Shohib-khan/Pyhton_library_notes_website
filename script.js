/* ============================================
   PYROYAL - JavaScript
   3D Visualizations, Quizzes & Interactivity
   ============================================ */

// ============================================
// DATA: QUIZ QUESTIONS
// ============================================
const quizData = {
    numpy: [
        {
            question: "What function creates an array of evenly spaced values over a specified range?",
            code: "arr = np.______(0, 10, 5)",
            options: ["range", "arange", "linspace", "space"],
            correct: 1,
            explanation: "np.arange() creates values with a specified step size (0, 2, 4, 6, 8)."
        },
        {
            question: "What is the output of np.zeros((2, 3))?",
            code: "print(np.zeros((2, 3)))",
            options: [
                "Array of random values",
                "2x3 array filled with 0s",
                "2x3 array filled with 1s",
                "Error"
            ],
            correct: 1,
            explanation: "np.zeros() creates an array of the given shape filled with 0s."
        },
        {
            question: "Which operation performs element-wise multiplication?",
            code: "a = np.array([1,2,3])\nb = np.array([4,5,6])\nprint(a * b)",
            options: [
                "[4, 10, 18]",
                "32",
                "Error",
                "[1, 2, 3, 4, 5, 6]"
            ],
            correct: 0,
            explanation: "The * operator performs element-wise multiplication in NumPy: [1*4, 2*5, 3*6]."
        },
        {
            question: "What does arr.shape return for arr = np.array([[1,2],[3,4],[5,6]])?",
            code: "arr = np.array([[1,2],[3,4],[5,6]])\nprint(arr.shape)",
            options: ["(2, 3)", "(3, 2)", "(6,)", "[3, 2]"],
            correct: 1,
            explanation: "shape returns (rows, columns) = (3, 2)."
        },
        {
            question: "How do you reshape a 1D array of 6 elements into a 2x3 array?",
            code: "arr = np.array([1,2,3,4,5,6])",
            options: [
                "arr.reshape(2, 3)",
                "arr.resize(2, 3)",
                "arr.shape(2, 3)",
                "arr.redo(2, 3)"
            ],
            correct: 0,
            explanation: "reshape() changes the shape without modifying data. resize() modifies in-place."
        },
        {
            question: "What is broadcasting in NumPy?",
            code: "",
            options: [
                "Sending arrays over network",
                "Automatic stretching of smaller arrays to match larger ones",
                "Creating a copy of an array",
                "Converting array to list"
            ],
            correct: 1,
            explanation: "Broadcasting allows NumPy to perform operations on arrays of different shapes."
        },
        {
            question: "Which function computes the matrix product of two arrays?",
            code: "A = np.array([[1,2],[3,4]])\nB = np.array([[5,6],[7,8]])",
            options: [
                "A * B",
                "A @ B",
                "A.dot(B) only",
                "Both B and C"
            ],
            correct: 3,
            explanation: "Both A @ B (Python 3.5+) and np.dot(A, B) compute matrix multiplication."
        },
        {
            question: "What does np.random.seed(42) do?",
            code: "np.random.seed(42)",
            options: [
                "Generates 42 random numbers",
                "Sets random seed for reproducibility",
                "Creates array of 42s",
                "Limits random range to 42"
            ],
            correct: 1,
            explanation: "Setting a seed ensures the same 'random' numbers are generated every time."
        },
        {
            question: "How do you select elements greater than 5 from an array?",
            code: "arr = np.array([1, 6, 2, 8, 3])",
            options: [
                "arr.where(arr > 5)",
                "arr[arr > 5]",
                "arr.select(arr > 5)",
                "arr.filter(arr > 5)"
            ],
            correct: 1,
            explanation: "Boolean indexing: arr[condition] selects elements where condition is True."
        },
        {
            question: "What is the output of np.linspace(0, 1, 5)?",
            code: "print(np.linspace(0, 1, 5))",
            options: [
                "[0, 0.2, 0.4, 0.6, 0.8, 1.0]",
                "[0, 0.25, 0.5, 0.75, 1.0]",
                "[0, 1, 2, 3, 4]",
                "[0, 0.1, 0.2, 0.3, 0.4]"
            ],
            correct: 1,
            explanation: "linspace creates 5 evenly spaced values between 0 and 1, inclusive."
        }
    ],
    pandas: [
        {
            question: "What is a Pandas Series?",
            code: "",
            options: [
                "A 2D labeled data structure",
                "A 1D labeled array",
                "A 3D data cube",
                "A plotting function"
            ],
            correct: 1,
            explanation: "A Series is a 1D labeled array capable of holding any data type."
        },
        {
            question: "How do you read a CSV file in Pandas?",
            code: "",
            options: [
                "pd.read_csv('file.csv')",
                "pd.load_csv('file.csv')",
                "pd.open('file.csv')",
                "pd.import_csv('file.csv')"
            ],
            correct: 0,
            explanation: "pd.read_csv() is the standard function to load CSV files."
        },
        {
            question: "What does df.head() return?",
            code: "df = pd.DataFrame({'A': [1,2,3,4,5,6,7,8,9,10]})\nprint(df.head())",
            options: [
                "Last 5 rows",
                "First 5 rows",
                "All rows",
                "Column names only"
            ],
            correct: 1,
            explanation: "head() returns the first 5 rows by default. Use head(n) for n rows."
        },
        {
            question: "How do you select rows where 'Age' is greater than 25?",
            code: "",
            options: [
                "df['Age' > 25]",
                "df[df['Age'] > 25]",
                "df.select('Age > 25')",
                "df.where('Age', 25)"
            ],
            correct: 1,
            explanation: "Boolean indexing: df[condition] filters rows where condition is True."
        },
        {
            question: "What is the difference between loc and iloc?",
            code: "",
            options: [
                "No difference",
                "loc uses labels, iloc uses integer positions",
                "loc is faster",
                "iloc is for strings only"
            ],
            correct: 1,
            explanation: "loc uses index labels, iloc uses integer positions (0-based)."
        },
        {
            question: "How do you handle missing values by filling with the mean?",
            code: "",
            options: [
                "df.fillna(df.mean())",
                "df.dropna()",
                "df.replace_na(df.mean())",
                "df.clean()"
            ],
            correct: 0,
            explanation: "fillna() fills missing values. df.mean() computes column means."
        },
        {
            question: "What does groupby() do?",
            code: "df.groupby('City')['Sales'].sum()",
            options: [
                "Sorts by City",
                "Groups data and applies aggregation",
                "Filters by City",
                "Merges dataframes"
            ],
            correct: 1,
            explanation: "groupby splits data into groups, then you apply aggregation functions."
        },
        {
            question: "Which merge type keeps ALL rows from BOTH dataframes?",
            code: "pd.merge(df1, df2, on='id', how=____)",
            options: ["left", "right", "inner", "outer"],
            correct: 3,
            explanation: "outer merge keeps all rows from both dataframes, filling NaN where no match."
        },
        {
            question: "What does df.describe() show?",
            code: "",
            options: [
                "Column data types",
                "Statistical summary of numeric columns",
                "Missing values count",
                "First 10 rows"
            ],
            correct: 1,
            explanation: "describe() shows count, mean, std, min, 25%, 50%, 75%, max."
        },
        {
            question: "How do you add a new column 'Total' as the sum of 'A' and 'B'?",
            code: "",
            options: [
                "df['Total'] = df['A'] + df['B']",
                "df.add_column('Total', 'A' + 'B')",
                "df['Total'] = sum('A', 'B')",
                "df.append('Total', df.A + df.B)"
            ],
            correct: 0,
            explanation: "Assigning to a new column name creates it: df['Total'] = df['A'] + df['B']."
        }
    ],
    matplotlib: [
        {
            question: "Which function creates a line plot?",
            code: "import matplotlib.pyplot as plt\nx = [1, 2, 3]\ny = [1, 4, 9]",
            options: [
                "plt.scatter(x, y)",
                "plt.plot(x, y)",
                "plt.line(x, y)",
                "plt.graph(x, y)"
            ],
            correct: 1,
            explanation: "plt.plot() creates a line plot by connecting data points."
        },
        {
            question: "What does plt.show() do?",
            code: "",
            options: [
                "Saves the plot",
                "Displays the plot",
                "Clears the plot",
                "Creates a new figure"
            ],
            correct: 1,
            explanation: "plt.show() displays all open figures. In Jupyter, it's often automatic."
        },
        {
            question: "How do you create subplots in a 2x2 grid?",
            code: "",
            options: [
                "plt.subplot(2, 2)",
                "plt.subplots(2, 2)",
                "plt.grid(2, 2)",
                "plt.layout(2, 2)"
            ],
            correct: 1,
            explanation: "plt.subplots(2, 2) returns fig and axes array for a 2x2 grid."
        },
        {
            question: "Which parameter changes line color?",
            code: "plt.plot(x, y, ____='red')",
            options: ["linestyle", "color", "marker", "width"],
            correct: 1,
            explanation: "The 'color' parameter (or 'c') sets the line color."
        },
        {
            question: "What does plt.savefig('plot.png', dpi=300) do?",
            code: "",
            options: [
                "Shows plot at 300px width",
                "Saves high-resolution image",
                "Sets figure size to 300",
                "Changes plot to 300 DPI display"
            ],
            correct: 1,
            explanation: "dpi=300 sets dots per inch for high-quality print output."
        },
        {
            question: "How do you add a legend to a plot?",
            code: "plt.plot(x, y, label='Line 1')",
            options: [
                "plt.legend()",
                "plt.show_legend()",
                "plt.add_legend()",
                "Legend is automatic"
            ],
            correct: 0,
            explanation: "plt.legend() displays the legend. Labels must be set in plot functions."
        },
        {
            question: "Which plot is best for showing distribution of continuous data?",
            code: "",
            options: ["Bar chart", "Pie chart", "Histogram", "Line plot"],
            correct: 2,
            explanation: "Histograms show the frequency distribution of continuous data using bins."
        },
        {
            question: "What does ax.twinx() create?",
            code: "ax2 = ax.twinx()",
            options: [
                "A twin plot",
                "A second y-axis sharing the same x-axis",
                "Two x-axes",
                "A duplicate plot"
            ],
            correct: 1,
            explanation: "twinx() creates a second y-axis on the right, sharing the same x-axis."
        },
        {
            question: "Which style makes plots look like ggplot2 from R?",
            code: "plt.style.use('____')",
            options: ["seaborn", "ggplot", "bmh", "classic"],
            correct: 1,
            explanation: "'ggplot' style mimics the popular R ggplot2 aesthetic."
        },
        {
            question: "What is the object-oriented approach in Matplotlib?",
            code: "",
            options: [
                "Using plt functions directly",
                "Using fig and ax objects explicitly",
                "Using only pandas plotting",
                "Using seaborn exclusively"
            ],
            correct: 1,
            explanation: "The OO approach uses fig, ax = plt.subplots() for more control."
        }
    ],
    seaborn: [
        {
            question: "What does sns.set_theme() do?",
            code: "import seaborn as sns\nsns.set_theme()",
            options: [
                "Creates a theme park",
                "Sets default visual style for plots",
                "Loads a dataset",
                "Creates a color palette"
            ],
            correct: 1,
            explanation: "set_theme() configures default aesthetics: style, palette, font, etc."
        },
        {
            question: "Which plot shows a distribution with a kernel density estimate?",
            code: "",
            options: [
                "sns.barplot()",
                "sns.histplot(kde=True)",
                "sns.scatterplot()",
                "sns.countplot()"
            ],
            correct: 1,
            explanation: "histplot with kde=True overlays a smooth density curve on the histogram."
        },
        {
            question: "What does the 'hue' parameter do?",
            code: "sns.scatterplot(data=tips, x='total_bill', y='tip', hue='sex')",
            options: [
                "Changes background color",
                "Colors points by a categorical variable",
                "Adjusts brightness",
                "Sets plot title color"
            ],
            correct: 1,
            explanation: "hue colors data points by a categorical column, adding a legend."
        },
        {
            question: "Which plot combines box plot and KDE?",
            code: "",
            options: [
                "sns.boxplot()",
                "sns.violinplot()",
                "sns.stripplot()",
                "sns.swarmplot()"
            ],
            correct: 1,
            explanation: "Violin plots show the distribution shape (KDE) with quartile markers."
        },
        {
            question: "What does sns.heatmap() visualize?",
            code: "sns.heatmap(corr, annot=True)",
            options: [
                "Time series data",
                "Matrix values as colors",
                "Geographic maps",
                "Network graphs"
            ],
            correct: 1,
            explanation: "Heatmaps display matrix data (like correlations) using color intensity."
        },
        {
            question: "Which function creates scatter plots with regression lines?",
            code: "",
            options: [
                "sns.scatterplot()",
                "sns.regplot()",
                "sns.lineplot()",
                "sns.pointplot()"
            ],
            correct: 1,
            explanation: "regplot() adds a regression line with confidence interval to a scatter plot."
        },
        {
            question: "What does sns.pairplot() create?",
            code: "sns.pairplot(iris, hue='species')",
            options: [
                "A single scatter plot",
                "Scatter plots for all variable pairs",
                "A line plot matrix",
                "A bar chart grid"
            ],
            correct: 1,
            explanation: "pairplot creates a grid of scatter plots for every pair of variables."
        },
        {
            question: "Which palette is best for diverging data (positive/negative)?",
            code: "",
            options: ["viridis", "Blues", "coolwarm", "husl"],
            correct: 2,
            explanation: "coolwarm is diverging: blue for negative, white for center, red for positive."
        },
        {
            question: "What does col parameter in sns.lmplot() do?",
            code: "sns.lmplot(data=tips, x='total_bill', y='tip', col='time')",
            options: [
                "Changes column names",
                "Creates separate columns of subplots by category",
                "Sets color",
                "Limits x-axis"
            ],
            correct: 1,
            explanation: "col='column_name' creates subplots in columns split by that category."
        },
        {
            question: "Which function shows value counts as bars?",
            code: "",
            options: [
                "sns.barplot()",
                "sns.countplot()",
                "sns.histplot()",
                "sns.boxplot()"
            ],
            correct: 1,
            explanation: "countplot() is like value_counts() as a bar chart - shows category frequencies."
        }
    ],
    final: [
        {
            question: "Which NumPy function creates an array of evenly spaced numbers over an interval?",
            options: ["np.arange()", "np.linspace()", "np.logspace()", "np.eye()"],
            correct: 1
        },
        {
            question: "In Pandas, what does df.iloc[0, 0] access?",
            options: ["First row, first column by label", "First row, first column by position", "Column named '0'", "Row index 0"],
            correct: 1
        },
        {
            question: "Which Matplotlib function saves a figure to a file?",
            options: ["plt.save()", "plt.savefig()", "plt.export()", "plt.write()"],
            correct: 1
        },
        {
            question: "What Seaborn function creates a heatmap with annotations?",
            options: ["sns.heatmap(annot=True)", "sns.heatmap(labels=True)", "sns.annotated_heatmap()", "sns.heatmap(text=True)"],
            correct: 0
        },
        {
            question: "What is the shape of np.zeros((3, 4, 2))?",
            options: ["(3, 4)", "(3, 4, 2)", "(24,)", "(2, 4, 3)"],
            correct: 1
        },
        {
            question: "How do you drop rows with missing values in Pandas?",
            options: ["df.drop_null()", "df.dropna()", "df.remove_na()", "df.clean()"],
            correct: 1
        },
        {
            question: "Which parameter in plt.plot() sets the line style?",
            options: ["style", "linestyle", "ls", "Both B and C"],
            correct: 3
        },
        {
            question: "What does sns.FacetGrid do?",
            options: ["Creates a grid of plots by category", "Plots faces", "Creates 3D plots", "Sets figure size"],
            correct: 0
        },
        {
            question: "What is broadcasting in NumPy?",
            options: ["Sending data over network", "Stretching arrays to match shapes", "Copying arrays", "Reshaping arrays"],
            correct: 1
        },
        {
            question: "Which Pandas function merges two DataFrames on a common column?",
            options: ["df.join()", "pd.merge()", "df.combine()", "Both A and B"],
            correct: 3
        },
        {
            question: "What does plt.scatter() create?",
            options: ["Line plot", "Scatter plot", "Bar chart", "Histogram"],
            correct: 1
        },
        {
            question: "Which Seaborn plot shows distribution with quartiles and outliers?",
            options: ["sns.violinplot()", "sns.boxplot()", "sns.histplot()", "sns.kdeplot()"],
            correct: 1
        },
        {
            question: "How do you set a random seed in NumPy for reproducibility?",
            options: ["np.seed(42)", "np.random.seed(42)", "np.set_seed(42)", "np.random_state(42)"],
            correct: 1
        },
        {
            question: "What does df.groupby('A').agg({'B': 'mean'}) do?",
            options: ["Sorts by A", "Groups by A and averages B", "Filters by A", "Joins on A"],
            correct: 1
        },
        {
            question: "Which Matplotlib style mimics ggplot2?",
            options: ["seaborn", "ggplot", "bmh", "fivethirtyeight"],
            correct: 1
        },
        {
            question: "What does the 'jitter' parameter in sns.stripplot() do?",
            options: ["Adds random noise to avoid overlap", "Changes colors", "Rotates plot", "Adds labels"],
            correct: 0
        },
        {
            question: "What is the output of np.array([1,2,3]) + np.array([4,5,6])?",
            options: ["[5,7,9]", "[1,2,3,4,5,6]", "15", "Error"],
            correct: 0
        },
        {
            question: "How do you read an Excel file in Pandas?",
            options: ["pd.read_excel()", "pd.read_xlsx()", "pd.load_excel()", "pd.open_excel()"],
            correct: 0
        },
        {
            question: "What does ax.set_yscale('log') do?",
            options: ["Sets y-axis to logarithmic scale", "Adds a legend", "Sets y-label", "Creates a log file"],
            correct: 0
        },
        {
            question: "Which function creates a pairplot grid in Seaborn?",
            options: ["sns.pairgrid()", "sns.pairplot()", "sns.scatter_matrix()", "sns.multiplot()"],
            correct: 1
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================
let currentQuiz = null;
let currentQuestion = 0;
let userAnswers = [];
let quizScores = JSON.parse(localStorage.getItem('pyroyal_scores')) || {};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initNavbar();
    initHero3D();
    initScrollAnimations();
    initTopicCards();
    initVizControls();
    updateProgress();
    updateResults();
    checkFinalUnlock();

    // Initialize 3D visualizations when sections are visible
    initIntersectionObserver();
});

// ============================================
// NAVBAR
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link
        updateActiveNav();
    });

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// HERO 3D ANIMATION (Three.js)
// ============================================
function initHero3D() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
        new THREE.IcosahedronGeometry(0.8, 0),
        new THREE.OctahedronGeometry(0.7, 0),
        new THREE.TetrahedronGeometry(0.9, 0),
        new THREE.BoxGeometry(0.6, 0.6, 0.6),
        new THREE.DodecahedronGeometry(0.7, 0)
    ];

    const material = new THREE.MeshBasicMaterial({
        color: 0xd4af37,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });

    const violetMaterial = new THREE.MeshBasicMaterial({
        color: 0x8b5cf6,
        wireframe: true,
        transparent: true,
        opacity: 0.2
    });

    for (let i = 0; i < 15; i++) {
        const geo = geometries[Math.floor(Math.random() * geometries.length)];
        const mat = Math.random() > 0.5 ? material : violetMaterial;
        const mesh = new THREE.Mesh(geo, mat);

        mesh.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 10 - 5
        );

        mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        mesh.userData = {
            rotSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.5 + 0.5,
            floatOffset: Math.random() * Math.PI * 2
        };

        scene.add(mesh);
        shapes.push(mesh);
    }

    // Add particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xd4af37,
        transparent: true,
        opacity: 0.6
    });

    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);

        const time = Date.now() * 0.001;

        shapes.forEach(shape => {
            shape.rotation.x += shape.userData.rotSpeed.x;
            shape.rotation.y += shape.userData.rotSpeed.y;
            shape.rotation.z += shape.userData.rotSpeed.z;

            shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.002;
        });

        particles.rotation.y = time * 0.05;

        camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ============================================
// SCROLL ANIMATIONS (GSAP)
// ============================================
function initScrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Topic cards stagger
    gsap.utils.toArray('.topics-container').forEach(container => {
        gsap.from(container.children, {
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        });
    });

    // Viz cards
    gsap.utils.toArray('.viz-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

// ============================================
// TOPIC CARDS (3D FLIP)
// ============================================
function initTopicCards() {
    document.querySelectorAll('.topic-card').forEach(card => {
        const flipBtns = card.querySelectorAll('.flip-btn');
        flipBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                card.classList.toggle('flipped');
            });
        });
    });
}

// ============================================
// 3D VISUALIZATIONS FOR LIBRARIES
// ============================================
const vizScenes = {};

function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const canvasId = entry.target.querySelector('canvas')?.id;
                if (canvasId && !vizScenes[canvasId]) {
                    initLibraryViz(canvasId);
                }
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.viz-card').forEach(card => {
        observer.observe(card);
    });
}

function initLibraryViz(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const container = canvas.parentElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    vizScenes[canvasId] = { scene, camera, renderer, objects: [], animationId: null };

    switch(canvasId) {
        case 'numpy3DCanvas':
            createNumpyViz(vizScenes[canvasId]);
            break;
        case 'pandas3DCanvas':
            createPandasViz(vizScenes[canvasId]);
            break;
        case 'matplotlib3DCanvas':
            createMatplotlibViz(vizScenes[canvasId]);
            break;
        case 'seaborn3DCanvas':
            createSeabornViz(vizScenes[canvasId]);
            break;
    }

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
    resizeObserver.observe(container);
}

// NumPy: 3D Array Cube
function createNumpyViz(viz) {
    const { scene, camera, renderer } = viz;
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();

    // Create 3x3x3 cube of small boxes
    const boxGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const goldMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true });
    const violetMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true });
    const fillGold = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.3 });
    const fillViolet = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.3 });

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                const isCenter = x === 0 && y === 0 && z === 0;
                const mat = isCenter ? fillGold : (Math.random() > 0.5 ? fillViolet : fillGold);
                const wireMat = isCenter ? goldMat : violetMat;

                const mesh = new THREE.Mesh(boxGeo, mat);
                mesh.position.set(x * 1.2, y * 1.2, z * 1.2);

                const wire = new THREE.Mesh(boxGeo, wireMat);
                wire.position.copy(mesh.position);
                wire.scale.set(1.01, 1.01, 1.01);

                group.add(mesh);
                group.add(wire);
            }
        }
    }

    scene.add(group);
    viz.objects.push(group);

    function animate() {
        viz.animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.005;
        group.rotation.x += 0.002;
        renderer.render(scene, camera);
    }
    animate();
}

// Pandas: DataFrame Structure
function createPandasViz(viz) {
    const { scene, camera, renderer } = viz;
    camera.position.set(6, 4, 6);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();

    // Create grid representing DataFrame
    const cellGeo = new THREE.BoxGeometry(0.9, 0.9, 0.2);
    const headerMat = new THREE.MeshBasicMaterial({ color: 0xd4af37 });
    const cellMat = new THREE.MeshBasicMaterial({ color: 0x334155 });
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6 });

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 4; col++) {
            const mat = row === 0 ? headerMat : (col === 0 ? highlightMat : cellMat);
            const cell = new THREE.Mesh(cellGeo, mat);
            cell.position.set((col - 1.5) * 1.1, (2 - row) * 1.1, 0);
            group.add(cell);
        }
    }

    scene.add(group);
    viz.objects.push(group);

    function animate() {
        viz.animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.003;
        renderer.render(scene, camera);
    }
    animate();
}

// Matplotlib: 3D Bar Chart
function createMatplotlibViz(viz) {
    const { scene, camera, renderer } = viz;
    camera.position.set(4, 5, 4);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();

    const barGeo = new THREE.BoxGeometry(0.6, 1, 0.6);
    const colors = [0xd4af37, 0x8b5cf6, 0x22c55e, 0xef4444, 0x3b82f6];

    for (let i = 0; i < 5; i++) {
        const height = Math.random() * 2 + 0.5;
        const mat = new THREE.MeshBasicMaterial({ color: colors[i] });
        const bar = new THREE.Mesh(barGeo, mat);
        bar.position.set((i - 2) * 1.2, height / 2 - 1, 0);
        bar.scale.y = height;
        group.add(bar);

        // Add wireframe
        const wire = new THREE.Mesh(barGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }));
        wire.position.copy(bar.position);
        wire.scale.y = height;
        group.add(wire);
    }

    scene.add(group);
    viz.objects.push(group);

    function animate() {
        viz.animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.005;
        renderer.render(scene, camera);
    }
    animate();
}

// Seaborn: Distribution spheres
function createSeabornViz(viz) {
    const { scene, camera, renderer } = viz;
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, 0);

    const group = new THREE.Group();

    // Create bell curve shape with spheres
    const sphereGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const goldMat = new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.7 });
    const violetMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.5 });

    for (let i = -10; i <= 10; i++) {
        const x = i * 0.4;
        const y = Math.exp(-x * x / 4) * 2;
        const mat = Math.abs(i) < 3 ? goldMat : violetMat;
        const sphere = new THREE.Mesh(sphereGeo, mat);
        sphere.position.set(x, y - 1, 0);
        group.add(sphere);
    }

    scene.add(group);
    viz.objects.push(group);

    function animate() {
        viz.animationId = requestAnimationFrame(animate);
        group.rotation.y += 0.003;
        renderer.render(scene, camera);
    }
    animate();
}

// ============================================
// VIZ CONTROLS
// ============================================
function initVizControls() {
    document.querySelectorAll('.viz-controls').forEach(controls => {
        controls.querySelectorAll('.viz-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                controls.querySelectorAll('.viz-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Add a pulse animation to the canvas
                const canvas = controls.parentElement.querySelector('canvas');
                if (canvas) {
                    canvas.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        canvas.style.transform = 'scale(1)';
                    }, 200);
                }
            });
        });
    });
}

// ============================================
// QUIZ SYSTEM
// ============================================
function startQuiz(quizType) {
    if (quizType === 'final' && !isFinalUnlocked()) {
        alert('Complete all library quizzes first to unlock the Final Challenge!');
        return;
    }

    currentQuiz = quizType;
    currentQuestion = 0;
    userAnswers = new Array(quizData[quizType].length).fill(null);

    const modal = document.getElementById('quizModal');
    const title = document.getElementById('quizTitle');

    const titles = {
        numpy: 'NumPy Quiz',
        pandas: 'Pandas Quiz',
        matplotlib: 'Matplotlib Quiz',
        seaborn: 'Seaborn Quiz',
        final: 'Final Challenge'
    };

    title.textContent = titles[quizType];
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    renderQuestion();
    updateQuizProgress();
}

function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentQuiz = null;
}

function renderQuestion() {
    const quizBody = document.getElementById('quizBody');
    const question = quizData[currentQuiz][currentQuestion];

    let html = `
        <div class="question-container">
            <div class="question-text">${currentQuestion + 1}. ${question.question}</div>
    `;

    if (question.code) {
        html += `<div class="question-code">${question.code.replace(/\n/g, '<br>')}</div>`;
    }

    html += `<div class="options-list">`;

    question.options.forEach((option, idx) => {
        const letter = String.fromCharCode(65 + idx);
        const selected = userAnswers[currentQuestion] === idx ? 'selected' : '';
        html += `
            <div class="option ${selected}" onclick="selectOption(${idx})">
                <div class="option-letter">${letter}</div>
                <span>${option}</span>
            </div>
        `;
    });

    html += `</div></div>`;
    quizBody.innerHTML = html;

    // Update buttons
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuestion === quizData[currentQuiz].length - 1 ? 'Finish' : 'Next';
}

function selectOption(index) {
    userAnswers[currentQuestion] = index;

    document.querySelectorAll('.option').forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === index) {
            opt.classList.add('selected');
        }
    });
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === null) {
        // Shake animation for unanswered
        const container = document.querySelector('.question-container');
        container.style.animation = 'none';
        setTimeout(() => {
            container.style.animation = 'shake 0.5s';
        }, 10);
        return;
    }

    if (currentQuestion < quizData[currentQuiz].length - 1) {
        currentQuestion++;
        renderQuestion();
        updateQuizProgress();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
        updateQuizProgress();
    }
}

function updateQuizProgress() {
    const total = quizData[currentQuiz].length;
    const progress = ((currentQuestion + 1) / total) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    document.getElementById('quizCounter').textContent = `${currentQuestion + 1}/${total}`;
}

function finishQuiz() {
    const questions = quizData[currentQuiz];
    let correct = 0;

    userAnswers.forEach((answer, idx) => {
        if (answer === questions[idx].correct) {
            correct++;
        }
    });

    const score = correct;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    // Save score
    quizScores[currentQuiz] = { score, total, percentage, date: new Date().toISOString() };
    localStorage.setItem('pyroyal_scores', JSON.stringify(quizScores));

    // Show results
    showQuizResults(score, total, percentage);
    updateProgress();
    updateResults();
    checkFinalUnlock();
}

function showQuizResults(score, total, percentage) {
    const quizBody = document.getElementById('quizBody');

    let emoji = percentage >= 90 ? '👑' : percentage >= 70 ? '🌟' : percentage >= 50 ? '👍' : '💪';
    let message = percentage >= 90 ? 'Outstanding! You are a true Data Science Royal!' :
                  percentage >= 70 ? 'Great job! Keep mastering those libraries!' :
                  percentage >= 50 ? 'Good effort! Review the topics and try again.' :
                  'Keep learning! Review the notes and come back stronger.';

    const questions = quizData[currentQuiz];
    const correct = score;
    const incorrect = total - score;

    quizBody.innerHTML = `
        <div class="quiz-result">
            <div class="result-emoji">${emoji}</div>
            <div class="result-score">${percentage}%</div>
            <div class="result-message">${message}</div>
            <div class="result-details">
                <div class="result-stat">
                    <div class="result-stat-value">${correct}</div>
                    <div class="result-stat-label">Correct</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-value">${incorrect}</div>
                    <div class="result-stat-label">Incorrect</div>
                </div>
                <div class="result-stat">
                    <div class="result-stat-value">${total}</div>
                    <div class="result-stat-label">Total</div>
                </div>
            </div>
            <button class="btn btn-primary" onclick="closeQuiz()">Close</button>
        </div>
    `;

    document.getElementById('nextBtn').textContent = 'Close';
    document.getElementById('nextBtn').onclick = closeQuiz;
    document.getElementById('prevBtn').style.display = 'none';
}

// ============================================
// PROGRESS TRACKING
// ============================================
function updateProgress() {
    const libraries = ['numpy', 'pandas', 'matplotlib', 'seaborn'];

    libraries.forEach(lib => {
        const score = quizScores[lib];
        const progressEl = document.getElementById(`progress-${lib}`);
        const statusEl = document.getElementById(`status-${lib}`);

        if (score) {
            const pct = (score.score / score.total) * 100;
            progressEl.setAttribute('stroke-dasharray', `${pct}, 100`);
            statusEl.textContent = `${score.score}/${score.total}`;
            statusEl.classList.add('completed');
        }
    });
}

function updateResults() {
    const libraries = ['numpy', 'pandas', 'matplotlib', 'seaborn'];
    let totalScore = 0;
    let totalQuestions = 0;

    libraries.forEach(lib => {
        const score = quizScores[lib];
        const barEl = document.getElementById(`bar-${lib}`);
        const scoreEl = document.getElementById(`score-${lib}`);
        const achEl = document.getElementById(`ach-${lib}`);

        if (score) {
            const pct = (score.score / score.total) * 100;
            barEl.style.width = pct + '%';
            scoreEl.textContent = `${score.score}/${score.total}`;

            totalScore += score.score;
            totalQuestions += score.total;

            // Unlock achievement if score >= 70%
            if (pct >= 70) {
                achEl.classList.add('unlocked');
                achEl.setAttribute('data-locked', 'false');
            }
        }
    });

    // Final quiz
    const finalScore = quizScores['final'];
    if (finalScore) {
        const barEl = document.getElementById('bar-final');
        const scoreEl = document.getElementById('score-final');
        const pct = (finalScore.score / finalScore.total) * 100;
        barEl.style.width = pct + '%';
        scoreEl.textContent = `${finalScore.score}/${finalScore.total}`;
        totalScore += finalScore.score;
        totalQuestions += finalScore.total;

        if (pct >= 70) {
            document.getElementById('ach-final').classList.add('unlocked');
        }
        if (pct === 100) {
            document.getElementById('ach-perfect').classList.add('unlocked');
        }
    }

    // Overall
    if (totalQuestions > 0) {
        const overallPct = Math.round((totalScore / totalQuestions) * 100);
        document.getElementById('overallPercent').textContent = overallPct + '%';
        document.getElementById('overallText').textContent = 
            overallPct >= 80 ? 'Excellent mastery!' :
            overallPct >= 60 ? 'Good progress!' : 'Keep learning!';

        // Animate circle
        const circle = document.getElementById('overallCircle');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (overallPct / 100) * circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 500);
    }
}

function checkFinalUnlock() {
    const unlocked = isFinalUnlocked();
    const finalBtn = document.getElementById('btn-final');
    const finalStatus = document.getElementById('status-final');

    if (unlocked) {
        finalBtn.disabled = false;
        finalBtn.textContent = 'Start Final Challenge';
        finalStatus.textContent = 'Unlocked!';
        finalStatus.classList.remove('locked');
        finalStatus.classList.add('completed');
        finalStatus.style.background = 'rgba(34, 197, 94, 0.2)';
        finalStatus.style.color = 'var(--success)';
    }
}

function isFinalUnlocked() {
    const libraries = ['numpy', 'pandas', 'matplotlib', 'seaborn'];
    return libraries.every(lib => quizScores[lib] !== undefined);
}

// ============================================
// SHAKE ANIMATION FOR CSS
// ============================================
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);

// Add SVG gradient definition for results circle
const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgDefs.setAttribute('width', '0');
svgDefs.setAttribute('height', '0');
svgDefs.innerHTML = `
    <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#d4af37"/>
            <stop offset="100%" style="stop-color:#8b5cf6"/>
        </linearGradient>
    </defs>
`;
document.body.appendChild(svgDefs);
