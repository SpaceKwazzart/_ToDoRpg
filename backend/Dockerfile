FROM python:3.8

COPY ./requirements.txt ./requirements.txt

RUN pip install --upgrade pip && pip install -r requirements.txt

WORKDIR /reachTheTop

COPY ./reachTheTop ./

CMD [ "python", "./manage.py", "runserver", "0.0.0.0:8000"]