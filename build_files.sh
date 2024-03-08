# echo "Building project package"
python3 -m pip install -r requirements.txt

# echo "migrating databses.."
python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput

# echo "collecting static file"
python3 manage.py collectstatic --noinput