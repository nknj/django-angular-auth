# Token Authentication with Django

Tutorial [here](http://blog.nknj.me/token-authentication-django-and-angular)

## First Run Instructions

Clone the repository: `git clone https://github.com/nknj/django-angular-auth.git`

Run it using the following commands:

- backend
```tsh
cd backend
mkvirtualenv your_virtual_env_name
pip install -r requirements.txt
chmod +x manage.py
./manage.py syncdb
./manage.py runserver 0.0.0.0:5000
```

- frontend
```tsh
cd frontend
npm install
bower install
grunt serve
```
