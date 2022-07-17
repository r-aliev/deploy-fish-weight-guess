# Guess Fish Weight deployment version 
## *Have to fix model load to make gunicorn recognzie it. Everything else is perfect.
### Installation

  ```bash
git@github.com:r-aliev/deploy-fish-weight-guess.git
## Assume  you have set up python virtual environment. Create your .env file with your own credentials.
pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver

Finally visit http://127.0.0.1:8000/