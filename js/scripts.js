 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
}

.container {
    width: 80%;
    margin: auto;
}

header {
    background: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
}

header p {
    font-size: 1.2rem;
}

nav ul {
    list-style: none;
    text-align: center;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

section {
    padding: 50px 0;
}

h2 {
    text-align: center;
    margin-bottom: 40px;
    color: #34495e;
}

.profil-img {
    width: 150px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 20px;
}

.timeline {
    border-left: 2px solid #34495e;
    padding-left: 20px;
}

.timeline-item {
    margin-bottom: 30px;
}

.timeline-item h3 {
    margin: 0 0 10px;
}

.timeline-item span {
    color: #7f8c8d;
    font-size: 0.9rem;
}

.skill {
    margin-bottom: 20px;
}

.skill-bar {
    background: #ecf0f1;
    border-radius: 20px;
    overflow: hidden;
}

.skill-level {
    background: #3498db;
    height: 10px;
    border-radius: 20px;
}

.portfolio-grid {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.portfolio-item {
    width: 45%;
    margin-bottom: 20px;
}

.portfolio-item img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

form {
    max-width: 600px;
    margin: 0 auto;
}

form input, form textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

form button {
    display: block;
    width: 100%;
    padding: 10px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background: #2980b9;
}

footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px 0;
}
