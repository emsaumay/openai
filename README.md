# Django Image Upload Web Application

This is a simple Django web application that allows users to sign up, log in, and upload images. It uses basic authentication and authorization mechanisms to ensure secure access to user data. The website is styled with Bootstrap for a pleasant user interface.

## Getting Started

To get this project running locally on your machine, follow the steps below.

### Prerequisites

You need to have Python installed on your machine. You can download Python from [here](https://www.python.org/downloads/).

### Installation

First, clone the repository to your local machine:

```
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

Install the required packages:

```
pip install -r requirements.txt
```

### Setting Up the Database

Make migrations and create the database schema:

```
python manage.py makemigrations
python manage.py migrate
```

Create a superuser account for Django admin:

```
python manage.py createsuperuser
```

### Running the Server

To start the development server, run:

```
python manage.py runserver
```

Now, open your web browser and go to `http://127.0.0.1:8000/` to see the application in action.

### Features

- User authentication (sign up, log in, log out)
- Image upload functionality
- Bootstrap styled interface

Enjoy the app!